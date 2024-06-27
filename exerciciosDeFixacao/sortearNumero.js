function sortear(numero) {
    let min = Math.ceil(1)
    let max = Math.floor(10)
    let numSorteado = Math.floor(Math.random() * (max - min + 1)) + min
    if (numSorteado == numero) return 'Parabéns! O número sorteado foi o ' + numSorteado
    return 'Que pena... O número sorteado foi o ' + numSorteado
  }

  console.log(sortear(10))
  console.log(sortear(5))
  console.log(sortear(5))