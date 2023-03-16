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
const close_mobileModal_namespaceObject = __webpack_require__.p + "c733c95100e5d68036e3.svg";
;// CONCATENATED MODULE: ./src/assets/icon-live.png
const icon_live_namespaceObject = __webpack_require__.p + "f2a0741608e07a437198.png";
;// CONCATENATED MODULE: ./src/assets/icon-source.png
const icon_source_namespaceObject = __webpack_require__.p + "b41840c8f3fb646da1cf.png";
;// CONCATENATED MODULE: ./src/assets/img/pokemon/mock_pokemon.png
const mock_pokemon_namespaceObject = __webpack_require__.p + "da39cf9d6c447c64b96f.png";
;// CONCATENATED MODULE: ./src/assets/img/primeshows/mock_ps.png
const mock_ps_namespaceObject = __webpack_require__.p + "50473038b36844ef9139.png";
;// CONCATENATED MODULE: ./src/assets/img/awc2022/mock_awc.png
const mock_awc_namespaceObject = __webpack_require__.p + "e18aba8690d026e62cf5.png";
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
;// CONCATENATED MODULE: ./src/index.js














const gridContainer = document.querySelector('.gridContainer');

// Project Data
const cardObj = [
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
    source: 'https://github.com/mavericks-db/capstone02',
    description:
      'Microverse Second Capstone Project: This educational project is to build our own web application based on an external API. We selected an API that provides data about a topic that we like and built the web app around it. The web app will have 2 or 3 user interfaces (depending on the size of our team).',
  },
  {
    h3: 'AWC 2022',
    img: mock_awc_namespaceObject,
    name: 'Asia Web Conference 2022',
    lang: [
      'JavaScript',
      'Linters',
      'Sass',
      'HTML',
      'VS Code',
      'GitHub Pages',
    ],
    demo: 'https://mavericks-db.github.io/capstone01/',
    source: 'https://github.com/mavericks-db/capstone01',
    description:
      'Microverse First Capstone Project: This is an educational project to make a website for a web conference event with home page and about page.',
  },
  {
    h3: 'Space Travelers- Hub',
    img: mock_space_namespaceObject,
    name: 'Space Travelers- Hub',
    lang: ['React', 'Redux', 'Router', 'JavaScript', 'Jest', 'Sass'],
    demo: 'https://app-space-travelers-hub.netlify.app/',
    source: 'https://github.com/mavericks-db/space-travelers-hub',
    description:
      'Microverse React Group Project: This educational project is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
  },
  {
    h3: 'Bookstore CMS',
    img: mock_bookstore_namespaceObject,
    name: 'Bookstore CMS',
    lang: ['React', 'Redux', 'Router', 'JavaScript', 'Jest', 'Sass'],
    demo: 'https://app-bookstore-cms.netlify.app/',
    source: 'https://github.com/mavericks-db/bookstore',
    description:
      'Microverse Module 03 Project: This educational project is similar to the "Awesome Books" website. It is a MVP version of it that allows you to display a list of books, add a book and remove a selected book.',
  },
  {
    h3: 'Math Magicians',
    img: mock_math_namespaceObject,
    name: 'Math Magicians',
    lang: ['React', 'Router', 'JavaScript', 'Jest', 'Sass', 'Linters'],
    demo: 'https://app-math-magicians.netlify.app/',
    source: 'https://github.com/mavericks-db/math-magicians',
    description:
      'Microverse Module 03 Project: "Math Magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make a simple calculations and read a random math-related quote.',
  },
  {
    h3: 'To-Do List',
    img: mock_tdl_namespaceObject,
    name: 'To-Do List App',
    lang: ['Webpack', 'JavaScript', 'Linters', 'Sass', 'HTML', 'Jest'],
    demo: 'https://mavericks-db.github.io/todo-list/dist/index.html',
    source: 'https://github.com/mavericks-db/todo-list',
    description:
      'This is an educational project to make a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
  },
  {
    h3: 'Leaderboard',
    img: mock_ldb_namespaceObject,
    name: 'Leaderboard App',
    lang: ['Webpack', 'JavaScript', 'Linters', 'API', 'Sass', 'Jest'],
    demo: 'https://mavericks-db.github.io/leaderboard/dist/index.html',
    source: 'https://github.com/mavericks-db/leaderboard',
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
    source: 'https://github.com/mavericks-db/awesome-books-ES6',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBMkIsaUNBQUs7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIseUJBQUk7QUFDaEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsMkJBQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGNsb3NlIGZyb20gJy4vYXNzZXRzL2Nsb3NlLW1vYmlsZU1vZGFsLnN2Zyc7XG5pbXBvcnQgbGl2ZSBmcm9tICcuL2Fzc2V0cy9pY29uLWxpdmUucG5nJztcbmltcG9ydCBzb3VyY2UgZnJvbSAnLi9hc3NldHMvaWNvbi1zb3VyY2UucG5nJztcbmltcG9ydCBpbWdQb2tlbW9uIGZyb20gJy4vYXNzZXRzL2ltZy9wb2tlbW9uL21vY2tfcG9rZW1vbi5wbmcnO1xuaW1wb3J0IGltZ1BTIGZyb20gJy4vYXNzZXRzL2ltZy9wcmltZXNob3dzL21vY2tfcHMucG5nJztcbmltcG9ydCBpbWdBV0MgZnJvbSAnLi9hc3NldHMvaW1nL2F3YzIwMjIvbW9ja19hd2MucG5nJztcbmltcG9ydCBpbWdTcGFjZSBmcm9tICcuL2Fzc2V0cy9pbWcvc3BhY2UtdHJhdmVsZXJzLWh1Yi9tb2NrX3NwYWNlLnBuZyc7XG5pbXBvcnQgaW1nQm9va3MgZnJvbSAnLi9hc3NldHMvaW1nL2Jvb2tzdG9yZS9tb2NrX2Jvb2tzdG9yZS5wbmcnO1xuaW1wb3J0IGltZ01hdGggZnJvbSAnLi9hc3NldHMvaW1nL21hdGgtbWFnaWNpYW5zL21vY2tfbWF0aC5wbmcnO1xuaW1wb3J0IGltZ1RvZG8gZnJvbSAnLi9hc3NldHMvaW1nL3RvLWRvLWxpc3QvbW9ja190ZGwucG5nJztcbmltcG9ydCBpbWdMZGIgZnJvbSAnLi9hc3NldHMvaW1nL2xlYWRlcmJvYXJkL21vY2tfbGRiLnBuZyc7XG5pbXBvcnQgbW9ja0F3ZSBmcm9tICcuL2Fzc2V0cy9pbWcvYXdlc29tZS1ib29rcy9tb2NrX2Jvb2tzLnBuZyc7XG5cbmNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZENvbnRhaW5lcicpO1xuXG4vLyBQcm9qZWN0IERhdGFcbmNvbnN0IGNhcmRPYmogPSBbXG4gIHtcbiAgICBoMzogJ1Bva2Vtb24gV2ViIEFwcCcsXG4gICAgaW1nOiBpbWdQb2tlbW9uLFxuICAgIG5hbWU6ICdQb2tlbW9uIFdlYiBBcHAnLFxuICAgIGxhbmc6IFsnUmVhY3QnLCAnUmVkdXgnLCAnSmF2YVNjcmlwdCcsICdTYXNzJywgJ0FQSScsICdMaW50ZXJzJ10sXG4gICAgZGVtbzogJ2h0dHBzOi8vYXBwLXBva2Vtb24td2ViYXBwLm5ldGxpZnkuYXBwLycsXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdmVyaWNrcy1kYi9jYXBzdG9uZTAzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdNaWNyb3ZlcnNlIFJlYWN0IENhcHN0b25lIFByb2plY3Q6IFRoaXMgZWR1Y2F0aW9uYWwgcHJvamVjdCBpcyB0byBidWlsZCBhIG1vYmlsZSB3ZWIgYXBwbGljYXRpb24gdG8gY2hlY2sgYSBsaXN0IG9mIG1ldHJpY3MgKG51bWVyaWMgdmFsdWVzKSB1c2luZyBSZWFjdCBhbmQgUmVkdXguJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnUHJpbWUgU2hvd3MgSEQnLFxuICAgIGltZzogaW1nUFMsXG4gICAgbmFtZTogJ1ByaW1lIFNob3dzIEhEJyxcbiAgICBsYW5nOiBbJ1dlYnBhY2snLCAnSmF2YVNjcmlwdCcsICdKZXN0JywgJ1Nhc3MnLCAnQVBJJywgJ0xpbnRlcnMnXSxcbiAgICBkZW1vOiAnaHR0cHM6Ly9tYXZlcmlja3MtZGIuZ2l0aHViLmlvL2NhcHN0b25lMDIvZGlzdC8nLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvY2Fwc3RvbmUwMicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTWljcm92ZXJzZSBTZWNvbmQgQ2Fwc3RvbmUgUHJvamVjdDogVGhpcyBlZHVjYXRpb25hbCBwcm9qZWN0IGlzIHRvIGJ1aWxkIG91ciBvd24gd2ViIGFwcGxpY2F0aW9uIGJhc2VkIG9uIGFuIGV4dGVybmFsIEFQSS4gV2Ugc2VsZWN0ZWQgYW4gQVBJIHRoYXQgcHJvdmlkZXMgZGF0YSBhYm91dCBhIHRvcGljIHRoYXQgd2UgbGlrZSBhbmQgYnVpbHQgdGhlIHdlYiBhcHAgYXJvdW5kIGl0LiBUaGUgd2ViIGFwcCB3aWxsIGhhdmUgMiBvciAzIHVzZXIgaW50ZXJmYWNlcyAoZGVwZW5kaW5nIG9uIHRoZSBzaXplIG9mIG91ciB0ZWFtKS4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdBV0MgMjAyMicsXG4gICAgaW1nOiBpbWdBV0MsXG4gICAgbmFtZTogJ0FzaWEgV2ViIENvbmZlcmVuY2UgMjAyMicsXG4gICAgbGFuZzogW1xuICAgICAgJ0phdmFTY3JpcHQnLFxuICAgICAgJ0xpbnRlcnMnLFxuICAgICAgJ1Nhc3MnLFxuICAgICAgJ0hUTUwnLFxuICAgICAgJ1ZTIENvZGUnLFxuICAgICAgJ0dpdEh1YiBQYWdlcycsXG4gICAgXSxcbiAgICBkZW1vOiAnaHR0cHM6Ly9tYXZlcmlja3MtZGIuZ2l0aHViLmlvL2NhcHN0b25lMDEvJyxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL2NhcHN0b25lMDEnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ01pY3JvdmVyc2UgRmlyc3QgQ2Fwc3RvbmUgUHJvamVjdDogVGhpcyBpcyBhbiBlZHVjYXRpb25hbCBwcm9qZWN0IHRvIG1ha2UgYSB3ZWJzaXRlIGZvciBhIHdlYiBjb25mZXJlbmNlIGV2ZW50IHdpdGggaG9tZSBwYWdlIGFuZCBhYm91dCBwYWdlLicsXG4gIH0sXG4gIHtcbiAgICBoMzogJ1NwYWNlIFRyYXZlbGVycy0gSHViJyxcbiAgICBpbWc6IGltZ1NwYWNlLFxuICAgIG5hbWU6ICdTcGFjZSBUcmF2ZWxlcnMtIEh1YicsXG4gICAgbGFuZzogWydSZWFjdCcsICdSZWR1eCcsICdSb3V0ZXInLCAnSmF2YVNjcmlwdCcsICdKZXN0JywgJ1Nhc3MnXSxcbiAgICBkZW1vOiAnaHR0cHM6Ly9hcHAtc3BhY2UtdHJhdmVsZXJzLWh1Yi5uZXRsaWZ5LmFwcC8nLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvc3BhY2UtdHJhdmVsZXJzLWh1YicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTWljcm92ZXJzZSBSZWFjdCBHcm91cCBQcm9qZWN0OiBUaGlzIGVkdWNhdGlvbmFsIHByb2plY3QgaXMgdG8gYnVpbGQgYSB3ZWIgYXBwbGljYXRpb24gZm9yIGEgY29tcGFueSB0aGF0IHByb3ZpZGVzIGNvbW1lcmNpYWwgYW5kIHNjaWVudGlmaWMgc3BhY2UgdHJhdmVsIHNlcnZpY2VzLiBUaGUgYXBwbGljYXRpb24gd2lsbCBhbGxvdyB1c2VycyB0byBib29rIHJvY2tldHMgYW5kIGpvaW4gc2VsZWN0ZWQgc3BhY2UgbWlzc2lvbnMuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnQm9va3N0b3JlIENNUycsXG4gICAgaW1nOiBpbWdCb29rcyxcbiAgICBuYW1lOiAnQm9va3N0b3JlIENNUycsXG4gICAgbGFuZzogWydSZWFjdCcsICdSZWR1eCcsICdSb3V0ZXInLCAnSmF2YVNjcmlwdCcsICdKZXN0JywgJ1Nhc3MnXSxcbiAgICBkZW1vOiAnaHR0cHM6Ly9hcHAtYm9va3N0b3JlLWNtcy5uZXRsaWZ5LmFwcC8nLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvYm9va3N0b3JlJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdNaWNyb3ZlcnNlIE1vZHVsZSAwMyBQcm9qZWN0OiBUaGlzIGVkdWNhdGlvbmFsIHByb2plY3QgaXMgc2ltaWxhciB0byB0aGUgXCJBd2Vzb21lIEJvb2tzXCIgd2Vic2l0ZS4gSXQgaXMgYSBNVlAgdmVyc2lvbiBvZiBpdCB0aGF0IGFsbG93cyB5b3UgdG8gZGlzcGxheSBhIGxpc3Qgb2YgYm9va3MsIGFkZCBhIGJvb2sgYW5kIHJlbW92ZSBhIHNlbGVjdGVkIGJvb2suJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnTWF0aCBNYWdpY2lhbnMnLFxuICAgIGltZzogaW1nTWF0aCxcbiAgICBuYW1lOiAnTWF0aCBNYWdpY2lhbnMnLFxuICAgIGxhbmc6IFsnUmVhY3QnLCAnUm91dGVyJywgJ0phdmFTY3JpcHQnLCAnSmVzdCcsICdTYXNzJywgJ0xpbnRlcnMnXSxcbiAgICBkZW1vOiAnaHR0cHM6Ly9hcHAtbWF0aC1tYWdpY2lhbnMubmV0bGlmeS5hcHAvJyxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL21hdGgtbWFnaWNpYW5zJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdNaWNyb3ZlcnNlIE1vZHVsZSAwMyBQcm9qZWN0OiBcIk1hdGggTWFnaWNpYW5zXCIgaXMgYSB3ZWJzaXRlIGZvciBhbGwgZmFucyBvZiBtYXRoZW1hdGljcy4gSXQgaXMgYSBTaW5nbGUgUGFnZSBBcHAgKFNQQSkgdGhhdCBhbGxvd3MgdXNlcnMgdG8gbWFrZSBhIHNpbXBsZSBjYWxjdWxhdGlvbnMgYW5kIHJlYWQgYSByYW5kb20gbWF0aC1yZWxhdGVkIHF1b3RlLicsXG4gIH0sXG4gIHtcbiAgICBoMzogJ1RvLURvIExpc3QnLFxuICAgIGltZzogaW1nVG9kbyxcbiAgICBuYW1lOiAnVG8tRG8gTGlzdCBBcHAnLFxuICAgIGxhbmc6IFsnV2VicGFjaycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnLCAnU2FzcycsICdIVE1MJywgJ0plc3QnXSxcbiAgICBkZW1vOiAnaHR0cHM6Ly9tYXZlcmlja3MtZGIuZ2l0aHViLmlvL3RvZG8tbGlzdC9kaXN0L2luZGV4Lmh0bWwnLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvdG9kby1saXN0JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUaGlzIGlzIGFuIGVkdWNhdGlvbmFsIHByb2plY3QgdG8gbWFrZSBhIHRvb2wgdGhhdCBoZWxwcyB0byBvcmdhbml6ZSB5b3VyIGRheS4gSXQgc2ltcGx5IGxpc3RzIHRoZSB0aGluZ3MgdGhhdCB5b3UgbmVlZCB0byBkbyBhbmQgYWxsb3dzIHlvdSB0byBtYXJrIHRoZW0gYXMgY29tcGxldGUuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnTGVhZGVyYm9hcmQnLFxuICAgIGltZzogaW1nTGRiLFxuICAgIG5hbWU6ICdMZWFkZXJib2FyZCBBcHAnLFxuICAgIGxhbmc6IFsnV2VicGFjaycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnLCAnQVBJJywgJ1Nhc3MnLCAnSmVzdCddLFxuICAgIGRlbW86ICdodHRwczovL21hdmVyaWNrcy1kYi5naXRodWIuaW8vbGVhZGVyYm9hcmQvZGlzdC9pbmRleC5odG1sJyxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL2xlYWRlcmJvYXJkJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUaGlzIGlzIGFuIGVkdWNhdGlvbmFsIHByb2plY3QgdG8gY3JlYXRlIGEgd2Vic2l0ZSB3aGljaCBkaXNwbGF5cyBzY29yZXMgc3VibWl0dGVkIGJ5IGRpZmZlcmVudCBwbGF5ZXJzLiBJdCBhbHNvIGFsbG93cyB5b3UgdG8gc3VibWl0IHlvdXIgc2NvcmUuIEFsbCBkYXRhIGlzIHByZXNlcnZlZCB0aGFua3MgdG8gdGhlIGV4dGVybmFsIExlYWRlcmJvYXJkIEFQSSBTZXJ2aWNlLicsXG4gIH0sXG4gIHtcbiAgICBoMzogJ0F3ZXNvbWUgQm9va3MnLFxuICAgIGltZzogbW9ja0F3ZSxcbiAgICBuYW1lOiAnQXdlc29tZSBCb29rcycsXG4gICAgbGFuZzogW1xuICAgICAgJ0phdmFTY3JpcHQnLFxuICAgICAgJ0xpbnRlcnMnLFxuICAgICAgJ0hUTUwnLFxuICAgICAgJ1Nhc3MnLFxuICAgICAgJ0plc3QnLFxuICAgICAgJ0dpdEh1YiBQYWdlcycsXG4gICAgXSxcbiAgICBkZW1vOiAnaHR0cHM6Ly9tYXZlcmlja3MtZGIuZ2l0aHViLmlvL2F3ZXNvbWUtYm9va3MtRVM2LycsXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdmVyaWNrcy1kYi9hd2Vzb21lLWJvb2tzLUVTNicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVGhpcyBpcyBhbiBlZHVjYXRpb25hbCBwcm9qZWN0IHRvIG1ha2UgYSBzaW1wbGUgd2Vic2l0ZSB0aGF0IGRpc3BsYXlzIGEgbGlzdCBvZiBib29rcyBhbmQgYWxsb3dzIHlvdSB0byBhZGQgYW5kIHJlbW92ZSBib29rcyBmcm9tIHRoYXQgbGlzdC4gVGhlIGdvYWwgaXMgdG8gbWFrZSBpdCBtb3JlIG9yZ2FuaXplZCBieSB1c2luZyBtb2R1bGVzIGFuZCBwcmFjdGljZSB0aGUgRVM2IHN5bnRheC4nLFxuICB9LFxuXTtcblxuLy8gQ3JlYXRlIENhcmQgSXRlbXMgRHluYW1pY2FsbHlcbmNvbnN0IGdyaWRJdGVtID0gW107XG5jb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IFtdO1xuY29uc3QgaDMgPSBbXTtcbmNvbnN0IHVsID0gW107XG5jb25zdCBidXR0b24xID0gW107XG5jb25zdCBidXR0b24yID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgY2FyZE9iai5sZW5ndGg7IGkgKz0gMSkge1xuICBncmlkSXRlbVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBncmlkSXRlbVtpXS5jbGFzc0xpc3QuYWRkKCdncmlkSXRlbScpO1xuICBncmlkSXRlbVtpXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y2FyZE9ialtpXS5pbWd9KWA7XG5cbiAgZGVzY3JpcHRpb25Db250YWluZXJbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXJbaV0uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25Db250YWluZXInKTtcblxuICBoM1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbnN0IGgzdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0uaDMpO1xuICBoM1tpXS5hcHBlbmQoaDN0ZXh0KTtcblxuICB1bFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IG9iaiA9IHt9O1xuICBjb25zdCBsaXN0SXRlbXMgPSBbJ2xpMCcsICdsaTEnLCAnbGkyJywgJ2xpMyddO1xuICBsaXN0SXRlbXMuZm9yRWFjaCgoZWwsIGopID0+IHtcbiAgICBvYmpbZWxdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdbal0pO1xuICAgIG9ialtlbF0uYXBwZW5kQ2hpbGQodHh0KTtcbiAgICB1bFtpXS5hcHBlbmQob2JqW2VsXSk7XG4gIH0pO1xuXG4gIGJ1dHRvbjFbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgYnV0dG9uMXRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIFByb2plY3QnKTtcbiAgYnV0dG9uMVtpXS5hcHBlbmQoYnV0dG9uMXRleHQpO1xuICBidXR0b24xW2ldLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgYnV0dG9uMVtpXS5jbGFzc0xpc3QuYWRkKCdzZWVQcm9qZWN0Jyk7XG4gIGJ1dHRvbjFbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ1NlZSBQcm9qZWN0IEJ1dHRvbicpO1xuICBidXR0b24xW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuXG4gIGJ1dHRvbjJbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgYnV0dG9uMnRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIFByb2plY3QnKTtcbiAgYnV0dG9uMltpXS5hcHBlbmQoYnV0dG9uMnRleHQpO1xuICBidXR0b24yW2ldLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgYnV0dG9uMltpXS5jbGFzc0xpc3QuYWRkKCdzZWVQcm9qZWN0RGVza3RvcCcpO1xuICBidXR0b24yW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdTZWUgUHJvamVjdCBCdXR0b24nKTtcbiAgYnV0dG9uMltpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpKTtcblxuICBkZXNjcmlwdGlvbkNvbnRhaW5lcltpXS5hcHBlbmQoaDNbaV0sIHVsW2ldLCBidXR0b24xW2ldLCBidXR0b24yW2ldKTtcbiAgZ3JpZEl0ZW1baV0uYXBwZW5kKGRlc2NyaXB0aW9uQ29udGFpbmVyW2ldKTtcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmQoZ3JpZEl0ZW1baV0pO1xufVxuXG5jb25zdCBvcGVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW5CdG4nKTtcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlQnRuJyk7XG5jb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbENvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIGdsb2JhbChldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbENvbnRhaW5lcikge1xuICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn07XG5cbm9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpO1xuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbm1vZGFsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5cbi8vIE1vYmlsZSBNb2RhbFxuY29uc3Qgc2VlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWVQcm9qZWN0Jyk7XG5cbi8vIENyZWF0ZSBkaXYgbW9iaWxlTW9kYWwgZHluYW1pY2FsbHlcbmNvbnN0IG1vYmlsZU1vZGFsID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZEl0ZW0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgbW9iaWxlTW9kYWxbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9iaWxlTW9kYWxbaV0uY2xhc3NMaXN0LmFkZCgnbW9iaWxlTW9kYWwnKTtcbiAgZ3JpZEl0ZW1baV0uYXBwZW5kKG1vYmlsZU1vZGFsW2ldKTtcbn1cblxuZnVuY3Rpb24gb3Blbk1vYmlsZU1vZGFsKGUpIHtcbiAgY29uc3QgaSA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIG1vYmlsZU1vZGFsW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjEuY2xhc3NMaXN0LmFkZCgnbW9iaWxlTUNDb250YWluZXInKTtcblxuICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZzEuY2xhc3NMaXN0LmFkZCgnY2xvc2VNb2JpbGUnKTtcbiAgaW1nMS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNsb3NlKTtcbiAgZnVuY3Rpb24gY2xvc2VNb2JpbGVNb2RhbCgpIHtcbiAgICBtb2JpbGVNb2RhbFtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRpdjEucmVtb3ZlKCk7XG4gIH1cbiAgaW1nMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9iaWxlTW9kYWwpO1xuXG4gIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SW1nTW9iaWxlJyk7XG4gIGltZzIuc2V0QXR0cmlidXRlKCdzcmMnLCBjYXJkT2JqW2ldLmltZyk7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWUnKTtcbiAgaDIuaW5uZXJIVE1MID0gY2FyZE9ialtpXS5uYW1lO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3Qgb2JqID0ge307XG4gIGNvbnN0IGxpc3RJdGVtcyA9IFsnbGkwJywgJ2xpMScsICdsaTInXTtcbiAgbGlzdEl0ZW1zLmZvckVhY2goKGVsLCBqKSA9PiB7XG4gICAgb2JqW2VsXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgdHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nW2pdKTtcbiAgICBvYmpbZWxdLmFwcGVuZENoaWxkKHR4dCk7XG4gICAgdWwuYXBwZW5kKG9ialtlbF0pO1xuICB9KTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3REZXNjcmlwdGlvbicpO1xuICBwLmlubmVyVGV4dCA9IGNhcmRPYmpbaV0uZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lck1vYmlsZScpO1xuICBjb25zdCBhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTEuY2xhc3NMaXN0LmFkZCgnbGl2ZUJ0bicpO1xuICBjb25zdCBsaW5rYTEgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIExpdmUnKTtcbiAgYTEuYXBwZW5kQ2hpbGQobGlua2ExKTtcbiAgYTEuaHJlZiA9IGNhcmRPYmpbaV0ubGl2ZTtcbiAgY29uc3QgaW1nYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nYTEuc2V0QXR0cmlidXRlKCdzcmMnLCBsaXZlKTtcbiAgYTEuYXBwZW5kQ2hpbGQoaW1nYTEpO1xuXG4gIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMi5jbGFzc0xpc3QuYWRkKCdzcmNCdG4nKTtcbiAgY29uc3QgbGlua2EyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBTb3VyY2UnKTtcbiAgYTIuYXBwZW5kQ2hpbGQobGlua2EyKTtcbiAgYTIuaHJlZiA9IGNhcmRPYmpbaV0uc291cmNlO1xuICBjb25zdCBpbWdhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdhMi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZSk7XG4gIGEyLmFwcGVuZENoaWxkKGltZ2EyKTtcblxuICBkaXYxLmFwcGVuZChpbWcxLCBpbWcyLCBoMiwgdWwsIHApO1xuICBkaXYyLmFwcGVuZChhMSwgYTIpO1xuICBkaXYxLmFwcGVuZENoaWxkKGRpdjIpO1xuICBtb2JpbGVNb2RhbFtpXS5hcHBlbmRDaGlsZChkaXYxKTtcbn1cblxuc2VlUHJvamVjdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9iaWxlTW9kYWwpO1xufSk7XG5cbi8vIERlc2t0b3AgTW9kYWxcbmNvbnN0IHNlZVByb2plY3REZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlZVByb2plY3REZXNrdG9wJyk7XG5jb25zdCBkZXNrdG9wTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVza3RvcE1vZGFsJyk7XG5cbmZ1bmN0aW9uIG9wZW5EZXNrdG9wTW9kYWwoZSkge1xuICBjb25zdCBpID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgZGVza3RvcE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2MS5jbGFzc0xpc3QuYWRkKCdkZXNrdG9wTUNDb250YWluZXInKTtcblxuICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZzEuY2xhc3NMaXN0LmFkZCgnY2xvc2VEZXNrdG9wJyk7XG4gIGltZzEuc2V0QXR0cmlidXRlKCdzcmMnLCBjbG9zZSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2JpbGVNb2RhbCgpIHtcbiAgICBkZXNrdG9wTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkaXYxLnJlbW92ZSgpO1xuICB9XG5cbiAgaW1nMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9iaWxlTW9kYWwpO1xuXG4gIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SW1nRGVza3RvcCcpO1xuICBpbWcyLnNldEF0dHJpYnV0ZSgnc3JjJywgY2FyZE9ialtpXS5pbWcpO1xuXG4gIGNvbnN0IGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2My5jbGFzc0xpc3QuYWRkKCdkZXNrdG9wTW9kYWxIZWFkbGluZScpO1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWVEZXNrdG9wJyk7XG4gIGgyLmlubmVySFRNTCA9IGNhcmRPYmpbaV0ubmFtZTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgY29uc3Qgb2JqID0ge307XG4gIGNvbnN0IGxpc3RJdGVtcyA9IFsnbGkwJywgJ2xpMScsICdsaTInLCAnbGkzJywgJ2xpNCcsICdsaTUnXTtcbiAgbGlzdEl0ZW1zLmZvckVhY2goKGVsLCBqKSA9PiB7XG4gICAgb2JqW2VsXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgdHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nW2pdKTtcbiAgICBvYmpbZWxdLmFwcGVuZENoaWxkKHR4dCk7XG4gICAgdWwuYXBwZW5kKG9ialtlbF0pO1xuICB9KTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3REZXNjcmlwdGlvbkRlc2t0b3AnKTtcbiAgcC5pbm5lclRleHQgPSBjYXJkT2JqW2ldLmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXJEZXNrdG9wJyk7XG5cbiAgY29uc3QgYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGExLmNsYXNzTGlzdC5hZGQoJ2xpdmVCdG5EZXNrdG9wJyk7XG5cbiAgY29uc3QgbGlua2ExID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBMaXZlJyk7XG4gIGExLmFwcGVuZENoaWxkKGxpbmthMSk7XG4gIGExLmhyZWYgPSBjYXJkT2JqW2ldLmRlbW87XG5cbiAgY29uc3QgaW1nYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nYTEuc2V0QXR0cmlidXRlKCdzcmMnLCBsaXZlKTtcbiAgYTEuYXBwZW5kQ2hpbGQoaW1nYTEpO1xuXG4gIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMi5jbGFzc0xpc3QuYWRkKCdzcmNCdG5EZXNrdG9wJyk7XG5cbiAgY29uc3QgbGlua2EyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBTb3VyY2UnKTtcbiAgYTIuYXBwZW5kQ2hpbGQobGlua2EyKTtcbiAgYTIuaHJlZiA9IGNhcmRPYmpbaV0uc291cmNlO1xuXG4gIGNvbnN0IGltZ2EyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ2EyLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlKTtcbiAgYTIuYXBwZW5kQ2hpbGQoaW1nYTIpO1xuICBkaXYxLmFwcGVuZChpbWcxLCBpbWcyKTtcbiAgZGl2My5hcHBlbmRDaGlsZChoMik7XG4gIGRpdjEuYXBwZW5kKGRpdjMsIHVsLCBwKTtcbiAgZGl2Mi5hcHBlbmQoYTEsIGEyKTtcbiAgZGl2My5hcHBlbmRDaGlsZChkaXYyKTtcbiAgZGVza3RvcE1vZGFsLmFwcGVuZENoaWxkKGRpdjEpO1xufVxuXG5zZWVQcm9qZWN0RGVza3RvcC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRGVza3RvcE1vZGFsKTtcbn0pO1xuXG4vLyBGb3JtIFZhbGlkYXRpb24gLSBNb2JpbGVcbmNvbnN0IGZvcm1Nb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybU1vYmlsZScpO1xuY29uc3QgbmFtZUlucHV0TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWVJbnB1dE1vYmlsZScpO1xuY29uc3QgZW1haWxJbnB1dE1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbElucHV0TW9iaWxlJyk7XG5jb25zdCBtZXNzYWdlSW5wdXRNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZUlucHV0TW9iaWxlJyk7XG5jb25zdCBzdWJtaXRCdG5Nb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnRuTW9iaWxlJyk7XG5sZXQgaXNGb3JtVmFsaWQgPSBmYWxzZTtcblxuLy8gTG9jYWwgU3RvcmFnZSAtIE1vYmlsZSAmIERlc2t0b3BcbmxldCBmb3JtT2JqID0ge1xuICBmdWxsTmFtZU1vYmlsZTogJycsXG4gIGVtYWlsTW9iaWxlOiAnJyxcbiAgbWVzc2FnZU1vYmlsZTogJycsXG4gIGZpcnN0TmFtZTogJycsXG4gIGxhc3ROYW1lOiAnJyxcbiAgZW1haWxEZXNrdG9wOiAnJyxcbiAgbWVzc2FnZURlc2t0b3A6ICcnLFxufTtcblxuZnVuY3Rpb24gc3RvcmVJbmxTKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlEYXRhJywgSlNPTi5zdHJpbmdpZnkoZm9ybU9iaikpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0aW9uKCkge1xuICBjb25zdCBzdHIgPSBlbWFpbElucHV0TW9iaWxlLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgcmVnRXggPSAvW0EtWl0vZztcbiAgaWYgKHJlZ0V4LnRlc3Qoc3RyKSkge1xuICAgIHN1Ym1pdEJ0bk1vYmlsZS5zZXRDdXN0b21WYWxpZGl0eShcbiAgICAgICdTb3JyeSwgdGhpcyBmb3JtIGhhcyBub3QgYmVlbiBzdWJtaXR0ZWQuIFRoZSBjb250ZW50IG9mIHRoZSBlbWFpbCBmaWVsZCBoYXMgdG8gYmUgaW4gbG93ZXIgY2FzZS4gXFxuIFBsZWFzZSBjaGVjayB5b3VyIGlucHV0cyBhbmQgcmVsb2FkIHRoZSBwYWdlJyxcbiAgICApO1xuICAgIHN1Ym1pdEJ0bk1vYmlsZS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XG4gICAgc3RvcmVJbmxTKCk7XG4gIH0gZWxzZSB7XG4gICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBpc0Zvcm1WYWxpZDtcbn1cblxuZm9ybU1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHZhbGlkYXRpb24oKTtcbiAgaWYgKGlzRm9ybVZhbGlkKSB7XG4gICAgc3VibWl0QnRuTW9iaWxlLnNldEN1c3RvbVZhbGlkaXR5KFxuICAgICAgJ1RoZSBmb3JtIGhhcyBiZWVuIHN1Ym1pdHRlZC4gXFxuIFRoYW5rIHlvdSBmb3IgY29udGFjdGluZyBtZS4nLFxuICAgICk7XG4gICAgc3VibWl0QnRuTW9iaWxlLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgZm9ybU1vYmlsZS5zdWJtaXQoKTtcbiAgfVxufSk7XG5cbi8vIEZvcm0gVmFsaWRhdGlvbiAtIERlc2t0b3BcbmNvbnN0IGZvcm1EZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1EZXNrdG9wJyk7XG5jb25zdCBuYW1lSW5wdXREZXNrdG9wMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lSW5wdXREZXNrdG9wMScpO1xuY29uc3QgbmFtZUlucHV0RGVza3RvcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZUlucHV0RGVza3RvcDInKTtcbmNvbnN0IGVtYWlsSW5wdXREZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsSW5wdXREZXNrdG9wJyk7XG5jb25zdCBtZXNzYWdlSW5wdXREZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2VJbnB1dERlc2t0b3AnKTtcbmNvbnN0IHN1Ym1pdEJ0bkRlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnRuRGVza3RvcCcpO1xuXG5mdW5jdGlvbiB2YWxpZGF0aW9uRGVza3RvcCgpIHtcbiAgY29uc3Qgc3RyID0gZW1haWxJbnB1dERlc2t0b3AudmFsdWUudHJpbSgpO1xuICBjb25zdCByZWdFeCA9IC9bQS1aXS9nO1xuICBpZiAocmVnRXgudGVzdChzdHIpKSB7XG4gICAgc3VibWl0QnRuRGVza3RvcC5zZXRDdXN0b21WYWxpZGl0eShcbiAgICAgICdTb3JyeSwgdGhpcyBmb3JtIGhhcyBub3QgYmVlbiBzdWJtaXR0ZWQuIFRoZSBjb250ZW50IG9mIHRoZSBlbWFpbCBmaWVsZCBoYXMgdG8gYmUgaW4gbG93ZXIgY2FzZS4gXFxuIFBsZWFzZSBjaGVjayB5b3VyIGlucHV0cyBhbmQgcmVsb2FkIHRoZSBwYWdlLicsXG4gICAgKTtcbiAgICBzdWJtaXRCdG5EZXNrdG9wLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcbiAgICBzdG9yZUlubFMoKTtcbiAgfSBlbHNlIHtcbiAgICBpc0Zvcm1WYWxpZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGlzRm9ybVZhbGlkO1xufVxuXG5mb3JtRGVza3RvcC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHZhbGlkYXRpb25EZXNrdG9wKCk7XG4gIGlmIChpc0Zvcm1WYWxpZCkge1xuICAgIHN1Ym1pdEJ0bkRlc2t0b3Auc2V0Q3VzdG9tVmFsaWRpdHkoXG4gICAgICAnVGhlIGZvcm0gaGFzIGJlZW4gc3VibWl0dGVkLiBcXG4gVGhhbmsgeW91IGZvciBjb250YWN0aW5nIG1lLicsXG4gICAgKTtcbiAgICBzdWJtaXRCdG5EZXNrdG9wLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgZm9ybURlc2t0b3Auc3VibWl0KCk7XG4gIH1cbn0pO1xuXG4vLyBMb2NhbCBTdG9yYWdlIC0gTW9iaWxlICYgRGVza3RvcFxuY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZvcm1PYmopO1xuZnVuY3Rpb24gc3RvcmVJdGVtKGUpIHtcbiAgY29uc3Qga2V5TnVtID0ga2V5cy5pbmRleE9mKGUudGFyZ2V0Lm5hbWUpO1xuICBmb3JtT2JqW2tleXNba2V5TnVtXV0gPSBlLnRhcmdldC52YWx1ZTtcbn1cblxubmFtZUlucHV0TW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbmVtYWlsSW5wdXRNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xubWVzc2FnZUlucHV0TW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbm5hbWVJbnB1dERlc2t0b3AxLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbm5hbWVJbnB1dERlc2t0b3AyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbmVtYWlsSW5wdXREZXNrdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbm1lc3NhZ2VJbnB1dERlc2t0b3AuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xuXG5mdW5jdGlvbiBwbGFjZUl0ZW1zKCkge1xuICBuYW1lSW5wdXRNb2JpbGUudmFsdWUgPSBmb3JtT2JqLmZ1bGxOYW1lTW9iaWxlO1xuICBlbWFpbElucHV0TW9iaWxlLnZhbHVlID0gZm9ybU9iai5lbWFpbE1vYmlsZTtcbiAgbWVzc2FnZUlucHV0TW9iaWxlLnZhbHVlID0gZm9ybU9iai5tZXNzYWdlTW9iaWxlO1xuICBuYW1lSW5wdXREZXNrdG9wMS52YWx1ZSA9IGZvcm1PYmouZmlyc3ROYW1lO1xuICBuYW1lSW5wdXREZXNrdG9wMi52YWx1ZSA9IGZvcm1PYmoubGFzdE5hbWU7XG4gIGVtYWlsSW5wdXREZXNrdG9wLnZhbHVlID0gZm9ybU9iai5lbWFpbERlc2t0b3A7XG4gIG1lc3NhZ2VJbnB1dERlc2t0b3AudmFsdWUgPSBmb3JtT2JqLm1lc3NhZ2VEZXNrdG9wO1xufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gcmV0cmlldmUoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlEYXRhJykpIHtcbiAgICBmb3JtT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlEYXRhJykpO1xuICAgIHBsYWNlSXRlbXMoKTtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==