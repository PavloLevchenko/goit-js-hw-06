function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector("button.change-color");
const span = document.querySelector("span.color");

const handleClick = event => {
	const color = getRandomHexColor();
	document.querySelector("body").style = `background-color:${color};`;
	span.textContent = color;
};

button.addEventListener("click", handleClick);
