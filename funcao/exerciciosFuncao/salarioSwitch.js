function aumentoSal(plano, salario) {

    switch (plano) {
        case 'A':
            salario += salario * 0.1
            return `Seu novo salário: ${salario}`
        case 'B':
            salario += salario * 0.15
            return `Seu novo salário: ${salario}`
        case 'C':
            salario += salario * 0.2
            return `Seu novo salário: ${salario}`
        default:
            return 'Este plano é inválido'
    }
}

console.log(aumentoSal('A', 1800))
console.log(aumentoSal('B', 1800))
console.log(aumentoSal('C', 1800))
console.log(aumentoSal('D', 1800))