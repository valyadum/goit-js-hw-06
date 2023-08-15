let input = document.querySelector('#validation-input');
input.addEventListener('blur', () => {
    console.log(input.value.length); 

    if (input.value.length >= 6) {
        input.classList.add = '.valid';
        console.log(input);
    }
})