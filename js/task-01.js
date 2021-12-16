const categories = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(node => {
	const title = node.querySelector("h2");
	console.log(`Category: ${title.textContent}`);
	const elements = node.querySelectorAll("ul li");
	console.log(`Elements: ${elements.length}`);
});
