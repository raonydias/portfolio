let contador = 1;

while (contador <= 10) {
    console.log("Número atual:", contador);
    contador++;
}

let numero = 1;

do {
    console.log("Número atual:", numero);
    numero++;
} while (numero <= 10);

const palavra = "calopsita";

let contadorLetra = 0;

while (contadorLetra < palavra.length) {
    console.log(palavra[contadorLetra]);
    contadorLetra++;
}

let contadorLetra2 = 0;

do {
    console.log(palavra[contadorLetra2]);
    contadorLetra2++;
} while (contadorLetra2 < palavra.length);
