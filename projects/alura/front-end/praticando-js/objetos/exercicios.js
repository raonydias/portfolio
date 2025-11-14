// 1. Você está desenvolvendo um sistema para uma loja online. Cada produto do catálogo deve ser representado por um objeto com informações de nome, preco e disponivel. Escreva um programa que:
// - Crie um objeto chamado produto.
// - O objeto deve conter as propriedades, nome, preco, disponivel.
// - Exiba o objeto no console.
const produto = {
    nome: "Nintendo Switch 2",
    preco: 4669.39,
    disponivel: false,
};
console.log("\nCriando um objeto com dados de um produto:");
console.log(produto);

// 2. Você está criando um painel de configuração para um aplicativo. As configurações são armazenadas em um objeto e você precisa acessar informações específicas para exibição.
// Escreva um programa que:
// a) Crie um objeto configuracoes com as propriedades de tema, notificacoes, idioma.
// b) Acesse tema usando notação de ponto.
// c) Acesse idioma usando notação de colchetes.
// d) Exiba os dois valores no console.
const configuracoes = {
    tema: "escuro",
    notificacoes: false,
    idioma: "pt-BR",
};

console.log("\nAcessando dados com ponto e colchetes:");
console.log(`Tema: ${configuracoes.tema}\nIdioma: ${configuracoes["idioma"]}`);

// 3. Você está criando um aplicativo de culinária que mostra receitas com seus ingredientes, tempo de preparo e instruções. Cada receita é representada por um objeto que contém uma lista de ingredientes armazenada como um array. Diante disso, escreva um programa que:
// - Crie um objeto receita com as propriedades: nome, ingredientes (array com pelo menos 5 itens) e tempoPreparo.
// - Acesse o índice 2 da lista que está dentro do objeto.
// - Exiba no console a frase: "Ingrediente complementar: [ingrediente]".
const receita = {
    nome: "Bolo de cenoura",
    ingredientes: ["cenoura", "açúcar", "farinha de trigo", "ovo", "fermento"],
    tempoPreparo: "45 minutos",
};

console.log("\nLidando com arrays dentro de objetos:");
console.log(`Ingrediente complementar: ${receita.ingredientes[2]}`);

// 4. Você está desenvolvendo um sistema para uma locadora de carros. Cada veículo tem informações cadastradas, mas agora a empresa decidiu remover a informação do modelo antigo dos carros. Escreva um programa que:
// - Crie um objeto carro com as propriedades: marca, modelo, ano, modeloAntigo;
// - Remova a propriedade modeloAntigo;
// - Exiba o objeto final no console.
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    modeloAntigo: "Corolla XEi",
};

delete carro.modeloAntigo;

console.log("\nRemovendo uma propriedade:");
console.log(carro);

// 5. Você está desenvolvendo um painel de monitoramento que exibe informações sobre dispositivos conectados à rede. Cada dispositivo é representado por um objeto, e todos estão organizados dentro de um array.
// Escreva um programa que:
// a) Crie um array chamado dispositivos, contendo 3 objetos com as propriedades: nome e status.
// b) Use um loop para exibir no console o nome e status de cada dispositivo.
const dispositivos = [
    {
        nome: "Impressora",
        status: "ativo",
    },
    {
        nome: "Scanner",
        status: "inativo",
    },
    {
        nome: "Projetor",
        status: "ativo",
    },
];

console.log("\nIterando um array de objetos:");
for (const dispositivo of dispositivos) {
    console.log(`Dispositivo: ${dispositivo.nome} | Status: ${dispositivo.status}`);
}

// 6. Você está desenvolvendo um sistema de controle de máquinas em uma fábrica. Cada máquina é representada por um objeto que, além das informações básicas, também possui um método interno que exibe seu status. Escreva um programa que:
// - Crie um objeto maquina com as propriedades: nome, funcionando.
// - Adicione um método chamado exibirStatus que exibe no console: "A máquina [nome] está em funcionamento." ou "A máquina [nome] está parada.", dependendo do valor de funcionando.
// - Chame o método exibirStatus.
const maquina = {
    nome: "Esteira Transportadora",
    funcionando: true,
    exibirStatus() {
        console.log(`A máquina ${this.nome} está ` + (this.funcionando ? "em funcionamento." : "parada."));
    },
};

console.log("\nCriando métodos dentro de um objeto:");
maquina.exibirStatus();

// 7. Imagine que você está desenvolvendo uma funcionalidade de importação de dados para uma empresa. Os dados chegam como um array de pares, onde cada par representa uma chave e seu respectivo valor, e você precisa transformar isso em um objeto estruturado, que será usado pelo sistema para preencher os campos automaticamente.
// Sua tarefa é:
// - Criar uma função chamada montarObjeto que receba como parâmetro um array de pares chave-valor, como este:
//   [[ 'nome', 'João' ], [ 'idade', 30 ], [ 'cidade', 'Curitiba' ]]
// - A função deve retornar um objeto com essas propriedades montadas:
// { nome: 'João', idade: 30, cidade: "Curitiba" }
function montarObjeto(arr) {
    const obj = {};

    for (const par of arr) {
        const chave = par[0];
        const valor = par[1];

        obj[chave] = valor;
    }

    return obj;
}

const pessoaArray = [
    ["nome", "Raony"],
    ["idade", 30],
    ["cidade", "São Paulo"],
];

const pessoaObjeto = montarObjeto(pessoaArray);

console.log("\nMontando um objeto a partir de pares chave-valor:");
console.log(pessoaObjeto);

// 8. Você foi a pessoa encarregada de desenvolver uma funcionalidade para o sistema de inspeções técnicas de uma fábrica. Cada máquina inspecionada gera automaticamente um relatório de medições, contendo dados como temperatura, vibração, pressão e nível de ruído. Essas informações são organizadas dentro de um objeto, onde cada chave representa uma categoria avaliada e o valor representa o nível registrado na inspeção.
// - Exibir todas as categorias avaliadas;
// - Exibir todos os valores registrados;
// - Percorra todas as medições (pares categoria/valor) e imprima um detalhamento com status, seguindo a seguinte lógica:
// -- Se o valor for maior que 50, mostre a mensagem (alerta)
// -- Caso contrário, mostre (ok)
const relatorio = {
    temperatura: 75,
    vibracao: 40,
    pressao: 55,
    nivelRuido: 30,
};

console.log("\nCriando um sistema de inspeção:");
console.log("Categorias avaliadas:", Object.keys(relatorio));
console.log("Valores registrados:", Object.values(relatorio));

console.log("\nDetalhamento:");
const entradas = Object.entries(relatorio);

for (const medicao of entradas) {
    console.log(`${medicao[0]}: ${medicao[1]} (` + (medicao[1] > 50 ? "alerta)" : "ok)"));
}

// 9. Você está desenvolvendo um sistema de manutenção preventiva para uma indústria. Cada máquina registra os meses em que passou por manutenção ao longo do ano, armazenando a quantidade de dias parados em um objeto, onde cada chave representa um mês e o valor representa os dias de inatividade.
// Agora, o sistema precisa gerar um relatório que exiba:
// - O total de dias parados no ano.
// - A quantidade de meses com manutenção (ou seja, com valor maior que zero).
// - Um alerta caso o total de dias parados seja maior que 20 dias: "Status: Atenção! Acima do limite anual." ou "Status: Dentro do limite anual.".
const manutencao = {
    jan: 2,
    fev: 0,
    mar: 5,
    abr: 4,
    mai: 0,
    jun: 7,
};
let diasParados = 0;
let mesesManutencao = 0;

const arrDias = Object.values(manutencao);

arrDias.forEach((valor) => {
    diasParados += valor;
    if (valor > 0) mesesManutencao++;
});

console.log("\nGerando um relatório de manutenção:");
console.log(`Total de dias parados: ${diasParados}`);
console.log(`Meses com manutenção: ${mesesManutencao}`);
console.log("Status: " + (diasParados > 20 ? "Atenção! Acima " : "Dentro ") + "do limite anual.");

// 10. Você está finalizando o back-end de uma plataforma de cursos online. Cada curso possui uma lista de estudantes com seus respectivos dados de progresso. Sua tarefa é construir um relatório que mostre o desempenho geral da turma.
// Você deve escrever um programa que:
// a) Crie um objeto chamado curso, com as seguintes propriedades:
// - titulo: string com o nome do curso;
// - estudantes: um array de objetos, cada um com nome e progresso (número de 0 a 100);
// - Um método interno chamado gerarRelatorio.
// b) O método gerarRelatorio deve:
// - Percorrer o array de estudantes;
// - Exibir no console o nome de cada estudante e sua situação:
// -- Se o progresso for igual ou maior que 70, mostrar "Aprovado";
// -- Senão, mostrar "Em andamento";
// - Ao final, mostrar:
// -- A quantidade total de estudantes;
// -- A média geral de progresso da turma.
const curso = {
    titulo: "JavaScript Intermediário",
    estudantes: [
        { nome: "Raony", progresso: 60 },
        { nome: "Rafael", progresso: 40 },
        { nome: "Pietro", progresso: 85 },
        { nome: "Isaac", progresso: 72 },
    ],
    gerarRelatorio() {
        const turma = this.estudantes;
        let progressoTotal = 0;

        for (const aluno of turma) {
            progressoTotal += aluno.progresso;
            console.log(
                `Estudante: ${aluno.nome} | Progresso: ${aluno.progresso}% | Situação: ` +
                    (aluno.progresso >= 70 ? "Aprovado" : "Em andamento")
            );
        }

        console.log(`\nTotal de estudantes: ${turma.length}`);
        console.log(`Média geral da turma: ${(progressoTotal / turma.length).toFixed(2)}%`);
    },
};

console.log("\nAnalisando desempenho de estudantes:");
curso.gerarRelatorio();
