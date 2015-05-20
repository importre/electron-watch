#!/usr/bin/env node

'use strict';

var net = require('net');
var config = require('./config.js');

function connect() {
  return net.connect({port: config.port}, function () {
    client.write('hello');
  });
}

var client = connect();
client.on('data', function (data) {
  client.end();
});
