function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const colorBtn = document.querySelector(`.change-color`);
const colorText = document.querySelector(`.color`);
const bodyEl = document.querySelector(`body`);

colorBtn.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  colorText.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
}