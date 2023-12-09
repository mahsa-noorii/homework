// * ===================================4====================================

/*
 ? look at the code below:
 todo: 1. create an object which has three properties. 
 todo: 2. by using "for in" and modifying keys and values your result should be like this:
 todo: 3. Mike is tall, Jake is kind, Lilly is young ({key} is {value})
*/

/**Write your code below  */

let myObject = {

    Mike: 'tall',
    Jake: 'kind',
    Lilly: 'young'
}


for (const key in myObject) {
    console.log(`${key} is ${myObject[key]}`);
}