//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring

////////////////////////////////////

var myName = 'mahsa noori';
var myName = 'maryam';

///////////////////////////////////

const myName = 'mahsa noori';
// let lastName = 'noori';
let lastName = 'mehry'; // Corrected: Use let for variable reassignment

///////////////////////////////////
/*
const years = 10;
const years = 9; // Error: can't redeclare const
*/
//////////////////////////////////
/*

function myFunction(firstName, lastName) {
    return `my name is ${firstName} ${lastName}`;
}
const myArrowFunction = (firstName, lastName) => 'My name is ${firstName} ${lastName}'; */
////////////////////////////////////////////////

let numbers = [1, 2, 3];
let [first, second, third] = numbers;
