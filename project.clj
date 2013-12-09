(defproject com.8thlight/hiccup "1.0.4"
  :description "A fast library for rendering HTML in Clojure"
  :url "http://github.com/weavejester/hiccup"

  :source-paths   ["target/generated/src/clj" "src/clj" ]
  :resource-paths ["target/generated/src/cljs" "src/cljs"]
  :test-paths     ["target/generated/test/clj" "test/clj"]

  :prep-tasks ["cljx"]

  :profiles {:dev {:dependencies [[org.clojure/clojure "1.5.1"]]
                   :plugins [[codox "0.6.4"]]}
             :1.3 {:dependencies [[org.clojure/clojure "1.3.0"]]}
             :1.4 {:dependencies [[org.clojure/clojure "1.4.0"]]}
             :1.5 {:dependencies [[org.clojure/clojure "1.5.1"]]}

             :cljs {:dependencies [[org.clojure/clojure "1.5.1"]
                                   [org.clojure/clojurescript "0.0-2080"]
                                   [com.keminglabs/cljx "0.3.1"]
                                   [lein-cljsbuild "1.0.0"]
                                   [com.cemerick/clojurescript.test "0.2.1"]]
                    :plugins [[lein-cljsbuild "1.0.0"]
                              [com.keminglabs/cljx "0.3.1"]]
                    :aliases {"test" ["do" ["cljsbuild" "clean"] ["cljsbuild" "once"]]}}}

  :aliases {"cljsbuild" ["with-profile" "cljs" "cljsbuild"]
            "cljx"      ["with-profile" "cljs" "cljx"]}

  :codox {:exclude [hiccup.compiler hiccup.platform hiccup.abstr]
          :sources ["target/generated/src/clj" "src/clj"]
          :src-dir-uri "http://github.com/weavejester/hiccup/blob/1.0.4"
          :src-linenum-anchor-prefix "L"}

  :cljsbuild ~(let [test-command ["bin/cljs-test" "target/unit-test.js"]]
                {:builds {:dev {:source-paths ["target/generated/src/cljs" "src/cljs" "target/generated/test/cljs" "test/cljs"]
                                :compiler {:output-to "target/unit-test.js"
                                           :pretty-print true}
                                :notify-command test-command}}
                 :test-commands {"unit" test-command}})

  :cljx {:builds [{:source-paths ["src/cljx"]
                   :output-path "target/generated/src/clj"
                   :rules :clj}
                  {:source-paths ["src/cljx"]
                   :output-path "target/generated/src/cljs"
                   :rules :cljs}
                  {:source-paths ["test/cljx"]
                   :output-path "target/generated/test/clj"
                   :rules :clj}
                  {:source-paths ["test/cljx"]
                   :output-path "target/generated/test/cljs"
                   :rules :cljs}]})
