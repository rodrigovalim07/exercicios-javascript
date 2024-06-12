let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // erro

const produto = {}
console.log(produto.preco) // undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined, melhor opção seria o null
console.log(!!produto.preco) // dupla negação retorna o valor real, que no caso é falso
// delete produto.preco // nesse caso deletaria o preço e o objeto ficaria vazio
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco) // false novamente
console.log(produto)
