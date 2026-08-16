const CACHE_NAME = "mara-field-guide-v2";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./images/mara.png",
    "./images/history-arch.png",
    "./images/nature-olive-lavender.png",
    "./images/food-truffle-oil-wine.png",
    "./images/sea-shell-starfish.png",
    "./images/hoopoe.png",
    "./images/fried-egg-medusa.png",
    "./icons/mara-192.png",
    "./icons/mara-512.png"
];


self.addEventListener("install", function (event) {

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(FILES_TO_CACHE);
            })
    );

});


self.addEventListener("fetch", function (event) {

    event.respondWith(
        caches.match(event.request)
            .then(function (cachedResponse) {

                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(event.request);
            })
    );

});