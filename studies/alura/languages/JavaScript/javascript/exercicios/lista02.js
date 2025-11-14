// 1. Crie uma variável idade e verifique se a pessoa é maior de idade (18 anos ou mais). Mostre no console uma mensagem adequada.
let idade = 32;
console.log("Raony é maior de idade? ", idade >= 18);

// 2. Crie duas variáveis com notas de um aluno. Calcule a média. Se for maior ou igual a 7, mostre "Aprovado". Caso contrário, mostre "Reprovado".
let nota1 = 10;
let nota2 = 7;
let media = (nota1 + nota2) / 2;

if (media >= 7) console.log("Aprovado");
else console.log("Reprovado");

// 3. Crie uma variável valorCompra com R$ 35,90 e valorPago R$ 50. Calcule e mostre o troco a ser devolvido.
let valorCompra = 35.9;
let valorPago = 50;
console.log("O troco é de: R$", valorPago - valorCompra);

// 4. Cria duas variáveis com senhas digitadas em momentos diferentes. Verifique se são iguais usando operadores de comparação.
let senha = "minhaSenha";
let entrada = "minjasenha";
console.log("As senhas são iguais?", senha === entrada);

// 5. Considere totalAulas = 80 e faltas = 25. Calcule se as faltas ultrapassam 25% das aulas. Mostre a conclusão no console.
let totalAulas = 80;
let faltas = 25;
let limiteFaltas = totalAulas * 0.25;
console.log("Faltas superam 25% das aulas?", faltas > limiteFaltas);

// 6. Crie duas variáveis temLogin e temSenha. Use operadores lógicos para verificar se o usuário pode acessar o sistema.
let temLogin = true;
let temSenha = false;

if (temLogin && temSenha) console.log("Usuário pode acessar o sistema.");
else console.log("Usuário não pode acessar o sistema.");

// 7. Cria uma variável booleana chamada disponivel. Mostre seu valor negado no console, ou seja, se estiver disponível, exiba que não está, e vice-versa.
let disponivel = true;
console.log("Disponibilidade invertida:", !disponivel);

// 8. Crie duas variáveis com números. Verifique se os dois são pares e se são iguais. Exiba a conclusão.
let numeroUm = 7;
let numeroDois = 13;
const saoPares = numeroUm % 2 == 0 && numeroDois % 2 == 0;
const saoIguais = numeroUm == numeroDois;

console.log("Os dois números são pares e iguais?", saoPares && saoIguais);

// 9. Calcule quanto é 15% de 120 usando operadores matemáticos. Mostre a frase: "15% de 120 é igual a X."
console.log("15% de 120 é igual a", 120 * 0.15);

// 10. Escreva a expressão 2 + 3 * 5. Mostre o resultado e explique por que a multiplicação foi feita antes da soma.
console.log("Resultado da expressão 2 + 3 * 5:", 2 + 3 * 5);

// A multiplicação é feita antes da soma na expressão 2 + 3 * 5, pois segue a ordem de precedência matemática que determina que multiplicações são calculadas antes das somas.
