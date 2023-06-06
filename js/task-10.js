function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const els = {
  inputEl: document.querySelector('#controls input'),
  createBtnEl: document.querySelector('#controls button[data-create]'),
  destroyBtnEl: document.querySelector('#controls button[data-destroy]'),
  boxesFieldEl: document.querySelector('#boxes'),
};

const createBoxes = () => {
  for (let index = 0; index < els.inputEl.value; index += 1) {
    const addedBox = document.createElement("div");
    els.boxesFieldEl.append(addedBox);

    addedBox.style.backgroundColor = getRandomHexColor();
    
    let delta = 30 + 10 * index;  
    addedBox.style.width = delta +"px";
    addedBox.style.height = delta +"px";
  }
};

const removeBoxes = () => {
  els.boxesFieldEl.innerHTML = '';
  els.inputEl.value = "";
};

els.createBtnEl.addEventListener('click', createBoxes);
els.destroyBtnEl.addEventListener('click', removeBoxes);


