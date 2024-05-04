const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.status(200).send(`Welcome ${userName}`);
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
