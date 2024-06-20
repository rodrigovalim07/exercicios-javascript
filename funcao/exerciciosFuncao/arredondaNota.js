function resultado(nota) {
    let notaArredondada = arredondaNota(nota)
    if (notaArredondada < 40) {
        console.log(`Aluno reprovado com a nota: ${notaArredondada}`)
    } else {
        console.log(`Aluno aprovado com a nota: ${notaArredondada}`)
    }
}

function arredondaNota(nota) {
    if (nota > 40) return nota
    else if (nota % 5 < 3) {
        nota = 5 - (nota % 5)
        return nota
    }
    else return nota
}

resultado(100)
resultado(30)
resultado(38)
resultado(88)
resultado(61)
