/*Variables - storage which stores single or multiple values
syntax
var - modern js/ts we do not use this keyword 
let -ES6 (ECMA Script6) - whenever the value of the variable can be changed 
const - which is used to declare value cannot be changed

keyword(var/let/const) variablenme: datatype(optional) = value

var has global or func
declare variable inside func, local variable outside func. is global variable

variable declared var key word can be re declared and re initiated as well 
using var keyword can be changed many times
var i = 40
var i = 50
var i = 60
*/

let i : string = "10" ;
i = "Ram"

var    a = 20 ;

function test(){
var b =30 // local scope and cannot use outside of func
console.log(b)
console.log(a)
}

// console.log(b)
console.log(a)

var flag = "Js" // overwritten gloabl variable when you use it inside function

if(true){
    var flag = "ts"
}

console.log(flag)

let flaggie = "Java" // overwriiten gloabl variable when you use it iside function

if(true){
    let flaggie = "Raava"
}

console.log(flaggie)


const flaggier= "Python" // overwriiten gloabl variable when you use it iside function 
// const cannot be re declared or re-initiatilised the value 
/* example :  

const j =10
const j =11 / not allowed to define same and value as well
const variable must be initialised
example : 
const i // not right it should like 
const = 40
use shortcut clg enter for console
*/

if(true){
    const flaggier = ".net"
}

console.log(flaggier)

