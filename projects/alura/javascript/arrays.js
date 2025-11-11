const frutas = ["Uva", "Banana", "Kiwi", "Maçã", "Morango"];
// Uva     = 0
// Morango = 4

console.log(frutas);
console.log("Primeira fruta:", frutas[0]);
console.log("Última fruta:", frutas[4]);
console.log("Total de frutas:", frutas.length);

frutas.push("Melancia");

console.log("Total de frutas:", frutas.length);
console.log("Última fruta:", frutas[frutas.length - 1]);

frutas.splice(2, 1);
console.log(frutas);

for (let i = 0; i < frutas.length; i++) {
    console.log("Índice:", i, frutas[i]);
}

console.log("Usando forEach:");
frutas.forEach((valor, i) => {
    console.log("Índice:", i, valor);
});

console.log("Usando for of:");
for (const fruta of frutas) {
    console.log("Fruta da vez:", fruta);
}
