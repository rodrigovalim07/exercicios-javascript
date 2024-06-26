function apenasNumeros(array) {
    let resultado = array.filter(a => typeof a == 'number')
    return resultado
}

console.log(apenasNumeros(['Javascript', 1, '3', 'Web', 20]))
console.log(apenasNumeros(['a', 'c']))