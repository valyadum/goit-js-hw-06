let counterValue = 0;
let calc = document.querySelector('#value');


const reduceBtn = document.querySelector('button[data-action="decrement"]');
const increaseBtn = document.querySelector('button[data-action="increment"]');
const reduceBtnClick = reduceBtn.addEventListener("click", () => {
    
    console.log(-1);
    counterValue -= 1;
    return calc.textContent = counterValue;
});
const increaseBtnClick = increaseBtn.addEventListener("click", () => {
    console.log(+1);
    console.log(calc.textContent)
     counterValue += 1;
    return calc.textContent = counterValue;
});
