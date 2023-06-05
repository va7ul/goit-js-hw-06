let valueEl = document.querySelector('#value');
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

increment.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});

decrement.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});