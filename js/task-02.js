const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById(`ingredients`);

const markup = ingredients.map((ingredient) => `<li>${ingredient}</li>`)
.join("");


document.body.insertAdjacentHTML("beforeend", `<ul>${markup}</ul>`);


