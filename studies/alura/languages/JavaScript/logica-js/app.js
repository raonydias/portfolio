//alert("Boas vindas ao jogo do número secreto.");
let numeroSecreto = 5;
let chute = "";
let tentativas = 0;

// Enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
    tentativas++;
    chute = prompt("Escolha um número entre 1 e 10");

    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
}
