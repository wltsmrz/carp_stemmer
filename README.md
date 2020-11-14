
[Porter stemmer](https://tartarus.org/martin/PorterStemmer/) in carp

```clojure
(load "https://github.com/wltsmrz/carp_stemmer@v0.1.0")

(defn main []
  (IO.println &(stem @"greetings")))
```

