# Hello Browserify
[http://browserify.org/]

## Install Browserify

`npm install -g browserify`

## Create main.js

```
var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));
```

## Install npm module

`npm install uniq`

## Browserify/Bundle code

`browserify main.js -o bundle.js`

## Add to html file

`<script src="bundle.js"></script>`
