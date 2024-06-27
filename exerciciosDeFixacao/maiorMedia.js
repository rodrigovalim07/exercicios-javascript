const maiorMedia = estudantes => {
    let maiorMedia = 0
    for (let chave in estudantes) {
        let nota = estudantes[chave].reduce((x, y) => x + y)
        let media = (nota / estudantes[chave].length).toFixed(2)
        if (media > maiorMedia) {
            maiorMedia = media
            melhorAluno = { nome: chave, media: media }
        }
    }
    return melhorAluno
}

console.log(maiorMedia(
    { Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
    }
))

console.log(maiorMedia(
    { Vitória: [8, 7.6, 8.9, 6],
    Fabiana: [9, 6.6, 7.9, 8],
    Rodrigo: [8.5, 9.7, 9.2, 9.3]
    }
))