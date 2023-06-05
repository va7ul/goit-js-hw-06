function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
const body = document.querySelector('body');

const changeColorHandler = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
};

changeColorBtn.addEventListener('click', changeColorHandler);