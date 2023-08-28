
/*
// Tempo para a set time out funcionar !
console.log("Ainda nao executou")

setTimeout(function(){
    console.log("requisicao assicrona")

}, 2000)
// setInterval repetir infinatas vezes
console.log("Ainda nao executou 2")

console.log("Ainda nao comecou")
setInterval(function(){
    console.log("intervalo assicrono")
}, 1000)
console.log("Ainda nao comecou")

// Promise

const promessa = Promise.resolve(5 + 5)
console.log("Algum codigo")
console.log("outro codigo")

promessa.then((value) => {
    console.log(`A soma eh ${value}`);
})


Promise.resolve(4 * "asd")
.then((n) => {
    if(Number.isNaN(n)){
        throw new Error ("Valores invalidos")
    }
})
.catch((err) => console.log(` Um erro ocorreu : ${err}`))


function contarT(n){
    let cont = 0;
    let t = setTimeout(() => {
        for(let i = 0; i < n; i++){
            cont++;
          }
    }, 2000)

    return cont
    
}

function contarP(n){
    let cont = 0;
    let p = new Promise((resolve,rejected) => {
        for(let i = 0; i < n; i++){
            cont++;
          }
          if(cont == n){
            resolve(cont)
          }
          else{
            rejected('ERRO')
          }
    })

    return p
    
}
function somaPositivos(n1,n2){
    let p = new Promise((res,rej) =>{
        if (n1>=0 && n2>=2){
            res(n1+n2)
        }
        else{
            rej('ERRO')
        }
    })
    return p
}

somaPositivos(10, 5)
.then(res => console.log('Sucesso ' + res))
.catch(rej => console.log(rej))

async function somarcomdelay (a,b){
    return a + b
}
somarcomdelay(2,4).then((value) => {
    console.log(`o valor da soma eh ${value}`)
})*/

function ay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolveu a promise")
        }, 2000)
})
}
async function chamadaAy(){
    console.log("Chamando a promise esperando o resultado")
    const result = await ay();
    console.log(`o resultado chegou ${result}`)
}
chamadaAy()