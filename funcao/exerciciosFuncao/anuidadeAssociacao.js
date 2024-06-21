const anuidade = function(mes, valor) {
    atraso = mes - 1
    let valorJuros = (valor * (1 + 0.05)**atraso).toFixed(2)
    
    switch (mes) {
        case 1:
            return 'Valor a ser pago no mês de Janeiro: ' + valorJuros
        case 2:
            return 'Valor a ser pago no mês de Fevereiro: ' + valorJuros
        case 3:
            return 'Valor a ser pago no mês de Março: ' + valorJuros
        case 4:
            return 'Valor a ser pago no mês de Abril: ' + valorJuros
        case 5:
            return 'Valor a ser pago no mês de Maio: ' + valorJuros
        case 6:
            return 'Valor a ser pago no mês de Junho: ' + valorJuros
        case 7:
            return 'Valor a ser pago no mês de Julho: ' + valorJuros
        case 8:
            return 'Valor a ser pago no mês de Agosto: ' + valorJuros
        case 9:
            return 'Valor a ser pago no mês de Setembro: ' + valorJuros
        case 10:
            return 'Valor a ser pago no mês de Outubro: ' + valorJuros
        case 11:
            return 'Valor a ser pago no mês de Novembro: ' + valorJuros
        case 12:
            return 'Valor a ser pago no mês de Dezembro: ' + valorJuros
        default:
            return 'Mês inválido'
    }
}

console.log(anuidade(6, 1000))
console.log(anuidade(5, 1000))
console.log(anuidade(4, 1000))
console.log(anuidade(3, 1000))
console.log(anuidade(8, 1000))
console.log(anuidade(11, 1000))
console.log(anuidade(15, 100))