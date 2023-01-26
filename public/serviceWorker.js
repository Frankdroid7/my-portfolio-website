
const assets = [
  "/",
  "/index.html",
  "/portfolio.js",
  "/portfolio.css",
]


self.addEventListener("install",e=>{
    e.waitUntil(
      caches.open("static").then(cache=>{

        return cache.addAll(assets);
      })
    );
  });
  
  self.addEventListener("fetch",e=>{
    e.respondWith(
      caches.match(e.request).then(response=>{
        return response||fetch(e.request);
      })
    );
  });