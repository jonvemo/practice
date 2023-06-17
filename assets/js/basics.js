// Parameters REST
// Permite capturar múltiples argumentos de una función en forma de una lista o matriz, en lugar de especificarlos individualmente.
function sum(...numbers){
    let result = 0
    /*numbers.forEach(function(number) {
        result += number
    })*/
    numbers.forEach((number)=>{
        result += number
    })
    return result
}
console.log(sum(1,2))


// OperaTor Spread
// Nos permite descomponer matrices u objetos para trabajar con sus elementos de manera individual o combinarlos con otros elementos de forma más conveniente.
const ARRAY_ONE = [1,2,3,4,5]
const ARRAY_TWO = [6,7,8,9,10]
const ARRAY_THREE = [...ARRAY_ONE,...ARRAY_TWO]
console.log(ARRAY_THREE)

const NUMBERS = [1, 2, 3];
console.log(NUMBERS); // Result: 1 2 3

// Constructor Function | Antes de 2015

// Lo ideal es las funciones constructoras sólo tenga los atributos, y los métodos estén fuera.
function Person(name,age) {
    this.name = name
    this.age = age
}
// Se asigna el Método al Prototipo de Person
Person.prototype.greeting = function() {console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`)}
  
const PERSON_ONE = new Person('John', 20);
PERSON_ONE.greeting() // Resultado: Hola, mi nombre es Jhon y tengo 20 años.

// Prototype Herence
function Artist(name='No Name',gender='No Gender',style='No Style'){
    this.super = Person
    this.super(name)
    this.gender = gender
    this.style = style
}
Artist.prototype = new Person()
Artist.prototype.constructor = Person

const ARTIST_ONE = new Artist('Hen','Female')
Artist.prototype.greeting = function() {console.log(`Hola, mi nombre es ${this.name} y soy ${this.gender}.`)}
ARTIST_ONE.greeting()

// With CLass
class Person {
    constructor(name,gender){
        this.name = name
        this.gender = gender
    }
    greeting(){
        console.log(`Hola, mi nombre es ${this.name} y soy ${this.gender}.`)
    }
}
class Artist extends Person {
    constructor(name='No Name',gender='No Gender',style='No Style'){
        super(name,gender)
        this.style = style
        this.color = null
    }
    messagge(){
        console.log(`Soy ${this.name}, ${this.gender} y mi estilo es: ${this.style}.`)
    }
    static whoiam(){
        console.log('Me')
    }
    /*get getColor(){
        return this.color
    }*/
    set setColor(color){
        this.color = color
    }
}
const ARTIST_ONE = new Artist('Hen','Female')
// ARTIST_ONE.messagge() // Soy Hen, Female y mi estilo es: No Style.
// Artist.whoiam() // Me
// console.log(ARTIST_ONE.getColor)
console.log(ARTIST_ONE)
ARTIST_ONE.setColor = 'Yellow'
console.log(ARTIST_ONE)
// console.log(ARTIST_ONE.getColor)


// CallBacks
function funCallback(value,callback){
    setTimeout(()=>{
        callback(value,value*value)
    },0 | Math.random()*1000)
}
funCallback(0,(value,result)=>{
    console.log('Incia Callback')
    console.log(`Value: ${value}, result: ${result}`)
    funCallback(2,(value,result)=>{
        console.log(`Value: ${value}, result: ${result}`)
    })
})

// Callback to Promise
function funCallback(value){
    typeof value !== 'number' ? Promise.reject(`Error, el valor "${value}" no es un número`) : ''
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                value,
                result: value*value
            })
        },0 | Math.random()*1000)
    })
}
/*
funCallback(0)
    .then((obj)=>{
        console.log(obj)
        return funCallback(1)
    })
    .then((obj)=>{
        console.log(obj)
        return funCallback('dd')
    })
    .then((obj)=>{
        console.log(obj)
        return funCallback(3)
    })
    .catch(err=>console.error(err))
*/

// Promise to Async Promise
// const funAsync = async () => {}
async function funAsync(){
    try{
        console.log('Start')
/*
        let obj = await funCallback(0)
        console.log(`Value: ${obj.value}, result: ${obj.result}`)

        obj = await funCallback(1)
        console.log(`Value: ${obj.value}, result: ${obj.result}`)
*/
        for (let i=0; i<=5; i++) {
            let obj = await funCallback(i)
            console.log(`Value: ${obj.value}, result: ${obj.result}`)
        }

        console.log('Fin')
    }
    catch(err){
        console.error(err)
    }
}
funAsync()

// call, apply, bind
// call
function sayHello() {
    console.log("Hola, " + this.name);
  }
  
  let person = {
    name: "Juan"
  }
  
  sayHello(person);  // Salida: "Hola, undefined"
  sayHello.call(person);  // Salida: "Hola, Juan"

  // bind

  function sayHello() {
    console.log("Hola, " + this.name)
  }
  
  let person = {
    name: "Juan"
  }
  
  let sayHelloToPerson = sayHello.bind(person)
  sayHelloToPerson();  // Salida: "Hola, Juan"

  // apply

  function sayHello(...greeting) {
    console.log(greeting + ", " + this.name)
  }
  
  let person = {
    name: "Juan"
  }
  
  sayHello.apply(person, ["Hola",'bitch']);  // Salida: "Hola, Juan"