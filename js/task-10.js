function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createButton = document.querySelector("#controls button[data-create]");
const destroyButton = document.querySelector("#controls button[data-destroy]");
const input = document.querySelector("#controls input");
const box = document.querySelector("div#boxes");

function createBoxes(amount) {
	//destroyBoxes();
	const divs = [];
	const width = 30;
	const height = 30;

	for (let i = 0; i < amount; i += 1) {
		const color = getRandomHexColor();
		const div = document.createElement("div");
		let sizeI = i + box.childNodes.length;
		div.style = `width:${width + 10 * sizeI}px; height:${height + 10 * sizeI}px; background-color:${color};`;
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
	const number = Number.parseInt(input.value);
	input.value = "";
	createBoxes(number);
});
destroyButton.addEventListener("click", destroyBoxes);
