// ? Display the following array on the page
// todo-1: First, watch the video in the help folder.
// todo-2: In the next step, review the HTML and CSS files.
// todo-3: Iterate over the "data" array and create a card for each array index.
// todo-4: Append the created card to the element with the class "cards".
// todo-5: Each card should have a button; when clicked, the card title should be displayed on the element with the class "cardSelected".

const data = [
  {
    id: 1,
    title: "ravel Monkey Club #1",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 2,
    title: "ravel Monkey Club #2",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 3,
    title: "ravel Monkey Club #3",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 4,
    title: "ravel Monkey Club #4",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
];



async function dataArray(array){
  const cards__parent = document.querySelector('.cards');
  array.forEach(element => {
    // creat card
    const card = document.createElement('article');
    card.classList.add('cards__card');

    // cards img
    const img__parent = document.createElement('div');
    img__parent.classList.add('cards__card__img')
    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', element.src);
    

    // img icon
    const iconPrent = document.createElement('div');
    iconPrent.classList.add('cards__card__img__icon');
    const heartIcon = document.createElement('i');
    heartIcon.classList.add('ri-heart-3-line');
    const span_100 = document.createElement('span');
    span_100.textContent = '100';

    // body title
    const parent__title = document.createElement('div');
    const spanOfTitle = document.createElement('span');
    spanOfTitle.textContent = 'BSC';
    const title = document.createElement('h3');
    title.classList.add('titllle');
    parent__title.classList.add('cards__card__body__title');
    title.innerText = element.title;

    // footer button
    const parentOfFooter = document.createElement('footer');
    parentOfFooter.classList.add('cards__card__footer');
    const button = document.createElement('button');
    const span__ghofl = document.createElement('span');
    span__ghofl.innerText = 'Please Bid';
    const icon__ghofl = document.createElement('i');
    icon__ghofl.classList.add('ri-handbag-line');

    // footer img and h4
    const parent_img = document.createElement('div');
    parent_img.classList.add('cards__card__footer__account');
    const img_boy = document.createElement('img');
    img_boy.setAttribute('src', 'avt-12.jpg');
    const h4 = document.createElement('h4');
    h4.textContent = element.account;

    iconPrent.appendChild(heartIcon);
    iconPrent.appendChild(span_100);
    img__parent.appendChild(iconPrent);
    img__parent.appendChild(cardImg);
    card.appendChild(img__parent);
    parent__title.appendChild(title);
    parent__title.appendChild(spanOfTitle);
    card.appendChild(parent__title);
    parent_img.appendChild(img_boy);
    parent_img.appendChild(h4);
    parentOfFooter.appendChild(parent_img);
    button.appendChild(span__ghofl);
    button.appendChild(icon__ghofl);
    parentOfFooter.appendChild(button);
    card.appendChild(parentOfFooter);
    cards__parent.appendChild(card);
  });
}

await dataArray(data);

let btns = document.querySelectorAll('button');
let cardSelected = document.querySelector('.cardSelected');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.cards__card');
    let title = card.querySelector('.titllle').innerText;
    cardSelected.innerText = 'you selected card ' + title.substr(title.indexOf('#'));
  })
});
