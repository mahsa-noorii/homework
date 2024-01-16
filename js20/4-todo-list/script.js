function todoList(todos) {
     const div = document.querySelector('#content');
     const ul = div.appendChild(document.createElement('ul'));
     todos.forEach(element => {
      const li = ul.appendChild(document.createElement('li'));
      li.textContent = element.todo;
      li.style.textDecoration = 'none';
      li.addEventListener('click', ()=> {
        if(li.style.textDecoration === 'none'){
          li.style.textDecoration = 'line-through';
        } else if(li.style.textDecoration = 'line-through'){
          li.style.textDecoration = 'none';
        };
      });
     });
    }
  
const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);