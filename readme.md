# electron-watch [![Build Status](https://travis-ci.org/electronkr/electron-watch.svg?branch=master)](https://travis-ci.org/ragingwind/electron-watch)

> Watch changes in Electron App


## Install

```
$ npm install --save electron-watch
```


## Usage

```js
const app = require('app');

require('electron-watch');

var mainWindow = new BrowserWindow({
	width: 800,
	height: 600
});

app.watch(mainWindow[, options]);
```


## API

### start(mainWindow\[, options\])

watches `options.root` directory, except for `options.ignored`,
and reloads electron app when changed.

relaunches electron app when `options.index.js` is changed.

param              | description
-------------------|-------------------------------
mainWindow         | *Required*. See [browser-window].
options            | *Optional*. See below.

#### options
- Type: `object`  
- Default:
```js
{
	root: '.',         // watch root directory.
	entry: 'index.js', // relaunch electron app when this file is changed.
	ignored: [         // string, regexp and/or glob are/is supported.
		'node_modules',
		/[\/\\]\./,
		'build',
		'.*.swp'
	]
}
```

## License

MIT © [Electron Korea](http://github.com/electronkr)


[browser-window]: https://github.com/atom/electron/blob/master/docs/api/browser-window.md
