const aprovado = 7;
var notas = [8 , 9.6 , 7.5];

console.log(`Nota 1: ${notas[0]}`);
console.log(`Nota 2: ${notas[1]}`);
console.log(`Nota 3: ${notas[2]}`);

var somaNotas = (notas[0] + notas[1] + notas[2]);
var media = somaNotas / notas.length;

console.log(`Media: ${media.toFixed(2)}`);

if (media >= aprovado){
    console.log("O aluno está Aprovado")
} else {
    console.log("O aluno está Reprovado")
}