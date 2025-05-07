/* data types : defines what type of data a variable is storing
mostly JS and TS has similar only few more in TS

Generally 2 types of Data types
1. Primitive data type ( variable which stores 1 single value,intezer , string)
    Number ( int or float etc..)
    String ( combonation of characters and no data type called char)
    Boolean
    Null
    undefined
    any ( Type script has given)
    union

    no flaot etc., any numeric is considered as "number" int and floating point values
2. Non- primitive data type ( functions, arrays , object etc....,multiple value or data, variable store multuple values)

Syntax
 keyword variable: datatype = value 
 let age : number = 42
*/
let age : number = 42

console.log(typeof age);


/* single qute ('') ( single leteral)
double quote  (""") 9 double literal)
backtick (``) template literal : only when we try to call variable inside a string
*/

let singleQuote = 'java script'
let doubleQuote = "JS"
let backTick = `JS code` // helps in data driven testing for parameterisation

let name1 :string = "Ram"
let greet : string = `welcome ${name1}`

console.log(greet);

// boolean data type : only stores true or false helps in condition
// true or false ( you should ask a question ? like study or play )
let ram : boolean = true
console.log(ram); 

// null ( variable no value / intential absence) 
// cretaion of an object or object is null or created 
let nullvalue : null =  null 
console.log(nullvalue);


// undefined  // variable is decalred not assigned a value 
let undefinedValue : undefined = undefined  
console.log(undefinedValue)

let boys
console.log(boys);

// any : datatype any type can be assigned
// when migrate java script code to type script code we can use any data type

let anyValue : any = 50
anyValue = "hello"
console.log(anyValue);

//union  : type script allows to hold single and multi valus
let unionVlaue : (string | number | boolean) = "Rama"
let unionVlaue1 : (string | number | null) = 123
console.log(unionVlaue);

// Non primitive are arrays , functions  etc..,