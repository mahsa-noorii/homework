// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer

const stars = document.querySelectorAll('.stars i');

stars.forEach((star) => {
    star.addEventListener('click', (event)=> {
      const color = star.style.color;

      if(color === 'orange'){
        star.style.color = '#e6e6e6';
      } else{
        star.style.color = 'orange';
      }
    })
})





