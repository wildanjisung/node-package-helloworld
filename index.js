const express = require('express');
const helloWorld = require('wildanjisung-sandbox-hello-world');

const app = express();

app.get('/', (req, res) => {
  const message = helloWorld();
  res.send(message);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
