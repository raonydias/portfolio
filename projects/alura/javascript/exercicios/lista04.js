// 1. Use um for para mostrar no console os números de 1 até 10, um por linha.
console.log("Contagem:");
for (let contador = 1; contador <= 10; contador++) console.log(contador);

// 2. Some todos os números de 1 até 100. Mostre o resultado no final com uma mensagem explicativa.
let soma = 0;
for (let contador = 1; contador <= 100; contador++) soma += contador;
console.log("A soma de todos os números entre 1 e 100 é igual a:", soma);

// 3. Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.
let numero = 13;
for (let contador = 1; contador <= 10; contador++) console.log(numero, "x", contador, "=", numero * contador);

// 4. Use while para contar de 10 até 0 no console. Mostre uma mensagem no fim: "Contagem finalizada!"
console.log("Contagem Regressiva:");
let contagemRegressiva = 10;
while (contagemRegressiva >= 0) {
    console.log(contagemRegressiva);
    contagemRegressiva--;
}
console.log("Contagem finalizada!");

// 5. Use do...while para simular a entrada de números. O programa deve continuar até que o usuário digite 0. Ao final, mostre quantos números foram digitados.
let entradas = [30, 11, 1992, 32, 7, 13, 0];
let numeroEntradas = 0;
let index = 0;

do {
    if (entradas[index] !== 0) numeroEntradas++;
    index++;
} while (entradas[index] !== 0);

console.log(numeroEntradas, "números foram digitados.");

// 6. Defina uma variável numeroSecreto com o valor 7. O usuário tem 3 tentativas para acertar (simule essas tentativas com variáveis). Mostre mensagens de "Acertou!" ou "Tente novamente".
let numeroSecreto = 7;
let tentativas = [30, 8, 7];
let numeroTentativas = 0;

while (numeroTentativas < 3) {
    if (tentativas[numeroTentativas] === numeroSecreto) {
        console.log("Acertou!");
        break;
    } else if (++numeroTentativas < 3) {
        console.log("Tente novamente");
    } else {
        console.log("Você perdeu!");
    }
}

// 7. Crie uma variável anoNascimento e anoAtual. Use um for para listar a idade da pessoa ano a ano até o ano atual.
const anoNascimento = 1992;
let anoAtual = 2025;

for (let ano = anoNascimento; ano <= anoAtual; ano++) {
    console.log("Em", ano, "você tinha", ano - anoNascimento, "anos de idade.");
}

// 8. Mostre todos os números pares entre 1 e 50 usando for.
console.log("Números pares de 1 a 50:");
for (let contador = 1; contador <= 50; contador++) {
    if (contador % 2 == 0) console.log(contador);
}

// 9. Mostre no console quantos números entre 1 e 100 são divisíveis por 3.
let divisiveisTres = 0;
for (let contador = 1; contador <= 100; contador++) {
    if (contador % 3 == 0) divisiveisTres++;
}
console.log(divisiveisTres, "números entre 1 e 100 são divisíveis por 3.");

// 10. Crie um menu simples que exibe opções como "1 - Ver saldo", "2 - Fazer depósito", "3 - Sair". Use do...while para repetir o menu até que o usuário escolher sair.
let opcoes = [1, 2, 4, 0, 3];
let indexOpcao = -1;

do {
    console.log("Opção Escolhida:", opcoes[indexOpcao]);
    console.log("1 - Ver saldo");
    console.log("2 - Fazer depósito");
    console.log("3 - Sair");
    indexOpcao++;
} while (opcoes[indexOpcao] !== 3);
