const readline = require("readline");

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function fazerPergunta(pergunta, respostaCorreta) {
    rl.question(pergunta, (resposta) => {
        if (resposta === respostaCorreta) console.log("Resposta correta!");
        else console.log("Resposta errada");

        rl.close();
    });
}

fazerPergunta(
    "Qual é a palavra reservada usada para criar uma variável constante em JavaScript?\n(a) var\n(b) const\n(c) let\n> ",
    "b"
);
