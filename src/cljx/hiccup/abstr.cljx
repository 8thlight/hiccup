(ns hiccup.abstr)

(defprotocol ToString
  (-to-str [x]))

(defprotocol ToURI
  (-to-uri [x]))

(defprotocol URLEncode
  (-url-encode [x encoding]))
