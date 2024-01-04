// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer

const message = document.querySelector('.message');
const closeMessage = document.querySelector('.ri-close-line');

closeMessage.addEventListener('click', ()=> {
    message.style.display = 'none'
})