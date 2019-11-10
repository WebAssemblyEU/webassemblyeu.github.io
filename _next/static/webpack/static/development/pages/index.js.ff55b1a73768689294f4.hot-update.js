webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Searchbox.tsx":
/*!**********************************!*\
  !*** ./components/Searchbox.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
var _jsxFileName = "/Users/thomas/Documents/Arbeit/Veranstaltungen/Meetups/WebAssembly/website/webassembly.eu/components/Searchbox.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var placeholder = "";

var SearchBox = function SearchBox(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      _onFocus = _ref.onFocus,
      _onBlur = _ref.onBlur;

  /*
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  */
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  /* const props = useSpring({
    maxWidth: focus || hover ? 1000 : 350,
    config: { tension: 500 }
  }); */

  return __jsx(SearchBoxArea, {
    onMouseEnter: function onMouseEnter() {
      setHover(true);
      setFocus(true);
    },
    onMouseLeave: function onMouseLeave() {
      setHover(false);
      setFocus(false);
    },
    onClick: function onClick() {
      setFocus(true);
      _onFocus && _onFocus();
      inputRef.current.focus();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaSearch"], {
    size: 22,
    color: "rgba(255, 255, 255, 0.5)",
    style: {
      margin: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("input", {
    style: {
      padding: "6px",
      display: "flex",
      flex: 1,
      borderRadius: "10px",
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderColor: "rgba(255, 255, 255, 0.05)",
      borderWidth: "0px",
      flexFlow: "row wrap",
      margin: "2px",
      outline: "none",
      fontSize: "18px",
      color: "white",
      caretColor: "white",
      overflow: "hidden"
    },
    ref: inputRef,
    type: "text",
    autoCorrect: "off",
    placeholder: placeholder,
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    value: value,
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") {
        e.target.blur();
      }
    },
    onMouseOver: function onMouseOver(e) {
      e.target.focus();
    },
    onFocus: function onFocus() {
      setFocus(true);
      _onFocus && _onFocus();
    },
    onBlur: function onBlur() {
      setFocus(false);
      _onBlur && _onBlur();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), value && __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdClear"], {
    size: 22,
    color: "rgba(255,255,255,0.5)",
    style: {
      marginRight: 10
    },
    onClick: function onClick() {
      return _onChange("");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBox);
var SearchBoxArea = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"])(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Searchbox__SearchBoxArea",
  componentId: "sc-1u5l641-0"
})(["padding:6px 10px;display:flex;flex:1 1 450px;border-radius:25px;background-color:rgba(255,255,255,0.09);border-style:solid;border-color:rgba(255,255,255,0.05);border-width:0;flex-flow:row wrap;align-items:center;flex-wrap:nowrap;max-width:1000px;margin:4.5vw 0;"])); //   const CategoryArea = animated(styled.div`
//   border-radius: 15px;
//   border-color: rgba(255, 255, 255, 0);
//   /* background-color: hsla(246, 76%, 61%, 0.8); */
//   border-style: solid;
//   /* box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.1); */
//   border-width: 0px;
//   flex-flow: row wrap;
//   display: flex;
//   padding: 0 20px;
//   margin: 0 0 0 15px;
//   height: 38px;
//   align-items: center;
//   flex-wrap: nowrap;
//   max-width: 1000px;
//   overflow: hidden;
// `);
// const CategoryType = animated(styled.div`
//   border-color: rgba(255, 255, 255, 0);
//   background-color: transparent;
//   border-style: solid;
//   /* box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.1); */
//   color: black;
//   border-width: 0px;
//   flex-flow: row wrap;
//   display: flex;
//   padding: 0 10px 0 20px;
//   height: 100%;
//   margin-left: 0px;
//   color: white;
//   align-items: center;
//   flex-wrap: nowrap;
//   max-width: 1000px;
//   &:hover {
//     background-color: rgba(255, 255, 255, 0.1);
//   }
// `);
// const ValueType = animated(styled.div`
//   border-color: rgba(255, 255, 255, 0.1);
//   background-color: transparent;
//   /* border-left: 1px; */
//   border-style: solid;
//   border-width: 0;
//   /* box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.1); */
//   flex-flow: row wrap;
//   display: flex;
//   padding: 0 20px 0 10px;
//   height: 100%;
//   margin-right: 0px;
//   color: white;
//   align-items: center;
//   flex-wrap: nowrap;
//   max-width: 1000px;
//   &:hover {
//     background-color: rgba(255, 255, 255, 0.1);
//   }
// `);

/***/ })

})
//# sourceMappingURL=index.js.ff55b1a73768689294f4.hot-update.js.map