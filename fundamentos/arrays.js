const valores = [7.7, 8.8, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // não da erro

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // permite misturar tipos
console.log(valores)

valores.pop() // exclui o ultimo valor do array
delete valores[0]
console.log(valores)

console.log(typeof valores)