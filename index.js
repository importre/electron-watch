'use strict';

const path = require('path');
const fork = require('child_process').fork;
const spawn = require('child_process').spawn;

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

module.exports = {
  start: function (app, browserWindow, options) {
    options = options || {};

    var chokidar = require('chokidar');

    var root = options.root || defaultOptions.root;
    var entry = options.entry || defaultOptions.entry;
    var ignored = (options.ignored instanceof Array) || defaultOptions.ignored;

    var watcher = chokidar.watch(root, {ignored: ignored});
    watcher.on('change', function (name) {
      if (name === entry) {
        app.quit();
        var client = path.join(__dirname, 'client.bin.js');
        fork(client);
      } else {
        browserWindow.reloadIgnoringCache();
      }
    });
  }
};
