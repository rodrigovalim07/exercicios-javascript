function calcularNota(codigo, nota1, nota2, nota3) {
    if (codigo <= 0) {
        return 'Código inválido'
    }
    let mediaPonderada;
    if (nota1 > nota2 & nota1 > nota3) {
        mediaPonderada = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10
    } else if (nota2 > nota1 & nota2 > nota3) {
        mediaPonderada = (nota2 * 4 + nota1 * 3 + nota3 * 3) / 10
    } else {
        mediaPonderada = (nota3 * 4 + nota1 * 3 + nota2 * 3) / 10
    }

    return `Código: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}. Média ponderada: ${mediaPonderada}. `
         + `${mediaPonderada >= 5 ? 'Você foi APROVADO!' : 'Você foi REPROVADO.'}`
}

console.log(calcularNota(1234, 7, 5, 8))
console.log(calcularNota(9881, 8, 2.5, 3))
console.log(calcularNota(-5, 7, 5, 3))