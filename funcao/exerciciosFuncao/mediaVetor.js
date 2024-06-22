function mediaVetor(vetor) {
    let soma = 0
    for (i in vetor) {
        soma += vetor[i]
    }
    let media = (soma / vetor.length).toFixed(2)
    return `A média dos valores é: ${media}`
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let vetor2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10]

console.log(mediaVetor(vetor))
console.log(mediaVetor(vetor2))