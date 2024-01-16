// ? Remember domthis.js from your session?
// todo1: Look at the code below, fix it, and explain how you resolved the problem.
// Note: In this code, console.log and console.dir should refer to the button and h1 element, not the window.

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}${g}${b})`;
};

const buttons = document.querySelectorAll('button');

// raftam to mdn search kardam :)

//When a function is used as an event handler, its 'this'
//parameter is bound to the DOM element on which the listener is placed :)

function logButton(e) {
  console.log(this);
  console.dir(this);
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}

for (let button of buttons) {
  button.addEventListener('click', logButton)
}

function logH1(e){
  console.log(this);
  console.dir(this);
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
  h1.addEventListener('click', logH1)
}
