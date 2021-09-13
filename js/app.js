const galleryItems = [{
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gal = document.querySelector('.js-gallery');
const lightBox = document.querySelector('.js-lightbox');
const lightBoxImage = document.querySelector('.lightbox__image');
const button = document.querySelector('.lightbox__button');

const fragment = document.createDocumentFragment();

galleryItems.forEach(element => {
  const newLi = document.createElement('li');
  newLi.classList.add("gallery__item");
  newLi.insertAdjacentHTML(
    'afterbegin',
    `<a class="gallery__link">
    <img class="gallery__image" src=${element.preview} data-source=${element.original} alt=${element.description}></img>
    </a>`);
  fragment.appendChild(newLi);
});
gal.appendChild(fragment);

gal.addEventListener('click', (a)=>{
  const condition = a.target.nodeName === 'IMG';
  if (condition) {
    lightBox.classList.add('is-open');
    const image = a.target.dataset.source;
    lightBoxImage.setAttribute('src', image);
  };
  });

button.addEventListener('click', ()=>{
  lightBox.classList.remove('is-open');
  lightBoxImage.removeAttribute('src', e.target.dataset.source);
});

lightBox.addEventListener('click', (e)=>{
if (e.target !== lightBoxImage) {
  lightBox.classList.remove('is-open');
  lightBoxImage.removeAttribute('src', e.target.dataset.source);
}});

window.addEventListener('keydown', (e)=>{
if (e.code === 'Escape' || e.code === 'ArrowUp' || e.code === 'ArrowDown') {
lightBox.classList.remove('is-open');
lightBoxImage.removeAttribute('src', e.target.dataset.source);
}});
