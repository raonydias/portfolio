const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Boas vindas ao Quiz de JavaScript!");
console.log("Responda com a letra correta: a, b, ou c\n");

let acertos = 0;

rl.question("1) Qual palavra usamos parar criar uma função?\n(a) define\n(b) function\n(c) create\n> ", (resposta1) => {
    if (resposta1 === "b" || resposta1 === "B") acertos++;

    rl.question("2) Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat\n(c) for\n> ", (resposta2) => {
        if (resposta2 === "c" || resposta2 === "C") acertos++;

        rl.question('3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n> ', (resposta3) => {
            if (resposta3 === "b" || resposta3 === "B") acertos++;

            if (acertos === 3) {
                console.log("\nParabéns! Você acertou todas as perguntas!");
            } else if (acertos === 2) {
                console.log("\nMuito bom! Você acertou 2 das 3 perguntas. Continue assim!");
            } else if (acertos === 1) {
                console.log("Você acertou apenas 1 pergunta. Continue estudando!");
            } else {
                console.log("\nInfelizmente você não acertou nenhuma pergunta. Continue praticando e tente novamente.");
            }

            rl.close();
        });
    });
});
