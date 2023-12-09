// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/

const object1 = {
    ali: 'name',
    writes: 'does what',
    novels: 'kind of book',
}

// =======================================😀==================================

const values = Object.values(object1);

// =======================================😎===================================

let valArray = [];

for(const key in object1){
    valArray.push(object1[key]);
}

console.log(valArray);
