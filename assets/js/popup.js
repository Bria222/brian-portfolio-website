// Main.js variables
const projectBtn = document.querySelectorAll('.project-button');
// Dynamic modal js functions

// object element actribute generator
const addAttributes = (element, attrObj) => {
  Object.keys(attrObj).forEach((attr) => {
    if (Object.prototype.hasOwnProperty.call(attrObj, attr)) {
      element.setAttribute(attr, attrObj[attr]);
    }
  });
};
// HTML and chidl generator
const createCustomElement = (element, attributes, children) => {
  const customElement = document.createElement(element);
  if (children !== undefined) {
    children.forEach((el) => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
  }
  addAttributes(customElement, attributes);
  return customElement;
};
// Print modal-bg and modal content containers
const printModal = (content) => {
  const modalContent = createCustomElement('div', {
    id: 'modal-content',
    class: 'modal',
  }, [content]);

  const modalContainer = createCustomElement('div', {
    id: 'modal-container',
    class: 'modal-bg',
  }, [modalContent]);

  document.body.appendChild(modalContainer);
};

const modalProject = [
  {
    title: 'Tonic',
    img: 'assets/images/desktop-images/desktop-work1.png',
    description: 'A daily selection of privately perosonalized reads; no accounts or sign-ups required.',
    pageLink: 'https://github.com/Bria222/Bria222.github.io',
    sourcesLink: 'https://github.com/Bria222/Bria222.github.io',
  },
  {
    title: 'Multi-Post Stories',
    img: 'assets/images/desktop-images/desktop-work2.png',
    description: 'Experimental content creation feature that allows users toadd to an existing story over the course of a day without spamming their friends.',
    pageLink: 'https://github.com/Bria222/Bria222.github.io',
    sourcesLink: 'https://github.com/Bria222/Bria222.github.io',
  },
  {
    title: 'Facebook 360',
    img: 'assets/images/desktop-images/desktop-portfolio-image1.png',
    description: 'Exploring the future of media in Facebooks first VirtualReality app; a place to discover and enjoy 360 photos andvideos on Gear VR.',
    pageLink: 'https://github.com/Bria222/Bria222.github.io',
    sourcesLink: 'https://github.com/Bria222/Bria222.github.io',
  },
  {
    title: 'Uber Navigation',
    img: 'assets/images/desktop-images/desktop-portfolio-image2.png',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    pageLink: 'https://github.com/Bria222/Bria222.github.io',
    sourcesLink: 'https://github.com/Bria222/Bria222.github.io',
  }];
// Modal projects event
// First Modal
projectBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    printModal(`<div class="modal-header-container">
    <div class="modal-title-container">
      <h2 class="modal-title">${modalProject[index].title}</h2></div>
      <div class="modal-header-icon">
        <i id ="close-menu" class="fas fa-times"></i>
      </div>
    </div>
    <div class="modal-subtitle-container">
      <ul class="modal-mark">
        <li>
          <p>CANOPY</p>
        </li>
        <li>
          <p> <i class="fa-solid fa-circle"></i> Back End Dev</p>
        </li>
        <li>
          <p> <i class="fa-solid fa-circle"></i> 2015</p>
        </li>
      </ul>
    </div>
    <div class="modal-img" style="background-image:url(${modalProject[index].img})">
    
    </div>

    <div class="container">
    <div class="modal-description-container">
      <p class="modal-description">${modalProject[index].description}</p>
    </div>
    
    <div class="modal-skills-container">
    <ul class="modal-skills">
    <li>
     <p>html</p> 
    </li>
    <li>
      <p>css</p>
    </li>
    <li>
      <p>javascript</p>
    </li>
  </ul>
  <div class="project-underline"></div>
  <div class="modal-buttons-container">
  <div class="modal-btn">
    <a href="${modalProject[index].pageLink}">See live</a>
    <i class="fas fa-external-link-alt"></i>
  </div>
  <div class="modal-btn">
    <a href="${modalProject[index].sourcesLink}">See sources</a>
    <i class="fab fa-github"></i>
  </div>
</div>
  </div>
    </div>`);

    const modalContainer = document.querySelector('#modal-container');
    const modalRemover = document.querySelector('#close-menu');
    modalRemover.addEventListener('click', () => {
      modalContainer.remove();
    });
  });
});
