function simboloMais(quantidade) {
    let resultado = ''
    for (let i = 0; i < quantidade; i++) {
        resultado = resultado.concat('+')
    }
    return resultado
}

console.log(simboloMais(2))
console.log(simboloMais(4))