
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');
const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));


server.use('/', routes);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err?.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
