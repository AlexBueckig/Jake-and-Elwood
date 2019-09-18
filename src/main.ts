const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');
console.log(closeButton);

closeButton.addEventListener('click', () => {
  nav.classList.remove('nav-open');
});

openButton.addEventListener('click', () => {
  nav.classList.add('nav-open');
});
