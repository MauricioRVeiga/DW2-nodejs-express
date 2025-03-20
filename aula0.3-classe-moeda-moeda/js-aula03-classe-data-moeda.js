//EXEMPLO CARRO - CLASSE

class carro {
  //nome de classes devem começar com letra maiusculo
  //atributos
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  //METODOS

  buzinar() {
    return "beep beep sai da frente";
  }
}

//CRIANDO UMA INSTANCIA (OBJETO) DA CLASSE CARRO

const carroEsportivo = new carro("Fiat", "Uno", "2012");
console.log(carroEsportivo.marca);
console.log(carroEsportivo.modelo);
console.log(carroEsportivo.ano);

const carroPopular = new carro("Chevrolet", "Celta", "2010");
console.log(carroPopular.marca);
console.log(carroPopular.modelo);
console.log(carroPopular.ano);

console.table(carroPopular);
console.table(carroEsportivo);

//INSTÂNCIA VAZIA E ATRIBUIÇÃO DE VALORES

const carroSedan = new carro();
carroSedan.marca = "Ford";
carroSedan.modelo = "Fiesta";
carroSedan.ano = "2012";
carroSedan.qtdPortas = "4";

console.log(
  `O carro ${carroSedan.marca}, do modelo ${carroSedan.modelo}, do ano ${carroSedan.ano}, possui ${carroSedan.qtdPortas} portas}`
);

//Adicionando um novo atributo
carroEsportivo.corNeon = "Azul";

//Adicionadno um novo método
carroEsportivo.turbo = function () {
  return "Vrrrrrrrrrum! , O carro ligou o turbo pae";
};

console.log(
  `O carro ${carroEsportivo.marca} e ${
    carroEsportivo.modelo
  } é muito louco, ele faz ${carroEsportivo.turbo()} e tem uma cor ${
    carroEsportivo.corNeon
  }`
);

//Manipulando datas no js

const currentDate = new Date();
console.log(typeof currentDate);

const day = currentDate.getDate();
console.log(`Hoje é dia ${day}`);

const month = currentDate.getMonth() + 1;
console.log(`Estamos no mês ${month}`);

const year = currentDate.getFullYear();
console.log(`Estamos no ano de ${year}`);

currentDate.setDate(currentDate.getDate() + 10);
console.log(`Daqui a 10 dias será dia ${currentDate.getDate()}`);

currentDate.setMonth(currentDate.getMonth() + 3);
console.log(`Daqui a 3 meses sera mes ${currentDate.getMonth() + 1}`);

currentDate.setFullYear(currentDate.getFullYear() + 2);
console.log(`Daqui a 2 anos sera ano ${currentDate.getFullYear()}`);

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/

//Trabalhando moedas com js

let salario = 2500.3;
console.log(salario);
console.log(salario.toFixed(2));
console.log(salario.toFixed(0));
console.log(salario.toFixed(2).replace(".", ","));

//Formatação de moeda em real (R$)
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);

//Convertendo real para dolar
const salarioDolar = salario * 0.176;
console.log(
  salarioDolar.toLocaleString("en", { style: "currency", currency: "USD" })
);

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/

//Formatação de string

const nome = "Bruno Eduardo";

//Letras maiusculas
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
