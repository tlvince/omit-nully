# omit-nully

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[travis-url]: https://travis-ci.org/tlvince/omit-nully
[travis-image]: https://img.shields.io/travis/tlvince/omit-nully.svg
[npm-url]: https://www.npmjs.com/package/omit-nully
[npm-image]: https://img.shields.io/npm/v/omit-nully.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/omit-nully.svg

> Omit null or undefined object values

```js
const omitNully = require('omit-nully')
const obj = {
  a: 'foo',
  b: undefined,
  c: null,
  d: 'bar'
}
omitNully(obj)
//=> {a: 'foo', d: 'bar'}
```

## Installation

```shell
npm install --save omit-nully
```

## Author

© 2016 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
