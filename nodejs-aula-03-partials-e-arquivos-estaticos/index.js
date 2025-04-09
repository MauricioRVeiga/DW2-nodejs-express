// Importando o pacote do Express.js
const express = require('express');

// Carregando o método principal do Express
const app = express(); // Iniciando o Express

// Configurando a view engine
app.set('view engine', 'ejs');

// Criando a rota principal (raiz do site)
app.get('/', function (request, response) {
    response.render('index');
});

// Rota de perfil
app.get('/perfil/:nome?', function (request, response) {
    response.render('perfil');
});

// Rota de produtos
app.get('/produtos/:produto?', function (request, response) {
    // Coletando o parâmetro da rota
    const produto = request.params.produto;

    const produtos = ['Computador', 'Celular', 'Tablet', 'Notebook'];

    response.render("produtos", {
        // Enviando a variável produto para a página
        produto: produto,
        produtos: produtos
    });
});

// Iniciar o servidor da aplicação na porta 8085
app.listen(8085, function (error) {
    if (error) {
        console.log('Ocorreu um erro ao iniciar o servidor: ' + error);
    } else {
        console.log('Servidor iniciado com sucesso na porta 8085');
    }
});

