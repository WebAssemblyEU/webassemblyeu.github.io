self.__precacheManifest = [
  {
    "url": "/_next/static/6m1nY6K3D9NrzVAaVgdgF/pages/_app.js",
    "revision": "ca48fac010f99ca0a599"
  },
  {
    "url": "/_next/static/6m1nY6K3D9NrzVAaVgdgF/pages/_error.js",
    "revision": "5ea0d5774438e6772689"
  },
  {
    "url": "/_next/static/6m1nY6K3D9NrzVAaVgdgF/pages/about.js",
    "revision": "563d3ae58a5068e6e150"
  },
  {
    "url": "/_next/static/6m1nY6K3D9NrzVAaVgdgF/pages/article.js",
    "revision": "e02ef7a8bc7e09f95559"
  },
  {
    "url": "/_next/static/6m1nY6K3D9NrzVAaVgdgF/pages/draft.js",
    "revision": "77898e179300ffb4cfcf"
  },
  {
    "url": "/_next/static/6m1nY6K3D9NrzVAaVgdgF/pages/index.js",
    "revision": "d38962b37960b73df3e7"
  },
  {
    "url": "/_next/static/6m1nY6K3D9NrzVAaVgdgF/pages/overview.js",
    "revision": "a94c3c0586a1ebe662af"
  },
  {
    "url": "/_next/static/6m1nY6K3D9NrzVAaVgdgF/pages/summit.js",
    "revision": "63a1de97f6e0c1c4f0d0"
  },
  {
    "url": "/_next/static/6m1nY6K3D9NrzVAaVgdgF/pages/welcome.js",
    "revision": "9b390df742acb3de34b6"
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
