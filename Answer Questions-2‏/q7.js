// ? 7. Using Array Destructuring, get the last name from the array.
//  todo : notice that 'Christina' is firstName , 'Jon' is middleName , 'Alexandare' is lastName.

const students = ['Christina', 'Jon', 'Alexandare'];

// ! Answer

///////////////////////////////////////////////////////////


let [firstName, middleName, lastName] = students;

console.log(firstName); // Christina
console.log(middleName);// Jon
console.log(lastName); // Alexandare   

