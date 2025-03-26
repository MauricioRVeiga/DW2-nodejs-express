//Importando o pacote do Express.js

const express = require('express');

//Carregando o método principal do Express
const app = express(); //Iniciando o Express

//Configurando a view engine

app.set('view engine', 'ejs');

//Criando a rota principal(raiz do site)
//O método get() é responsável por criar uma rota
//A rota principal é a raiz do site, ou seja, o endereço principal
app.get('/', function(request, response){
    response.send('<h1>Olá, mundo!</h1><br><p>Estou iniciando os estudos com Node.js</p>');
});

//Rota de perfil
//:nome -> parametro obrigatório
//:nome? -> parametro opcional
app.get('/perfil/:nome?', function(request, response){
    //Coletando o parametro da rota e gravando na variável nome
    // response.send('<h1>Bem vindo ao seu perfil</h1><br><p>Este é o perfil</p>');
    const nome = request.params.nome;
    if (nome) {
        response.send(`<h2>Olá, ${nome}! Seja bem-vindo ao seu perfil!</h2>`);
    } else {
        response.send('<h2>Olá, você é um visitante, faça o login para poder acessar o seu perfil</h2>');
    }
    response.send(`<h2>Olá, ${nome}! Seja bem-vindo ao seu perfil!</h2>`);
});

//Rota de produtos
app.get('/produtos', function(request, response){
    response.render('produtos');
});

//Iniciar o servidor da aplcação
//Porta 8080
//O Método listen() é responsável por iniciar o servidor da aplicação
//A porta 8080 é a porta que o servidor irá ouvir
app.listen(8085, function(error){
    if(error){
        console.log('Ocorreu um erro ao iniciar o servidor' + error);
    } else{
        console.log('Servidor iniciado com sucesso');
    }
});