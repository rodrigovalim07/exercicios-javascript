function buscarPalavras(caracter, palavras) {
    let palavrasEncontradas = palavras.filter(palavra =>
        palavra.includes(caracter))
    return palavrasEncontradas
}

console.log(buscarPalavras('pro', ['programação', 'mobile', 'profissional']))
console.log(buscarPalavras('python', ['javascript', 'java', 'c++']))