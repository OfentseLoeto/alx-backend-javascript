function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    return new Promise((resolve, reject) => {
      // For simplicity, doing nothing in case of failure
    });
  }
}

module.exports = getPaymentTokenFromAPI;
