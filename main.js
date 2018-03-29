const button = document.querySelector("#button");
const input = document.querySelector("#input");
const ol = document.querySelector("ol");
const custom = document.querySelectorAll(".controls .custom");

inputLength = () => input.value.length;

createTask = () => {
	let task = document.createElement("li");
	task.appendChild(document.createTextNode(input.value));
	ol.appendChild(task);
	input.value = "";
}

button.addEventListener("click", function () {
	if ( inputLength() > 0 ) {
		createTask();
	}
})

input.addEventListener("keypress", function (event) {
	if ( inputLength() > 0 && event.which === 13 ) {
		createTask();
	}
})

function customColors() {
	document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

custom.forEach(input => input.addEventListener('change', customColors));
custom.forEach(input => input.addEventListener('mousemove', customColors));