const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        qualquerCoisa: 1,
        obj2: {
            outraCoisa: 2 // objetos dentro de objetos
        }
    }
}

console.log(prod2)