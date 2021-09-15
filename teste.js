const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/Calculadora.html'));
});

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
});