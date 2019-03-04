# routeparams from url
Takes a route definition of the form ```/abc/:a/:b/:c``` and an actual url e.g. ```/abc/1/2/test``` and returns an object mapping ```{a: 1, b: 2, c: "test"}```.

Relies on es2018 RegExp named capture groups.

## License
MIT