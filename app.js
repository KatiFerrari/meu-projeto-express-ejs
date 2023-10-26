const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Definição Intensa", preco:"30", descricao: "Creme de pentear Salon Line 1000g", imagem: "produto1.png"},
  {id: 2, nome: "Invigo Blonde Recharde Duo", preco:"150", descricao: "Kit Wella Professionais (2 produtos)", imagem: "produto2.png"},
  {id: 3, nome: "#Todecacho Transição", preco:"18", descricao: "Gelatina Modeladora Salon Line", imagem: "produto3.png"},
  {id: 4, nome: "Truss Curly Light", preco:"46", descricao: "Ativador de Cachos 250ml", imagem: "produto4.png"},
  {id: 5, nome: "Siàge Cauterização dos Fios", preco:"218", descricao: "Combo Siàge Cauterização dos Fios (4 itens)", imagem: "produto5.png"},
  {id: 6, nome: "Siàge Reconstrói Os Fios", preco:"142", descricao: "Kit Siàge Reconstrói Os Fios ( Shampoo + Cond. +máscara)", imagem: "produto6.png"},
  {id: 7, nome: "Meu Cacho Minha Vida", preco:"60", descricao: "Kit Lola Cosmetics Meu Cacho Minha Vida Duo (2 Produtos)", imagem: "produto7.png"},
  {id: 8, nome: "Be(M)dita Ghee", preco:"22", descricao: "Lola Cosmetics Be(M)dita Ghee Manteiga Vegetal Reconstrução 100g", imagem: "produto8.png"},
  {id: 9, nome: "SOS Cachos", preco:"110", descricao: "Kit Salon Line para Cabelos Cacheados 3 a 4ABC", imagem: "produto9.png"},
  {id: 10, nome: "#Todecacho", preco:"120", descricao: "Kit Salon Line #todecacho Babosa", imagem: "produto10.png"}
]

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