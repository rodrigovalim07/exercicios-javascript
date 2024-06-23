const inicioFim = function(ini = 0, fim = 100) {
    let impares = []
    let iniTemp = 0
    if (ini > fim) {
        iniTemp = ini
        ini = fim
        fim = iniTemp
    }

    for (let i = ini; i <= fim; i++) {
        if (i % 2 == 1) impares.push(i)
    }

    return 'Números ímpares entre o inicio e o fim: ' + impares
}

console.log(inicioFim())
console.log(inicioFim(5, 20))
console.log(inicioFim(30, 3))