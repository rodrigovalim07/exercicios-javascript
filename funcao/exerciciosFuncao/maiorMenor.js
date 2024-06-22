const maiorMenor = function(vetor) {
    let maior = 0
    let menor = 0

    for (i in vetor) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        } else if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }

    return `Maior: ${maior}\nMenor: ${menor}`
}

let vetor = [2, 44, 65, 23, 83, 4, 99, -54, 77, -4]

console.log(maiorMenor(vetor))