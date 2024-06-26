console.log('teste 01)', '1' == 1) // true, pois só compara o valor
console.log('02)', '1' === 1) // false, pois compara também os tipos
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
// ambos falsos, pois comparam referências de memória
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime === d2.getTime) // true

console.log('12)', undefined == null) // true
console.log('12)', undefined === null) // false