const Joi = require('joi');
const pack = require('../../package.json');

function handler(req, reply) {
  reply({
    status: 'ok',
    version: pack.version
  });
}

// The route declaration
const route = {
  method: 'GET',
  path: '/healthcheck',
  config: {
    tags: ['api'],
    description: 'Healthcheck API',
    notes: 'Performs a basic healthcheck',
    plugins: {
      // Swagger model definition
      'hapi-swagger': {
        responses: {
          '200': {
            description: 'Success',
            schema: Joi.object({
              status: Joi.string().description('Service status')
                .example('ok'),
              version: Joi.string().description('Service version')
                .example('0.1.0')
            })
          },
          '400': { description: 'Bad Request' },
          '500': { description: 'Internal Error' }
        }
      }
    }
  },
  handler
};

module.exports = { handler, route };
