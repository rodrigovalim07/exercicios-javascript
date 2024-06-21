const cardapio = function(codigo, qnt) {
    let valor = 0
    switch (codigo) {
        case 100:
            valor = 3 * qnt
            console.log(`Valor a ser pago pelo(s) cahorro(s)-quente(s): R$${valor.toFixed(2)}`)
            break
        case 200:
            valor = 4 * qnt
            console.log(`Valor a ser pago pelo(s) hambúrguer(es) simples: R$${valor.toFixed(2)}`)
            break
        case 300:
            valor = 5.5 * qnt
            console.log(`Valor a ser pago pelo(s) cheeseburguer(es): R$${valor.toFixed(2)}`)
            break
        case 400:
            valor = 7.5 * qnt
            console.log(`Valor a ser pago pelo(s) bauru(s): R$${valor.toFixed(2)}`)
            break
        case 500:
            valor = 3.5 * qnt
            console.log(`Valor a ser pago pelo(s) refrigerante(s): R$${valor.toFixed(2)}`)
            break
        case 600:
            valor = 2.8 * qnt
            console.log(`Valor a ser pago pelo(s) suco(s): R$${valor.toFixed(2)}`)
            break
        default:
            console.log('Este produto não existe')
    }
}

cardapio(100, 5)
cardapio(200, 5)
cardapio(300, 5)
cardapio(400, 5)
cardapio(500, 5)
cardapio(600, 5)
cardapio(700, 5)