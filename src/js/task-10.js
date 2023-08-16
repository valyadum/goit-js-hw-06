function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

// function inputGetNumber() {
//   inputNumber.addEventListener('input', (event) => {
//     let amount = event.currentTarget.value;
//     return amount;
//   });
// }
// console.log(inputGetNumber());

function createBoxes(amount) {
  inputNumber.addEventListener('input', (event) => {
    let amount = event.currentTarget.value;
  })
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

btnCreate.addEventListener('click', createBoxes());