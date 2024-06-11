const numeros = [10, 6, 8, 5, 2, 22, 13, 35, 9, 2];
var soma = 0;
var i = 0;

while(i < numeros.length){
    soma += numeros[i];
    i++;
}

console.log(`A soma de todos os números do array é: ${soma}`);