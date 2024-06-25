// desafio: fazer a implementação do map
Array.prototype.map2 = function(callback) {
    let array = []
    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this))
    }
    return array
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// outra forma
const paraObj = elemento => JSON.parse(elemento)
const apenasPrecos = obj => obj.preco
const resposta = carrinho.map2(paraObj).map2(apenasPrecos)
console.log(resposta)