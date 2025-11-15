let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    document.querySelector(tag).textContent = texto;
}

exibirTextoNaTela("h1", "Número Secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10:");

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);
}
