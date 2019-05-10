var inputsForm = document.querySelectorAll('.form input');
var textareaForm = document.querySelector('.form .textarea');
var submitForm = document.querySelector('.form__button');
var modalFail = document.querySelector('.modal--fail');
var modalSuccess = document.querySelector('.modal--success');
var closeFormFail = document.querySelector('.modal__button--fail')
var closeFormSuccess = document.querySelector('.modal__button--success');

submitForm.addEventListener('click', function(evt) {
  for (var j = 0; j < inputsForm.length; j++) {
    if (!inputsForm.value && !textareaForm.value) {
      evt.preventDefault();
      modalFail.classList.add('modal--shown');
    } else {
      modalSuccess.classList.add('modal--shown');
      evt.preventDefault();
    }
  }
});

closeFormFail.onclick = function() {
  modalFail.classList.remove('modal--shown')
};

closeFormSuccess.onclick = function() {
  modalSuccess.classList.remove('modal--shown')
}
