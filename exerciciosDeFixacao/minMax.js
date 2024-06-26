function estaEntre(num, min, max, inclusivo = false) {
    if (inclusivo == true) return num >= min && num <= max
    else
        return num > min && num < max
}

console.log(estaEntre(10, 50, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 100))
console.log(estaEntre(3, 3, 100, true))