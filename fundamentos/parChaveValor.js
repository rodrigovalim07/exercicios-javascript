// chave e valor. nesse caso a chave é 'saudacao' e 'opa' é o valor
// constante 'saudacao' declarada no nével do arquivo, um nível "geral"
const saudacao = 'opa' // contexto léxico 1 = local onde a variável foi definida no código

function exec() {
    const saudacao = 'falaa' // contexto léxico 2. contexto da função
    return saudacao
}

// objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)