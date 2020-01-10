self.__precacheManifest = [
  {
    "url": "/_next/static/P6rcYLb-Sem3Y5FGEQ_G0/pages/_app.js",
    "revision": "995f8517e0608065f61b"
  },
  {
    "url": "/_next/static/P6rcYLb-Sem3Y5FGEQ_G0/pages/_error.js",
    "revision": "74c9c339a17116f73021"
  },
  {
    "url": "/_next/static/P6rcYLb-Sem3Y5FGEQ_G0/pages/about.js",
    "revision": "46ae0d19fdba90a10c00"
  },
  {
    "url": "/_next/static/P6rcYLb-Sem3Y5FGEQ_G0/pages/article.js",
    "revision": "592979eeba9f6ccb10c4"
  },
  {
    "url": "/_next/static/P6rcYLb-Sem3Y5FGEQ_G0/pages/draft.js",
    "revision": "de1212d9db836c5d590d"
  },
  {
    "url": "/_next/static/P6rcYLb-Sem3Y5FGEQ_G0/pages/index.js",
    "revision": "8312cdaeaae8f157226c"
  },
  {
    "url": "/_next/static/P6rcYLb-Sem3Y5FGEQ_G0/pages/overview.js",
    "revision": "729f32d12db297506c00"
  },
  {
    "url": "/_next/static/P6rcYLb-Sem3Y5FGEQ_G0/pages/summit.js",
    "revision": "66b6b9557d8864cd764b"
  },
  {
    "url": "/_next/static/P6rcYLb-Sem3Y5FGEQ_G0/pages/welcome.js",
    "revision": "46f6de5607c98a413d54"
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
