(ns hiccup.compiler
  (:use [hiccup.renderer :only [render-element normalize-element container-tags render-attr-map end-tag]]))

(defn- unevaluated?
  "True if the expression has not been evaluated."
  [expr]
  (or (symbol? expr)
      (and (seq? expr)
           (not= (first expr) `quote))))

(defn- compile-attr-map
  "Returns an unevaluated form that will render the supplied map as HTML
  attributes."
  [attrs]
  (if (some unevaluated? (mapcat identity attrs))
    `(hiccup.renderer/render-attr-map ~attrs)
    (render-attr-map attrs)))

(defn- literal?
  "True if x is a literal value that can be rendered as-is."
  [x]
  (and (not (unevaluated? x))
       (or (not (or (vector? x) (map? x)))
           (every? literal? x))))

(defn- not-hint?
  "True if x is not hinted to be the supplied type."
  [x type]
  (if-let [hint (-> x meta :tag)]
    (not (isa? (eval hint) type))))

(defn- hint?
  "True if x is hinted to be the supplied type."
  [x type]
  (if-let [hint (-> x meta :tag)]
    (isa? (eval hint) type)))

(defn- form-name
  "Get the name of the supplied form."
  [form]
  (if (and (seq? form) (symbol? (first form)))
    (name (first form))))

(defn- not-implicit-map?
  "True if we can infer that x is not a map."
  [x]
  (or (= (form-name x) "for")
      (not (unevaluated? x))
      (not-hint? x java.util.Map)))

(defn- element-compile-strategy
  "Returns the compilation strategy to use for a given element."
  [[tag attrs & content :as element]]
  (cond
    (every? literal? element)
    ::all-literal                    ; e.g. [:span "foo"]
    (and (literal? tag) (map? attrs))
    ::literal-tag-and-attributes     ; e.g. [:span {} x]
    (and (literal? tag) (not-implicit-map? attrs))
    ::literal-tag-and-no-attributes  ; e.g. [:span ^String x]
    (literal? tag)
    ::literal-tag                    ; e.g. [:span x]
    :else
    ::default))                      ; e.g. [x]

(declare compile-seq)

(defmulti compile-element
  "Returns an unevaluated form that will render the supplied vector as a HTML
  element."
  {:private true}
  element-compile-strategy)

(defmethod compile-element ::all-literal
  [element]
  (render-element (eval element)))

(defmethod compile-element ::literal-tag-and-attributes
  [[tag attrs & content]]
  (let [[tag attrs _] (normalize-element [tag attrs])]
    (if (or content (container-tags tag))
      `(str ~(str "<" tag) ~(compile-attr-map attrs) ">"
            ~@(compile-seq content)
            ~(str "</" tag ">"))
      `(str "<" ~tag ~(compile-attr-map attrs) ~(end-tag)))))

(defmethod compile-element ::literal-tag-and-no-attributes
  [[tag & content]]
  (compile-element (apply vector tag {} content)))

(defmethod compile-element ::literal-tag
  [[tag attrs & content]]
  (let [[tag tag-attrs _] (normalize-element [tag])
        attrs-sym         (gensym "attrs")]
    `(let [~attrs-sym ~attrs]
       (if (map? ~attrs-sym)
         ~(if (or content (container-tags tag))
            `(str ~(str "<" tag)
                  (hiccup.renderer/render-attr-map (merge ~tag-attrs ~attrs-sym)) ">"
                  ~@(compile-seq content)
                  ~(str "</" tag ">"))
            `(str ~(str "<" tag)
                  (hiccup.renderer/render-attr-map (merge ~tag-attrs ~attrs-sym))
                  ~(end-tag)))
         ~(if (or attrs (container-tags tag))
            `(str ~(str "<" tag (render-attr-map tag-attrs) ">")
                  ~@(compile-seq (cons attrs-sym content))
                  ~(str "</" tag ">"))
            (str "<" tag (render-attr-map tag-attrs) (end-tag)))))))

(defmethod compile-element :default
  [element]
  `(hiccup.renderer/render-element
       [~(first element)
        ~@(for [x (rest element)]
            (if (vector? x)
              (compile-element x)
              x))]))

(declare compile-html)

(defmulti compile-form
  "Pre-compile certain standard forms, where possible."
  {:private true}
  form-name)

(defmethod compile-form "for"
  [[_ bindings body]]
  `(apply str (for ~bindings ~(compile-html body))))

(defmethod compile-form "if"
  [[_ condition & body]]
  `(if ~condition ~@(for [x body] (compile-html x))))

(defmethod compile-form :default
  [expr]
  `(hiccup.renderer/render-html ~expr))

(defn- compile-seq
  "Compile a sequence of data-structures into HTML."
  [content]
  (doall (for [expr content]
           (cond
             (vector? expr) (compile-element expr)
             (literal? expr) expr
             (hint? expr String) expr
             (hint? expr Number) expr
             (seq? expr) (compile-form expr)
             :else `(hiccup.renderer/render-html ~expr)))))

(defn- collapse-strs
  "Collapse nested str expressions into one, where possible."
  [expr]
  (if (seq? expr)
    (cons
      (first expr)
      (mapcat
        #(if (and (seq? %) (symbol? (first %)) (= (first %) (first expr) `str))
           (rest (collapse-strs %))
           (list (collapse-strs %)))
        (rest expr)))
    expr))

(defn compile-html
  "Pre-compile data structures into HTML where possible."
  [& content]
  (collapse-strs `(str ~@(compile-seq content))))
