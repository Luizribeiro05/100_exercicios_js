const aluno = {
    "nome" : "Luiz",
    "CPF" : "123.456.789.12",
    "cidade" : "João Pessoa",
    "notas" : [8.7 , 9.0 , 6.5 , 8.5]
};

console.log(`Nome: ${aluno.nome}`);
console.log(`CPF: ${aluno.CPF}`);
console.log(`Cidade: ${aluno.cidade}`);

for (var i = 0; i < aluno.notas.length; i++) {
    console.log("Nota " + (i + 1) + ": " + aluno.notas[i]);
}

var somaNotas = 0;
for (var i = 0; i < aluno.notas.length; i++) {
    somaNotas += aluno.notas[i];
}

var mediaNotas = somaNotas / aluno.notas.length;
console.log("Média das notas: " + mediaNotas.toFixed(2));

const notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)];
const notaConvertida = notaAleatoria * 10;
console.log(`Nota aleatória convertida de 0-10 para 0-100: ${notaConvertida}`);