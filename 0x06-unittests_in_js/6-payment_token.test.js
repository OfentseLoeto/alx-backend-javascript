const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with the correct object when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        // Assert that the result is as expected
        expect(result).to.deep.equal({ data: 'Successful response from the API' });

        // Call done to notify Mocha that the asynchronous test has completed
        done();
      })
      .catch((error) => {
        // Call done with the error to notify Mocha if there is an issue
        done(error);
      });
  });
});
