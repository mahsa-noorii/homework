// ? why event bubbling is bad and how can we prevent it?

// ! Answers ======================================

 // When we use the click event, for example, when we click on an element, 
 // the parent and ancestors of that element are also clicked (if the click event is triggered on them too),
 // so to prevent this from happening, we use the stopPropagation method.

// button.addEventListener('click', (event) => {
   // event.stopPropagation()
// })
