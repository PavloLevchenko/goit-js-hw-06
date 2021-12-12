const form = document.querySelector("form.login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const inputs = event.currentTarget.elements; //требование дз
	const fields = checkForm(inputs);
	if (fields != null) {
		console.log(fields);
		event.currentTarget.reset();
	}
}

function checkForm(inputs) {
	const fields = {};
	for (const input of inputs) {
		if (input.type != "submit") {
			if (input.value == "") {
				alert("All fields must be filled!");
				return null;
			} else {
				fields[input.name] = input.value;
			}
		}
	}
	return fields;
}
