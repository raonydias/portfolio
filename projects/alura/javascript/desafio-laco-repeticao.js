// Contar quantos números pares e quantos números ímpares nós temos entre 0 e 100
let totalPares = 0;
let totalImpares = 0;

for (let contador = 0; contador <= 100; contador++) {
    contador % 2 == 0 ? totalPares++ : totalImpares++;
}

console.log("Total de Números Pares entre 0 e 100:", totalPares);
console.log("Total de Números Ímpares entre 0 e 100:", totalImpares);
