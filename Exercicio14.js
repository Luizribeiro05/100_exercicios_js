const base = 10; 
var altura = 5;

const calcularAreaDoTriangulo = (altura) =>{
    let area = 0.5 * base * altura;
    console.log(`A área do triângulo com base ${base} e altura ${altura} é: ${area.toFixed(2)}`);

}

calcularAreaDoTriangulo(altura);