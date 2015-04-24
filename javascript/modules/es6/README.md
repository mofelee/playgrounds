#method 1 (browserify babel plugin)
browserify src/main.js -t babelify -o build/bundle.js

#method 2 (babel manually transpile to commonjs or amd)
##npm install -g babel
babel --modules common src/zoo.js -o build/zoo-commonjs.es6
babel --modules amd src/zoo.js -o build/zoo-amd.es6