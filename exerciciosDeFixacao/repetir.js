const repetir = function(elemento, quantidade) {
    let resultado = []
    for (let i = 0; i < quantidade; i++) {
        resultado.push(elemento)
    }
    return resultado
}

console.log(repetir('código', 2))
console.log(repetir(7, 3))