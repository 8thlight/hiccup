(ns hiccup.util
  "Utility functions for Hiccup."
  (:use     [hiccup.abstr    :only [-to-str -to-uri -url-encode]]
            [hiccup.platform :only [extend-to-string-with-uri-type
                                    make-uri
                                    uri-encode
                                    uri-has-domain?
                                    uri-get-path
                                    starts-with
                                    ends-with]])
  (:require [clojure.string  :as str]))

(def ^:dynamic *base-url* nil)

(defmacro with-base-url
  "Sets a base URL that will be prepended onto relative URIs. Note that for this
  to work correctly, it needs to be placed outside the html macro."
  [base-url & body]
  `(binding [*base-url* ~base-url]
     ~@body))

(defn- uri-to-str [u base-url]
  (if (or (uri-has-domain? u)
          (nil? (uri-get-path u))
          (not (-> (uri-get-path u) (starts-with "/"))))
    (str u)
    (let [base (str base-url)]
      (if (ends-with base "/")
        (str (subs base 0 (dec (count base))) u)
        (str base u)))))

(extend-to-string-with-uri-type #(uri-to-str % *base-url*))

(def
  ^{:doc "Convert a value into a String."}
  to-str -to-str)

(defn as-str
  "Converts its arguments into a string using to-str."
  [& xs]
  (apply str (map to-str xs)))

(def
  ^{:doc "Convert a value into a URI."}
  to-uri -to-uri)

(defn escape-html
  "Change special characters into HTML character entities."
  [text]
  (.. (as-str text)
    (replace "&"  "&amp;")
    (replace "<"  "&lt;")
    (replace ">"  "&gt;")
    (replace "\"" "&quot;")))

(defmacro with-encoding
  "Sets a default encoding for URL encoding strings. Defaults to UTF-8."
  [encoding & body]
  `(binding [*encoding* ~encoding]
     ~@body))

(def ^:dynamic *encoding* "UTF-8")

(defn url-encode
  "Turn a value into a URL-encoded string."
  [s]
  (-url-encode s *encoding*))

(defn url
  "Creates a URI instance from a variable list of arguments and an optional
  parameter map as the last argument. For example:
    (url \"/group/\" 4 \"/products\" {:page 9})
    => \"/group/4/products?page=9\""
  [& args]
  (let [params (last args), args (butlast args)]
    (to-uri
     (str (apply str args)
          (if (map? params)
            (str "?" (url-encode params))
            params)))))

