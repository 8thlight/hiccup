#+clj
(ns hiccup.test.page
  (:use clojure.test
        hiccup.page
        hiccup.core
        hiccup.platform))

#+cljs
(ns hiccup.test.page
  (:require-macros [cemerick.cljs.test :refer [deftest is testing]]
                   [hiccup.page        :refer [xhtml html5 html4]]
                   [hiccup.core        :refer [html]])
  (:require        [hiccup.page        :refer [include-js include-css]]
                   [hiccup.platform    :refer [make-uri]]))

(deftest html4-test
  (is (= (html4 [:body [:p "Hello" [:br] "World"]])
         (str "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01//EN\" "
              "\"http://www.w3.org/TR/html4/strict.dtd\">\n"
              "<html><body><p>Hello<br>World</p></body></html>"))))

(deftest xhtml-test
  (is (= (xhtml [:body [:p "Hello" [:br] "World"]])
         (str "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"
              "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" "
              "\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n"
              "<html xmlns=\"http://www.w3.org/1999/xhtml\">"
              "<body><p>Hello<br />World</p></body></html>")))
  (is (= (xhtml {:lang "en"} [:body "Hello World"])
         (str "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"
              "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" "
              "\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n"
              "<html lang=\"en\" xml:lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\">"
              "<body>Hello World</body></html>")))
  (is (= (xhtml {:encoding "ISO-8859-1"} [:body "Hello World"])
         (str "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n"
              "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" "
              "\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n"
              "<html xmlns=\"http://www.w3.org/1999/xhtml\">"
              "<body>Hello World</body></html>"))))

(deftest html5-test
  (testing "HTML mode"
    (is (= (html5 [:body [:p "Hello" [:br] "World"]])
           "<!DOCTYPE html>\n<html><body><p>Hello<br>World</p></body></html>"))
    (is (= (html5 {:lang "en"} [:body "Hello World"])
           "<!DOCTYPE html>\n<html lang=\"en\"><body>Hello World</body></html>"))
    (is (= (html5 {:prefix "og: http://ogp.me/ns#"}
                  [:body "Hello World"])
           (str "<!DOCTYPE html>\n"
                "<html prefix=\"og: http://ogp.me/ns#\">"
                "<body>Hello World</body></html>")))
    (is (= (html5 {:prefix "og: http://ogp.me/ns#"
                   :lang "en"}
                  [:body "Hello World"])
           (str "<!DOCTYPE html>\n"
                "<html lang=\"en\" prefix=\"og: http://ogp.me/ns#\">"
                "<body>Hello World</body></html>"))))
  (testing "XML mode"
    (is (= (html5 {:xml? true} [:body [:p "Hello" [:br] "World"]])
           (str "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"
                "<!DOCTYPE html>\n<html xmlns=\"http://www.w3.org/1999/xhtml\">"
                "<body><p>Hello<br />World</p></body></html>")))
    (is (= (html5 {:xml? true, :lang "en"} [:body "Hello World"])
           (str "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"
                "<!DOCTYPE html>\n"
                "<html lang=\"en\" xml:lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\">"
                "<body>Hello World</body></html>")))
    (is (= (html5 {:xml? true,
                   "xml:og" "http://ogp.me/ns#"} [:body "Hello World"])
           (str "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"
                "<!DOCTYPE html>\n"
                "<html xml:og=\"http://ogp.me/ns#\" xmlns=\"http://www.w3.org/1999/xhtml\">"
                "<body>Hello World</body></html>")))
    (is (= (html5 {:xml? true, :lang "en"
                   "xml:og" "http://ogp.me/ns#"} [:body "Hello World"])
           (str "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"
                "<!DOCTYPE html>\n"
                "<html lang=\"en\" xml:lang=\"en\" xml:og=\"http://ogp.me/ns#\" xmlns=\"http://www.w3.org/1999/xhtml\">"
                "<body>Hello World</body></html>")))))

(deftest include-js-test
  (is (= (html (include-js "foo.js"))
         (html (list [:script {:type "text/javascript", :src (make-uri "foo.js")}]))))
  (is (= (html (include-js "foo.js" "bar.js"))
         (html (list [:script {:type "text/javascript", :src (make-uri "foo.js")}]
                     [:script {:type "text/javascript", :src (make-uri "bar.js")}])))))

(deftest include-css-test
  (is (= (html (include-css "foo.css"))
         (html (list [:link {:type "text/css", :href (make-uri "foo.css"), :rel "stylesheet"}]))))
  (is (= (html (include-css "foo.css" "bar.css"))
         (html (list [:link {:type "text/css", :href (make-uri "foo.css"), :rel "stylesheet"}]
                     [:link {:type "text/css", :href (make-uri "bar.css"), :rel "stylesheet"}])))))
