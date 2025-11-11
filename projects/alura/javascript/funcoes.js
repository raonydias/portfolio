function saudacao(nome) {
    console.log("Olá", nome);
}

saudacao("Raony");
saudacao("Jade");
saudacao("Rafael");
saudacao("Pietro");

function calcularDobro(numero) {
    return numero * 2;
}

const numeroDobrado = calcularDobro(4);
console.log("O dobro de 4 é:", numeroDobrado);

// Arrow Functions

const saudacaoArrow = (nome) => {
    console.log("Vida longa e próspera", nome);
};

saudacaoArrow("Raony");

const calcularDobroArrow = (numero) => {
    return numero * 2;
};

const numeroDobradoArrow = calcularDobroArrow(4);
console.log("O dobro de 4 é:", numeroDobradoArrow);

const saudacaoArrowCurta = (nome) => console.log("Olá", nome);
saudacaoArrowCurta("Raony");

const calcularDobroArrowCurta = (numero) => numero * 2;

const numeroDobradoArrowCurta = calcularDobroArrowCurta(4);
console.log("O dobro de 4 é:", numeroDobradoArrowCurta);
