function resultado(nota) {
    let notaArredondada = arredondaNota(nota)
    if (notaArredondada < 40) {
        console.log(`Reprovado com nota: ${notaArredondada}`)
    } else {
        console.log(`Aprovado com nota: ${notaArredondada}`)
    }
}

function arredondaNota(nota) {
    if (nota < 38 || nota % 5 < 3) return nota
    else return nota + 5 - (nota % 5)
}

resultado(100)
resultado(30)
resultado(29)
resultado(38)
resultado(88)
resultado(61)
