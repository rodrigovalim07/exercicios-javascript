const fatorial = (num) => {
    if (num == 0) return 1;

    let soma = num * (num-1);

    for (let i = num - 2; i > 0; i--) {
        soma *= i
    }
    return soma
}

console.log(fatorial(7))
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(2))