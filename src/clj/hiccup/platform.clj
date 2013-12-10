(ns hiccup.platform
  (:use     [hiccup.abstr   :only [ToString -to-str ToURI -to-uri URLEncode -url-encode]])
  (:require [clojure.string :as   str])
  (:import java.net.URI
           java.net.URLEncoder
           clojure.lang.Named))

(defn make-uri [s]
  (java.net.URI. s))

(defn uri-equal? [one two]
  (= one two))

(defn uri-encode [s encoding]
  (java.net.URLEncoder/encode s encoding))

(defn uri-has-domain? [uri]
  (not (nil? (.getHost uri))))

(defn uri-get-path [uri]
  (.getPath uri))

(defn starts-with [s start]
  (.startsWith s start))

(defn ends-with [s end]
  (.endsWith s end))

(extend-protocol ToString
  clojure.lang.Keyword
  (-to-str [this#] (name this#))

  clojure.lang.Ratio
  (-to-str [this#] (str (float this#)))

  Object
  (-to-str [this#] (str this#))

  nil
  (-to-str [this#] ""))

(defn extend-to-string-with-uri-type [f]
  (extend-type java.net.URI
    ToString
    (-to-str [this] (f this))))

(extend-protocol ToURI
  java.net.URI
  (-to-uri [u] u)

  String
  (-to-uri [s] (make-uri s)))

(extend-protocol URLEncode
  String
  (-url-encode [s encoding] (uri-encode s encoding))

  java.util.Map
  (-url-encode [m encoding]
    (str/join "&"
              (for [[k v] m]
                (str (-url-encode k encoding) "=" (-url-encode v encoding)))))

  Object
  (-url-encode [x encoding] (-url-encode (-to-str x) encoding)))

(defn named? [thing]
  (isa? (type thing) clojure.lang.Named))

(defn make-illegal-arguement-exception [msg]
  (java.lang.IllegalArgumentException. msg))
