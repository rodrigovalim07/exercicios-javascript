let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let pares = 0
let impares = 0

for (i in vetor) {
    vetor[i] % 2 == 0 ? pares++ : impares++
}

console.log('Quantidade de pares: ' + pares
        + '\nQuantidade de ímpares: ' + impares)