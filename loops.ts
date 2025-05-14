//loops : repetetive n number of times : will execute same block of code multiple times
//print on console 1-5 times duplicating few times : using loop we should be able to print
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);



for(let i=1; i<=10 ; i++){
    console.log(i);
}

for(let i=10; i>0 ; i--){
    console.log(i);
}


/* 1. for loops  : 
a. Traditional  ( above one ) this can be used how many times we can iterate or run like 5 times 10 times etc.. or e- commerce how many products like 5 or 10 
b.for in loop  ( loop which is used to iterte through object properties { name: "Ram"}) this is syntax of Object
c. for of loop or for each is similar  (loop through iterare array, string which is iteratable [1,2,3] ) ( for json file or excel file)

2. while loop : its opposite to for loop if we dont know how many times we nhave to run iteration / scroll down and if loading the product in 1st page or 2 nd page or 3rd page etc..
3. do while loop : siilar to while loop and this says atleast execute for 1 time and dont know how many times to run / before checking the condtion execute atlest one time // we dont use this much at all /// generaly for validate for user name and password
*/
/* initiatilise the variable and gave value 
condition every iteration will check the condition 
increment or decrement  : increase or decrease of value of the variable
*/
//for ( initialisation ; condition ; increment or decrement){ 
//block of code}

// while loop when you do not know how many times to iterate
/*
initialisation
while(condition){
// code to be executed increment or decreemet

increment or decrement only with numeric value not string for variable to write j-- in the loop 
}
*/
// pribt valuse from 10 to 1

console.log("***************");


let j = 10;
 while ( j>=1){
    console.log(j);
       j--;
       if(j==5){
        break;
       }
       }

// do while lop at least one time loop should get execute then condotion
/*intialistion
do{

}while(condition)   */ 

console.log("***************");


let q = 1;
do{
    console.log(q);
    q++ ;
 
}while(q<=10)
