function intervalo(vetor) {
    let numIntervalo = 0

    for (i in vetor) {
        if (vetor[i] >= 10 & vetor[i] <= 20) numIntervalo += 1
    }

    return `${numIntervalo} números dentro do intervalo.`
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log(intervalo(vetor))