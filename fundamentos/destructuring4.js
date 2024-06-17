function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // será invertido os valores (min 40, max 50)
console.log(rand([992])) // passando só o valor mínimo
console.log(rand([ , 10])) // passando só o máximo
console.log(rand([])) // se nao for passado nada, a função vai usar os valores padrão
// console.log(rand()) // erro, pois não é possível desestruturar undefined