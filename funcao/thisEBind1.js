const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar // conflito entre paradigmas funcional e OO
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()