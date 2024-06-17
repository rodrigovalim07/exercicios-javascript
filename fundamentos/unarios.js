let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // operadores prefixados tem preferência
// console.log(num1 === num2--) // daria falso
console.log(num1 === num2)