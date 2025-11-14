// 1. Crie uma função chamada saudacao que exiba a mensagem "Olá! Seja bem-vindo(a)!    "
function saudacao() {
    console.log("Olá! Seja bem-vindo(a)");
}
saudacao();

// 2. Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."
function apresentarPessoa(nome, idade) {
    console.log("Olá, meu nome é", nome, "e tenho", idade, "anos.");
}
apresentarPessoa("Raony", 32);

// 3. Crie uma função que receba peso e altura e retorne o valor do IMC. Mostre também uma frase com o resultado.
console.log("Exercício 3 resolvido no arquivo 'lista05-03.js'");

// 4. Crie uma função verificarAprovação(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.
function verificarAprovacao(nota) {
    nota >= 7 ? console.log("Aprovado") : console.log("Reprovado");
}
verificarAprovacao(8);

// 5. Crie uma função ePar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores.
function ePar(numero) {
    if (numero % 2 == 0) return true;
    else return false;
}
console.log(ePar(-2));
console.log(ePar(-1));
console.log(ePar(0));
console.log(ePar(1));
console.log(ePar(2));

// 6. Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa.
function soma(numero1, numero2) {
    return numero1 + numero2;
}
console.log("A soma de 7 e 13 é igual a", soma(7, 13));

// 7. Re-escreva o exercício da calculadora de troca usando uma função calcularTroco(compra, pagamento)
function calcularTroco(compra, pagamento) {
    let troco = pagamento - compra;
    console.log("O troco é de: R$", troco.toFixed(2));
}
calcularTroco(35.9, 50);

// 8. Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.
const somaArrow = (numero1, numero2) => numero1 + numero2;
console.log("A soma de 7 e 13 é igual a", somaArrow(7, 13));

// 9. Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!"
function acao() {
    console.log("Executando ação!");
}

function executarAcao(acao) {
    acao();
}

executarAcao(acao);

// 10. Crie uma função fazerPergunta(pergunta, respostaCorreta). A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada (simule a resposta com uma variável).
console.log("Exercício 10 resolvido no arquivo 'lista05-10.js'");
