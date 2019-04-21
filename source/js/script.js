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

var reviewsSlider = document.querySelectorAll('.reviews__slider-item');

reviewsSlider[0].addEventListener('click', function() {
  slider(reviewItems[1], reviewItems[2], reviewItems[0]);
});

reviewsSlider[1].addEventListener('click', function() {
  slider(reviewItems[0], reviewItems[2], reviewItems[1]);
});

reviewsSlider[2].addEventListener('click', function() {
  slider(reviewItems[1], reviewItems[0], reviewItems[2]);
});

function slider(hiddenSlide1, hiddenSlide2, shownSlide) {
  hiddenSlide1.classList.remove('reviews__item--shown');
  hiddenSlide2.classList.remove('reviews__item--shown');
  shownSlide.classList.add('reviews__item--shown');
}

var tariffFirst = document.querySelector('.tariffs__item--first');
var tariffSecond = document.querySelector('.tariffs__item--second');
var tariffThird = document.querySelector('.tariffs__item--third');
var tariffsSlider = document.querySelectorAll('.tariffs__slider-item');

tariffsSlider[0].addEventListener('click', function() {
  tariffFirst.style = "left: 0;";
  tariffSecond.style = "left: 100%;";
  tariffThird.style = "left: 0;";
  tariffFirst.classList.add('tariffs__item--active');
  tariffSecond.classList.remove('tariffs__item--active');
  tariffThird.classList.remove('tariffs__item--active');
});

tariffsSlider[1].addEventListener('click', function() {
  tariffFirst.style = "left: -100%;";
  tariffSecond.style = "left: 0;";
  tariffThird.style = "left: 100%;";
  tariffSecond.classList.add('tariffs__item--active');
  tariffFirst.classList.remove('tariffs__item--active');
  tariffThird.classList.remove('tariffs__item--active');
});

tariffsSlider[2].addEventListener('click', function() {
  tariffFirst.style = "left: 0; opacity: 0";
  tariffSecond.style = "left: -100%;";
  tariffThird.style = "left: 0;";
  tariffThird.classList.add('tariffs__item--active');
  tariffSecond.classList.remove('tariffs__item--active');
  tariffFirst.classList.remove('tariffs__item--active');
});
