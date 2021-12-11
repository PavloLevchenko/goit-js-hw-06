const input = document.querySelector("input#name-input");
const span = document.querySelector("span#name-output");
const change = event => {
	if (event.currentTarget.value == "") {
		span.innerText = "Anonymous";
	} else {
		span.innerText = event.currentTarget.value;
	}
};
input.addEventListener("input", change);
