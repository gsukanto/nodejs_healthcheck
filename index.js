// @flow

const hapi = require('hapi');
const swagger = require('hapi-swagger');
const inert = require('inert');
const vision = require('vision');

const config = require('./config');
const logger = require('./app/logger');
const routes = require('./app/routes');

// create the server
const server = new hapi.Server();

// set connection host/port and enable CORS
server.connection({
  host: '0.0.0.0',
  port: config.port,
  routes: {
    cors: true
  }
});

// hock up all the routes
routes(server);

// swagger configurations
const swaggerOptions: {
  info: { title: string, version: string },
  documentationPath: string
} = {
  info: {
    title: 'Nodejs Healthcheck Documentation',
    version: config.version
  },
  documentationPath: config.docsPath
};

// register plugins and start the server on the callback if all is good
server.register([
  inert,
  vision, {
    register: swagger,
    options: swaggerOptions
  }
], (err) => {
  if (err) throw err;

  server.start((startError) => {
    if (startError) {
      throw err;
    }

    logger.info('Server running at:', server.info.uri);
    logger.info('Docs running at:', server.info.uri + config.docsPath);
  });
});

module.exports = server;
