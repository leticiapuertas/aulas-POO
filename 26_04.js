var entrada = require("readline-sync");
var numero = [];
var maior = 0;
for (var i = 0; i < 10; i++) {
    numero[i] = entrada.question("numero: ");
    if (numero[i] > maior) {
        maior = numero[i];
    }
}
console.log(maior);
