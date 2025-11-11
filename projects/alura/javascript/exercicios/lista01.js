// 1. Cria uma variável chamada nome e atribua seu nome completo. Depois, use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!"
let nome = "Raony";
console.log("Olá,", nome, "! Seja bem-vindo ao curso de JavaScript!");

// 2. Cria duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos."
let anoAtual = 2025;
const anoNascimento = 1992;
console.log("Você tem", anoAtual - anoNascimento, "anos.");

// 3. Crie três variáveis com os dados da sua localização: cidade, estado e país. Em seguida, mostre no console: "Você está em Cidade - Estado, País."
let cidade = "São Paulo";
let estado = "SP";
let pais = "Brasil";
console.log("Você está em", cidade, "-", estado, ",", pais, ".");

// 4. Crie uma variável chamada temCarteira com valor true ou false. Use console.log(typeof temCarteira) para mostrar o tipo dessa variável
let temCarteira = true;
console.log(typeof temCarteira);

// 5. Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando.
let saldo = 0;
saldo += 200;
saldo -= 50;
console.log("Saldo final: R$", saldo);

// 6. Crie variáveis para três disciplinas: matemática, português e ciências, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem.
let matematica = 10;
let portugues = 7;
let ciencias = 8;
console.log("Média final:", (matematica + portugues + ciencias) / 3);

// 7. Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.
let salario = 3000;
salario *= 1.1;
console.log("Novo salário com aumento de 10%:", salario);

// 8. Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.
let cliques = 0;
cliques++;
cliques++;
cliques++;
console.log("O botão foi clicado", cliques, "vezes.");

// 9. Crie uma constante chamada PI com o valor 3.14. Tente alterar seu valor e observe o erro gerado. Depois, explique por que isso acontece.
console.log("Exercício 9 resolvido no arquivo 'lista01-09.js'");

// 10. Crie uma variável mensagem contendo uma string e outra numero contendo um número. Junte as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof.
let mensagem = "Eu gosto do número ";
let numero = 13;
let concatenada = mensagem + numero;
console.log(concatenada);
console.log(typeof concatenada);
