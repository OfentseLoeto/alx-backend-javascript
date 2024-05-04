const request = require('request');
const { expect } = require('chai');

describe('Cart page', function() {
  let server;

  before(function() {
    server = require('./api');
  });

  after(function() {
    server.close();
  });

  it('correct status code when :id is a number', function(done) {
    request('http://localhost:7865/cart/12', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('correct status code when :id is NOT a number (=> 404)', function(done) {
    request('http://localhost:7865/cart/hello', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
