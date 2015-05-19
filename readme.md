# electron-watch [![Build Status](https://travis-ci.org/electronkr/electron-watch.svg?branch=master)](https://travis-ci.org/ragingwind/electron-watch)

> Watch changes in Electron App


## Install

```
$ npm install --save electron-watch
```


## Usage

```js
require('electron-watch').start(app, mainWindow[, options]);
```


## API

### start(app, mainWindow\[, options\])

watches `options.root` directory, except for `options.ignored`,
and reloads electron app when changed.

relaunches electron app when `options.index.js` is changed.

param              | description
-------------------|-------------------------------
app                | *Required*. See [app].
mainWindow         | *Required*. See [mainWindow].
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


[app]: https://github.com/atom/electron/blob/master/docs/api/app.md
[mainWindow]: https://github.com/atom/electron/blob/master/docs/api/browser-window.md
