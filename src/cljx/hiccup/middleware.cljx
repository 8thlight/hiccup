#+clj
(ns hiccup.middleware
  "Ring middleware functions for Hiccup."
  (:use [hiccup.util :only [with-base-url]]))

#+cljs
(ns hiccup.middleware
  "Ring middleware functions for Hiccup."
  (:require-macros [hiccup.util :refer [with-base-url]]))

(defn wrap-base-url
  "Ring middleware that wraps the handler in the with-base-url function. The
  base URL may be specified as an argument. Otherwise, the :context key on the
  request map is used."
  [handler & [base-url]]
  (fn [request]
    (with-base-url (or base-url (:context request))
                   (handler request))))
