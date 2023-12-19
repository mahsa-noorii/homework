// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
// todo-2:select image and set margin "4rem 0"
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:

// ================================== background ==================
document.body.style.backgroundColor = '#0a122d';

// ==================================== image =====================
const imgMargin = document.querySelector('#strangeFish');
imgMargin.style.margin = '4rem 0';
imgMargin.style.borderRadius = '1rem';

//====================================== h ha😂===================
const h1 = document.querySelector('.hero__title');
const h5 = document.querySelector('.hero__subtitle');

h1.style.fontSize = '1.5rem';
h1.style.top = '4.5rem';
h5.style.top = '6.5rem';



