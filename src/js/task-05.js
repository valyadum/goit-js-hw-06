let input = document.querySelector('#name-input');
let nameSpan = document.querySelector('#name-output');
nameSpan.textContent = 'Anonymous';
input.addEventListener('input', (event) => {
    nameSpan.textContent = event.currentTarget.value;
    if (event.currentTarget.value.length === 0) {
        nameSpan.textContent = 'Anonymous';
    }
})