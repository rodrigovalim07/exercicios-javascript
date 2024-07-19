const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname, 'dados.txt')

const lerArquivo = caminho => {
    return new Promise(resolve => {
        const conteudo = fs.readFileSync(caminho)
        resolve(conteudo.toString())
    })
}

lerArquivo(caminho).then(console.log)