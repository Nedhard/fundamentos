const t1 = false;
const t2 = true;

let comprartv50 = t1 && t2;
console.log ("vamos comprar a TV de 50 polegadas ?", comprartv50);//and

let comprartv32=  t1 !== t2;
console.log ("vamos comprar a TV de 32 polegadas ?",comprartv32);//xor !== ou exclusivo ou diferenca

let tomarsorvete = t1|| t2;
console.log ("vamos comprar sorvete ?", tomarsorvete); //or ou OU
 
let ficaremcasa = !tomarsorvete;
console.log("vamos ficar em casa?", ficaremcasa);