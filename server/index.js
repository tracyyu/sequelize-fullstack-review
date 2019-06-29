const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dbHelpers = require('../database/dbHelpers');

const PORT = process.env.port || 3000;

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended : true }));
server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, '../client/dist')));


server.listen(PORT, console.log(`Listening to port ${PORT}`));