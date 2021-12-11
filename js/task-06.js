const input = document.querySelector("input[data-length]");
const blur = event => {
	if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
		event.currentTarget.classList.add("valid");
	} else {
		event.currentTarget.classList.add("invalid");
	}
};
input.addEventListener("blur", blur);
