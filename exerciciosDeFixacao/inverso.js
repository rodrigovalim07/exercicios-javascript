function inverso(param) {
    if (typeof param == 'number') {
        return console.log(param - param * 2)
    } else if (typeof param == 'boolean') {
        return console.log(!param)
    } else {
        return console.log('Booleano ou números esperados, mas o parâmetro é do tipo '
            + typeof param)
    }
}

inverso(true)
inverso('6')
inverso(-2000)
inverso(2000)
inverso('programação')