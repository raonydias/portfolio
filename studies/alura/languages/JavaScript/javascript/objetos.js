const pessoa = {
    nome: "Raony",
    idade: 32,
    temCNH: false,
};

pessoa.sobrenome = "Dias";

console.log("Nome:", pessoa.nome);
console.log("Sobrenome:", pessoa.sobrenome);

const livro = {
    titulo: "O Hobbit",
    autor: "J. R. R. Tolkien",
    paginas: 310,
};

livro.publicado = true;
livro.idiomas = ["Inglês", "Português", "Espanhol"];

livro.idiomas.push("Mandarim");
livro.idiomas.push("Francês");

console.log("Livro original:", livro);

delete livro.paginas;

console.log("Livro após remoção:", livro);

console.log("Autor do livro:", livro["autor"]);
console.log("Editora do livro:", livro["editora"]);

const autor = {
    nome: "J. R. R. Tolkien",
    nacionalidade: "Britânica",
    idade: 81,
    livros: [livro],
};

console.log("Autor:", autor);

livro.autor = autor;

console.log("\nLivro:", livro);
