const planoSaude = function(idade) {
    valor = 100;

    if (idade < 10) {
        valor += 80
    } else if (idade >= 10 & idade <= 30) {
        valor += 50
    } else if (idade > 30 & idade <= 60) {
        valor += 95
    } else
        valor += 130

    return 'Valor do plano de saúde: ' + valor
}

console.log(planoSaude(9))
console.log(planoSaude(10))
console.log(planoSaude(30))
console.log(planoSaude(55))
console.log(planoSaude(60))
console.log(planoSaude(66))