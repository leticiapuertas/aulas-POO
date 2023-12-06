var entrada = require('readline-sync');
var n1 = parseFloat(entrada.question('Informe um numero:'));
var n2 = parseFloat(entrada.question('Digite outro numero:'));
var n3 = parseFloat(entrada.question(' Mais um numero:'));
if (n1 < n2 && n1 < n3) {
    console.log(n1 + 'é menor');
}
if (n2 > n1 && n2 > n3) {
    console.log(n2 + "é maior");
}
else if (n3 < n1 && n3 < n2) {
    console.log(n3 + "é menor");
}
