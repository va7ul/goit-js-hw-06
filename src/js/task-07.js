const fontSizeContolerEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const fontSizeHandler = () => {
    textEl.style.fontSize = fontSizeContolerEl.value +`Px`;
 };

fontSizeContolerEl.addEventListener('input', fontSizeHandler);
