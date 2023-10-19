const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.get('/produto1', (req, res) => {
  res.render('produto1');
});

app.get('/produto2', (req, res) => {
  res.render('produto2');
});

app.get('/produto3', (req, res) => {
  res.render('produto3');
});

app.get('/produto4', (req, res) => {
  res.render('produto4');
});



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});