let counterValue = 0;
const calc = document.querySelector('#value');


const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const reduceBtnClick = decrementBtn.addEventListener("click", () => { // reduce -це зменшити
    
    console.log(-1);
    counterValue -= 1;
 calc.textContent = counterValue;
});
const increaseBtnClick = incrementBtn.addEventListener("click", () => {
    console.log(+1);
    console.log(calc.textContent)
     counterValue += 1;
    calc.textContent = counterValue;
});
