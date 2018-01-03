## Install

```
$ npm install --save pretty-byte
```

## Usage

```js
const prettyByte = require('pretty-byte');

prettyByte(1337);
//=> '1.34 kB'

prettyByte(100);
//=> '100 B'

prettyByte(1020,'B');
//=> '1020 B'

prettyByte(1020,'KB');
//=> '1.02 KB'
```
