const numeros = [10, 6, 8, 5, 2, 22, 13, 35, 9, 2];

const selecionandoMaiorNumero = (numeros) =>{
    let maiorNumero = Math.max(...numeros);

    console.log(`O maior numero do array é : ${maiorNumero}`);
}

selecionandoMaiorNumero(numeros);