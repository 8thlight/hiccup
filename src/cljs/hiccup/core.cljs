(ns hiccup.core
  "Library for rendering a tree of vectors into a string of HTML.
  Pre-compiles where possible for performance."
  (:require [hiccup.util :refer [escape-html]]
            [hiccup.renderer]))

(def ^{:doc "Alias for hiccup.util/escape-html"}
  h escape-html)
