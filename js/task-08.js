const form = document.querySelector("form.login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const inputs = event.currentTarget.elements; //требование дз
	const fields = {};
	for (const input of inputs) {
		if (input.type != "submit") {
			if (input.value == "") {
				alert("All fields must be filled!");
			} else {
				fields[input.name] = input.value;
			}
		}
	}
	console.log(fields);
	event.currentTarget.reset();
}

/* function handleSubmit(event) {
	event.preventDefault();
	const inputs = event.currentTarget.querySelectorAll("input");
	const fields = {};
	for (const input of inputs) {
		if (input.value == "") {
			alert("All fields must be filled!");
		} else {
			fields[input.name] = input.value;
		}
	}
	console.log(fields);
	event.currentTarget.reset();
} */
