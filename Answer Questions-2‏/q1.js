// ? 1. Convert the code below using obj destructuring to get a best practice code:

// const obj = { number: 6043, age: 21, pt: 96 };
// const number = obj.number;
// const age = obj.age;
// const pt = obj.pt;

// ! Answer:

({number, age, pt} = {number: 6043, age: 21, pt: 96})
console.log(number, age, pt);

