# react-jade-helper

react-jade wrapper for `gulp watch`

## Installation

```
$ npm i react-jade-helper react-jade -D
```

## Usage

```js
var browserify = require('browserify');
var watchify = require('watchify');

bundler = watchify(browserify(config, watchify.args));

bundler.transform('react-jade-helper');
```
