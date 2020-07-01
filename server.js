const express = require('express');
const morgan = require('morgan');
// const router = require('./routes/index');
const apiRouter = require('./apiRouter').router;

const bodyParser = require('body-parser')

const server = express();

//Body parser config
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


server.use(morgan('dev'));

// server.use('/api', router);
server.use('/api', apiRouter)

server.listen(8021, () => {
    console.log("ok mec")
});
