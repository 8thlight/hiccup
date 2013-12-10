(ns hiccup.renderer
  (:use     [hiccup.util     :only [escape-html as-str]]
            [hiccup.platform :only [named? make-illegal-arguement-exception]])
  (:require [clojure.string  :as   str]))

(def ^:dynamic *html-mode* :xml)

(defn- xml-mode? []
  (= *html-mode* :xml))

(defn end-tag []
  (if (xml-mode?) " />" ">"))

(defn- xml-attribute [name value]
  (str " " (as-str name) "=\"" (escape-html value) "\""))

(defn- render-attribute [[name value]]
  (cond
    (true? value)
    (if (xml-mode?)
      (xml-attribute name name)
      (str " " (as-str name)))
    (not value)
    ""
    :else
    (xml-attribute name value)))

(defn render-attr-map [attrs]
  (apply str
         (sort (map render-attribute attrs))))

(def ^{:doc "A list of elements that need an explicit ending tag when rendered."}
  container-tags
  #{"a" "article" "aside" "b" "body" "canvas" "dd" "div" "dl" "dt" "em" "fieldset"
    "footer" "form" "h1" "h2" "h3" "h4" "h5" "h6" "head" "header" "hgroup" "html"
    "i" "iframe" "label" "li" "nav" "object" "ol" "option" "pre" "section" "select"
    "script" "span" "strong" "style" "table" "textarea" "title" "ul" "video"})

(defn- merge-attributes [{:keys [id class]} map-attrs]
  (->> map-attrs
    (merge (if id {:id id}))
    (merge-with #(if %1 (str %1 " " %2) %2) (if class {:class class}))))

(def ^{:doc "Regular expression that parses a CSS-style id and class from an element name."
       :private true}
  re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")

(defn normalize-element
  "Ensure an element vector is of the form [tag-name attrs content]."
  [[tag & content]]
  (when (not (or (keyword? tag) (symbol? tag) (string? tag)))
          (throw (make-illegal-arguement-exception (str tag " is not a valid element name."))))
  (let [[_ tag id class] (re-matches re-tag (as-str tag))
        tag-attrs        {:id id
                          :class (if class (str/replace class "." " "))}
        map-attrs        (first content)]
    (if (map? map-attrs)
      [tag (merge-attributes tag-attrs map-attrs) (next content)]
      [tag tag-attrs content])))

(declare render-html)
(declare render-element)

(defn render-html [thing]
  (cond
    (nil? thing) ""
    (string? thing) thing
    (vector? thing) (render-element thing)
    (seq? thing) (apply str (map render-html thing))
    (named? thing) (name thing)
    :else (str thing)))

(defn render-element
  "Render an element vector as a HTML element."
  [element]
  (let [[tag attrs content] (normalize-element element)]
    (if (or content (container-tags tag))
      (str "<" tag (render-attr-map attrs) ">"
           (render-html content)
           "</" tag ">")
      (str "<" tag (render-attr-map attrs) (end-tag)))))
