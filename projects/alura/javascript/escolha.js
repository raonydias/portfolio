const notaDoAluno = 8;

switch (notaDoAluno) {
    case 10:
    case 9:
        console.log("Nota excelente!");
        break;
    case 8:
    case 7:
        console.log("Nota boa");
        break;
    case 6:
    case 5:
    case 4:
        console.log("Nota média");
        break;
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Nota ruim");
        break;
    default:
        console.log("Valor inválido");
        break;
}
