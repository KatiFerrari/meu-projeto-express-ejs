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
  {id: 5, nome: "Dungeons & Dragons: Kit Essencial", preco:"119,99", descricao: "RPG Cor, Multicolorido Material do produto: Papel Itens inclusos: 1", 
  imagem: "produto5.png"},
  {id: 6, nome: "GTA V", preco:"509,39", descricao: "Carregamento mais Rápido — Nunca foi tão rápido carregar o mundo de Los Santos e Blaine County, tendo acesso quase instantâneo à ação.", 
  imagem: "produto6.png"},
  {id: 7, nome: "The Crew: Motorfest ", preco:"276,07", descricao: "BEM VINDO AO MOTORFEST: Adquira seu ingresso para um festival durante todo o ano projetado para todos os entusiastas de carros na bela ilha de O’Ahu Funcionalidades do Jogo. ", 
  imagem: "produto7.png"},
  {id: 8, nome: "Gran Turismo 7 Edição Padrão", preco:"168,90", descricao: "Encontre seu caminho Curta a experiência completa do verdadeiro simulador de corridas. Com 25 anos de estrada. Assuma o volante de mais de 420 carros já no primeiro dia.", 
  imagem: "produto8.png"},
  {id: 9, nome: "Wrc Generations", preco:"149,89", descricao: "Dirija no meio da ação atrás do volante dos novos híbridos WRC 2022. Levante a todos os desafios da simulação de rali mais abrangente, realista e exigente já desenvolvida.", 
  imagem: "produto9.png"},
  {id: 10, nome: "Dragon Ball Z: Kakarot", preco:"184,90", descricao: "Vivencie a história de Goku em DRAGON BALL Z: KAKAROT! Além das batalhas épicas, experimente a vida no mundo do DRAGON BALL Z enquanto luta, pesca, come e treina com o Goku.", 
  imagem: "produto10.png"}
 ]

 function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

app.get('/', (req, res) => {
  res.render('index', { produtos });
});

app.get('/produto/:id', (req, res) => {
  const produto = buscarProdutoPorID(req.params.id)
  res.render('produto1', {produto} );
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});