{
    {
        {
            {
                var sera = 'será?'
            }
        }
    }
}
console.log(sera) // variável 'sera' é visível mesmo fora dos blocos

function teste() {
    var local = 123
}

teste()
console.log(local) // não ficará visível fora da função