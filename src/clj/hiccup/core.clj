(ns hiccup.core
  "Library for rendering a tree of vectors into a string of HTML.
  Pre-compiles where possible for performance."
  (:use [hiccup.util     :only [escape-html]]
        [hiccup.renderer :only [*html-mode*]]
        [hiccup.compiler :only [compile-html]]))

(defmacro html
  "Render Clojure data structures to a string of HTML."
  [options & content]
  (if-let [mode (and (map? options) (:mode options))]
    (binding [*html-mode* mode]
      `(binding [hiccup.renderer/*html-mode* ~mode]
         ~(apply compile-html content)))
    (apply compile-html options content)))

(def ^{:doc "Alias for hiccup.util/escape-html"}
  h escape-html)
