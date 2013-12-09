#+clj
(ns hiccup.test.element
  (:use clojure.test
        hiccup.element
        hiccup.core
        hiccup.platform))

#+cljs
(ns hiccup.test.element
  (:require-macros [cemerick.cljs.test :refer [is deftest]]
                   [hiccup.core :refer [html]])
  (:require        [hiccup.element     :refer [javascript-tag link-to mail-to unordered-list ordered-list]]
                   [hiccup.platform    :refer [make-uri]]))

(deftest javascript-tag-test
  (is (= (javascript-tag "alert('hello');")
         [:script {:type "text/javascript"}
          "//<![CDATA[\nalert('hello');\n//]]>"])))

(deftest link-to-test
  (is (= (html (link-to "/"))
         (html [:a {:href (make-uri "/")} nil])))
  (is (= (html (link-to "/" "foo"))
         (html [:a {:href (make-uri "/")} (list "foo")])))
  (is (= (html (link-to "/" "foo" "bar"))
         (html [:a {:href (make-uri "/")} (list "foo" "bar")]))))

(deftest mail-to-test
  (is (= (mail-to "foo@example.com")
         [:a {:href "mailto:foo@example.com"} "foo@example.com"]))
  (is (= (mail-to "foo@example.com" "foo")
         [:a {:href "mailto:foo@example.com"} "foo"])))

(deftest unordered-list-test
  (is (= (unordered-list ["foo" "bar" "baz"])
         [:ul (list [:li "foo"]
                    [:li "bar"]
                    [:li "baz"])])))

(deftest ordered-list-test
  (is (= (ordered-list ["foo" "bar" "baz"])
         [:ol (list [:li "foo"]
                    [:li "bar"]
                    [:li "baz"])])))

