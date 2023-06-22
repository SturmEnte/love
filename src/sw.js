self.oninstall = (e) => {
	// Install event
	console.log("Install", e);
};

self.onfetch = (e) => {
	// Fetch event
	console.log("Fetch", e);
};

self.onactivate = (e) => {
	// Activate event
	console.log("Activate", e);
};
