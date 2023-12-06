const entrada = require("readline-sync");

let numero: number[] = [];
let maior = 0;

for( let i = 0; i < 10; i++ ) {

    numero[i] = entrada.question ("numero: ");

    if(numero[i] > maior ){
        maior = numero[i];
    }
}

console.log(maior );