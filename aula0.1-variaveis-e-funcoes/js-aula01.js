// comentario em linha
/* comentario
em bloco */

// Declaração de variaveis no Js

const nome = "Mauricio"; // Uma constante precisa de um valor
let Nome; // Let permite iniciar a variavel vazia

var cor = "Azul";
var cor = "Amarelo";
let cidade = "Registro";
cidade = "Jacupiranga";

const message = "Hello, World ! Iniciando em JavaScript";
console.log(message);

// typeof (esse comando exibirá o tipo da variável)

const estado = "sp";
const idade = 18;
let endereco;

console.log(typeof estado);
console.log(typeof idade);
console.log(typeof endereco);

// O JavaScript é uma linguigem de tipagem dinamica e tipagem fraca

////////////////////////////////////////////////////////////////////

function minhaFuncao() {}

console.log(typeof minhaFuncao);

function saudacao() {
  console.log("Ola, bem-vindo ");
}
saudacao();

function saudacao(nome) {
  console.log("Ola, bem-vindo " + nome);
  console.log(`Olá, bem vindo  ${nome}`);
}
saudacao("Mauricio");

function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois número foi ${resultado}.`);
}
soma(5, 5);

function Soma(n1, n2) {
  return n1 + n2;
}
Soma(2, 6);
console.log(`A Soma dos dois números foi ${Soma(2, 6)}`);

function parImpar(n) {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

let num = 4;

console.log(parImpar(num));
console.log(`O numero ${num} é ${parImpar(num)}`);

let dobro = function (x) {
  return x * 2;
};

console.log(dobro(15));
console.log(`o dobro do número é ${dobro(15)}`);

const Dobro = x => {
    return x*2
}

console.log(`Função dobro com Arrow function. Resultado: ${Dobro(20)}`)

const Calc = (num1 , operador , num2) => {
    return eval(`${num1} ${operador} ${num2}`)
}

console.log(`O resultado da operação é ${Calc(6, '*' , 6)}`)

const calc = (num1 , operador , num2) => eval (`${num1} ${operador} ${num2}`)
console.log(`O resultado da operação é ${calc(7, '*' , 7)}`)


const life = (function(){
    console.log('Estou sendo executada imediatamente')
})

const start = (function(app){
    console.log(`Executando imediatamente o app ${app}`)
})("whatsapp")