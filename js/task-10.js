function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector('input');
//inputNumber.classList.add('number');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
const step = Number.parseInt(inputNumber.step);
const minNumber = Number.parseInt(inputNumber.min);
const maxNumber = Number.parseInt(inputNumber.max);
let amount = 0;


function createBoxes(amount) {
  const colorBoxArr = [];
  let width = 30;
  let height = 30;
  amount = inputNumber.value;
  if (amount >= minNumber && amount <= maxNumber) {
    for (let index = 1; index <= amount; index += step) {
      const createDivElement = document.createElement('div');
      createDivElement.classList.add("colorBox");
      createDivElement.style.width = width + "px";
      createDivElement.style.height = height + "px";
      createDivElement.style.backgroundColor = getRandomHexColor();
      width += 10;
      height += 10;
      colorBoxArr.push(createDivElement);
      
      //boxes.append(createDivElement);
    }
    console.log(colorBoxArr);
    boxes.append(...colorBoxArr);
    return;
  }
  alert('Введено значення яке не відповідає вимогам!');
}



const divBox = document.querySelectorAll('.colorBox');
function destroyBoxes() {  //нажаль не знаю як вірно очистити
  inputNumber.textContent = ('');
  divBox.remove();
}
btnCreate.addEventListener('click', createBoxes);
btnCreate.addEventListener('click', destroyBoxes);