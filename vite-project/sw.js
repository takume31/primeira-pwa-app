import { imageCache, warmStrategyCache } from "workbox-recipes";
import { CacheFirst, StaleWhileRevalidate } from "workbox-strategies";
import { registerRoute } from "workbox-routing";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";

const pageCache = new CacheFirst({
  cacheName: "primeira-pwa-app-cache",
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ["/", "/index.html"],
  strategy: pageCache,
});
registerRoute(({ request }) => request.mode === "navigate", pageCache);

registerRoute(
  ({ request }) => ["style","script", "worker"].includes(request.destination),
    new StaleWhileRevalidate({
      cacheName: "asset-cache",
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    })
);

let cacheName = "my-first-pwas";
let filesCache = ["/", "/index.html", "/CSS/style.css", "/js/main.js", "/manifest.json", "/html/exercicio1", "/html/exercicio2", "/html/exercicio3", "/html/exercicio5", "/html/exercicio6", "/html/exercicio7", "/html/exercicio8", "/html/exercicio9", "/html/exercicio10",
   "/images/pwa-icon-256.png", "/images/pwa-icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
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
