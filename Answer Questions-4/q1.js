// * ===============================1========================================

/*
 ? look at the code below:
 ? make a sentence by concatenating the object keys 
*/
const object1 = {
  ali: 'name',
  writes: 'does what',
  novels: 'kind of book',
};

// output => 'ali writes novels'

const sentence = Object.keys(object1).join(' ');
console.log(sentence);