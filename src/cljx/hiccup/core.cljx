(ns hiccup.core
  "Library for rendering a tree of vectors into a string of HTML.
  Pre-compiles where possible for performance."
  (:use [hiccup.util     :only [escape-html]])
  (:require [hiccup.compiler :as comp]))

(defmacro html
  "Render Clojure data structures to a string of HTML."
  [options & content]
  (if-let [mode (and (map? options) (:mode options))]
    (binding [comp/*html-mode* mode]
      `(binding [comp/*html-mode* ~mode]
         (str ~@(comp/compile-seq content))))
    `(str ~@(comp/compile-seq (cons options content)))))

(def ^{:doc "Alias for hiccup.util/escape-html"}
  h escape-html)
