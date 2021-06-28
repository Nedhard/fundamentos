const nota1 = 1;
const nota2 = 1;
const nota3 = 1;

function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

//if(n1<=n2){
//return n1;
//}else{
// return n2;
//}

function media(n1, n2, n3) {
    const menorNota = minimo(nota1, minimo(nota2, nota3))
    if (menorNota === n1) {
        return (n2 + n3) / 2
    } else if (menorNota === n2) {
        return (n1 + n3) / 2
    } else {                                    
        return (n1 + n2) / 2;
    }
}
function MediaParaStatus(media) {
    if (media >= 7) {
        return "aprovado"
    } else if (media >= 4) {
        return "recuperacao"
    } else {
        return "reprovado"
    }
}

const mediafinal = media(nota1, nota2, nota3);
const statusFinal = MediaParaStatus(mediafinal)
console.log(`o resultado final do aluno é ${statusFinal}`);
