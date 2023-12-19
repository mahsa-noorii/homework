// ? Question-1 :Using an example, explain the difference between block,global and function scope in variables.
// !example:

///////////////////////////////////////////////// block scope //////////////////////////////////////////////

// if a variable is defined whthin the curly braces we call it the block scope, if we
// define a variable with keywords like "const" and "let" inside the block scope and we log them 
// outside the block scope it will return is "not defined" error to us.
// but the "var" keyword also has access outside the block scope.

let c = 30;
{
    console.log(c);
    let myName = "Mahsa"
    var lastName = "Noori"
}
//  console.log(myName) // return "ReferenceError: myName is not defined"
//  console.log(lastName) // return Noori :)


 /////////////////////////////////////////////////// function scope /////////////////////////////////////

// if a Variables declared within a function we can say it's declared 
// in function or local scope (from what I understand)
// and we can access the variables declared anywhere in the function except outside the functon.
// the "let", "const" and "var" keywords worke like each other.
// Variables can be defined with the same names in different functions.

let x = 25;
function myFunction(a) {
   if(x === 25){
    var a = "Volvo";   // Function Scope
}
console.log(a); // return Volvo [and if we declared it with let or const it returns undefined].
console.log(c); //return 30
}
myFunction();
//console.log(a);//return "not defined"

/////////////////////////////////////////////// global scope /////////////////////////////////////////

// global scope is the widest scope available. Variables declared in global scope are accessible from anywhere
// in our code, a variable declared in the global scope is defined inside every function and if statments
// and every thing else😀
// We can call this "public square" where everyone can see it and have access to it.


let v = 50;
console.log(v); ///return 50

function test(){
    console.log(v); /// return 50😎👏
}
test();