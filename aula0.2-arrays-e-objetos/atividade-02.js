//Arrays – EXERCICIO 01 -  Crie um vetor contendo os nomes de todos os estados brasileiros. Em seguida, exiba esse vetor na tela através de uma estrutura forEach. Os índices do vetor também devem ser exibidos.

const estadosBrasileiro = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
// console.log(`Estados Brasileiros são : ${estadosBrasileiro}`);

estadosBrasileiro.forEach((estado, i) => {
    console.log(`${i + 1} - ${estado}`);
})

//Objetos literais EXERCICIO 2 – Crie um objeto literal para descrever você. Esse objeto deve ter no mínimo 5 chaves, por exemplo, nome, idade, cidade, hobby, música preferida. Em seguida, exiba as chaves e valores na tela.

const Mauricio = {
    nome: 'Mauricio',
    idade: 27,
    cidade: 'Registro',
    hobby: 'Jogar um delta',
    esporte : 'Futebol',
    
    tunar() {
        console.log('Tunando o carro');
    },

    equipar() {
        console.log('Equipando o carro');
    }
}

console.log(`O meu nome é : ${Mauricio.nome},`);
console.log(`Tenho ${Mauricio.idade} anos , `);
console.log(`Moro em ${Mauricio.cidade} , `);
console.log(`Meu hobby é ${Mauricio.hobby} e meu esporte preferido é ${Mauricio.esporte}.`);


// Array de objetos EXERCICIO 3 - Crie um array de objetos de filmes com no mínimo 5 filmes. Cada filme deve possuir no mínimo 4 chaves, por exemplo, título, gênero, ano e classificação de idade. Em seguida, exiba o array de objetos através de uma estrutura forEach.

const quatroFilmes = [{
    nome:'Vingadores:Era de Ultron',
    genero: 'Ação', 
    ano: 2015,
    classificacao: 12
},
{
    nome: 'Borat',
    genero: 'Comédia',
    ano: 2006,
    classificacao: 16
},
{
    nome: 'O Poderoso Chefão',
    genero: 'Drama',
    ano: 1972,
    classificacao: 18
},
{
    nome: 'O Senhor dos Anéis: A Sociedade do Anel',
    genero: 'Fantasia',
    ano: 2001,
    classificacao: 12
},           
]

//EXIBIR

console.log(quatroFilmes);
console.log(quatroFilmes[0]);
console.log(quatroFilmes[1]);
console.log(quatroFilmes[2]);
//EXIBIR ARRAY DE OBJETOS COM FOREACH   

quatroFilmes.forEach(filmes => {
    console.log(`Produto: ${filmes.nome}`);
    console.log(`Marca: ${filmes.genero}`);
    console.log(`Preço: ${filmes.ano}`);
    console.log(`Classificação: ${filmes.classificacao}`);
})

//EXIBIR O ARRAY OBJETOS EM FORMA DE TABELA
console.table(quatroFilmes);