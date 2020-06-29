const express = require('express'),
  server = express(),
  morgan = require('morgan'),
  router = require('./routes/index');

server.use(morgan('dev'));

server.use(router);

server.listen(8021);
