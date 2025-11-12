// 1. Imagine que você está criando uma página de boas-vindas para um site de cursos online. Ao acessar a plataforma, o sistema precisa exibir uma mensagem de saudação para cada usuário. Às vezes, porém, o nome da pessoa pode estar ausente — e, nesse caso, uma saudação genérica deve ser exibida.
// Sua tarefa é criar uma função chamada saudacao que receba um nome como parâmetro, mas que funcione mesmo quando nenhum nome for informado, exibindo uma saudação genérica. Use o parâmetro pré-definido para lidar com isso.
function saudacao(nome = "") {
    const mensagem = nome ? `Olá, ${nome}!` : "Olá!";
    console.log(mensagem, "Bem-vindo(a)!");
}

console.log("Gerando mensagens personalizadas:");
saudacao("Raony");
saudacao();

// 2. Imagine que você está criando um sistema para um e-commerce que vende livros. Toda vez que o cliente aplica um cupom de desconto, o sistema precisa calcular quanto ele vai pagar com base no valor original e na porcentagem de desconto.
// Sua missão é criar uma função chamada calcularDesconto que receba dois parâmetros:
// - O preço original do produto,
// - A porcentagem de desconto (com um valor padrão de 10%)
function calcularDesconto(preco, desconto = 10) {
    return preco - preco * (desconto / 100);
}

console.log("\nCalculando desconto:");
console.log(calcularDesconto(100, 20));
console.log(calcularDesconto(100));

// 3. Imagine que você está criando uma pequena ferramenta para alunos acompanharem seu desempenho escolar. A ideia é que o aluno insira suas duas notas principais e o sistema exiba a média aritmética entre elas.
// Sua tarefa é criar uma arrow function chamada calcularMedia que receba duas notas e retorne a média entre elas.
const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;

console.log("\nCalculando a média das duas notas:");
console.log(calcularMedia(7, 9));

// 4. Imagine que você está desenvolvendo uma funcionalidade para um sistema de quiz matemático. Cada vez que o jogador digita um número, o sistema precisa informar se ele é par ou ímpar — mas a lógica precisa estar encapsulada em uma arrow function.
// Sua missão é criar uma arrow function chamada verificarParidade que receba um número como parâmetro e retorne a string:
// - "Par" se o número for par
// - "Ímpar" se for ímpar
const verificarParidade = (numero) => (numero % 2 === 0 ? "Par" : "Ímpar");

console.log("\nVerificando se um número é par ou ímpar");
console.log(verificarParidade(8));
console.log(verificarParidade(5));

// 5. Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:
// - Até 5 km: frete fixo de R$ 5
// - De 5.1 km até 20 km: R$ 0,50 por quilômetro
// - Acima de 20 km: frete fixo de R$ 20
// Seu desafio é escolher o tipo de função mais adequado para resolver este problema. Função tradicional? Arrow function? E aí? Como vai implementar esse desafio?
function calcularFrete(distancia) {
    if (distancia <= 5) return 5;
    else if (distancia <= 20) return distancia * 0.5;
    else return 20;
}

console.log("\nCálculo de frete por distância:");
console.log(calcularFrete(3));
console.log(calcularFrete(12));
console.log(calcularFrete(25));

// 6. Imagine que você está criando uma função que simula o processamento de um pedido em um site. Após o processamento, você quer que uma mensagem personalizada seja exibida — mas essa mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.
// Sua tarefa é criar uma função chamada processarPedido, que receba três parâmetros:
// - O nome do cliente,
// - O tipo de cliente, e
// - Uma função callback responsável por exibir uma mensagem após o pedido ser processado.
function processarPedido(nome, tipo, fnMensagem) {
    console.log(`Processando pedido de ${nome}...\n` + fnMensagem(nome, tipo));
}
const mensagemPersonalizada = (nome, tipo) => {
    if (tipo === "vip") return `Obrigado pela preferência, ${nome}! Você ganhou frete grátis.\n`;
    else if (tipo === "comum") return `Obrigado pela sua compra, ${nome}!\n`;
    else return `Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.\n`;
};

console.log("\nMensagem pós-processamento:");
processarPedido("Lucas", "vip", mensagemPersonalizada);
processarPedido("Fernanda", "novo", mensagemPersonalizada);
processarPedido("João", "comum", mensagemPersonalizada);

// 7. Imagine que você está desenvolvendo uma interface de atendimento online. Quando o usuário envia uma pergunta, o sistema precisa simular que está "pensando" ou "processando a resposta", e só depois exibir a resposta final.
// Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:
// - O nome do usuário, e
// - Uma função callback que será executada após 3 segundos.
console.log("Mensagem com atraso:");
console.log("Exercício resolvido no arquivo 'exercicio07.js'");

// 8. Imagine que você está desenvolvendo um sistema de avaliação para um jogo educativo. Ao final de cada fase, o jogador acumula uma pontuação total, e o sistema precisa avaliar se ele:
// - Foi aprovado, se a pontuação for igual ou maior que 70
// - Precisa de reforço, se a pontuação estiver entre 50 e 69
// - Foi reprovado, se a pontuação for menor que 50
// Sua tarefa é criar uma função chamada avaliarDesempenho, que receba dois parâmetros:
// - A pontuação final do jogador
// - Uma função callback que será usada para exibir uma mensagem personalizada com base no resultado da avaliação.
function avaliarDesempenho(pontuacao, fnMensagem) {
    console.log(`Pontuação: ${pontuacao}\n` + fnMensagem(pontuacao));
}
const gerarMensagem = (pontuacao) => {
    if (pontuacao >= 70) return "Parabéns! Você foi aprovado!";
    else if (pontuacao >= 50) return "Atenção! Você precisa de reforço.";
    else return "Infelizmente, você foi reprovado. Tente novamente.";
};

console.log("\nAvaliando a pontuação de um usuário:");
avaliarDesempenho(82, gerarMensagem);

// 9. Você está desenvolvendo um sistema para ajudar pessoas a entenderem melhor o consumo de energia elétrica de seus aparelhos eletrônicos. O sistema deve calcular o consumo mensal estimado com base no uso diário, classificar o consumo (baixo, moderado ou alto) e exibir uma mensagem clara para o usuário.
// Sua missão é criar três funções separadas, com responsabilidades bem definidas:
// - calcularConsumo(potencia, horasPorDia): retorna o consumo mensal em kWh, com base na fórmula: consumo = (potencia x horasPorDia x 30) / 1000
// - classificarConsumo(consumo): retorna a classificação com base na tabela (Consumo mensal em kWh | Classificação):
// -- Abaixo de 50 | "Baixo consumo"
// -- 50 — 199     | "Consumo moderado"
// -- 200 ou mais  | "Alto consumo"
// - exibirResumo(nomeAparelho, consumo, classificacao): exibe uma mensagem como: "Geladeira tem consumo de 180 kWh/mês e é classificada como Consumo moderado."
const calcularConsumo = (potencia, horasPorDia) => (potencia * horasPorDia * 30) / 1000;

function classificarConsumo(consumo) {
    if (consumo < 50) return "Baixo consumo";
    else if (consumo < 200) return "Consumo moderado";
    else return "Alto consumo";
}

const exibirResumo = (nomeAparelho, consumo, classificacao) =>
    console.log(`${nomeAparelho} tem consumo de ${consumo} kWh/mês e é classificado(a) como ${classificacao}.`);

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);

console.log("\nClassificador de consumo elétrico:");
exibirResumo(nomeAparelho, consumo, classificacao);

// 10. Imagine que você está desenvolvendo um sistema de sorteio interativo para um evento online. Os participantes se inscrevem com um nome e uma pontuação (baseada em atividades realizadas). O sistema deve:
// - Sortear aleatoriamente um nome da lista de participantes.
// - Exibir esse nome com um pequeno atraso (como se fosse um suspense).
// - Avaliar se o participante foi premiado ou não com base na pontuação:
// -- Acima de 80: "Parabéns, você foi premiado!"
// -- Entre 50 e 80: "Você quase conseguiu! Fique de olho nos próximos sorteios."
// -- Abaixo de 50: "Infelizmente, não foi dessa vez."
// Sua missão é criar:
// - Uma função para sortear um nome aleatoriamente.
// - Uma função para exibir o nome sorteado com 2 segundos de atraso.
// - Uma função para avaliar a pontuação.
// - Uma função final que organize o fluxo completo do sorteio.
console.log("\nSistema de sorteio com avaliação de participantes:");
console.log("Exercício resolvido no arquivo 'exercicio10.js'");

// 11. Sua missão é criar uma função chamada contagemRegressiva que:
// - Receba um número inteiro positivo (ex.: 5)
// - Imprima esse número e, a cada chamada, reduza em 1
// - Quando chegar em 0, exiba a mensagem: "Lançamento!"
// A função deve ser implementada de forma recursiva, sem usar loops (for, while ou do...while)
function contagemRegressiva(numero) {
    if (numero === 0) {
        console.log("Lançamento!");
    } else {
        console.log(numero);
        contagemRegressiva(numero - 1);
    }
}

console.log("\nContagem regressiva recursiva:");
contagemRegressiva(5);
