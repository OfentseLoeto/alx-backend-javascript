const { expect } = require('chai');
const request = require('request');
const app = require('./api');

describe('Index page', () => {
  // Runs the server before the tests
  before((done) => {
    app.listen(7865, () => {
      done();
    });
  });

  it('Correct status code?', (done) => {
    request('http://localhost:7865', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Close the server after the tests
  after(() => {
    app.close();
  });
});
