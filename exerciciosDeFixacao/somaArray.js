const somaArray = function(array) {
    let resultado = array.reduce((acumulador, atual) => acumulador + atual)
    return resultado
}

console.log(somaArray([10, 10, 10]))
console.log(somaArray([15, 15, 15, 15]))