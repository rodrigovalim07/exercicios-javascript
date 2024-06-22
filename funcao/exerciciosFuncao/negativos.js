function negativos(vetor) {
    let negativos = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) negativos++
    }

    return `No vetor existem ${negativos} números negativos.`
}

let vetor = [1, 2, 3, 50, -5, -6, 5, -8, -99, -66]
console.log(negativos(vetor))