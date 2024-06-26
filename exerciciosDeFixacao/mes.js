const nomeDoMes = valor => {
    switch (valor) {
        case 12:
            console.log('Dezembro')
            break
        case 11:
            console.log('Novembro')
            break
        case 10:
            console.log('Outubro')
            break
        case 9:
            console.log('Setembro')
            break
        case 8:
            console.log('Agosto')
            break
        case 7:
            console.log('Julho')
            break
        case 6:
            console.log('Junho')
            break
        case 5:
            console.log('Maio')
            break
        case 4:
            console.log('Abril')
            break
        case 3:
            console.log('Março')
            break
        case 2:
            console.log('Fevereiro')
            break
        case 1:
            console.log('Janeiro')
            break
        default:
            console.log('Mês inválido')
    }
}

nomeDoMes(1)
nomeDoMes(4)
nomeDoMes(13)