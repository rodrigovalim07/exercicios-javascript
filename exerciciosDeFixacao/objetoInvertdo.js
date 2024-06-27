function objetoIvertido(obj) {
    let novoObj = {}
    for (let chave in obj) {
        novoObj[obj[chave]] = chave
    }
    return novoObj
}

function objetoIvertido2(obj) {
    const chaveValorInvertidos = Object.entries(obj)
    .map(parChaveValor => parChaveValor.reverse())
    
    return Object.fromEntries(chaveValorInvertidos)
}

let obj = { a: 1, b: 2, c: 3 }
console.log(objetoIvertido(obj))
console.log(objetoIvertido2(obj))