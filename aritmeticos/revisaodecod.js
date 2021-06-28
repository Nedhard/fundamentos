
// exercicio 1 
let a = 8;
let b = 11;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

// atribuicao

var y = 20;
y += 10;
console.log(y)

//desafio aritmeticos
var f = 73;
var c = (f - 32) / 9 * 5;
console.log(c);

//desafio atribuicao

let texto = "lista de aprovados\n";
texto += "=======================\n\n"
texto += "1. Ana Silva\n"
texto += "2. pedro albuquerque\n"
texto += "3. guilherme pereira\n"
texto += "4. rebeca franca\n"

console.log(texto)

//desafio logicos
let verdadeira1 = 2 + 5 >= 7 && 8 > 2;
let verdadeira2 = !(6 * 6 < 3);

console.log(verdadeira1);
console.log(verdadeira2);

let falso1 = 2 + 10 < 10 && 2 * 5 > 20;
let falso2 = 3 + 6 >= 8 && 10 + 10 >= 21;
let falso3 = 2 - 10 > 9 * 3 || !(2 + 10 !== 11);

console.log(falso3);
console.log(falso1);
console.log(falso2);

// desafio relacionais(5 expressoes true)

var y = 1;
var z = 2;

console.log(y < z);
console.log(z > y);
console.log(y != z);
console.log(y <= z);
console.log(z >= y);

//operadores ternarios

const g = 20;
const h= 4;

const operacao2="/"
const resultado2=operacao2 ==="/"? g/h : operacao2 === "+"? g+h : g-h;
console.log(resultado2);

// unarios

let k=1;
let j=2;

k++;
console.log(k===j);
j++;
console.log(k===j)
