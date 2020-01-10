self.__precacheManifest = [
  {
    "url": "/_next/static/ZY00Hnoj7juJEkdRNMHN1/pages/_app.js",
    "revision": "476793c99f6f131f2ead"
  },
  {
    "url": "/_next/static/ZY00Hnoj7juJEkdRNMHN1/pages/_error.js",
    "revision": "749d46523b04af284f22"
  },
  {
    "url": "/_next/static/ZY00Hnoj7juJEkdRNMHN1/pages/about.js",
    "revision": "16de804c5cd296e37e0d"
  },
  {
    "url": "/_next/static/ZY00Hnoj7juJEkdRNMHN1/pages/article.js",
    "revision": "a2e2ce68a4a630cc08c2"
  },
  {
    "url": "/_next/static/ZY00Hnoj7juJEkdRNMHN1/pages/draft.js",
    "revision": "dec213dc345260c6f208"
  },
  {
    "url": "/_next/static/ZY00Hnoj7juJEkdRNMHN1/pages/index.js",
    "revision": "6cf09462872aa2abe192"
  },
  {
    "url": "/_next/static/ZY00Hnoj7juJEkdRNMHN1/pages/overview.js",
    "revision": "2f7956f605ad98b904ca"
  },
  {
    "url": "/_next/static/ZY00Hnoj7juJEkdRNMHN1/pages/summit.js",
    "revision": "cc038d725be3d2123c41"
  },
  {
    "url": "/_next/static/ZY00Hnoj7juJEkdRNMHN1/pages/welcome.js",
    "revision": "9ee0766ece067dbe02d5"
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
