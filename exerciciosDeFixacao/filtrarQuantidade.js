const filtrarQuantidadeDigitos = (numeros, limite) => {
    return numeros.filter(numero => numero.toString().length == limite)
}

console.log(filtrarQuantidadeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarQuantidadeDigitos([5, 9, 1, 125, 11], 1))