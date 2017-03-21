// @flow
// https://www.loggly.com/ultimate-guide/node-logging-basics/
const winston = require('winston');

const logger: Object = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({ timestamp: true })
  ]
});

module.exports = logger;
