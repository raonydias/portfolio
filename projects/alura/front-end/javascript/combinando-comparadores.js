let idade = 32;
const maiorDeIdade = idade >= 18;
let possuiCNH = false;

const podeDirigir = maiorDeIdade && possuiCNH; // AND
console.log("Pode dirigir? ", podeDirigir);

const podeViajarSozinho = maiorDeIdade || possuiCNH; // OR
console.log("Pode viajar? ", podeViajarSozinho);

const precisaDeAcompanhante = !maiorDeIdade; // NOT
console.log("Precisa de acompanhante? ", precisaDeAcompanhante);
