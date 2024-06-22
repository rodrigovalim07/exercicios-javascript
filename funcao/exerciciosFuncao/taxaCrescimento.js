function crescimento(alt1, taxa1, alt2, taxa2) {

    let maior = {altura: null, taxa: null}
    let menor = {altura: null, taxa: null}

    if (alt1 > alt2) {
        maior = {altura: alt1, taxa: taxa1};
        menor = {altura: alt2, taxa: taxa2};
    } else {
        maior = {altura: alt2, taxa: taxa2};
        menor = {altura: alt1, taxa: taxa1};
    }

    if (menor.altura == maior.altura & menor.taxa == maior.taxa) return 'As duas sempre terão a mesma altura.'
    else if (menor.taxa <= maior.taxa) return 'A criança menor não ultrapassará a maior.'

    let iniAltMaior = maior.altura
    let iniAltMenor = menor.altura
    let ano = 0

    while (menor.altura <= maior.altura) {
        maior.altura += maior.taxa
        menor.altura += menor.taxa
        ano++
    }

    return `O menor passará o maior em ${ano} ano(s)` +
    `\nAltura inicial e altura final do menor: ${iniAltMenor}cm -> ${menor.altura}cm` +
    `\nAltura inicial e altura final do maior: ${iniAltMaior}cm -> ${maior.altura}cm`
}

console.log(crescimento(165, 2, 153, 4))
console.log(crescimento(151, 2, 142, 2))
console.log(crescimento(162, 2, 162, 2))