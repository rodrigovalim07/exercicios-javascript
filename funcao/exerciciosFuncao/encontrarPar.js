let num = 1
let numeros = []

while (num < 101) {
    numeros.push(num)
    num++
}

let pares = []
for (i in numeros) {
    if (numeros[i] % 2 == 0) pares.push(numeros[i])
}

console.log(pares)