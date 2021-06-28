// funcao com parametro e  com retorno
function somar (a,b){
    return a + b
}
let resultado= somar(30,56)
console.log(resultado);

// funcao com parametro e sem retorno
function exibirMultiplicacao(a,b){
    console.log (a * b);
}
exibirMultiplicacao(10,21);
exibirMultiplicacao(7,9);

//funcao sem parametro e com retorno

function retornarDataAtual(){
    return new Date();
}
console.log(retornarDataAtual());

// funcao sem parametros e sem retorno
function exibirHoraAtual(){
    console.log(new Date().getHours());
}