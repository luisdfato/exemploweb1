// //Declarações e variaveis 
// //var , let e const

// var nome="Fiap"; 
// console.log(nome); 

// var nome="Teste";

// if(true){
//     let apelido="Fiapinho"
//     console.log(apelido);
// }

// const tavajuros=0.05;
// console.log(taxajuros); 

// var exemplo="ola-dev-var";
// console.log( typeof exemplo)

// let exemplo2="ola-dev-var";
// console.log(exemplo2)="ola-dev-let";

// const exemplo3="ola-dev-const";
// console.log(exemplo3)="ola-dev-const";

// let exemplo4=10;
// console.log(exemplo4)

// let exemplo5=true; 
// console.log(exemplo4);

// let exemplo6={nome1 : "teste"};
// console.log(exemplo5);

// let exemplo7={nome: "teste"}
// console.log(exemplo6);

// let exemplo=("Java","C#","PHP")

// //valor undefined 
// let exemplo8;
// console.log(exemplo7)

// //valor vazio
// let exemplo9 =null;
// console.log(exemplo8)

// // OPERADORES ARITIMETICOS

// const valor1=10;
// const valor2=20;

// console.log( valor1 + valor2);
// console.log( valor1 - valor2);
// console.log( valor1 * valor2);
// console.log( valor1 / valor2);

// //OPERADORES LOGICOS 
// // = atribuições 
// // == comparação 
// // === valor e tipo(estritante igual)
// // && = E (todas condições tem que ser verdadeiras)
// // || = ou (uma das condições tem que ser verdadeiras)

// console.log(valor1 < valor2);
// console.log( valor1 > 10 && valor2 < 10 );
// console.log( valor2 > 100 || valor1 < 10 );
// console.log( valor1 > 10 ==valor2);

// estrutura condicional 

//if 


let nome ="fiap";

if(nome =="fiap"){
    console.log("nome correto")
}

// if/else

if(nome ="fiap"){
    console.log("usuario Correto")
}else{
    console.log("usuario Errado")
}

// if encadeado alinhado 

let idade = 17; 

if(idade <= 13){
    conmsole.log("é uma criança")
}else if (idade >13 && idade <=18){
    console.log("é um adolecente")
}else if(idade >18 && idade <50)
    console.log("é um adulto")
else{
console.log("é um idoso")
}

// switch case 

let pratos="salada";

switch(pratos){
    case "macarrao":
    console.log("a melhor massa")
    break;
    case "salada":
    console.log("salada saudadvel")
    break;
    case "lasanah":
        console.log("melhor prato")
        break;
        default:
            console.log("nenhuma das opções ")
}

// ternario 

let valor =100 
let resultado = valor ==100 ? "Valor certo": "Valor errado";
console.log(resultado)

let usuario="dev";
let logado= usuario =="fiap" ? "usuario logado": "usuario invalido";
console.log(logado)
    

// estrutura de repetição 

// o laço de repetição é utilizando quando 
// sabemos quantas vezes o codigo vai ser executado 

for( let i=1; i<=5;i++){
    console.log("valor" ,i);
}

const linguagens= ["Java","python","C#"];

for(let i=0; i <linguagens.length;i++){
    console.log("linguagem", i, ":", linguagens[i])
}

const tecnologias =["JS","HTML","CSS"];

for (let tec of tecnologias){   
    console.log("Estudando:", tec)
}

//for com objeto
const carros= {marca: "volsk", modelo:"fusca", ano:1980};

for( let dados in carros){ 
    console.log(dados, ":", carros[dados])
}

//while - usamos quando não sabemos a quantidade de vezes 

let numero = 1 

while (numero <=10){
     console.log("contagem", nuemro);
     numero++;
    
}

//declarando um variavel indenfinida
let num;
while (num !== "0"){
    num = prompt("digitando um numero ou 0 para sair ")
    console.log("voce digitou" , num)
}