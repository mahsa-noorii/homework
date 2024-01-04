//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:

const changeText = document.querySelector('button');
changeText.addEventListener('click', () => {
    changeText.textContent = 'Added to Cart';
});



