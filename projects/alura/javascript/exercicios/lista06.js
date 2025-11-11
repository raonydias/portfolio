// 1. Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.
const nomes = ["Raony", "Jade", "Rafael", "Pietro", "Isaac"];

for (let i = 0; i < nomes.length; i++) console.log(nomes[i]);

// 2. Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.
let frutas = ["Pera", "Uva", "Maçã"];
console.log("\nLista de frutas original:", frutas);

frutas.push("Banana");
console.log("Lista de frutas após adição:", frutas);

frutas.shift();
console.log("Lista de frutas após remoção:", frutas);

// 3. Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length
const cidades = ["São Paulo", "Rio de Janeiro", "Belém", "Macapá", "Belo Horizonte", "Taboão da Serra"];
console.log("\nA lista de cidades contém", cidades.length, "itens.");

// 4. Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;

for (let i = 0; i < numeros.length; i++) soma += numeros[i];
console.log("\nSoma dos números na lista numeros:", soma);

// 5. Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.
const notas = [10, 8, 7, 5];
let somaNotas = 0;

notas.forEach((nota) => (somaNotas += nota));

let media = somaNotas / notas.length;

media >= 7 ? console.log("\nAprovado\n") : console.log("\nReprovado\n");

// 6. Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.
const nomesUsuarios = ["Raony", "Jade", "Rafael", "Pietro", "Isaac"];

nomesUsuarios.forEach((nome) => console.log("Olá, " + nome + "!"));

// 7. Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.
const precos = [1.99, 5.99, 10.99, 59.99, 89.9];
const precosDesconto = precos.map((preco) => preco * 0.9);

console.log("\nPreços com 10% de desconto:");
precosDesconto.forEach((preco) => console.log(preco.toFixed(2)));

// 8. Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.
const idades = [32, 7, 20, 28, 25, 4, 2];
const maioresIdade = idades.filter((idade) => idade >= 18);
console.log("\nIdades acima de 18:", maioresIdade);

// 9. Crie um array de preços e calcula o valor total da compra. Depois, aplique um cupom de 20% de desconto e mostre o valor final.
const carrinho = [4463.91, 464.03, 439];

const totalCompra = carrinho.reduce((total, preco) => total + preco, 0);
console.log("\nTotal da Compra com 20% de desconto: R$", (totalCompra * 0.8).toFixed(2));

// 10. Crie um array com 5 tarefas (strings). Use filter para mostrar apenas as tarefas que ainda não foram marcadas como concluídas (use uma convenção como "[x]" para concluídas).
const tarefas = [
    "[x] Almoçar",
    "[ ] Estudar JavaScript",
    "[ ] Tomar banho",
    "[x] Lavar a louça",
    "[ ] Arrumar o quarto",
];

const tarefasPendentes = tarefas.filter((tarefa) => tarefa.startsWith("[ ]"));

console.log("\nTarefas pendentes:");
tarefasPendentes.forEach((tarefa) => console.log(tarefa));
