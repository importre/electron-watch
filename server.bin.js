#!/usr/bin/env node

'use strict';

var net = require('net');
var path = require('path');
var spawn = require('child_process').spawn;
var child = null;
var config = require('./config.js');

var server = net.createServer(function (c) {
  if (child) child.kill();
  child = spawn('electron', ['--dev', '.']);

  child.stdout.on('data', function (data) {
    console.log(data + '');
  });

  child.stderr.on('data', function (data) {
    console.log(data + '');
  });

  child.on('close', function (code) {
    console.log('child process exited with code ' + code);
  });

  c.write('electron-watch');
});

function runClient() {
  var client = path.join(__dirname, 'client.bin.js');
  spawn('node', [client], {
    detached: true
  }).unref();
}

server.listen(config.port, function (e) {
  runClient();
});

server.on('error', function (e) {
});
