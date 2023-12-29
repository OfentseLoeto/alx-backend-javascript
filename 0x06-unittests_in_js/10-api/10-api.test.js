const { expect } = require('chai');
const request = require('request');
const app = require('./api');

// Test suite for /available_payments endpoint
describe('Available Payments endpoint', () => {
  it('Correct response for /available_payments endpoint', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      const expected = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expected);
      done();
    });
  });
});

// Test suite for /login endpoint
describe('Login endpoint', () => {
  it('Correct response for /login endpoint', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: true,
      body: {
        userName: 'Betty'
      }
    };

    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
