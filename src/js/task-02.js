const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')

ingredients.forEach(ingradient => {
  
  const list = document.createElement("li")
  list.textContent = ingradient;
  list.classList.add('item');
  ingredientsEl.append(list)
});