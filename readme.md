## Install

```
$ npm install --save pretty-file-bytes
```

## Usage

```js
const prettyBytes = require('pretty-file-bytes');

prettyBytes(1337);
//=> '1.34 kB'

prettyBytes(100);
//=> '100 B'

prettyBytes(1020,'B');
//=> '1020 B'

prettyBytes(1020,'KB');
//=> '1.02 KB'
```
