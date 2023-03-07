"use strict";
(self["webpackChunkgraceshopper"] = self["webpackChunkgraceshopper"] || []).push([["client_features_home_Home_js"],{

/***/ "./client/features/home/Home.js":
/*!**************************************!*\
  !*** ./client/features/home/Home.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slider_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slider/Slider */ "./client/features/slider/Slider.js");



var Home = function Home() {
  var username = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.me.username;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Welcome, ", username ? username : "Guest"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slider_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./client/features/slider/BtnSlider.js":
/*!*********************************************!*\
  !*** ./client/features/slider/BtnSlider.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BtnSlider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Slider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.css */ "./client/features/slider/Slider.css");


function BtnSlider(_ref) {
  var direction = _ref.direction,
    moveSlide = _ref.moveSlide;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: moveSlide,
    className: direction === "next" ? "btn-slide next" : "btn-slide prev"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: direction === "next" ? "/icons/right-arrow.svg" : "/icons/left-arrow.svg"
  }));
}

/***/ }),

/***/ "./client/features/slider/Slider.js":
/*!******************************************!*\
  !*** ./client/features/slider/Slider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Slider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.css */ "./client/features/slider/Slider.css");
/* harmony import */ var _BtnSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BtnSlider */ "./client/features/slider/BtnSlider.js");
/* harmony import */ var _dataSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataSlider */ "./client/features/slider/dataSlider.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Slider() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    slideIndex = _useState2[0],
    setSlideIndex = _useState2[1];
  var nextSlide = function nextSlide() {
    if (slideIndex !== _dataSlider__WEBPACK_IMPORTED_MODULE_3__["default"].length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === _dataSlider__WEBPACK_IMPORTED_MODULE_3__["default"].length) {
      setSlideIndex(1);
    }
  };
  var prevSlide = function prevSlide() {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(_dataSlider__WEBPACK_IMPORTED_MODULE_3__["default"].length);
    }
  };
  var moveDot = function moveDot(index) {
    setSlideIndex(index);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var timer = setTimeout(function () {
      nextSlide();
    }, 4000);
    return function () {
      return clearTimeout(timer);
    };
  }, [slideIndex]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container-slider"
  }, _dataSlider__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (obj, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: obj.id,
      className: slideIndex === index + 1 ? "slide active-anim" : "slide"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "/Imgs/img".concat(index + 1, ".jpg")
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BtnSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    moveSlide: nextSlide,
    direction: "next"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BtnSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    moveSlide: prevSlide,
    direction: "prev"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container-dots"
  }, Array.from({
    length: 15
  }).map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      onClick: function onClick() {
        return moveDot(index + 1);
      },
      className: slideIndex === index + 1 ? "dot active" : "dot"
    });
  })));
}

/***/ }),

/***/ "./client/features/slider/dataSlider.js":
/*!**********************************************!*\
  !*** ./client/features/slider/dataSlider.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

var dataSlider = [{
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: "The Mountain Biker",
  subTitle: "Lorem"
}, {
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: "The Nature lover",
  subTitle: "Lorem"
}, {
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: "The X-Games",
  subTitle: "Lorem"
}, {
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: "The Gamer",
  subTitle: "Lorem"
}, {
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: "The Athlete",
  subTitle: "Lorem"
}, {
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: "The Romantic",
  subTitle: "Lorem"
}, {
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: "The Moon Rover",
  subTitle: "Lorem"
}, {
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: "The Bartender",
  subTitle: "Lorem"
}, {
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: "The Chef",
  subTitle: "Lorem"
}, {
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: "The Minimalist",
  subTitle: "Lorem"
}, {
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: "The Surfer",
  subTitle: "Lorem"
}, {
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: "The Photographer",
  subTitle: "Lorem"
}, {
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: "The Whole Family",
  subTitle: "Lorem"
}, {
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: "The Barista",
  subTitle: "Lorem"
}, {
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: "The Anime Lover",
  subTitle: "Lorem"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataSlider);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/features/slider/Slider.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/features/slider/Slider.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container-slider {\n  max-width: 700px;\n  height: 500px;\n  margin: 100px auto 0;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n}\n@media screen and (max-width: 700px){\n  .container-slider {\n    margin: 100px 10px 0;\n  }\n}\n.slide {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  opacity: 0;\n  transition: opacity ease-in-out 0.4s;\n}\n.slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.active-anim {\n  opacity: 1;\n}\n\n.btn-slide {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #f1f1f1;\n  border: 1px solid rgba(34, 34, 34, 0.287);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.btn-slide img {\n  width: 25px;\n  height: 25px;\n  pointer-events: none;\n}\n.prev {\n  top: 50%;\n  left: 20px;\n  transform: translateY(-60%);\n}\n.next {\n  top: 50%;\n  right: 20px;\n  transform: translateY(-60%);\n}\n\n\n.container-dots {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n}\n.dot {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 3px solid #f1f1f1;\n  margin: 0 5px;\n  background: #f1f1f1;\n}\n.dot.active {\n  background: rgb(32, 32, 32);\n}\n", "",{"version":3,"sources":["webpack://./client/features/slider/Slider.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,aAAa;EACb,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,0CAA0C;AAC5C;AACA;EACE;IACE,oBAAoB;EACtB;AACF;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,oCAAoC;AACtC;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,yCAAyC;EACzC,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,QAAQ;EACR,UAAU;EACV,2BAA2B;AAC7B;AACA;EACE,QAAQ;EACR,WAAW;EACX,2BAA2B;AAC7B;;;AAGA;EACE,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,2BAA2B;EAC3B,aAAa;AACf;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,2BAA2B;AAC7B","sourcesContent":[".container-slider {\n  max-width: 700px;\n  height: 500px;\n  margin: 100px auto 0;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n}\n@media screen and (max-width: 700px){\n  .container-slider {\n    margin: 100px 10px 0;\n  }\n}\n.slide {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  opacity: 0;\n  transition: opacity ease-in-out 0.4s;\n}\n.slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.active-anim {\n  opacity: 1;\n}\n\n.btn-slide {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #f1f1f1;\n  border: 1px solid rgba(34, 34, 34, 0.287);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.btn-slide img {\n  width: 25px;\n  height: 25px;\n  pointer-events: none;\n}\n.prev {\n  top: 50%;\n  left: 20px;\n  transform: translateY(-60%);\n}\n.next {\n  top: 50%;\n  right: 20px;\n  transform: translateY(-60%);\n}\n\n\n.container-dots {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n}\n.dot {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 3px solid #f1f1f1;\n  margin: 0 5px;\n  background: #f1f1f1;\n}\n.dot.active {\n  background: rgb(32, 32, 32);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./client/features/slider/Slider.css":
/*!*******************************************!*\
  !*** ./client/features/slider/Slider.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Slider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Slider.css */ "./node_modules/css-loader/dist/cjs.js!./client/features/slider/Slider.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Slider_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Slider_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Slider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Slider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ })

}]);
//# sourceMappingURL=client_features_home_Home_js.bundle.js.map