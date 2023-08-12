/*
function minhafuncao(){
    console.log("testando");
}
minhafuncao()

const mf = function(mf){
    console.log("oi vida");
}


const a = 10
const b = 20
const c = 30
function soma(n1, n2){
    return n1 + n2 
}
const resultado = soma(a,b)

console.log(`o resultado da funcao eh ${resultado}`)


let a = prompt("digite o valor de a");
let b = prompt("digite o valor de b");

function soma(n1,n2){
     return Number(n1)+ Number(n2)
}

const result = soma(a,b);

alert(`O resultado da soma eh ${result}`)


function testandoEscopo(){
    let y = 20
    console.log(`Y dentro da funcao eh ${y}`)
}

let y = 10;

testandoEscopo()
console.log(`${y}`)


let m = 10 

function escopoalinhado(){
    let m = 20
    console.log(`${m}`)
    if(true){
       let m = 30
       console.log(`${m}`)
       if(true){
         let m = 40
         console.log(`${m}`)
       }
    }

}
escopoalinhado();

const textarrow = () => {
    console.log("Esta e uma arrow function")
}
textarrow()*/

const parouimpar = (n) => {
    if(n % 2 === 0){
        console.log("Par")
    }
    else{
        console.log("Impar")
    }
    return
}
const m = 11;

parouimpar(m)