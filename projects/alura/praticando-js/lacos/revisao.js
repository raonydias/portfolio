// FOR

// Gerar números aleatórios de 1 a 50 e interromper o laço caso o número gerado seja 15.
// Interromper depois de 30 tentativas e contar a quantidade de tentativas.

for (let contador = 1; contador <= 30; contador++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);

    if (numero === 15) {
        console.log(`${numero} em ${contador} tentativas`);
        break;
    }
}

// Gerar números aleatórios de 1 a 50
// Criar um contador que só é incrementado caso os números NÃO sejam divisíveis por 5
// No final, exibir o valor do contador
let contador = 0;

for (let i = 1; i <= 30; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);

    if (numero % 5 === 0) {
        continue;
    }
    contador++;
}

console.log(contador);

// WHILE

// Gerar um lanço que tente "adivinhar" um dado número de 1 a 50
// E conte a quantidade de tentativas até o resultado
const numeroSecreto = 8;
let numeroAleatorio = 0;
let tentativas = 0;

while (numeroSecreto !== numeroAleatorio) {
    numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    tentativas++;
}

console.log(`Adivinhou em ${tentativas} tentativas.`);

// DO...WHILE
// Criar um laço que gere um número aleatório de 1 a 50
// Executar o laço enquanto não gerar um número par
let numeroRandom = 0;

do {
    numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    console.log(numeroRandom);
} while (numeroRandom % 2 !== 0);

// Criar um laço que recebe um texto e verifica se é um palíndromo
// Imprimir no console o texto, informando se é ou não um palíndromo

const texto = "alura";
let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}

const resultado = texto === textoInvertido ? `${texto} é palíndromo` : `${texto} não é palíndromo`;
console.log(resultado);
