const submitButtonElement = document.querySelector('.agree-term-and-serv');
const formElement = document.querySelector('.main-form');
const inputsElement = document.querySelectorAll('.input');

var validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formElement.addEventListener('submit', (e) => {    
  e.preventDefault();

  //Deleting all error messages and error icons
  inputsElement.forEach((inputEl, index) => {
    inputEl.classList.remove('error-icon');
    const errorElement = document.getElementById(inputEl.id + '-error');
    errorElement.style.display = 'none';    
  });

  //checking for empty inputs and adding error messages and icons if needed
  inputsElement.forEach((inputEl, index) => {
    if(!inputEl.value){
      inputEl.classList.add('error-icon');
      const errorElement = document.getElementById(inputEl.id + '-error');
      errorElement.style.display = 'block';
    };

    //checking a valid email and adding error if is not
    if(inputEl.id === 'email-address' && !inputEl.value.match(validEmailFormat)){
      inputEl.classList.add('error-icon');
      const errorElement = document.getElementById(inputEl.id + '-error');
      errorElement.style.display = 'block';
    }
  });

});

