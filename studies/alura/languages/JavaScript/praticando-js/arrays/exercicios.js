// 1. Imagine que você está desenvolvendo um sistema para controlar uma lista de compras. O primeiro passo é permitir que a pessoa usuária acesse e altere os itens dessa lista.
// Escreva um programa que:
// - Crie um array com os itens iniciais da lista de compras.
// - Acesse e exiba o segundo item da lista.
// - Modifique o último item da lista para um novo valor.
const listaDeCompras = ["arroz", "feijão", "macarrão", "tomate"];

console.log("\nAcessando e modificando elementos de um array:");
console.log(`Segundo item da lista: ${listaDeCompras[1]}`);

listaDeCompras[listaDeCompras.length - 1] = "refrigerante";
console.log(`Lista após modificação:`, listaDeCompras);

// 2. Você está criando um sistema para controlar os gastos mensais da sua casa. Os valores das despesas estão em um array, e você precisa somar todos esses valores para saber o total gasto no mês.
// Escreva um programa que:
// - Crie um array com os valores das despesas.
// - Use um loop for para somar os valores.
// - Exiba o total gasto.
const despesas = [120, 80, 45.5, 200, 60];
let totalGasto = 0;

for (let i = 0; i < despesas.length; i++) totalGasto += despesas[i];

console.log("\nPercorrendo listas com for:");
console.log(`Total de despesas: R$ ${totalGasto.toFixed(2)}`);

// 3. Você está criando um painel para um sistema de chamada escolar. Você recebeu uma lista com os nomes das pessoas estudantes de uma turma e precisa exibir um por um para fazer a chamada em sala. Escreva um programa que:
// - Crie um array com os nomes das pessoas.
// - Use o for...of para exibir cada nome individualmente.
const estudantes = ["Raony", "Jade", "Rafael", "Pietro", "Isaac"];

console.log("\nExibindo nomes com for...of");
for (const estudante of estudantes) console.log(`Estudante: ${estudante}`);

// 4. Você recebeu a missão de desenvolver um sistema de envio de notificações. A cada nova mensagem cadastrada, o sistema deve exibir uma notificação no console informando que a mensagem foi enviada. Escreva um programa que:
// - Crie um array com uma lista de mensagens.
// - Use o método forEach() para exibir uma mensagem no console para cada item da lista.
const mensagens = ["Pedido confirmado", "Pagamento aprovado", "Produto enviado"];

console.log("\nExibindo mensagens com forEach():");
mensagens.forEach((mensagem) => console.log(`Notificação: ${mensagem}`));

// 5. Você está desenvolvendo um sistema de tarefas do dia a dia. O sistema deve permitir que a pessoa usuária adicione uma nova tarefa ao final da lista e, em seguida, remova a última tarefa que foi adicionada. Escreva um programa que:
// - Crie um array com três tarefas iniciais.
// - Adicione uma nova tarefa no final da lista.
// - Remova a última tarefa da lista.
// - Exiba a lista após cada operação.
const tarefas = ["Estudar", "Lavar roupa", "Fazer compras"];

console.log("\nAdicionando e removendo itens de uma lista:");
tarefas.push("Pagar boletos");
console.log("Lista após adicionar:", tarefas);

tarefas.pop();
console.log("Lista após remover a última tarefa:", tarefas);

// 6. Você está desenvolvendo um sistema de pedidos online. Em certo momento, o sistema precisa criar uma cópia da lista de pedidos para simular alterações, sem modificar o array original. Escreva um programa que:
// - Crie um array com alguns pedidos.
// - Faça uma cópia do array.
// - Adicione um novo item apenas na cópia.
// - Exiba os dois arrays para mostrar que o original não foi alterado.
const pedidos = ["camiseta", "calça", "tênis"];

const copiaPedidos = pedidos.slice();
copiaPedidos.push("boné");

console.log("\nClonando um array:");
console.log("Array original:", pedidos);
console.log("Array copiado e alterado:", copiaPedidos);

// 7. Você está desenvolvendo um sistema de busca para uma biblioteca digital. Quando a pessoa usuário digita o nome de um livro, o sistema precisa verificar se ele está disponível na lista de títulos cadastrados. Escreva um programa que:
// - Crie um array com nomes de livros.
// - Crie uma variável com o nome de um livro procurado.
// - Verifique se o livro está na lista.
// - Exiba uma mensagem informando se o livro foi encontrado ou não.
const livros = ["Heartstopper", "Vermelho, Branco e Sangue Azul", "O Ladrão de Raios", "Crepúsculo"];
const livroProcurado = "Vermelho, Branco e Sangue Azul";

console.log("\nBuscando itens em uma linha:");
console.log(
    `O livro ${livroProcurado}`,
    livros.indexOf(livroProcurado) !== -1 ? "está disponível." : "não foi encontrado."
);

// 8. Você está desenvolvendo um sistema de pagamento e todos os produtos precisam receber um desconto de 10% antes de serem exibidos para as pessoas. Escreva um programa que:
// - Crie um array com os preços originais dos produtos.
// - Use o método map() para aplicar 10% de desconto em cada item.
// - Exiba o novo array com os preços já com o desconto aplicado.
const precos = [100, 80, 50, 120];

const precosComDesconto = precos.map((preco) => preco * 0.9);

console.log("\nTransformando dados com map():");
console.log("Preços com desconto de 10%:", precosComDesconto);

// 9. Você está desenvolvendo um sistema de controle de acesso para um evento exclusivo. Cada participante fornece seu nome e idade, mas apenas maiores de 18 anos podem entrar. Seu objetivo é exibir quem teve acesso liberado e criar uma lista final apenas com os nomes desses participantes.
// Para isso, você precisa:
// - Criar um array com objetos contendo nome e idade de cada participante.
// - Usar o método filter() para:
// -- Selecionar somente os participantes com 18 anos ou mais.
// -- Exibir no console a mensagem "Acesso liberado para: [nome]" para cada um que passou.
// - Usar o método map() para criar um novo array com apenas os nomes dos autorizados.
// - Exibir a lista de aprovados no final.
const participantes = [
    { nome: "Raony", idade: 32 },
    { nome: "Jade", idade: 6 },
    { nome: "Rafael", idade: 20 },
    { nome: "Pietro", idade: 28 },
    { nome: "Lívia", idade: 4 },
];

console.log("\nFiltrando valores:");

const autorizados = participantes.filter((participante) => {
    if (participante.idade >= 18) {
        console.log(`Acesso liberado para: ${participante.nome}`);
        return participante;
    }
});

const aprovados = autorizados.map((participantes) => participantes.nome);
console.log("Lista de aprovados:", aprovados);

// 10. Você está desenvolvendo um painel de vendas para a área comercial de uma empresa. O time quer uma visão clara de quais produtos venderam bem, quanto cada um arrecadou, e qual gerou mais lucro.
// Você precisa:
// - Mostrar todos os produtos (nome, preço, quantidade).
// - Filtrar os que venderam mais de 100 unidades e exibir seus nomes.
// - Calcular os totais de venda de cada produto.
// - Descobrir o mais lucrativo.
const produtos = [
    { nome: "Notebook", preco: 2500, quantidadeVendida: 75 },
    { nome: "Mouse", preco: 100, quantidadeVendida: 180 },
    { nome: "Teclado", preco: 150, quantidadeVendida: 125 },
    { nome: "Monitor", preco: 900, quantidadeVendida: 95 },
];

console.log("\nRelatório de produtos vendidos:\n");

produtos.forEach((produto) =>
    console.log(
        `Produto: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)} | Quantidade vendida: ${
            produto.quantidadeVendida
        }`
    )
);

console.log("\nProdutos com alto volume de vendas (> 100 unidades):");
produtos.filter((produto) => {
    if (produto.quantidadeVendida > 100) console.log(produto.nome);
});

console.log("\nTotal de vendas por produto:");
let nomeLucrativo = "";
let totalLucrativo = 0;

produtos.forEach((produto) => {
    const totalProduto = produto.preco * produto.quantidadeVendida;

    if (totalProduto > totalLucrativo) {
        nomeLucrativo = produto.nome;
        totalLucrativo = totalProduto;
    }

    console.log(`${produto.nome}: R$ ${totalProduto.toFixed(2)}`);
});

console.log(`\nProduto mais lucrativo: ${nomeLucrativo} com R$ ${totalLucrativo.toFixed(2)} em vendas.`);
