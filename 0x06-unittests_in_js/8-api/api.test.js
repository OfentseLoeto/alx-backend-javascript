const request = require('request');
const { expect } = require('chai');
const { startServer, stopServer } = require('./api');

describe('Index page', function() {
  before(function() {
    startServer();
  });

  after(function() {
    stopServer();
  });

  it('responds with status code 200 and "Welcome to the payment system"', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
