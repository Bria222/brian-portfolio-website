import './style.scss';
import close from './assets/close-mobileModal.svg';
import live from './assets/icon-live.png';
import source from './assets/icon-source.png';
import imgPokemon from './assets/img/pokemon/mock_pokemon.png';
import imgPS from './assets/img/primeshows/mock_ps.png';
import events254 from './assets/img/awc2022/events254.png';
import imgSpace from './assets/img/space-travelers-hub/mock_space.png';
import imgBooks from './assets/img/bookstore/mock_bookstore.png';
import imgMath from './assets/img/math-magicians/mock_math.png';
import imgTodo from './assets/img/to-do-list/mock_tdl.png';
import imgLdb from './assets/img/leaderboard/mock_ldb.png';
import mockAwe from './assets/img/awesome-books/mock_books.png';
import cimeza from './assets/img/cimeza/cimeza.png';

const gridContainer = document.querySelector('.gridContainer');

// Project Data
const cardObj = [
  {
    h3: 'cimeza africa',
    img: cimeza,
    name: 'cimeza Africa',
    lang: ['React', 'Redux', 'JavaScript', 'Sass', 'API', 'Linters'],
    demo: 'https://cimeza-africa.com',
    source: 'https://github.com/mavericks-db/capstone03',
    description:
      'cimeza africa project is to build a mobile  and web application for a digital marketing agency using React and Redux.',
  },
  {
    h3: 'Pokemon Web App',
    img: imgPokemon,
    name: 'Pokemon Web App',
    lang: ['React', 'Redux', 'JavaScript', 'Sass', 'API', 'Linters'],
    demo: 'https://app-pokemon-webapp.netlify.app/',
    source: 'https://github.com/mavericks-db/capstone03',
    description:
      'Microverse React Capstone Project: This educational project is to build a mobile web application to check a list of metrics (numeric values) using React and Redux.',
  },
  {
    h3: 'Prime Shows HD',
    img: imgPS,
    name: 'Prime Shows HD',
    lang: ['Webpack', 'JavaScript', 'Jest', 'Sass', 'API', 'Linters'],
    demo: 'https://mavericks-db.github.io/capstone02/dist/',
    source: 'https://github.com/Bria222/movie-TVmaze-API',
    description:
      'Microverse Second Capstone Project: This educational project is to build our own web application based on an external API. We selected an API that provides data about a topic that we like and built the web app around it. The web app will have 2 or 3 user interfaces (depending on the size of our team).',
  },
  {
    h3: 'Events 254',
    img: events254,
    name: 'Events 254 Conference 2023',
    lang: [
      'JavaScript',
      'Linters',
      'Sass',
      'HTML',
      'VS Code',
      'GitHub Pages',
    ],
    demo: 'https://bria222.github.io/Capstone//',
    source: 'https://github.com/Bria222/Capstone.git',
    description:
      'Microverse First Capstone Project: This is an educational project to make a website for a web conference event with home page and about page.',
  },
  {
    h3: 'Space Travelers- Hub',
    img: imgSpace,
    name: 'Space Travelers- Hub',
    lang: ['React', 'Redux', 'Router', 'JavaScript', 'Jest', 'Sass'],
    demo: 'https://app-space-travelers-hub.netlify.app/',
    source: 'https://github.com/Bria222/space-travelers-hub.git',
    description:
      'Microverse React Group Project: This educational project is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
  },
  {
    h3: 'Bookstore CMS',
    img: imgBooks,
    name: 'Bookstore CMS',
    lang: ['React', 'Redux', 'Router', 'JavaScript', 'Jest', 'Sass'],
    demo: 'https://app-bookstore-cms.netlify.app/',
    source: 'https://github.com/Bria222/awesome-books-app',
    description:
      'Microverse Module 03 Project: This educational project is similar to the "Awesome Books" website. It is a MVP version of it that allows you to display a list of books, add a book and remove a selected book.',
  },
  {
    h3: 'Math Magicians',
    img: imgMath,
    name: 'Math Magicians',
    lang: ['React', 'Router', 'JavaScript', 'Jest', 'Sass', 'Linters'],
    demo: 'https://bree-math-magician.netlify.app/quote',
    source: 'https://github.com/Bria222/React-Math-magicians',
    description:
      'Microverse Module 03 Project: "Math Magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make a simple calculations and read a random math-related quote.',
  },
  {
    h3: 'To-Do List',
    img: imgTodo,
    name: 'To-Do List App',
    lang: ['Webpack', 'JavaScript', 'Linters', 'Sass', 'HTML', 'Jest'],
    demo: 'https://bria222.github.io/Sneak-peek-To-do-list/',
    source: 'https://github.com/Bria222/Sneak-peek-To-do-list',
    description:
      'This is an educational project to make a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
  },
  {
    h3: 'Leaderboard',
    img: imgLdb,
    name: 'Leaderboard App',
    lang: ['Webpack', 'JavaScript', 'Linters', 'API', 'Sass', 'Jest'],
    demo: 'https://mavericks-db.github.io/leaderboard/dist/index.html',
    source: 'https://github.com/Bria222/Leaderboard',
    description:
      'This is an educational project to create a website which displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API Service.',
  },
  {
    h3: 'Awesome Books',
    img: mockAwe,
    name: 'Awesome Books',
    lang: [
      'JavaScript',
      'Linters',
      'HTML',
      'Sass',
      'Jest',
      'GitHub Pages',
    ],
    demo: 'https://mavericks-db.github.io/awesome-books-ES6/',
    source: 'https://github.com/Bria222/object-oriented-book-application.git',
    description:
      'This is an educational project to make a simple website that displays a list of books and allows you to add and remove books from that list. The goal is to make it more organized by using modules and practice the ES6 syntax.',
  },
];

// Create Card Items Dynamically
const gridItem = [];
const descriptionContainer = [];
const h3 = [];
const ul = [];
const button1 = [];
const button2 = [];

for (let i = 0; i < cardObj.length; i += 1) {
  gridItem[i] = document.createElement('div');
  gridItem[i].classList.add('gridItem');
  gridItem[i].style.backgroundImage = `url(${cardObj[i].img})`;

  descriptionContainer[i] = document.createElement('div');
  descriptionContainer[i].classList.add('descriptionContainer');

  h3[i] = document.createElement('h3');
  const h3text = document.createTextNode(cardObj[i].h3);
  h3[i].append(h3text);

  ul[i] = document.createElement('ul');
  const obj = {};
  const listItems = ['li0', 'li1', 'li2', 'li3'];
  listItems.forEach((el, j) => {
    obj[el] = document.createElement('li');
    const txt = document.createTextNode(cardObj[i].lang[j]);
    obj[el].appendChild(txt);
    ul[i].append(obj[el]);
  });

  button1[i] = document.createElement('button');
  const button1text = document.createTextNode('See Project');
  button1[i].append(button1text);
  button1[i].setAttribute('type', 'button');
  button1[i].classList.add('seeProject');
  button1[i].setAttribute('aria-label', 'See Project Button');
  button1[i].setAttribute('data-index', i);

  button2[i] = document.createElement('button');
  const button2text = document.createTextNode('See Project');
  button2[i].append(button2text);
  button2[i].setAttribute('type', 'button');
  button2[i].classList.add('seeProjectDesktop');
  button2[i].setAttribute('aria-label', 'See Project Button');
  button2[i].setAttribute('data-index', i);

  descriptionContainer[i].append(h3[i], ul[i], button1[i], button2[i]);
  gridItem[i].append(descriptionContainer[i]);
  gridContainer.append(gridItem[i]);
}

const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const modalContainer = document.querySelector('.modalContainer');

function openModal() {
  modalContainer.style.display = 'block';
}

function closeModal() {
  modalContainer.style.display = 'none';
}

window.onclick = function global(event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
};

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modalContainer.addEventListener('click', closeModal);

// Mobile Modal
const seeProject = document.querySelectorAll('.seeProject');

// Create div mobileModal dynamically
const mobileModal = [];

for (let i = 0; i < gridItem.length; i += 1) {
  mobileModal[i] = document.createElement('div');
  mobileModal[i].classList.add('mobileModal');
  gridItem[i].append(mobileModal[i]);
}

function openMobileModal(e) {
  const i = e.target.dataset.index;
  mobileModal[i].style.display = 'block';
  const div1 = document.createElement('div');
  div1.classList.add('mobileMCContainer');

  const img1 = document.createElement('img');
  img1.classList.add('closeMobile');
  img1.setAttribute('src', close);
  function closeMobileModal() {
    mobileModal[i].style.display = 'none';
    div1.remove();
  }
  img1.addEventListener('click', closeMobileModal);

  const img2 = document.createElement('img');
  img2.classList.add('projectImgMobile');
  img2.setAttribute('src', cardObj[i].img);
  const h2 = document.createElement('h2');
  h2.classList.add('projectName');
  h2.innerHTML = cardObj[i].name;

  const ul = document.createElement('ul');
  const obj = {};
  const listItems = ['li0', 'li1', 'li2'];
  listItems.forEach((el, j) => {
    obj[el] = document.createElement('li');
    const txt = document.createTextNode(cardObj[i].lang[j]);
    obj[el].appendChild(txt);
    ul.append(obj[el]);
  });

  const p = document.createElement('p');
  p.classList.add('projectDescription');
  p.innerText = cardObj[i].description;

  const div2 = document.createElement('div');
  div2.classList.add('buttonContainerMobile');
  const a1 = document.createElement('a');
  a1.classList.add('liveBtn');
  const linka1 = document.createTextNode('See Live');
  a1.appendChild(linka1);
  a1.href = cardObj[i].live;
  const imga1 = document.createElement('img');
  imga1.setAttribute('src', live);
  a1.appendChild(imga1);

  const a2 = document.createElement('a');
  a2.classList.add('srcBtn');
  const linka2 = document.createTextNode('See Source');
  a2.appendChild(linka2);
  a2.href = cardObj[i].source;
  const imga2 = document.createElement('img');
  imga2.setAttribute('src', source);
  a2.appendChild(imga2);

  div1.append(img1, img2, h2, ul, p);
  div2.append(a1, a2);
  div1.appendChild(div2);
  mobileModal[i].appendChild(div1);
}

seeProject.forEach((element) => {
  element.addEventListener('click', openMobileModal);
});

// Desktop Modal
const seeProjectDesktop = document.querySelectorAll('.seeProjectDesktop');
const desktopModal = document.querySelector('.desktopModal');

function openDesktopModal(e) {
  const i = e.target.dataset.index;
  desktopModal.style.display = 'block';

  const div1 = document.createElement('div');
  div1.classList.add('desktopMCContainer');

  const img1 = document.createElement('img');
  img1.classList.add('closeDesktop');
  img1.setAttribute('src', close);

  function closeMobileModal() {
    desktopModal.style.display = 'none';
    div1.remove();
  }

  img1.addEventListener('click', closeMobileModal);

  const img2 = document.createElement('img');
  img2.classList.add('projectImgDesktop');
  img2.setAttribute('src', cardObj[i].img);

  const div3 = document.createElement('div');
  div3.classList.add('desktopModalHeadline');

  const h2 = document.createElement('h2');
  h2.classList.add('projectNameDesktop');
  h2.innerHTML = cardObj[i].name;

  const ul = document.createElement('ul');

  const obj = {};
  const listItems = ['li0', 'li1', 'li2', 'li3', 'li4', 'li5'];
  listItems.forEach((el, j) => {
    obj[el] = document.createElement('li');
    const txt = document.createTextNode(cardObj[i].lang[j]);
    obj[el].appendChild(txt);
    ul.append(obj[el]);
  });

  const p = document.createElement('p');
  p.classList.add('projectDescriptionDesktop');
  p.innerText = cardObj[i].description;

  const div2 = document.createElement('div');
  div2.classList.add('buttonContainerDesktop');

  const a1 = document.createElement('a');
  a1.classList.add('liveBtnDesktop');

  const linka1 = document.createTextNode('See Live');
  a1.appendChild(linka1);
  a1.href = cardObj[i].demo;

  const imga1 = document.createElement('img');
  imga1.setAttribute('src', live);
  a1.appendChild(imga1);

  const a2 = document.createElement('a');
  a2.classList.add('srcBtnDesktop');

  const linka2 = document.createTextNode('See Source');
  a2.appendChild(linka2);
  a2.href = cardObj[i].source;

  const imga2 = document.createElement('img');
  imga2.setAttribute('src', source);
  a2.appendChild(imga2);
  div1.append(img1, img2);
  div3.appendChild(h2);
  div1.append(div3, ul, p);
  div2.append(a1, a2);
  div3.appendChild(div2);
  desktopModal.appendChild(div1);
}

seeProjectDesktop.forEach((element) => {
  element.addEventListener('click', openDesktopModal);
});

// Form Validation - Mobile
const formMobile = document.querySelector('.formMobile');
const nameInputMobile = document.querySelector('.nameInputMobile');
const emailInputMobile = document.querySelector('.emailInputMobile');
const messageInputMobile = document.querySelector('.messageInputMobile');
const submitBtnMobile = document.querySelector('.submitBtnMobile');
let isFormValid = false;

// Local Storage - Mobile & Desktop
let formObj = {
  fullNameMobile: '',
  emailMobile: '',
  messageMobile: '',
  firstName: '',
  lastName: '',
  emailDesktop: '',
  messageDesktop: '',
};

function storeInlS() {
  localStorage.setItem('myData', JSON.stringify(formObj));
}

function validation() {
  const str = emailInputMobile.value.trim();
  const regEx = /[A-Z]/g;
  if (regEx.test(str)) {
    submitBtnMobile.setCustomValidity(
      'Sorry, this form has not been submitted. The content of the email field has to be in lower case. \n Please check your inputs and reload the page',
    );
    submitBtnMobile.reportValidity();
    isFormValid = false;
    storeInlS();
  } else {
    isFormValid = true;
  }
  return isFormValid;
}

formMobile.addEventListener('submit', (e) => {
  e.preventDefault();
  validation();
  if (isFormValid) {
    submitBtnMobile.setCustomValidity(
      'The form has been submitted. \n Thank you for contacting me.',
    );
    submitBtnMobile.reportValidity();
    formMobile.submit();
  }
});

// Form Validation - Desktop
const formDesktop = document.querySelector('.formDesktop');
const nameInputDesktop1 = document.querySelector('.nameInputDesktop1');
const nameInputDesktop2 = document.querySelector('.nameInputDesktop2');
const emailInputDesktop = document.querySelector('.emailInputDesktop');
const messageInputDesktop = document.querySelector('.messageInputDesktop');
const submitBtnDesktop = document.querySelector('.submitBtnDesktop');

function validationDesktop() {
  const str = emailInputDesktop.value.trim();
  const regEx = /[A-Z]/g;
  if (regEx.test(str)) {
    submitBtnDesktop.setCustomValidity(
      'Sorry, this form has not been submitted. The content of the email field has to be in lower case. \n Please check your inputs and reload the page.',
    );
    submitBtnDesktop.reportValidity();
    isFormValid = false;
    storeInlS();
  } else {
    isFormValid = true;
  }
  return isFormValid;
}

formDesktop.addEventListener('submit', (e) => {
  e.preventDefault();
  validationDesktop();
  if (isFormValid) {
    submitBtnDesktop.setCustomValidity(
      'The form has been submitted. \n Thank you for contacting me.',
    );
    submitBtnDesktop.reportValidity();
    formDesktop.submit();
  }
});

// Local Storage - Mobile & Desktop
const keys = Object.keys(formObj);
function storeItem(e) {
  const keyNum = keys.indexOf(e.target.name);
  formObj[keys[keyNum]] = e.target.value;
}

nameInputMobile.addEventListener('input', storeItem);
emailInputMobile.addEventListener('input', storeItem);
messageInputMobile.addEventListener('input', storeItem);
nameInputDesktop1.addEventListener('input', storeItem);
nameInputDesktop2.addEventListener('input', storeItem);
emailInputDesktop.addEventListener('input', storeItem);
messageInputDesktop.addEventListener('input', storeItem);

function placeItems() {
  nameInputMobile.value = formObj.fullNameMobile;
  emailInputMobile.value = formObj.emailMobile;
  messageInputMobile.value = formObj.messageMobile;
  nameInputDesktop1.value = formObj.firstName;
  nameInputDesktop2.value = formObj.lastName;
  emailInputDesktop.value = formObj.emailDesktop;
  messageInputDesktop.value = formObj.messageDesktop;
}

window.onload = function retrieve() {
  if (localStorage.getItem('myData')) {
    formObj = JSON.parse(localStorage.getItem('myData'));
    placeItems();
  } else {
    localStorage.clear();
  }
};
