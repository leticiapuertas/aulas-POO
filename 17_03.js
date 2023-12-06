var entrada2 = require("readline-sync");
var cor = entrada2.question("insira a cor:");
if (cor == "vermelho") {
    console.log("pare");
}
else if (cor == "amarelo") {
    console.log("atenção");
}
else if (cor == "verde") {
    console.log("Siga");
}
else {
    console.log("digite uma cor valida!");
}
