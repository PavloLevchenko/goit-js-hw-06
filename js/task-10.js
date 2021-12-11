function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createButton = document.querySelector("#controls button[data-create]");
const destroyButton = document.querySelector("#controls button[data-destroy]");
const input = document.querySelector("#controls input");
const box = document.querySelector("div#boxes");

function createBoxes(amount) {
	destroyBoxes();
	const divs = [];
	const width = 30;
	const height = 30;
	for (let i = 0; i < amount; i += 1) {
		const color = getRandomHexColor();
		const div = document.createElement("div");
		div.style = `width:${width + 10 * i}px; height:${height + 10 * i}px; background-color:${color};`;
		divs.push(div);
	}
	box.append(...divs);
}

function destroyBoxes() {
	while (box.firstChild) {
		box.removeChild(box.firstChild);
	}
}

createButton.addEventListener("click", function () {
	createBoxes(input.value);
});
destroyButton.addEventListener("click", destroyBoxes);
