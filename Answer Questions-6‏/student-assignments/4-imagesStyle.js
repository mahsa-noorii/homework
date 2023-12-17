//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops


const images = document.querySelectorAll('img');

for(let i = 0; i<images.length; i++){
    if(i % 2 === 0){
        images[i].style.border = "1px solid blue";
        images[i].style.width = "160px";
        images[i].style.borderRadius = "25px";
    } else{
        images[i].style.border = "2px solid pink";
        images[i].style.width = "250px";
        images[i].style.borderRadius = "25px";
        images[i].style.backgroundColor = "blue"
    }
}
