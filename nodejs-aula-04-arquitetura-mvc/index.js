// Importando o pacote do Express.js
//MODO ES6 de importação:
import express from "express";

// Carregando o método principal do Express
const app = express(); // Iniciando o Express

//Importando os Controllers (onde estão as rotas)
import ProdutosController from "./controllers/ProdutosController.js";

// Configurando a view engine

app.set('view engine', 'ejs');

//Configurando a pasta "public" para arquivos estáticos
app.use(express.static('public'));

//Configurando o Express para utilizar as rotas dos controllers
app.use('/', ProdutosController)

// Criando a rota principal (raiz do site)
app.get('/', function (request, response) {
    response.render('index');
});


// Iniciando o servidor da aplicação na porta 8085
// O método listen do Express inicia um servidor
app.listen(8085, (error) => {
    if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
    } else {
    console.log("Servidor iniciado com sucesso!");
    }
});