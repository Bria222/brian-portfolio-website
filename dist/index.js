/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/close-mobileModal.svg
const close_mobileModal_namespaceObject = __webpack_require__.p + "2b760ef6a7b3694848a4.svg";
;// CONCATENATED MODULE: ./src/assets/icon-live.png
const icon_live_namespaceObject = __webpack_require__.p + "f2a0741608e07a437198.png";
;// CONCATENATED MODULE: ./src/assets/icon-source.png
const icon_source_namespaceObject = __webpack_require__.p + "b41840c8f3fb646da1cf.png";
;// CONCATENATED MODULE: ./src/assets/img/pokemon/mock_pokemon.png
const mock_pokemon_namespaceObject = __webpack_require__.p + "da39cf9d6c447c64b96f.png";
;// CONCATENATED MODULE: ./src/assets/img/primeshows/mock_ps.png
const mock_ps_namespaceObject = __webpack_require__.p + "50473038b36844ef9139.png";
;// CONCATENATED MODULE: ./src/assets/img/awc2022/events254.png
const events254_namespaceObject = __webpack_require__.p + "227019f5426ce144f747.png";
;// CONCATENATED MODULE: ./src/assets/img/space-travelers-hub/mock_space.png
const mock_space_namespaceObject = __webpack_require__.p + "c82fc76c76393d128da2.png";
;// CONCATENATED MODULE: ./src/assets/img/bookstore/mock_bookstore.png
const mock_bookstore_namespaceObject = __webpack_require__.p + "288537a66c5862aaeaa9.png";
;// CONCATENATED MODULE: ./src/assets/img/math-magicians/mock_math.png
const mock_math_namespaceObject = __webpack_require__.p + "bbec42aa4cf884e24399.png";
;// CONCATENATED MODULE: ./src/assets/img/to-do-list/mock_tdl.png
const mock_tdl_namespaceObject = __webpack_require__.p + "0b06dd1e3090ac8346c0.png";
;// CONCATENATED MODULE: ./src/assets/img/leaderboard/mock_ldb.png
const mock_ldb_namespaceObject = __webpack_require__.p + "f1720c83a31031e2debb.png";
;// CONCATENATED MODULE: ./src/assets/img/awesome-books/mock_books.png
const mock_books_namespaceObject = __webpack_require__.p + "fc6a16d7f583738bee89.png";
;// CONCATENATED MODULE: ./src/assets/img/cimeza/cimeza.png
const cimeza_namespaceObject = __webpack_require__.p + "4241b5be178cab10422c.png";
;// CONCATENATED MODULE: ./src/index.js















const gridContainer = document.querySelector('.gridContainer');

// Project Data
const cardObj = [
  {
    h3: 'cimeza africa',
    img: cimeza_namespaceObject,
    name: 'cimeza Africa',
    lang: ['React', 'Redux', 'JavaScript', 'Sass', 'API', 'Linters'],
    demo: 'https://cimeza-africa.com',
    source: 'https://github.com/Bria222',
    description:
      'cimeza africa project is to build a mobile  and web application for a digital marketing agency using React and Redux.',
  },
  {
    h3: 'Pokemon Web App',
    img: mock_pokemon_namespaceObject,
    name: 'Pokemon Web App',
    lang: ['React', 'Redux', 'JavaScript', 'Sass', 'API', 'Linters'],
    demo: 'https://app-pokemon-webapp.netlify.app/',
    source: 'https://github.com/Bria222',
    description:
      'Microverse React Capstone Project: This educational project is to build a mobile web application to check a list of metrics (numeric values) using React and Redux.',
  },
  {
    h3: 'Prime Shows HD',
    img: mock_ps_namespaceObject,
    name: 'Prime Shows HD',
    lang: ['Webpack', 'JavaScript', 'Jest', 'Sass', 'API', 'Linters'],
    demo: 'https://mavericks-db.github.io/capstone02/dist/',
    source: 'https://github.com/Bria222/movie-TVmaze-API',
    description:
      'Microverse Second Capstone Project: This educational project is to build our own web application based on an external API. We selected an API that provides data about a topic that we like and built the web app around it. The web app will have 2 or 3 user interfaces (depending on the size of our team).',
  },
  {
    h3: 'Events 254',
    img: events254_namespaceObject,
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
    img: mock_space_namespaceObject,
    name: 'Space Travelers- Hub',
    lang: ['React', 'Redux', 'Router', 'JavaScript', 'Jest', 'Sass'],
    demo: 'https://app-space-travelers-hub.netlify.app/',
    source: 'https://github.com/Bria222/space-travelers-hub.git',
    description:
      'Microverse React Group Project: This educational project is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
  },
  {
    h3: 'Bookstore CMS',
    img: mock_bookstore_namespaceObject,
    name: 'Bookstore CMS',
    lang: ['React', 'Redux', 'Router', 'JavaScript', 'Jest', 'Sass'],
    demo: 'https://app-bookstore-cms.netlify.app/',
    source: 'https://github.com/Bria222/awesome-books-app',
    description:
      'Microverse Module 03 Project: This educational project is similar to the "Awesome Books" website. It is a MVP version of it that allows you to display a list of books, add a book and remove a selected book.',
  },
  {
    h3: 'Math Magicians',
    img: mock_math_namespaceObject,
    name: 'Math Magicians',
    lang: ['React', 'Router', 'JavaScript', 'Jest', 'Sass', 'Linters'],
    demo: 'https://bree-math-magician.netlify.app/quote',
    source: 'https://github.com/Bria222/React-Math-magicians',
    description:
      'Microverse Module 03 Project: "Math Magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make a simple calculations and read a random math-related quote.',
  },
  {
    h3: 'To-Do List',
    img: mock_tdl_namespaceObject,
    name: 'To-Do List App',
    lang: ['Webpack', 'JavaScript', 'Linters', 'Sass', 'HTML', 'Jest'],
    demo: 'https://bria222.github.io/Sneak-peek-To-do-list/',
    source: 'https://github.com/Bria222/Sneak-peek-To-do-list',
    description:
      'This is an educational project to make a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
  },
  {
    h3: 'Leaderboard',
    img: mock_ldb_namespaceObject,
    name: 'Leaderboard App',
    lang: ['Webpack', 'JavaScript', 'Linters', 'API', 'Sass', 'Jest'],
    demo: 'https://mavericks-db.github.io/leaderboard/dist/index.html',
    source: 'https://github.com/Bria222/Leaderboard',
    description:
      'This is an educational project to create a website which displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API Service.',
  },
  {
    h3: 'Awesome Books',
    img: mock_books_namespaceObject,
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
  img1.setAttribute('src', close_mobileModal_namespaceObject);
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
  imga1.setAttribute('src', icon_live_namespaceObject);
  a1.appendChild(imga1);

  const a2 = document.createElement('a');
  a2.classList.add('srcBtn');
  const linka2 = document.createTextNode('See Source');
  a2.appendChild(linka2);
  a2.href = cardObj[i].source;
  const imga2 = document.createElement('img');
  imga2.setAttribute('src', icon_source_namespaceObject);
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
  img1.setAttribute('src', close_mobileModal_namespaceObject);

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
  imga1.setAttribute('src', icon_live_namespaceObject);
  a1.appendChild(imga1);

  const a2 = document.createElement('a');
  a2.classList.add('srcBtnDesktop');

  const linka2 = document.createTextNode('See Source');
  a2.appendChild(linka2);
  a2.href = cardObj[i].source;

  const imga2 = document.createElement('img');
  imga2.setAttribute('src', icon_source_namespaceObject);
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmc0I7QUFDNkI7QUFDVDtBQUNJO0FBQ2lCO0FBQ1A7QUFDRztBQUNZO0FBQ047QUFDRDtBQUNMO0FBQ0E7QUFDSztBQUNaOztBQUVwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0JBQU07QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMsNEJBQVU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxTQUFTLHVCQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxTQUFTLHlCQUFTO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxTQUFTLDBCQUFRO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsU0FBUyw4QkFBUTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMseUJBQU87QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxTQUFTLHdCQUFPO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsU0FBUyx3QkFBTTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsU0FBUywwQkFBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQSw2Q0FBNkMsZUFBZTs7QUFFNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQixxQkFBcUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLGlDQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlCQUFJO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQkFBTTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLGlDQUFLOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHlCQUFJO0FBQ2hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDJCQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBjbG9zZSBmcm9tICcuL2Fzc2V0cy9jbG9zZS1tb2JpbGVNb2RhbC5zdmcnO1xuaW1wb3J0IGxpdmUgZnJvbSAnLi9hc3NldHMvaWNvbi1saXZlLnBuZyc7XG5pbXBvcnQgc291cmNlIGZyb20gJy4vYXNzZXRzL2ljb24tc291cmNlLnBuZyc7XG5pbXBvcnQgaW1nUG9rZW1vbiBmcm9tICcuL2Fzc2V0cy9pbWcvcG9rZW1vbi9tb2NrX3Bva2Vtb24ucG5nJztcbmltcG9ydCBpbWdQUyBmcm9tICcuL2Fzc2V0cy9pbWcvcHJpbWVzaG93cy9tb2NrX3BzLnBuZyc7XG5pbXBvcnQgZXZlbnRzMjU0IGZyb20gJy4vYXNzZXRzL2ltZy9hd2MyMDIyL2V2ZW50czI1NC5wbmcnO1xuaW1wb3J0IGltZ1NwYWNlIGZyb20gJy4vYXNzZXRzL2ltZy9zcGFjZS10cmF2ZWxlcnMtaHViL21vY2tfc3BhY2UucG5nJztcbmltcG9ydCBpbWdCb29rcyBmcm9tICcuL2Fzc2V0cy9pbWcvYm9va3N0b3JlL21vY2tfYm9va3N0b3JlLnBuZyc7XG5pbXBvcnQgaW1nTWF0aCBmcm9tICcuL2Fzc2V0cy9pbWcvbWF0aC1tYWdpY2lhbnMvbW9ja19tYXRoLnBuZyc7XG5pbXBvcnQgaW1nVG9kbyBmcm9tICcuL2Fzc2V0cy9pbWcvdG8tZG8tbGlzdC9tb2NrX3RkbC5wbmcnO1xuaW1wb3J0IGltZ0xkYiBmcm9tICcuL2Fzc2V0cy9pbWcvbGVhZGVyYm9hcmQvbW9ja19sZGIucG5nJztcbmltcG9ydCBtb2NrQXdlIGZyb20gJy4vYXNzZXRzL2ltZy9hd2Vzb21lLWJvb2tzL21vY2tfYm9va3MucG5nJztcbmltcG9ydCBjaW1lemEgZnJvbSAnLi9hc3NldHMvaW1nL2NpbWV6YS9jaW1lemEucG5nJztcblxuY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkQ29udGFpbmVyJyk7XG5cbi8vIFByb2plY3QgRGF0YVxuY29uc3QgY2FyZE9iaiA9IFtcbiAge1xuICAgIGgzOiAnY2ltZXphIGFmcmljYScsXG4gICAgaW1nOiBjaW1lemEsXG4gICAgbmFtZTogJ2NpbWV6YSBBZnJpY2EnLFxuICAgIGxhbmc6IFsnUmVhY3QnLCAnUmVkdXgnLCAnSmF2YVNjcmlwdCcsICdTYXNzJywgJ0FQSScsICdMaW50ZXJzJ10sXG4gICAgZGVtbzogJ2h0dHBzOi8vY2ltZXphLWFmcmljYS5jb20nLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9CcmlhMjIyJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdjaW1lemEgYWZyaWNhIHByb2plY3QgaXMgdG8gYnVpbGQgYSBtb2JpbGUgIGFuZCB3ZWIgYXBwbGljYXRpb24gZm9yIGEgZGlnaXRhbCBtYXJrZXRpbmcgYWdlbmN5IHVzaW5nIFJlYWN0IGFuZCBSZWR1eC4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdQb2tlbW9uIFdlYiBBcHAnLFxuICAgIGltZzogaW1nUG9rZW1vbixcbiAgICBuYW1lOiAnUG9rZW1vbiBXZWIgQXBwJyxcbiAgICBsYW5nOiBbJ1JlYWN0JywgJ1JlZHV4JywgJ0phdmFTY3JpcHQnLCAnU2FzcycsICdBUEknLCAnTGludGVycyddLFxuICAgIGRlbW86ICdodHRwczovL2FwcC1wb2tlbW9uLXdlYmFwcC5uZXRsaWZ5LmFwcC8nLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9CcmlhMjIyJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdNaWNyb3ZlcnNlIFJlYWN0IENhcHN0b25lIFByb2plY3Q6IFRoaXMgZWR1Y2F0aW9uYWwgcHJvamVjdCBpcyB0byBidWlsZCBhIG1vYmlsZSB3ZWIgYXBwbGljYXRpb24gdG8gY2hlY2sgYSBsaXN0IG9mIG1ldHJpY3MgKG51bWVyaWMgdmFsdWVzKSB1c2luZyBSZWFjdCBhbmQgUmVkdXguJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnUHJpbWUgU2hvd3MgSEQnLFxuICAgIGltZzogaW1nUFMsXG4gICAgbmFtZTogJ1ByaW1lIFNob3dzIEhEJyxcbiAgICBsYW5nOiBbJ1dlYnBhY2snLCAnSmF2YVNjcmlwdCcsICdKZXN0JywgJ1Nhc3MnLCAnQVBJJywgJ0xpbnRlcnMnXSxcbiAgICBkZW1vOiAnaHR0cHM6Ly9tYXZlcmlja3MtZGIuZ2l0aHViLmlvL2NhcHN0b25lMDIvZGlzdC8nLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9CcmlhMjIyL21vdmllLVRWbWF6ZS1BUEknLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ01pY3JvdmVyc2UgU2Vjb25kIENhcHN0b25lIFByb2plY3Q6IFRoaXMgZWR1Y2F0aW9uYWwgcHJvamVjdCBpcyB0byBidWlsZCBvdXIgb3duIHdlYiBhcHBsaWNhdGlvbiBiYXNlZCBvbiBhbiBleHRlcm5hbCBBUEkuIFdlIHNlbGVjdGVkIGFuIEFQSSB0aGF0IHByb3ZpZGVzIGRhdGEgYWJvdXQgYSB0b3BpYyB0aGF0IHdlIGxpa2UgYW5kIGJ1aWx0IHRoZSB3ZWIgYXBwIGFyb3VuZCBpdC4gVGhlIHdlYiBhcHAgd2lsbCBoYXZlIDIgb3IgMyB1c2VyIGludGVyZmFjZXMgKGRlcGVuZGluZyBvbiB0aGUgc2l6ZSBvZiBvdXIgdGVhbSkuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnRXZlbnRzIDI1NCcsXG4gICAgaW1nOiBldmVudHMyNTQsXG4gICAgbmFtZTogJ0V2ZW50cyAyNTQgQ29uZmVyZW5jZSAyMDIzJyxcbiAgICBsYW5nOiBbXG4gICAgICAnSmF2YVNjcmlwdCcsXG4gICAgICAnTGludGVycycsXG4gICAgICAnU2FzcycsXG4gICAgICAnSFRNTCcsXG4gICAgICAnVlMgQ29kZScsXG4gICAgICAnR2l0SHViIFBhZ2VzJyxcbiAgICBdLFxuICAgIGRlbW86ICdodHRwczovL2JyaWEyMjIuZ2l0aHViLmlvL0NhcHN0b25lLy8nLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9CcmlhMjIyL0NhcHN0b25lLmdpdCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTWljcm92ZXJzZSBGaXJzdCBDYXBzdG9uZSBQcm9qZWN0OiBUaGlzIGlzIGFuIGVkdWNhdGlvbmFsIHByb2plY3QgdG8gbWFrZSBhIHdlYnNpdGUgZm9yIGEgd2ViIGNvbmZlcmVuY2UgZXZlbnQgd2l0aCBob21lIHBhZ2UgYW5kIGFib3V0IHBhZ2UuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnU3BhY2UgVHJhdmVsZXJzLSBIdWInLFxuICAgIGltZzogaW1nU3BhY2UsXG4gICAgbmFtZTogJ1NwYWNlIFRyYXZlbGVycy0gSHViJyxcbiAgICBsYW5nOiBbJ1JlYWN0JywgJ1JlZHV4JywgJ1JvdXRlcicsICdKYXZhU2NyaXB0JywgJ0plc3QnLCAnU2FzcyddLFxuICAgIGRlbW86ICdodHRwczovL2FwcC1zcGFjZS10cmF2ZWxlcnMtaHViLm5ldGxpZnkuYXBwLycsXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL0JyaWEyMjIvc3BhY2UtdHJhdmVsZXJzLWh1Yi5naXQnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ01pY3JvdmVyc2UgUmVhY3QgR3JvdXAgUHJvamVjdDogVGhpcyBlZHVjYXRpb25hbCBwcm9qZWN0IGlzIHRvIGJ1aWxkIGEgd2ViIGFwcGxpY2F0aW9uIGZvciBhIGNvbXBhbnkgdGhhdCBwcm92aWRlcyBjb21tZXJjaWFsIGFuZCBzY2llbnRpZmljIHNwYWNlIHRyYXZlbCBzZXJ2aWNlcy4gVGhlIGFwcGxpY2F0aW9uIHdpbGwgYWxsb3cgdXNlcnMgdG8gYm9vayByb2NrZXRzIGFuZCBqb2luIHNlbGVjdGVkIHNwYWNlIG1pc3Npb25zLicsXG4gIH0sXG4gIHtcbiAgICBoMzogJ0Jvb2tzdG9yZSBDTVMnLFxuICAgIGltZzogaW1nQm9va3MsXG4gICAgbmFtZTogJ0Jvb2tzdG9yZSBDTVMnLFxuICAgIGxhbmc6IFsnUmVhY3QnLCAnUmVkdXgnLCAnUm91dGVyJywgJ0phdmFTY3JpcHQnLCAnSmVzdCcsICdTYXNzJ10sXG4gICAgZGVtbzogJ2h0dHBzOi8vYXBwLWJvb2tzdG9yZS1jbXMubmV0bGlmeS5hcHAvJyxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vQnJpYTIyMi9hd2Vzb21lLWJvb2tzLWFwcCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTWljcm92ZXJzZSBNb2R1bGUgMDMgUHJvamVjdDogVGhpcyBlZHVjYXRpb25hbCBwcm9qZWN0IGlzIHNpbWlsYXIgdG8gdGhlIFwiQXdlc29tZSBCb29rc1wiIHdlYnNpdGUuIEl0IGlzIGEgTVZQIHZlcnNpb24gb2YgaXQgdGhhdCBhbGxvd3MgeW91IHRvIGRpc3BsYXkgYSBsaXN0IG9mIGJvb2tzLCBhZGQgYSBib29rIGFuZCByZW1vdmUgYSBzZWxlY3RlZCBib29rLicsXG4gIH0sXG4gIHtcbiAgICBoMzogJ01hdGggTWFnaWNpYW5zJyxcbiAgICBpbWc6IGltZ01hdGgsXG4gICAgbmFtZTogJ01hdGggTWFnaWNpYW5zJyxcbiAgICBsYW5nOiBbJ1JlYWN0JywgJ1JvdXRlcicsICdKYXZhU2NyaXB0JywgJ0plc3QnLCAnU2FzcycsICdMaW50ZXJzJ10sXG4gICAgZGVtbzogJ2h0dHBzOi8vYnJlZS1tYXRoLW1hZ2ljaWFuLm5ldGxpZnkuYXBwL3F1b3RlJyxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vQnJpYTIyMi9SZWFjdC1NYXRoLW1hZ2ljaWFucycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTWljcm92ZXJzZSBNb2R1bGUgMDMgUHJvamVjdDogXCJNYXRoIE1hZ2ljaWFuc1wiIGlzIGEgd2Vic2l0ZSBmb3IgYWxsIGZhbnMgb2YgbWF0aGVtYXRpY3MuIEl0IGlzIGEgU2luZ2xlIFBhZ2UgQXBwIChTUEEpIHRoYXQgYWxsb3dzIHVzZXJzIHRvIG1ha2UgYSBzaW1wbGUgY2FsY3VsYXRpb25zIGFuZCByZWFkIGEgcmFuZG9tIG1hdGgtcmVsYXRlZCBxdW90ZS4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdUby1EbyBMaXN0JyxcbiAgICBpbWc6IGltZ1RvZG8sXG4gICAgbmFtZTogJ1RvLURvIExpc3QgQXBwJyxcbiAgICBsYW5nOiBbJ1dlYnBhY2snLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJywgJ1Nhc3MnLCAnSFRNTCcsICdKZXN0J10sXG4gICAgZGVtbzogJ2h0dHBzOi8vYnJpYTIyMi5naXRodWIuaW8vU25lYWstcGVlay1Uby1kby1saXN0LycsXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL0JyaWEyMjIvU25lYWstcGVlay1Uby1kby1saXN0JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUaGlzIGlzIGFuIGVkdWNhdGlvbmFsIHByb2plY3QgdG8gbWFrZSBhIHRvb2wgdGhhdCBoZWxwcyB0byBvcmdhbml6ZSB5b3VyIGRheS4gSXQgc2ltcGx5IGxpc3RzIHRoZSB0aGluZ3MgdGhhdCB5b3UgbmVlZCB0byBkbyBhbmQgYWxsb3dzIHlvdSB0byBtYXJrIHRoZW0gYXMgY29tcGxldGUuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnTGVhZGVyYm9hcmQnLFxuICAgIGltZzogaW1nTGRiLFxuICAgIG5hbWU6ICdMZWFkZXJib2FyZCBBcHAnLFxuICAgIGxhbmc6IFsnV2VicGFjaycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnLCAnQVBJJywgJ1Nhc3MnLCAnSmVzdCddLFxuICAgIGRlbW86ICdodHRwczovL21hdmVyaWNrcy1kYi5naXRodWIuaW8vbGVhZGVyYm9hcmQvZGlzdC9pbmRleC5odG1sJyxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vQnJpYTIyMi9MZWFkZXJib2FyZCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVGhpcyBpcyBhbiBlZHVjYXRpb25hbCBwcm9qZWN0IHRvIGNyZWF0ZSBhIHdlYnNpdGUgd2hpY2ggZGlzcGxheXMgc2NvcmVzIHN1Ym1pdHRlZCBieSBkaWZmZXJlbnQgcGxheWVycy4gSXQgYWxzbyBhbGxvd3MgeW91IHRvIHN1Ym1pdCB5b3VyIHNjb3JlLiBBbGwgZGF0YSBpcyBwcmVzZXJ2ZWQgdGhhbmtzIHRvIHRoZSBleHRlcm5hbCBMZWFkZXJib2FyZCBBUEkgU2VydmljZS4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdBd2Vzb21lIEJvb2tzJyxcbiAgICBpbWc6IG1vY2tBd2UsXG4gICAgbmFtZTogJ0F3ZXNvbWUgQm9va3MnLFxuICAgIGxhbmc6IFtcbiAgICAgICdKYXZhU2NyaXB0JyxcbiAgICAgICdMaW50ZXJzJyxcbiAgICAgICdIVE1MJyxcbiAgICAgICdTYXNzJyxcbiAgICAgICdKZXN0JyxcbiAgICAgICdHaXRIdWIgUGFnZXMnLFxuICAgIF0sXG4gICAgZGVtbzogJ2h0dHBzOi8vbWF2ZXJpY2tzLWRiLmdpdGh1Yi5pby9hd2Vzb21lLWJvb2tzLUVTNi8nLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9CcmlhMjIyL29iamVjdC1vcmllbnRlZC1ib29rLWFwcGxpY2F0aW9uLmdpdCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVGhpcyBpcyBhbiBlZHVjYXRpb25hbCBwcm9qZWN0IHRvIG1ha2UgYSBzaW1wbGUgd2Vic2l0ZSB0aGF0IGRpc3BsYXlzIGEgbGlzdCBvZiBib29rcyBhbmQgYWxsb3dzIHlvdSB0byBhZGQgYW5kIHJlbW92ZSBib29rcyBmcm9tIHRoYXQgbGlzdC4gVGhlIGdvYWwgaXMgdG8gbWFrZSBpdCBtb3JlIG9yZ2FuaXplZCBieSB1c2luZyBtb2R1bGVzIGFuZCBwcmFjdGljZSB0aGUgRVM2IHN5bnRheC4nLFxuICB9LFxuXTtcblxuLy8gQ3JlYXRlIENhcmQgSXRlbXMgRHluYW1pY2FsbHlcbmNvbnN0IGdyaWRJdGVtID0gW107XG5jb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IFtdO1xuY29uc3QgaDMgPSBbXTtcbmNvbnN0IHVsID0gW107XG5jb25zdCBidXR0b24xID0gW107XG5jb25zdCBidXR0b24yID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgY2FyZE9iai5sZW5ndGg7IGkgKz0gMSkge1xuICBncmlkSXRlbVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBncmlkSXRlbVtpXS5jbGFzc0xpc3QuYWRkKCdncmlkSXRlbScpO1xuICBncmlkSXRlbVtpXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y2FyZE9ialtpXS5pbWd9KWA7XG5cbiAgZGVzY3JpcHRpb25Db250YWluZXJbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXJbaV0uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25Db250YWluZXInKTtcblxuICBoM1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbnN0IGgzdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0uaDMpO1xuICBoM1tpXS5hcHBlbmQoaDN0ZXh0KTtcblxuICB1bFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IG9iaiA9IHt9O1xuICBjb25zdCBsaXN0SXRlbXMgPSBbJ2xpMCcsICdsaTEnLCAnbGkyJywgJ2xpMyddO1xuICBsaXN0SXRlbXMuZm9yRWFjaCgoZWwsIGopID0+IHtcbiAgICBvYmpbZWxdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdbal0pO1xuICAgIG9ialtlbF0uYXBwZW5kQ2hpbGQodHh0KTtcbiAgICB1bFtpXS5hcHBlbmQob2JqW2VsXSk7XG4gIH0pO1xuXG4gIGJ1dHRvbjFbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgYnV0dG9uMXRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIFByb2plY3QnKTtcbiAgYnV0dG9uMVtpXS5hcHBlbmQoYnV0dG9uMXRleHQpO1xuICBidXR0b24xW2ldLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgYnV0dG9uMVtpXS5jbGFzc0xpc3QuYWRkKCdzZWVQcm9qZWN0Jyk7XG4gIGJ1dHRvbjFbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ1NlZSBQcm9qZWN0IEJ1dHRvbicpO1xuICBidXR0b24xW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuXG4gIGJ1dHRvbjJbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgYnV0dG9uMnRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIFByb2plY3QnKTtcbiAgYnV0dG9uMltpXS5hcHBlbmQoYnV0dG9uMnRleHQpO1xuICBidXR0b24yW2ldLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgYnV0dG9uMltpXS5jbGFzc0xpc3QuYWRkKCdzZWVQcm9qZWN0RGVza3RvcCcpO1xuICBidXR0b24yW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdTZWUgUHJvamVjdCBCdXR0b24nKTtcbiAgYnV0dG9uMltpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpKTtcblxuICBkZXNjcmlwdGlvbkNvbnRhaW5lcltpXS5hcHBlbmQoaDNbaV0sIHVsW2ldLCBidXR0b24xW2ldLCBidXR0b24yW2ldKTtcbiAgZ3JpZEl0ZW1baV0uYXBwZW5kKGRlc2NyaXB0aW9uQ29udGFpbmVyW2ldKTtcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmQoZ3JpZEl0ZW1baV0pO1xufVxuXG5jb25zdCBvcGVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW5CdG4nKTtcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlQnRuJyk7XG5jb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbENvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIGdsb2JhbChldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbENvbnRhaW5lcikge1xuICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn07XG5cbm9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpO1xuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbm1vZGFsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5cbi8vIE1vYmlsZSBNb2RhbFxuY29uc3Qgc2VlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWVQcm9qZWN0Jyk7XG5cbi8vIENyZWF0ZSBkaXYgbW9iaWxlTW9kYWwgZHluYW1pY2FsbHlcbmNvbnN0IG1vYmlsZU1vZGFsID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZEl0ZW0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgbW9iaWxlTW9kYWxbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9iaWxlTW9kYWxbaV0uY2xhc3NMaXN0LmFkZCgnbW9iaWxlTW9kYWwnKTtcbiAgZ3JpZEl0ZW1baV0uYXBwZW5kKG1vYmlsZU1vZGFsW2ldKTtcbn1cblxuZnVuY3Rpb24gb3Blbk1vYmlsZU1vZGFsKGUpIHtcbiAgY29uc3QgaSA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIG1vYmlsZU1vZGFsW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjEuY2xhc3NMaXN0LmFkZCgnbW9iaWxlTUNDb250YWluZXInKTtcblxuICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZzEuY2xhc3NMaXN0LmFkZCgnY2xvc2VNb2JpbGUnKTtcbiAgaW1nMS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNsb3NlKTtcbiAgZnVuY3Rpb24gY2xvc2VNb2JpbGVNb2RhbCgpIHtcbiAgICBtb2JpbGVNb2RhbFtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRpdjEucmVtb3ZlKCk7XG4gIH1cbiAgaW1nMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9iaWxlTW9kYWwpO1xuXG4gIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SW1nTW9iaWxlJyk7XG4gIGltZzIuc2V0QXR0cmlidXRlKCdzcmMnLCBjYXJkT2JqW2ldLmltZyk7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWUnKTtcbiAgaDIuaW5uZXJIVE1MID0gY2FyZE9ialtpXS5uYW1lO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3Qgb2JqID0ge307XG4gIGNvbnN0IGxpc3RJdGVtcyA9IFsnbGkwJywgJ2xpMScsICdsaTInXTtcbiAgbGlzdEl0ZW1zLmZvckVhY2goKGVsLCBqKSA9PiB7XG4gICAgb2JqW2VsXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgdHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nW2pdKTtcbiAgICBvYmpbZWxdLmFwcGVuZENoaWxkKHR4dCk7XG4gICAgdWwuYXBwZW5kKG9ialtlbF0pO1xuICB9KTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3REZXNjcmlwdGlvbicpO1xuICBwLmlubmVyVGV4dCA9IGNhcmRPYmpbaV0uZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lck1vYmlsZScpO1xuICBjb25zdCBhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTEuY2xhc3NMaXN0LmFkZCgnbGl2ZUJ0bicpO1xuICBjb25zdCBsaW5rYTEgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIExpdmUnKTtcbiAgYTEuYXBwZW5kQ2hpbGQobGlua2ExKTtcbiAgYTEuaHJlZiA9IGNhcmRPYmpbaV0ubGl2ZTtcbiAgY29uc3QgaW1nYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nYTEuc2V0QXR0cmlidXRlKCdzcmMnLCBsaXZlKTtcbiAgYTEuYXBwZW5kQ2hpbGQoaW1nYTEpO1xuXG4gIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMi5jbGFzc0xpc3QuYWRkKCdzcmNCdG4nKTtcbiAgY29uc3QgbGlua2EyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBTb3VyY2UnKTtcbiAgYTIuYXBwZW5kQ2hpbGQobGlua2EyKTtcbiAgYTIuaHJlZiA9IGNhcmRPYmpbaV0uc291cmNlO1xuICBjb25zdCBpbWdhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdhMi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZSk7XG4gIGEyLmFwcGVuZENoaWxkKGltZ2EyKTtcblxuICBkaXYxLmFwcGVuZChpbWcxLCBpbWcyLCBoMiwgdWwsIHApO1xuICBkaXYyLmFwcGVuZChhMSwgYTIpO1xuICBkaXYxLmFwcGVuZENoaWxkKGRpdjIpO1xuICBtb2JpbGVNb2RhbFtpXS5hcHBlbmRDaGlsZChkaXYxKTtcbn1cblxuc2VlUHJvamVjdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9iaWxlTW9kYWwpO1xufSk7XG5cbi8vIERlc2t0b3AgTW9kYWxcbmNvbnN0IHNlZVByb2plY3REZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlZVByb2plY3REZXNrdG9wJyk7XG5jb25zdCBkZXNrdG9wTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVza3RvcE1vZGFsJyk7XG5cbmZ1bmN0aW9uIG9wZW5EZXNrdG9wTW9kYWwoZSkge1xuICBjb25zdCBpID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgZGVza3RvcE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2MS5jbGFzc0xpc3QuYWRkKCdkZXNrdG9wTUNDb250YWluZXInKTtcblxuICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZzEuY2xhc3NMaXN0LmFkZCgnY2xvc2VEZXNrdG9wJyk7XG4gIGltZzEuc2V0QXR0cmlidXRlKCdzcmMnLCBjbG9zZSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2JpbGVNb2RhbCgpIHtcbiAgICBkZXNrdG9wTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkaXYxLnJlbW92ZSgpO1xuICB9XG5cbiAgaW1nMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9iaWxlTW9kYWwpO1xuXG4gIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SW1nRGVza3RvcCcpO1xuICBpbWcyLnNldEF0dHJpYnV0ZSgnc3JjJywgY2FyZE9ialtpXS5pbWcpO1xuXG4gIGNvbnN0IGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2My5jbGFzc0xpc3QuYWRkKCdkZXNrdG9wTW9kYWxIZWFkbGluZScpO1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWVEZXNrdG9wJyk7XG4gIGgyLmlubmVySFRNTCA9IGNhcmRPYmpbaV0ubmFtZTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgY29uc3Qgb2JqID0ge307XG4gIGNvbnN0IGxpc3RJdGVtcyA9IFsnbGkwJywgJ2xpMScsICdsaTInLCAnbGkzJywgJ2xpNCcsICdsaTUnXTtcbiAgbGlzdEl0ZW1zLmZvckVhY2goKGVsLCBqKSA9PiB7XG4gICAgb2JqW2VsXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgdHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nW2pdKTtcbiAgICBvYmpbZWxdLmFwcGVuZENoaWxkKHR4dCk7XG4gICAgdWwuYXBwZW5kKG9ialtlbF0pO1xuICB9KTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3REZXNjcmlwdGlvbkRlc2t0b3AnKTtcbiAgcC5pbm5lclRleHQgPSBjYXJkT2JqW2ldLmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXJEZXNrdG9wJyk7XG5cbiAgY29uc3QgYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGExLmNsYXNzTGlzdC5hZGQoJ2xpdmVCdG5EZXNrdG9wJyk7XG5cbiAgY29uc3QgbGlua2ExID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBMaXZlJyk7XG4gIGExLmFwcGVuZENoaWxkKGxpbmthMSk7XG4gIGExLmhyZWYgPSBjYXJkT2JqW2ldLmRlbW87XG5cbiAgY29uc3QgaW1nYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nYTEuc2V0QXR0cmlidXRlKCdzcmMnLCBsaXZlKTtcbiAgYTEuYXBwZW5kQ2hpbGQoaW1nYTEpO1xuXG4gIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMi5jbGFzc0xpc3QuYWRkKCdzcmNCdG5EZXNrdG9wJyk7XG5cbiAgY29uc3QgbGlua2EyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBTb3VyY2UnKTtcbiAgYTIuYXBwZW5kQ2hpbGQobGlua2EyKTtcbiAgYTIuaHJlZiA9IGNhcmRPYmpbaV0uc291cmNlO1xuXG4gIGNvbnN0IGltZ2EyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ2EyLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlKTtcbiAgYTIuYXBwZW5kQ2hpbGQoaW1nYTIpO1xuICBkaXYxLmFwcGVuZChpbWcxLCBpbWcyKTtcbiAgZGl2My5hcHBlbmRDaGlsZChoMik7XG4gIGRpdjEuYXBwZW5kKGRpdjMsIHVsLCBwKTtcbiAgZGl2Mi5hcHBlbmQoYTEsIGEyKTtcbiAgZGl2My5hcHBlbmRDaGlsZChkaXYyKTtcbiAgZGVza3RvcE1vZGFsLmFwcGVuZENoaWxkKGRpdjEpO1xufVxuXG5zZWVQcm9qZWN0RGVza3RvcC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRGVza3RvcE1vZGFsKTtcbn0pO1xuXG4vLyBGb3JtIFZhbGlkYXRpb24gLSBNb2JpbGVcbmNvbnN0IGZvcm1Nb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybU1vYmlsZScpO1xuY29uc3QgbmFtZUlucHV0TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWVJbnB1dE1vYmlsZScpO1xuY29uc3QgZW1haWxJbnB1dE1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbElucHV0TW9iaWxlJyk7XG5jb25zdCBtZXNzYWdlSW5wdXRNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZUlucHV0TW9iaWxlJyk7XG5jb25zdCBzdWJtaXRCdG5Nb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnRuTW9iaWxlJyk7XG5sZXQgaXNGb3JtVmFsaWQgPSBmYWxzZTtcblxuLy8gTG9jYWwgU3RvcmFnZSAtIE1vYmlsZSAmIERlc2t0b3BcbmxldCBmb3JtT2JqID0ge1xuICBmdWxsTmFtZU1vYmlsZTogJycsXG4gIGVtYWlsTW9iaWxlOiAnJyxcbiAgbWVzc2FnZU1vYmlsZTogJycsXG4gIGZpcnN0TmFtZTogJycsXG4gIGxhc3ROYW1lOiAnJyxcbiAgZW1haWxEZXNrdG9wOiAnJyxcbiAgbWVzc2FnZURlc2t0b3A6ICcnLFxufTtcblxuZnVuY3Rpb24gc3RvcmVJbmxTKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlEYXRhJywgSlNPTi5zdHJpbmdpZnkoZm9ybU9iaikpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0aW9uKCkge1xuICBjb25zdCBzdHIgPSBlbWFpbElucHV0TW9iaWxlLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgcmVnRXggPSAvW0EtWl0vZztcbiAgaWYgKHJlZ0V4LnRlc3Qoc3RyKSkge1xuICAgIHN1Ym1pdEJ0bk1vYmlsZS5zZXRDdXN0b21WYWxpZGl0eShcbiAgICAgICdTb3JyeSwgdGhpcyBmb3JtIGhhcyBub3QgYmVlbiBzdWJtaXR0ZWQuIFRoZSBjb250ZW50IG9mIHRoZSBlbWFpbCBmaWVsZCBoYXMgdG8gYmUgaW4gbG93ZXIgY2FzZS4gXFxuIFBsZWFzZSBjaGVjayB5b3VyIGlucHV0cyBhbmQgcmVsb2FkIHRoZSBwYWdlJyxcbiAgICApO1xuICAgIHN1Ym1pdEJ0bk1vYmlsZS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XG4gICAgc3RvcmVJbmxTKCk7XG4gIH0gZWxzZSB7XG4gICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBpc0Zvcm1WYWxpZDtcbn1cblxuZm9ybU1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHZhbGlkYXRpb24oKTtcbiAgaWYgKGlzRm9ybVZhbGlkKSB7XG4gICAgc3VibWl0QnRuTW9iaWxlLnNldEN1c3RvbVZhbGlkaXR5KFxuICAgICAgJ1RoZSBmb3JtIGhhcyBiZWVuIHN1Ym1pdHRlZC4gXFxuIFRoYW5rIHlvdSBmb3IgY29udGFjdGluZyBtZS4nLFxuICAgICk7XG4gICAgc3VibWl0QnRuTW9iaWxlLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgZm9ybU1vYmlsZS5zdWJtaXQoKTtcbiAgfVxufSk7XG5cbi8vIEZvcm0gVmFsaWRhdGlvbiAtIERlc2t0b3BcbmNvbnN0IGZvcm1EZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1EZXNrdG9wJyk7XG5jb25zdCBuYW1lSW5wdXREZXNrdG9wMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lSW5wdXREZXNrdG9wMScpO1xuY29uc3QgbmFtZUlucHV0RGVza3RvcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZUlucHV0RGVza3RvcDInKTtcbmNvbnN0IGVtYWlsSW5wdXREZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsSW5wdXREZXNrdG9wJyk7XG5jb25zdCBtZXNzYWdlSW5wdXREZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2VJbnB1dERlc2t0b3AnKTtcbmNvbnN0IHN1Ym1pdEJ0bkRlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnRuRGVza3RvcCcpO1xuXG5mdW5jdGlvbiB2YWxpZGF0aW9uRGVza3RvcCgpIHtcbiAgY29uc3Qgc3RyID0gZW1haWxJbnB1dERlc2t0b3AudmFsdWUudHJpbSgpO1xuICBjb25zdCByZWdFeCA9IC9bQS1aXS9nO1xuICBpZiAocmVnRXgudGVzdChzdHIpKSB7XG4gICAgc3VibWl0QnRuRGVza3RvcC5zZXRDdXN0b21WYWxpZGl0eShcbiAgICAgICdTb3JyeSwgdGhpcyBmb3JtIGhhcyBub3QgYmVlbiBzdWJtaXR0ZWQuIFRoZSBjb250ZW50IG9mIHRoZSBlbWFpbCBmaWVsZCBoYXMgdG8gYmUgaW4gbG93ZXIgY2FzZS4gXFxuIFBsZWFzZSBjaGVjayB5b3VyIGlucHV0cyBhbmQgcmVsb2FkIHRoZSBwYWdlLicsXG4gICAgKTtcbiAgICBzdWJtaXRCdG5EZXNrdG9wLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcbiAgICBzdG9yZUlubFMoKTtcbiAgfSBlbHNlIHtcbiAgICBpc0Zvcm1WYWxpZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGlzRm9ybVZhbGlkO1xufVxuXG5mb3JtRGVza3RvcC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHZhbGlkYXRpb25EZXNrdG9wKCk7XG4gIGlmIChpc0Zvcm1WYWxpZCkge1xuICAgIHN1Ym1pdEJ0bkRlc2t0b3Auc2V0Q3VzdG9tVmFsaWRpdHkoXG4gICAgICAnVGhlIGZvcm0gaGFzIGJlZW4gc3VibWl0dGVkLiBcXG4gVGhhbmsgeW91IGZvciBjb250YWN0aW5nIG1lLicsXG4gICAgKTtcbiAgICBzdWJtaXRCdG5EZXNrdG9wLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgZm9ybURlc2t0b3Auc3VibWl0KCk7XG4gIH1cbn0pO1xuXG4vLyBMb2NhbCBTdG9yYWdlIC0gTW9iaWxlICYgRGVza3RvcFxuY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZvcm1PYmopO1xuZnVuY3Rpb24gc3RvcmVJdGVtKGUpIHtcbiAgY29uc3Qga2V5TnVtID0ga2V5cy5pbmRleE9mKGUudGFyZ2V0Lm5hbWUpO1xuICBmb3JtT2JqW2tleXNba2V5TnVtXV0gPSBlLnRhcmdldC52YWx1ZTtcbn1cblxubmFtZUlucHV0TW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbmVtYWlsSW5wdXRNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xubWVzc2FnZUlucHV0TW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbm5hbWVJbnB1dERlc2t0b3AxLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbm5hbWVJbnB1dERlc2t0b3AyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbmVtYWlsSW5wdXREZXNrdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbm1lc3NhZ2VJbnB1dERlc2t0b3AuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xuXG5mdW5jdGlvbiBwbGFjZUl0ZW1zKCkge1xuICBuYW1lSW5wdXRNb2JpbGUudmFsdWUgPSBmb3JtT2JqLmZ1bGxOYW1lTW9iaWxlO1xuICBlbWFpbElucHV0TW9iaWxlLnZhbHVlID0gZm9ybU9iai5lbWFpbE1vYmlsZTtcbiAgbWVzc2FnZUlucHV0TW9iaWxlLnZhbHVlID0gZm9ybU9iai5tZXNzYWdlTW9iaWxlO1xuICBuYW1lSW5wdXREZXNrdG9wMS52YWx1ZSA9IGZvcm1PYmouZmlyc3ROYW1lO1xuICBuYW1lSW5wdXREZXNrdG9wMi52YWx1ZSA9IGZvcm1PYmoubGFzdE5hbWU7XG4gIGVtYWlsSW5wdXREZXNrdG9wLnZhbHVlID0gZm9ybU9iai5lbWFpbERlc2t0b3A7XG4gIG1lc3NhZ2VJbnB1dERlc2t0b3AudmFsdWUgPSBmb3JtT2JqLm1lc3NhZ2VEZXNrdG9wO1xufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gcmV0cmlldmUoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlEYXRhJykpIHtcbiAgICBmb3JtT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlEYXRhJykpO1xuICAgIHBsYWNlSXRlbXMoKTtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==