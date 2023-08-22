/*
function parouimpar(n) {
   
    if(n % 2 === 0){
        window.alert(`O numero ${number} e par`)
    }
    else{
        window.alert(`O numero ${number} e impar`)

    }

 
}
const number = prompt("Digite um numero para verificar se eh par ou impar")
parouimpar(number)

*/

function testeMedia() {

    let n = parseFloat(prompt("Escreva a quantidade de números para calcular a média!"));
    let n2 = [];
    let somador = 0;

    for (let i = 0; i < n; i++) {
        n2[i] = parseFloat(prompt("Digite o número"));
        somador += n2[i];
    }

    let media = somador / n;
    return media;
}
let resultadoMedia = testeMedia()
alert("A média dos números é: " + resultadoMedia);
