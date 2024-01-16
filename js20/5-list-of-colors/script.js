function listOfColours(colours) {
  // Write your code here...
  const div = document.querySelector('#content');
  const p = div.appendChild(document.createElement('p'));
  p.textContent = 'Choose a color';
  const select = div.appendChild(document.createElement('select'));
   colours.forEach(element => {
    const option = select.appendChild(document.createElement('option'));
    option.textContent = element;
    option.value = element;
    select.addEventListener('change', (event)=> {
     option.style.color = `${option.value}`;
     p.style.color = `${event.target.value}`;
     p.textContent = `You have selected: ${event.target.value}`
    })
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
