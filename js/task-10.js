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

let amount = inputNumber.addEventListener('input', (event) => {
   return   event.currentTarget.value;
     
  });
console.log(amount);

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  for (let index = 1; index <= amount; index++) {
    const createDivElement = document.createElement('div');
    createDivElement.style.width = width + "px";
    createDivElement.style.height = height + "px";
    createDivElement.style.backgroundColor = getRandomHexColor();
    width += 10;
    height += 10;

    console.log(createDivElement);
    boxes.append(createDivElement);
  }

}

btnCreate.addEventListener('click', createBoxes);