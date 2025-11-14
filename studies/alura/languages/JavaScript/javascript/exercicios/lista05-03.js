const readline = require("readline");

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Informe o seu peso em quilos (kg).\nSepare as casas decimais com ponto.\n> ", (peso) => {
    rl.question("Informe a sua altura em metros (m).\nSepare as casas decimais com ponto.\n> ", (altura) => {
        const IMC = peso / (altura * altura);

        if (IMC < 18.5) console.log("IMC:", IMC.toFixed(2), "\nVocê está abaixo do seu peso ideal");
        else if (IMC <= 24.9) console.log("IMC:", IMC.toFixed(2), "\nVocê está no seu peso ideal");
        else if (IMC <= 29.9) console.log("IMC:", IMC.toFixed(2), "\nVocê está acima no seu peso ideal");
        else if (IMC <= 34.9) console.log("IMC:", IMC.toFixed(2), "\nVocê está com Obesidade grau I");
        else if (IMC <= 39.9) console.log("IMC:", IMC.toFixed(2), "\nVocê está com Obesidade grau II");
        else console.log("IMC:", IMC.toFixed(2), "\nVocê está com Obesidade grau III");

        rl.close();
    });
});
