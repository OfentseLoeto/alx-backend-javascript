const request = require('request');
const { expect } = require('chai');

describe('index page', () => {
  it('correct status code?', () => new Promise((done) => {
    request('http://localhost:7865', (error, response) => {
      expect(response.statusCode).equal(200);
      done();
    });
  }));

  it('correct result?', () => new Promise((done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).equal('Welcome to the payment system');
      done();
    });
  }));

  it('other?', () => new Promise((done) => {
    expect(true).equal(true);
    done();
  }));
});

describe('cart page', () => {
  it('correct status code for cart page with valid :id?', () => new Promise((done) => {
    request('http://localhost:7865/cart/123', (error, response) => {
      expect(response.statusCode).equal(200);
      done();
    });
  }));

  it('correct status code for cart page with invalid :id (404)?', () => new Promise((done) => {
    request('http://localhost:7865/cart/hello', (error, response) => {
      expect(response.statusCode).equal(404);
      done();
    });
  }));

  it('correct result for cart page with valid :id?', () => new Promise((done) => {
    request('http://localhost:7865/cart/123', (error, response, body) => {
      expect(body).equal('Payment methods for cart 123');
      done();
    });
  }));
});
