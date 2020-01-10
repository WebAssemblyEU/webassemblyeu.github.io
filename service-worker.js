self.__precacheManifest = [
  {
    "url": "/_next/static/SDcPsoaMIa6I8sV4p8FLw/pages/_app.js",
    "revision": "b713dc814b9c19ac0a64"
  },
  {
    "url": "/_next/static/SDcPsoaMIa6I8sV4p8FLw/pages/_error.js",
    "revision": "5b4602d4310316014732"
  },
  {
    "url": "/_next/static/SDcPsoaMIa6I8sV4p8FLw/pages/about.js",
    "revision": "2e0babc7ffa2d40ac1c4"
  },
  {
    "url": "/_next/static/SDcPsoaMIa6I8sV4p8FLw/pages/article.js",
    "revision": "0254213ed673c65e91c3"
  },
  {
    "url": "/_next/static/SDcPsoaMIa6I8sV4p8FLw/pages/draft.js",
    "revision": "a3884e3b45f15782658e"
  },
  {
    "url": "/_next/static/SDcPsoaMIa6I8sV4p8FLw/pages/index.js",
    "revision": "a6f4514bf9bfc5476e2e"
  },
  {
    "url": "/_next/static/SDcPsoaMIa6I8sV4p8FLw/pages/overview.js",
    "revision": "582639fdb44f58e64869"
  },
  {
    "url": "/_next/static/SDcPsoaMIa6I8sV4p8FLw/pages/summit.js",
    "revision": "4b3e68c6ba9dec2efc8f"
  },
  {
    "url": "/_next/static/SDcPsoaMIa6I8sV4p8FLw/pages/welcome.js",
    "revision": "b4a0cf0ec51d5acedb29"
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
