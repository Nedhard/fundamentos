class Data {
  
    constructor(d,m,a){
        this.dia = d;
        this.mes=m;
        this.ano=a;
       
    }
    exibir(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data(20,10,2021);

console.log(d1.exibir());

const d2 = new Data(10,12,2021)

console.log(d2.exibir());

