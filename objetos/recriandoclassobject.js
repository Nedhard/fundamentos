class Data{
    constructor(d,m,a){
        this.dia=d;
        this.mes=m;
        this.ano=a
    }
    exibir(){
        return `${this.dia}/ ${this.mes}/${this.ano}`
    }
        
    
}

const d1 = new Data (11,09,1997);
console.log(d1.exibir())

const d2 = new Data (07,05,1997);
console.log(d2.exibir())