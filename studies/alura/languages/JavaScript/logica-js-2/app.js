function exibirTextoNaTela(tag, texto) {
    document.querySelector(tag).textContent = texto;
    if (tag == "p") {
        responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
    }
}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * numeroMaximo + 1);
    let qtdNumerosSorteados = listaNumerosSorteados.length;

    if (qtdNumerosSorteados == numeroMaximo) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    tentativas++;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} tentativa`;
        mensagemTentativas += tentativas > 1 ? "s!" : "!";
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("chutar").setAttribute("disabled", true);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela("p", "O número secreto é menor");
    } else {
        exibirTextoNaTela("p", "O número secreto é maior");
    }

    limparCampo();
}

function limparCampo() {
    document.querySelector("input").value = "";
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    exibirTextoNaTela("h1", "Número Secreto");
    exibirTextoNaTela("p", `Escolha um número entre 1 e ${numeroMaximo}:`);
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("chutar").removeAttribute("disabled");
}

let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto;
let tentativas;

novoJogo();
