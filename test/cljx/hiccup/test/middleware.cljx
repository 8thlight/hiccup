#+clj
(ns hiccup.test.middleware
  (:use clojure.test
        hiccup.middleware
        hiccup.util))

#+cljs
(ns hiccup.test.middleware
  (:require-macros [cemerick.cljs.test :refer [is deftest]])
  (:require        [hiccup.middleware  :refer [wrap-base-url]]
                   [hiccup.util        :refer [url to-str]]))

(defn test-handler [request]
  {:status  200
   :headers {"Content-Type" "text/html"}
   ;:body    (html [:html [:body (link-to "/bar" "bar")]])
   :body    (to-str (url "/bar"))
   })

(deftest test-wrap-base-url
  (let [resp ((wrap-base-url test-handler "/foo") {})]
    (is (= (:body resp)
           "/foo/bar"))))
