let TemDinheiroNaConta= true;
let EstaEnsolarado= false;
let CarroEstaNaGaragem = true;

let resultadoE= "(and/E)vai pro shopping? ";
resultadoE += TemDinheiroNaConta && EstaEnsolarado;
console.log(resultadoE);

let resultadoOU = " (OR/OU)#2 - vai pro shopping? ";
resultadoOU +=  EstaEnsolarado || CarroEstaNaGaragem; // || quer dizer OU
console.log(resultadoOU);

console.log(true ^ true); // ou exclusivo

console.log("nao verdadeiro"+ !true);// ! nao verdadeiro
console.log("nao false"+ !false);