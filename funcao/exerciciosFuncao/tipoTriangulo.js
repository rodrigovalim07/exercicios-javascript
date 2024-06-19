function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3) {
        console.log('o triângulo é Equilátero')
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        console.log('o triângulo é Isósceles')
    } else {
        console.log('o triângulo é Escaleno')
    }
}

tipoTriangulo(2, 2, 2)
tipoTriangulo(2, 3, 2)
tipoTriangulo(2, 3, 4)