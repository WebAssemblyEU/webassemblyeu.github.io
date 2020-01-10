self.__precacheManifest = [
  {
    "url": "/_next/static/IXV2-ahWuqf99wyvyy0jm/pages/_app.js",
    "revision": "9e5abdf6783fe1e023f4"
  },
  {
    "url": "/_next/static/IXV2-ahWuqf99wyvyy0jm/pages/_error.js",
    "revision": "2a4fadcba14f0f9ac606"
  },
  {
    "url": "/_next/static/IXV2-ahWuqf99wyvyy0jm/pages/about.js",
    "revision": "20433070b8739b16b780"
  },
  {
    "url": "/_next/static/IXV2-ahWuqf99wyvyy0jm/pages/article.js",
    "revision": "698e161bdc0daa368edf"
  },
  {
    "url": "/_next/static/IXV2-ahWuqf99wyvyy0jm/pages/draft.js",
    "revision": "658a854c36f5eb3c7134"
  },
  {
    "url": "/_next/static/IXV2-ahWuqf99wyvyy0jm/pages/index.js",
    "revision": "1fd38e01ded6630770d8"
  },
  {
    "url": "/_next/static/IXV2-ahWuqf99wyvyy0jm/pages/overview.js",
    "revision": "db9e98c8ca74d289edee"
  },
  {
    "url": "/_next/static/IXV2-ahWuqf99wyvyy0jm/pages/summit.js",
    "revision": "50be84221ac7de7baa45"
  },
  {
    "url": "/_next/static/IXV2-ahWuqf99wyvyy0jm/pages/welcome.js",
    "revision": "e83bd81b7f2e744fdd44"
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
