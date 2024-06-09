var produto = "XPE 1013 Plus ID";
const codigoDoProduto = "1A2B3-54";

const exibirDetalhesProduto = () => {
    let categoria = "Proteiro eletronico";

    console.log(produto);
    console.log(categoria);
    console.log(codigoDoProduto);
    console.log(`O produto ${produto}, tem a categoria ${categoria} e possui o codigo ${codigoDoProduto}.`);
}

exibirDetalhesProduto();