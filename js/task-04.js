let counterValue = 0;

const btnDecrement = document.querySelector("[data-action='decrement']");
const btnIncrement = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector("#value");


function updateCounter() {
    valueEl.textContent = counterValue;
}

btnDecrement.addEventListener(`click`, function () {
    counterValue -= 1;
    updateCounter();
})

btnIncrement.addEventListener(`click`, function () {
    counterValue += 1;
    updateCounter();
})

 updateCounter();