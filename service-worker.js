self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("bloom-app").then(cache => {
      return cache.addAll(["index.html", "manifest.json", "icono.png"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
