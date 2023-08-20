const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const ingredientArr =  ingredients.map(ingredient => {
  const itemsEl = document.createElement('li');
  itemsEl.textContent = `${ingredient}`;
  itemsEl.classList.add('item');
  console.log(itemsEl);
  return itemsEl;
  
  
})
list.append(...ingredientArr);