// ?Question-3:follow these steps:
// todo-1:select "ul" element with "navbar" class.
// todo-2:add the items of the navbarItem array to the "ul" element by appending them as <li> elements.
// todo-3:Add the class "item" to each <li> element.
// todo-4:Edit the <li> tags according to the image.(You can check the help folder or use the following style for each <li> element)
/**
  {
    margin: 0 1rem;
    cursor: pointer;
  }
*/
// !Answer:
const navbarItem = ["Home", "Products", "Blog", "Contact us"];

//=============================== todo-1 ==========================
const navbarUl = document.querySelector('.navbar');

//=============================== todo-2 ==========================

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

const lis = [li1, li2, li3];
for(let i =0; i<lis.length; i++){
  lis[i].innerText = navbarItem[i];
  // ============= todo-3 😆 =========
  lis[i].classList.add('item');
  lis[i].style.margin = '0 1rem';
  lis[i].style.cursor = 'pointer';
}


for(const li of [li1, li2, li3]) {
  navbarUl.insertAdjacentElement("afterbegin", li);
}

// ============================ todo-3 ==============================
