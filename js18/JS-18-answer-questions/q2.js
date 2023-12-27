/*
  todo 1: generate a random color using Math and rgb
  todo 2: add a div and change the background color when user brings the mouse over the div
*/

// ! ========== Answers ==========



const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb( ${r}, ${g},${b})`;
};

const originalColor = () => 'bisque';
const hoverDiv = document.getElementById('hover');

hoverDiv.addEventListener('mouseover', () => {
  hoverDiv.style.backgroundColor = randomColor();
});


hoverDiv.addEventListener('mouseout', () => {
  hoverDiv.style.backgroundColor = originalColor();
});