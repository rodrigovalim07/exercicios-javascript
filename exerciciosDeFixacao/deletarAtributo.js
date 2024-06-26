function deletarAtributo(obj, atributo) {
    let novoObj = {...obj}
    delete novoObj[atributo]
    return novoObj
}
let obj = { id: 20, nome: 'Caneta', descricao: 'Não preenchido'}
console.log(deletarAtributo({ a: 1, b: 2}, 'a'))
console.log(deletarAtributo(obj, 'descricao'))
console.log(Object.is(deletarAtributo(obj, 'descricao'), obj))