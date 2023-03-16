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
    source: 'https://github.com/mavericks-db/capstone03',
    description:
      'cimeza africa project is to build a mobile  and web application for a digital marketing agency using React and Redux.',
  },
  {
    h3: 'Pokemon Web App',
    img: mock_pokemon_namespaceObject,
    name: 'Pokemon Web App',
    lang: ['React', 'Redux', 'JavaScript', 'Sass', 'API', 'Linters'],
    demo: 'https://app-pokemon-webapp.netlify.app/',
    source: 'https://github.com/mavericks-db/capstone03',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLGlDQUFLOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHlCQUFJO0FBQ2hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDJCQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBjbG9zZSBmcm9tICcuL2Fzc2V0cy9jbG9zZS1tb2JpbGVNb2RhbC5zdmcnO1xuaW1wb3J0IGxpdmUgZnJvbSAnLi9hc3NldHMvaWNvbi1saXZlLnBuZyc7XG5pbXBvcnQgc291cmNlIGZyb20gJy4vYXNzZXRzL2ljb24tc291cmNlLnBuZyc7XG5pbXBvcnQgaW1nUG9rZW1vbiBmcm9tICcuL2Fzc2V0cy9pbWcvcG9rZW1vbi9tb2NrX3Bva2Vtb24ucG5nJztcbmltcG9ydCBpbWdQUyBmcm9tICcuL2Fzc2V0cy9pbWcvcHJpbWVzaG93cy9tb2NrX3BzLnBuZyc7XG5pbXBvcnQgZXZlbnRzMjU0IGZyb20gJy4vYXNzZXRzL2ltZy9hd2MyMDIyL2V2ZW50czI1NC5wbmcnO1xuaW1wb3J0IGltZ1NwYWNlIGZyb20gJy4vYXNzZXRzL2ltZy9zcGFjZS10cmF2ZWxlcnMtaHViL21vY2tfc3BhY2UucG5nJztcbmltcG9ydCBpbWdCb29rcyBmcm9tICcuL2Fzc2V0cy9pbWcvYm9va3N0b3JlL21vY2tfYm9va3N0b3JlLnBuZyc7XG5pbXBvcnQgaW1nTWF0aCBmcm9tICcuL2Fzc2V0cy9pbWcvbWF0aC1tYWdpY2lhbnMvbW9ja19tYXRoLnBuZyc7XG5pbXBvcnQgaW1nVG9kbyBmcm9tICcuL2Fzc2V0cy9pbWcvdG8tZG8tbGlzdC9tb2NrX3RkbC5wbmcnO1xuaW1wb3J0IGltZ0xkYiBmcm9tICcuL2Fzc2V0cy9pbWcvbGVhZGVyYm9hcmQvbW9ja19sZGIucG5nJztcbmltcG9ydCBtb2NrQXdlIGZyb20gJy4vYXNzZXRzL2ltZy9hd2Vzb21lLWJvb2tzL21vY2tfYm9va3MucG5nJztcbmltcG9ydCBjaW1lemEgZnJvbSAnLi9hc3NldHMvaW1nL2NpbWV6YS9jaW1lemEucG5nJztcblxuY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkQ29udGFpbmVyJyk7XG5cbi8vIFByb2plY3QgRGF0YVxuY29uc3QgY2FyZE9iaiA9IFtcbiAge1xuICAgIGgzOiAnY2ltZXphIGFmcmljYScsXG4gICAgaW1nOiBjaW1lemEsXG4gICAgbmFtZTogJ2NpbWV6YSBBZnJpY2EnLFxuICAgIGxhbmc6IFsnUmVhY3QnLCAnUmVkdXgnLCAnSmF2YVNjcmlwdCcsICdTYXNzJywgJ0FQSScsICdMaW50ZXJzJ10sXG4gICAgZGVtbzogJ2h0dHBzOi8vY2ltZXphLWFmcmljYS5jb20nLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvY2Fwc3RvbmUwMycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnY2ltZXphIGFmcmljYSBwcm9qZWN0IGlzIHRvIGJ1aWxkIGEgbW9iaWxlICBhbmQgd2ViIGFwcGxpY2F0aW9uIGZvciBhIGRpZ2l0YWwgbWFya2V0aW5nIGFnZW5jeSB1c2luZyBSZWFjdCBhbmQgUmVkdXguJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnUG9rZW1vbiBXZWIgQXBwJyxcbiAgICBpbWc6IGltZ1Bva2Vtb24sXG4gICAgbmFtZTogJ1Bva2Vtb24gV2ViIEFwcCcsXG4gICAgbGFuZzogWydSZWFjdCcsICdSZWR1eCcsICdKYXZhU2NyaXB0JywgJ1Nhc3MnLCAnQVBJJywgJ0xpbnRlcnMnXSxcbiAgICBkZW1vOiAnaHR0cHM6Ly9hcHAtcG9rZW1vbi13ZWJhcHAubmV0bGlmeS5hcHAvJyxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL2NhcHN0b25lMDMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ01pY3JvdmVyc2UgUmVhY3QgQ2Fwc3RvbmUgUHJvamVjdDogVGhpcyBlZHVjYXRpb25hbCBwcm9qZWN0IGlzIHRvIGJ1aWxkIGEgbW9iaWxlIHdlYiBhcHBsaWNhdGlvbiB0byBjaGVjayBhIGxpc3Qgb2YgbWV0cmljcyAobnVtZXJpYyB2YWx1ZXMpIHVzaW5nIFJlYWN0IGFuZCBSZWR1eC4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdQcmltZSBTaG93cyBIRCcsXG4gICAgaW1nOiBpbWdQUyxcbiAgICBuYW1lOiAnUHJpbWUgU2hvd3MgSEQnLFxuICAgIGxhbmc6IFsnV2VicGFjaycsICdKYXZhU2NyaXB0JywgJ0plc3QnLCAnU2FzcycsICdBUEknLCAnTGludGVycyddLFxuICAgIGRlbW86ICdodHRwczovL21hdmVyaWNrcy1kYi5naXRodWIuaW8vY2Fwc3RvbmUwMi9kaXN0LycsXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL0JyaWEyMjIvbW92aWUtVFZtYXplLUFQSScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTWljcm92ZXJzZSBTZWNvbmQgQ2Fwc3RvbmUgUHJvamVjdDogVGhpcyBlZHVjYXRpb25hbCBwcm9qZWN0IGlzIHRvIGJ1aWxkIG91ciBvd24gd2ViIGFwcGxpY2F0aW9uIGJhc2VkIG9uIGFuIGV4dGVybmFsIEFQSS4gV2Ugc2VsZWN0ZWQgYW4gQVBJIHRoYXQgcHJvdmlkZXMgZGF0YSBhYm91dCBhIHRvcGljIHRoYXQgd2UgbGlrZSBhbmQgYnVpbHQgdGhlIHdlYiBhcHAgYXJvdW5kIGl0LiBUaGUgd2ViIGFwcCB3aWxsIGhhdmUgMiBvciAzIHVzZXIgaW50ZXJmYWNlcyAoZGVwZW5kaW5nIG9uIHRoZSBzaXplIG9mIG91ciB0ZWFtKS4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdFdmVudHMgMjU0JyxcbiAgICBpbWc6IGV2ZW50czI1NCxcbiAgICBuYW1lOiAnRXZlbnRzIDI1NCBDb25mZXJlbmNlIDIwMjMnLFxuICAgIGxhbmc6IFtcbiAgICAgICdKYXZhU2NyaXB0JyxcbiAgICAgICdMaW50ZXJzJyxcbiAgICAgICdTYXNzJyxcbiAgICAgICdIVE1MJyxcbiAgICAgICdWUyBDb2RlJyxcbiAgICAgICdHaXRIdWIgUGFnZXMnLFxuICAgIF0sXG4gICAgZGVtbzogJ2h0dHBzOi8vYnJpYTIyMi5naXRodWIuaW8vQ2Fwc3RvbmUvLycsXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL0JyaWEyMjIvQ2Fwc3RvbmUuZ2l0JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdNaWNyb3ZlcnNlIEZpcnN0IENhcHN0b25lIFByb2plY3Q6IFRoaXMgaXMgYW4gZWR1Y2F0aW9uYWwgcHJvamVjdCB0byBtYWtlIGEgd2Vic2l0ZSBmb3IgYSB3ZWIgY29uZmVyZW5jZSBldmVudCB3aXRoIGhvbWUgcGFnZSBhbmQgYWJvdXQgcGFnZS4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdTcGFjZSBUcmF2ZWxlcnMtIEh1YicsXG4gICAgaW1nOiBpbWdTcGFjZSxcbiAgICBuYW1lOiAnU3BhY2UgVHJhdmVsZXJzLSBIdWInLFxuICAgIGxhbmc6IFsnUmVhY3QnLCAnUmVkdXgnLCAnUm91dGVyJywgJ0phdmFTY3JpcHQnLCAnSmVzdCcsICdTYXNzJ10sXG4gICAgZGVtbzogJ2h0dHBzOi8vYXBwLXNwYWNlLXRyYXZlbGVycy1odWIubmV0bGlmeS5hcHAvJyxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vQnJpYTIyMi9zcGFjZS10cmF2ZWxlcnMtaHViLmdpdCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTWljcm92ZXJzZSBSZWFjdCBHcm91cCBQcm9qZWN0OiBUaGlzIGVkdWNhdGlvbmFsIHByb2plY3QgaXMgdG8gYnVpbGQgYSB3ZWIgYXBwbGljYXRpb24gZm9yIGEgY29tcGFueSB0aGF0IHByb3ZpZGVzIGNvbW1lcmNpYWwgYW5kIHNjaWVudGlmaWMgc3BhY2UgdHJhdmVsIHNlcnZpY2VzLiBUaGUgYXBwbGljYXRpb24gd2lsbCBhbGxvdyB1c2VycyB0byBib29rIHJvY2tldHMgYW5kIGpvaW4gc2VsZWN0ZWQgc3BhY2UgbWlzc2lvbnMuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnQm9va3N0b3JlIENNUycsXG4gICAgaW1nOiBpbWdCb29rcyxcbiAgICBuYW1lOiAnQm9va3N0b3JlIENNUycsXG4gICAgbGFuZzogWydSZWFjdCcsICdSZWR1eCcsICdSb3V0ZXInLCAnSmF2YVNjcmlwdCcsICdKZXN0JywgJ1Nhc3MnXSxcbiAgICBkZW1vOiAnaHR0cHM6Ly9hcHAtYm9va3N0b3JlLWNtcy5uZXRsaWZ5LmFwcC8nLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9CcmlhMjIyL2F3ZXNvbWUtYm9va3MtYXBwJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdNaWNyb3ZlcnNlIE1vZHVsZSAwMyBQcm9qZWN0OiBUaGlzIGVkdWNhdGlvbmFsIHByb2plY3QgaXMgc2ltaWxhciB0byB0aGUgXCJBd2Vzb21lIEJvb2tzXCIgd2Vic2l0ZS4gSXQgaXMgYSBNVlAgdmVyc2lvbiBvZiBpdCB0aGF0IGFsbG93cyB5b3UgdG8gZGlzcGxheSBhIGxpc3Qgb2YgYm9va3MsIGFkZCBhIGJvb2sgYW5kIHJlbW92ZSBhIHNlbGVjdGVkIGJvb2suJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnTWF0aCBNYWdpY2lhbnMnLFxuICAgIGltZzogaW1nTWF0aCxcbiAgICBuYW1lOiAnTWF0aCBNYWdpY2lhbnMnLFxuICAgIGxhbmc6IFsnUmVhY3QnLCAnUm91dGVyJywgJ0phdmFTY3JpcHQnLCAnSmVzdCcsICdTYXNzJywgJ0xpbnRlcnMnXSxcbiAgICBkZW1vOiAnaHR0cHM6Ly9icmVlLW1hdGgtbWFnaWNpYW4ubmV0bGlmeS5hcHAvcXVvdGUnLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9CcmlhMjIyL1JlYWN0LU1hdGgtbWFnaWNpYW5zJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdNaWNyb3ZlcnNlIE1vZHVsZSAwMyBQcm9qZWN0OiBcIk1hdGggTWFnaWNpYW5zXCIgaXMgYSB3ZWJzaXRlIGZvciBhbGwgZmFucyBvZiBtYXRoZW1hdGljcy4gSXQgaXMgYSBTaW5nbGUgUGFnZSBBcHAgKFNQQSkgdGhhdCBhbGxvd3MgdXNlcnMgdG8gbWFrZSBhIHNpbXBsZSBjYWxjdWxhdGlvbnMgYW5kIHJlYWQgYSByYW5kb20gbWF0aC1yZWxhdGVkIHF1b3RlLicsXG4gIH0sXG4gIHtcbiAgICBoMzogJ1RvLURvIExpc3QnLFxuICAgIGltZzogaW1nVG9kbyxcbiAgICBuYW1lOiAnVG8tRG8gTGlzdCBBcHAnLFxuICAgIGxhbmc6IFsnV2VicGFjaycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnLCAnU2FzcycsICdIVE1MJywgJ0plc3QnXSxcbiAgICBkZW1vOiAnaHR0cHM6Ly9icmlhMjIyLmdpdGh1Yi5pby9TbmVhay1wZWVrLVRvLWRvLWxpc3QvJyxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vQnJpYTIyMi9TbmVhay1wZWVrLVRvLWRvLWxpc3QnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RoaXMgaXMgYW4gZWR1Y2F0aW9uYWwgcHJvamVjdCB0byBtYWtlIGEgdG9vbCB0aGF0IGhlbHBzIHRvIG9yZ2FuaXplIHlvdXIgZGF5LiBJdCBzaW1wbHkgbGlzdHMgdGhlIHRoaW5ncyB0aGF0IHlvdSBuZWVkIHRvIGRvIGFuZCBhbGxvd3MgeW91IHRvIG1hcmsgdGhlbSBhcyBjb21wbGV0ZS4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdMZWFkZXJib2FyZCcsXG4gICAgaW1nOiBpbWdMZGIsXG4gICAgbmFtZTogJ0xlYWRlcmJvYXJkIEFwcCcsXG4gICAgbGFuZzogWydXZWJwYWNrJywgJ0phdmFTY3JpcHQnLCAnTGludGVycycsICdBUEknLCAnU2FzcycsICdKZXN0J10sXG4gICAgZGVtbzogJ2h0dHBzOi8vbWF2ZXJpY2tzLWRiLmdpdGh1Yi5pby9sZWFkZXJib2FyZC9kaXN0L2luZGV4Lmh0bWwnLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9CcmlhMjIyL0xlYWRlcmJvYXJkJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUaGlzIGlzIGFuIGVkdWNhdGlvbmFsIHByb2plY3QgdG8gY3JlYXRlIGEgd2Vic2l0ZSB3aGljaCBkaXNwbGF5cyBzY29yZXMgc3VibWl0dGVkIGJ5IGRpZmZlcmVudCBwbGF5ZXJzLiBJdCBhbHNvIGFsbG93cyB5b3UgdG8gc3VibWl0IHlvdXIgc2NvcmUuIEFsbCBkYXRhIGlzIHByZXNlcnZlZCB0aGFua3MgdG8gdGhlIGV4dGVybmFsIExlYWRlcmJvYXJkIEFQSSBTZXJ2aWNlLicsXG4gIH0sXG4gIHtcbiAgICBoMzogJ0F3ZXNvbWUgQm9va3MnLFxuICAgIGltZzogbW9ja0F3ZSxcbiAgICBuYW1lOiAnQXdlc29tZSBCb29rcycsXG4gICAgbGFuZzogW1xuICAgICAgJ0phdmFTY3JpcHQnLFxuICAgICAgJ0xpbnRlcnMnLFxuICAgICAgJ0hUTUwnLFxuICAgICAgJ1Nhc3MnLFxuICAgICAgJ0plc3QnLFxuICAgICAgJ0dpdEh1YiBQYWdlcycsXG4gICAgXSxcbiAgICBkZW1vOiAnaHR0cHM6Ly9tYXZlcmlja3MtZGIuZ2l0aHViLmlvL2F3ZXNvbWUtYm9va3MtRVM2LycsXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL0JyaWEyMjIvb2JqZWN0LW9yaWVudGVkLWJvb2stYXBwbGljYXRpb24uZ2l0JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUaGlzIGlzIGFuIGVkdWNhdGlvbmFsIHByb2plY3QgdG8gbWFrZSBhIHNpbXBsZSB3ZWJzaXRlIHRoYXQgZGlzcGxheXMgYSBsaXN0IG9mIGJvb2tzIGFuZCBhbGxvd3MgeW91IHRvIGFkZCBhbmQgcmVtb3ZlIGJvb2tzIGZyb20gdGhhdCBsaXN0LiBUaGUgZ29hbCBpcyB0byBtYWtlIGl0IG1vcmUgb3JnYW5pemVkIGJ5IHVzaW5nIG1vZHVsZXMgYW5kIHByYWN0aWNlIHRoZSBFUzYgc3ludGF4LicsXG4gIH0sXG5dO1xuXG4vLyBDcmVhdGUgQ2FyZCBJdGVtcyBEeW5hbWljYWxseVxuY29uc3QgZ3JpZEl0ZW0gPSBbXTtcbmNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gW107XG5jb25zdCBoMyA9IFtdO1xuY29uc3QgdWwgPSBbXTtcbmNvbnN0IGJ1dHRvbjEgPSBbXTtcbmNvbnN0IGJ1dHRvbjIgPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkT2JqLmxlbmd0aDsgaSArPSAxKSB7XG4gIGdyaWRJdGVtW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdyaWRJdGVtW2ldLmNsYXNzTGlzdC5hZGQoJ2dyaWRJdGVtJyk7XG4gIGdyaWRJdGVtW2ldLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjYXJkT2JqW2ldLmltZ30pYDtcblxuICBkZXNjcmlwdGlvbkNvbnRhaW5lcltpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lcltpXS5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbkNvbnRhaW5lcicpO1xuXG4gIGgzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgaDN0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5oMyk7XG4gIGgzW2ldLmFwcGVuZChoM3RleHQpO1xuXG4gIHVsW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3Qgb2JqID0ge307XG4gIGNvbnN0IGxpc3RJdGVtcyA9IFsnbGkwJywgJ2xpMScsICdsaTInLCAnbGkzJ107XG4gIGxpc3RJdGVtcy5mb3JFYWNoKChlbCwgaikgPT4ge1xuICAgIG9ialtlbF0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ1tqXSk7XG4gICAgb2JqW2VsXS5hcHBlbmRDaGlsZCh0eHQpO1xuICAgIHVsW2ldLmFwcGVuZChvYmpbZWxdKTtcbiAgfSk7XG5cbiAgYnV0dG9uMVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBidXR0b24xdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTZWUgUHJvamVjdCcpO1xuICBidXR0b24xW2ldLmFwcGVuZChidXR0b24xdGV4dCk7XG4gIGJ1dHRvbjFbaV0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBidXR0b24xW2ldLmNsYXNzTGlzdC5hZGQoJ3NlZVByb2plY3QnKTtcbiAgYnV0dG9uMVtpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnU2VlIFByb2plY3QgQnV0dG9uJyk7XG4gIGJ1dHRvbjFbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaSk7XG5cbiAgYnV0dG9uMltpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBidXR0b24ydGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTZWUgUHJvamVjdCcpO1xuICBidXR0b24yW2ldLmFwcGVuZChidXR0b24ydGV4dCk7XG4gIGJ1dHRvbjJbaV0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBidXR0b24yW2ldLmNsYXNzTGlzdC5hZGQoJ3NlZVByb2plY3REZXNrdG9wJyk7XG4gIGJ1dHRvbjJbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ1NlZSBQcm9qZWN0IEJ1dHRvbicpO1xuICBidXR0b24yW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuXG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyW2ldLmFwcGVuZChoM1tpXSwgdWxbaV0sIGJ1dHRvbjFbaV0sIGJ1dHRvbjJbaV0pO1xuICBncmlkSXRlbVtpXS5hcHBlbmQoZGVzY3JpcHRpb25Db250YWluZXJbaV0pO1xuICBncmlkQ29udGFpbmVyLmFwcGVuZChncmlkSXRlbVtpXSk7XG59XG5cbmNvbnN0IG9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlbkJ0bicpO1xuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VCdG4nKTtcbmNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsQ29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gZ2xvYmFsKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsQ29udGFpbmVyKSB7XG4gICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufTtcblxub3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbCk7XG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xubW9kYWxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcblxuLy8gTW9iaWxlIE1vZGFsXG5jb25zdCBzZWVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlZVByb2plY3QnKTtcblxuLy8gQ3JlYXRlIGRpdiBtb2JpbGVNb2RhbCBkeW5hbWljYWxseVxuY29uc3QgbW9iaWxlTW9kYWwgPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkSXRlbS5sZW5ndGg7IGkgKz0gMSkge1xuICBtb2JpbGVNb2RhbFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2JpbGVNb2RhbFtpXS5jbGFzc0xpc3QuYWRkKCdtb2JpbGVNb2RhbCcpO1xuICBncmlkSXRlbVtpXS5hcHBlbmQobW9iaWxlTW9kYWxbaV0pO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9iaWxlTW9kYWwoZSkge1xuICBjb25zdCBpID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgbW9iaWxlTW9kYWxbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2MS5jbGFzc0xpc3QuYWRkKCdtb2JpbGVNQ0NvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMS5jbGFzc0xpc3QuYWRkKCdjbG9zZU1vYmlsZScpO1xuICBpbWcxLnNldEF0dHJpYnV0ZSgnc3JjJywgY2xvc2UpO1xuICBmdW5jdGlvbiBjbG9zZU1vYmlsZU1vZGFsKCkge1xuICAgIG1vYmlsZU1vZGFsW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZGl2MS5yZW1vdmUoKTtcbiAgfVxuICBpbWcxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2JpbGVNb2RhbCk7XG5cbiAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJbWdNb2JpbGUnKTtcbiAgaW1nMi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNhcmRPYmpbaV0uaW1nKTtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZScpO1xuICBoMi5pbm5lckhUTUwgPSBjYXJkT2JqW2ldLm5hbWU7XG5cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBvYmogPSB7fTtcbiAgY29uc3QgbGlzdEl0ZW1zID0gWydsaTAnLCAnbGkxJywgJ2xpMiddO1xuICBsaXN0SXRlbXMuZm9yRWFjaCgoZWwsIGopID0+IHtcbiAgICBvYmpbZWxdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdbal0pO1xuICAgIG9ialtlbF0uYXBwZW5kQ2hpbGQodHh0KTtcbiAgICB1bC5hcHBlbmQob2JqW2VsXSk7XG4gIH0pO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuY2xhc3NMaXN0LmFkZCgncHJvamVjdERlc2NyaXB0aW9uJyk7XG4gIHAuaW5uZXJUZXh0ID0gY2FyZE9ialtpXS5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyTW9iaWxlJyk7XG4gIGNvbnN0IGExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMS5jbGFzc0xpc3QuYWRkKCdsaXZlQnRuJyk7XG4gIGNvbnN0IGxpbmthMSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTZWUgTGl2ZScpO1xuICBhMS5hcHBlbmRDaGlsZChsaW5rYTEpO1xuICBhMS5ocmVmID0gY2FyZE9ialtpXS5saXZlO1xuICBjb25zdCBpbWdhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdhMS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGxpdmUpO1xuICBhMS5hcHBlbmRDaGlsZChpbWdhMSk7XG5cbiAgY29uc3QgYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEyLmNsYXNzTGlzdC5hZGQoJ3NyY0J0bicpO1xuICBjb25zdCBsaW5rYTIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIFNvdXJjZScpO1xuICBhMi5hcHBlbmRDaGlsZChsaW5rYTIpO1xuICBhMi5ocmVmID0gY2FyZE9ialtpXS5zb3VyY2U7XG4gIGNvbnN0IGltZ2EyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ2EyLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlKTtcbiAgYTIuYXBwZW5kQ2hpbGQoaW1nYTIpO1xuXG4gIGRpdjEuYXBwZW5kKGltZzEsIGltZzIsIGgyLCB1bCwgcCk7XG4gIGRpdjIuYXBwZW5kKGExLCBhMik7XG4gIGRpdjEuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gIG1vYmlsZU1vZGFsW2ldLmFwcGVuZENoaWxkKGRpdjEpO1xufVxuXG5zZWVQcm9qZWN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2JpbGVNb2RhbCk7XG59KTtcblxuLy8gRGVza3RvcCBNb2RhbFxuY29uc3Qgc2VlUHJvamVjdERlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VlUHJvamVjdERlc2t0b3AnKTtcbmNvbnN0IGRlc2t0b3BNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNrdG9wTW9kYWwnKTtcblxuZnVuY3Rpb24gb3BlbkRlc2t0b3BNb2RhbChlKSB7XG4gIGNvbnN0IGkgPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICBkZXNrdG9wTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYxLmNsYXNzTGlzdC5hZGQoJ2Rlc2t0b3BNQ0NvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMS5jbGFzc0xpc3QuYWRkKCdjbG9zZURlc2t0b3AnKTtcbiAgaW1nMS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNsb3NlKTtcblxuICBmdW5jdGlvbiBjbG9zZU1vYmlsZU1vZGFsKCkge1xuICAgIGRlc2t0b3BNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRpdjEucmVtb3ZlKCk7XG4gIH1cblxuICBpbWcxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2JpbGVNb2RhbCk7XG5cbiAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJbWdEZXNrdG9wJyk7XG4gIGltZzIuc2V0QXR0cmlidXRlKCdzcmMnLCBjYXJkT2JqW2ldLmltZyk7XG5cbiAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYzLmNsYXNzTGlzdC5hZGQoJ2Rlc2t0b3BNb2RhbEhlYWRsaW5lJyk7XG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZURlc2t0b3AnKTtcbiAgaDIuaW5uZXJIVE1MID0gY2FyZE9ialtpXS5uYW1lO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICBjb25zdCBvYmogPSB7fTtcbiAgY29uc3QgbGlzdEl0ZW1zID0gWydsaTAnLCAnbGkxJywgJ2xpMicsICdsaTMnLCAnbGk0JywgJ2xpNSddO1xuICBsaXN0SXRlbXMuZm9yRWFjaCgoZWwsIGopID0+IHtcbiAgICBvYmpbZWxdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdbal0pO1xuICAgIG9ialtlbF0uYXBwZW5kQ2hpbGQodHh0KTtcbiAgICB1bC5hcHBlbmQob2JqW2VsXSk7XG4gIH0pO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuY2xhc3NMaXN0LmFkZCgncHJvamVjdERlc2NyaXB0aW9uRGVza3RvcCcpO1xuICBwLmlubmVyVGV4dCA9IGNhcmRPYmpbaV0uZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lckRlc2t0b3AnKTtcblxuICBjb25zdCBhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTEuY2xhc3NMaXN0LmFkZCgnbGl2ZUJ0bkRlc2t0b3AnKTtcblxuICBjb25zdCBsaW5rYTEgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIExpdmUnKTtcbiAgYTEuYXBwZW5kQ2hpbGQobGlua2ExKTtcbiAgYTEuaHJlZiA9IGNhcmRPYmpbaV0uZGVtbztcblxuICBjb25zdCBpbWdhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdhMS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGxpdmUpO1xuICBhMS5hcHBlbmRDaGlsZChpbWdhMSk7XG5cbiAgY29uc3QgYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEyLmNsYXNzTGlzdC5hZGQoJ3NyY0J0bkRlc2t0b3AnKTtcblxuICBjb25zdCBsaW5rYTIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIFNvdXJjZScpO1xuICBhMi5hcHBlbmRDaGlsZChsaW5rYTIpO1xuICBhMi5ocmVmID0gY2FyZE9ialtpXS5zb3VyY2U7XG5cbiAgY29uc3QgaW1nYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nYTIuc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2UpO1xuICBhMi5hcHBlbmRDaGlsZChpbWdhMik7XG4gIGRpdjEuYXBwZW5kKGltZzEsIGltZzIpO1xuICBkaXYzLmFwcGVuZENoaWxkKGgyKTtcbiAgZGl2MS5hcHBlbmQoZGl2MywgdWwsIHApO1xuICBkaXYyLmFwcGVuZChhMSwgYTIpO1xuICBkaXYzLmFwcGVuZENoaWxkKGRpdjIpO1xuICBkZXNrdG9wTW9kYWwuYXBwZW5kQ2hpbGQoZGl2MSk7XG59XG5cbnNlZVByb2plY3REZXNrdG9wLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5EZXNrdG9wTW9kYWwpO1xufSk7XG5cbi8vIEZvcm0gVmFsaWRhdGlvbiAtIE1vYmlsZVxuY29uc3QgZm9ybU1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtTW9iaWxlJyk7XG5jb25zdCBuYW1lSW5wdXRNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZUlucHV0TW9iaWxlJyk7XG5jb25zdCBlbWFpbElucHV0TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsSW5wdXRNb2JpbGUnKTtcbmNvbnN0IG1lc3NhZ2VJbnB1dE1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlSW5wdXRNb2JpbGUnKTtcbmNvbnN0IHN1Ym1pdEJ0bk1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRCdG5Nb2JpbGUnKTtcbmxldCBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xuXG4vLyBMb2NhbCBTdG9yYWdlIC0gTW9iaWxlICYgRGVza3RvcFxubGV0IGZvcm1PYmogPSB7XG4gIGZ1bGxOYW1lTW9iaWxlOiAnJyxcbiAgZW1haWxNb2JpbGU6ICcnLFxuICBtZXNzYWdlTW9iaWxlOiAnJyxcbiAgZmlyc3ROYW1lOiAnJyxcbiAgbGFzdE5hbWU6ICcnLFxuICBlbWFpbERlc2t0b3A6ICcnLFxuICBtZXNzYWdlRGVza3RvcDogJycsXG59O1xuXG5mdW5jdGlvbiBzdG9yZUlubFMoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteURhdGEnLCBKU09OLnN0cmluZ2lmeShmb3JtT2JqKSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRpb24oKSB7XG4gIGNvbnN0IHN0ciA9IGVtYWlsSW5wdXRNb2JpbGUudmFsdWUudHJpbSgpO1xuICBjb25zdCByZWdFeCA9IC9bQS1aXS9nO1xuICBpZiAocmVnRXgudGVzdChzdHIpKSB7XG4gICAgc3VibWl0QnRuTW9iaWxlLnNldEN1c3RvbVZhbGlkaXR5KFxuICAgICAgJ1NvcnJ5LCB0aGlzIGZvcm0gaGFzIG5vdCBiZWVuIHN1Ym1pdHRlZC4gVGhlIGNvbnRlbnQgb2YgdGhlIGVtYWlsIGZpZWxkIGhhcyB0byBiZSBpbiBsb3dlciBjYXNlLiBcXG4gUGxlYXNlIGNoZWNrIHlvdXIgaW5wdXRzIGFuZCByZWxvYWQgdGhlIHBhZ2UnLFxuICAgICk7XG4gICAgc3VibWl0QnRuTW9iaWxlLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcbiAgICBzdG9yZUlubFMoKTtcbiAgfSBlbHNlIHtcbiAgICBpc0Zvcm1WYWxpZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGlzRm9ybVZhbGlkO1xufVxuXG5mb3JtTW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdmFsaWRhdGlvbigpO1xuICBpZiAoaXNGb3JtVmFsaWQpIHtcbiAgICBzdWJtaXRCdG5Nb2JpbGUuc2V0Q3VzdG9tVmFsaWRpdHkoXG4gICAgICAnVGhlIGZvcm0gaGFzIGJlZW4gc3VibWl0dGVkLiBcXG4gVGhhbmsgeW91IGZvciBjb250YWN0aW5nIG1lLicsXG4gICAgKTtcbiAgICBzdWJtaXRCdG5Nb2JpbGUucmVwb3J0VmFsaWRpdHkoKTtcbiAgICBmb3JtTW9iaWxlLnN1Ym1pdCgpO1xuICB9XG59KTtcblxuLy8gRm9ybSBWYWxpZGF0aW9uIC0gRGVza3RvcFxuY29uc3QgZm9ybURlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybURlc2t0b3AnKTtcbmNvbnN0IG5hbWVJbnB1dERlc2t0b3AxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWVJbnB1dERlc2t0b3AxJyk7XG5jb25zdCBuYW1lSW5wdXREZXNrdG9wMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lSW5wdXREZXNrdG9wMicpO1xuY29uc3QgZW1haWxJbnB1dERlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWxJbnB1dERlc2t0b3AnKTtcbmNvbnN0IG1lc3NhZ2VJbnB1dERlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZUlucHV0RGVza3RvcCcpO1xuY29uc3Qgc3VibWl0QnRuRGVza3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRCdG5EZXNrdG9wJyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRpb25EZXNrdG9wKCkge1xuICBjb25zdCBzdHIgPSBlbWFpbElucHV0RGVza3RvcC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHJlZ0V4ID0gL1tBLVpdL2c7XG4gIGlmIChyZWdFeC50ZXN0KHN0cikpIHtcbiAgICBzdWJtaXRCdG5EZXNrdG9wLnNldEN1c3RvbVZhbGlkaXR5KFxuICAgICAgJ1NvcnJ5LCB0aGlzIGZvcm0gaGFzIG5vdCBiZWVuIHN1Ym1pdHRlZC4gVGhlIGNvbnRlbnQgb2YgdGhlIGVtYWlsIGZpZWxkIGhhcyB0byBiZSBpbiBsb3dlciBjYXNlLiBcXG4gUGxlYXNlIGNoZWNrIHlvdXIgaW5wdXRzIGFuZCByZWxvYWQgdGhlIHBhZ2UuJyxcbiAgICApO1xuICAgIHN1Ym1pdEJ0bkRlc2t0b3AucmVwb3J0VmFsaWRpdHkoKTtcbiAgICBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xuICAgIHN0b3JlSW5sUygpO1xuICB9IGVsc2Uge1xuICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gaXNGb3JtVmFsaWQ7XG59XG5cbmZvcm1EZXNrdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdmFsaWRhdGlvbkRlc2t0b3AoKTtcbiAgaWYgKGlzRm9ybVZhbGlkKSB7XG4gICAgc3VibWl0QnRuRGVza3RvcC5zZXRDdXN0b21WYWxpZGl0eShcbiAgICAgICdUaGUgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWQuIFxcbiBUaGFuayB5b3UgZm9yIGNvbnRhY3RpbmcgbWUuJyxcbiAgICApO1xuICAgIHN1Ym1pdEJ0bkRlc2t0b3AucmVwb3J0VmFsaWRpdHkoKTtcbiAgICBmb3JtRGVza3RvcC5zdWJtaXQoKTtcbiAgfVxufSk7XG5cbi8vIExvY2FsIFN0b3JhZ2UgLSBNb2JpbGUgJiBEZXNrdG9wXG5jb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZm9ybU9iaik7XG5mdW5jdGlvbiBzdG9yZUl0ZW0oZSkge1xuICBjb25zdCBrZXlOdW0gPSBrZXlzLmluZGV4T2YoZS50YXJnZXQubmFtZSk7XG4gIGZvcm1PYmpba2V5c1trZXlOdW1dXSA9IGUudGFyZ2V0LnZhbHVlO1xufVxuXG5uYW1lSW5wdXRNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xuZW1haWxJbnB1dE1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5tZXNzYWdlSW5wdXRNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xubmFtZUlucHV0RGVza3RvcDEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xubmFtZUlucHV0RGVza3RvcDIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xuZW1haWxJbnB1dERlc2t0b3AuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xubWVzc2FnZUlucHV0RGVza3RvcC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5cbmZ1bmN0aW9uIHBsYWNlSXRlbXMoKSB7XG4gIG5hbWVJbnB1dE1vYmlsZS52YWx1ZSA9IGZvcm1PYmouZnVsbE5hbWVNb2JpbGU7XG4gIGVtYWlsSW5wdXRNb2JpbGUudmFsdWUgPSBmb3JtT2JqLmVtYWlsTW9iaWxlO1xuICBtZXNzYWdlSW5wdXRNb2JpbGUudmFsdWUgPSBmb3JtT2JqLm1lc3NhZ2VNb2JpbGU7XG4gIG5hbWVJbnB1dERlc2t0b3AxLnZhbHVlID0gZm9ybU9iai5maXJzdE5hbWU7XG4gIG5hbWVJbnB1dERlc2t0b3AyLnZhbHVlID0gZm9ybU9iai5sYXN0TmFtZTtcbiAgZW1haWxJbnB1dERlc2t0b3AudmFsdWUgPSBmb3JtT2JqLmVtYWlsRGVza3RvcDtcbiAgbWVzc2FnZUlucHV0RGVza3RvcC52YWx1ZSA9IGZvcm1PYmoubWVzc2FnZURlc2t0b3A7XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiByZXRyaWV2ZSgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteURhdGEnKSkge1xuICAgIGZvcm1PYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteURhdGEnKSk7XG4gICAgcGxhY2VJdGVtcygpO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9