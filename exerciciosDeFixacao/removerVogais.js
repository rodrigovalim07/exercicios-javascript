function removerVogais(palavra) {
    let vogais = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']
    vogais.forEach(vogal => palavra = palavra.replace(vogal, ''))
    return palavra
}

console.log(removerVogais('Cod3r'))
console.log(removerVogais('Fundamentos'))