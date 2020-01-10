self.__precacheManifest = [
  {
    "url": "/_next/static/-rcw3sG-uInxU3OGXXx_C/pages/_app.js",
    "revision": "2a5f1a11da39f228cde9"
  },
  {
    "url": "/_next/static/-rcw3sG-uInxU3OGXXx_C/pages/_error.js",
    "revision": "b901360d8590881fb9aa"
  },
  {
    "url": "/_next/static/-rcw3sG-uInxU3OGXXx_C/pages/about.js",
    "revision": "5a3b02707f16e3b8d6b5"
  },
  {
    "url": "/_next/static/-rcw3sG-uInxU3OGXXx_C/pages/article.js",
    "revision": "b18c23e6e1c6c22b2086"
  },
  {
    "url": "/_next/static/-rcw3sG-uInxU3OGXXx_C/pages/draft.js",
    "revision": "3f60650e9f2ace94ce56"
  },
  {
    "url": "/_next/static/-rcw3sG-uInxU3OGXXx_C/pages/index.js",
    "revision": "008169da5d149b15f761"
  },
  {
    "url": "/_next/static/-rcw3sG-uInxU3OGXXx_C/pages/overview.js",
    "revision": "28493bcca23b776cd4b5"
  },
  {
    "url": "/_next/static/-rcw3sG-uInxU3OGXXx_C/pages/summit.js",
    "revision": "2b462640b5c0135446ad"
  },
  {
    "url": "/_next/static/-rcw3sG-uInxU3OGXXx_C/pages/welcome.js",
    "revision": "7f950c9b89baf832f0aa"
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
