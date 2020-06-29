const express = require('express');
const server = express();
const morgan = require('morgan');
const router = require('./routes/index');

server.use(morgan('dev'));

server.use(router);

server.listen(8021);
