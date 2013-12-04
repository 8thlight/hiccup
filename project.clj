(defproject hiccup "1.0.4"
  :description "A fast library for rendering HTML in Clojure"
  :url "http://github.com/weavejester/hiccup"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2080"]]

  :plugins [[codox "0.6.4"]
            [lein-cljsbuild "1.0.0"]
            [com.keminglabs/cljx "0.3.1"]]

  :codox {:exclude [hiccup.compiler]
          :src-dir-uri "http://github.com/weavejester/hiccup/blob/1.0.4"
          :src-linenum-anchor-prefix "L"}

  :jar-exclusions [#"\.cljx"]

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
                   :rules :cljs}]}

  :source-paths ["target/generated/src/clj" "src/clj"]

  :resource-paths ["target/generated/src/cljs"]

  :test-paths ["target/generated/test/clj" "test/clj"]

  :cljsbuild ~(let [test-command ["bin/cljs-test" "target/unit-test.js"]]
                {:builds {:dev {:source-paths ["target/generated/src/cljs" "src/cljs" "target/generated/test/cljs" "test/cljs"]
                                :compiler {:output-to "target/unit-test.js"
                                           :optimizations :whitespace
                                           :pretty-print true}
                                :notify-command test-command}}
                 :test-commands {"unit" test-command}})

  :profiles {:dev {:dependencies [[com.keminglabs/cljx "0.3.1"]
                                  [prismatic/cljs-test "0.0.6"]]}
             :1.3 {:dependencies [[org.clojure/clojure "1.3.0"]]}
             :1.4 {:dependencies [[org.clojure/clojure "1.4.0"]]}
             :1.5 {:dependencies [[org.clojure/clojure "1.5.1"]]}})
