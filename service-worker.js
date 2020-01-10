self.__precacheManifest = [
  {
    "url": "/_next/static/LivNVh-Bpi56BKzLJfEiP/pages/_app.js",
    "revision": "9586fc221399e55d297a"
  },
  {
    "url": "/_next/static/LivNVh-Bpi56BKzLJfEiP/pages/_error.js",
    "revision": "e83a99ca9cf4e7150434"
  },
  {
    "url": "/_next/static/LivNVh-Bpi56BKzLJfEiP/pages/about.js",
    "revision": "40242346e81bf8e62469"
  },
  {
    "url": "/_next/static/LivNVh-Bpi56BKzLJfEiP/pages/article.js",
    "revision": "924ba4eca907108eef85"
  },
  {
    "url": "/_next/static/LivNVh-Bpi56BKzLJfEiP/pages/draft.js",
    "revision": "c3d803374c6a5962e608"
  },
  {
    "url": "/_next/static/LivNVh-Bpi56BKzLJfEiP/pages/index.js",
    "revision": "a36f5edbfb50155bc48d"
  },
  {
    "url": "/_next/static/LivNVh-Bpi56BKzLJfEiP/pages/overview.js",
    "revision": "d06b81c249d7ac802ac8"
  },
  {
    "url": "/_next/static/LivNVh-Bpi56BKzLJfEiP/pages/summit.js",
    "revision": "4cd9f46ecff01049ba3f"
  },
  {
    "url": "/_next/static/LivNVh-Bpi56BKzLJfEiP/pages/welcome.js",
    "revision": "259297dfea5054ae8a7a"
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
self.__precacheManifest = [
  {
    "url": "static/manifest.json",
    "revision": "91bfe2aa3842cf633ac77f31807ab505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
