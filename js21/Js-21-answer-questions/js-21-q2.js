// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.


const persons = [
    { name: "Alice", age: 18 },
    { name: "Bob", age: 21 },
    { name: "Charlie", age: 15 },
  ];



function printPersons(array) {

    const ul = document.createElement('ul');
    document.querySelector('body').appendChild(ul);
    
    array.forEach(element => {
        const li = document.createElement('li');
        li.textContent = `name: ${element.name} age: ${element.age}`;
        ul.appendChild(li);
    });
}

printPersons(persons);
