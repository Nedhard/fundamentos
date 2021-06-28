function Data(dia=1,mes=1,ano=2021){
   this.dia= dia;
   this.mes= mes;
   this.ano= ano;
   this.exibir=function () {
       return `${this.dia}/${this.mes}/${this.ano}`
   }

}
// funcao construtora (clase)-> objeto
const d1= new Data ();
const d2= new Data (24,12,2021);
const d3= new Data (30,11,2021);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());