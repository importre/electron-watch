'use strict';

const path = require('path');
const exec = require('child_process').exec;
const pkg = require('./package.json');

const defaultOptions = {
  root: '.',
  entry: 'index.js',
  ignored: [
    'node_modules',
    /[\/\\]\./,
    'build',
    '.*.swp'
  ]
};

const app = process.atomBinding('app').app;
app.watch = function (browserWindow, options) {
  options = options || {};

  var chokidar = require('chokidar');

  var root = options.root || defaultOptions.root;
  var entry = options.entry || defaultOptions.entry;
  var ignored = (options.ignored instanceof Array) || defaultOptions.ignored;

  var watcher = chokidar.watch(root, {ignored: ignored});
  watcher.on('change', function (name) {
    if (name === entry) {
      app.quit();
      exec('watchclient');
    } else {
      browserWindow.reloadIgnoringCache();
    }
  });
};

module.exports = pkg.name + ' ' + pkg.version;
