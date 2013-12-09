(ns hiccup.platform
  (:require [goog.Uri]
            [goog.string]
            [clojure.string :as str]
            [hiccup.abstr   :refer [ToString -to-str ToURI -to-uri URLEncode -url-encode]]))

(defn make-uri [s]
  (goog.Uri. s))

(defn uri-equal? [one two]
  (= (str one) (str two)))

(defn uri-encode [s encoding]
  (js/encodeURIComponent s))

(defn uri-has-domain? [u]
  (.hasDomain u))

(defn uri-get-path [u]
  (.getPath u))

(defn starts-with [s start]
  (goog.string/startsWith s start))

(defn ends-with [s end]
  (goog.string/endsWith s end))

(extend-protocol URLEncode
  cljs.core.PersistentArrayMap
  (-url-encode [m encoding]
    (str/join "&"
              (for [[k v] m]
                (str (-url-encode k encoding) "=" (-url-encode v encoding)))))

  string
  (-url-encode [s encoding] (uri-encode s encoding)))

(extend-type default
  URLEncode
  (-url-encode [x encoding] (-url-encode (-to-str x) encoding)))


(extend-type default
  ToString
  (-to-str [k] (str k)))

(extend-protocol ToString
  cljs.core.Keyword
  (-to-str [k] (name k))

  string
  (-to-str [this] this)

  nil
  (-to-str [_] ""))

(defn extend-to-string-with-uri-type [f]
  (extend-type goog.Uri
    ToString
    (-to-str [this] (f this))))

(extend-protocol ToURI

  string
  (-to-uri [s] (make-uri s)))

(defn- named? [thing]
  (satisfies? INamed thing))
