console.log(Math.ceil(6.1)) // arredonda pra cima

const obj1 = {}
obj1.nome = 'bola'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('executando print na tela')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()