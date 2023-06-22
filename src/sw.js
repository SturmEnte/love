const STATIC_CACHE = "STATIC-V1";

const ASSETS = ["./", "style.css", "main.js", "favicon.png", "manifest.webmanifest"];

self.oninstall = async (e) => {
	cache = await caches.open(STATIC_CACHE);
	cache.addAll(ASSETS);
};

self.onfetch = (e) => {
	e.respondWith(
		caches.match(e.request).then((res) => {
			return (
				res ||
				fetch(e.request)
					.then(async (res) => {
						return res;
					})
					.catch(() => {
						// console.log("Catch");
						// return caches.match("/404/").then((res) => {
						// 	return res;
						// });
					})
			);
		})
	);
};

// self.onactivate = (e) => {
// 	// Activate event
// 	console.log("Activate", e);
// };
