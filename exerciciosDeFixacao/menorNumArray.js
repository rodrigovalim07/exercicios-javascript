function menorNumero(numeros) {
    let menor = numeros[0]
    for (i in numeros) {
        if (numeros[i] < menor)
            menor = numeros[i]
    }
    return menor
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))