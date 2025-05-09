/*
Operators : Actions to perform on variables


Arithmatic operator : Perform mathematical operation / 
addition 

subtraction, 
multiplication 
Modulus  : %  it will give the reminder after the first number with second number
Division : /
Exponentiation : **
Operator is a symbol which perform action


Comparison operators : True or false
Logocal  operators : for multiple conditions
Assignment operators






*/

console.log(2+2);
console.log("JS"+"TS");

let num1 = 10
let num2 = 5
console.log(num1/num2);
console.log(num1%num2);
console.log(num1 ** num2);

//increment operartor : in looms
//post increment will be declared after the variable declaration (X++); first action will be performed then value is incremented
//pre increment ++x ; First value is incremented then performs action
//decrement --

let num3 = 8
console.log(num3 ++);
console.log(++ num3);

let num6 = 10
console.log(num6--);
console.log(num6);

//conditional Operator or comparison opertor : compares to values and output boolean  ( returns tru or false)
/*Equal to == ( left is compared to right side value)
assign value = 
not equal !=
Greater than >
less than  <
greater >=
lessthan <=
Strict equlity ===
Strivt inequality !==

Diff. between equal to and strict qual to 
*/
// eQUAL TO is compare withought checking the data type same with not equal to 
// strict : compare if two values are same and along with data type should be same 
// greater or smaller equal 
let num8 = "20"
let num9 = 20 

console.log(num8 == num9);
console.log(num8 === num9);
console.log("strict equal to " ,+num8 === num9);

console.log(num8 != num9); // 20 != 20
console.log(num8 !== num9);
console.log(num8 >= num9); // true
console.log(num8 <= num9); // true

