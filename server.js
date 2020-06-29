const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index');

const server = express();

server.use(morgan('dev'));

server.use('/api', router);

server.listen(8021);
