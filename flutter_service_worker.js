'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "94a9048b0f90fca3af070c1a8cd445ee",
"assets/AssetManifest.bin.json": "6eec9d707e25403572fe1e6705cadcbf",
"assets/assets/brand/logo_carre.png": "aa0ef8415c74105c6ada23cdcb696aa7",
"assets/assets/brand/logo_wizwedge.png": "938e6aa8f604cda37fedfad8aa255e6a",
"assets/assets/content/articles.json": "ca63a1f058174b7e10417e81182954dd",
"assets/assets/content/catalog.json": "d87cb55dfc5c7a62365b37a89201c915",
"assets/assets/fonts/Barlow-Bold.ttf": "6cbe034ff9c2bbad5a1e57a27a400a5d",
"assets/assets/fonts/Barlow-ExtraBold.ttf": "3c2563412bdf6ca51d25d5a135e7b62f",
"assets/assets/fonts/Barlow-Italic.ttf": "91902124b2fb364546629dafef03251f",
"assets/assets/fonts/Barlow-Medium.ttf": "e0c9bb7cbba9be2f4e16f5b2ecc04b9b",
"assets/assets/fonts/Barlow-Regular.ttf": "90af7baeeb14e5434bc8ea30bc25d340",
"assets/assets/fonts/Barlow-SemiBold.ttf": "e1f2fbfbe3cc8b18508d1fffe5e14f76",
"assets/assets/fonts/BarlowCondensed-Bold.ttf": "f599739e94768bec57f6899c422a5119",
"assets/assets/fonts/BarlowCondensed-SemiBold.ttf": "277d45807d4566da72975d342276bfa9",
"assets/assets/images/concept/architecture.png": "723c1bd5df368b49ecb542f19ff5c832",
"assets/assets/images/concept/athletes.jpg": "bc9527bd8eb1e180d0eff778a11d6b79",
"assets/assets/images/concept/chaussure_coupe.png": "c9a2d7dd993f40a81ab28d12759f8e6e",
"assets/assets/images/concept/eclate.png": "f4be338a3dc263d254c27c6cb7ff2d3f",
"assets/assets/images/concept/labo_essai.jpg": "ab0d4f8ebdc324dae1f7bf8929b25b9b",
"assets/assets/images/concept/labo_modelisation.jpg": "a35f4dd847db5e411bbcc5b70fb7bdcf",
"assets/assets/images/concept/lame_dynamique.png": "f5a0db3244b14bd81ff37154c86f18ba",
"assets/assets/images/concept/mise_en_place.png": "29da58e712649931c0d4eaea734e4556",
"assets/assets/images/concept/simulation.jpg": "f76b04510dd94767782218ff964b473f",
"assets/assets/images/concept/wedgebox.png": "20c8833108fcfd24fe503b8becc4b0f5",
"assets/assets/images/pathologies/aponevrosite_plantaire.jpg": "bac1eb92e6a332f17501764a8029a1a2",
"assets/assets/images/pathologies/coxarthrose.jpg": "aa7b6c8240c567f47db917fa99478e7c",
"assets/assets/images/pathologies/douleurs_lombaires.jpg": "b5a9c62134b446720fab6f2245d43f3b",
"assets/assets/images/pathologies/douleurs_musculaires.jpg": "b4cefb63f4b2d09357ff76f38116913c",
"assets/assets/images/pathologies/entorse_cheville.jpg": "8355f262d9a587fe646fe4992eb24136",
"assets/assets/images/pathologies/ligaments_croises.jpg": "845b985260f9714c12ba315a62dfd8c9",
"assets/assets/images/pathologies/tendinopathie_achille.jpg": "6c627d905283c47c4e169242ecec879c",
"assets/assets/images/terrains/bitume.png": "ccb3a84b434def05d3afd5ef8daf3537",
"assets/assets/images/terrains/gazon.png": "a078d6be48b9bbc795b862f791efc814",
"assets/assets/images/terrains/piste.png": "6299f4db88e1343f9aea14e6d8ee8616",
"assets/assets/images/terrains/terre.png": "be395ac427a2e64d9b456dec9f646e5f",
"assets/assets/images/wedges/icone_amorti.png": "04d20ce3da0288055cfa66124d415c7e",
"assets/assets/images/wedges/icone_dynamique.png": "ad3a8f07195ade64c56db85c39907c2d",
"assets/assets/images/wedges/icone_medium.png": "3dea9f4017f01a4cf3511734cfa6114a",
"assets/assets/images/wedges/top_amorti.png": "e4237de4ebeaa033d2375da22eb210bf",
"assets/assets/images/wedges/top_dynamique.png": "cc5dbc39c9ea6f8404b375be2267372e",
"assets/assets/images/wedges/top_medium.png": "b34b82a7b8c694b32b6956cc2f5f54c5",
"assets/assets/images/wedges/wedge_amorti.png": "8b602a6bf70092f4c4fa4a0c6a5cf379",
"assets/assets/images/wedges/wedge_dynamique.png": "0ed024297bc633baebbda2ea01f04bec",
"assets/assets/images/wedges/wedge_medium.png": "fa25219bf6b615125cce13a96de1ab90",
"assets/FontManifest.json": "653672fc79eb74850cf7b19de85521da",
"assets/fonts/MaterialIcons-Regular.otf": "08d327bb3003857c72dfaf0afa8e84b4",
"assets/NOTICES": "a18116fe53f410ff5a955f5bc966384f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "28f611cafb2a32cde28190c3fbbd6cba",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "c93400e08b17df39ba6961e7ac31ac72",
"icons/Icon-192.png": "9249c1c2fcdfe167408f10bbc2c7b2cb",
"icons/Icon-512.png": "1f854f95f1392f9ec766f37b2560802f",
"icons/Icon-maskable-192.png": "5ed51ad7b36b7ade3fe01f4bd5d0d69b",
"icons/Icon-maskable-512.png": "bc71170dc6f19afb10f9dda4764556d6",
"index.html": "3e24815fe8e2b593da9366c3a7b73684",
"/": "3e24815fe8e2b593da9366c3a7b73684",
"installer.html": "c68be0a8ae2f95cf8abb72d8e8f4aac9",
"logo.png": "09390aec99398d3bbd3cc292b6b102f5",
"main.dart.js": "a18b9cff1f21c1b59cc2a1ebcc6ffb2b",
"manifest.json": "2f690adf4d27ea6d46af5a6ec29441fc",
"version.json": "5817ebf6924f15e2cbcf732172c03547"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
