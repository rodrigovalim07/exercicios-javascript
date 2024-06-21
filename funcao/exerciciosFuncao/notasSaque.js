function notasSaque(valor) {
    let notas = 0
    let frase = ''

    if (valor >= 100) {
        notas = Math.floor(valor / 100)
        valor = valor - (notas * 100)
        frase = `${notas} nota(s) de R$ 100. `
    }

    if (valor >= 50) {
        notas = Math.floor(valor / 50)
        valor = valor - (notas * 50)
        frase += `${notas} nota(s) de R$ 50. `
    }

    if (valor >= 10) {
        notas = Math.floor(valor / 10)
        valor = valor - (notas * 10)
        frase += `${notas} nota(s) de R$ 10. `
    }

    if (valor >= 5) {
        notas = Math.floor(valor / 5)
        valor = valor - (notas * 5)
        frase += `${notas} nota(s) de R$ 5. `
    }

    if (valor >= 1) {
        notas = Math.floor(valor / 1)
        valor = valor - (notas * 1)
        frase += `${notas} nota(s) de R$ 1.`
    }
    
    return frase
 }

 console.log(notasSaque(555))
 console.log(notasSaque(260))
 console.log(notasSaque(18))
 console.log(notasSaque(153))