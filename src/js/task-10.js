function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  const numberDiv = inputNumber.addEventListener('input', (event) => {
    return event.currentTarget.value;
  });
  const divArray = [];
  for (let index = 1; index <= numberDiv; index++) {
    //const element = index;
    const createDivElement = document.createElement('div');
    cre
    
  }
  
}

function destroyBoxes() {
  
}
createBoxes();