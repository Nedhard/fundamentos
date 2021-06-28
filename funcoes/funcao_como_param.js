function executar(funcao){
    if(typeof funcao === "function")
    console.log(funcao())
}
function BomDia(){
    return "bom dia"
}

executar (BomDia);