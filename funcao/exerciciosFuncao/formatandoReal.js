const dinheiroFormatado = num => {
    let valorEmReais = num.toFixed(2).toString().replace('.', ',');
    
    console.log('R$' + valorEmReais)
}

dinheiroFormatado(15815818.5495821)