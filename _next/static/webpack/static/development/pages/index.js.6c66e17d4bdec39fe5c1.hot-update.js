webpackHotUpdate("static/development/pages/index.js",{

/***/ "./data/articles.ts":
/*!**************************!*\
  !*** ./data/articles.ts ***!
  \**************************/
/*! exports provided: links, articles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "links", function() { return links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articles", function() { return articles; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-hash */ "./node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_1__);


var links = [{
  title: "Twiggy is a code size profiler for Rust",
  link: "https://github.com/rustwasm/twiggy",
  topics: ["Rust", "profiler"]
}, {
  title: "This very simple example shows usage of WebAssembly in Webpack.",
  link: "https://github.com/webpack/webpack/tree/master/examples/wasm-simple",
  topics: ["Webpack", "WebAssembly"]
}, {
  title: "Understanding WebAssembly text format",
  link: "https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format",
  topics: ["WebAssembly"]
}, {
  title: "Walt in 5 Minutes",
  link: "https://github.com/ballercat/walt/wiki/Walt-In-5-Minutes",
  topics: ["Walt", "WebAssembly", "Typescript"]
}, {
  title: "Rust to WebAssembly Hello World",
  link: "https://rustwasm.github.io/book/hello-world.html",
  topics: ["Rust", "WebAssembly", "hello world"]
}, {
  title: "Rust WASM Book: Shrinking .wasm Size",
  link: "https://rustwasm.github.io/book/game-of-life/code-size.html",
  topics: ["Rust", "WebAssembly"]
}, {
  title: "WebAssembly Reference Manual",
  link: "https://github.com/sunfishcode/wasm-reference-manual/blob/master/WebAssembly.md",
  topics: ["WebAssembly", "documentation"]
}, {
  title: "Introduction to WebAssembly",
  link: "https://rsms.me/wasm-intro",
  topics: ["WebAssembly", "introduction"]
}, {
  title: "Awesome Webassembly System Interface (WASI)",
  link: "https://github.com/wasmerio/awesome-wasi",
  topics: ["WebAssembly", "WASI"]
}];
var articles = [{
  headline: "Publishing compiled Rust modules as WebAssembly binaries on NPM",
  body: "wasm-pack is a tool for assembling and packaging Rust crates that target WebAssembly. These packages can be published to the npm Registry and used alongside other packages. This means you can use them side-by-side with JS and other packages, and in many kind of applications.",
  image: "https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2018/04/wasm-pack-01.png",
  link: "https://hacks.mozilla.org/2018/04/hello-wasm-pack/",
  author: "Ashley Williams",
  date: "April 18, 2018",
  icon: "Rust_programming_language_black_logo.svg",
  topics: ["WebAssembly", "NPM", "Rust", "Javascript"]
}, {
  headline: "Google Earth switching to WebAssembly",
  body: "Google Earth is switching from Native Client to WebAssembly",
  author: "Google",
  date: "October 24, 2017",
  image: "https://cdn-images-1.medium.com/max/800/0*YxeGMxX6L0I7XvXt.",
  link: "https://medium.com/google-earth/earth-on-web-the-road-to-cross-browser-7338e0f46278",
  topics: ["WebAssembly", "Google Earth", "Web App"]
}, {
  headline: "WebAssembly support now shipping in all major browsers",
  date: "November 13, 2017",
  link: "https://blog.mozilla.org/blog/2017/11/13/webassembly-in-browsers/",
  body: "Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge now all support the WebAssembly MVP",
  image: "../static/browser-support.png",
  author: "Mozilla",
  topics: ["Chrome", "Edge", "Safari", "Firefox", "WebAssembly"]
}, {
  headline: "WebAssembly Meetup at Google Munich",
  date: "June 29, 2018",
  author: "WebAssembly Munich Meetup",
  location: "Google, Munich, Germany",
  link: "https://www.meetup.com/de-DE/WebAssembly/",
  body: "First WebAssembly meetup in Germany with talks from the Google WebAssembly team will take place on July 17 at Google's Munich head quarter. Talks will be about going from C++ or Assemblyscript to WebAssembly and how Chrome processes WebAssembly",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Google_Entwicklungszentrum_Arnulfpark_Muenchen-4.jpg/640px-Google_Entwicklungszentrum_Arnulfpark_Muenchen-4.jpg",
  topics: ["Google", "WebAssembly", "Meetup"]
}, {
  headline: "Dropbox's new compression algorithms written in Rust",
  date: "June 19, 2018",
  author: "Dropbox",
  link: "https://blogs.dropbox.com/tech/2018/06/building-better-compression-together-with-divans/",
  body: "DivANS is written in the Rust programming language, since Rust has guarantees about safety, security, and determinism in the safe subset of the language. Rust can also be as fast as hand-tuned C code and doesn’t need a garbage collector. Rust programs embed well in any programming language that support a C foreign function interface (FFI) and even allow runtime selection of the memory allocator through that C FFI. These properties make it easy to embed the DivANS codec in a webpage with WASM.",
  topics: ["Rust", "WebAssembly"],
  image: "https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg"
}, {
  headline: "AutoCAD Web App presented at Google IO 2018",
  date: "May 28, 2018",
  author: "Google",
  link: "http://blogs.autodesk.com/autocad/autocad-web-app-google-io-2018/",
  body: "Autodesk has ported AutoCAD to the browser: The AutoCAD Web App presented at Google I/O 2018 runs on WebAssembly. The AutoCAD team took a 35 year old code base...and got it to compile directly in a browser using WebAssembly.... So now the power of AutoCAD is just a link away.",
  image: "https://pbs.twimg.com/media/DctE099V0AEm14h.jpg:medium",
  topics: ["AutoCAD", "Web App", "WebAssembly"]
}, {
  headline: "Sneak Peek at WebAssembly Studio",
  date: "April 11, 2018",
  author: "Michael Bebenita, Mozilla",
  link: "https://hacks.mozilla.org/2018/04/sneak-peek-at-webassembly-studio/",
  body: "WebAssembly.Studio is an online IDE (integrated development environment) that helps you learn and teach others about WebAssembly. It’s also a Swiss Army knife that comes in handy whenever working with WebAssembly.",
  image: "https://hacks.mozilla.org/files/2018/04/mainwasm1.png",
  topics: ["Integrated Development Environment", "WebAssembly"]
}, {
  headline: "Baby’s First Rust + WebAssembly module: Say hi to JSConf EU!",
  date: "June 2, 2018",
  author: "Lin Clark",
  body: "A demo hello world project for JSConf EU demonstrating writing a WebAssembly module in Rust",
  link: "https://hacks.mozilla.org/2018/06/babys-first-rustwebassembly-module-say-hi-to-jsconf-eu/",
  topics: ["WebAssembly", "Rust", "hello world"],
  image: "https://hacks.mozilla.org/files/2018/03/01_rust_loves_js-768x309.png"
}, {
  headline: "PSPDFKit: A Real-World WebAssembly Benchmark",
  link: "https://pspdfkit.com/blog/2018/a-real-world-webassembly-benchmark/",
  date: "July, 7, 2018",
  author: "G. Gurgone, P. Spiess",
  image: "https://pspdfkit.com/images/blog/2018/webassembly-benchmark/results-macOS.png",
  body: "Currently, only in Firefox the WebAssembly performance of PSPDFKit is significantly better than Javascript, while others browsers currently do not profit from WebAssembly yet. In Safari and Edge the WebAssembly version runs significantly slower than the Javascript version.",
  topics: ["WebAssembly", "benchmark", "PSPDFKit", "PDF", "Firefox", "Chrome", "Edge", "Safari"]
}, {
  headline: "Vim editor ported to WebAssembly",
  link: "https://rhysd.github.io/vim.wasm/",
  date: "June 9, 2018",
  author: "Linda",
  body: "This project is an experimental fork of Vim editor by @rhysd to compile it into WebAssembly using emscripten and binaryen.",
  topics: ["vim", "WebAssembly"],
  image: "https://github.com/rhysd/vim.wasm/raw/wasm/wasm-readme-images/main-screen.png"
}, {
  author: "Devon Govett",
  date: "January 23, 2018",
  headline: "Parcel v1.5.0 released: Source Maps, WebAssembly, Rust, and more!",
  body: "Parcel v1.5.0 is a HUGE release. The highlights include: WebAssembly support — an emerging technology, this will become more important in the future and enable a diversity of languages on the web and native-level performance. Parcel makes it super easy to get started — we handle many of the details for you with zero configuration. Rust → WebAssembly support — continuing on the above, the first language to support compiling to WebAssembly out of the box is Rust! Now you can import a .rs file just like you can .js!",
  link: "https://medium.com/@devongovett/parcel-v1-5-0-released-source-maps-webassembly-rust-and-more-3a6385e43b95",
  topics: ["WebAssembly", "Parcel", "Rust"],
  image: "https://cdn-images-1.medium.com/max/1600/1*Gjhk6qvPM5zAy1iPPS1ttg.png"
}, {
  author: "Mathias Bynens, Google V8 team",
  date: "April 1, 2018",
  body: "When working with WebAssembly, you often want to download a module, compile it, instantiate it, and then use whatever it exports in JavaScript. This post starts off with a common but suboptimal code snippet doing exactly that, discusses several possible optimizations, and eventually shows the simplest, most efficient way of running WebAssembly from JavaScript.",
  headline: "Loading WebAssembly modules efficiently",
  link: "https://developers.google.com/web/updates/2018/04/loading-wasm",
  topics: ["WebAssembly", "V8"],
  image: "https://developers.google.com/web/updates/images/2018/04/loading-wasm/streaming.png"
}, {
  author: "Sean T. Larkin",
  date: "July 31, 2017",
  headline: "Webpack implementing first-class support for WebAssembly",
  body: "At webpack, we would like to shift our focus to supporting more module types. One of these module types we would like to treat as a first-class citizen is WebAssembly. WebAssembly is described by Mozilla as …an emerging standard whose goal is to define a safe, portable, size- and load-time efficient binary compiler target which offers near-native performance — a virtual CPU for the Web.",
  link: "https://medium.com/webpack/webpack-awarded-125-000-from-moss-program-f63eeaaf4e15",
  image: "https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png",
  topics: ["WebAssembly", "Webpack"]
}, {
  author: "Lin Clark",
  headline: "Creating and working with WebAssembly modules",
  date: "February 28, 2018",
  body: "WebAssembly modules define functions that can be used from JavaScript. So just like you download a module like lodash from npm today and call functions that are part of its API, you will be able to download WebAssembly modules in the future. So let’s see how we can create WebAssembly modules, and then how we can use them from JavaScript.",
  link: "https://hacks.mozilla.org/2017/02/creating-and-working-with-webassembly-modules/",
  image: "https://hacks.mozilla.org/files/2017/02/04-01-langs09-768x469.png",
  topics: ["WebAssembly"]
}, {
  headline: "Six different 8-bit emulators compiled to WebAssembly",
  date: "July 11, 2018",
  author: "Andre Weissflog",
  body: "Six different 8-bit emulators (including the famous Commodore C64), all written in C and compiled to WebAssembly.",
  link: "https://floooh.github.io/tiny8bit/",
  topics: ["WebAssembly", "emulator", "C64"],
  image: "https://pbs.twimg.com/media/Dhzr7MrWAAALb2W.jpg:large"
}, {
  headline: "Where is WebAssembly now and what’s next?",
  link: "https://hacks.mozilla.org/2017/02/where-is-webassembly-now-and-whats-next/",
  date: "February 28, 2017",
  body: "On February 28, the four major browsers announced their consensus that the MVP of WebAssembly is complete. This provides a stable initial version that browsers can start shipping. This provides a stable core that browsers can ship. This core doesn’t contain all of the features that the community group is planning, but it does provide enough to make WebAssembly fast and usable.",
  topics: ["WebAssembly", "MVP", "Edge", "Chrome", "Safari", "Firefox"],
  image: "https://hacks.mozilla.org/files/2017/02/logo_party01-768x259.png"
}, {
  headline: "Introducing inNative: Run WebAssembly Outside The Sandbox at 95% Native Speed",
  link: "https://innative.dev/news/introducing-innative/",
  author: "Eric McClure",
  date: "May 17, 2019",
  body: "Many people are excited about WebAssembly, which lets you use languages other than JavaScript on the web. With WebAssembly, you can run C, C++, Rust, Zig, Go, or pretty much anything that compiles to LLVM in a sandbox running inside your web browser. This has performance costs, but many people are working on highly optimized JIT compilers designed to minimize these costs as much as possible. I’m not interested in that. I’m interested in a completely different question: How fast can WebAssembly go outside the sandbox?",
  topics: ["WebAssembly", "sandbox", "native", "universal binaries"],
  image: "https://innative.dev/img/innative.png"
}, {
  headline: "Assemblyscript: Support for automatic memory management on the horizon",
  link: "https://github.com/AssemblyScript/assemblyscript/pull/592",
  date: "May 24, 2019",
  author: "AssemblyScript",
  body: "The Assemblyscript team is working on automatic memory management based on automatic reference counting (ARC) as native Webassembly Garbage Collection runtime is not yet on the horizon. ARC is a mostly compile time approach to memory management as in Swift.",
  topics: ["WebAssembly", "memory management", "Typescript", "AssemblyScript"],
  image: "https://github.com/AssemblyScript/assemblyscript/raw/master/media/icon.png"
}, {
  headline: "eBay's Webassembly barcode scanner",
  link: "https://www.ebayinc.com/stories/blogs/tech/webassembly-at-ebay-a-real-world-use-case/?utm_source=twitter&utm_medium=Social&utm_campaign=AddThisWidget#.XOhbJgZV6Nw.twitter",
  date: "May 22, 2019",
  author: "Pranav Jha and Senthil Padmanabhan",
  body: "From the time it was announced, WebAssembly caused a huge buzz in the front-end world. The web community readily embraced the idea of taking code written in programming languages other than JavaScript and running that code in the browser. Above all WebAssembly consistently guarantees native speeds much faster than JavaScript. At eBay, we were no different.",
  topics: ["WebAssembly", "application", "eBay", "computer vision"],
  image: "https://static.ebayinc.com/static/theme/images/logo.svg?v=1559154993"
}, {
  headline: "Standardizing WASI: A system interface to run WebAssembly outside the web",
  author: "Lin Clark",
  date: "March 27, 2019",
  body: "Today, we announce the start of a new standardization effort — WASI, the WebAssembly system interface. Why: Developers are starting to push WebAssembly beyond the browser, because it provides a fast, scalable, secure way to run the same code across all machines. But we don’t yet have a solid foundation to build upon. Code outside of a browser needs a way to talk to the system — a system interface. And the WebAssembly platform doesn’t have that yet.",
  topics: ["WebAssembly", "WASI"],
  link: "https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/",
  image: "https://hacks.mozilla.org/files/2019/03/05-01-wasi-1-768x644.png"
}, {
  headline: "Next-Generation 3D Graphics on the Web",
  author: "Ricardo Cabello (Mr. Doob), Corentin Wallez",
  date: "May 9, 2019",
  body: "This talk will cover the latest updates for adding 3D to your web site. You'll learn how to use <model-viewer> and new features for rendering, AR, and interactivity. You'll also see some phenomenal sites created with three.js. Then you'll get an overview of the WebGPU API that will provide modern features such as “GPU compute” as well as lower overhead access to GPU hardware and better, more predictable performance. Expect performance gains in Tensorflow.js up to 10x.",
  topics: ["WebGPU", "WebIDL"],
  link: "https://youtu.be/K2JzIUIHIhc",
  image: "https://storage.googleapis.com/io-19-assets/images/global/hashtag.gif"
}, {
  headline: "WebAssembly Implicit caching in V8 release 7.5",
  author: "Google V8 team",
  date: "May 16, 2019",
  body: "We are planning to roll out implicit caching of WebAssembly compilation artifacts in Chrome 75. This means users that visit the same page a second time don’t need to compile the already-seen WebAssembly modules. Instead they are loaded from the cache. This works similarly to Chromium’s JavaScript code-cache. In case you want to use a similar feature in your V8 embedding, please take inspiration from Chromium’s implementation.",
  topics: ["WebAssembly", "V8"],
  link: "https://v8.dev/blog/v8-release-75",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/V8_JavaScript_engine_logo_2.svg/1920px-V8_JavaScript_engine_logo_2.svg.png"
}, {
  headline: "Compiling Swift to WebAssembly",
  author: "SwiftWasm",
  date: "May 10, 2019",
  body: "The open source project SwiftWasm announced: \"SwiftWasm compiles your Swift code to WebAssembly. Many features in Swift aren't working on WebAssembly yet. We're working on integrating our patches into the official Swift compiler.\" Swift is a programming language invented by the LLVM author Chris Lattner and feature an automatic reference counting (ARC) approach resolving most of the automatic memory management at compile time, and an easy to learn syntax, an interpreter and fast compiled code.",
  topics: ["WebAssembly", "Swift"],
  link: "https://swiftwasm.org/",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Swift_logo_with_text.svg/320px-Swift_logo_with_text.svg.png"
}, {
  headline: "Entropic, a new decentralized package manager announced",
  author: "C J Silverio",
  date: "June 3, 2019",
  body: "Ex NPM chief technology officer Silverio announced a federated, decentral package manager at JSConf EU yesterday in response to the problems of a venture capitalist backed central registry. Silverio will meet with Mozilla to learn about the needs for Webassembly support. Entropic registries will also be able to run on the edge of CDNs like Cloudflare workers.",
  topics: ["WebAssembly", "Entropic"],
  link: "https://github.com/entropic-dev/entropic",
  image: "https://pbs.twimg.com/media/D8IO_JBWwAASplG.jpg"
}, {
  headline: "Compiling C / C++ to WebAssembly without Emscripten",
  author: "Surma",
  date: "May 28, 2019",
  body: "Emscripten uses the clang C/C++ compiler based on LLVM and emulates APIs such as OpenGL and POSIX needed to port 3D games to the web. This article by Surma discusses a lean approach that does not target compiling existing applications to WebAssembly and thus does not bring all the weight for legacy support.",
  topics: ["WebAssembly", "LLVM", "C", "C++"],
  link: "https://dassur.ma/things/c-to-webassembly/",
  image: "https://llvm.org/img/DragonMedium.png"
}, {
  headline: "Announcing Lucet: Fastly’s native WebAssembly compiler and runtime",
  author: "Pat Hickey",
  date: "March 28, 2019",
  body: "Fastly open sources Lucet, its native WebAssembly compiler and runtime, designed to take WebAssembly beyond the browser, and build a platform for faster, safer execution on Fastly’s edge cloud. We want to enable our customers to go beyond Fastly VCL and move even more logic to the edge, and use any language they choose. Lucet is the engine behind Terrarium, our experimental platform for edge computation using WebAssembly. Soon, we will make it available on Fastly’s edge cloud as well.",
  topics: ["WebAssembly", "Fastly", "standalone runtime", "CDN", "edge", "cloud"],
  link: "https://www.fastly.com/blog/announcing-lucet-fastly-native-webassembly-compiler-runtime",
  image: "https://www.fastly.com/assets/logo-bb62411dfd9737caea27fdab1485bd7d2b397f8f84ec8a1f773393a877a4bf6a.svg"
}, {
  headline: "TensorFlow developers looking into WebAssembly and WebGPU support",
  author: "Smilkov et al.",
  date: "February 4, 2019",
  body: "Two new web standards, WebAssembly and WebGPU, both have potential to improve TensorFlow.js performance. WebGPU is an emerging standard to express general purpose parallel computation on the GPU, enabling more optimised linear algebra kernels than those the WebGL backend can support today.",
  topics: ["WebAssembly", "WebGPU", "Tensorflow"],
  link: "https://blog.acolyer.org/2019/02/04/tensorflow-js-machine-learning-for-the-web-and-beyond/",
  image: "https://js.tensorflow.org/images/lockup.svg"
}, {
  headline: "Autodesk releases AutoCAD web app for Firefox",
  author: "Autodesk",
  date: "June 8, 2019",
  body: "Autodesk today announced Firefox support for the AutoCAD Web App. AutoCAD is based on a codebase written decades ago. The Webassembly port demonstrates the potential of Webassembly to overcome barriers separating previously fragmented areas of software development divided by operating system, programming languages and frameworks.",
  topics: ["WebAssembly", "Autodesk", "AutoCAD"],
  link: "https://www.autodesk.com/products/autocad-web-app/overview?linkId=68719474",
  image: "https://damassets.autodesk.net/content/dam/autodesk/www/products/autocad-web-app/overview-page/benefits/cohesive-autocad-experience-thumb-600x300.jpg"
}, {
  headline: "AssemblyScript now with automatic memory management",
  author: "AssemblyScript",
  date: "June 5, 2019",
  body: "AssemblyScript adds support for automatic memory management. The solution is Automatic Reference Counting (ARC) like in Swift. For references without circular depdendencies this is done at compile time without the need for a  Garbage Collection runtime. This solution is more than a stopgap for the upcoming Garbage Collection proposal, but it may also prove to have its benefits in terms of predictabile performance.",
  topics: ["WebAssembly", "AssemblyScript", "memory management", "ARC"],
  link: "https://twitter.com/AssemblyScript/status/1136387616725712899",
  image: "https://github.com/AssemblyScript/assemblyscript/raw/master/media/icon.png"
}, {
  headline: "Plot to steal cryptocurrency foiled by the npm security team",
  author: "NPM",
  date: "June 5, 2019",
  body: '"Yesterday, the npm, Inc. security team, in collaboration with Komodo, helped protect over $13 million USD in cryptocurrency assets as we found and responded to a malware threat targeting the users of a cryptocurrency wallet called Agama. This attack focused on getting a malicious package into the build chain for Agama and stealing the wallet seeds and other login passphrases used within the application." This is a fundamental problem inherent to the Node.js ecosystem. Webassembly and WASI\'s module sandbox could be a solution to reduce the surface of this kind of attack vector.',
  topics: ["Node.js", "NPM", "security", "module security", "package security"],
  link: "https://blog.npmjs.org/post/185397814280/plot-to-steal-cryptocurrency-foiled-by-the-npm",
  image: "https://static.npmjs.com/images/logo.svg"
}].sort(function (a, b) {
  if (Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getTime"])(new Date(b.date)) - Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getTime"])(new Date(a.date)) !== 0) {
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getTime"])(b.date) - Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getTime"])(a.date);
  } else {
    return object_hash__WEBPACK_IMPORTED_MODULE_1___default()(b).localeCompare(object_hash__WEBPACK_IMPORTED_MODULE_1___default()(a));
  }
});

/***/ })

})
//# sourceMappingURL=index.js.6c66e17d4bdec39fe5c1.hot-update.js.map