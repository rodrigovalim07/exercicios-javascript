// novo recurso no ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco : {
        logradouro: 'rua abc',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // estraindo atributos nomeando as variáveis
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa // se não tiver os atributos retorna undefined
console.log(sobrenome, bemHumorada) // 'bemHumorada' foi definido com um valor padrão true

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// const { conta: { agencia, num} } = pessoa
// console.log(agencia, numero) // erro. impossível acessar atributos dentro de um objeto que não exite
