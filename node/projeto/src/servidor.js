const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(express.json())

app.get('/produtos', (req, res, next) => {
    res.json(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.json(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.json(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})