/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Dosis/static/Dosis-SemiBold.ttf */ "./src/fonts/Dosis/static/Dosis-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icons8-checkmark.png */ "./src/assets/icons/icons8-checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icons8-plus.png */ "./src/assets/icons/icons8-plus.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    --app-primary-color: #2563eb;
    --app-secondary-dark-color: #1e40af;
    --form-element-outline-color: #b0b0b0;
    --form-element-text-color: #808080;
    --box-shadow-color: rgb(144, 144, 144);

    --high-priority-color: #ff2e2e;
    --medium-priority-color: #ffc800;
    --low-priority-color: #00ff6a;
}

@font-face {
    font-family: Dosis-SemiBold;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

#content {
    display: flex;
    height: 100vh;
}

#sidebar {
    width: max(25%, 600px);
    background-color: var(--app-primary-color);
    box-shadow: 5px 0px 15px 0px var(--box-shadow-color);
}

#header-container {
    padding: 2rem;
    font-size: 1.5rem;
    color: white;
    font-family: Dosis-SemiBold;
}

#header-container > header > div {
    width: 100%;
    display: flex;
    align-items: center;
}

#app-logo {
    aspect-ratio: 1 / 1;
    width: 50px;
    margin-right: 0.5rem;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: contain;
}

nav > div > button {
    padding: 1.5rem;
    text-align: start;
}

nav button {
    color: white;
    background-color: var(--app-primary-color);
    font-size: 1.5rem;
    border-style: none;
    font-family: Dosis-Medium;
}

#navigation-container {
    padding: 2rem 4rem;
}

#task-navigation {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
}

.add-field {
    display: flex;
    align-items: center;
    padding-right: 2rem;
}

.start-button {
    flex: 1;
    padding: 1.5rem;
    text-align: start;
}

.add-button {
    height: 75%;
    aspect-ratio: 1 / 1;
    padding: 1.25rem;
    text-align: center;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: contain;
    border-radius: 25%;
}

#list-container {
    height: 16rem;
    padding: 2rem 0rem 2rem 4rem;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    color: white;
    font-size: 1.5rem;
}

nav span {
    margin-bottom: 4rem;
    font-family: Dosis-Medium;
}

#list-container:last-child {
    margin-bottom: 1rem;
}

/* Hide scrollbar for Chrome, Safari and Opera */
#list-container::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#list-container.example {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

#main-content { 
    width: 100%;
    padding: 4rem;
}
`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;;IAEV,4BAA4B;IAC5B,mCAAmC;IACnC,qCAAqC;IACrC,kCAAkC;IAClC,sCAAsC;;IAEtC,8BAA8B;IAC9B,gCAAgC;IAChC,6BAA6B;AACjC;;AAEA;IACI,2BAA2B;IAC3B,4CAAkD;AACtD;;AAEA;IACI,yBAAyB;IACzB,4CAAgD;AACpD;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,sBAAsB;IACtB,0CAA0C;IAC1C,oDAAoD;AACxD;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,oBAAoB;IACpB,yDAA2D;IAC3D,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,0CAA0C;IAC1C,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,OAAO;IACP,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,yDAAsD;IACtD,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;AACvB;;AAEA,gDAAgD;AAChD;IACI,aAAa;AACjB;;AAEA,4CAA4C;AAC5C;IACI,wBAAwB;IACxB,gBAAgB;IAChB,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    --app-primary-color: #2563eb;\r\n    --app-secondary-dark-color: #1e40af;\r\n    --form-element-outline-color: #b0b0b0;\r\n    --form-element-text-color: #808080;\r\n    --box-shadow-color: rgb(144, 144, 144);\r\n\r\n    --high-priority-color: #ff2e2e;\r\n    --medium-priority-color: #ffc800;\r\n    --low-priority-color: #00ff6a;\r\n}\r\n\r\n@font-face {\r\n    font-family: Dosis-SemiBold;\r\n    src: url(../fonts/Dosis/static/Dosis-SemiBold.ttf);\r\n}\r\n\r\n@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    height: 100vh;\r\n}\r\n\r\n#sidebar {\r\n    width: max(25%, 600px);\r\n    background-color: var(--app-primary-color);\r\n    box-shadow: 5px 0px 15px 0px var(--box-shadow-color);\r\n}\r\n\r\n#header-container {\r\n    padding: 2rem;\r\n    font-size: 1.5rem;\r\n    color: white;\r\n    font-family: Dosis-SemiBold;\r\n}\r\n\r\n#header-container > header > div {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#app-logo {\r\n    aspect-ratio: 1 / 1;\r\n    width: 50px;\r\n    margin-right: 0.5rem;\r\n    background-image: url(../assets/icons/icons8-checkmark.png);\r\n    background-size: contain;\r\n}\r\n\r\nnav > div > button {\r\n    padding: 1.5rem;\r\n    text-align: start;\r\n}\r\n\r\nnav button {\r\n    color: white;\r\n    background-color: var(--app-primary-color);\r\n    font-size: 1.5rem;\r\n    border-style: none;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n#navigation-container {\r\n    padding: 2rem 4rem;\r\n}\r\n\r\n#task-navigation {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n.add-field {\r\n    display: flex;\r\n    align-items: center;\r\n    padding-right: 2rem;\r\n}\r\n\r\n.start-button {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    text-align: start;\r\n}\r\n\r\n.add-button {\r\n    height: 75%;\r\n    aspect-ratio: 1 / 1;\r\n    padding: 1.25rem;\r\n    text-align: center;\r\n    background-image: url(../assets/icons/icons8-plus.png);\r\n    background-size: contain;\r\n    border-radius: 25%;\r\n}\r\n\r\n#list-container {\r\n    height: 16rem;\r\n    padding: 2rem 0rem 2rem 4rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-y: scroll;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n}\r\n\r\nnav span {\r\n    margin-bottom: 4rem;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n#list-container:last-child {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n/* Hide scrollbar for Chrome, Safari and Opera */\r\n#list-container::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n/* Hide scrollbar for IE, Edge and Firefox */\r\n#list-container.example {\r\n    -ms-overflow-style: none;\r\n    /* IE and Edge */\r\n    scrollbar-width: none;\r\n    /* Firefox */\r\n}\r\n\r\n#main-content { \r\n    width: 100%;\r\n    padding: 4rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/taskDialog.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/taskDialog.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Dosis/static/Dosis-SemiBold.ttf */ "./src/fonts/Dosis/static/Dosis-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icons8-checkmark.png */ "./src/assets/icons/icons8-checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-SemiBold;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

#add-task-dialog {
    position: relative;
    margin: auto;
    width: max(40%, 700px);
    height: fit-content;
    padding: 2rem;
    font-family: Dosis-Medium;
    border-style: none;
    border-radius: 10px;
    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);
}

#close-button-container {
    position: absolute;
    top: 2rem;
    right: 2rem;
}

#close-button {
    padding: 0.5rem 0.7rem;
    background-color: var(--app-primary-color);
    border-style: none;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
}

#dialog-header-container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

#logo-container {
    width: 60px;
    aspect-ratio: 1 / 1;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: contain;
    margin-right: 0.5rem;
}

#add-task-dialog h2 {
    font-size: 3rem;
    color: var(--app-primary-color);
}

.field {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    margin-bottom: 1.5rem;
}

.field textarea {
    font-family: Dosis-Medium;
    font-size: 1.2rem;
    border-style: none;
    outline: 1px solid var(--form-element-text-color);
    padding: 0.5rem;
}

#priority-label-container {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

#priority-box-container {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    font-size: 1rem;
    color: white;
}

#priority-label-container > div > div{
    width: 20px;
    height: 20px;
    margin-right: 0.3rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.high-priority-box {
    background-color: var(--high-priority-color);
}

.medium-priority-box {
    background-color: var(--medium-priority-color);
}

.low-priority-box {
    background-color: var(--low-priority-color);
}

#add-task-dialog label{
    font-size: 1.5rem;
    color: var(--form-element-text-color);
}

.label-margin {
    margin-bottom: 0.5rem;
}

#add-task-dialog input{
    font-size: 1.5rem;
    line-height: 3rem;
    border-style: none;
    color: var(--form-element-text-color);
    outline: 1px solid var(--form-element-text-color);
    padding: 0rem 0.5rem;
    font-family: Dosis-Medium;
}

#add-task-dialog select{
    font-size: 1.3rem;
    height: 3.3rem;
    border-style: none;
    color: var(--form-element-text-color);
    outline: 1px solid var(--form-element-text-color);
    padding: 0rem 0.5rem;
    font-family: Dosis-Medium;
}

.form-buttons {
    margin-top: 4rem;
    display: flex;
    gap: 2rem;
}

.form-buttons button {
    flex: 1;
    padding: 1.5rem;
    font-size: 1.2rem;
    font-family: Dosis-Medium;
    background-color: var(--app-primary-color);
    color: white;
    border-style: none;
    border-radius: 5px;
}

#tasks {
    width: 100%;
}


`, "",{"version":3,"sources":["webpack://./src/styles/taskDialog.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,4CAAkD;AACtD;;AAEA;IACI,yBAAyB;IACzB,4CAAgD;AACpD;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,oDAAoD;AACxD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,0CAA0C;IAC1C,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,yDAA2D;IAC3D,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,iDAAiD;IACjD,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,iBAAiB;IACjB,qCAAqC;AACzC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,qCAAqC;IACrC,iDAAiD;IACjD,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,qCAAqC;IACrC,iDAAiD;IACjD,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,OAAO;IACP,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,0CAA0C;IAC1C,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf","sourcesContent":["@font-face {\r\n    font-family: Dosis-SemiBold;\r\n    src: url(../fonts/Dosis/static/Dosis-SemiBold.ttf);\r\n}\r\n\r\n@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#add-task-dialog {\r\n    position: relative;\r\n    margin: auto;\r\n    width: max(40%, 700px);\r\n    height: fit-content;\r\n    padding: 2rem;\r\n    font-family: Dosis-Medium;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n}\r\n\r\n#close-button-container {\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 2rem;\r\n}\r\n\r\n#close-button {\r\n    padding: 0.5rem 0.7rem;\r\n    background-color: var(--app-primary-color);\r\n    border-style: none;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n}\r\n\r\n#dialog-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#logo-container {\r\n    width: 60px;\r\n    aspect-ratio: 1 / 1;\r\n    background-image: url(../assets/icons/icons8-checkmark.png);\r\n    background-size: contain;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n#add-task-dialog h2 {\r\n    font-size: 3rem;\r\n    color: var(--app-primary-color);\r\n}\r\n\r\n.field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 2rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.field textarea {\r\n    font-family: Dosis-Medium;\r\n    font-size: 1.2rem;\r\n    border-style: none;\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0.5rem;\r\n}\r\n\r\n#priority-label-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#priority-box-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 1rem;\r\n    font-size: 1rem;\r\n    color: white;\r\n}\r\n\r\n#priority-label-container > div > div{\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 0.3rem;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.high-priority-box {\r\n    background-color: var(--high-priority-color);\r\n}\r\n\r\n.medium-priority-box {\r\n    background-color: var(--medium-priority-color);\r\n}\r\n\r\n.low-priority-box {\r\n    background-color: var(--low-priority-color);\r\n}\r\n\r\n#add-task-dialog label{\r\n    font-size: 1.5rem;\r\n    color: var(--form-element-text-color);\r\n}\r\n\r\n.label-margin {\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#add-task-dialog input{\r\n    font-size: 1.5rem;\r\n    line-height: 3rem;\r\n    border-style: none;\r\n    color: var(--form-element-text-color);\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0rem 0.5rem;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n#add-task-dialog select{\r\n    font-size: 1.3rem;\r\n    height: 3.3rem;\r\n    border-style: none;\r\n    color: var(--form-element-text-color);\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0rem 0.5rem;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n.form-buttons {\r\n    margin-top: 4rem;\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n.form-buttons button {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    font-size: 1.2rem;\r\n    font-family: Dosis-Medium;\r\n    background-color: var(--app-primary-color);\r\n    color: white;\r\n    border-style: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n#tasks {\r\n    width: 100%;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/taskPanel.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/taskPanel.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    --app-primary-color: #2563eb;
    --app-secondary-dark-color: #1e40af;
    --form-element-outline-color: #b0b0b0;
    --form-element-text-color: #808080;
    --box-shadow-color: rgb(144, 144, 144);

    --high-priority-color: #ff2e2e;
    --medium-priority-color: #ffc800;
    --low-priority-color: #00ff6a;
}

@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#panel-container {
    display: flex;
    width: 100%;
    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);
    font-family: Dosis-Medium;
    color: var(--form-element-text-color);
    margin-bottom: 2rem;
}

#panel-container > div {
    height: 6rem;
}

#priority-stripe {
    width: 1rem;
}

#task-title-container {
    display: flex;
    align-items: center;
    width: 33%;
    padding: 0rem 2rem;
    font-size: 1.5rem;
}

#task-due-date-container {
    display: flex;
    align-items: center;
    width: 33%;
    padding: 0rem 2rem;
    justify-content: center;
    font-size: 1.2rem;
}

#task-checkbox-container {
    display: flex;
    align-items: center;
    width: 33%;
    padding: 0rem 2rem;
    justify-content: flex-end;
    font-size: 1.5rem;
}

#task-checkbox-container input {
    width: 2rem;
    height: 2rem;
}

#utility-container {
    display: flex;
    flex-direction: column;
}

#utility-container > button{
    width: 30px;
    flex: 1;
    background-color: var(--app-primary-color);
    border-style: none;
}

#utility-container .mid {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
}

.high-priority {
    background-color: var(--high-priority-color);
}

.medium-priority {
    background-color: var(--medium-priority-color);
}

.low-priority {
    background-color: var(--low-priority-color);
}


`, "",{"version":3,"sources":["webpack://./src/styles/taskPanel.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;;IAEV,4BAA4B;IAC5B,mCAAmC;IACnC,qCAAqC;IACrC,kCAAkC;IAClC,sCAAsC;;IAEtC,8BAA8B;IAC9B,gCAAgC;IAChC,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;IACzB,4CAAgD;AACpD;;AAEA;IACI,aAAa;IACb,WAAW;IACX,oDAAoD;IACpD,yBAAyB;IACzB,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,OAAO;IACP,0CAA0C;IAC1C,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,2CAA2C;AAC/C","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    --app-primary-color: #2563eb;\r\n    --app-secondary-dark-color: #1e40af;\r\n    --form-element-outline-color: #b0b0b0;\r\n    --form-element-text-color: #808080;\r\n    --box-shadow-color: rgb(144, 144, 144);\r\n\r\n    --high-priority-color: #ff2e2e;\r\n    --medium-priority-color: #ffc800;\r\n    --low-priority-color: #00ff6a;\r\n}\r\n\r\n@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#panel-container {\r\n    display: flex;\r\n    width: 100%;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n    font-family: Dosis-Medium;\r\n    color: var(--form-element-text-color);\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#panel-container > div {\r\n    height: 6rem;\r\n}\r\n\r\n#priority-stripe {\r\n    width: 1rem;\r\n}\r\n\r\n#task-title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 33%;\r\n    padding: 0rem 2rem;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#task-due-date-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 33%;\r\n    padding: 0rem 2rem;\r\n    justify-content: center;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n#task-checkbox-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 33%;\r\n    padding: 0rem 2rem;\r\n    justify-content: flex-end;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#task-checkbox-container input {\r\n    width: 2rem;\r\n    height: 2rem;\r\n}\r\n\r\n#utility-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#utility-container > button{\r\n    width: 30px;\r\n    flex: 1;\r\n    background-color: var(--app-primary-color);\r\n    border-style: none;\r\n}\r\n\r\n#utility-container .mid {\r\n    border-top: 1px solid white;\r\n    border-bottom: 1px solid white;\r\n}\r\n\r\n.high-priority {\r\n    background-color: var(--high-priority-color);\r\n}\r\n\r\n.medium-priority {\r\n    background-color: var(--medium-priority-color);\r\n}\r\n\r\n.low-priority {\r\n    background-color: var(--low-priority-color);\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/taskDialog.css":
/*!***********************************!*\
  !*** ./src/styles/taskDialog.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskDialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./taskDialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/taskDialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_taskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_taskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/taskPanel.css":
/*!**********************************!*\
  !*** ./src/styles/taskPanel.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskPanel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./taskPanel.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/taskPanel.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_taskPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_taskPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/content/contentElement.js":
/*!**************************************************!*\
  !*** ./src/components/content/contentElement.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentElement: () => (/* binding */ createContentElement),
/* harmony export */   getContentElement: () => (/* binding */ getContentElement)
/* harmony export */ });
function createContentElement() {
    const content = document.createElement('div');
    content.id = 'content';

    document.body.appendChild(content);
}

function getContentElement() {
    return document.querySelector('#content');
}



/***/ }),

/***/ "./src/components/dialogs/taskDialog.js":
/*!**********************************************!*\
  !*** ./src/components/dialogs/taskDialog.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskDialog: () => (/* binding */ createTaskDialog),
/* harmony export */   getTaskDialog: () => (/* binding */ getTaskDialog)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/data */ "./src/data/data.js");
/* harmony import */ var _factories_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../factories/task */ "./src/factories/task.js");
/* harmony import */ var _styles_taskDialog_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/taskDialog.css */ "./src/styles/taskDialog.css");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main/main */ "./src/components/main/main.js");
/* harmony import */ var _task_taskPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task/taskPanel */ "./src/components/task/taskPanel.js");






function createTaskDialog() {
    //Creating all dialog elements
    const taskDialog = document.createElement('dialog');
    const form = document.createElement('form');

    const closeDialogButtonContainer = document.createElement('div');
    const closeDialogButton = document.createElement('button');

    const dialogHeaderContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const dialogHeader = document.createElement('h2');

    const fieldsContainer = document.createElement('div');

    const titleField = document.createElement('div');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');

    const descriptionField = document.createElement('div');
    const descriptionLabel = document.createElement('label');
    const descriptionArea = document.createElement('textarea');

    const dueDateField = document.createElement('div');
    const dueDateLabel = document.createElement('label');
    const dueDateInput = document.createElement('input');

    const priorityField = document.createElement('div');

    const priorityLabelContainer = document.createElement('div');
    const priorityLabel = document.createElement('label');
    const priorityBoxContainer = document.createElement('div');
    const highPriorityBox = document.createElement('div');
    const mediumPriorityBox = document.createElement('div');
    const lowPriorityBox = document.createElement('div');

    const prioritySelect = document.createElement('select');
    const defaultOption = document.createElement('option');
    const highPriorityOption = document.createElement('option');
    const mediumPriorityOption = document.createElement('option');
    const lowPriorityOption = document.createElement('option');

    const formButtons = document.createElement('div');
    const addTaskButton = document.createElement('button');
    const resetFormButton = document.createElement('button');

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    dialogHeader.textContent = 'Add a Task';

    titleLabel.textContent = 'Title';
    descriptionLabel.textContent = 'Description';
    dueDateLabel.textContent = 'Due Date';
    priorityLabel.textContent = 'Priority';

    addTaskButton.textContent = 'Add';
    resetFormButton.textContent = 'Reset';

    //Form element properties
    form.method = 'dialog';

    titleLabel.for = 'task-title';
    titleLabel.name = 'title';
    titleInput.name = 'title';
    titleInput.type = 'text';

    descriptionLabel.for = 'task-description'
    descriptionLabel.name = 'description';
    descriptionArea.name = 'description';
    descriptionArea.rows = '4';
    descriptionArea.style.resize = 'none'

    dueDateLabel.for = 'task-due-date';
    dueDateLabel.name = 'due-date';
    dueDateInput.name = 'due-date';
    dueDateInput.type = 'date';

    priorityLabel.for = 'task-priority';
    priorityLabel.name = 'priority';
    prioritySelect.name = 'priority';

    defaultOption.disabled = 'true';
    defaultOption.selected = 'true';
    defaultOption.text = '--Priority--';
    highPriorityOption.textContent = 'High';
    mediumPriorityOption.textContent = 'Medium';
    lowPriorityOption.textContent = 'Low';

    addTaskButton.type = 'submit';
    resetFormButton.type = 'clear';

    //Assignment of id selectors to dialog elements 
    taskDialog.id = 'add-task-dialog';
    closeDialogButtonContainer.id = 'close-button-container';
    closeDialogButton.id = 'close-button';
    dialogHeaderContainer.id = 'dialog-header-container';
    logoContainer.id = 'logo-container';
    titleInput.id = 'title-input';
    descriptionArea.id = 'task-descritption';
    dueDateInput.id = 'task-due-date';
    priorityLabelContainer.id = 'priority-label-container';
    priorityBoxContainer.id = 'priority-box-container';
    prioritySelect.id = 'task-priority';
    addTaskButton.id = 'add-task-button';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('field');
    descriptionField.classList.add('field');
    dueDateField.classList.add('field');
    priorityField.classList.add('field');
    titleLabel.classList.add('label-margin');
    descriptionLabel.classList.add('label-margin');
    dueDateLabel.classList.add('label-margin');
    highPriorityBox.classList.add('high-priority-box');
    mediumPriorityBox.classList.add('medium-priority-box');
    lowPriorityBox.classList.add('low-priority-box');
    formButtons.classList.add('form-buttons');

    //Creating the structure of the dialog
    taskDialog.appendChild(form);

    form.appendChild(closeDialogButtonContainer);
    form.appendChild(dialogHeaderContainer);
    form.appendChild(fieldsContainer);

    closeDialogButtonContainer.appendChild(closeDialogButton);
    dialogHeaderContainer.appendChild(logoContainer);
    dialogHeaderContainer.appendChild(dialogHeader);

    fieldsContainer.appendChild(titleField);
    fieldsContainer.appendChild(descriptionField);
    fieldsContainer.appendChild(dueDateField);
    fieldsContainer.appendChild(priorityField);
    fieldsContainer.appendChild(formButtons);

    titleField.appendChild(titleLabel);
    titleField.appendChild(titleInput);

    descriptionField.appendChild(descriptionLabel);
    descriptionField.appendChild(descriptionArea);

    dueDateField.appendChild(dueDateLabel);
    dueDateField.appendChild(dueDateInput);

    priorityField.appendChild(priorityLabelContainer);
    priorityField.appendChild(prioritySelect);

    priorityLabelContainer.appendChild(priorityLabel);
    priorityLabelContainer.appendChild(priorityBoxContainer);

    priorityBoxContainer.appendChild(highPriorityBox);
    priorityBoxContainer.appendChild(mediumPriorityBox);
    priorityBoxContainer.appendChild(lowPriorityBox);

    prioritySelect.appendChild(defaultOption);
    prioritySelect.appendChild(highPriorityOption);
    prioritySelect.appendChild(mediumPriorityOption);
    prioritySelect.appendChild(lowPriorityOption);

    formButtons.appendChild(addTaskButton);
    formButtons.appendChild(resetFormButton);

    //Adding event listeners to buttons
    addTaskButton.addEventListener('click', () => {
        let taskTitle = titleInput.value;
        let taskDescription = descriptionArea.value;
        let taskDueDate = dueDateInput.value;
        let taskPriority = prioritySelect.value;
 
        //Creating a task object
        const task = (0,_factories_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(_data_data__WEBPACK_IMPORTED_MODULE_0__.currentTaskIndex, taskTitle, taskDescription, taskDueDate, taskPriority);
        _data_data__WEBPACK_IMPORTED_MODULE_0__.todoTasks.push(task);

        //Creating a panel for the task object
        const panel = (0,_task_taskPanel__WEBPACK_IMPORTED_MODULE_4__.createTaskPanel)(task);
        _data_data__WEBPACK_IMPORTED_MODULE_0__.todoTaskPanels.push(panel);

        (0,_data_data__WEBPACK_IMPORTED_MODULE_0__.incrementCurrentTaskIndex)();

        (0,_main_main__WEBPACK_IMPORTED_MODULE_3__.getMainContent)().appendChild(panel);
    })

    return taskDialog;
}

function getTaskDialog() {
    return document.querySelector('#add-task-dialog');
}

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader() {
    const header = document.createElement('div');
    const headerTag = document.createElement('header');
    const divOne = document.createElement('div');
    const appLogo = document.createElement('div');
    const appTitle = document.createElement('h1');

    header.id = 'header-container';
    appLogo.id = 'app-logo'

    appTitle.textContent = 'Dilligence';

    header.appendChild(headerTag);
    headerTag.appendChild(divOne);
    divOne.appendChild(appLogo);
    divOne.appendChild(appTitle);

    return header;
}

/***/ }),

/***/ "./src/components/main/main.js":
/*!*************************************!*\
  !*** ./src/components/main/main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMainContent: () => (/* binding */ createMainContent),
/* harmony export */   getMainContent: () => (/* binding */ getMainContent)
/* harmony export */ });
function createMainContent() {
    const main = document.createElement('div');
    main.id = 'main-content';

    return main;
}

function getMainContent() {
    return document.querySelector('#main-content');
}

/***/ }),

/***/ "./src/components/navigation/navigation.js":
/*!*************************************************!*\
  !*** ./src/components/navigation/navigation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNavigation: () => (/* binding */ createNavigation)
/* harmony export */ });
/* harmony import */ var _dialogs_taskDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dialogs/taskDialog */ "./src/components/dialogs/taskDialog.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/index.css */ "./src/styles/index.css");



function createNavigation() {
    //Creating all navigation elements
    const navigation = document.createElement('div');
    const navigationTag = document.createElement('nav');

    const taskNavigation = document.createElement('div');
    const taskField = document.createElement('div');
    const taskButton = document.createElement('button');
    const addTaskButtonContainer = document.createElement('div');
    const addTaskButton = document.createElement('button');
    const todayButton = document.createElement('button');
    const thisWeekButton = document.createElement('button')

    const listNavigation = document.createElement('div');
    const listField = document.createElement('div');
    const listButton = document.createElement('button');
    const addListButtonContainer = document.createElement('div');
    const addListButton = document.createElement('button');
    const listContainer = document.createElement('div');

    //Assigning id selectors to nav elements
    navigation.id = 'navigation-container';
    taskNavigation.id = 'task-navigation';
    addTaskButton.id = 'add-task-button';
    listContainer.id = 'list-container';

    //Assigning class selectors to nav elements
    taskField.classList.add('add-field');
    taskButton.classList.add('start-button');
    addTaskButtonContainer.classList.add('add-button-container');
    addTaskButton.classList.add('add-button');
    listField.classList.add('add-field');
    listButton.classList.add('start-button');
    addListButtonContainer.classList.add('add-button-container');
    addListButton.classList.add('add-button');
   
    //Assigning text values to nav elements
    taskButton.textContent = 'Tasks';
    todayButton.textContent = 'Today';
    thisWeekButton.textContent = 'This Week';
    listButton.textContent = 'Lists';

    //Creating the navigation structure
    navigation.appendChild(navigationTag);
    navigationTag.appendChild(taskNavigation);
    navigationTag.appendChild(listNavigation);

    taskNavigation.appendChild(taskField);
    taskNavigation.appendChild(todayButton);
    taskNavigation.appendChild(thisWeekButton);

    taskField.appendChild(taskButton);
    taskField.appendChild(addTaskButtonContainer);
    addTaskButtonContainer.appendChild(addTaskButton);

    listNavigation.appendChild(listField);
    listNavigation.appendChild(listContainer);

    listField.appendChild(listButton);
    listField.appendChild(addListButtonContainer);
    addListButtonContainer.appendChild(addListButton);

    //Adding Event listeners to buttons 
    addTaskButton.addEventListener('click', () => {
        (0,_dialogs_taskDialog__WEBPACK_IMPORTED_MODULE_0__.getTaskDialog)().showModal();
    });

    return navigation;
}


/***/ }),

/***/ "./src/components/sidebar/sidebar.js":
/*!*******************************************!*\
  !*** ./src/components/sidebar/sidebar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSidebar: () => (/* binding */ createSidebar)
/* harmony export */ });
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header */ "./src/components/header/header.js");
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/navigation */ "./src/components/navigation/navigation.js");



function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';

    sidebar.appendChild((0,_header_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)());
    sidebar.appendChild((0,_navigation_navigation__WEBPACK_IMPORTED_MODULE_1__.createNavigation)());

    return sidebar;
}




/***/ }),

/***/ "./src/components/task/taskPanel.js":
/*!******************************************!*\
  !*** ./src/components/task/taskPanel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskPanel: () => (/* binding */ createTaskPanel)
/* harmony export */ });
/* harmony import */ var _styles_taskPanel_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/taskPanel.css */ "./src/styles/taskPanel.css");


function createTaskPanel(task) {
    const panel = document.createElement('div');

    const priorityStripe = document.createElement('div');
    const taskTitleContainer = document.createElement('div');
    const taskDueDateContainer = document.createElement('div');
    const taskCheckboxContainer = document.createElement('div');
    const utilityContainer = document.createElement('div');

    const taskTitle = document.createElement('h3');
    const taskDueDate = document.createElement('span');
    const checkbox = document.createElement('input');

    const detailsButton = document.createElement('button');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    //Assigning properties of elements
    checkbox.type = 'checkbox';

    //Assigning id selectors to panel elements
    panel.id = 'panel-container';
    priorityStripe.id = 'priority-stripe';
    taskTitleContainer.id = 'task-title-container';
    taskDueDateContainer.id = 'task-due-date-container';
    taskCheckboxContainer.id = 'task-checkbox-container';
    utilityContainer.id = 'utility-container';

    //Assigning class selectors to panel elements
    editButton.classList.add('mid');
    priorityStripe.classList.add('high-priority');

    //Appending task attributes to the panel;
    taskTitle.textContent = task.title;
    taskDueDate.textContent = task.dueDate;

    if(task.priority == 'High') {
        priorityStripe.classList.add('high-priority');
    }
    if(task.priority == 'Medium') {
        priorityStripe.classList.add('medium-priority');
    }
    if(task.priority == 'Low') {
        priorityStripe.classList.add('low-priority');
    }

    //Connecting the panel to the task
    panel.dataset.id = task.id;

    //Creating the structure of the panel
    panel.appendChild(priorityStripe);
    panel.appendChild(taskTitleContainer);
    panel.appendChild(taskDueDateContainer);
    panel.appendChild(taskCheckboxContainer);
    panel.appendChild(utilityContainer);

    taskTitleContainer.appendChild(taskTitle);
    taskDueDateContainer.appendChild(taskDueDate);
    taskCheckboxContainer.appendChild(checkbox);

    utilityContainer.appendChild(detailsButton);
    utilityContainer.appendChild(editButton);
    utilityContainer.appendChild(deleteButton);

    return panel;
}

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentTaskIndex: () => (/* binding */ currentTaskIndex),
/* harmony export */   incrementCurrentTaskIndex: () => (/* binding */ incrementCurrentTaskIndex),
/* harmony export */   todoLists: () => (/* binding */ todoLists),
/* harmony export */   todoTaskPanels: () => (/* binding */ todoTaskPanels),
/* harmony export */   todoTasks: () => (/* binding */ todoTasks)
/* harmony export */ });
const todoTasks = [];
const todoLists = [];

const todoTaskPanels = [];

let currentTaskIndex = 0;

function incrementCurrentTaskIndex() {
    currentTaskIndex++;
}



/***/ }),

/***/ "./src/factories/task.js":
/*!*******************************!*\
  !*** ./src/factories/task.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
function createTask(id, title, description, dueDate, priority) {
    return { id, title, description, dueDate, priority };
}

/***/ }),

/***/ "./src/helpers/init.js":
/*!*****************************!*\
  !*** ./src/helpers/init.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeIndexPage: () => (/* binding */ initializeIndexPage)
/* harmony export */ });
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _components_content_contentElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/content/contentElement */ "./src/components/content/contentElement.js");
/* harmony import */ var _components_main_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main/main */ "./src/components/main/main.js");
/* harmony import */ var _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar/sidebar */ "./src/components/sidebar/sidebar.js");
/* harmony import */ var _components_dialogs_taskDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/dialogs/taskDialog */ "./src/components/dialogs/taskDialog.js");







function initializeIndexPage() {
    document.body.appendChild((0,_components_dialogs_taskDialog__WEBPACK_IMPORTED_MODULE_4__.createTaskDialog)());

    (0,_components_content_contentElement__WEBPACK_IMPORTED_MODULE_1__.createContentElement)();
    const content = (0,_components_content_contentElement__WEBPACK_IMPORTED_MODULE_1__.getContentElement)();

    content.appendChild((0,_components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__.createSidebar)());
    content.appendChild((0,_components_main_main__WEBPACK_IMPORTED_MODULE_2__.createMainContent)());
}

/***/ }),

/***/ "./src/assets/icons/icons8-checkmark.png":
/*!***********************************************!*\
  !*** ./src/assets/icons/icons8-checkmark.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/126a61d2adc34db75537.png";

/***/ }),

/***/ "./src/assets/icons/icons8-plus.png":
/*!******************************************!*\
  !*** ./src/assets/icons/icons8-plus.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7642a210258593520062.png";

/***/ }),

/***/ "./src/fonts/Dosis/static/Dosis-Medium.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/Dosis/static/Dosis-Medium.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/40bfe3de1354a2b1be8b.ttf";

/***/ }),

/***/ "./src/fonts/Dosis/static/Dosis-SemiBold.ttf":
/*!***************************************************!*\
  !*** ./src/fonts/Dosis/static/Dosis-SemiBold.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7a463c514085e7be1560.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/init */ "./src/helpers/init.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");



(0,_helpers_init__WEBPACK_IMPORTED_MODULE_0__.initializeIndexPage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDRGQUE0RixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVLENBQUMsd0RBQWdCO0FBQ2hELFFBQVEsaURBQVM7QUFDakI7QUFDQTtBQUNBLHNCQUFzQixnRUFBZTtBQUNyQyxRQUFRLHNEQUFjO0FBQ3RCO0FBQ0EsUUFBUSxxRUFBeUI7QUFDakM7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Q05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXNEO0FBQ3pCO0FBQzdCO0FBQ0Esa0VBQW1CLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3Rhc2tEaWFsb2cuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdGFza1BhbmVsLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3Rhc2tEaWFsb2cuY3NzP2EwMDQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy90YXNrUGFuZWwuY3NzPzIwZDgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnRFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2RpYWxvZ3MvdGFza0RpYWxvZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2svdGFza1BhbmVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYXRhL2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZhY3Rvcmllcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWxwZXJzL2luaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0Rvc2lzL3N0YXRpYy9Eb3Npcy1TZW1pQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Eb3Npcy9zdGF0aWMvRG9zaXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy9pY29uczgtY2hlY2ttYXJrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy9pY29uczgtcGx1cy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgLS1hcHAtcHJpbWFyeS1jb2xvcjogIzI1NjNlYjtcclxuICAgIC0tYXBwLXNlY29uZGFyeS1kYXJrLWNvbG9yOiAjMWU0MGFmO1xyXG4gICAgLS1mb3JtLWVsZW1lbnQtb3V0bGluZS1jb2xvcjogI2IwYjBiMDtcclxuICAgIC0tZm9ybS1lbGVtZW50LXRleHQtY29sb3I6ICM4MDgwODA7XHJcbiAgICAtLWJveC1zaGFkb3ctY29sb3I6IHJnYigxNDQsIDE0NCwgMTQ0KTtcclxuXHJcbiAgICAtLWhpZ2gtcHJpb3JpdHktY29sb3I6ICNmZjJlMmU7XHJcbiAgICAtLW1lZGl1bS1wcmlvcml0eS1jb2xvcjogI2ZmYzgwMDtcclxuICAgIC0tbG93LXByaW9yaXR5LWNvbG9yOiAjMDBmZjZhO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBEb3Npcy1TZW1pQm9sZDtcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBEb3Npcy1NZWRpdW07XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHtcclxuICAgIHdpZHRoOiBtYXgoMjUlLCA2MDBweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeS1jb2xvcik7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDE1cHggMHB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xyXG59XHJcblxyXG4jaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogRG9zaXMtU2VtaUJvbGQ7XHJcbn1cclxuXHJcbiNoZWFkZXItY29udGFpbmVyID4gaGVhZGVyID4gZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNhcHAtbG9nbyB7XHJcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxubmF2ID4gZGl2ID4gYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG59XHJcblxyXG5uYXYgYnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IERvc2lzLU1lZGl1bTtcclxufVxyXG5cclxuI25hdmlnYXRpb24tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcclxufVxyXG5cclxuI3Rhc2stbmF2aWdhdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbn1cclxuXHJcbi5hZGQtZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4uc3RhcnQtYnV0dG9uIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG5cclxuLmFkZC1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxufVxyXG5cclxuI2xpc3QtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTZyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtIDByZW0gMnJlbSA0cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxubmF2IHNwYW4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBEb3Npcy1NZWRpdW07XHJcbn1cclxuXHJcbiNsaXN0LWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cclxuI2xpc3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cclxuI2xpc3QtY29udGFpbmVyLmV4YW1wbGUge1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgLyogSUUgYW5kIEVkZ2UgKi9cclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuICAgIC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuI21haW4tY29udGVudCB7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA0cmVtO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7O0lBRVYsNEJBQTRCO0lBQzVCLG1DQUFtQztJQUNuQyxxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLHNDQUFzQzs7SUFFdEMsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNENBQWtEO0FBQ3REOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBDQUEwQztJQUMxQyxvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHlEQUEyRDtJQUMzRCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5REFBc0Q7SUFDdEQsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUEsZ0RBQWdEO0FBQ2hEO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSw0Q0FBNEM7QUFDNUM7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gICAgLS1hcHAtcHJpbWFyeS1jb2xvcjogIzI1NjNlYjtcXHJcXG4gICAgLS1hcHAtc2Vjb25kYXJ5LWRhcmstY29sb3I6ICMxZTQwYWY7XFxyXFxuICAgIC0tZm9ybS1lbGVtZW50LW91dGxpbmUtY29sb3I6ICNiMGIwYjA7XFxyXFxuICAgIC0tZm9ybS1lbGVtZW50LXRleHQtY29sb3I6ICM4MDgwODA7XFxyXFxuICAgIC0tYm94LXNoYWRvdy1jb2xvcjogcmdiKDE0NCwgMTQ0LCAxNDQpO1xcclxcblxcclxcbiAgICAtLWhpZ2gtcHJpb3JpdHktY29sb3I6ICNmZjJlMmU7XFxyXFxuICAgIC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yOiAjZmZjODAwO1xcclxcbiAgICAtLWxvdy1wcmlvcml0eS1jb2xvcjogIzAwZmY2YTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBEb3Npcy1TZW1pQm9sZDtcXHJcXG4gICAgc3JjOiB1cmwoLi4vZm9udHMvRG9zaXMvc3RhdGljL0Rvc2lzLVNlbWlCb2xkLnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogRG9zaXMtTWVkaXVtO1xcclxcbiAgICBzcmM6IHVybCguLi9mb250cy9Eb3Npcy9zdGF0aWMvRG9zaXMtTWVkaXVtLnR0Zik7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIge1xcclxcbiAgICB3aWR0aDogbWF4KDI1JSwgNjAwcHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCAwcHggMTVweCAwcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IERvc2lzLVNlbWlCb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLWNvbnRhaW5lciA+IGhlYWRlciA+IGRpdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYXBwLWxvZ28ge1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaWNvbnMvaWNvbnM4LWNoZWNrbWFyay5wbmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbm5hdiA+IGRpdiA+IGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbm5hdiBidXR0b24ge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IERvc2lzLU1lZGl1bTtcXHJcXG59XFxyXFxuXFxyXFxuI25hdmlnYXRpb24tY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1uYXZpZ2F0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1idXR0b24ge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNzUlO1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaWNvbnMvaWNvbnM4LXBsdXMucG5nKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XFxyXFxufVxcclxcblxcclxcbiNsaXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTZyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMHJlbSAycmVtIDRyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHNwYW4ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogRG9zaXMtTWVkaXVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlzdC1jb250YWluZXI6bGFzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cXHJcXG4jbGlzdC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXFxyXFxuI2xpc3QtY29udGFpbmVyLmV4YW1wbGUge1xcclxcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxyXFxuICAgIC8qIElFIGFuZCBFZGdlICovXFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXHJcXG4gICAgLyogRmlyZWZveCAqL1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1jb250ZW50IHsgXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiA0cmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0Rvc2lzL3N0YXRpYy9Eb3Npcy1TZW1pQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Eb3Npcy9zdGF0aWMvRG9zaXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pY29ucy9pY29uczgtY2hlY2ttYXJrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBEb3Npcy1TZW1pQm9sZDtcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBEb3Npcy1NZWRpdW07XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG5cclxuI2FkZC10YXNrLWRpYWxvZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogbWF4KDQwJSwgNzAwcHgpO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBmb250LWZhbWlseTogRG9zaXMtTWVkaXVtO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XHJcbn1cclxuXHJcbiNjbG9zZS1idXR0b24tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIHJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4jY2xvc2UtYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeS1jb2xvcik7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbiNkaWFsb2ctaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbiNsb2dvLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuI2FkZC10YXNrLWRpYWxvZyBoMiB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG4uZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5maWVsZCB0ZXh0YXJlYSB7XHJcbiAgICBmb250LWZhbWlseTogRG9zaXMtTWVkaXVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZm9ybS1lbGVtZW50LXRleHQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4jcHJpb3JpdHktbGFiZWwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4jcHJpb3JpdHktYm94LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jcHJpb3JpdHktbGFiZWwtY29udGFpbmVyID4gZGl2ID4gZGl2e1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oaWdoLXByaW9yaXR5LWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcclxufVxyXG5cclxuLm1lZGl1bS1wcmlvcml0eS1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yKTtcclxufVxyXG5cclxuLmxvdy1wcmlvcml0eS1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LWNvbG9yKTtcclxufVxyXG5cclxuI2FkZC10YXNrLWRpYWxvZyBsYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWZvcm0tZWxlbWVudC10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuLmxhYmVsLW1hcmdpbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbiNhZGQtdGFzay1kaWFsb2cgaW5wdXR7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLWZvcm0tZWxlbWVudC10ZXh0LWNvbG9yKTtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWVsZW1lbnQtdGV4dC1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBEb3Npcy1NZWRpdW07XHJcbn1cclxuXHJcbiNhZGQtdGFzay1kaWFsb2cgc2VsZWN0e1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBoZWlnaHQ6IDMuM3JlbTtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS1mb3JtLWVsZW1lbnQtdGV4dC1jb2xvcik7XHJcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZm9ybS1lbGVtZW50LXRleHQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMHJlbSAwLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogRG9zaXMtTWVkaXVtO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25zIHtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25zIGJ1dHRvbiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LWZhbWlseTogRG9zaXMtTWVkaXVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLXByaW1hcnktY29sb3IpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4jdGFza3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGFza0RpYWxvZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsNENBQWtEO0FBQ3REOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseURBQTJEO0lBQzNELHdCQUF3QjtJQUN4QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaURBQWlEO0lBQ2pELGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxpREFBaUQ7SUFDakQsb0JBQW9CO0lBQ3BCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxpREFBaUQ7SUFDakQsb0JBQW9CO0lBQ3BCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksT0FBTztJQUNQLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IERvc2lzLVNlbWlCb2xkO1xcclxcbiAgICBzcmM6IHVybCguLi9mb250cy9Eb3Npcy9zdGF0aWMvRG9zaXMtU2VtaUJvbGQudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBEb3Npcy1NZWRpdW07XFxyXFxuICAgIHNyYzogdXJsKC4uL2ZvbnRzL0Rvc2lzL3N0YXRpYy9Eb3Npcy1NZWRpdW0udHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLWRpYWxvZyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB3aWR0aDogbWF4KDQwJSwgNzAwcHgpO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBmb250LWZhbWlseTogRG9zaXMtTWVkaXVtO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNjbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDJyZW07XFxyXFxuICAgIHJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2UtYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDAuN3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNkaWFsb2ctaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNsb2dvLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ljb25zL2ljb25zOC1jaGVja21hcmsucG5nKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLWRpYWxvZyBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5maWVsZCB0ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBEb3Npcy1NZWRpdW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWVsZW1lbnQtdGV4dC1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3ByaW9yaXR5LWxhYmVsLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3ByaW9yaXR5LWJveC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eS1sYWJlbC1jb250YWluZXIgPiBkaXYgPiBkaXZ7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaC1wcmlvcml0eS1ib3gge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bS1wcmlvcml0eS1ib3gge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tcHJpb3JpdHktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG93LXByaW9yaXR5LWJveCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1kaWFsb2cgbGFiZWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9ybS1lbGVtZW50LXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWwtbWFyZ2luIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stZGlhbG9nIGlucHV0e1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvcm0tZWxlbWVudC10ZXh0LWNvbG9yKTtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWZvcm0tZWxlbWVudC10ZXh0LWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZzogMHJlbSAwLjVyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBEb3Npcy1NZWRpdW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay1kaWFsb2cgc2VsZWN0e1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgaGVpZ2h0OiAzLjNyZW07XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvcm0tZWxlbWVudC10ZXh0LWNvbG9yKTtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWZvcm0tZWxlbWVudC10ZXh0LWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZzogMHJlbSAwLjVyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBEb3Npcy1NZWRpdW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMge1xcclxcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMgYnV0dG9uIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IERvc2lzLU1lZGl1bTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3Mge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Eb3Npcy9zdGF0aWMvRG9zaXMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAtLWFwcC1wcmltYXJ5LWNvbG9yOiAjMjU2M2ViO1xyXG4gICAgLS1hcHAtc2Vjb25kYXJ5LWRhcmstY29sb3I6ICMxZTQwYWY7XHJcbiAgICAtLWZvcm0tZWxlbWVudC1vdXRsaW5lLWNvbG9yOiAjYjBiMGIwO1xyXG4gICAgLS1mb3JtLWVsZW1lbnQtdGV4dC1jb2xvcjogIzgwODA4MDtcclxuICAgIC0tYm94LXNoYWRvdy1jb2xvcjogcmdiKDE0NCwgMTQ0LCAxNDQpO1xyXG5cclxuICAgIC0taGlnaC1wcmlvcml0eS1jb2xvcjogI2ZmMmUyZTtcclxuICAgIC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yOiAjZmZjODAwO1xyXG4gICAgLS1sb3ctcHJpb3JpdHktY29sb3I6ICMwMGZmNmE7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IERvc2lzLU1lZGl1bTtcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG4jcGFuZWwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XHJcbiAgICBmb250LWZhbWlseTogRG9zaXMtTWVkaXVtO1xyXG4gICAgY29sb3I6IHZhcigtLWZvcm0tZWxlbWVudC10ZXh0LWNvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbiNwYW5lbC1jb250YWluZXIgPiBkaXYge1xyXG4gICAgaGVpZ2h0OiA2cmVtO1xyXG59XHJcblxyXG4jcHJpb3JpdHktc3RyaXBlIHtcclxuICAgIHdpZHRoOiAxcmVtO1xyXG59XHJcblxyXG4jdGFzay10aXRsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gICAgcGFkZGluZzogMHJlbSAycmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbiN0YXNrLWR1ZS1kYXRlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDJyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4jdGFzay1jaGVja2JveC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gICAgcGFkZGluZzogMHJlbSAycmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4jdGFzay1jaGVja2JveC1jb250YWluZXIgaW5wdXQge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbiN1dGlsaXR5LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuI3V0aWxpdHktY29udGFpbmVyID4gYnV0dG9ue1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLXByaW1hcnktY29sb3IpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4jdXRpbGl0eS1jb250YWluZXIgLm1pZCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5oaWdoLXByaW9yaXR5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xyXG59XHJcblxyXG4ubWVkaXVtLXByaW9yaXR5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eS1jb2xvcik7XHJcbn1cclxuXHJcbi5sb3ctcHJpb3JpdHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LWNvbG9yKTtcclxufVxyXG5cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90YXNrUGFuZWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVOztJQUVWLDRCQUE0QjtJQUM1QixtQ0FBbUM7SUFDbkMscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxzQ0FBc0M7O0lBRXRDLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsb0RBQW9EO0lBQ3BELHlCQUF5QjtJQUN6QixxQ0FBcUM7SUFDckMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLE9BQU87SUFDUCwwQ0FBMEM7SUFDMUMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcblxcclxcbiAgICAtLWFwcC1wcmltYXJ5LWNvbG9yOiAjMjU2M2ViO1xcclxcbiAgICAtLWFwcC1zZWNvbmRhcnktZGFyay1jb2xvcjogIzFlNDBhZjtcXHJcXG4gICAgLS1mb3JtLWVsZW1lbnQtb3V0bGluZS1jb2xvcjogI2IwYjBiMDtcXHJcXG4gICAgLS1mb3JtLWVsZW1lbnQtdGV4dC1jb2xvcjogIzgwODA4MDtcXHJcXG4gICAgLS1ib3gtc2hhZG93LWNvbG9yOiByZ2IoMTQ0LCAxNDQsIDE0NCk7XFxyXFxuXFxyXFxuICAgIC0taGlnaC1wcmlvcml0eS1jb2xvcjogI2ZmMmUyZTtcXHJcXG4gICAgLS1tZWRpdW0tcHJpb3JpdHktY29sb3I6ICNmZmM4MDA7XFxyXFxuICAgIC0tbG93LXByaW9yaXR5LWNvbG9yOiAjMDBmZjZhO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IERvc2lzLU1lZGl1bTtcXHJcXG4gICAgc3JjOiB1cmwoLi4vZm9udHMvRG9zaXMvc3RhdGljL0Rvc2lzLU1lZGl1bS50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFuZWwtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBEb3Npcy1NZWRpdW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb3JtLWVsZW1lbnQtdGV4dC1jb2xvcik7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNwYW5lbC1jb250YWluZXIgPiBkaXYge1xcclxcbiAgICBoZWlnaHQ6IDZyZW07XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eS1zdHJpcGUge1xcclxcbiAgICB3aWR0aDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stdGl0bGUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDMzJTtcXHJcXG4gICAgcGFkZGluZzogMHJlbSAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stZHVlLWRhdGUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDMzJTtcXHJcXG4gICAgcGFkZGluZzogMHJlbSAycmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWNoZWNrYm94LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAzMyU7XFxyXFxuICAgIHBhZGRpbmc6IDByZW0gMnJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiN1dGlsaXR5LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiN1dGlsaXR5LWNvbnRhaW5lciA+IGJ1dHRvbntcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdXRpbGl0eS1jb250YWluZXIgLm1pZCB7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaC1wcmlvcml0eSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVkaXVtLXByaW9yaXR5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvdy1wcmlvcml0eSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrRGlhbG9nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza0RpYWxvZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza1BhbmVsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza1BhbmVsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRFbGVtZW50KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5pZCA9ICdjb250ZW50JztcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGVudEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgY3VycmVudFRhc2tJbmRleCwgaW5jcmVtZW50Q3VycmVudFRhc2tJbmRleCwgdG9kb1Rhc2tQYW5lbHMsIHRvZG9UYXNrcyB9IGZyb20gJy4uLy4uL2RhdGEvZGF0YSc7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tICcuLi8uLi9mYWN0b3JpZXMvdGFzayc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL3Rhc2tEaWFsb2cuY3NzJztcclxuaW1wb3J0IHsgZ2V0TWFpbkNvbnRlbnQgfSBmcm9tICcuLi9tYWluL21haW4nO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrUGFuZWwgfSBmcm9tICcuLi90YXNrL3Rhc2tQYW5lbCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0RpYWxvZygpIHtcclxuICAgIC8vQ3JlYXRpbmcgYWxsIGRpYWxvZyBlbGVtZW50c1xyXG4gICAgY29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZURpYWxvZ0J1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY2xvc2VEaWFsb2dCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICBjb25zdCBkaWFsb2dIZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGRpYWxvZ0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcblxyXG4gICAgY29uc3QgZmllbGRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eUJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaGlnaFByaW9yaXR5Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbG93UHJpb3JpdHlCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgY29uc3QgaGlnaFByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgY29uc3QgbG93UHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuXHJcbiAgICBjb25zdCBmb3JtQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgcmVzZXRGb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgLy9Bc3NpZ25pbmcgdGV4dCB2YWx1ZXMgdG8gZGlhbG9nIGVsZW1lbnRzXHJcbiAgICBjbG9zZURpYWxvZ0J1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcclxuICAgIGRpYWxvZ0hlYWRlci50ZXh0Q29udGVudCA9ICdBZGQgYSBUYXNrJztcclxuXHJcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xyXG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcclxuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xyXG5cclxuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcclxuICAgIHJlc2V0Rm9ybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZXNldCc7XHJcblxyXG4gICAgLy9Gb3JtIGVsZW1lbnQgcHJvcGVydGllc1xyXG4gICAgZm9ybS5tZXRob2QgPSAnZGlhbG9nJztcclxuXHJcbiAgICB0aXRsZUxhYmVsLmZvciA9ICd0YXNrLXRpdGxlJztcclxuICAgIHRpdGxlTGFiZWwubmFtZSA9ICd0aXRsZSc7XHJcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnO1xyXG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG5cclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuZm9yID0gJ3Rhc2stZGVzY3JpcHRpb24nXHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLm5hbWUgPSAnZGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY3JpcHRpb25BcmVhLm5hbWUgPSAnZGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY3JpcHRpb25BcmVhLnJvd3MgPSAnNCc7XHJcbiAgICBkZXNjcmlwdGlvbkFyZWEuc3R5bGUucmVzaXplID0gJ25vbmUnXHJcblxyXG4gICAgZHVlRGF0ZUxhYmVsLmZvciA9ICd0YXNrLWR1ZS1kYXRlJztcclxuICAgIGR1ZURhdGVMYWJlbC5uYW1lID0gJ2R1ZS1kYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gJ2R1ZS1kYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG5cclxuICAgIHByaW9yaXR5TGFiZWwuZm9yID0gJ3Rhc2stcHJpb3JpdHknO1xyXG4gICAgcHJpb3JpdHlMYWJlbC5uYW1lID0gJ3ByaW9yaXR5JztcclxuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xyXG5cclxuICAgIGRlZmF1bHRPcHRpb24uZGlzYWJsZWQgPSAndHJ1ZSc7XHJcbiAgICBkZWZhdWx0T3B0aW9uLnNlbGVjdGVkID0gJ3RydWUnO1xyXG4gICAgZGVmYXVsdE9wdGlvbi50ZXh0ID0gJy0tUHJpb3JpdHktLSc7XHJcbiAgICBoaWdoUHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSAnSGlnaCc7XHJcbiAgICBtZWRpdW1Qcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xyXG4gICAgbG93UHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcclxuXHJcbiAgICBhZGRUYXNrQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgIHJlc2V0Rm9ybUJ1dHRvbi50eXBlID0gJ2NsZWFyJztcclxuXHJcbiAgICAvL0Fzc2lnbm1lbnQgb2YgaWQgc2VsZWN0b3JzIHRvIGRpYWxvZyBlbGVtZW50cyBcclxuICAgIHRhc2tEaWFsb2cuaWQgPSAnYWRkLXRhc2stZGlhbG9nJztcclxuICAgIGNsb3NlRGlhbG9nQnV0dG9uQ29udGFpbmVyLmlkID0gJ2Nsb3NlLWJ1dHRvbi1jb250YWluZXInO1xyXG4gICAgY2xvc2VEaWFsb2dCdXR0b24uaWQgPSAnY2xvc2UtYnV0dG9uJztcclxuICAgIGRpYWxvZ0hlYWRlckNvbnRhaW5lci5pZCA9ICdkaWFsb2ctaGVhZGVyLWNvbnRhaW5lcic7XHJcbiAgICBsb2dvQ29udGFpbmVyLmlkID0gJ2xvZ28tY29udGFpbmVyJztcclxuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUtaW5wdXQnO1xyXG4gICAgZGVzY3JpcHRpb25BcmVhLmlkID0gJ3Rhc2stZGVzY3JpdHB0aW9uJztcclxuICAgIGR1ZURhdGVJbnB1dC5pZCA9ICd0YXNrLWR1ZS1kYXRlJztcclxuICAgIHByaW9yaXR5TGFiZWxDb250YWluZXIuaWQgPSAncHJpb3JpdHktbGFiZWwtY29udGFpbmVyJztcclxuICAgIHByaW9yaXR5Qm94Q29udGFpbmVyLmlkID0gJ3ByaW9yaXR5LWJveC1jb250YWluZXInO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAndGFzay1wcmlvcml0eSc7XHJcbiAgICBhZGRUYXNrQnV0dG9uLmlkID0gJ2FkZC10YXNrLWJ1dHRvbic7XHJcblxyXG4gICAgLy9Bc3NpZ25tZW50IG9mIGNsYXNzIHNlbGVjdG9ycyB0byBkaWFsb2cgZWxlbWVudHNcclxuICAgIHRpdGxlRmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnKTtcclxuICAgIGRlc2NyaXB0aW9uRmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnKTtcclxuICAgIGR1ZURhdGVGaWVsZC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xyXG4gICAgcHJpb3JpdHlGaWVsZC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xyXG4gICAgdGl0bGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbC1tYXJnaW4nKTtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwtbWFyZ2luJyk7XHJcbiAgICBkdWVEYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwtbWFyZ2luJyk7XHJcbiAgICBoaWdoUHJpb3JpdHlCb3guY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eS1ib3gnKTtcclxuICAgIG1lZGl1bVByaW9yaXR5Qm94LmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eS1ib3gnKTtcclxuICAgIGxvd1ByaW9yaXR5Qm94LmNsYXNzTGlzdC5hZGQoJ2xvdy1wcmlvcml0eS1ib3gnKTtcclxuICAgIGZvcm1CdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9ucycpO1xyXG5cclxuICAgIC8vQ3JlYXRpbmcgdGhlIHN0cnVjdHVyZSBvZiB0aGUgZGlhbG9nXHJcbiAgICB0YXNrRGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VEaWFsb2dCdXR0b25Db250YWluZXIpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaWFsb2dIZWFkZXJDb250YWluZXIpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNDb250YWluZXIpO1xyXG5cclxuICAgIGNsb3NlRGlhbG9nQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlRGlhbG9nQnV0dG9uKTtcclxuICAgIGRpYWxvZ0hlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcclxuICAgIGRpYWxvZ0hlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaWFsb2dIZWFkZXIpO1xyXG5cclxuICAgIGZpZWxkc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUZpZWxkKTtcclxuICAgIGZpZWxkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkZpZWxkKTtcclxuICAgIGZpZWxkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlRmllbGQpO1xyXG4gICAgZmllbGRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5RmllbGQpO1xyXG4gICAgZmllbGRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1CdXR0b25zKTtcclxuXHJcbiAgICB0aXRsZUZpZWxkLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gICAgdGl0bGVGaWVsZC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuXHJcbiAgICBkZXNjcmlwdGlvbkZpZWxkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gICAgZGVzY3JpcHRpb25GaWVsZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkFyZWEpO1xyXG5cclxuICAgIGR1ZURhdGVGaWVsZC5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xyXG4gICAgZHVlRGF0ZUZpZWxkLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcblxyXG4gICAgcHJpb3JpdHlGaWVsZC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsQ29udGFpbmVyKTtcclxuICAgIHByaW9yaXR5RmllbGQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xyXG5cclxuICAgIHByaW9yaXR5TGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgICBwcmlvcml0eUxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5Qm94Q29udGFpbmVyKTtcclxuXHJcbiAgICBwcmlvcml0eUJveENvbnRhaW5lci5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlCb3gpO1xyXG4gICAgcHJpb3JpdHlCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHlCb3gpO1xyXG4gICAgcHJpb3JpdHlCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHlCb3gpO1xyXG5cclxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKGRlZmF1bHRPcHRpb24pO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5T3B0aW9uKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5T3B0aW9uKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5T3B0aW9uKTtcclxuXHJcbiAgICBmb3JtQnV0dG9ucy5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcclxuICAgIGZvcm1CdXR0b25zLmFwcGVuZENoaWxkKHJlc2V0Rm9ybUJ1dHRvbik7XHJcblxyXG4gICAgLy9BZGRpbmcgZXZlbnQgbGlzdGVuZXJzIHRvIGJ1dHRvbnNcclxuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRhc2tUaXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uQXJlYS52YWx1ZTtcclxuICAgICAgICBsZXQgdGFza0R1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IHRhc2tQcmlvcml0eSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xyXG4gXHJcbiAgICAgICAgLy9DcmVhdGluZyBhIHRhc2sgb2JqZWN0XHJcbiAgICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2soY3VycmVudFRhc2tJbmRleCwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlLCB0YXNrUHJpb3JpdHkpO1xyXG4gICAgICAgIHRvZG9UYXNrcy5wdXNoKHRhc2spO1xyXG5cclxuICAgICAgICAvL0NyZWF0aW5nIGEgcGFuZWwgZm9yIHRoZSB0YXNrIG9iamVjdFxyXG4gICAgICAgIGNvbnN0IHBhbmVsID0gY3JlYXRlVGFza1BhbmVsKHRhc2spO1xyXG4gICAgICAgIHRvZG9UYXNrUGFuZWxzLnB1c2gocGFuZWwpO1xyXG5cclxuICAgICAgICBpbmNyZW1lbnRDdXJyZW50VGFza0luZGV4KCk7XHJcblxyXG4gICAgICAgIGdldE1haW5Db250ZW50KCkuYXBwZW5kQ2hpbGQocGFuZWwpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gdGFza0RpYWxvZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tEaWFsb2coKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWRpYWxvZycpO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaGVhZGVyVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBjb25zdCBkaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGFwcExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGFwcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuXHJcbiAgICBoZWFkZXIuaWQgPSAnaGVhZGVyLWNvbnRhaW5lcic7XHJcbiAgICBhcHBMb2dvLmlkID0gJ2FwcC1sb2dvJ1xyXG5cclxuICAgIGFwcFRpdGxlLnRleHRDb250ZW50ID0gJ0RpbGxpZ2VuY2UnO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUYWcpO1xyXG4gICAgaGVhZGVyVGFnLmFwcGVuZENoaWxkKGRpdk9uZSk7XHJcbiAgICBkaXZPbmUuYXBwZW5kQ2hpbGQoYXBwTG9nbyk7XHJcbiAgICBkaXZPbmUuYXBwZW5kQ2hpbGQoYXBwVGl0bGUpO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluLmlkID0gJ21haW4tY29udGVudCc7XHJcblxyXG4gICAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYWluQ29udGVudCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250ZW50Jyk7XHJcbn0iLCJpbXBvcnQgeyBnZXRUYXNrRGlhbG9nIH0gZnJvbSBcIi4uL2RpYWxvZ3MvdGFza0RpYWxvZ1wiO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9pbmRleC5jc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmF2aWdhdGlvbigpIHtcclxuICAgIC8vQ3JlYXRpbmcgYWxsIG5hdmlnYXRpb24gZWxlbWVudHNcclxuICAgIGNvbnN0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG5hdmlnYXRpb25UYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuXHJcbiAgICBjb25zdCB0YXNrTmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgdGhpc1dlZWtCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuICAgIGNvbnN0IGxpc3ROYXZpZ2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsaXN0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGFkZExpc3RCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAvL0Fzc2lnbmluZyBpZCBzZWxlY3RvcnMgdG8gbmF2IGVsZW1lbnRzXHJcbiAgICBuYXZpZ2F0aW9uLmlkID0gJ25hdmlnYXRpb24tY29udGFpbmVyJztcclxuICAgIHRhc2tOYXZpZ2F0aW9uLmlkID0gJ3Rhc2stbmF2aWdhdGlvbic7XHJcbiAgICBhZGRUYXNrQnV0dG9uLmlkID0gJ2FkZC10YXNrLWJ1dHRvbic7XHJcbiAgICBsaXN0Q29udGFpbmVyLmlkID0gJ2xpc3QtY29udGFpbmVyJztcclxuXHJcbiAgICAvL0Fzc2lnbmluZyBjbGFzcyBzZWxlY3RvcnMgdG8gbmF2IGVsZW1lbnRzXHJcbiAgICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgnYWRkLWZpZWxkJyk7XHJcbiAgICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWJ1dHRvbicpO1xyXG4gICAgYWRkVGFza0J1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uLWNvbnRhaW5lcicpO1xyXG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uJyk7XHJcbiAgICBsaXN0RmllbGQuY2xhc3NMaXN0LmFkZCgnYWRkLWZpZWxkJyk7XHJcbiAgICBsaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWJ1dHRvbicpO1xyXG4gICAgYWRkTGlzdEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uLWNvbnRhaW5lcicpO1xyXG4gICAgYWRkTGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uJyk7XHJcbiAgIFxyXG4gICAgLy9Bc3NpZ25pbmcgdGV4dCB2YWx1ZXMgdG8gbmF2IGVsZW1lbnRzXHJcbiAgICB0YXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1Rhc2tzJztcclxuICAgIHRvZGF5QnV0dG9uLnRleHRDb250ZW50ID0gJ1RvZGF5JztcclxuICAgIHRoaXNXZWVrQnV0dG9uLnRleHRDb250ZW50ID0gJ1RoaXMgV2Vlayc7XHJcbiAgICBsaXN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0xpc3RzJztcclxuXHJcbiAgICAvL0NyZWF0aW5nIHRoZSBuYXZpZ2F0aW9uIHN0cnVjdHVyZVxyXG4gICAgbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uVGFnKTtcclxuICAgIG5hdmlnYXRpb25UYWcuYXBwZW5kQ2hpbGQodGFza05hdmlnYXRpb24pO1xyXG4gICAgbmF2aWdhdGlvblRhZy5hcHBlbmRDaGlsZChsaXN0TmF2aWdhdGlvbik7XHJcblxyXG4gICAgdGFza05hdmlnYXRpb24uYXBwZW5kQ2hpbGQodGFza0ZpZWxkKTtcclxuICAgIHRhc2tOYXZpZ2F0aW9uLmFwcGVuZENoaWxkKHRvZGF5QnV0dG9uKTtcclxuICAgIHRhc2tOYXZpZ2F0aW9uLmFwcGVuZENoaWxkKHRoaXNXZWVrQnV0dG9uKTtcclxuXHJcbiAgICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XHJcbiAgICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbkNvbnRhaW5lcik7XHJcbiAgICBhZGRUYXNrQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xyXG5cclxuICAgIGxpc3ROYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGxpc3RGaWVsZCk7XHJcbiAgICBsaXN0TmF2aWdhdGlvbi5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcclxuXHJcbiAgICBsaXN0RmllbGQuYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbik7XHJcbiAgICBsaXN0RmllbGQuYXBwZW5kQ2hpbGQoYWRkTGlzdEJ1dHRvbkNvbnRhaW5lcik7XHJcbiAgICBhZGRMaXN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZExpc3RCdXR0b24pO1xyXG5cclxuICAgIC8vQWRkaW5nIEV2ZW50IGxpc3RlbmVycyB0byBidXR0b25zIFxyXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBnZXRUYXNrRGlhbG9nKCkuc2hvd01vZGFsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmF2aWdhdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tIFwiLi4vaGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVOYXZpZ2F0aW9uIH0gZnJvbSBcIi4uL25hdmlnYXRpb24vbmF2aWdhdGlvblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaWRlYmFyLmlkID0gJ3NpZGViYXInO1xyXG5cclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVOYXZpZ2F0aW9uKCkpO1xyXG5cclxuICAgIHJldHVybiBzaWRlYmFyO1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0ICcuLi8uLi9zdHlsZXMvdGFza1BhbmVsLmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza1BhbmVsKHRhc2spIHtcclxuICAgIGNvbnN0IHBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlTdHJpcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRhc2tUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdGFza0R1ZURhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRhc2tDaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdXRpbGl0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbiAgICBjb25zdCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAvL0Fzc2lnbmluZyBwcm9wZXJ0aWVzIG9mIGVsZW1lbnRzXHJcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuXHJcbiAgICAvL0Fzc2lnbmluZyBpZCBzZWxlY3RvcnMgdG8gcGFuZWwgZWxlbWVudHNcclxuICAgIHBhbmVsLmlkID0gJ3BhbmVsLWNvbnRhaW5lcic7XHJcbiAgICBwcmlvcml0eVN0cmlwZS5pZCA9ICdwcmlvcml0eS1zdHJpcGUnO1xyXG4gICAgdGFza1RpdGxlQ29udGFpbmVyLmlkID0gJ3Rhc2stdGl0bGUtY29udGFpbmVyJztcclxuICAgIHRhc2tEdWVEYXRlQ29udGFpbmVyLmlkID0gJ3Rhc2stZHVlLWRhdGUtY29udGFpbmVyJztcclxuICAgIHRhc2tDaGVja2JveENvbnRhaW5lci5pZCA9ICd0YXNrLWNoZWNrYm94LWNvbnRhaW5lcic7XHJcbiAgICB1dGlsaXR5Q29udGFpbmVyLmlkID0gJ3V0aWxpdHktY29udGFpbmVyJztcclxuXHJcbiAgICAvL0Fzc2lnbmluZyBjbGFzcyBzZWxlY3RvcnMgdG8gcGFuZWwgZWxlbWVudHNcclxuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWlkJyk7XHJcbiAgICBwcmlvcml0eVN0cmlwZS5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5Jyk7XHJcblxyXG4gICAgLy9BcHBlbmRpbmcgdGFzayBhdHRyaWJ1dGVzIHRvIHRoZSBwYW5lbDtcclxuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcclxuXHJcbiAgICBpZih0YXNrLnByaW9yaXR5ID09ICdIaWdoJykge1xyXG4gICAgICAgIHByaW9yaXR5U3RyaXBlLmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHknKTtcclxuICAgIH1cclxuICAgIGlmKHRhc2sucHJpb3JpdHkgPT0gJ01lZGl1bScpIHtcclxuICAgICAgICBwcmlvcml0eVN0cmlwZS5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tcHJpb3JpdHknKTtcclxuICAgIH1cclxuICAgIGlmKHRhc2sucHJpb3JpdHkgPT0gJ0xvdycpIHtcclxuICAgICAgICBwcmlvcml0eVN0cmlwZS5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHknKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0Nvbm5lY3RpbmcgdGhlIHBhbmVsIHRvIHRoZSB0YXNrXHJcbiAgICBwYW5lbC5kYXRhc2V0LmlkID0gdGFzay5pZDtcclxuXHJcbiAgICAvL0NyZWF0aW5nIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHBhbmVsXHJcbiAgICBwYW5lbC5hcHBlbmRDaGlsZChwcmlvcml0eVN0cmlwZSk7XHJcbiAgICBwYW5lbC5hcHBlbmRDaGlsZCh0YXNrVGl0bGVDb250YWluZXIpO1xyXG4gICAgcGFuZWwuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVDb250YWluZXIpO1xyXG4gICAgcGFuZWwuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94Q29udGFpbmVyKTtcclxuICAgIHBhbmVsLmFwcGVuZENoaWxkKHV0aWxpdHlDb250YWluZXIpO1xyXG5cclxuICAgIHRhc2tUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgdGFza0R1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xyXG4gICAgdGFza0NoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuXHJcbiAgICB1dGlsaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNCdXR0b24pO1xyXG4gICAgdXRpbGl0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuICAgIHV0aWxpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gcGFuZWw7XHJcbn0iLCJleHBvcnQgY29uc3QgdG9kb1Rhc2tzID0gW107XHJcbmV4cG9ydCBjb25zdCB0b2RvTGlzdHMgPSBbXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2RvVGFza1BhbmVscyA9IFtdO1xyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50VGFza0luZGV4ID0gMDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnRDdXJyZW50VGFza0luZGV4KCkge1xyXG4gICAgY3VycmVudFRhc2tJbmRleCsrO1xyXG59XHJcblxyXG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgcmV0dXJuIHsgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfTtcclxufSIsImltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRlbnRFbGVtZW50LCBnZXRDb250ZW50RWxlbWVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudEVsZW1lbnRcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWFpbkNvbnRlbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tYWluL21haW5cIjtcclxuaW1wb3J0IHsgY3JlYXRlU2lkZWJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhclwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlVGFza0RpYWxvZyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2RpYWxvZ3MvdGFza0RpYWxvZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVJbmRleFBhZ2UoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tEaWFsb2coKSk7XHJcblxyXG4gICAgY3JlYXRlQ29udGVudEVsZW1lbnQoKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50RWxlbWVudCgpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZWJhcigpKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbkNvbnRlbnQoKSk7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXRpYWxpemVJbmRleFBhZ2UgfSBmcm9tICcuLi9oZWxwZXJzL2luaXQnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5jc3MnO1xyXG5cclxuaW5pdGlhbGl6ZUluZGV4UGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==