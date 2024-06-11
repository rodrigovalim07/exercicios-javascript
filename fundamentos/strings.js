const escola = "Cod3r";

console.log(escola.charAt(4)); // r
console.log(escola.charAt(5)); // vazio
console.log(escola.charCodeAt(3)); // valor na tabela ASCII
console.log(escola.indexOf('d')); // retorna o indice da primeira ocorrencia, senão encontrar retorna -1
console.log(escola.substring(1)); // imprime do índice 1 adiante
console.log(escola.substring(0, 3)); // do 0 ao 2
console.log('Escola '.concat(escola).concat("!")); // junta as strings (o mesmo que colocar +)
console.log(escola.replace(3, 'e')) // substitui o valor
console.log('Ana,Maria,Pedro'.split(',')) // forma uma array com os valores
