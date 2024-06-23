function conceito(vetorNota) {
    let conceitos = []
    for (i in vetorNota) {
        if (vetorNota[i] >=0 & vetorNota[i] < 5) {
            conceitos.push('conceito D')
        } else if (vetorNota[i] >= 5 & vetorNota[i] < 7) {
            conceitos.push('conceito C')
        } else if (vetorNota[i] >= 7 & vetorNota[i] < 9) {
            conceitos.push('conceito B')
        } else if (vetorNota[i] >= 9 & vetorNota[i] <= 10) {
            conceitos.push('conceito A')
        } else conceitos.push('nota inválida')
    }
    return conceitos
}

let notas = [1.5, 4.9, 6.5, 8.3, 9.7, 12]
console.log(notas)
console.log(conceito(notas))