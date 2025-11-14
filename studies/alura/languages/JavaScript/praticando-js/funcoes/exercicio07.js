function responderUsuario(nome, fnResposta) {
    console.log("Processando sua pergunta...");
    setTimeout(() => {
        fnResposta(nome);
    }, 3000);
}
const mostrarResposta = (nome) => {
    console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`);
};

responderUsuario("Raony", mostrarResposta);
