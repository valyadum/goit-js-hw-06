let input = document.querySelector('#font-size-control')
let text = document.querySelector('#text');
input.addEventListener('input', (event) => {  
    text.style.fontSize = event.currentTarget.value + 'px';
})