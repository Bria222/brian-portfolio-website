// get humbuger
const humbuger = document.querySelector('.humbuger');
// get navigation menu
const navMenu = document.querySelector('.nav-menu');
const closeBtn = document.getElementById('close-btn');
const header = document.querySelector('.mobile-nav');

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
