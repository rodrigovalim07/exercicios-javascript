// let trabalha com escopos de blocos, independente se esta dentro de uma função
// se a variável não for encontrada dentro do bloco, o programa procura fora
let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)