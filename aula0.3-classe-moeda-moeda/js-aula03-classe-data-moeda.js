//EXEMPLO CARRO - CLASSE

class carro {//nome de classes devem começar com letra maiusculo
    //atributos
    constructor (marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    //METODOS

    buzinar(){
        return "beep beep sai da frente"
    }
}

//CRIANDO UMA INSTANCIA (OBJETO) DA CLASSE CARRO

const carroEsportivo = new carro('Fiat', 'Uno', '2012')
console.log(carroEsportivo.marca)
console.log(carroEsportivo.modelo)
console.log(carroEsportivo.ano) 

const carroPopular = new carro('Chevrolet', 'Celta', '2010')
console.log(carroPopular.marca)
console.log(carroPopular.modelo)
console.log(carroPopular.ano)

console.table(carroPopular)
console.table(carroEsportivo)

//INSTÂNCIA VAZIA E ATRIBUIÇÃO DE VALORES

const carroSedan = new carro()
carroSedan.marca = 'Ford'
carroSedan.modelo = 'Fiesta'
carroSedan.ano = '2012'
carroSedan.qtdPortas = '4'

console.log(`O carro ${carroSedan.marca}, do modelo ${carroSedan.modelo}, do ano ${carroSedan.ano}, possui ${carroSedan.qtdPortas} portas}`)

//Adicionando um novo atributo
carroEsportivo.corNeon = 'Azul'

//Adicionadno um novo método
carroEsportivo.turbo = function(){
    return 'Vrrrrrrrrrum! , O carro ligou o turbo pae'
}

console.log(`O carro ${carroEsportivo.marca} e ${carroEsportivo.modelo} é muito louco, ele faz ${carroEsportivo.turbo()} e tem uma cor ${carroEsportivo.corNeon}`)

