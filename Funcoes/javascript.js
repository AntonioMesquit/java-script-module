
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
textarrow()

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

const raizquadrada = (x) => {
    return x * x

}
console.log(raizquadrada(4))

const raizquadrada2 = (x) => x * x

console.log(raizquadrada2(5))
console.log(raizquadrada2(12))



const mutiplicacao = function (m,n) {
    if (n === undefined){
        return m * 2;
    }
    else {
       return m * n
    }
}

const name = "marcos"
const greeting = (name) => {
    if (!name) {
        console.log("ola")
    }
    console.log(`ola ${name}`)
}

console.log(greeting())
console.log(greeting("mateus"))



const nombre = (nombre , name = "ola") => {
    return `${nombre}, ${name}! ` 
}

console.log(nombre("mateus"))
 


const repetir = (text, repito = 2) => {
    for(let i = 0; i < repito; i++){
        console.log(text)
    }
}
repetir("vai tomar no cu" , 5 )


function some() {
    let txt = "Alguma coisa"

    function display (){
        console.log(txt)
    }
    display()
}
some()



const mutipl = (n) => {
    return (m) => {
        return n * m;
    }
}
const c1 = mutipl(5)
const c2 = mutipl(10)
console.log(c1(5))


const atedez = (n , m) => {
    if (n < 10) {
        console.log("A funcao parou de executar!")
    }
    else {
        const x = n - m;
        console.log(x)
        return atedez(x, m)
    }
    
    
}


function fatorial (x){
    if (x === 0){
        return 1 
    }
    else { 
        return x * fatorial(x - 1)
    }
}
console.log(fatorial())













































