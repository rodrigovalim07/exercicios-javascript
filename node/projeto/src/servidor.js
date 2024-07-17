const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

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
    res.json(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.json(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.json(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})