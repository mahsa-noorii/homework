// ? 8. Use Array Destructuring to get all of the names from this Nested Array
// hint: Search about destructuring nested arrays.

const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

//! Answer :

///////////////////////////////////////////////////////////////////

const [a, [b, c], [d, e]] = moreStudents;

console.log(a, b, c, d, e); // Chris Ahmad Antigoni Toby Sam


