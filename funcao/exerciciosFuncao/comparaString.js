const comparaString = (str1, str2) => {
    let compara = str1.toLowerCase() === str2.toLowerCase()
    return compara
}

let fruta1 = 'banana'
let fruta2 = 'laranja'
let fruta1Upper = 'BANANA'

console.log('As frutas são iguais? ' + comparaString(fruta1, fruta2))
console.log('As frutas são iguais? ' + comparaString(fruta1, fruta1Upper))