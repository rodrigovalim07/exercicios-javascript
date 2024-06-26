const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio: todos os alunos são bolsistas?
const bolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    if (atual) acumulador++
    return acumulador < alunos.length ? false : true
}, 0)
// outra maneira
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
console.log('Todos os alunos são bolsistas? ' + bolsistas)

// Desafio 2: algum aluno é bolsista?
const algumBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    if (atual) acumulador++
    return acumulador >= 1 ? true : false
}, 0)
// outra maneira
const aoMenosUm = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(aoMenosUm))
console.log('Algum aluno é bolsista? ' + algumBolsista)