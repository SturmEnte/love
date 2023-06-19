document.onload = () => {
	document.getElementById("settings").onclick = () => setSettings(true);
	if (!localStorage.getItem("date") || !localStorage.getItem("names")) setSettings(true);
	else updateValues();
};

function updateValues() {
	const nameElem = document.getElementById("names");
	const dateElem = document.getElementById("date");
	const daysElem = document.getElementById("days");
	const weeksElem = document.getElementById("weeks");
	const monthsElem = document.getElementById("months");
	const yearsElem = document.getElementById("years");

	nameElem.innerText = localStorage.getItem("names");

	const date = new Date(Number(localStorage.getItem("date")));

	dateElem.innerHTML = date.getDate().toString().padStart(2, "0") + "." + (date.getMonth() + 1).toString().padStart(2, "0") + "." + date.getFullYear();

	console.log("Updated");
}

function setSettings(open) {
	console.log("Open settings");
}
