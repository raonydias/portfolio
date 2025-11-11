// 1. Crie um objeto com seu nome, idade e profissão.
let pessoa = {
    nome: "Raony",
    idade: 32,
    profissao: "Estudante",
};

// 2. Acesse e exiba o valor da propriedade "nome" no console.
console.log("Nome:", pessoa.nome);

// 3. Modifique a propriedade "idade" com um novo valor.
pessoa.idade += 1;

// 4. Adicione ao objeto uma nova propriedade chamada "cidade".
pessoa.cidade = "São Paulo";

// 5. Crie uma função que recebe um objeto pessoa e retorna uma frase com seus dados.
function descreverPessoa(pessoa) {
    return `${pessoa.nome} é um ${pessoa.profissao} com ${pessoa.idade} anos de idade que mora em ${pessoa.cidade}.\n`;
}
console.log("\n" + descreverPessoa(pessoa));

// 6. Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.
const pessoas = [
    {
        nome: "Raony",
        idade: 32,
    },
    {
        nome: "Jade",
        idade: 6,
    },
    {
        nome: "Rafael",
        idade: 20,
    },
];

// 7. Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.
console.log("Pessoas maiores de idade:");
pessoas.forEach((pessoa) => {
    if (pessoa.idade >= 18) console.log(pessoa.nome);
});

// 8. Crie um objeto com um método chamado "saudacao" que imprime "Olá", eu sou [nome]".
pessoa.saudacao = function () {
    console.log("\nOlá, eu sou", this.nome + ".\n");
};
pessoa.saudacao();

// 9. Use um laço for...in para listar todas as propriedades e seus valores do pessoa pessoa criado nessa lista de exercícios.
for (chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}

// 10. Crie um objeto produto com preco e quantidade, e calcule o valor total da compra.
const produto = {
    preco: 9.99,
    quantidade: 13,
};
console.log("\nTotal da compra: R$", (produto.preco * produto.quantidade).toFixed(2));
