let idade = 32;

if (idade >= 18) console.log("É maior de idade.");
else console.log("É menor de idade.");

const notaDoAluno = 8;

if (notaDoAluno >= 9) console.log("Nota excelente!");
else if (notaDoAluno >= 7) console.log("Nota boa");
else if (notaDoAluno >= 4) console.log("Nota média");
else console.log("Nota ruim");

idade >= 18 ? console.log("É maior de idade.") : console.log("É menor de idade.");

notaDoAluno >= 9
    ? console.log("Nota excelente!")
    : notaDoAluno >= 7
    ? console.log("Nota boa")
    : notaDoAluno >= 4
    ? console.log("Nota média")
    : console.log("Nota ruim");
