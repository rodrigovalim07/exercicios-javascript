const multiplicar = function(num, mult) {
    let soma = 0
    for (let i = 1; i <= mult; i++) {
        soma += num
    }
    return soma
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))