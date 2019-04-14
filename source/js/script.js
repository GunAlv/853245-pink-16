var menuBtn = document.querySelector('.nav__toggle');
var menu = document.querySelector('.nav__container');
var headerTop = document.querySelector('.page-header__top');

menuBtn.addEventListener('click', function() {
  menu.classList.toggle('nav__container--opened');
  this.classList.toggle('nav__toggle--opened');
  headerTop.classList.toggle('page-header__top--opened');
})
