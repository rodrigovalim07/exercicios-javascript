const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

// valores 2 e 8
funcs[2] ()
funcs[8] ()