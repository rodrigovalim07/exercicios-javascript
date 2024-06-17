const [a] = [10, 9, 5, 8] // pega o primeiro elemento que é o 10
console.log(a)

// 7 e 8 foram ignorados. n6 foi definido um valor padrão
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6) // 10, 9, undefined, 0

// pegando o segundo elemento do segundo array
const [ , [ , nota]] = [[ , 8, 8] , [9, 6, 8]]
console.log(nota)