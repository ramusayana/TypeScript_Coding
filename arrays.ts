/* Its a special type of variable holds more than one value like container holds multiple value
it can be of any data type 
its also an ordered collection saved in a specific order 
you should be able to get the value by their index or position value 

Declare array in 2 ways 
 
1. array literal  : []
2. array Constructor :  using "new" key word


*/

let array : any = [ 10,20,30, "TS"] // declaration of array and index starts with zero ex. 10 is zero position 
// TUPLES Will take 2 values inside array
//to get the valus
// i [index] or i[0]=10

//1. array literal  : []

// let arrayName : datatype[]( this is optional only for ts) = [value1 , value 2, vale 3 ]

// 2. array Constructor 

// Tuples is a static array 

let array1 = new Array<any>(10,20, "TS") 
console.log(array1);

let array0 = []
console.log(array0);

array0[0] = 20
array0[1]= 200
array0[2]= 2000
console.log(array0[1]);

let array2 = [ 40, "Apple", "JS", 40 , 20, "blue"] // index is 0 to 5 
console.log(array2[3]);
console.log(array2);

console.log(array2.length)

for(let i =0 ; i <array2.length ; i++){

    console.log(array2[i]);
}


console.log("**************");


for(let ele of array2){
    console.log(ele);
}
console.log("**************ele ");
for(let ele in array2){
    console.log(array2[ele]);
}

// second way is for of loop

//syntax is for( declare a variable of arayName {}) this will not work on index  

//length in array 
//arrayName.length
//looping concept to fetch the value by for loop



// Tuple is an array having a fixed size like string , boolean and number to be assigned exactly 

let myTuple : [ string , number , boolean] = [ "Ram"  , 10 , true]
myTuple.push(20)
console.log(myTuple);
console.log(myTuple[0]);

/*length is one of the property of array
push is a method which accepts to add one element to end of the array

*/

let myTuple1 : [ string , number , boolean , number] = [ "Ram"  , 10 , true ,10]
myTuple1.push(1000)
console.log(myTuple1);

//2.  pop() the use of this method is to remove the last element of array

myTuple1.pop()
console.log(myTuple1);