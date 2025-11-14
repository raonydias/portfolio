const readline = require("readline");

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

leitor.question("Qual é o seu nome? ", (nome) => {
    console.log("Olá", nome);
    console.log("Boas vindas ao nosso sistema!");

    leitor.question("Qual é a sua idade? ", (idade) => {
        idade >= 18
            ? console.log("Uau! Você já pode tirar a sua CNH!")
            : console.log("Você ainda não pode tirar a sua CNH!");

        leitor.close();
    });
});
