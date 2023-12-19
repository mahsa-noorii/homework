/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:


function createSequence(){
   //====================================== num1 & num2 =============
   const num1 = parseInt(prompt('enter a number between 0 and 15'));
   const num2 = parseInt(prompt('enter a number between 0 and 15'));
   //===============================================================
   const sequence = [num1, num2];
   for(let i =2; i<10; i++){
      if(!isNaN(num1) && !isNaN(num2) && num1 >= 0 && num1 <= 15 && num2 >= 0 && num2 <= 15){
         const nextNumber = (sequence[i-1] + sequence[i-2])*2;
         sequence.push(nextNumber);
         console.log(sequence);
      } else{
         console.log('the entered number must between 0 and 15');
      }
   }
   console.log('another way to show');
   console.log(sequence);
   return sequence;
}
createSequence();




