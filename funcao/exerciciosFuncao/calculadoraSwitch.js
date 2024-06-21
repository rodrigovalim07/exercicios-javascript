const calculadora = function(x, operacao, y) {

    switch (operacao) {
        case '+':
            return x + y
        case '-':
            return x - y
        case '/':
            return x / y
        case '*':
            return x * y
        case '%':
            return x % y
        default:
            return 'Operação não suportada'
    }
}

console.log(calculadora(5, '+', 3))
console.log(calculadora(5, '-', 3))
console.log(calculadora(5, '/', 3))
console.log(calculadora(5, '*', 3))
console.log(calculadora(5, '%', 3))
console.log(calculadora(5, 'g', 3))