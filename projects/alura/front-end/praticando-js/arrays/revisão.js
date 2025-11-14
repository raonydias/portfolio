// ARRAY

// Pratique construindo arrays e acessando seus elementos através dos índices
const arr = [1, 2, 3, 4];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

arr[5] = 10;

console.log(arr);

// Criar um array com uma sequência de números entre x e y
function criarArrNum(inicio, fim) {
    const arr = [];

    for (let i = 0, j = inicio; j <= fim; i++, j++) {
        arr[i] = j;
    }
    return arr;
}

console.log(criarArrNum(12, 30));

// MÉTODOS

// Clonar array multidimensional com "deep copy"
// Por que não podemos clonar arrays via variável?

const arr1 = [[1, 2], 2, 3];

const copiaArray = (arr) => {
    const copia = [];

    arr.forEach((elem) => {
        if (Array.isArray(elem)) {
            copia.push(copiaArray(elem));
        } else {
            copia.push(elem);
        }
    });

    return copia;
};

const arr2 = copiaArray(arr1);

arr1[0][0] = 5;

console.log(arr1);
console.log(arr2);

// Filtrar um array e alterar valores específicos
// Ex.: alterar números para strings
const cpfs = ["12323434545", "34658756786", 43254365434, "76547865345", 56768767564];

const resultado = cpfs.map((cpf) => (typeof cpf === "string" ? cpf : cpf.toString()));

console.log(resultado);
