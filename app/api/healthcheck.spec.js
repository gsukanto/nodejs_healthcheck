const chai = require('chai');
const server = require('../../index');
const pack = require('../../package.json');

const expect = chai.expect;

describe('healthcheck api', () => {
  it('should success and the version when the service is healthy', () => (
    server.inject({
      method: 'GET',
      url: '/healthcheck'
    }).then((response) => {
      expect(response.statusCode).to.equal(200);
      expect(response.result.status).to.equal('ok');
      expect(response.result.version).to.equal(pack.version);
    })
  ));
});
