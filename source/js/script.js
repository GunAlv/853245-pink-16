// var menuBtn = document.querySelector('.nav__toggle');
// var menu = document.querySelector('.nav__container');
// var headerTop = document.querySelector('.page-header__top');

// headerTop.classList.remove('page-header__top--no-js');
// menu.classList.remove('nav__container--no-js');

// menuBtn.addEventListener('click', function() {
//   menu.classList.toggle('nav__container--opened');
//   this.classList.toggle('nav__toggle--opened');
//   headerTop.classList.toggle('page-header__top--opened');
// })

var header = document.querySelector('.page-header');
var menuBtn = document.querySelector('.page-header__toggle');
var menu = document.querySelector('.nav');
var headerBg = document.querySelector('.page-header__bg');

header.classList.remove('page-header--no-js');
headerBg.classList.remove('page-header__bg--no-js');
menu.classList.remove('nav--no-js');


menuBtn.addEventListener('click', function() {
  this.classList.toggle('toggle__button--opened');
  menu.classList.toggle('nav--opened');
  headerBg.classList.toggle('page-header__bg--opened');
})
