const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ul = [];
for (const ingridient of ingredients) {
	const li = document.createElement("li");
	li.innerText = ingridient;
	li.classList.add("item");
	ul.push(li);
}

document.querySelector("ul#ingredients").append(...ul);
