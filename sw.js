let cacheName ="my-first-pwa";
let filesCache = [ "./", "./index.html",
    "./CSS/style.css", "./js/main.js",];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesCache);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});