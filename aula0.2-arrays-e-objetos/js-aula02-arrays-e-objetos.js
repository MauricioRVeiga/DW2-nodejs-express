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