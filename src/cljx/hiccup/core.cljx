(ns hiccup.core
  "Library for rendering a tree of vectors into a string of HTML.
  Pre-compiles where possible for performance."
  (:use [hiccup.compiler :only [compile-seq *html-mode*]]
        [hiccup.util     :only [escape-html]]))

(defmacro html
  "Render Clojure data structures to a string of HTML."
  [options & content]
  (if-let [mode (and (map? options) (:mode options))]
    (binding [*html-mode* mode]
      `(binding [*html-mode* ~mode]
         (str ~@(compile-seq content))))
    `(str ~@(compile-seq (cons options content)))))

(def ^{:doc "Alias for hiccup.util/escape-html"}
  h escape-html)
