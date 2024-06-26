const objetoParaArray = obj => {
    let resultado = []
    for (let chave in obj) {
        resultado.push([chave, obj[chave]])
    }
    return resultado
}

console.log(objetoParaArray(
    { nome: 'Maria', profissao: 'Desenvolvedor de Software'}
))

console.log(objetoParaArray(
    { codigo: '11111', preco: 12000}
))