let randomNumber = Math.floor(Math.random() * 100 + 1);
const newGameEl = document.querySelector('.btnNewGame');
const triesOutput = document.querySelector('.Tries-output');
const finalOutput = document.querySelector('.final-output');
console.log(randomNumber);
let guess = document.querySelector(".inputs-Values").value;

let guessButton = document.querySelector('.btnGuess');
let triesTaken = 7;
triesOutput.textContent = `Number of Tries: ${triesTaken}`;
guessButton.addEventListener('click', () => {
  triesTaken--;
  triesOutput.textContent = `Number of Tries: ${triesTaken}`;
  if(triesTaken == 0) {
    finalOutput.textContent = 'kohygftdd';
    triesOutput.textContent = `You Lose, the number was ${randomNumber}`;
  }
});

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
   if(guess < 1 || guess > 100 || isNaN(guess)){
    finalOutput.textContent = 'Please enter a number between 1 and 100';
    return;
   }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
   if(guess != randomNumber) {
    if(guess > randomNumber) {
      finalOutput.textContent = 'Number is too high, try again';
    } else{
      finalOutput.textContent = 'Number is too low, try again ';
    }
   };

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  if(guess == randomNumber) {
    finalOutput.textContent = `${randomNumber} is correct. You win!!!`;
    triesOutput.textContent = `It took you ${7 - triesTaken} tries`;
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(`new num ${randomNumber}`);
  triesTaken = 7;
  triesOutput.textContent = `Number of Tries: ${triesTaken}`;
  finalOutput.textContent = 'Please enter a number between 1 and 100';
}

newGameEl.addEventListener('click', newGame);

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
