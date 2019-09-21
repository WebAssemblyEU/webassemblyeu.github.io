webpackHotUpdate("static/development/pages/summit.js",{

/***/ "./pages/summit.tsx":
/*!**************************!*\
  !*** ./pages/summit.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./pages/index.tsx");
var _jsxFileName = "/Users/thomas/Documents/Arbeit/Veranstaltungen/Meetups/WebAssembly/website/webassembly.eu/pages/summit.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  var articleFilter = function articleFilter(_ref) {
    var headline = _ref.headline,
        author = _ref.author,
        topics = _ref.topics,
        body = _ref.body;
    return topics && topics.some(function (topic) {
      return topic.toLowerCase().startsWith(value);
    }) || author && Object(_index__WEBPACK_IMPORTED_MODULE_3__["findWord"])(value, author.toLowerCase()) || headline && Object(_index__WEBPACK_IMPORTED_MODULE_3__["findWord"])(value, headline.toLowerCase()) || body && Object(_index__WEBPACK_IMPORTED_MODULE_3__["findWord"])(value, body.toLowerCase());
  };

  return __jsx(_index__WEBPACK_IMPORTED_MODULE_3__["Centered"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "WebAssembly")), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["NavBar"], {
    onChange: function onChange(value) {
      return setValue(value.toLowerCase());
    },
    value: value,
    experimental: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=summit.js.cffeaa20944b4176ba57.hot-update.js.map