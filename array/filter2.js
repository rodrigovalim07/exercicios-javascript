// desafio
Array.prototype.filter2 = function(callback) {
    let array = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            array.push(this[i])
        }
    }
    return array
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

const caro = prod => prod.preco >= 500
const fragil = prod => prod.fragil
console.log(produtos.filter2(caro).filter2(fragil))