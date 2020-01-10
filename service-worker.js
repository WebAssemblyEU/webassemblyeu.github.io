self.__precacheManifest = [
  {
    "url": "/_next/static/XntVId7-X-krEJK6Lm5rr/pages/_app.js",
    "revision": "40cfcb356f445cccc5e8"
  },
  {
    "url": "/_next/static/XntVId7-X-krEJK6Lm5rr/pages/_error.js",
    "revision": "20a75ad1229a8878837c"
  },
  {
    "url": "/_next/static/XntVId7-X-krEJK6Lm5rr/pages/about.js",
    "revision": "e8a19d58f2977e86c27b"
  },
  {
    "url": "/_next/static/XntVId7-X-krEJK6Lm5rr/pages/article.js",
    "revision": "ddfa3279344cf2ba7333"
  },
  {
    "url": "/_next/static/XntVId7-X-krEJK6Lm5rr/pages/draft.js",
    "revision": "604dec7acaf1f533c872"
  },
  {
    "url": "/_next/static/XntVId7-X-krEJK6Lm5rr/pages/index.js",
    "revision": "5dcb228da44a137f9ee1"
  },
  {
    "url": "/_next/static/XntVId7-X-krEJK6Lm5rr/pages/overview.js",
    "revision": "f29e0ca50b54c0937f99"
  },
  {
    "url": "/_next/static/XntVId7-X-krEJK6Lm5rr/pages/summit.js",
    "revision": "6398cccc596cde3af594"
  },
  {
    "url": "/_next/static/XntVId7-X-krEJK6Lm5rr/pages/welcome.js",
    "revision": "a708dd11310670110ab3"
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
