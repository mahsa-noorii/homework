//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color


// const secondPara = document.querySelector('para2');
// const thirdPara = document.querySelector('para3');
// const fourthPara = document.querySelector('para4');

// Get the first paragraph by tagname
const firstPara = document.querySelector('p');
console.log(firstPara);

// Get each of the paragraph by #id
const eachPara = document.querySelectorAll('#para');
console.log(eachPara);

// Get all the p as nodeList by tagname
const eachPEleAsNodeList = document.querySelectorAll('p');
console.log(eachPEleAsNodeList);

// Loop through the nodeList
for(let i = 0; i < eachPEleAsNodeList.length; i++){
    eachPEleAsNodeList[i].innerText = 
    console.log(eachPEleAsNodeList[i].textContent);
}

// Set a text content to the fourth paragraph
const text = ['first', 'second', 'third', 'fourth'];
for(let i = 0; i < eachPEleAsNodeList.length; i++){
    console.log(eachPEleAsNodeList[i].innerText = text[i]);
}

// Set id and class attribute for all
const nameId = ['one', 'two', 'three', 'four'];
for(let i = 0; i < eachPEleAsNodeList.length; i++){
    eachPEleAsNodeList[i].setAttribute('id', nameId[i])
    console.log(eachPEleAsNodeList);
}

firstPara.className = 'first-class'
console.log(firstPara);

const class2 = document.querySelector('#two');
document.getElementById('two').setAttribute('className', 'secend-class')
console.log(class2);

const class3 = document.querySelector('#three');
const className = class3.classList;
className.toggle('third-class')
console.log(class3);

const class4 = document.querySelector('#four');
class4.classList.add('fourth-class');
console.log(class4);

// Change style of each paragraph

const pElemens = document.querySelectorAll('p');
const all = document.querySelector("div");
//======================= parent ======================
all.style.display = "flex";
all.style.flexDirection = "column";
all.style.alignItems = "center"

// ========================== children ================
for(const pEle of pElemens){
    pEle.style.display = "flex";
    pEle.style.justifyContent = "center";
    pEle.style.alignItems = "center";
    pEle.style.border = "1px solid rgb(180, 187, 180)";
    pEle.style.width = "100px";
    pEle.style.height = "30px";
    pEle.style.borderRadius = "5px";
    pEle.style.backgroundColor = "rgb(180, 187, 180)";
}

// =========================================================

for(let i =0; i<pElemens.length; i++){
    if(i % 2 == 0){
        pElemens[i].style.color = "green";
    } else{
        pElemens[i].style.color = "red";
    }
}