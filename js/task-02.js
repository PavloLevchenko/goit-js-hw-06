const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ul = ingredients.map(ingridient => {
	const li = document.createElement("li");
	li.innerText = ingridient;
	li.classList.add("item");
	return li;
});

document.querySelector("ul#ingredients").append(...ul);
