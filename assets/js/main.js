// Main.js variables
const form = document.getElementById('form');
const email = document.getElementById('email');
const validationMsg = document.getElementById('validation-message');
// get humbuger
const humbuger = document.querySelector('.humbuger');
// get navigation menu
const navMenu = document.querySelector('.nav-menu');
const closeBtn = document.getElementById('close-btn');
const header = document.querySelector('.mobile-nav');
const contactBtn = document.querySelector('.contact-button');
humbuger.addEventListener('click', () => {
  humbuger.classList.add('active');
  navMenu.classList.add('active');

  // display mobile nav
  header.style.cssText = `
  background-color: rgba(96, 112, 255, 0.85);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  `;
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  humbuger.classList.remove('active');
  navMenu.classList.remove('active');
  header.style.cssText = `
    background-color: rgba(96, 112, 255, 0.85);
    position: fixed;
    top: -9999px;
    left: -9999px;
    `;
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  humbuger.classList.remove('active');
  navMenu.classList.remove('active');

  header.style.cssText = `
    background-color: rgba(96, 112, 255, 0.85);
    position: fixed;
    top: -9999px;
    left: -9999px;
    `;
}));

// Form Validation
form.addEventListener('submit', (e) => {
  const formMessage = ['Email should be in lower case', 'Submition aproved'];
  const emailAddres = email.value;
  if (emailAddres.toLowerCase() !== emailAddres) {
    e.preventDefault();
    validationMsg.classList.remove('contact-button-success-message');
    validationMsg.classList.add('contact-button-message');
    validationMsg.innerHTML = `${formMessage[0]}`;
  } 
  else {
    validationMsg.innerHTML = `${formMessage[1]}`;
    validationMsg.classList.add('contact-button-success-message');
  }
});

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (e.code === 22
      || e.code === 1014 || e.name === 'QuotaExceededError'
      || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && (storage && storage.length !== 0);
  }
}

if (storageAvailable('localStorage')) {
  const input = [form.fullname, form.email, form.message];
  input.forEach((input) => {
    input.addEventListener('input', () => {
      const objData = {
        fullname: form.fullname.value,
        email: form.email.value,
        message: form.message.value,
      };
      localStorage.setItem('data', JSON.stringify(objData));
    });
  });
  const getData = JSON.parse(localStorage.getItem('data'));

  form.fullname.value = getData.fullname;
  form.email.value = getData.email;
  form.message.value = getData.message;
}