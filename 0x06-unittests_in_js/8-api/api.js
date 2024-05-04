const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

let server;

function startServer() {
  if (!server) {
    server = app.listen(7865, () => {
      console.log('API available on localhost port 7865');
    });
  }
}

function stopServer() {
  server.close();
  server = null;
}

if (!module.parent) {
  startServer();
}

module.exports = { startServer, stopServer, app };
