const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((items) => {
    console.log(`Category: ${items.querySelector('h2').textContent}`);
    console.log(`Elements: ${items.querySelectorAll(`li`).length}`);
});