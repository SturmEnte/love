const nameElem = document.getElementById("names");
const dateElem = document.getElementById("date");
const daysElem = document.getElementById("days");
const weeksElem = document.getElementById("weeks");
const monthsElem = document.getElementById("months");
const yearsElem = document.getElementById("years");
const popupElem = document.getElementById("popup");
const namesInElem = document.getElementById("names-input");
const dateInElem = document.getElementById("date-input");

document.getElementById("heart").onclick = () => setSettings(true);
if (!localStorage.getItem("date") || !localStorage.getItem("names")) setSettings(true);
else updateValues();

function updateValues() {
	nameElem.innerText = localStorage.getItem("names");

	const date = new Date(Number(localStorage.getItem("date")));

	dateElem.innerText = date.getDate().toString().padStart(2, "0") + "." + (date.getMonth() + 1).toString().padStart(2, "0") + "." + date.getFullYear();

	const diffTime = Math.abs(new Date() - date);
	const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
	const weeks = Math.floor(days / 7);
	const months = Math.floor(days / 30.4375); // I calculated this number by calculating how many days are in a month on average in four years
	const years = Math.floor(days / 365);

	daysElem.innerText = days;
	weeksElem.innerText = weeks;
	monthsElem.innerText = months;
	yearsElem.innerText = years;

	console.log("Updated values");
}

function setSettings(open) {
	console.log("Open settings");
}
