let input = document.querySelector('#validation-input');
const length = Number.parseInt(input.dataset.length);
input.addEventListener('blur', () => {

    if (input.value.length === length) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
        input.classList.add('invalid');
        input.classList.remove('valid');
       
    }
  
})