// IF/ELSE

// Definir um fluxo para somar ou multiplicar dois números usando if/else
const num1 = 2;
const num2 = 4;
const operacao = "divisão";

if (operacao === "soma") console.log(num1 + num2);
else if (operacao === "multiplicação") console.log(num1 * num2);
else console.log("Operação não identificada");

// Localizar o nível de bônus de acordo com a faixa salarial
// ex.: R$11000 e acima: 3% de bônus
//      R$10999 a R$7000: 5% de bônus
//      R$6999 a R$4000: 7% de bônus
//      R$3999 ou menos: 9% de bônus

const salario = 12000;

if (salario >= 11000) console.log("3% de bônus");
else if (salario >= 7000) console.log("5% de bônus");
else if (salario >= 4000) console.log("7% de bônus");
else console.log("9% de bônus");

// OPERADORES

// Verificar se um ano é bissexto.
// Um ano é bissexto quando:
// Deve ser divisível por 4 mas NÃO divisível por 100
// OU
// Deve ser divisível por 100 e por 400

const ano = 2025;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`${ano} é bissexto`);
} else {
    console.log(`${ano} não é um ano bissexto`);
}

// OP CONDICIONAL E SWITCH

// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas.

const nome = "Raony";
const nota = 8;
const faltas = 3;

const recebeBonus = nota >= 8 && faltas <= 2 ? `${nome} recebe bônus.` : `${nome} não recebe bônus.`;

console.log(recebeBonus);

// Criar um fluxo que identifica o tipo de usuário e se comunica de acorda.
// ex.: usuário free tem acesso limitado ao app
//      usuário premium tem acesso à todas as funções
//      usuário super premium tem acesso total e bônus especiais

const usuario = "premium";

switch (usuario) {
    case "free":
        console.log("Acesso limitado");
        break;
    case "premium":
        console.log("Acesso total ao app");
        break;
    case "super premium":
        console.log("Acesso total app e bônus especiais");
        break;
    default:
        console.log("Tipo de usuário desconhecido");
        break;
}
