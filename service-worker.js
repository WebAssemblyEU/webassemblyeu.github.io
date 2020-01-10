self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.a783cd9ce934e1bb0e5f.js",
    "revision": "546080476505d991bd5f"
  },
  {
    "url": "/_next/static/runtime/main-eed9684601159bc32941.js",
    "revision": "d2034fd4ca3b14e3aa86"
  },
  {
    "url": "/_next/static/runtime/polyfills-655c8b790ece69a1578b.js",
    "revision": "612dbc6da11ac264639b"
  },
  {
    "url": "/_next/static/runtime/webpack-08f7b238829422e3b9b2.js",
    "revision": "fc489b339eb65f8713fe"
  },
  {
    "url": "/_next/static/wkRqkAtp-YXYgPwnqqAfI/pages/_app.js",
    "revision": "11782648513c08632fd7"
  },
  {
    "url": "/_next/static/wkRqkAtp-YXYgPwnqqAfI/pages/_error.js",
    "revision": "c9ef1c0aa6a1dc85d18f"
  },
  {
    "url": "/_next/static/wkRqkAtp-YXYgPwnqqAfI/pages/about.js",
    "revision": "fc5831b9580518fd6484"
  },
  {
    "url": "/_next/static/wkRqkAtp-YXYgPwnqqAfI/pages/article.js",
    "revision": "0779d5a4e1cee4cfe1d8"
  },
  {
    "url": "/_next/static/wkRqkAtp-YXYgPwnqqAfI/pages/draft.js",
    "revision": "fc6f012fc7bc8dcf3ca1"
  },
  {
    "url": "/_next/static/wkRqkAtp-YXYgPwnqqAfI/pages/index.js",
    "revision": "57c89e158e40326d1154"
  },
  {
    "url": "/_next/static/wkRqkAtp-YXYgPwnqqAfI/pages/overview.js",
    "revision": "876f64bb0379c6f4bcdf"
  },
  {
    "url": "/_next/static/wkRqkAtp-YXYgPwnqqAfI/pages/summit.js",
    "revision": "f736291bec1031ea47e9"
  },
  {
    "url": "/_next/static/wkRqkAtp-YXYgPwnqqAfI/pages/welcome.js",
    "revision": "eadacc188bb3df493f31"
  }
];

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

importScripts(
  
);

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
    "url": "static/manifest.json",
    "revision": "91bfe2aa3842cf633ac77f31807ab505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
