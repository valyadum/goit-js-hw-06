let input = document.querySelector('#font-size-control')
let text = document.querySelector('#text');
input.addEventListener('input', changeFontSize);
function changeFontSize() {
    text.style.fontSize = input.value + 'px';
}
changeFontSize();