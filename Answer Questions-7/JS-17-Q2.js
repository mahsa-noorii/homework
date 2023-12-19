// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:

const colorOfspans = document.querySelectorAll('.circle');

for(let i =0; i<colorOfspans.length; i++){
    colorOfspans[i].classList.toggle('blue');
    colorOfspans[i].classList.toggle('purple');
}
console.log(colorOfspans);

// ========================= with foreach ================
colorOfspans.forEach((el) =>{
    el.classList.toggle('blue');
    el.classList.toggle('purple');
});



