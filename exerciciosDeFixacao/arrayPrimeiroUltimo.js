const primeiroEUltimo = function(array) {
    let novoArray = []
    novoArray.push(array[0])
    novoArray.push(array[array.length - 1])
    return novoArray
}

console.log(primeiroEUltimo([7, 14, 'olá']))
console.log(primeiroEUltimo([-100, 'aplicativo', 16]))