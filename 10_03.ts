const entrada = require('readline-sync')

let n1: number= parseFloat(entrada.question('Informe um numero:')) 
let n2: number= parseFloat(entrada.question('Digite outro numero:')) 
let n3: number= parseFloat(entrada.question(' Mais um numero:'))
    
if(n1<n2 && n1<n3){
        console.log(n1+'é menor')
    }
if(n2>n1 && n2>n3){
    console.log(n2+ "é maior")
}
else if(n3<n1 && n3<n2){
    console.log(n3+ "é menor")
}







