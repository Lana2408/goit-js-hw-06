const inputEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

inputEl.addEventListener("input", updateSize);

function updateSize() {
    textEl.style.fontSize = `${inputEl.value}px`;
}

updateSize();

