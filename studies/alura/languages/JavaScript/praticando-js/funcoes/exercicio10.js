const sortearNome = (lista) => lista[Math.floor(Math.random() * lista.length)];

const exibirSorteado = ({ nome }) => console.log(`Participante sorteado: ${nome}`);

function avaliarPontuacao({ pontuacao }) {
    console.log(`Pontuação: ${pontuacao}`);

    if (pontuacao > 80) return "Parabéns, você foi premiado!";
    else if (pontuacao > 50) return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
    else return "Infelizmente, não foi dessa vez.";
}

function realizarSorteio(participantes) {
    console.log("Sorteando...");
    const sorteado = sortearNome(participantes);

    setTimeout(() => {
        exibirSorteado(sorteado);
        const resultado = avaliarPontuacao(sorteado);

        console.log(resultado);
    }, 2000);
}

const participantes = [
    { nome: "Raony", pontuacao: 92 },
    { nome: "Rafael", pontuacao: 67 },
    { nome: "Pietro", pontuacao: 44 },
];

realizarSorteio(participantes);
