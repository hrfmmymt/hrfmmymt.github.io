importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
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
    "revision": "59397c4eb5ba9b5dd559d01ef735dc05"
  },
  {
    "url": "install-service-worker.html",
    "revision": "d8b1353c27826def6cf2a3506ae0399d"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
