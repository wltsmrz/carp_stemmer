# carp_stemmer

[Porter stemmer](https://tartarus.org/martin/PorterStemmer/) in Carp. Tested
against 23531-word list from official site.

```clojure
(load "https://github.com/wltsmrz/carp_stemmer@v0.3.0")

(defn main []
  (IO.println &(Stemmer.stem "greetings")))
```
