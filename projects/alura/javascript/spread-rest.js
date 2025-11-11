let pessoa1 = {
    nome: "Raony",
    idade: 32,
    profissao: "Estudante",
};

const pessoa2 = { ...pessoa1 };

pessoa2.idade++;

console.log(pessoa1);
console.log(pessoa2);

pessoa1 = {
    ...pessoa2,
    profissao: "Desenvolvedor",
    possuiCNH: false,
};

console.log(pessoa1);

const { nome, ...restante } = pessoa1;

console.log(nome);
console.log(restante);
