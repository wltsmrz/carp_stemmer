# carp_stemmer

Fully compliant [Porter stemmer](https://tartarus.org/martin/PorterStemmer/) in carp

```clojure
(load "https://github.com/wltsmrz/carp_stemmer@v0.2.0")

(defn main []
  (IO.println &(PorterStemmer.stem "greetings")))
```
