// @flow

const pkg = require('../package');

const config: {
  port: number|string,
  docsPath: string,
  version: string,
} = {
  port: process.env.SERVICE_PORT || 3000,
  docsPath: '/docs',
  version: pkg.version,
};

module.exports = config;
