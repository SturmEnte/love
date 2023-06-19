document.getElementById("heart").onclick = () => setSettings(true);
if (!localStorage.getItem("date") || !localStorage.getItem("names")) setSettings(true);
else updateValues();

function updateValues() {
	const nameElem = document.getElementById("names");
	const dateElem = document.getElementById("date");
	const daysElem = document.getElementById("days");
	const weeksElem = document.getElementById("weeks");
	const monthsElem = document.getElementById("months");
	const yearsElem = document.getElementById("years");

	nameElem.innerText = localStorage.getItem("names");

	const date = new Date(Number(localStorage.getItem("date")));

	dateElem.innerText = date.getDate().toString().padStart(2, "0") + "." + (date.getMonth() + 1).toString().padStart(2, "0") + "." + date.getFullYear();

	const diffTime = Math.abs(new Date() - date);
	daysElem.innerText = Math.round(diffTime / (1000 * 60 * 60 * 24));
	weeksElem.innerText = Math.round(diffTime / (1000 * 60 * 60 * 24) / 7);
	monthsElem.innerText = (new Date().getFullYear() - date.getFullYear()) * 12 + (new Date().getMonth() - date.getMonth());
	yearsElem.innerText = new Date().getFullYear() - date.getFullYear();

	console.log("Updated values");
}

function setSettings(open) {
	console.log("Open settings");
}
