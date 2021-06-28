let nota = 4.5;

switch (Math.ceil(nota)) {
    case 10: case 9: case 8: case 7:
        console.log("parabens voce foi aprovado ");
        break;
    case 6: case 5:
        console.log("Aprovado");
        break;
    case 4: case 3: case 2:
        console.log("reprovado");
        break;
    case 1: case 0:
        console.log("muito reprovado");
        break;
    default:
        console.log("nota invalida")
}