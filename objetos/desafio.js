const data ={
    dia:11,
    mes:09,
    ano:1997,
    exibir(){
        return `${data.dia}/${data.mes}/${data.ano}`
    }
}
console.log(data.exibir())