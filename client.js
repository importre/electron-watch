'use strict';

var net = require('net');
var port = require('./server.js');

function connect() {
  return net.connect({port: port}, function () {
    client.write('hello');
  });
}

var client = connect();
client.on('data', function (data) {
  client.end();
});
