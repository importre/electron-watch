'use strict';

var net = require('net');
var path = require('path');
var spawn = require('child_process').spawn;
var child = null;
var port = 8507;

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
  var client = path.join(__dirname, 'client.js');
  spawn('node', [client], {
    detached: true
  }).unref();
}

server.listen(port, function (e) {
  runClient();
});

server.on('error', function (e) {
});

module.exports = port;
