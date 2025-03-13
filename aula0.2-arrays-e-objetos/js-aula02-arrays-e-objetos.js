// ARRAY (VETOR OU LISTA)
let produtos = [];
console.log(typeof (produtos));

let Produtos = ["Computador", "Mouse", "Teclado", "Monitor"];
console.log(Produtos);

console.log("Exibindo a lista pelos indices");
console.log(Produtos[0]);   // Computador
console.log(Produtos[1]);   // Mouse    
console.log(Produtos[2]);   // Teclado 
console.log(Produtos[3]);   // Monitor 

console.log("Exibindo a lista atraves do for");
for (let c in Produtos) {
    console.log(`${Number(c) + 1} - ${Produtos[c]}`);
}

console.log("Exibindo a lista atraves do forEach");
Produtos.forEach(function (produto){
    console.log(produto);
})

console.log("Exibindo a lista atraves do forEach com os indices");
Produtos.forEach((produto, i) => {
    console.log(`${i + 1} - ${produto}`);
})

// MÉTODOS DE MANIPULAÇÃO DE VETORES

let vetor = ['Laranja', 'Maçã', 'Banana'];
console.log(`Nosso vetor é o :${vetor}`);
vetor[3] = 'Morango';
console.log(`Nosso vetor agora é :${vetor}`);

//MÉTODO PUSH - INSERE UM NOVO ELEMENTO NO FINAL DO VETOR

vetor.push('Uva');
console.log(`Nosso vetor agora é :${vetor}`);

//MÉTODO UNSHIFT - INSERE UM NOVO ELEMENTO NO INICIO DO VETOR
vetor[0] = 'Pera';
console.log(`Nosso vetor agora é :${vetor}`);
vetor.unshift('Laranja');
console.log(`Nosso vetor agora é :${vetor}`);

//MÉTODO LENGTH - RETORNA O NUMERO DE ELEMENTOS DO VETOR

let numeros = [6,8,2,9,3,800,200]
console.log(`Nossa lista de números é : ${numeros}`);
console.log(`O número de elementos do vetor é : ${numeros.length}.`);

//MÉTODO SORT - ORDENA OS ELEMENTOS DO VETOR

console.log(`O primeiro elemento da lista de frutas é: ${vetor[0]}.`);
vetor.sort();
console.log(`Agora o primeiro elemento da lista de frutas é: ${vetor[0]}.`); 
console.log(`Nossa lista de frutas ordenada é : ${vetor.sort()}`);

//ORDENAÇÃO DE NÚMEROS COM SORT
console.log(`Nossa lista de números é : ${numeros}`);
numeros.sort()
console.log(`Agora nossa lista de números ordenada é: ${numeros}`);

//ORDENANDO DE FORMA CRESCENTE

console.log(numeros.sort((a,b) => a - b));

//ORDENANDO DE FORMA DESCRESCENTE

console.log(numeros.sort((a,b) => b - a));

//CARRO
//OBJETOS LITERAIS (não são derivados de classes)
//Objetos possuem Atributos(Caracteriticcas) e Métodos(Ações)
//Lado esquerdo: chaves / Lado direito: valores

let carro = {
    marca: "Fiat",

    modelo: "Uno", //atributo1
    cor: "Vermelho", //atributo2
    ano: 2010, //atributo3
    preco: 20000,   //atributo4
    acelerar() { //metodo1
        console.log("Vrum Vrum");
    },
    rebaixar() { //metodo2
        console.log("Rebaixei aro 16");
    },
    devagar() { //metodo3
        console.log("Devagar pai, por favor");
    }
}

console.log(`O modelo do carro é ${carro.modelo}`);
console.log(`O carro é da cor ${carro.cor}`);
console.log(`O carro é do ano ${carro.ano}`);


carro.acelerar();
carro.rebaixar();
carro.devagar();


////////////////////////////////////////////////////////////

const produto = {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "Maquinário revolucionário da área de computação"
};

console.log(produto);
console.log(`O ${produto.nome} da marca ${produto.marca} custa apenas R$${produto.preco}, tendo as características como: ${produto.descricao}`);


//ARRAY DE OBJETOS

const listaProdutos = [{
    nome: "Gabinete",
    marca: "Red Dragon",
    preco: 280
},
{
    nome: "Mouse",
    marca: "Razer",
    preco: 300
},
{
    nome: "Teclado",
    marca: "Corsair",
    preco: 150
},
{
    nome: "Monitor",
    marca: "Samsung",
    preco: 800
}
]

//EXIBIR

console.log(listaProdutos);
console.log(listaProdutos[0]);
console.log(listaProdutos[1]);

//EXIBIR ARRAY DE OBJETOS COM FOREACH   

listaProdutos.forEach(produto => {
    console.log(`Produto: ${produto.nome}`);
    console.log(`Marca: ${produto.marca}`);
    console.log(`Preço: ${produto.preco}`);
})

//EXIBIR O ARRAY OBJETOS EM FORMA DE TABELA
console.table(listaProdutos);

