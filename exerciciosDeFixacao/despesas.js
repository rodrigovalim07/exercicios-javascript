function despesasTotais(produtos) {
    return produtos.map(p => p.preco).reduce((x, y) => x + y)
}

console.log(despesasTotais([
    { nome: 'jornal online', categoria: 'informações', preco: 89.99 },
    { nome: 'cinema', categoria: 'entretenimento', preco: 150 }
]))

console.log(despesasTotais([
    { nome: 'galaxy s20', categoria: 'eletrônicos', preco: 3599.99 },
    { nome: 'macbook pro', categoria: 'eletrônicos', preco: 30999.90 }
]))