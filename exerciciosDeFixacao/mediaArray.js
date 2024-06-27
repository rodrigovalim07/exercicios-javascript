const media = array => {
    let soma = 0
    for (i in array) {
        soma += array[i]
    }
    return soma / array.length
}

console.log(media([0, 10]))
console.log(media([1, 2, 3, 4, 5]))