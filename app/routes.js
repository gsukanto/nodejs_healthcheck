// @flow

const healthcheck = require('./api/healthcheck');

const registerRoutes: Function = (server) => {
  server.route(healthcheck.route);
};

module.exports = registerRoutes;
