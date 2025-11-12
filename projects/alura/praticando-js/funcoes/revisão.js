// FUNCTION

// Elevar um número x a uma potência y
function calculaPotencia(num, pow) {
    let resultado = 1;
    for (let i = 0; i < pow; i++) {
        resultado *= num;
    }
    return resultado;
}
console.log(calculaPotencia(4, 3));
console.log(calculaPotencia(3, 4));
console.log(calculaPotencia(5, 5));

// Criar função que calcula o fatorial de um número usando recursão.
// fatorial: n! multiplicação de n por seus antecessores maiores ou iguais a 1
// ex.: 5! = 5 x 4 x 3 x 2 x 1

const fatorial = function f(num) {
    if (num === 0 || num === 1) return 1;
    return num * f(num - 1);
};
console.log(fatorial(5));

// Criar uma função para calcular juros compostos
// A Função deve receber os valores no formato inteiro: valor, $ de juros e tempo
// Fórmula: valor * (juro elevado a tempo)
const calculaJuros = (valor, juros, tempo) => {
    let taxaJuros = juros / 100 + 1;
    return valor * Math.pow(taxaJuros, tempo);
};
console.log(calculaJuros(1000, 5, 2));

// CALLBACKS

// Criar uma função que faça operações matemáticas entre 2 valores (soma e multiplicação)
// Função deve receber por parâmetro: operação desejada, valor 1 e valor 2
function soma(a, b) {
    return a + b;
}
function subtrai(a, b) {
    return a - b;
}
function multiplica(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function calcula(fnOperacao, valorA, valorB) {
    return fnOperacao(valorA, valorB);
}

console.log(calcula(soma, 5, 5));
console.log(calcula(subtrai, 5, 5));
console.log(calcula(multiplica, 5, 5));
console.log(calcula(divide, 5, 5));

// Criar uma função que emita uma mensagem caso o usuário X não esteja interagindo com o sistema após quantidade Y de tempo
const idUsuario = "4545656";

const avisaUsuario = (idUsuario) => console.log(`Sessão de ${idUsuario} está inativa`);

setTimeout(avisaUsuario, 2000, idUsuario);
setTimeout((idUsuario) => console.log(`Sessão de ${idUsuario} está inativa`), 4000, idUsuario);
