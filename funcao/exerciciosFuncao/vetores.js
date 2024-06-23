function adiciona(vetor1, vetor2) {
    for (i of vetor2) {
        vetor1.push(i)
    }
    return vetor1
}

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

console.log(adiciona(vetorPilha, vetorAdiciona))

// muito mais fácil assim
let vetorFinal = vetorPilha.concat(vetorAdiciona)
console.log(vetorFinal)