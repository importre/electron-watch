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
	root: '.',
	entry: 'index.js',
	ignored: [
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
