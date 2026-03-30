//Declarações e variaveis 
//var , let e const

var nome="Fiap"; 
console.log(nome); 

var nome="Teste";

if(true){
    let apelido="Fiapinho"
    console.log(apelido);
}

const tavajuros=0.05;
console.log(taxajuros); 

var exemplo="ola-dev-var";
console.log( typeof exemplo)

let exemplo2="ola-dev-var";
console.log(exemplo2)="ola-dev-let";

const exemplo3="ola-dev-const";
console.log(exemplo3)="ola-dev-const";

let exemplo4=10;
console.log(exemplo4)

let exemplo4=true; 
console.log(exemplo4);

let exemplo5={nome1 : "teste"};
console.log(exemplo5);

let exemplo6={nome: "teste"}
console.log(exemplo6);

let exemplo=("Java","C#","PHP")

//valor undefined 
let exemplo7;
console.log(exemplo7)

//valor vazio
let exemplo8 =null;
console.log(exemplo8)

// OPERADORES ARITIMETICOS

const valor1=10;
const valor2=20;

console.log( valor1 + valor2);
console.log( valor1 - valor2);
console.log( valor1 * valor2);
console.log( valor1 / valor2);

//OPERADORES LOGICOS 
// = atribuições 
// == comparação 
// === valor e tiopo(estritante igual)
// && = E (todas condições tem que ser verdadeiras)
// || = ou (uma das condições tem que ser verdadeiras)

console.log(valor1 < valor2);
console.log( valor1 > 10 && valor2 < 10 );
console.log( valor2 > 100 || valor1 < 10 );
console.log( valor1 > 10 ==valor2);