#+clj
(ns hiccup.def
  "Macros for defining functions that generate HTML"
  (:use hiccup.core))

#+cljs
(ns hiccup.def
  "Macros for defining functions that generate HTML"
  (:require-macros [hiccup.core :refer [html]]))

(defn- split-fhead-fbody [fdecl]
  (split-with #(not (or (list? %) (vector? %))) fdecl))

(defmacro defhtml
  "Define a function, but wrap its output in an implicit html macro."
  [name & fdecl]
  (let [[fhead fbody] (split-fhead-fbody fdecl)
        wrap-html     (fn [[args & body]] `(~args (html ~@body)))]
    `(defn ~name
       ~@fhead
       ~@(if (vector? (first fbody))
           (wrap-html fbody)
           (map wrap-html fbody)))))

(defmacro defelem
  "Defines a function that will return a element vector. If the first argument
  passed to the resulting function is a map, it merges it with the attribute
  map of the returned element value."
  [name & fdecl]
  (let [[fhead fbody] (split-fhead-fbody fdecl)]
    `(defn ~name
       ~@fhead
       [& args#]
       (let [func# (fn ~@fbody)]
         (if (map? (first args#))
           (let [[tag# & body#] (apply func# (rest args#))]
             (if (map? (first body#))
               (apply vector tag# (merge (first body#) (first args#)) (rest body#))
               (apply vector tag# (first args#) body#)))
           (apply func# args#))))))
