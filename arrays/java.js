/*
const lista = [1,2,3,4,5]

const itens = ["mateus " , 1 , 2.4 , true]

console.log(itens)




console.log(nome.length)



const ar = ["a" , "b", "c" ,"a" ]
console.log(ar[])



const numos = [1,2,3]
const nu = [1,2,3]
const num = numos.concat(nu)

console.log(num)

const text = "antonio"

console.log(text.toUpperCase()
)
console.log(text.indexOf("n"))



const pessoa = {
    name: "Mateus",
    age: 31,
    job: "Programador",
}

console.log(pessoa)

console.log(pessoa.job)


const car = {
    motor: 2.0,
    marca: "VW",
    mod: "Tiguan",
    km: 20000,
}

car.porta = 4;

console.log(car)

delete car.km

console.log(car)

const katia = {
    prof: "prostituta",
    idade: 72,
    valor: 0.50,
}
console.log(katia)

del katia.valor

const obj = {
    a: "teste",
    b: true,
}
console.log(obj instanceof Object)

const obj2 = {
    c : []
}
Object.assign(obj2, obj)

console.log(obj2)
delete obj2.c
console.log(obj2)

console.log(Object.keys(obj2))

console.log(Object.entries(obj))


const a = {
    name: "antonio"
}
const b = a;
console.log(b)
console.log(a)

a.age = 31

console.log(b)

console.log(a === b)

delete b.age 

console.log(b)




let i = 0
const ok = {
    for(i = 0; i <= 2; i++){
   
    }
}



const users = ["mateus", "joao", "antonio"]

for(let i = 0; i < users.length;i++){
    console.log(users[i])
}


const array = ["a" , "b" , "c"]
console.log(array.length)
array.push("d")
console.log(array)

array.pop()

console.log(array)


const itemremorivo = array.pop()


console.log(itemremorivo)
.array.push("z" , "x")




const reverse = [1,2,3,4,5]

reverse.reverse()
console.log(reverse)



TRIM


const trim = "   testando \n"

console.log(trim)
console.log(trim.trim())


padStart e padEnd


const testepad = "1"

const newT = testepad.padStart( 4,"4")
const newS = newT.padEnd(10 ,"0")

console.log(testepad)
console.log(newT)
console.log(newS)

SPLIT

const frase = "o rato roeu a roupa da karla"
const array = frase.split(" ");

console.log(array)


JOIN




const peri = ["Mouse", "Teclado", "MousePad"]
const k = `Precisamos comprar ${peri.join(",  ")}.`
console.log(k)

REPEAT


const palavra = "Testando ";
console.log(palavra.repeat(5))


Rest Operator / Rest Parameters


const soma = (...args) => {
     let total = 0

     for( i = 0; i < args.length; i++){
        total+= args[i]
     }
     return total
}

console.log(soma(1,2,3))

Estrutura repeticao for of


const soma = (...args) => {
    let total = 0

    for(num of args){
        total += number 
    }
    return total
}
console.log(soma(1,2,3))



destructing em objestos


const user = {
    nome1: "Mateus",
    nome2: "Battisti",
    job: "Programador",
}
const {nome1,nome2,job} = user;
console.log(nome1,nome2,job)

// renomear
const{nome1: first} = user;

console.log(first)


destruct com arrays

const list = ["Aviao" , "Carro" , "Submarino"]
const [veiculoA, veiculoB, veiculoC] = list;

console.log(veiculoA,veiculoB,veiculoC)
*/
// JSON

const json2 = '{"name": "Mateus", "age": 31, "skills":["PHP" , "JavaScript" , "Python" ]}'
const obj = JSON.parse(json2)
console.log(obj)

console.log(obj.name)

// jason invalido

const badJson = '{"name": Matheus, "age": 31'

console.log(obj)
const newJson = JSON.stringify(obj)

console.log(newJson)





















































