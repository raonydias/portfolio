// HOF -> Higher-Order Function == Função que recebe outra função como parâmetro
function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2);
}

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function subtracao(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}

function divisao(numero1, numero2) {
    return numero1 / numero2;
}

const resultadoSoma = calcular(3, 8, soma);
console.log("Resultado da soma:", resultadoSoma);

const resultadoDivisao = calcular(32, 8, divisao);
console.log("Resultado da divisão:", resultadoDivisao);
