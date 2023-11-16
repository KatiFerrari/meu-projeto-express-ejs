const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos =[
  {id: 1, nome: "Jogo PES 2019", preco:"509,39", descricao: "Jogo PES 2019 para PlayStation 4 P4DA0072101FGM", 
  imagem: "produto1.png"},
  {id: 2, nome: "Mario Strikers - Nintendo Switch", preco:"228,00", descricao: "PARTICIPE DE COPAS. Crienode in seu próprio torneio de eliminação dupla com até 4 jogadores no mesmo console e receba moedas no jogo.", 
  imagem: "produto2.png"},
  {id: 3, nome: "The Legend of Zelda - Tears of Kingdom", preco:"309,90", descricao: "Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™", 
  imagem: "produto3.png"},
  {id: 4, nome: "Breath Of The Wild - Nintendo Switch", preco:"289,89", descricao: "The Legend of Zelda: Breath of the Wild é a mais nova aventura da franquia, trazendo desta vez um mundo aberto vasto, rico e cheio de vida como nunca antes.", 
  imagem: "produto4.png"},
  {id: 5, nome: "Dungeons & Dragons: Kit Essencial", preco:"119,99", descricao: "Jogo PES 2019 para PlayStation 4 P4DA0072101FGM", 
  imagem: "produto5.png"},
  {id: 6, nome: "Dungeons & Dragons: Monster Manual", preco:"509,39", descricao: "Jogo PES 2019 para PlayStation 4 P4DA0072101FGM", 
  imagem: "produto6.png"},
  {id: 7, nome: "Jogo PES 2019", preco:"175,87", descricao: "O Livro dos Monstros reúne um verdadeiro acervo de criaturas icônicas presentes no universo de Dungeons & Dragons, incluindo dragões, gigantes, devoradores de mente e observadores. ", 
  imagem: "produto7.png"},
  {id: 8, nome: "Jogo PES 2019", preco:"509,39", descricao: "Jogo PES 2019 para PlayStation 4 P4DA0072101FGM", 
  imagem: "produto8.png"},
  {id: 9, nome: "Jogo PES 2019", preco:"509,39", descricao: "Jogo PES 2019 para PlayStation 4 P4DA0072101FGM", 
  imagem: "produto9.png"},
  {id: 10, nome: "Jogo PES 2019", preco:"509,39", descricao: "Jogo PES 2019 para PlayStation 4 P4DA0072101FGM", 
  imagem: "produto10.png"}
 ]

 function  buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

app.get('/', (req, res) => {
  res.render('index', { produtos });
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