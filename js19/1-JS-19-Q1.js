// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:

const like = document.querySelector('.cards__card__img__icon i');
const numberOfLike = document.querySelector('.cards__card__img__icon__text');
let numberOfLikeEle = Number.parseInt(numberOfLike.textContent);

like.addEventListener('click', () =>{
    like.style.color = 'red'
    numberOfLikeEle++;
    numberOfLike.textContent = numberOfLikeEle;
    
});




