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
    response.render('index');
});

//Rota de perfil

app.get('/perfil/:nome?', function(request, response){
    response.render('perfil');
});

//Rota de produtos
app.get('/produtos/:produto?', function(request, response){
    //coletando o parametro da rota
    const produto = request.params.produto;
    response.render('produtos', 
        //Passando o parametro para a view
        {produto: produto});
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