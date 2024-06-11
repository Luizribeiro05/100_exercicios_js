const numeros = [10, 6, 8, 5, 2, 22, 13, 35, 9, 2];

const calcularMedia = (numeros) =>{
    let soma = 0;
    

    for (let i = 0; i < numeros.length; i++){
        soma += numeros[i]
    };

    const media = soma / numeros.length;
    return console.log(`A média dos números do array é: ${media}`);
}

calcularMedia(numeros);