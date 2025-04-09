import express from 'express'

// CARREGANDO O MÉTODO DO EXPRESS PARA GERENCIAMENTO DE ROTAS
const router = express.Router()


// Rota de produtos
router.get('/produtos', (req, res) =>  {
    // Coletando o parâmetro da rota
    const produtos = [ 
        {nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis"},
        {nome: "Tablet Samsung", preco: 900, categoria: "Eletronicos"},
        {nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores"},
        {nome: "Fone Bluetooth JBL", preco: 150, categoria: "Periféricos"},
];

    res.render("produtos", {
        // Enviando a variável produto para a página
        produtos: produtos,
    });
})


//Exportando o módulo
export default router;