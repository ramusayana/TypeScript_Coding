//statements or conditions

// defintion of statements in TS are allows us to execute block of code 

// if statement 
// if else  statement 
// if else if else 
//nested if else 
// Switch 

// if statement is specified condition is true
if(4 > 2){
    console.log("this is excellent");

}
if(4 < 2){
    console.log("this will not execute as condition is false");

}
// if else

if(1 > 2){
    console.log("this is excellent");
}
else {
   console.log("this is else");
}

// if else if condition statement ( depending on 2 conditions more than ) if st block of code of if not else if its not valid in else then 
/* if(cndition1){
//code
}
else if(condition 2){
//code 
}
else{
// code 
}
*/

if(1 > 2){
    console.log("this is condtion1");
}
else if(2>6){
   console.log("this is 2nd condition");
}
else{
    console.log("this is else condition last one");
}

let browser = "chrome"

if(browser === "chromer"){

console.log("browsesr is chrome");
}

else if(browser === "firefox"){
    console.log("browsesr is firefox")

}else if(browser==="edge") {
    console.log("browser is edge");
}
else {
    console.log("else condition ");
}

// Switch will also go for specific condition
/*switch(expression){

case value1:
break;
case value2:
break;
case value3:
break;
default:
break;
}*/

let browsername = "Safari"
switch(browsername){

    case "chrome":
        console.log("browser is chrome");
    break; 
    case "firfox":
        console.log("browser is firefox");
    break;
    case "Safari":
        console.log("browser is safari");
    break;
    default :
    console.log("this is default ");
    break;
    } 

    //nested : check condition nested if else 