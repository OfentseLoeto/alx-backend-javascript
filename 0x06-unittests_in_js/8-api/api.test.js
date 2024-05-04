const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
  let server;

  before(function() {
    server = require('./api');
  });

  after(function() {
    server.close();
  });

  it('correct status code', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct result', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
