// ? 4. Change two or more values of this object .
// todo : one of the values that you change must be the skills property // example: ['python', 'css', 'js']

const obj2 = {
  id: 'kd455',
  age: 24,
  username: 'john2000',
  skills: ['html', 'css', 'js'],
};

//  !   Answer:

Object.keys(obj2).forEach((element) => {
  if(typeof obj2[element] == "number"){
    obj2[element] = 30;
  }
});


Object.keys(obj2).forEach((item) => {
  if(obj2[item].length >= 8){
    obj2[item] = 'mynameisBela'
  }
})

obj2 ['id'] = 'Mahylor';
obj2.skills[0] = 'python';

console.log(obj2);

