webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: findWord, default, Centered, Articles, ArticleColumns, ContentArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findWord", function() { return findWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Centered", function() { return Centered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Articles", function() { return Articles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleColumns", function() { return ArticleColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentArea", function() { return ContentArea; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-hash */ "./node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_articles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/articles */ "./data/articles.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components */ "./components/index.ts");
var _jsxFileName = "/Users/thomas/Documents/Arbeit/Veranstaltungen/Meetups/WebAssembly/website/webassembly.eu/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function findWord(word, str) {
  return str.split(" ").some(function (w) {
    return w.startsWith(word);
  });
}
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  var articleFilter = function articleFilter(_ref) {
    var headline = _ref.headline,
        author = _ref.author,
        topics = _ref.topics,
        body = _ref.body;
    return topics && topics.some(function (topic) {
      return topic.toLowerCase().startsWith(value);
    }) || author && findWord(value, author.toLowerCase()) || headline && findWord(value, headline.toLowerCase()) || body && findWord(value, body.toLowerCase());
  };

  return __jsx(Centered, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1580313005",
    __self: this
  }, "body{background-color:hsl(246,55%,47%);font-family:\"Times New Roman\",Times,serif;font-family:\"IBM Plex Sans\",sans-serif;color:white;-webkit-appearance:none;-moz-appearance:none;appearance:none;}h1,h2,h3,h4,h5,strong,b{font-weight:400;}h2{font-size:20px;color:rgba(255,255,255,1);}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9tYXMvRG9jdW1lbnRzL0FyYmVpdC9WZXJhbnN0YWx0dW5nZW4vTWVldHVwcy9XZWJBc3NlbWJseS93ZWJzaXRlL3dlYmFzc2VtYmx5LmV1L3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QjJCLEFBR2lELEFBZ0JwQixBQUlELEFBS00sZUFKUSxDQUovQixrQkFmOEMsT0FvQjlDLFNBSUEsMEJBdkIwQyx1Q0FFNUIsWUFDSSw2REFDbEIiLCJmaWxlIjoiL1VzZXJzL3Rob21hcy9Eb2N1bWVudHMvQXJiZWl0L1ZlcmFuc3RhbHR1bmdlbi9NZWV0dXBzL1dlYkFzc2VtYmx5L3dlYnNpdGUvd2ViYXNzZW1ibHkuZXUvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgaGFzaCBmcm9tIFwib2JqZWN0LWhhc2hcIjtcbmltcG9ydCB7IGFydGljbGVzLCBBcnRpY2xlIGFzIEFydGljbGVUeXBlIH0gZnJvbSBcIi4uL2RhdGEvYXJ0aWNsZXNcIjtcbmltcG9ydCB7IE5hdkJhciwgQXJ0aWNsZSwgRm9vdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRXb3JkKHdvcmQsIHN0cikge1xuICByZXR1cm4gc3RyLnNwbGl0KFwiIFwiKS5zb21lKGZ1bmN0aW9uKHcpIHtcbiAgICByZXR1cm4gdy5zdGFydHNXaXRoKHdvcmQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBhcnRpY2xlRmlsdGVyID0gKHsgaGVhZGxpbmUsIGF1dGhvciwgdG9waWNzLCBib2R5IH0pID0+XG4gICAgKHRvcGljcyAmJiB0b3BpY3Muc29tZSh0b3BpYyA9PiB0b3BpYy50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodmFsdWUpKSkgfHxcbiAgICAoYXV0aG9yICYmIGZpbmRXb3JkKHZhbHVlLCBhdXRob3IudG9Mb3dlckNhc2UoKSkpIHx8XG4gICAgKGhlYWRsaW5lICYmIGZpbmRXb3JkKHZhbHVlLCBoZWFkbGluZS50b0xvd2VyQ2FzZSgpKSkgfHxcbiAgICAoYm9keSAmJiBmaW5kV29yZCh2YWx1ZSwgYm9keS50b0xvd2VyQ2FzZSgpKSk7XG4gIHJldHVybiAoXG4gICAgPENlbnRlcmVkPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQ2LCA1NSUsIDQ3JSk7XG4gICAgICAgICAgICAvKiBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgKi9cbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAvKiBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7ICovXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxLFxuICAgICAgICAgIGgyLFxuICAgICAgICAgIGgzLFxuICAgICAgICAgIGg0LFxuICAgICAgICAgIGg1LFxuICAgICAgICAgIHN0cm9uZyxcbiAgICAgICAgICBiIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDx0aXRsZT5XZWJBc3NlbWJseTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2QmFyIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRWYWx1ZSh2YWx1ZS50b0xvd2VyQ2FzZSgpKX0gdmFsdWU9e3ZhbHVlfSAvPlxuICAgICAgPEFydGljbGVzIGFydGljbGVzPXthcnRpY2xlcy5maWx0ZXIoYXJ0aWNsZUZpbHRlcil9IC8+XG4gICAgPC9DZW50ZXJlZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBDZW50ZXJlZCA9IHN0eWxlZC5kaXZgYDtcblxuZXhwb3J0IGNvbnN0IEFydGljbGVzID0gKHsgYXJ0aWNsZXMgfTogeyBhcnRpY2xlczogQXJ0aWNsZVR5cGVbXSB9KSA9PiAoXG4gIDxDb250ZW50QXJlYT5cbiAgICA8QXJ0aWNsZUNvbHVtbnM+XG4gICAgICB7YXJ0aWNsZXMubWFwKGFydGljbGUgPT4gKFxuICAgICAgICA8QXJ0aWNsZSBrZXk9e2hhc2goYXJ0aWNsZSl9IGRhdGE9e2FydGljbGV9IC8+XG4gICAgICApKX1cbiAgICA8L0FydGljbGVDb2x1bW5zPlxuICAgIDxGb290ZXIgLz5cbiAgPC9Db250ZW50QXJlYT5cbik7XG5cbmV4cG9ydCBjb25zdCBBcnRpY2xlQ29sdW1ucyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBncmlkLWdhcDogMTBweDtcbiAgZ3JpZC1yb3ctZ2FwOiAzMHB4O1xuICBncmlkLWNvbHVtbi1nYXA6IDUwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzI1cHgsIDFmcikpO1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRBcmVhID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA5MiU7XG4gIHBhZGRpbmctbGVmdDogNCU7XG4gIHBhZGRpbmctcmlnaHQ6IDQlO1xuICBAa2V5ZnJhbWVzIGVudGVyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDBweCwgMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDBweCwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0aW9uOiBlbnRlciAwLjVzO1xuYDtcbiJdfQ== */\n/*@ sourceURL=/Users/thomas/Documents/Arbeit/Veranstaltungen/Meetups/WebAssembly/website/webassembly.eu/pages/index.tsx */"), __jsx("title", {
    className: "jsx-1580313005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "WebAssembly")), __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["NavBar"], {
    onChange: function onChange(value) {
      return setValue(value.toLowerCase());
    },
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(Articles, {
    articles: _data_articles__WEBPACK_IMPORTED_MODULE_5__["articles"].filter(articleFilter),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }));
});
var Centered = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__Centered",
  componentId: "sc-4eylin-0"
})([""]);
var Articles = function Articles(_ref2) {
  var articles = _ref2.articles;
  return __jsx(ContentArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(ArticleColumns, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, articles.map(function (article) {
    return __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["Article"], {
      key: object_hash__WEBPACK_IMPORTED_MODULE_4___default()(article),
      data: article,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    });
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }));
};
var ArticleColumns = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__ArticleColumns",
  componentId: "sc-4eylin-1"
})(["display:grid;width:100%;grid-gap:10px;grid-row-gap:30px;grid-column-gap:50px;grid-template-columns:repeat(auto-fit,minmax(325px,1fr));"]);
var ContentArea = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__ContentArea",
  componentId: "sc-4eylin-2"
})(["display:flex;flex-direction:column;align-items:flex-start;width:92%;padding-left:4%;padding-right:4%;@keyframes enter{0%{opacity:0;transform:translate3d(0,100px,0);}50%{opacity:0;transform:translate3d(0,100px,0);}100%{opacity:1;transform:translate3d(0,0,0);}}animation:enter 0.5s;"]);

/***/ })

})
//# sourceMappingURL=index.js.436713353e018a39439b.hot-update.js.map