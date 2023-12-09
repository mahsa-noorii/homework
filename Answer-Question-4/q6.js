// * ===================================6====================================
// *********** check *****************

/*
 ? look at the code below
 todo: 1. define an array
 todo: 2. pass the array to the function using the spread parameter when calling the function  
 todo: 3. the result should be like this " {Imagine Dragons} is a {Music} {Band}" ( words inside {} are given as params)
*/
let array = ['Imagine Dragons', 'Music', 'Band'];
const music = (first, second, third) => {
  console.log(`${first} is a ${second} ${third}`);
};

music(...array)


