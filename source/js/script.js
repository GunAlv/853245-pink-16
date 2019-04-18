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
});

var reviewItems = document.querySelectorAll('.reviews__item');
var prevBtn = document.querySelector('.reviews__button--prev');
var nextBtn = document.querySelector('.reviews__button--next');
var i = 0;

prevBtn.addEventListener('click', function() {
  reviewItems[i].classList.remove('reviews__item--shown');
  i--;
  if (i < 0) {
    i = reviewItems.length - 1;
  }
  reviewItems[i].classList.add('reviews__item--shown');
});

nextBtn.addEventListener('click', function() {
  reviewItems[i].classList.remove('reviews__item--shown');
  i++;
  if (i >= reviewItems.length) {
    i = 0;
  }
  reviewItems[i].classList.add('reviews__item--shown');
});

var sliderItems = document.querySelectorAll('.slider__item');

sliderItems[0].addEventListener('click', function() {
  slider(reviewItems[1], reviewItems[2], reviewItems[0]);
});

sliderItems[1].addEventListener('click', function() {
  slider(reviewItems[0], reviewItems[2], reviewItems[1]);
});

sliderItems[2].addEventListener('click', function() {
  slider(reviewItems[1], reviewItems[0], reviewItems[2]);
});

function slider(hiddenSlide1, hiddenSlide2, shownSlide) {
  hiddenSlide1.classList.remove('reviews__item--shown');
  hiddenSlide2.classList.remove('reviews__item--shown');
  shownSlide.classList.add('reviews__item--shown');
}
