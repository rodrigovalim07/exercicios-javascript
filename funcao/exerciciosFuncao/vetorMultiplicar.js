function multiplicarValor(vetor, mult) {
    let resultado = []
    for (i in vetor) {
        resultado.push(vetor[i] * mult)
    }
    return resultado
}

function multValorMaiorQue5(vetor, mult) {
    let resultado = []
    for (i in vetor) {
        if (vetor[i] > 5) resultado.push(vetor[i] * mult)
    }
    return resultado
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(multiplicarValor(vetor, 2))
console.log(multValorMaiorQue5(vetor, 2))