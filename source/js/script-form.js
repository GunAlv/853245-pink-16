var inputsForm = document.querySelectorAll('.form input');
var inputEmail = document.getElementById('user_email');
var inputPhone = document.getElementById('phone');
var textareaForm = document.querySelector('.form .textarea');
var submitForm = document.querySelector('.form__button');
var modalFail = document.querySelector('.modal--fail');
var modalSuccess = document.querySelector('.modal--success');
var closeFormFail = document.querySelector('.modal__button--fail')
var closeFormSuccess = document.querySelector('.modal__button--success');
var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitForm.addEventListener('click', function(evt) {
  for (var j = 0; j < inputsForm.length; j++) {
    if (!inputsForm[j].value || !textareaForm.value || !inputEmail.value.match(regex) || isNaN(inputPhone.value)) {
      evt.preventDefault();
      modalFail.classList.add('modal--shown');
    } else {
      evt.preventDefault();
      modalSuccess.classList.add('modal--shown');
    }
  }
});

closeFormFail.onclick = function() {
  modalFail.classList.remove('modal--shown')
};

closeFormSuccess.onclick = function() {
  modalSuccess.classList.remove('modal--shown')
}

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27 || evt.keyCode === 13) {
    if (modalFail.classList.contains('modal--shown') || modalSucces.classList.contains('modal--shown')) {
      evt.preventDefault();
      modalFail.classList.remove('modal--shown');
      modalSuccess.classList.remove('modal--shown');
    }
  }
});
