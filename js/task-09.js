 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let btn = document.querySelector('.change-color');
let spanColor = document.querySelector('.color');
let body = document.querySelector('body');

btn.addEventListener('click', changeColor)
function changeColor(el) {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}