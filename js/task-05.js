const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);
nameInput.addEventListener("input", onInput);

function onInput(e) {
    const inputValue = e.target.value.trim();
    nameOutput.textContent = inputValue !== "" ? inputValue : "Anonymous";
}