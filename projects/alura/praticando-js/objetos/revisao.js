// OBJETOS

// Crie um objeto 'pessoa' como jogadora em uma plataforma de games e adicione algumas características como propriedades.
const pessoa = {
    nome: "Rafael V. L.",
    nascimento: "2005-06-22",
    cpf: "23445667889",
    pontuacao: 4576,
    trofeus: ["mira insana", "game sense"],
};

// Imprima no terminal o nome da pessoa e um dos troféus.
console.log(pessoa.nome);
console.log(pessoa.trofeus[0]);

// Exclua uma propriedade do objeto.
delete pessoa.cpf;
console.log(pessoa);

// Criar uma função para iterar os troféus
function exibeTrofeus(listaTrofeus) {
    for (const trofeu of listaTrofeus) {
        console.log(`Tem o troféu ${trofeu}`);
    }
}
exibeTrofeus(pessoa.trofeus);

// Adicione ao objeto um método para calcular a idade da pessoa e retornar o valor no terminal como string.
pessoa.calculaIdade = function calculaIdade() {
    const anoNascimento = parseInt(this.nascimento.slice(0, 4));
    const idade = new Date().getFullYear() - anoNascimento;
    console.log(`A idade é ${idade}`);
};
pessoa.calculaIdade();

// Acesse um array de objetos e imprima no terminal os nomes e status de ativação de cada pessoa.
const clientes = [
    {
        nome: "Raony D.",
        ativo: false,
    },
    {
        nome: "Rafael V.",
        ativo: true,
    },
    {
        nome: "Pietro C.",
        ativo: true,
    },
];

for (const cliente of clientes) {
    const status = cliente.ativo ? "ativo" : "inativo";
    console.log(`Status do cliente ${cliente.nome}: ${status}`);
}
