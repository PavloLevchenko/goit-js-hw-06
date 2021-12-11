let counterValue = 0;
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("span#value");
const decrementClick = event => {
	counterValue -= 1;
	counter.innerText = counterValue;
};
const incrementClick = event => {
	counterValue += 1;
	counter.innerText = counterValue;
};
decrementButton.addEventListener("click", decrementClick);
incrementButton.addEventListener("click", incrementClick);
