function jurosSimples(capital, taxa, tempo) {
    let juros = capital * taxa * tempo
    let montante = capital + juros
    return montante.toFixed(2)
}

function jurosCompostos(capital, taxa, tempo) {
    let montante = capital * (1 + taxa) ** tempo
    return montante.toFixed(2)
}

console.log('juros simples: ' + jurosSimples(1000, 0.05, 6))
console.log('juros compostos: ' + jurosCompostos(1000, 0.05, 6))