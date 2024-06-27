const encontreALetra = (letra, frase) => {
    let letras = frase.split('')
    let qntLetras = 0
    for (i in letras) {
        if (letras[i] == letra) {
            qntLetras++
        }
    }
    return qntLetras
}

console.log(encontreALetra('r', 'A sorte favorece os audazes'))
console.log(encontreALetra('c', 'Conhece-te a ti mesmo'))