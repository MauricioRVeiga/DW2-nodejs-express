// EXERCICIO1

function exibirInformacoes() {
let nome = "Mauricio Rafael";
let idade = 27;
let cidade = "Registro-SP";

console.log("Seu nome é: " + nome);
console.log("Sua idade: " + idade);
console.log("e sua é cidade: " + cidade);
}

exibirInformacoes();

// EXERCICIO 2

function dividirNumeros(num1, num2) {
let resultado = num1 / num2;
console.log("O resultado da divisão foi: " + resultado);
}

dividirNumeros(10, 2);

// EXERCICIO 3

function multiplicarNumeros(num1, num2, num3) {
  let resultado = num1 * num2 * num3;
return resultado;
}

let resultadoMultiplicacao = multiplicarNumeros(2, 3, 4);
console.log("O resultado da multiplicação é: " + resultadoMultiplicacao);

// EXERCICIO 4

function verificarIdade(idade) {
if (idade >= 18) {
    return "Maior de idade";
} else {
    return "Menor de idade";
}
}

let resultadoIdade = verificarIdade(27);
console.log(resultadoIdade);

// EXERCICIO 5

let resultado = function (nota1, nota2) {
let media = (nota1 + nota2) / 2;
if (media <= 5) {
    return "Reprovado";
} else {
    return "Aprovado";
}
};

console.log(resultado(3, 7));

// EXERCICIO 6

let triplo = (numero) => "O triplo do número é: " + numero * 3;

console.log(triplo(6));

// EXERCICIO 7

let soma = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

console.log(soma(2, 3, 4, 5));

// EXERCICIO 8

(function (nome) {
console.log("Olá, " + nome + "! Seja bem-vindo, o Senhor está bem?");
})("Mauricio");
