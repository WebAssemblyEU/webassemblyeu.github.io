webpackHotUpdate("static/development/pages/draft.js",{

/***/ "./components/NavButtons.tsx":
/*!***********************************!*\
  !*** ./components/NavButtons.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/thomas/Documents/Arbeit/Veranstaltungen/Meetups/WebAssembly/website/webassembly.eu/components/NavButtons.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var NavButtons = function NavButtons(_ref) {
  var labels = _ref.labels,
      activeIndex = _ref.activeIndex;
  return __jsx(NavButtonsArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, labels.map(function (label, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: index,
      href: "/".concat(label.toLowerCase()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, index === activeIndex ? __jsx(ActiveNavButton, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, label) : __jsx(NavButton, {
      key: index,
      onClick: function onClick() {
        return console.log("click");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, label));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NavButtons);
var NavButtonsArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "NavButtons__NavButtonsArea",
  componentId: "sc-1vmc5jl-0"
})(["display:flex;font-size:14px;color:rgba(255,255,255,0.6);flex-direction:row;align-items:baseline;width:100%;overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;white-space:nowrap;border-bottom:1px solid rgba(255,255,255,0.1);"]);
var ActiveNavButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "NavButtons__ActiveNavButton",
  componentId: "sc-1vmc5jl-1"
})(["display:flex;justify-content:center;margin-right:1.5vw;font-size:15px;letter-spacing:3px;text-transform:uppercase;padding:23px 15px;color:rgba(255,255,255,1);border-bottom:2px solid rgba(255,255,255,1);"]);
var NavButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "NavButtons__NavButton",
  componentId: "sc-1vmc5jl-2"
})(["margin-right:1.5vw;padding:23px 15px;letter-spacing:3px;text-transform:uppercase;border-bottom:2px solid rgba(255,255,255,0);&:hover{color:rgba(255,255,255,1);border-bottom:2px solid rgba(255,255,255,1);}"]);
/* const Button = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0);
  border-style: solid;
  border-width: 2px;
  border-color: #6152e7;
  margin-right: 10px;
  padding: 9px;
  padding-left: 10px;
  padding-right: 10px;
  min-width: 50px;
  border-radius: 8px;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: flex-start;
`; */

/***/ })

})
//# sourceMappingURL=draft.js.a32ffc3fb68661517ade.hot-update.js.map