import { somar } from "./lista-modulos.js";

// 1. Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.
const pessoa = {
    nome: "Raony",
    idade: 32,
    email: "rodriguesraony@gmail.com",
};

const { nome, idade, email } = pessoa;

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Email:", email);

// 2. Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.
const linguagens = ["JavaScript", "Python", "C++"];
const [ling1, ling2, ling3] = linguagens;

console.log("\nLinguagens de programação:", ling1 + ",", ling2 + ",", ling3 + ".");

// 3. Crie uma função que receba um número qualquer de argumentos e retorne a soma de todos. Use o operador rest (...).
function soma(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}
console.log("\nSoma dos números de 1 a 10:", soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), "\n");

// 4. Crie dois arrays de frutas e combine-os usando o operador spread.
const frutas = ["Pera", "Uva", "Maçã"];
const outrasFrutas = ["Banana", "Goiaba", "Melão"];
const todasFrutas = [...frutas, ...outrasFrutas];
console.log(todasFrutas);

// 5. Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.
const pessoaNome = {
    nome: "Raony",
};
const pessoaIdade = {
    idade: 32,
};

const pessoaCompleta = { ...pessoaNome, ...pessoaIdade };

console.log("\n", pessoaCompleta, "\n");

// 6. Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.
function saudacao(nome = "visitante") {
    console.log("Olá,", nome);
}
saudacao("Raony");
saudacao();

// 7. Crie uma variável com a data atual e exiba o dia, mês e ano formatados.
const agora = new Date();
console.log("\nData formatada (BR):", agora.toLocaleDateString("pt-BR"));

// 8. Crie uma função simples chamada somar(a, b) e exporte-a como módulo (modo CommonJS ou ES Modules, dependendo do ambiente).
console.log("\nSoma:", somar(7, 13));

// 9. Crie uma classe Livro com propriedades titulo e autor. Crie dois objetos dessa classe.
class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    descrever() {
        return `\nO livro "${this.titulo}" foi escrito por ${this.autor}.`;
    }
}

const livro1 = new Livro("Heartstopper", "Alice Oseman");
const livro2 = new Livro("Vermelho, Branco e Sangue Azul", "Casey McQuiston");

// 10. Adicione um método descrever() à classe Livro que retorna uma string com as informações do livro.
console.log(livro1.descrever());
console.log(livro2.descrever());
