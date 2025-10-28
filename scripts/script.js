const menuBtn = document.querySelector('.menuBtn');
const innerNav = document.querySelector('.innerNav');

menuBtn.addEventListener('click', () => {
  innerNav.classList.toggle('active');
})