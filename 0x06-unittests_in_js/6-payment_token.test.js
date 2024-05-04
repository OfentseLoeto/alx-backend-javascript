const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with the object {data: "Successful response from the API"} when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should return a rejected promise with an error when success is false', function(done) {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Promise should be rejected'));
      })
      .catch((error) => {
        expect(error.message).to.equal('API request failed');
        done();
      });
  });
});
