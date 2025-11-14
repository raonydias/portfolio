// 1. Peça a idade da pessoa em uma variável. Se for 18 ou mais, mostre "Pode comprar bebida alcoólica". Caso contrário, mostre "Venda proibida para menores de 18 anos".
let idade = 32;

idade >= 18 ? console.log("Pode comprar bebida alcoólica") : console.log("Venda proibida para menores de 18 anos");

// 2. Crie uma variável horaAtual. Se estiver entre 6 e 12, mostre "Bom dia", entre 12 e 18, "Boa tarde", caso contrário, "Boa noite".
const horaAtual = 23;

if (horaAtual >= 6 && horaAtual < 12) console.log("Bom dia");
else if (horaAtual >= 12 && horaAtual < 18) console.log("Boa tarde");
else console.log("Boa noite");

// 3. Crie uma variável com um número qualquer. Mostre se ele é positivo, negativo ou igual a zero.
const numeroQualquer = 13;

if (numeroQualquer > 0) console.log("Número positivo");
else if (numeroQualquer < 0) console.log("Número negativo");
else console.log("Número igual a zero.");

// 4. Crie uma variável nota entre 0 e 10. Use if/else if/else para retornar: A (9-10), B (8-9), C (6-7,9), D (4-5,9), E (0-3,9)
const nota = 8.5;

if (nota >= 9) console.log("Conceito: A");
else if (nota >= 8) console.log("Conceito: B");
else if (nota >= 6) console.log("Conceito: C");
else if (nota >= 4) console.log("Conceito: D");
else console.log("Conceito: E");

// 5. Crie uma variável numero. Use o operador ternário para mostrar se ele é par ou ímpar.
const numero = 7;

numero % 2 === 0 ? console.log(numero, "é um número par.") : console.log(numero, "é um número ímpar.");

// 6. Crie uma variável opcao com valores de 1 a 3. Use switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair"
const opcao = 1;

switch (opcao) {
    case 1:
        console.log("Cadastrar");
        break;
    case 2:
        console.log("Listar");
        break;
    case 3:
        console.log("Sair");
        break;
    default:
        console.log("Opção inválida.");
        break;
}

// 7. Crie uma variável email. Se estiver vazia (""), mostre "Preencha o campo e-mail". Caso contrário, mostre "E-mail válido".
let email = "";

email ? console.log("E-mail válido") : console.log("Preencha o campo e-mail");

// 8. Crie uma variável senha. Se tiver menos de 6 caracteres, mostre "Senha muito curta". Se tiver 6 ou mais, mostre "Senha válida".
const senha = "minhaSenha";

senha.length < 6 ? console.log("Senha muito curta") : console.log("Senha válida");

// 9. Crie duas variáveis: saldoDisponivel e valorCompra. Se o saldo for suficiente, mostre "Compra aprovada". Caso contrário, "Saldo insuficiente".
const saldoDisponivel = 2.32;
const valorCompra = 59.99;

saldoDisponivel >= valorCompra ? console.log("Compra aprovada") : console.log("Saldo insuficiente");

// 10. Crie três variáveis: nome, email, idade. Mostre "Formulário enviado com sucesso" apenas se todos os campos estiverem preenchidos e a idade for maior que 0.
let nome = "Raony";
let emailForm = "rodriguesraony@gmail.com";
let idadeForm = 33;

if (nome && emailForm.includes("@") && idadeForm != null && idadeForm >= 0)
    console.log("Formulário enviado com sucesso");
