const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

console.log("Todos os números:", numeros);
console.log("Todos os pares:", numerosPares);

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 !== 0;
});

console.log("Todos os ímpares:", numerosImpares);

const numerosDobrados = numeros.map((numero) => {
    return numero * 2;
});

console.log("Números dobrados:", numerosDobrados);
