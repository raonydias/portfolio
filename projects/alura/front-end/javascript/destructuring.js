const pessoa = {
    nome: "Raony",
    idade: 32,
    profissao: "Estudante",
};

const { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

function saudacao({ nome, idade }) {
    console.log("\nOlá,", nome);
    if (idade >= 18) console.log("Você é maior de idade.");
    else console.log("Você é menor de idade.");
}

saudacao(pessoa);
