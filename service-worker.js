self.__precacheManifest = [
  {
    "url": "/_next/static/NfQ48p_YlRBG7vCzKSFHz/pages/_app.js",
    "revision": "3ae3dfaf55ed8861a5da"
  },
  {
    "url": "/_next/static/NfQ48p_YlRBG7vCzKSFHz/pages/_error.js",
    "revision": "b750320fe403251693b6"
  },
  {
    "url": "/_next/static/NfQ48p_YlRBG7vCzKSFHz/pages/about.js",
    "revision": "258a0ca9d2c640f52861"
  },
  {
    "url": "/_next/static/NfQ48p_YlRBG7vCzKSFHz/pages/article.js",
    "revision": "a29987459eddbd747482"
  },
  {
    "url": "/_next/static/NfQ48p_YlRBG7vCzKSFHz/pages/draft.js",
    "revision": "771b8d514a5dc3b6db3e"
  },
  {
    "url": "/_next/static/NfQ48p_YlRBG7vCzKSFHz/pages/index.js",
    "revision": "15316922985809c738eb"
  },
  {
    "url": "/_next/static/NfQ48p_YlRBG7vCzKSFHz/pages/overview.js",
    "revision": "62d527c1ffe0ce334ed3"
  },
  {
    "url": "/_next/static/NfQ48p_YlRBG7vCzKSFHz/pages/summit.js",
    "revision": "b8cc681e4a7db0bcfa2b"
  },
  {
    "url": "/_next/static/NfQ48p_YlRBG7vCzKSFHz/pages/welcome.js",
    "revision": "f0707d31906ebe24a714"
  },
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
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
