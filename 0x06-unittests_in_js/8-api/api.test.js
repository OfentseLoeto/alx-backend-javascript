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
    // Add other test cases as needed
    expect(true).equal(true);
    done();
  }));
});
