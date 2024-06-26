function paresDeIndicesPares(numeros) {
    let resultado = []
    for (let i = 0; i < numeros.length; i += 2) {
        if (numeros[i] % 2 == 0)
            resultado.push(numeros[i])
    }
    return resultado
}

console.log(paresDeIndicesPares([1, 2, 3, 4]))
console.log(paresDeIndicesPares([10, 70, 22, 43]))