/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "img/favicon.ico",
    "revision": "f08356ea0b49281a115ee7b4a91e064b"
  },
  {
    "url": "img/profile.jpg",
    "revision": "bf0e942ee8da86f4e30e168ebafc3ed8"
  },
  {
    "url": "img/profile.webp",
    "revision": "962f648b09fbee13d03e7afb3bd60d88"
  },
  {
    "url": "index.html",
    "revision": "542b40ac13e271987af37091b1b2dba9"
  },
  {
    "url": "install-service-worker.html",
    "revision": "d8b1353c27826def6cf2a3506ae0399d"
  },
  {
    "url": "workbox-config.js",
    "revision": "5f018cab98ca096320a5ba48dd984c40"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
