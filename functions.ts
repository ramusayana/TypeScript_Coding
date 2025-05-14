/* 


this keyword refers to object of a class

this keyword not applicable for arrow function
function is similar to method
 its a bloc of code will perform certian task
 not good for very time write same code 
 ec: login funcion 

 function  login(){
 fill username
 fill password
 clock login
 }

 reusability , avoids duplicaiton and mainatinability is easy to organse code better way

 diff. types of funcs in JS and TS

 1. Named func. - function declaration ( function having a name )
 2. Ananymous func. -- unnamed func/  func. expression
 a. normal ananymouse
 b. arrow func

 3. constructor function

  to access these functions we need to create objects
  4. immediately invoked function excpression (IIFE) :we dont use much
  5. Factory Func. we dont use much


*/

//named func :  

function add(a,b){
return a+b

}

// anonymous func : no name and variable becomes name 

const multiply = function(a,b){
return a*b
}

console.log(multiply(2 ,3));
// Arrow func
// const divide = (c ,d ) => c/d

// console.log(divide(10/5))

function add1(a:string ,b: string) : string{
return a +b
}

let addResult = add1("JS" ,"TS")
console.log(addResult);

function add3(a ,b) {
    return a +b
    }
    
    let addResult3 = add3(20  , 30)
    console.log(addResult3);