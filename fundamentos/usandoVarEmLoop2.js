const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

// valor 10 em ambos
funcs[2] ()
funcs[8] ()