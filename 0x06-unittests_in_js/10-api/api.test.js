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

describe('Available payments', function() {
  it('responds with status code 200 and correct payment methods', function(done) {
    request('http://localhost:7865/available_payments', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login', function() {
  it('responds with status code 200 and welcome message with username', function(done) {
    const userName = 'Betty';
    const options = {
      method: 'POST',
      url: 'http://localhost:7865/login',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName })
    };
    request(options, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(`Welcome ${userName}`);
      done();
    });
  });
});
