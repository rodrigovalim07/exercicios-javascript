const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Desafio: retornar um array apenas com os preços
const precos = carrinho.map(e => {
    let obj = JSON.parse(e)
    return obj.preco
})

console.log(precos)

// outra forma
const paraObj = elemento => JSON.parse(elemento)
const apenasPrecos = obj => obj.preco
const resposta = carrinho.map(paraObj).map(apenasPrecos)
console.log(resposta)