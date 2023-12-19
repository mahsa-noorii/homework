// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:


function outerFunc (a){
    function innerFunc (b) {
       return a * b;
    }
    return innerFunc;
}

const inner = outerFunc(5);
const result = inner(4);

console.log(result);