/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/listTask/add/addListTaskDialog.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/listTask/add/addListTaskDialog.css ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/icons/icons8-checkmark.png */ "./src/assets/icons/icons8-checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#add-list-task-dialog {
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

#altd-close-button-container {
    position: absolute;
    top: 2rem;
    right: 2rem;
}

#altd-close-button {
    padding: 0.5rem 0.7rem;
    background-color: var(--app-primary-color);
    border-style: none;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
}

#altd-dialog-header-container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

#altd-logo-container {
    width: 60px;
    aspect-ratio: 1 / 1;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    margin-right: 0.5rem;
}

#add-task-dialog h2 {
    font-size: 3rem;
    color: var(--app-primary-color);
}

.altd-add-field {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--form-element-text-color);
}

.altd-add-field textarea {
    font-family: Dosis-Medium;
    font-size: 1.2rem;
    border-style: none;
    outline: 1px solid var(--form-element-text-color);
    padding: 0.5rem;
}

#altd-priority-label-container {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

#altd-priority-box-container {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    font-size: 1rem;
    color: white;
}

#altd-priority-label-container > div > div{
    width: 20px;
    height: 20px;
    margin-right: 0.3rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.altd-high-priority-box {
    background-color: var(--high-priority-color);
}

.altd-medium-priority-box {
    background-color: var(--medium-priority-color);
}

.altd-low-priority-box {
    background-color: var(--low-priority-color);
}

#add-list-task-dialog label{
    font-size: 1.5rem;
    color: var(--form-element-text-color);
}

.altd-label-margin {
    margin-bottom: 0.5rem;
}

#add-list-task-dialog input{
    font-size: 1.5rem;
    line-height: 3rem;
    border-style: none;
    color: var(--form-element-text-color);
    outline: 1px solid var(--form-element-text-color);
    padding: 0rem 0.5rem;
    font-family: Dosis-Medium;
}

#add-list-task-dialog select{
    font-size: 1.3rem;
    height: 3.3rem;
    border-style: none;
    color: var(--form-element-text-color);
    outline: 1px solid var(--form-element-text-color);
    padding: 0rem 0.5rem;
    font-family: Dosis-Medium;
}

.altd-form-buttons {
    margin-top: 4rem;
    display: flex;
    gap: 2rem;
}

.altd-form-buttons button {
    flex: 1;
    padding: 1.5rem;
    font-size: 1.2rem;
    font-family: Dosis-Medium;
    background-color: var(--app-primary-color);
    color: white;
    border-style: none;
    border-radius: 5px;
}


`, "",{"version":3,"sources":["webpack://./src/components/dialogs/listTask/add/addListTaskDialog.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAyD;AAC7D;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,oDAAoD;AACxD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,0CAA0C;IAC1C,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,yDAAoE;IACpE,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,qBAAqB;IACrB,qCAAqC;AACzC;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,iDAAiD;IACjD,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,iBAAiB;IACjB,qCAAqC;AACzC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,qCAAqC;IACrC,iDAAiD;IACjD,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,qCAAqC;IACrC,iDAAiD;IACjD,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,OAAO;IACP,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,0CAA0C;IAC1C,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../../../../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#add-list-task-dialog {\r\n    position: relative;\r\n    margin: auto;\r\n    width: max(40%, 700px);\r\n    height: fit-content;\r\n    padding: 2rem;\r\n    font-family: Dosis-Medium;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n}\r\n\r\n#altd-close-button-container {\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 2rem;\r\n}\r\n\r\n#altd-close-button {\r\n    padding: 0.5rem 0.7rem;\r\n    background-color: var(--app-primary-color);\r\n    border-style: none;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n}\r\n\r\n#altd-dialog-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#altd-logo-container {\r\n    width: 60px;\r\n    aspect-ratio: 1 / 1;\r\n    background-image: url(../../../../assets/icons/icons8-checkmark.png);\r\n    background-size: contain;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n#add-task-dialog h2 {\r\n    font-size: 3rem;\r\n    color: var(--app-primary-color);\r\n}\r\n\r\n.altd-add-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 2rem;\r\n    margin-bottom: 1.5rem;\r\n    color: var(--form-element-text-color);\r\n}\r\n\r\n.altd-add-field textarea {\r\n    font-family: Dosis-Medium;\r\n    font-size: 1.2rem;\r\n    border-style: none;\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0.5rem;\r\n}\r\n\r\n#altd-priority-label-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#altd-priority-box-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 1rem;\r\n    font-size: 1rem;\r\n    color: white;\r\n}\r\n\r\n#altd-priority-label-container > div > div{\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 0.3rem;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.altd-high-priority-box {\r\n    background-color: var(--high-priority-color);\r\n}\r\n\r\n.altd-medium-priority-box {\r\n    background-color: var(--medium-priority-color);\r\n}\r\n\r\n.altd-low-priority-box {\r\n    background-color: var(--low-priority-color);\r\n}\r\n\r\n#add-list-task-dialog label{\r\n    font-size: 1.5rem;\r\n    color: var(--form-element-text-color);\r\n}\r\n\r\n.altd-label-margin {\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#add-list-task-dialog input{\r\n    font-size: 1.5rem;\r\n    line-height: 3rem;\r\n    border-style: none;\r\n    color: var(--form-element-text-color);\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0rem 0.5rem;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n#add-list-task-dialog select{\r\n    font-size: 1.3rem;\r\n    height: 3.3rem;\r\n    border-style: none;\r\n    color: var(--form-element-text-color);\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0rem 0.5rem;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n.altd-form-buttons {\r\n    margin-top: 4rem;\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n.altd-form-buttons button {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    font-size: 1.2rem;\r\n    font-family: Dosis-Medium;\r\n    background-color: var(--app-primary-color);\r\n    color: white;\r\n    border-style: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/listTask/delete/listTaskDeleteDialog.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/listTask/delete/listTaskDeleteDialog.css ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/icons/icons8-checkmark.png */ "./src/assets/icons/icons8-checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#list-task-delete-dialog {
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

#ltrd-dialog-header-container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: var(--app-primary-color);
}

#ltrd-logo-container {
    width: 60px;
    aspect-ratio: 1 / 1;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    margin-right: 0.5rem;
}

.ltrd-delete-field {
    margin-bottom: 2rem;
    color: black;
    font-size: 1.5rem; 
}

.ltrd-delete-form-buttons {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
}

.ltrd-delete-form-buttons button {
    flex: 1;
    padding: 1.5rem;
    font-size: 1.2rem;
    font-family: Dosis-Medium;
    background-color: var(--app-primary-color);
    color: white;
    border-style: none;
    border-radius: 5px;
}

`, "",{"version":3,"sources":["webpack://./src/components/dialogs/listTask/delete/listTaskDeleteDialog.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAyD;AAC7D;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,oDAAoD;AACxD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,yDAAoE;IACpE,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,OAAO;IACP,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,0CAA0C;IAC1C,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../../../../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#list-task-delete-dialog {\r\n    position: relative;\r\n    margin: auto;\r\n    width: max(40%, 700px);\r\n    height: fit-content;\r\n    padding: 2rem;\r\n    font-family: Dosis-Medium;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n}\r\n\r\n#ltrd-dialog-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n    font-size: 2rem;\r\n    color: var(--app-primary-color);\r\n}\r\n\r\n#ltrd-logo-container {\r\n    width: 60px;\r\n    aspect-ratio: 1 / 1;\r\n    background-image: url(../../../../assets/icons/icons8-checkmark.png);\r\n    background-size: contain;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.ltrd-delete-field {\r\n    margin-bottom: 2rem;\r\n    color: black;\r\n    font-size: 1.5rem; \r\n}\r\n\r\n.ltrd-delete-form-buttons {\r\n    margin-top: 2rem;\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n.ltrd-delete-form-buttons button {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    font-size: 1.2rem;\r\n    font-family: Dosis-Medium;\r\n    background-color: var(--app-primary-color);\r\n    color: white;\r\n    border-style: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/listTask/details/listTaskDetailsDialog.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/listTask/details/listTaskDetailsDialog.css ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/icons/icons8-checkmark.png */ "./src/assets/icons/icons8-checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#task-details-dialog {
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

#tdd-close-button-container {
    position: absolute;
    top: 2rem;
    right: 2rem;
}

#tdd-close-button {
    padding: 0.5rem 0.7rem;
    background-color: var(--app-primary-color);
    border-style: none;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
}

#tdd-dialog-header-container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: var(--app-primary-color);
}

#tdd-logo-container {
    width: 60px;
    aspect-ratio: 1 / 1;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    margin-right: 0.5rem;
}

.tdd-details-field {
    margin-bottom: 2rem;
    color: black;
}

.tdd-details-field  .label-container{
    margin-bottom: 0.5rem;
}

.tdd-details-flex-field {
    display: flex;
    margin-bottom: 1.5rem;
}

.tdd-details-flex-field .tdd-label-container {
    margin-right: 0.5rem
}

.tdd-label-container {
    font-size: 1.5rem; 
}

.tdd-value-container {
    font-size: 1.5rem;
}

#tdd-priority-field {
    display: flex;
    align-items: center;
}

#tdd-priority-value-container { 
    display: flex;
    align-items: center;
}

#tdd-priority-value-container div {
    margin-left: 0.5rem;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    align-self: center;
}

.tdd-high-priority-box {
    background-color: var(--high-priority-color);
}

.tdd-medium-priority-box {
    background-color: var(--medium-priority-color);
}

.tdd-low-priority-box {
    background-color: var(--low-priority-color);
}

#tdd-status-field {
    margin-bottom: 0;
}

`, "",{"version":3,"sources":["webpack://./src/components/dialogs/listTask/details/listTaskDetailsDialog.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAyD;AAC7D;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,oDAAoD;AACxD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,0CAA0C;IAC1C,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,yDAAoE;IACpE,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI;AACJ;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../../../../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#task-details-dialog {\r\n    position: relative;\r\n    margin: auto;\r\n    width: max(40%, 700px);\r\n    height: fit-content;\r\n    padding: 2rem;\r\n    font-family: Dosis-Medium;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n}\r\n\r\n#tdd-close-button-container {\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 2rem;\r\n}\r\n\r\n#tdd-close-button {\r\n    padding: 0.5rem 0.7rem;\r\n    background-color: var(--app-primary-color);\r\n    border-style: none;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n}\r\n\r\n#tdd-dialog-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n    font-size: 2rem;\r\n    color: var(--app-primary-color);\r\n}\r\n\r\n#tdd-logo-container {\r\n    width: 60px;\r\n    aspect-ratio: 1 / 1;\r\n    background-image: url(../../../../assets/icons/icons8-checkmark.png);\r\n    background-size: contain;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.tdd-details-field {\r\n    margin-bottom: 2rem;\r\n    color: black;\r\n}\r\n\r\n.tdd-details-field  .label-container{\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.tdd-details-flex-field {\r\n    display: flex;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.tdd-details-flex-field .tdd-label-container {\r\n    margin-right: 0.5rem\r\n}\r\n\r\n.tdd-label-container {\r\n    font-size: 1.5rem; \r\n}\r\n\r\n.tdd-value-container {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#tdd-priority-field {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#tdd-priority-value-container { \r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#tdd-priority-value-container div {\r\n    margin-left: 0.5rem;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 5px;\r\n    align-self: center;\r\n}\r\n\r\n.tdd-high-priority-box {\r\n    background-color: var(--high-priority-color);\r\n}\r\n\r\n.tdd-medium-priority-box {\r\n    background-color: var(--medium-priority-color);\r\n}\r\n\r\n.tdd-low-priority-box {\r\n    background-color: var(--low-priority-color);\r\n}\r\n\r\n#tdd-status-field {\r\n    margin-bottom: 0;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/listTask/edit/editListTaskDialog.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/listTask/edit/editListTaskDialog.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/icons/icons8-checkmark.png */ "./src/assets/icons/icons8-checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#edit-list-task-dialog {
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

#eltd-close-button-container {
    position: absolute;
    top: 2rem;
    right: 2rem;
}

#eltd-close-button {
    padding: 0.5rem 0.7rem;
    background-color: var(--app-primary-color);
    border-style: none;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
}

#eltd-dialog-header-container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

#eltd-logo-container {
    width: 60px;
    aspect-ratio: 1 / 1;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    margin-right: 0.5rem;
}

#edit-task-dialog h2 {
    font-size: 3rem;
    color: var(--app-primary-color);
}

.eltd-edit-field {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--form-element-text-color);
}

.eltd-edit-field textarea {
    font-family: Dosis-Medium;
    font-size: 1.2rem;
    border-style: none;
    outline: 1px solid var(--form-element-text-color);
    padding: 0.5rem;
}

#eltd-priority-label-container {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

#eltd-priority-box-container {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    font-size: 1rem;
    color: white;
}

#eltd-priority-label-container > div > div{
    width: 20px;
    height: 20px;
    margin-right: 0.3rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.eltd-high-priority-box {
    background-color: var(--high-priority-color);
}

.eltd-medium-priority-box {
    background-color: var(--medium-priority-color);
}

.eltd-low-priority-box {
    background-color: var(--low-priority-color);
}

#edit-task-dialog label{
    font-size: 1.5rem;
    color: var(--form-element-text-color);
}

.eltd-label-margin {
    margin-bottom: 0.5rem;
}

#edit-list-task-dialog input{
    font-size: 1.5rem;
    line-height: 3rem;
    border-style: none;
    color: var(--form-element-text-color);
    outline: 1px solid var(--form-element-text-color);
    padding: 0rem 0.5rem;
    font-family: Dosis-Medium;
}

#edit-list-task-dialog select{
    font-size: 1.3rem;
    height: 3.3rem;
    border-style: none;
    color: var(--form-element-text-color);
    outline: 1px solid var(--form-element-text-color);
    padding: 0rem 0.5rem;
    font-family: Dosis-Medium;
}

.eltd-form-buttons {
    margin-top: 4rem;
    display: flex;
    gap: 2rem;
}

.eltd-form-buttons button {
    flex: 1;
    padding: 1.5rem;
    font-size: 1.2rem;
    font-family: Dosis-Medium;
    background-color: var(--app-primary-color);
    color: white;
    border-style: none;
    border-radius: 5px;
}


`, "",{"version":3,"sources":["webpack://./src/components/dialogs/listTask/edit/editListTaskDialog.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAyD;AAC7D;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,oDAAoD;AACxD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,0CAA0C;IAC1C,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,yDAAoE;IACpE,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,qBAAqB;IACrB,qCAAqC;AACzC;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,iDAAiD;IACjD,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,iBAAiB;IACjB,qCAAqC;AACzC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,qCAAqC;IACrC,iDAAiD;IACjD,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,qCAAqC;IACrC,iDAAiD;IACjD,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,OAAO;IACP,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,0CAA0C;IAC1C,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../../../../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#edit-list-task-dialog {\r\n    position: relative;\r\n    margin: auto;\r\n    width: max(40%, 700px);\r\n    height: fit-content;\r\n    padding: 2rem;\r\n    font-family: Dosis-Medium;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n}\r\n\r\n#eltd-close-button-container {\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 2rem;\r\n}\r\n\r\n#eltd-close-button {\r\n    padding: 0.5rem 0.7rem;\r\n    background-color: var(--app-primary-color);\r\n    border-style: none;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n}\r\n\r\n#eltd-dialog-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#eltd-logo-container {\r\n    width: 60px;\r\n    aspect-ratio: 1 / 1;\r\n    background-image: url(../../../../assets/icons/icons8-checkmark.png);\r\n    background-size: contain;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n#edit-task-dialog h2 {\r\n    font-size: 3rem;\r\n    color: var(--app-primary-color);\r\n}\r\n\r\n.eltd-edit-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 2rem;\r\n    margin-bottom: 1.5rem;\r\n    color: var(--form-element-text-color);\r\n}\r\n\r\n.eltd-edit-field textarea {\r\n    font-family: Dosis-Medium;\r\n    font-size: 1.2rem;\r\n    border-style: none;\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0.5rem;\r\n}\r\n\r\n#eltd-priority-label-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#eltd-priority-box-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 1rem;\r\n    font-size: 1rem;\r\n    color: white;\r\n}\r\n\r\n#eltd-priority-label-container > div > div{\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 0.3rem;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.eltd-high-priority-box {\r\n    background-color: var(--high-priority-color);\r\n}\r\n\r\n.eltd-medium-priority-box {\r\n    background-color: var(--medium-priority-color);\r\n}\r\n\r\n.eltd-low-priority-box {\r\n    background-color: var(--low-priority-color);\r\n}\r\n\r\n#edit-task-dialog label{\r\n    font-size: 1.5rem;\r\n    color: var(--form-element-text-color);\r\n}\r\n\r\n.eltd-label-margin {\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#edit-list-task-dialog input{\r\n    font-size: 1.5rem;\r\n    line-height: 3rem;\r\n    border-style: none;\r\n    color: var(--form-element-text-color);\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0rem 0.5rem;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n#edit-list-task-dialog select{\r\n    font-size: 1.3rem;\r\n    height: 3.3rem;\r\n    border-style: none;\r\n    color: var(--form-element-text-color);\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0rem 0.5rem;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n.eltd-form-buttons {\r\n    margin-top: 4rem;\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n.eltd-form-buttons button {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    font-size: 1.2rem;\r\n    font-family: Dosis-Medium;\r\n    background-color: var(--app-primary-color);\r\n    color: white;\r\n    border-style: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/list/add/addListDialog.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/list/add/addListDialog.css ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/icons/icons8-checkmark.png */ "./src/assets/icons/icons8-checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#add-list-dialog {
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

#ald-close-button-container {
    position: absolute;
    top: 2rem;
    right: 2rem;
}

#ald-close-button {
    padding: 0.5rem 0.7rem;
    background-color: var(--app-primary-color);
    border-style: none;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
}

#ald-dialog-header-container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

#ald-logo-container {
    width: 60px;
    aspect-ratio: 1 / 1;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    margin-right: 0.5rem;
}

#add-task-dialog h2 {
    font-size: 3rem;
    color: var(--app-primary-color);
}

.ald-list-add-field {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--form-element-text-color);
}

#add-list-dialog label{
    font-size: 1.5rem;
    color: var(--form-element-text-color);
}

.ald-list-add-label-margin {
    margin-bottom: 0.5rem;
}

#add-list-dialog input{
    font-size: 1.5rem;
    line-height: 3rem;
    border-style: none;
    color: var(--form-element-text-color);
    outline: 1px solid var(--form-element-text-color);
    padding: 0rem 0.5rem;
    font-family: Dosis-Medium;
}

.ald-list-add-form-buttons {
    margin-top: 4rem;
    display: flex;
    gap: 2rem;
}

.ald-list-add-form-buttons button {
    flex: 1;
    padding: 1.5rem;
    font-size: 1.2rem;
    font-family: Dosis-Medium;
    background-color: var(--app-primary-color);
    color: white;
    border-style: none;
    border-radius: 5px;
}



`, "",{"version":3,"sources":["webpack://./src/components/dialogs/list/add/addListDialog.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAyD;AAC7D;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,oDAAoD;AACxD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,0CAA0C;IAC1C,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,yDAAoE;IACpE,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,qBAAqB;IACrB,qCAAqC;AACzC;;AAEA;IACI,iBAAiB;IACjB,qCAAqC;AACzC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,qCAAqC;IACrC,iDAAiD;IACjD,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,OAAO;IACP,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,0CAA0C;IAC1C,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../../../../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#add-list-dialog {\r\n    position: relative;\r\n    margin: auto;\r\n    width: max(40%, 700px);\r\n    height: fit-content;\r\n    padding: 2rem;\r\n    font-family: Dosis-Medium;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n}\r\n\r\n#ald-close-button-container {\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 2rem;\r\n}\r\n\r\n#ald-close-button {\r\n    padding: 0.5rem 0.7rem;\r\n    background-color: var(--app-primary-color);\r\n    border-style: none;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n}\r\n\r\n#ald-dialog-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#ald-logo-container {\r\n    width: 60px;\r\n    aspect-ratio: 1 / 1;\r\n    background-image: url(../../../../assets/icons/icons8-checkmark.png);\r\n    background-size: contain;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n#add-task-dialog h2 {\r\n    font-size: 3rem;\r\n    color: var(--app-primary-color);\r\n}\r\n\r\n.ald-list-add-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 2rem;\r\n    margin-bottom: 1.5rem;\r\n    color: var(--form-element-text-color);\r\n}\r\n\r\n#add-list-dialog label{\r\n    font-size: 1.5rem;\r\n    color: var(--form-element-text-color);\r\n}\r\n\r\n.ald-list-add-label-margin {\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#add-list-dialog input{\r\n    font-size: 1.5rem;\r\n    line-height: 3rem;\r\n    border-style: none;\r\n    color: var(--form-element-text-color);\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0rem 0.5rem;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n.ald-list-add-form-buttons {\r\n    margin-top: 4rem;\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n.ald-list-add-form-buttons button {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    font-size: 1.2rem;\r\n    font-family: Dosis-Medium;\r\n    background-color: var(--app-primary-color);\r\n    color: white;\r\n    border-style: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/list/delete/listDeleteDialog.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/list/delete/listDeleteDialog.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/icons/icons8-checkmark.png */ "./src/assets/icons/icons8-checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#list-delete-dialog {
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

#lrd-dialog-header-container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: var(--app-primary-color);
}

#lrd-logo-container {
    width: 60px;
    aspect-ratio: 1 / 1;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    margin-right: 0.5rem;
}

.lrd-delete-field {
    margin-bottom: 2rem;
    color: black;
    font-size: 1.5rem; 
}

.lrd-delete-form-buttons {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
}

.lrd-delete-form-buttons button {
    flex: 1;
    padding: 1.5rem;
    font-size: 1.2rem;
    font-family: Dosis-Medium;
    background-color: var(--app-primary-color);
    color: white;
    border-style: none;
    border-radius: 5px;
}

`, "",{"version":3,"sources":["webpack://./src/components/dialogs/list/delete/listDeleteDialog.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAyD;AAC7D;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,oDAAoD;AACxD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,yDAAoE;IACpE,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,OAAO;IACP,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,0CAA0C;IAC1C,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../../../../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#list-delete-dialog {\r\n    position: relative;\r\n    margin: auto;\r\n    width: max(40%, 700px);\r\n    height: fit-content;\r\n    padding: 2rem;\r\n    font-family: Dosis-Medium;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n}\r\n\r\n#lrd-dialog-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n    font-size: 2rem;\r\n    color: var(--app-primary-color);\r\n}\r\n\r\n#lrd-logo-container {\r\n    width: 60px;\r\n    aspect-ratio: 1 / 1;\r\n    background-image: url(../../../../assets/icons/icons8-checkmark.png);\r\n    background-size: contain;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.lrd-delete-field {\r\n    margin-bottom: 2rem;\r\n    color: black;\r\n    font-size: 1.5rem; \r\n}\r\n\r\n.lrd-delete-form-buttons {\r\n    margin-top: 2rem;\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n.lrd-delete-form-buttons button {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    font-size: 1.2rem;\r\n    font-family: Dosis-Medium;\r\n    background-color: var(--app-primary-color);\r\n    color: white;\r\n    border-style: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/list/details/listDetailsDialog.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/list/details/listDetailsDialog.css ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/icons/icons8-checkmark.png */ "./src/assets/icons/icons8-checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#list-details-dialog {
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

#ldd-close-button-container {
    position: absolute;
    top: 2rem;
    right: 2rem;
}

#ldd-close-button {
    padding: 0.5rem 0.7rem;
    background-color: var(--app-primary-color);
    border-style: none;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
}

#ldd-dialog-header-container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: var(--app-primary-color);
}

#ldd-logo-container {
    width: 60px;
    aspect-ratio: 1 / 1;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    margin-right: 0.5rem;
}

#ldd-number-of-tasks-field {
    margin-bottom: 0;
}

.ldd-list-details-flex-field {
    display: flex;
    margin-bottom: 1.5rem;
}

.ldd-list-details-flex-field .ldd-list-label-container {
    margin-right: 0.5rem
}

.ldd-list-label-container {
    font-size: 1.5rem; 
}

.ldd-list-value-container {
    font-size: 1.5rem;
}








`, "",{"version":3,"sources":["webpack://./src/components/dialogs/list/details/listDetailsDialog.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAyD;AAC7D;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,oDAAoD;AACxD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,0CAA0C;IAC1C,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,yDAAoE;IACpE,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI;AACJ;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../../../../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#list-details-dialog {\r\n    position: relative;\r\n    margin: auto;\r\n    width: max(40%, 700px);\r\n    height: fit-content;\r\n    padding: 2rem;\r\n    font-family: Dosis-Medium;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n}\r\n\r\n#ldd-close-button-container {\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 2rem;\r\n}\r\n\r\n#ldd-close-button {\r\n    padding: 0.5rem 0.7rem;\r\n    background-color: var(--app-primary-color);\r\n    border-style: none;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n}\r\n\r\n#ldd-dialog-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n    font-size: 2rem;\r\n    color: var(--app-primary-color);\r\n}\r\n\r\n#ldd-logo-container {\r\n    width: 60px;\r\n    aspect-ratio: 1 / 1;\r\n    background-image: url(../../../../assets/icons/icons8-checkmark.png);\r\n    background-size: contain;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n#ldd-number-of-tasks-field {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.ldd-list-details-flex-field {\r\n    display: flex;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.ldd-list-details-flex-field .ldd-list-label-container {\r\n    margin-right: 0.5rem\r\n}\r\n\r\n.ldd-list-label-container {\r\n    font-size: 1.5rem; \r\n}\r\n\r\n.ldd-list-value-container {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/list/edit/editListDialog.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/list/edit/editListDialog.css ***!
  \***************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/icons/icons8-checkmark.png */ "./src/assets/icons/icons8-checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#edit-list-dialog {
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

#eld-close-button-container {
    position: absolute;
    top: 2rem;
    right: 2rem;
}

#eld-close-button {
    padding: 0.5rem 0.7rem;
    background-color: var(--app-primary-color);
    border-style: none;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
}

#eld-dialog-header-container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

#eld-logo-container {
    width: 60px;
    aspect-ratio: 1 / 1;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    margin-right: 0.5rem;
}

#edit-list-dialog h2 {
    font-size: 3rem;
    color: var(--app-primary-color);
}

.eld-edit-list-field {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--form-element-text-color);
}

#edit-list-dialog label{
    font-size: 1.5rem;
    color: var(--form-element-text-color);
}

.eld-edit-list-label-margin {
    margin-bottom: 0.5rem;
}

#edit-list-dialog input{
    font-size: 1.5rem;
    line-height: 3rem;
    border-style: none;
    color: var(--form-element-text-color);
    outline: 1px solid var(--form-element-text-color);
    padding: 0rem 0.5rem;
    font-family: Dosis-Medium;
}

.eld-edit-list-form-buttons {
    margin-top: 4rem;
    display: flex;
    gap: 2rem;
}

.eld-edit-list-form-buttons button {
    flex: 1;
    padding: 1.5rem;
    font-size: 1.2rem;
    font-family: Dosis-Medium;
    background-color: var(--app-primary-color);
    color: white;
    border-style: none;
    border-radius: 5px;
}




`, "",{"version":3,"sources":["webpack://./src/components/dialogs/list/edit/editListDialog.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAyD;AAC7D;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,oDAAoD;AACxD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,0CAA0C;IAC1C,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,yDAAoE;IACpE,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,qBAAqB;IACrB,qCAAqC;AACzC;;AAEA;IACI,iBAAiB;IACjB,qCAAqC;AACzC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,qCAAqC;IACrC,iDAAiD;IACjD,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,OAAO;IACP,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,0CAA0C;IAC1C,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../../../../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#edit-list-dialog {\r\n    position: relative;\r\n    margin: auto;\r\n    width: max(40%, 700px);\r\n    height: fit-content;\r\n    padding: 2rem;\r\n    font-family: Dosis-Medium;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n}\r\n\r\n#eld-close-button-container {\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 2rem;\r\n}\r\n\r\n#eld-close-button {\r\n    padding: 0.5rem 0.7rem;\r\n    background-color: var(--app-primary-color);\r\n    border-style: none;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n}\r\n\r\n#eld-dialog-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#eld-logo-container {\r\n    width: 60px;\r\n    aspect-ratio: 1 / 1;\r\n    background-image: url(../../../../assets/icons/icons8-checkmark.png);\r\n    background-size: contain;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n#edit-list-dialog h2 {\r\n    font-size: 3rem;\r\n    color: var(--app-primary-color);\r\n}\r\n\r\n.eld-edit-list-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 2rem;\r\n    margin-bottom: 1.5rem;\r\n    color: var(--form-element-text-color);\r\n}\r\n\r\n#edit-list-dialog label{\r\n    font-size: 1.5rem;\r\n    color: var(--form-element-text-color);\r\n}\r\n\r\n.eld-edit-list-label-margin {\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#edit-list-dialog input{\r\n    font-size: 1.5rem;\r\n    line-height: 3rem;\r\n    border-style: none;\r\n    color: var(--form-element-text-color);\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0rem 0.5rem;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n.eld-edit-list-form-buttons {\r\n    margin-top: 4rem;\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n.eld-edit-list-form-buttons button {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    font-size: 1.2rem;\r\n    font-family: Dosis-Medium;\r\n    background-color: var(--app-primary-color);\r\n    color: white;\r\n    border-style: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/task/add/addTaskDialog.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/task/add/addTaskDialog.css ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/icons/icons8-checkmark.png */ "./src/assets/icons/icons8-checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
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

#atd-close-button-container {
    position: absolute;
    top: 2rem;
    right: 2rem;
}

#atd-close-button {
    padding: 0.5rem 0.7rem;
    background-color: var(--app-primary-color);
    border-style: none;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
}

#atd-dialog-header-container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

#atd-logo-container {
    width: 60px;
    aspect-ratio: 1 / 1;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    margin-right: 0.5rem;
}

#add-task-dialog h2 {
    font-size: 3rem;
    color: var(--app-primary-color);
}

.atd-add-field {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--form-element-text-color);
}

.atd-add-field textarea {
    font-family: Dosis-Medium;
    font-size: 1.2rem;
    border-style: none;
    outline: 1px solid var(--form-element-text-color);
    padding: 0.5rem;
}

#atd-priority-label-container {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

#atd-priority-box-container {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    font-size: 1rem;
    color: white;
}

#atd-priority-label-container > div > div{
    width: 20px;
    height: 20px;
    margin-right: 0.3rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.atd-high-priority-box {
    background-color: var(--high-priority-color);
}

.atd-medium-priority-box {
    background-color: var(--medium-priority-color);
}

.atd-low-priority-box {
    background-color: var(--low-priority-color);
}

#add-task-dialog label{
    font-size: 1.5rem;
    color: var(--form-element-text-color);
}

.atd-label-margin {
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

.atd-form-buttons {
    margin-top: 4rem;
    display: flex;
    gap: 2rem;
}

.atd-form-buttons button {
    flex: 1;
    padding: 1.5rem;
    font-size: 1.2rem;
    font-family: Dosis-Medium;
    background-color: var(--app-primary-color);
    color: white;
    border-style: none;
    border-radius: 5px;
}


`, "",{"version":3,"sources":["webpack://./src/components/dialogs/task/add/addTaskDialog.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAyD;AAC7D;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,oDAAoD;AACxD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,0CAA0C;IAC1C,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,yDAAoE;IACpE,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,qBAAqB;IACrB,qCAAqC;AACzC;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,iDAAiD;IACjD,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,iBAAiB;IACjB,qCAAqC;AACzC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,qCAAqC;IACrC,iDAAiD;IACjD,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,qCAAqC;IACrC,iDAAiD;IACjD,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,OAAO;IACP,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,0CAA0C;IAC1C,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../../../../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#add-task-dialog {\r\n    position: relative;\r\n    margin: auto;\r\n    width: max(40%, 700px);\r\n    height: fit-content;\r\n    padding: 2rem;\r\n    font-family: Dosis-Medium;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n}\r\n\r\n#atd-close-button-container {\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 2rem;\r\n}\r\n\r\n#atd-close-button {\r\n    padding: 0.5rem 0.7rem;\r\n    background-color: var(--app-primary-color);\r\n    border-style: none;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n}\r\n\r\n#atd-dialog-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#atd-logo-container {\r\n    width: 60px;\r\n    aspect-ratio: 1 / 1;\r\n    background-image: url(../../../../assets/icons/icons8-checkmark.png);\r\n    background-size: contain;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n#add-task-dialog h2 {\r\n    font-size: 3rem;\r\n    color: var(--app-primary-color);\r\n}\r\n\r\n.atd-add-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 2rem;\r\n    margin-bottom: 1.5rem;\r\n    color: var(--form-element-text-color);\r\n}\r\n\r\n.atd-add-field textarea {\r\n    font-family: Dosis-Medium;\r\n    font-size: 1.2rem;\r\n    border-style: none;\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0.5rem;\r\n}\r\n\r\n#atd-priority-label-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#atd-priority-box-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 1rem;\r\n    font-size: 1rem;\r\n    color: white;\r\n}\r\n\r\n#atd-priority-label-container > div > div{\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 0.3rem;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.atd-high-priority-box {\r\n    background-color: var(--high-priority-color);\r\n}\r\n\r\n.atd-medium-priority-box {\r\n    background-color: var(--medium-priority-color);\r\n}\r\n\r\n.atd-low-priority-box {\r\n    background-color: var(--low-priority-color);\r\n}\r\n\r\n#add-task-dialog label{\r\n    font-size: 1.5rem;\r\n    color: var(--form-element-text-color);\r\n}\r\n\r\n.atd-label-margin {\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#add-task-dialog input{\r\n    font-size: 1.5rem;\r\n    line-height: 3rem;\r\n    border-style: none;\r\n    color: var(--form-element-text-color);\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0rem 0.5rem;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n#add-task-dialog select{\r\n    font-size: 1.3rem;\r\n    height: 3.3rem;\r\n    border-style: none;\r\n    color: var(--form-element-text-color);\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0rem 0.5rem;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n.atd-form-buttons {\r\n    margin-top: 4rem;\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n.atd-form-buttons button {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    font-size: 1.2rem;\r\n    font-family: Dosis-Medium;\r\n    background-color: var(--app-primary-color);\r\n    color: white;\r\n    border-style: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/task/delete/taskDeleteDialog.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/task/delete/taskDeleteDialog.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/icons/icons8-checkmark.png */ "./src/assets/icons/icons8-checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#task-delete-dialog {
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

#trd-dialog-header-container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: var(--app-primary-color);
}

#trd-logo-container {
    width: 60px;
    aspect-ratio: 1 / 1;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    margin-right: 0.5rem;
}

.trd-delete-field {
    margin-bottom: 2rem;
    color: black;
    font-size: 1.5rem; 
}

.trd-delete-form-buttons {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
}

.trd-delete-form-buttons button {
    flex: 1;
    padding: 1.5rem;
    font-size: 1.2rem;
    font-family: Dosis-Medium;
    background-color: var(--app-primary-color);
    color: white;
    border-style: none;
    border-radius: 5px;
}

`, "",{"version":3,"sources":["webpack://./src/components/dialogs/task/delete/taskDeleteDialog.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAyD;AAC7D;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,oDAAoD;AACxD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,yDAAoE;IACpE,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,OAAO;IACP,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,0CAA0C;IAC1C,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../../../../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#task-delete-dialog {\r\n    position: relative;\r\n    margin: auto;\r\n    width: max(40%, 700px);\r\n    height: fit-content;\r\n    padding: 2rem;\r\n    font-family: Dosis-Medium;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n}\r\n\r\n#trd-dialog-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n    font-size: 2rem;\r\n    color: var(--app-primary-color);\r\n}\r\n\r\n#trd-logo-container {\r\n    width: 60px;\r\n    aspect-ratio: 1 / 1;\r\n    background-image: url(../../../../assets/icons/icons8-checkmark.png);\r\n    background-size: contain;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.trd-delete-field {\r\n    margin-bottom: 2rem;\r\n    color: black;\r\n    font-size: 1.5rem; \r\n}\r\n\r\n.trd-delete-form-buttons {\r\n    margin-top: 2rem;\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n.trd-delete-form-buttons button {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    font-size: 1.2rem;\r\n    font-family: Dosis-Medium;\r\n    background-color: var(--app-primary-color);\r\n    color: white;\r\n    border-style: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/task/details/taskDetailsDialog.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/task/details/taskDetailsDialog.css ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/icons/icons8-checkmark.png */ "./src/assets/icons/icons8-checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#task-details-dialog {
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

#tdd-close-button-container {
    position: absolute;
    top: 2rem;
    right: 2rem;
}

#tdd-close-button {
    padding: 0.5rem 0.7rem;
    background-color: var(--app-primary-color);
    border-style: none;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
}

#tdd-dialog-header-container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: var(--app-primary-color);
}

#tdd-logo-container {
    width: 60px;
    aspect-ratio: 1 / 1;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    margin-right: 0.5rem;
}

.tdd-details-field {
    margin-bottom: 2rem;
    color: black;
}

.tdd-details-field  .label-container{
    margin-bottom: 0.5rem;
}

.tdd-details-flex-field {
    display: flex;
    margin-bottom: 1.5rem;
}

.tdd-details-flex-field .tdd-label-container {
    margin-right: 0.5rem
}

.tdd-label-container {
    font-size: 1.5rem; 
}

.tdd-value-container {
    font-size: 1.5rem;
}

#tdd-priority-field {
    display: flex;
    align-items: center;
}

#tdd-priority-value-container { 
    display: flex;
    align-items: center;
}

#tdd-priority-value-container div {
    margin-left: 0.5rem;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    align-self: center;
}

.tdd-high-priority-box {
    background-color: var(--high-priority-color);
}

.tdd-medium-priority-box {
    background-color: var(--medium-priority-color);
}

.tdd-low-priority-box {
    background-color: var(--low-priority-color);
}

#tdd-status-field {
    margin-bottom: 0;
}

`, "",{"version":3,"sources":["webpack://./src/components/dialogs/task/details/taskDetailsDialog.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAyD;AAC7D;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,oDAAoD;AACxD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,0CAA0C;IAC1C,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,yDAAoE;IACpE,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI;AACJ;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../../../../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#task-details-dialog {\r\n    position: relative;\r\n    margin: auto;\r\n    width: max(40%, 700px);\r\n    height: fit-content;\r\n    padding: 2rem;\r\n    font-family: Dosis-Medium;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n}\r\n\r\n#tdd-close-button-container {\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 2rem;\r\n}\r\n\r\n#tdd-close-button {\r\n    padding: 0.5rem 0.7rem;\r\n    background-color: var(--app-primary-color);\r\n    border-style: none;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n}\r\n\r\n#tdd-dialog-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n    font-size: 2rem;\r\n    color: var(--app-primary-color);\r\n}\r\n\r\n#tdd-logo-container {\r\n    width: 60px;\r\n    aspect-ratio: 1 / 1;\r\n    background-image: url(../../../../assets/icons/icons8-checkmark.png);\r\n    background-size: contain;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.tdd-details-field {\r\n    margin-bottom: 2rem;\r\n    color: black;\r\n}\r\n\r\n.tdd-details-field  .label-container{\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.tdd-details-flex-field {\r\n    display: flex;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.tdd-details-flex-field .tdd-label-container {\r\n    margin-right: 0.5rem\r\n}\r\n\r\n.tdd-label-container {\r\n    font-size: 1.5rem; \r\n}\r\n\r\n.tdd-value-container {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#tdd-priority-field {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#tdd-priority-value-container { \r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#tdd-priority-value-container div {\r\n    margin-left: 0.5rem;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 5px;\r\n    align-self: center;\r\n}\r\n\r\n.tdd-high-priority-box {\r\n    background-color: var(--high-priority-color);\r\n}\r\n\r\n.tdd-medium-priority-box {\r\n    background-color: var(--medium-priority-color);\r\n}\r\n\r\n.tdd-low-priority-box {\r\n    background-color: var(--low-priority-color);\r\n}\r\n\r\n#tdd-status-field {\r\n    margin-bottom: 0;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/task/edit/editTaskDialog.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/task/edit/editTaskDialog.css ***!
  \***************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/icons/icons8-checkmark.png */ "./src/assets/icons/icons8-checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#edit-task-dialog {
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

#etd-close-button-container {
    position: absolute;
    top: 2rem;
    right: 2rem;
}

#etd-close-button {
    padding: 0.5rem 0.7rem;
    background-color: var(--app-primary-color);
    border-style: none;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
}

#etd-dialog-header-container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

#etd-logo-container {
    width: 60px;
    aspect-ratio: 1 / 1;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    margin-right: 0.5rem;
}

#edit-task-dialog h2 {
    font-size: 3rem;
    color: var(--app-primary-color);
}

.etd-edit-field {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--form-element-text-color);
}

.etd-edit-field textarea {
    font-family: Dosis-Medium;
    font-size: 1.2rem;
    border-style: none;
    outline: 1px solid var(--form-element-text-color);
    padding: 0.5rem;
}

#etd-priority-label-container {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

#etd-priority-box-container {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    font-size: 1rem;
    color: white;
}

#etd-priority-label-container > div > div{
    width: 20px;
    height: 20px;
    margin-right: 0.3rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.etd-high-priority-box {
    background-color: var(--high-priority-color);
}

.etd-medium-priority-box {
    background-color: var(--medium-priority-color);
}

.etd-low-priority-box {
    background-color: var(--low-priority-color);
}

#edit-task-dialog label{
    font-size: 1.5rem;
    color: var(--form-element-text-color);
}

.etd-label-margin {
    margin-bottom: 0.5rem;
}

#edit-task-dialog input{
    font-size: 1.5rem;
    line-height: 3rem;
    border-style: none;
    color: var(--form-element-text-color);
    outline: 1px solid var(--form-element-text-color);
    padding: 0rem 0.5rem;
    font-family: Dosis-Medium;
}

#edit-task-dialog select{
    font-size: 1.3rem;
    height: 3.3rem;
    border-style: none;
    color: var(--form-element-text-color);
    outline: 1px solid var(--form-element-text-color);
    padding: 0rem 0.5rem;
    font-family: Dosis-Medium;
}

.etd-form-buttons {
    margin-top: 4rem;
    display: flex;
    gap: 2rem;
}

.etd-form-buttons button {
    flex: 1;
    padding: 1.5rem;
    font-size: 1.2rem;
    font-family: Dosis-Medium;
    background-color: var(--app-primary-color);
    color: white;
    border-style: none;
    border-radius: 5px;
}


`, "",{"version":3,"sources":["webpack://./src/components/dialogs/task/edit/editTaskDialog.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAyD;AAC7D;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,oDAAoD;AACxD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,0CAA0C;IAC1C,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,yDAAoE;IACpE,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,qBAAqB;IACrB,qCAAqC;AACzC;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,iDAAiD;IACjD,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,iBAAiB;IACjB,qCAAqC;AACzC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,qCAAqC;IACrC,iDAAiD;IACjD,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,qCAAqC;IACrC,iDAAiD;IACjD,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,OAAO;IACP,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,0CAA0C;IAC1C,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../../../../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#edit-task-dialog {\r\n    position: relative;\r\n    margin: auto;\r\n    width: max(40%, 700px);\r\n    height: fit-content;\r\n    padding: 2rem;\r\n    font-family: Dosis-Medium;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n}\r\n\r\n#etd-close-button-container {\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 2rem;\r\n}\r\n\r\n#etd-close-button {\r\n    padding: 0.5rem 0.7rem;\r\n    background-color: var(--app-primary-color);\r\n    border-style: none;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n}\r\n\r\n#etd-dialog-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#etd-logo-container {\r\n    width: 60px;\r\n    aspect-ratio: 1 / 1;\r\n    background-image: url(../../../../assets/icons/icons8-checkmark.png);\r\n    background-size: contain;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n#edit-task-dialog h2 {\r\n    font-size: 3rem;\r\n    color: var(--app-primary-color);\r\n}\r\n\r\n.etd-edit-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 2rem;\r\n    margin-bottom: 1.5rem;\r\n    color: var(--form-element-text-color);\r\n}\r\n\r\n.etd-edit-field textarea {\r\n    font-family: Dosis-Medium;\r\n    font-size: 1.2rem;\r\n    border-style: none;\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0.5rem;\r\n}\r\n\r\n#etd-priority-label-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#etd-priority-box-container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 1rem;\r\n    font-size: 1rem;\r\n    color: white;\r\n}\r\n\r\n#etd-priority-label-container > div > div{\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 0.3rem;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.etd-high-priority-box {\r\n    background-color: var(--high-priority-color);\r\n}\r\n\r\n.etd-medium-priority-box {\r\n    background-color: var(--medium-priority-color);\r\n}\r\n\r\n.etd-low-priority-box {\r\n    background-color: var(--low-priority-color);\r\n}\r\n\r\n#edit-task-dialog label{\r\n    font-size: 1.5rem;\r\n    color: var(--form-element-text-color);\r\n}\r\n\r\n.etd-label-margin {\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#edit-task-dialog input{\r\n    font-size: 1.5rem;\r\n    line-height: 3rem;\r\n    border-style: none;\r\n    color: var(--form-element-text-color);\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0rem 0.5rem;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n#edit-task-dialog select{\r\n    font-size: 1.3rem;\r\n    height: 3.3rem;\r\n    border-style: none;\r\n    color: var(--form-element-text-color);\r\n    outline: 1px solid var(--form-element-text-color);\r\n    padding: 0rem 0.5rem;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n.etd-form-buttons {\r\n    margin-top: 4rem;\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n.etd-form-buttons button {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    font-size: 1.2rem;\r\n    font-family: Dosis-Medium;\r\n    background-color: var(--app-primary-color);\r\n    color: white;\r\n    border-style: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/panels/listTask/listTaskPanel.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/panels/listTask/listTaskPanel.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/icons/icons8-edit.png */ "./src/assets/icons/icons8-edit.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/icons/icons8-details.png */ "./src/assets/icons/icons8-details.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/icons/icons8-delete.png */ "./src/assets/icons/icons8-delete.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#ltp-panel-container {
    display: flex;
    width: 100%;
    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);
    font-family: Dosis-Medium;
    color: var(--form-element-text-color);
    margin-bottom: 2rem;
    border-radius: 5px;
}

#ltp-panel-container > div {
    min-height: 6rem;
}

#ltp-priority-stripe {
    width: 1rem;
    border-radius: 5px 0px 0px 5px;
}

#ltp-task-title-container {
    display: flex;
    align-items: center;
    width: 33%;
    padding: 0rem 2rem;
    font-size: 1.2rem;
}

#ltp-task-title-container h3 {
    width: 100%;
    word-wrap: break-word;
}

#ltp-task-due-date-container {
    display: flex;
    align-items: center;
    width: 33%;
    padding: 0rem 2rem;
    justify-content: center;
    font-size: 1.2rem;
}

#ltp-task-checkbox-container {
    display: flex;
    align-items: center;
    width: 33%;
    padding: 0rem 2rem;
    justify-content: flex-end;
    font-size: 1.5rem;
}

#ltp-task-checkbox-container input {
    width: 2rem;
    height: 2rem;
}

#ltp-utility-container {
    display: flex;
    flex-direction: column;
}

#ltp-utility-container > button{
    width: 30px;
    flex: 1;
    background-color: var(--app-primary-color);
    border-style: none;
}

#ltp-utility-container .ltp-mid {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
}

.ltp-top {
    border-radius: 0px 5px 0px 0px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: contain;
}

.ltp-bottom {
    border-radius: 0px 0px 5px 0px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: contain;
}






`, "",{"version":3,"sources":["webpack://./src/components/panels/listTask/listTaskPanel.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAsD;AAC1D;;AAEA;IACI,aAAa;IACb,WAAW;IACX,oDAAoD;IACpD,yBAAyB;IACzB,qCAAqC;IACrC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,OAAO;IACP,0CAA0C;IAC1C,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,8BAA8B;IAC9B,yDAA4D;IAC5D,wBAAwB;AAC5B;;AAEA;IACI,8BAA8B;IAC9B,yDAA+D;IAC/D,wBAAwB;AAC5B;;AAEA;IACI,8BAA8B;IAC9B,yDAA8D;IAC9D,wBAAwB;AAC5B","sourcesContent":["@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../../../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#ltp-panel-container {\r\n    display: flex;\r\n    width: 100%;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n    font-family: Dosis-Medium;\r\n    color: var(--form-element-text-color);\r\n    margin-bottom: 2rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n#ltp-panel-container > div {\r\n    min-height: 6rem;\r\n}\r\n\r\n#ltp-priority-stripe {\r\n    width: 1rem;\r\n    border-radius: 5px 0px 0px 5px;\r\n}\r\n\r\n#ltp-task-title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 33%;\r\n    padding: 0rem 2rem;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n#ltp-task-title-container h3 {\r\n    width: 100%;\r\n    word-wrap: break-word;\r\n}\r\n\r\n#ltp-task-due-date-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 33%;\r\n    padding: 0rem 2rem;\r\n    justify-content: center;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n#ltp-task-checkbox-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 33%;\r\n    padding: 0rem 2rem;\r\n    justify-content: flex-end;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#ltp-task-checkbox-container input {\r\n    width: 2rem;\r\n    height: 2rem;\r\n}\r\n\r\n#ltp-utility-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#ltp-utility-container > button{\r\n    width: 30px;\r\n    flex: 1;\r\n    background-color: var(--app-primary-color);\r\n    border-style: none;\r\n}\r\n\r\n#ltp-utility-container .ltp-mid {\r\n    border-top: 1px solid white;\r\n    border-bottom: 1px solid white;\r\n    background-image: url(../../../assets/icons/icons8-edit.png);\r\n    background-size: contain;\r\n}\r\n\r\n.ltp-top {\r\n    border-radius: 0px 5px 0px 0px;\r\n    background-image: url(../../../assets/icons/icons8-details.png);\r\n    background-size: contain;\r\n}\r\n\r\n.ltp-bottom {\r\n    border-radius: 0px 0px 5px 0px;\r\n    background-image: url(../../../assets/icons/icons8-delete.png);\r\n    background-size: contain;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/panels/list/listPanel.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/panels/list/listPanel.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../fonts/Dosis/static/Dosis-Regular.ttf */ "./src/fonts/Dosis/static/Dosis-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/icons/icons8-edit.png */ "./src/assets/icons/icons8-edit.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/icons/icons8-details.png */ "./src/assets/icons/icons8-details.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/icons/icons8-delete.png */ "./src/assets/icons/icons8-delete.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#lp-panel-container {
    display: flex;
    width: 100%;
    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);
    font-family: Dosis-Medium;
    color: var(--form-element-text-color);
    margin-bottom: 2rem;
    border-radius: 5px;
}

#lp-panel-container > div {
    min-height: 6rem;
}

#lp-list-title-container {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0rem 2rem;
    font-size: 1.2rem;
}

#lp-list-title-container h3 {
    width: 100%;
    word-wrap: break-word;
}

#lp-utility-container {
    display: flex;
    flex-direction: column;
}

#lp-utility-container > button{
    width: 30px;
    flex: 1;
    background-color: var(--app-primary-color);
    border-style: none;
}

#lp-utility-container .lp-mid {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
}

.lp-top {
    border-radius: 0px 5px 0px 0px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: contain;
}

.lp-bottom {
    border-radius: 0px 0px 5px 0px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: contain;
}






`, "",{"version":3,"sources":["webpack://./src/components/panels/list/listPanel.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAuD;AAC3D;;AAEA;IACI,aAAa;IACb,WAAW;IACX,oDAAoD;IACpD,yBAAyB;IACzB,qCAAqC;IACrC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,OAAO;IACP,0CAA0C;IAC1C,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,8BAA8B;IAC9B,yDAA4D;IAC5D,wBAAwB;AAC5B;;AAEA;IACI,8BAA8B;IAC9B,yDAA+D;IAC/D,wBAAwB;AAC5B;;AAEA;IACI,8BAA8B;IAC9B,yDAA8D;IAC9D,wBAAwB;AAC5B","sourcesContent":["@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../../../fonts/Dosis/static/Dosis-Regular.ttf);\r\n}\r\n\r\n#lp-panel-container {\r\n    display: flex;\r\n    width: 100%;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n    font-family: Dosis-Medium;\r\n    color: var(--form-element-text-color);\r\n    margin-bottom: 2rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n#lp-panel-container > div {\r\n    min-height: 6rem;\r\n}\r\n\r\n#lp-list-title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 100%;\r\n    padding: 0rem 2rem;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n#lp-list-title-container h3 {\r\n    width: 100%;\r\n    word-wrap: break-word;\r\n}\r\n\r\n#lp-utility-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#lp-utility-container > button{\r\n    width: 30px;\r\n    flex: 1;\r\n    background-color: var(--app-primary-color);\r\n    border-style: none;\r\n}\r\n\r\n#lp-utility-container .lp-mid {\r\n    border-top: 1px solid white;\r\n    border-bottom: 1px solid white;\r\n    background-image: url(../../../assets/icons/icons8-edit.png);\r\n    background-size: contain;\r\n}\r\n\r\n.lp-top {\r\n    border-radius: 0px 5px 0px 0px;\r\n    background-image: url(../../../assets/icons/icons8-details.png);\r\n    background-size: contain;\r\n}\r\n\r\n.lp-bottom {\r\n    border-radius: 0px 0px 5px 0px;\r\n    background-image: url(../../../assets/icons/icons8-delete.png);\r\n    background-size: contain;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/panels/task/taskPanel.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/panels/task/taskPanel.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../fonts/Dosis/static/Dosis-Medium.ttf */ "./src/fonts/Dosis/static/Dosis-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/icons/icons8-edit.png */ "./src/assets/icons/icons8-edit.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/icons/icons8-details.png */ "./src/assets/icons/icons8-details.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/icons/icons8-delete.png */ "./src/assets/icons/icons8-delete.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Dosis-Medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#tp-panel-container {
    display: flex;
    width: 100%;
    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);
    font-family: Dosis-Medium;
    color: var(--form-element-text-color);
    margin-bottom: 2rem;
    border-radius: 5px;
}

#tp-panel-container > div {
    min-height: 6rem;
}

#tp-priority-stripe {
    width: 1rem;
    border-radius: 5px 0px 0px 5px;
}

#tp-task-title-container {
    display: flex;
    align-items: center;
    width: 33%;
    padding: 0rem 2rem;
    font-size: 1.2rem;
}

#tp-task-title-container h3 {
    width: 100%;
    word-wrap: break-word;
}

#tp-task-due-date-container {
    display: flex;
    align-items: center;
    width: 33%;
    padding: 0rem 2rem;
    justify-content: center;
    font-size: 1.2rem;
}

#tp-task-checkbox-container {
    display: flex;
    align-items: center;
    width: 33%;
    padding: 0rem 2rem;
    justify-content: flex-end;
    font-size: 1.5rem;
}

#tp-task-checkbox-container input {
    width: 2rem;
    height: 2rem;
}

#tp-utility-container {
    display: flex;
    flex-direction: column;
}

#tp-utility-container > button{
    width: 30px;
    flex: 1;
    background-color: var(--app-primary-color);
    border-style: none;
}

#tp-utility-container .tp-mid {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
}

.tp-top {
    border-radius: 0px 5px 0px 0px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: contain;
}

.tp-bottom {
    border-radius: 0px 0px 5px 0px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: contain;
}






`, "",{"version":3,"sources":["webpack://./src/components/panels/task/taskPanel.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAAsD;AAC1D;;AAEA;IACI,aAAa;IACb,WAAW;IACX,oDAAoD;IACpD,yBAAyB;IACzB,qCAAqC;IACrC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,OAAO;IACP,0CAA0C;IAC1C,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,8BAA8B;IAC9B,yDAA4D;IAC5D,wBAAwB;AAC5B;;AAEA;IACI,8BAA8B;IAC9B,yDAA+D;IAC/D,wBAAwB;AAC5B;;AAEA;IACI,8BAA8B;IAC9B,yDAA8D;IAC9D,wBAAwB;AAC5B","sourcesContent":["@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../../../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#tp-panel-container {\r\n    display: flex;\r\n    width: 100%;\r\n    box-shadow: 0px 2px 10px 0px var(--box-shadow-color);\r\n    font-family: Dosis-Medium;\r\n    color: var(--form-element-text-color);\r\n    margin-bottom: 2rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n#tp-panel-container > div {\r\n    min-height: 6rem;\r\n}\r\n\r\n#tp-priority-stripe {\r\n    width: 1rem;\r\n    border-radius: 5px 0px 0px 5px;\r\n}\r\n\r\n#tp-task-title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 33%;\r\n    padding: 0rem 2rem;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n#tp-task-title-container h3 {\r\n    width: 100%;\r\n    word-wrap: break-word;\r\n}\r\n\r\n#tp-task-due-date-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 33%;\r\n    padding: 0rem 2rem;\r\n    justify-content: center;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n#tp-task-checkbox-container {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 33%;\r\n    padding: 0rem 2rem;\r\n    justify-content: flex-end;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#tp-task-checkbox-container input {\r\n    width: 2rem;\r\n    height: 2rem;\r\n}\r\n\r\n#tp-utility-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#tp-utility-container > button{\r\n    width: 30px;\r\n    flex: 1;\r\n    background-color: var(--app-primary-color);\r\n    border-style: none;\r\n}\r\n\r\n#tp-utility-container .tp-mid {\r\n    border-top: 1px solid white;\r\n    border-bottom: 1px solid white;\r\n    background-image: url(../../../assets/icons/icons8-edit.png);\r\n    background-size: contain;\r\n}\r\n\r\n.tp-top {\r\n    border-radius: 0px 5px 0px 0px;\r\n    background-image: url(../../../assets/icons/icons8-details.png);\r\n    background-size: contain;\r\n}\r\n\r\n.tp-bottom {\r\n    border-radius: 0px 0px 5px 0px;\r\n    background-image: url(../../../assets/icons/icons8-delete.png);\r\n    background-size: contain;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
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
    padding: 1rem;
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
    padding: 2rem 1rem;
}

#task-navigation {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
}

.start-button {
    flex: 1;
    padding: 1.5rem;
    text-align: start;
    width: 100%;
}

#list-container {
    height: 16rem;
    padding: 2rem 4rem 2rem 4rem;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    color: white;
    font-size: 1.5rem;
}

nav span {
    margin-bottom: 2rem;
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

#task-main-content { 
    width: 100%;
    padding: 0rem 4rem;
    overflow-y: scroll;
}

#task-main-content > button {
    margin: 1rem 0rem 2rem 0rem;
    font-family: Dosis-Medium;
    font-size: 1.2rem;
    color: var(--app-primary-color);
    border-style: none;
    border-bottom: 2px solid var(--app-primary-color);
}

#list-main-content {
    width: 100%;
    padding: 0rem 4rem;
    overflow-y: scroll;
}

#list-main-content > button {
    margin: 1rem 0rem 2rem 0rem;
    font-family: Dosis-Medium;
    font-size: 1.2rem;
    color: var(--app-primary-color);
    border-style: none;
    border-bottom: 2px solid var(--app-primary-color);
}

#list-tasks-main-content {
    width: 100%;
    padding: 0rem 4rem;
    overflow-y: scroll;
}

#list-tasks-main-content > button {
    margin: 1rem 0rem 2rem 0rem;
    font-family: Dosis-Medium;
    font-size: 1.2rem;
    color: var(--app-primary-color);
    border-style: none;
    border-bottom: 2px solid var(--app-primary-color);
}

#today-tasks-main-content {
    width: 100%;
    padding: 0rem 4rem;
    overflow-y: scroll;
}

#today-tasks-main-content > p{
    margin: 1rem 0rem 2rem 0rem;
    width: fit-content;
    color: var(--app-primary-color);
    font-size: 1.2rem;
    font-family: Dosis-Medium;
    border-bottom: 2px solid transparent;
}

#today-tasks-main-content > div > p{
    color: var(--form-element-text-color);
    font-family: Dosis-Medium;
    margin: 2rem 0rem;
    width: fit-content;
    border-bottom: 2px solid var(--form-element-text-color);
}

#this-week-tasks-main-content {
    width: 100%;
    padding: 0rem 4rem;
    overflow-y: scroll;
}

#this-week-tasks-main-content > p{
    margin: 1rem 0rem 2rem 0rem;
    width: fit-content;
    color: var(--app-primary-color);
    font-size: 1.2rem;
    font-family: Dosis-Medium;
    border-bottom: 2px solid transparent;
}

#this-week-tasks-main-content > div > p{
    color: var(--form-element-text-color);
    font-family: Dosis-Medium;
    margin: 2rem 0rem;
    width: fit-content;
    border-bottom: 2px solid var(--form-element-text-color);
}
`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;;IAEV,4BAA4B;IAC5B,mCAAmC;IACnC,qCAAqC;IACrC,kCAAkC;IAClC,sCAAsC;;IAEtC,8BAA8B;IAC9B,gCAAgC;IAChC,6BAA6B;AACjC;;AAEA;IACI,2BAA2B;IAC3B,4CAAkD;AACtD;;AAEA;IACI,yBAAyB;IACzB,4CAAgD;AACpD;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,sBAAsB;IACtB,0CAA0C;IAC1C,oDAAoD;AACxD;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,oBAAoB;IACpB,yDAA2D;IAC3D,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,0CAA0C;IAC1C,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,OAAO;IACP,eAAe;IACf,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;AACvB;;AAEA,gDAAgD;AAChD;IACI,aAAa;AACjB;;AAEA,4CAA4C;AAC5C;IACI,wBAAwB;IACxB,gBAAgB;IAChB,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,yBAAyB;IACzB,iBAAiB;IACjB,+BAA+B;IAC/B,kBAAkB;IAClB,iDAAiD;AACrD;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,yBAAyB;IACzB,iBAAiB;IACjB,+BAA+B;IAC/B,kBAAkB;IAClB,iDAAiD;AACrD;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,yBAAyB;IACzB,iBAAiB;IACjB,+BAA+B;IAC/B,kBAAkB;IAClB,iDAAiD;AACrD;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,+BAA+B;IAC/B,iBAAiB;IACjB,yBAAyB;IACzB,oCAAoC;AACxC;;AAEA;IACI,qCAAqC;IACrC,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,uDAAuD;AAC3D;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,+BAA+B;IAC/B,iBAAiB;IACjB,yBAAyB;IACzB,oCAAoC;AACxC;;AAEA;IACI,qCAAqC;IACrC,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,uDAAuD;AAC3D","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    --app-primary-color: #2563eb;\r\n    --app-secondary-dark-color: #1e40af;\r\n    --form-element-outline-color: #b0b0b0;\r\n    --form-element-text-color: #808080;\r\n    --box-shadow-color: rgb(144, 144, 144);\r\n\r\n    --high-priority-color: #ff2e2e;\r\n    --medium-priority-color: #ffc800;\r\n    --low-priority-color: #00ff6a;\r\n}\r\n\r\n@font-face {\r\n    font-family: Dosis-SemiBold;\r\n    src: url(../fonts/Dosis/static/Dosis-SemiBold.ttf);\r\n}\r\n\r\n@font-face {\r\n    font-family: Dosis-Medium;\r\n    src: url(../fonts/Dosis/static/Dosis-Medium.ttf);\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    height: 100vh;\r\n}\r\n\r\n#sidebar {\r\n    width: max(25%, 600px);\r\n    background-color: var(--app-primary-color);\r\n    box-shadow: 5px 0px 15px 0px var(--box-shadow-color);\r\n}\r\n\r\n#header-container {\r\n    padding: 1rem;\r\n    font-size: 1.5rem;\r\n    color: white;\r\n    font-family: Dosis-SemiBold;\r\n}\r\n\r\n#header-container > header > div {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#app-logo {\r\n    aspect-ratio: 1 / 1;\r\n    width: 50px;\r\n    margin-right: 0.5rem;\r\n    background-image: url(../assets/icons/icons8-checkmark.png);\r\n    background-size: contain;\r\n}\r\n\r\nnav > div > button {\r\n    padding: 1.5rem;\r\n    text-align: start;\r\n}\r\n\r\nnav button {\r\n    color: white;\r\n    background-color: var(--app-primary-color);\r\n    font-size: 1.5rem;\r\n    border-style: none;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n#navigation-container {\r\n    padding: 2rem 1rem;\r\n}\r\n\r\n#task-navigation {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n.start-button {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    text-align: start;\r\n    width: 100%;\r\n}\r\n\r\n#list-container {\r\n    height: 16rem;\r\n    padding: 2rem 4rem 2rem 4rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-y: scroll;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n}\r\n\r\nnav span {\r\n    margin-bottom: 2rem;\r\n    font-family: Dosis-Medium;\r\n}\r\n\r\n#list-container:last-child {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n/* Hide scrollbar for Chrome, Safari and Opera */\r\n#list-container::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n/* Hide scrollbar for IE, Edge and Firefox */\r\n#list-container.example {\r\n    -ms-overflow-style: none;\r\n    /* IE and Edge */\r\n    scrollbar-width: none;\r\n    /* Firefox */\r\n}\r\n\r\n#task-main-content { \r\n    width: 100%;\r\n    padding: 0rem 4rem;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#task-main-content > button {\r\n    margin: 1rem 0rem 2rem 0rem;\r\n    font-family: Dosis-Medium;\r\n    font-size: 1.2rem;\r\n    color: var(--app-primary-color);\r\n    border-style: none;\r\n    border-bottom: 2px solid var(--app-primary-color);\r\n}\r\n\r\n#list-main-content {\r\n    width: 100%;\r\n    padding: 0rem 4rem;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#list-main-content > button {\r\n    margin: 1rem 0rem 2rem 0rem;\r\n    font-family: Dosis-Medium;\r\n    font-size: 1.2rem;\r\n    color: var(--app-primary-color);\r\n    border-style: none;\r\n    border-bottom: 2px solid var(--app-primary-color);\r\n}\r\n\r\n#list-tasks-main-content {\r\n    width: 100%;\r\n    padding: 0rem 4rem;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#list-tasks-main-content > button {\r\n    margin: 1rem 0rem 2rem 0rem;\r\n    font-family: Dosis-Medium;\r\n    font-size: 1.2rem;\r\n    color: var(--app-primary-color);\r\n    border-style: none;\r\n    border-bottom: 2px solid var(--app-primary-color);\r\n}\r\n\r\n#today-tasks-main-content {\r\n    width: 100%;\r\n    padding: 0rem 4rem;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#today-tasks-main-content > p{\r\n    margin: 1rem 0rem 2rem 0rem;\r\n    width: fit-content;\r\n    color: var(--app-primary-color);\r\n    font-size: 1.2rem;\r\n    font-family: Dosis-Medium;\r\n    border-bottom: 2px solid transparent;\r\n}\r\n\r\n#today-tasks-main-content > div > p{\r\n    color: var(--form-element-text-color);\r\n    font-family: Dosis-Medium;\r\n    margin: 2rem 0rem;\r\n    width: fit-content;\r\n    border-bottom: 2px solid var(--form-element-text-color);\r\n}\r\n\r\n#this-week-tasks-main-content {\r\n    width: 100%;\r\n    padding: 0rem 4rem;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#this-week-tasks-main-content > p{\r\n    margin: 1rem 0rem 2rem 0rem;\r\n    width: fit-content;\r\n    color: var(--app-primary-color);\r\n    font-size: 1.2rem;\r\n    font-family: Dosis-Medium;\r\n    border-bottom: 2px solid transparent;\r\n}\r\n\r\n#this-week-tasks-main-content > div > p{\r\n    color: var(--form-element-text-color);\r\n    font-family: Dosis-Medium;\r\n    margin: 2rem 0rem;\r\n    width: fit-content;\r\n    border-bottom: 2px solid var(--form-element-text-color);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/components/dialogs/listTask/add/addListTaskDialog.css":
/*!*******************************************************************!*\
  !*** ./src/components/dialogs/listTask/add/addListTaskDialog.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_addListTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./addListTaskDialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/listTask/add/addListTaskDialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_addListTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_addListTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_addListTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_addListTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/dialogs/listTask/delete/listTaskDeleteDialog.css":
/*!*************************************************************************!*\
  !*** ./src/components/dialogs/listTask/delete/listTaskDeleteDialog.css ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_listTaskDeleteDialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./listTaskDeleteDialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/listTask/delete/listTaskDeleteDialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_listTaskDeleteDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_listTaskDeleteDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_listTaskDeleteDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_listTaskDeleteDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/dialogs/listTask/details/listTaskDetailsDialog.css":
/*!***************************************************************************!*\
  !*** ./src/components/dialogs/listTask/details/listTaskDetailsDialog.css ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_listTaskDetailsDialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./listTaskDetailsDialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/listTask/details/listTaskDetailsDialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_listTaskDetailsDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_listTaskDetailsDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_listTaskDetailsDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_listTaskDetailsDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/dialogs/listTask/edit/editListTaskDialog.css":
/*!*********************************************************************!*\
  !*** ./src/components/dialogs/listTask/edit/editListTaskDialog.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_editListTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./editListTaskDialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/listTask/edit/editListTaskDialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_editListTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_editListTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_editListTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_editListTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/dialogs/list/add/addListDialog.css":
/*!***********************************************************!*\
  !*** ./src/components/dialogs/list/add/addListDialog.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_addListDialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./addListDialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/list/add/addListDialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_addListDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_addListDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_addListDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_addListDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/dialogs/list/delete/listDeleteDialog.css":
/*!*****************************************************************!*\
  !*** ./src/components/dialogs/list/delete/listDeleteDialog.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_listDeleteDialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./listDeleteDialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/list/delete/listDeleteDialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_listDeleteDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_listDeleteDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_listDeleteDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_listDeleteDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/dialogs/list/details/listDetailsDialog.css":
/*!*******************************************************************!*\
  !*** ./src/components/dialogs/list/details/listDetailsDialog.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_listDetailsDialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./listDetailsDialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/list/details/listDetailsDialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_listDetailsDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_listDetailsDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_listDetailsDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_listDetailsDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/dialogs/list/edit/editListDialog.css":
/*!*************************************************************!*\
  !*** ./src/components/dialogs/list/edit/editListDialog.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_editListDialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./editListDialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/list/edit/editListDialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_editListDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_editListDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_editListDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_editListDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/dialogs/task/add/addTaskDialog.css":
/*!***********************************************************!*\
  !*** ./src/components/dialogs/task/add/addTaskDialog.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_addTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./addTaskDialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/task/add/addTaskDialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_addTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_addTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_addTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_addTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/dialogs/task/delete/taskDeleteDialog.css":
/*!*****************************************************************!*\
  !*** ./src/components/dialogs/task/delete/taskDeleteDialog.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskDeleteDialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./taskDeleteDialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/task/delete/taskDeleteDialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskDeleteDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskDeleteDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_taskDeleteDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_taskDeleteDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/dialogs/task/details/taskDetailsDialog.css":
/*!*******************************************************************!*\
  !*** ./src/components/dialogs/task/details/taskDetailsDialog.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskDetailsDialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./taskDetailsDialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/task/details/taskDetailsDialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskDetailsDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskDetailsDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_taskDetailsDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_taskDetailsDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/dialogs/task/edit/editTaskDialog.css":
/*!*************************************************************!*\
  !*** ./src/components/dialogs/task/edit/editTaskDialog.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_editTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./editTaskDialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/dialogs/task/edit/editTaskDialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_editTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_editTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_editTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_editTaskDialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/panels/listTask/listTaskPanel.css":
/*!**********************************************************!*\
  !*** ./src/components/panels/listTask/listTaskPanel.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_listTaskPanel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./listTaskPanel.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/panels/listTask/listTaskPanel.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_listTaskPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_listTaskPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_listTaskPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_listTaskPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/panels/list/listPanel.css":
/*!**************************************************!*\
  !*** ./src/components/panels/list/listPanel.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_listPanel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./listPanel.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/panels/list/listPanel.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_listPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_listPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_listPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_listPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/panels/task/taskPanel.css":
/*!**************************************************!*\
  !*** ./src/components/panels/task/taskPanel.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskPanel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./taskPanel.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/panels/task/taskPanel.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_taskPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_taskPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/dialogs/listTask/add/addListTaskDialog.js":
/*!******************************************************************!*\
  !*** ./src/components/dialogs/listTask/add/addListTaskDialog.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddListTaskDialog: () => (/* binding */ createAddListTaskDialog),
/* harmony export */   getAddListTaskDialog: () => (/* binding */ getAddListTaskDialog)
/* harmony export */ });
/* harmony import */ var _addListTaskDialog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addListTaskDialog.css */ "./src/components/dialogs/listTask/add/addListTaskDialog.css");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/data */ "./src/data/data.js");
/* harmony import */ var _helpers_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helpers/date */ "./src/helpers/date.js");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../main/main */ "./src/components/main/main.js");
/* harmony import */ var _content_contentElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../content/contentElement */ "./src/components/content/contentElement.js");
/* harmony import */ var _factories_listTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../factories/listTask */ "./src/factories/listTask.js");
/* harmony import */ var _helpers_load__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers/load */ "./src/helpers/load.js");








function createAddListTaskDialog() {
    //Creating all dialog elements
    const dialog = document.createElement('dialog');
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
    const highPriorityOption = document.createElement('option');
    const mediumPriorityOption = document.createElement('option');
    const lowPriorityOption = document.createElement('option');

    const formButtons = document.createElement('div');
    const addTaskButton = document.createElement('button');
    const resetFormButton = document.createElement('button');

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    dialogHeader.textContent = 'Add Task To List';

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

    highPriorityOption.textContent = 'High';
    mediumPriorityOption.textContent = 'Medium';
    lowPriorityOption.textContent = 'Low';

    highPriorityOption.value = 'High';
    mediumPriorityOption.value = 'Medium';
    lowPriorityOption.value = 'Low';

    addTaskButton.type = 'button';
    resetFormButton.type = 'reset';
    closeDialogButton.type = 'button';

    //Assignment of id selectors to dialog elements 
    dialog.id = 'add-list-task-dialog';
    closeDialogButtonContainer.id = 'altd-close-button-container';
    closeDialogButton.id = 'altd-close-button';
    dialogHeaderContainer.id = 'altd-dialog-header-container';
    logoContainer.id = 'altd-logo-container';
    titleInput.id = 'altd-title-input';
    descriptionArea.id = 'altd-task-descritption';
    dueDateInput.id = 'altd-task-due-date';
    priorityLabelContainer.id = 'altd-priority-label-container';
    priorityBoxContainer.id = 'altd-priority-box-container';
    prioritySelect.id = 'altd-task-priority';
    addTaskButton.id = 'altd-add-task-button';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('altd-add-field');
    descriptionField.classList.add('altd-add-field');
    dueDateField.classList.add('altd-add-field');
    priorityField.classList.add('altd-add-field');
    titleLabel.classList.add('altd-label-margin');
    descriptionLabel.classList.add('altd-label-margin');
    dueDateLabel.classList.add('altd-label-margin');
    highPriorityBox.classList.add('altd-high-priority-box');
    mediumPriorityBox.classList.add('altd-medium-priority-box');
    lowPriorityBox.classList.add('altd-low-priority-box');
    formButtons.classList.add('altd-form-buttons');

    //Creating the structure of the dialog
    dialog.appendChild(form);

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

    prioritySelect.appendChild(highPriorityOption);
    prioritySelect.appendChild(mediumPriorityOption);
    prioritySelect.appendChild(lowPriorityOption);

    formButtons.appendChild(addTaskButton);
    formButtons.appendChild(resetFormButton);

    //Adding event listeners to buttons
    addTaskButton.addEventListener('click', () => {
        let taskTitle = titleInput.value;
        let taskDescription = descriptionArea.value;
        let taskDueDate =  (0,_helpers_date__WEBPACK_IMPORTED_MODULE_2__.formatDueDate)(dueDateInput.value);
        let taskPriority = prioritySelect.value;

        const listTasksMainContent = (0,_main_main__WEBPACK_IMPORTED_MODULE_3__.getMainContentListTasksContainer)();

        let listId = +listTasksMainContent.parentElement.dataset.id;
        const list = _data_data__WEBPACK_IMPORTED_MODULE_1__.lists[listId];

        const listTask =  (0,_factories_listTask__WEBPACK_IMPORTED_MODULE_5__.createListTask)(list.currentListTaskCounter, taskTitle, taskDescription, taskDueDate, taskPriority, false, listId);
        list.tasks.push(listTask);
        list.currentListTaskCounter++;

        if((0,_content_contentElement__WEBPACK_IMPORTED_MODULE_4__.getContentElement)().children[1].id == 'list-tasks-main-content') {
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_6__.loadListTasks)(list);
        }

        clearAddListTaskForm(titleInput, descriptionArea, dueDateInput, prioritySelect);
        document.body.removeChild(dialog);
    });

    closeDialogButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
        clearAddListTaskForm(titleInput, descriptionArea, dueDateInput, prioritySelect);
    });

    return dialog;
}

function getAddListTaskDialog() {
    return document.querySelector('#add-list-task-dialog');
}

function clearAddListTaskForm(titleInput, descriptionArea, dueDateInput, prioritySelect) {
    titleInput.value = '';
    descriptionArea.value = '';
    dueDateInput.value = '';
    prioritySelect.value = 'High';
}

/***/ }),

/***/ "./src/components/dialogs/listTask/delete/listTaskDeleteDialog.js":
/*!************************************************************************!*\
  !*** ./src/components/dialogs/listTask/delete/listTaskDeleteDialog.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createListTaskDeleteDialog: () => (/* binding */ createListTaskDeleteDialog)
/* harmony export */ });
/* harmony import */ var _listTaskDeleteDialog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listTaskDeleteDialog.css */ "./src/components/dialogs/listTask/delete/listTaskDeleteDialog.css");
/* harmony import */ var _helpers_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helpers/load */ "./src/helpers/load.js");
/* harmony import */ var _content_contentElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../content/contentElement */ "./src/components/content/contentElement.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/data */ "./src/data/data.js");





function createListTaskDeleteDialog(listTask) {
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');

    const dialogHeaderContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const dialogHeader = document.createElement('h2');

    const deleteQuestion = document.createElement('p');

    const deleteFormButtons = document.createElement('div');
    const yesButton = document.createElement('button');
    const noButton = document.createElement('button');

    //Assignemnt of id selectors to dialog elements
    dialog.id = 'list-task-delete-dialog';
    dialogHeaderContainer.id = 'ltrd-dialog-header-container';
    logoContainer.id = 'ltrd-logo-container';

    //Assignmet of class selectors to dialog elements
    deleteQuestion.classList.add('ltrd-delete-field');
    deleteFormButtons.classList.add('ltrd-delete-form-buttons');

    //Form element properties
    yesButton.type = 'button';
    noButton.type = 'button';

    //Assigning text values to dialog elements
    dialogHeader.textContent = 'Delete';
    deleteQuestion.textContent = 'Are you sure you want to delete this item?';
    yesButton.textContent = 'Yes';
    noButton.textContent = 'No';

    //Attaching an event listener to the close dialog button
    yesButton.addEventListener('click', () => {
        const list = _data_data__WEBPACK_IMPORTED_MODULE_3__.lists[listTask.listId];
        delete list.tasks[listTask.id];

        const contentElement = (0,_content_contentElement__WEBPACK_IMPORTED_MODULE_2__.getContentElement)();

        if(contentElement.children[1].id == 'list-tasks-main-content') {
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_1__.loadListTasks)(list);
        }
        if(contentElement.children[1].id == 'today-tasks-main-content') {
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_1__.loadTodayTasks)();
        }
        if(contentElement.children[1].id == 'this-week-tasks-main-content') {
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_1__.loadThisWeekTasks)();
        }

        document.body.removeChild(dialog);
    });

    noButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
    });

    //Creating the structure of the dialog
    dialog.appendChild(form);
    form.appendChild(dialogHeaderContainer);

    dialogHeaderContainer.appendChild(logoContainer);
    dialogHeaderContainer.appendChild(dialogHeader);

    form.appendChild(deleteQuestion);
    form.appendChild(deleteFormButtons);

    deleteFormButtons.appendChild(yesButton);
    deleteFormButtons.appendChild(noButton);

    return dialog;
}

/***/ }),

/***/ "./src/components/dialogs/listTask/details/listTaskDetailsDialog.js":
/*!**************************************************************************!*\
  !*** ./src/components/dialogs/listTask/details/listTaskDetailsDialog.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createListTaskDetailsDialog: () => (/* binding */ createListTaskDetailsDialog),
/* harmony export */   getTaskDetailsDialog: () => (/* binding */ getTaskDetailsDialog)
/* harmony export */ });
/* harmony import */ var _listTaskDetailsDialog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listTaskDetailsDialog.css */ "./src/components/dialogs/listTask/details/listTaskDetailsDialog.css");


function createListTaskDetailsDialog(listTask) {
    const dialog = document.createElement('dialog');
    const closeButtonContainer = document.createElement('div');
    const closeDialogButton = document.createElement('button');

    const dialogHeaderContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const dialogHeader = document.createElement('h2');

    const detailsContainer = document.createElement('div');
    const titleField = document.createElement('div');
    const descriptionField = document.createElement('div');
    const dueDateField = document.createElement('div');
    const priorityField = document.createElement('div');
    const statusField = document.createElement('div');

    const titleLabelContainer = document.createElement('div');
    const titleLabel = document.createElement('b');
    const titleValueContainer = document.createElement('div');
    const titleValue = document.createElement('span');

    const descriptionLabelContainer = document.createElement('div');
    const descriptionLabel = document.createElement('b');
    const descriptionValueContainer = document.createElement('div');
    const descriptionValue = document.createElement('span');

    const dueDateLabelContainer = document.createElement('div');
    const dueDateLabel = document.createElement('b');
    const dueDateValueContainer = document.createElement('div');
    const dueDateValue = document.createElement('span');

    const priorityLabelContainer = document.createElement('div');
    const priorityLabel = document.createElement('b');
    const priorityValueContainer = document.createElement('div');
    const priorityValue = document.createElement('span');
    const priorityBox = document.createElement('div');

    const statusLabelContainer = document.createElement('div');
    const statusLabel = document.createElement('b');
    const statusValueContainer = document.createElement('div');
    const statusValue = document.createElement('span');

    //Assignemnt of id selectors to dialog elements
    dialog.id = 'task-details-dialog';
    closeButtonContainer.id = 'tdd-close-button-container';
    closeDialogButton.id = 'tdd-close-button';
    dialogHeaderContainer.id = 'tdd-dialog-header-container';
    logoContainer.id = 'tdd-logo-container';
    detailsContainer.id = 'tdd-details-container';
    titleField.id = 'tdd-title-field';
    descriptionField.id = 'tdd-description-field';
    dueDateField.id = 'tdd-due-date-field';
    priorityField.id = 'tdd-priority-field';
    priorityValueContainer.id = 'tdd-priority-value-container';
    statusField.id = 'tdd-status-field';
    statusValueContainer.id = 'tdd-status-value-container';

    //Assignmet of class selectors to dialog elements
    titleField.classList.add('tdd-details-flex-field');
    descriptionField.classList.add('tdd-details-field');
    dueDateField.classList.add('tdd-details-flex-field');
    priorityField.classList.add('tdd-details-flex-field');
    statusField.classList.add('tdd-details-flex-field');
    titleLabelContainer.classList.add('tdd-label-container');
    titleValueContainer.classList.add('tdd-value-container');
    descriptionLabelContainer.classList.add('tdd-label-container');
    descriptionValueContainer.classList.add('tdd-value-container');
    dueDateLabelContainer.classList.add('tdd-label-container');
    dueDateValueContainer.classList.add('tdd-value-container');
    priorityLabelContainer.classList.add('tdd-label-container');
    priorityValueContainer.classList.add('tdd-value-container');
    statusLabelContainer.classList.add('tdd-label-container');
    statusValueContainer.classList.add('tdd-value-container');

    //Form element properties
    closeDialogButton.type = 'button';

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    dialogHeader.textContent = 'Task Details';
    titleLabel.textContent = 'Title:';
    descriptionLabel.textContent = 'Description:';
    dueDateLabel.textContent = 'Due Date:';
    priorityLabel.textContent = 'Priority:';
    statusLabel.textContent = 'Status:';

    //Initialization of values that depend on the task object
    titleValue.textContent = listTask.title;
    descriptionValue.textContent = listTask.description;
    dueDateValue.textContent = listTask.dueDate;
    priorityValue.textContent = listTask.priority;

    if(listTask.status) {
        statusValue.textContent = 'Finished';
    }
    if(!listTask.status) {
        statusValue.textContent = 'Unfinished';
    }

    if(listTask.priority == "High") {
        priorityBox.classList.add('tdd-high-priority-box');
    }
    if(listTask.priority == "Medium") {
        priorityBox.classList.add('tdd-medium-priority-box');
    }
    if(listTask.priority == "Low") {
        priorityBox.classList.add('tdd-low-priority-box');
    }

    //Attaching an event listener to the close dialog button
    closeDialogButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
    });

    //Creating the structure of the dialog
    dialog.appendChild(closeButtonContainer);
    dialog.appendChild(dialogHeaderContainer);
    dialog.appendChild(detailsContainer);

    closeButtonContainer.appendChild(closeDialogButton);
    dialogHeaderContainer.appendChild(logoContainer);
    dialogHeaderContainer.appendChild(dialogHeader);

    detailsContainer.appendChild(titleField);
    detailsContainer.appendChild(descriptionField);
    detailsContainer.appendChild(dueDateField);
    detailsContainer.appendChild(priorityField);
    detailsContainer.appendChild(statusField);

    titleField.appendChild(titleLabelContainer);
    titleField.appendChild(titleValueContainer);
    titleLabelContainer.appendChild(titleLabel);
    titleValueContainer.appendChild(titleValue);

    descriptionField.appendChild(descriptionLabelContainer);
    descriptionField.appendChild(descriptionValueContainer);
    descriptionLabelContainer.appendChild(descriptionLabel);
    descriptionValueContainer.appendChild(descriptionValue);

    dueDateField.appendChild(dueDateLabelContainer);
    dueDateField.appendChild(dueDateValueContainer);
    dueDateLabelContainer.appendChild(dueDateLabel);
    dueDateValueContainer.appendChild(dueDateValue);

    priorityField.appendChild(priorityLabelContainer);
    priorityField.appendChild(priorityValueContainer);
    priorityLabelContainer.appendChild(priorityLabel);
    priorityValueContainer.appendChild(priorityValue);
    priorityValueContainer.appendChild(priorityBox);

    statusField.appendChild(statusLabelContainer);
    statusField.appendChild(statusValueContainer);
    statusLabelContainer.appendChild(statusLabel);
    statusValueContainer.appendChild(statusValue);

    return dialog;
}

function getTaskDetailsDialog() {
    return document.querySelector('#details-dialog');
}

/***/ }),

/***/ "./src/components/dialogs/listTask/edit/editListTaskDialog.js":
/*!********************************************************************!*\
  !*** ./src/components/dialogs/listTask/edit/editListTaskDialog.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEditListTaskDialog: () => (/* binding */ createEditListTaskDialog)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../data/data */ "./src/data/data.js");
/* harmony import */ var _helpers_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helpers/date */ "./src/helpers/date.js");
/* harmony import */ var _helpers_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helpers/load */ "./src/helpers/load.js");
/* harmony import */ var _content_contentElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../content/contentElement */ "./src/components/content/contentElement.js");
/* harmony import */ var _editListTaskDialog_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editListTaskDialog.css */ "./src/components/dialogs/listTask/edit/editListTaskDialog.css");






function createEditListTaskDialog(listTask) {
    //Creating all dialog elements
    const dialog = document.createElement('dialog');
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

    const highPriorityOption = document.createElement('option');
    const mediumPriorityOption = document.createElement('option');
    const lowPriorityOption = document.createElement('option');

    const formButtons = document.createElement('div');
    const editTaskButton = document.createElement('button');
    const resetFormButton = document.createElement('button');

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    closeDialogButton.type = 'button';
    dialogHeader.textContent = 'Edit a Task';

    titleLabel.textContent = 'Title';
    descriptionLabel.textContent = 'Description';
    dueDateLabel.textContent = 'Due Date';
    priorityLabel.textContent = 'Priority';

    editTaskButton.textContent = 'Edit';
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

    highPriorityOption.textContent = 'High';
    mediumPriorityOption.textContent = 'Medium';
    lowPriorityOption.textContent = 'Low';

    highPriorityOption.value = 'High';
    mediumPriorityOption.value = 'Medium';
    lowPriorityOption.value = 'Low';

    editTaskButton.type = 'button';
    resetFormButton.type = 'reset';
    closeDialogButton.type = 'button';

    //Assignment of id selectors to dialog elements 
    dialog.id = 'edit-list-task-dialog';
    closeDialogButtonContainer.id = 'eltd-close-button-container';
    closeDialogButton.id = 'eltd-close-button';
    dialogHeaderContainer.id = 'eltd-dialog-header-container';
    logoContainer.id = 'eltd-logo-container';
    titleInput.id = 'eltd-title-input';
    descriptionArea.id = 'eltd-task-descritption';
    dueDateInput.id = 'eltd-task-due-date';
    priorityLabelContainer.id = 'eltd-priority-label-container';
    priorityBoxContainer.id = 'eltd-priority-box-container';
    prioritySelect.id = 'eltd-task-priority';
    editTaskButton.id = 'eltd-add-task-button';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('eltd-edit-field');
    descriptionField.classList.add('eltd-edit-field');
    dueDateField.classList.add('eltd-edit-field');
    priorityField.classList.add('eltd-edit-field');
    titleLabel.classList.add('eltd-label-margin');
    descriptionLabel.classList.add('eltd-label-margin');
    dueDateLabel.classList.add('eltd-label-margin');
    highPriorityBox.classList.add('eltd-high-priority-box');
    mediumPriorityBox.classList.add('eltd-medium-priority-box');
    lowPriorityBox.classList.add('eltd-low-priority-box');
    formButtons.classList.add('eltd-form-buttons');

    //Creating the structure of the dialog
    dialog.appendChild(form);

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

    prioritySelect.appendChild(highPriorityOption);
    prioritySelect.appendChild(mediumPriorityOption);
    prioritySelect.appendChild(lowPriorityOption);

    formButtons.appendChild(editTaskButton);
    formButtons.appendChild(resetFormButton);

    //Changing the due date into a sql date format so that the 
    //value can be saved into the edit task dialog
    const sqlFormatDueDate = (0,_helpers_date__WEBPACK_IMPORTED_MODULE_1__.formatSQLDueDate)(listTask.dueDate);

    //Saving values of the selected task inside the edit form
    titleInput.value = listTask.title;
    descriptionArea.textContent = listTask.description;
    dueDateInput.value = sqlFormatDueDate;
    prioritySelect.value = listTask.priority;

    //Adding event listeners to buttons
    editTaskButton.addEventListener('click', () => {
        const list = _data_data__WEBPACK_IMPORTED_MODULE_0__.lists[listTask.listId];

        list.tasks[listTask.id].title = titleInput.value;
        list.tasks[listTask.id].description = descriptionArea.value;
        list.tasks[listTask.id].dueDate = (0,_helpers_date__WEBPACK_IMPORTED_MODULE_1__.formatDueDate)(dueDateInput.value);
        list.tasks[listTask.id].priority = prioritySelect.value;

        const contentElement = (0,_content_contentElement__WEBPACK_IMPORTED_MODULE_3__.getContentElement)();

        if(contentElement.children[1].id == 'list-tasks-main-content') {
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_2__.loadListTasks)(list);
        }
        if(contentElement.children[1].id == 'today-tasks-main-content') {
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_2__.loadTodayTasks)();
        }
        if(contentElement.children[1].id == 'this-week-tasks-main-content') {
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_2__.loadThisWeekTasks)();
        }

        document.body.removeChild(dialog);
    });

    closeDialogButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
    });

    return dialog;
}


/***/ }),

/***/ "./src/components/dialogs/list/add/addListDialog.js":
/*!**********************************************************!*\
  !*** ./src/components/dialogs/list/add/addListDialog.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddListDialog: () => (/* binding */ createAddListDialog),
/* harmony export */   getAddListDialog: () => (/* binding */ getAddListDialog)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../data/data */ "./src/data/data.js");
/* harmony import */ var _factories_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../factories/list */ "./src/factories/list.js");
/* harmony import */ var _addListDialog_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addListDialog.css */ "./src/components/dialogs/list/add/addListDialog.css");
/* harmony import */ var _content_contentElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../content/contentElement */ "./src/components/content/contentElement.js");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../main/main */ "./src/components/main/main.js");
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../navigation/navigation */ "./src/components/navigation/navigation.js");
/* harmony import */ var _helpers_load__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers/load */ "./src/helpers/load.js");








function createAddListDialog() {
    //Creating all dialog elements
    const dialog = document.createElement('dialog');
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

    const formButtons = document.createElement('div');
    const addListButton = document.createElement('button');
    const resetFormButton = document.createElement('button');

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    dialogHeader.textContent = 'Add a List';

    titleLabel.textContent = 'Title';

    addListButton.textContent = 'Add';
    resetFormButton.textContent = 'Reset';

    //Form element properties
    form.method = 'dialog';

    titleLabel.for = 'task-title';
    titleLabel.name = 'title';
    titleInput.name = 'title';
    titleInput.type = 'text';

    closeDialogButton.type = 'button';
    addListButton.type = 'button';
    resetFormButton.type = 'reset';

    //Assignment of id selectors to dialog elements 
    dialog.id = 'add-list-dialog';
    closeDialogButtonContainer.id = 'ald-close-button-container';
    closeDialogButton.id = 'ald-close-button';
    dialogHeaderContainer.id = 'ald-dialog-header-container';
    logoContainer.id = 'ald-logo-container';
    titleInput.id = 'ald-title-input';

    addListButton.id = 'ald-add-list-button';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('ald-list-add-field');
    titleLabel.classList.add('ald-list-add-label-margin');
    formButtons.classList.add('ald-list-add-form-buttons');

    //Creating the structure of the dialog
    dialog.appendChild(form);

    form.appendChild(closeDialogButtonContainer);
    form.appendChild(dialogHeaderContainer);
    form.appendChild(fieldsContainer);

    closeDialogButtonContainer.appendChild(closeDialogButton);
    dialogHeaderContainer.appendChild(logoContainer);
    dialogHeaderContainer.appendChild(dialogHeader);

    fieldsContainer.appendChild(titleField);
    fieldsContainer.appendChild(formButtons);

    titleField.appendChild(titleLabel);
    titleField.appendChild(titleInput);

    formButtons.appendChild(addListButton);
    formButtons.appendChild(resetFormButton);

    //Adding event listeners to buttons
    addListButton.addEventListener('click', () => {
        const listTitle = titleInput.value;
        const listTasks = [];

        //Creating a list
        const list = (0,_factories_list__WEBPACK_IMPORTED_MODULE_1__.createList)(_data_data__WEBPACK_IMPORTED_MODULE_0__.currentListIndex, listTitle, listTasks, 0);
        _data_data__WEBPACK_IMPORTED_MODULE_0__.lists.push(list);

        //Creating a list span inside the navigation
        const listContainerSpan = document.createElement('span');
        listContainerSpan.textContent = `# ${titleInput.value}`;
        listContainerSpan.dataset.id = list.id;

        const content = (0,_content_contentElement__WEBPACK_IMPORTED_MODULE_3__.getContentElement)();

        listContainerSpan.addEventListener('click', () => {
            content.removeChild(content.children[1]);

            const listTasksMainContent = (0,_main_main__WEBPACK_IMPORTED_MODULE_4__.createListTasksMainContent)();
            listTasksMainContent.dataset.id = list.id;

            content.appendChild(listTasksMainContent);

            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_6__.loadListTasks)(list);
        });

        (0,_navigation_navigation__WEBPACK_IMPORTED_MODULE_5__.getNavListContainer)().appendChild(listContainerSpan);

        (0,_data_data__WEBPACK_IMPORTED_MODULE_0__.incrementCurrentListIndex)();
        
        if((0,_content_contentElement__WEBPACK_IMPORTED_MODULE_3__.getContentElement)().children[1].id == 'list-main-content') {
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_6__.loadLists)();
        }

        clearAddListForm(titleInput);
        dialog.close();
        document.body.removeChild(dialog);
    });

    closeDialogButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
    });

    return dialog;
}

function getAddListDialog() {
    return document.querySelector('#add-list-dialog')
}

function clearAddListForm(titleInput) {
    titleInput.value = '';
}


/***/ }),

/***/ "./src/components/dialogs/list/delete/listDeleteDialog.js":
/*!****************************************************************!*\
  !*** ./src/components/dialogs/list/delete/listDeleteDialog.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createListDeleteDialog: () => (/* binding */ createListDeleteDialog)
/* harmony export */ });
/* harmony import */ var _listDeleteDialog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listDeleteDialog.css */ "./src/components/dialogs/list/delete/listDeleteDialog.css");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/data */ "./src/data/data.js");
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../navigation/navigation */ "./src/components/navigation/navigation.js");
/* harmony import */ var _helpers_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/load */ "./src/helpers/load.js");





function createListDeleteDialog(list) {
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');

    const dialogHeaderContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const dialogHeader = document.createElement('h2');

    const deleteQuestion = document.createElement('p');

    const deleteFormButtons = document.createElement('div');
    const yesButton = document.createElement('button');
    const noButton = document.createElement('button');

    //Assignemnt of id selectors to dialog elements
    dialog.id = 'list-delete-dialog';
    dialogHeaderContainer.id = 'lrd-dialog-header-container';
    logoContainer.id = 'lrd-logo-container';

    //Assignmet of class selectors to dialog elements
    deleteQuestion.classList.add('lrd-delete-field');
    deleteFormButtons.classList.add('lrd-delete-form-buttons');

    //Form element properties
    yesButton.type = 'button';
    noButton.type = 'button';

    //Assigning text values to dialog elements
    dialogHeader.textContent = 'Delete';
    deleteQuestion.textContent = 'Are you sure you want to delete this item?';
    yesButton.textContent = 'Yes';
    noButton.textContent = 'No';

    //Attaching an event listener to the close dialog button
    yesButton.addEventListener('click', () => {
        delete _data_data__WEBPACK_IMPORTED_MODULE_1__.lists[list.id];

        const navListContainer = (0,_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__.getNavListContainer)();
        navListContainer.removeChild(navListContainer.children[list.id]);

        (0,_helpers_load__WEBPACK_IMPORTED_MODULE_3__.loadLists)();

        document.body.removeChild(dialog);
    });

    noButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
    });

    //Creating the structure of the dialog
    dialog.appendChild(form);
    form.appendChild(dialogHeaderContainer);

    dialogHeaderContainer.appendChild(logoContainer);
    dialogHeaderContainer.appendChild(dialogHeader);

    form.appendChild(deleteQuestion);
    form.appendChild(deleteFormButtons);

    deleteFormButtons.appendChild(yesButton);
    deleteFormButtons.appendChild(noButton);

    return dialog;
}

/***/ }),

/***/ "./src/components/dialogs/list/details/listDetailsDialog.js":
/*!******************************************************************!*\
  !*** ./src/components/dialogs/list/details/listDetailsDialog.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createListDetailsDialog: () => (/* binding */ createListDetailsDialog),
/* harmony export */   getTaskDetailsDialog: () => (/* binding */ getTaskDetailsDialog)
/* harmony export */ });
/* harmony import */ var _listDetailsDialog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listDetailsDialog.css */ "./src/components/dialogs/list/details/listDetailsDialog.css");


function createListDetailsDialog(list) {
    const dialog = document.createElement('dialog');
    const closeButtonContainer = document.createElement('div');
    const closeDialogButton = document.createElement('button');

    const dialogHeaderContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const dialogHeader = document.createElement('h2');

    const detailsContainer = document.createElement('div');
    const titleField = document.createElement('div');
    const numberOfTasksField = document.createElement('div');

    const titleLabelContainer = document.createElement('div');
    const titleLabel = document.createElement('b');
    const titleValueContainer = document.createElement('div');
    const titleValue = document.createElement('span');

    const numberOfTasksLabelContainer = document.createElement('div');
    const numberOfTasksLabel = document.createElement('b');
    const numberOfTasksValueContainer = document.createElement('div');
    const numberOfTasksValue = document.createElement('span');

    //Assignemnt of id selectors to dialog elements
    dialog.id = 'list-details-dialog';
    closeButtonContainer.id = 'ldd-close-button-container';
    closeDialogButton.id = 'ldd-close-button';
    dialogHeaderContainer.id = 'ldd-dialog-header-container';
    logoContainer.id = 'ldd-logo-container';
    detailsContainer.id = 'ldd-details-container';
    titleField.id = 'ldd-title-field';
    numberOfTasksField.id = 'ldd-number-of-tasks-field';

    //Assignmet of class selectors to dialog elements
    titleField.classList.add('ldd-list-details-flex-field');
    titleLabelContainer.classList.add('ldd-list-label-container');
    titleValueContainer.classList.add('ldd-list-value-container');

    numberOfTasksField.classList.add('ldd-list-details-flex-field');
    numberOfTasksLabelContainer.classList.add('ldd-list-label-container');
    numberOfTasksValueContainer.classList.add('ldd-list-value-container');

    //Assignment of atttributes to form elements
    closeDialogButton.type = 'button';

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    dialogHeader.textContent = 'List Details';
    titleLabel.textContent = 'Title:';
    numberOfTasksLabel.textContent = 'Tasks:'

    //Initialization of values that depend on the task object
    titleValue.textContent = list.title;
    numberOfTasksValue.textContent = list.tasks.length;

    //Attaching an event listener to the close dialog button
    closeDialogButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
    });

    //Creating the structure of the dialog
    dialog.appendChild(closeButtonContainer);
    dialog.appendChild(dialogHeaderContainer);
    dialog.appendChild(detailsContainer);

    closeButtonContainer.appendChild(closeDialogButton);
    dialogHeaderContainer.appendChild(logoContainer);
    dialogHeaderContainer.appendChild(dialogHeader);

    detailsContainer.appendChild(titleField);
    detailsContainer.appendChild(numberOfTasksField);

    titleField.appendChild(titleLabelContainer);
    titleField.appendChild(titleValueContainer);
    titleLabelContainer.appendChild(titleLabel);
    titleValueContainer.appendChild(titleValue);

    numberOfTasksField.appendChild(numberOfTasksLabelContainer);
    numberOfTasksField.appendChild(numberOfTasksValueContainer);
    numberOfTasksLabelContainer.appendChild(numberOfTasksLabel);
    numberOfTasksValueContainer.appendChild(numberOfTasksValue);

    return dialog;
}

function getTaskDetailsDialog() {
    return document.querySelector('#details-dialog');
}

/***/ }),

/***/ "./src/components/dialogs/list/edit/editListDialog.js":
/*!************************************************************!*\
  !*** ./src/components/dialogs/list/edit/editListDialog.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEditListDialog: () => (/* binding */ createEditListDialog)
/* harmony export */ });
/* harmony import */ var _editListDialog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editListDialog.css */ "./src/components/dialogs/list/edit/editListDialog.css");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/data */ "./src/data/data.js");
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../navigation/navigation */ "./src/components/navigation/navigation.js");
/* harmony import */ var _helpers_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/load */ "./src/helpers/load.js");





function createEditListDialog(list) {
    //Creating all dialog elements
    const listDialog = document.createElement('dialog');
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

    const formButtons = document.createElement('div');
    const editTaskButton = document.createElement('button');
    const resetFormButton = document.createElement('button');

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    closeDialogButton.type = 'button';
    dialogHeader.textContent = 'Edit a List';

    titleLabel.textContent = 'Title';

    editTaskButton.textContent = 'Edit';
    resetFormButton.textContent = 'Reset';

    //Form element properties
    form.method = 'dialog';

    titleLabel.for = 'list-title';
    titleLabel.name = 'title';
    titleInput.name = 'title';
    titleInput.type = 'text';

    editTaskButton.type = 'button';
    resetFormButton.type = 'reset';
    closeDialogButton.type = 'button'

    //Assignment of id selectors to dialog elements 
    listDialog.id = 'edit-list-dialog';
    closeDialogButtonContainer.id = 'eld-close-button-container';
    closeDialogButton.id = 'eld-close-button';
    dialogHeaderContainer.id = 'eld-dialog-header-container';
    logoContainer.id = 'eld-logo-container';
    titleInput.id = 'eld-title-input';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('eld-edit-list-field');
    titleLabel.classList.add('eld-edit-list-label-margin');
    formButtons.classList.add('eld-edit-list-form-buttons');

    //Creating the structure of the dialog
    listDialog.appendChild(form);

    form.appendChild(closeDialogButtonContainer);
    form.appendChild(dialogHeaderContainer);
    form.appendChild(fieldsContainer);

    closeDialogButtonContainer.appendChild(closeDialogButton);
    dialogHeaderContainer.appendChild(logoContainer);
    dialogHeaderContainer.appendChild(dialogHeader);

    fieldsContainer.appendChild(titleField);
    fieldsContainer.appendChild(formButtons);

    titleField.appendChild(titleLabel);
    titleField.appendChild(titleInput);

    formButtons.appendChild(editTaskButton);
    formButtons.appendChild(resetFormButton);

    titleInput.value = list.title;

    //Adding event listeners to buttons
    editTaskButton.addEventListener('click', () => {
        _data_data__WEBPACK_IMPORTED_MODULE_1__.lists[list.id].title = titleInput.value;

        const navListContainer = (0,_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__.getNavListContainer)();
        navListContainer.children[list.id].textContent = `# ${titleInput.value}`;
        
        (0,_helpers_load__WEBPACK_IMPORTED_MODULE_3__.loadLists)();

        document.body.removeChild(listDialog);
    });

    closeDialogButton.addEventListener('click', () => {
        listDialog.close();
        document.body.removeChild(listDialog);
    });

    return listDialog;
}

/***/ }),

/***/ "./src/components/dialogs/task/add/addTaskDialog.js":
/*!**********************************************************!*\
  !*** ./src/components/dialogs/task/add/addTaskDialog.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddTaskDialog: () => (/* binding */ createAddTaskDialog),
/* harmony export */   getAddTaskDialog: () => (/* binding */ getAddTaskDialog)
/* harmony export */ });
/* harmony import */ var _addTaskDialog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTaskDialog.css */ "./src/components/dialogs/task/add/addTaskDialog.css");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/data */ "./src/data/data.js");
/* harmony import */ var _factories_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../factories/task */ "./src/factories/task.js");
/* harmony import */ var _helpers_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/date */ "./src/helpers/date.js");
/* harmony import */ var _content_contentElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../content/contentElement */ "./src/components/content/contentElement.js");
/* harmony import */ var _helpers_load__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/load */ "./src/helpers/load.js");







function createAddTaskDialog() {
    //Creating all dialog elements
    const dialog = document.createElement('dialog');
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

    highPriorityOption.textContent = 'High';
    mediumPriorityOption.textContent = 'Medium';
    lowPriorityOption.textContent = 'Low';

    highPriorityOption.value = 'High';
    mediumPriorityOption.value = 'Medium';
    lowPriorityOption.value = 'Low';

    addTaskButton.type = 'button';
    resetFormButton.type = 'reset';
    closeDialogButton.type = 'button';

    //Assignment of id selectors to dialog elements 
    dialog.id = 'add-task-dialog';
    closeDialogButtonContainer.id = 'atd-close-button-container';
    closeDialogButton.id = 'atd-close-button';
    dialogHeaderContainer.id = 'atd-dialog-header-container';
    logoContainer.id = 'atd-logo-container';
    titleInput.id = 'atd-title-input';
    descriptionArea.id = 'atd-task-descritption';
    dueDateInput.id = 'atd-task-due-date';
    priorityLabelContainer.id = 'atd-priority-label-container';
    priorityBoxContainer.id = 'atd-priority-box-container';
    prioritySelect.id = 'atd-task-priority';
    addTaskButton.id = 'atd-add-task-button';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('atd-add-field');
    descriptionField.classList.add('atd-add-field');
    dueDateField.classList.add('atd-add-field');
    priorityField.classList.add('atd-add-field');
    titleLabel.classList.add('atd-label-margin');
    descriptionLabel.classList.add('atd-label-margin');
    dueDateLabel.classList.add('atd-label-margin');
    highPriorityBox.classList.add('atd-high-priority-box');
    mediumPriorityBox.classList.add('atd-medium-priority-box');
    lowPriorityBox.classList.add('atd-low-priority-box');
    formButtons.classList.add('atd-form-buttons');

    //Creating the structure of the dialog
    dialog.appendChild(form);

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

    prioritySelect.appendChild(highPriorityOption);
    prioritySelect.appendChild(mediumPriorityOption);
    prioritySelect.appendChild(lowPriorityOption);

    formButtons.appendChild(addTaskButton);
    formButtons.appendChild(resetFormButton);

    //Adding event listeners to buttons
    addTaskButton.addEventListener('click', () => {
        let taskTitle = titleInput.value;
        let taskDescription = descriptionArea.value;
        let taskDueDate =  (0,_helpers_date__WEBPACK_IMPORTED_MODULE_3__.formatDueDate)(dueDateInput.value);
        let taskPriority = prioritySelect.value;

        //Creating a task object
        const task = (0,_factories_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(_data_data__WEBPACK_IMPORTED_MODULE_1__.currentIndividualTaskIndex, taskTitle, taskDescription, taskDueDate, false, taskPriority);
        _data_data__WEBPACK_IMPORTED_MODULE_1__.individualTasks.push(task);

        (0,_data_data__WEBPACK_IMPORTED_MODULE_1__.incrementCurrentTaskIndex)();

        if((0,_content_contentElement__WEBPACK_IMPORTED_MODULE_4__.getContentElement)().children[1].id == 'task-main-content') {
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_5__.loadIndividualTasks)();
        }

        clearAddTaskForm(titleInput, descriptionArea, dueDateInput, prioritySelect);
        document.body.removeChild(dialog);
    });

    closeDialogButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
        clearAddTaskForm(titleInput, descriptionArea, dueDateInput, prioritySelect);
    });

    return dialog;
}

function getAddTaskDialog() {
    return document.querySelector('#add-task-dialog');
}

function clearAddTaskForm(titleInput, descriptionArea, dueDateInput, prioritySelect) {
    titleInput.value = '';
    descriptionArea.value = '';
    dueDateInput.value = '';
    prioritySelect.value = 'High';
}

/***/ }),

/***/ "./src/components/dialogs/task/delete/taskDeleteDialog.js":
/*!****************************************************************!*\
  !*** ./src/components/dialogs/task/delete/taskDeleteDialog.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskDeleteDialog: () => (/* binding */ createTaskDeleteDialog)
/* harmony export */ });
/* harmony import */ var _taskDeleteDialog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDeleteDialog.css */ "./src/components/dialogs/task/delete/taskDeleteDialog.css");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/data */ "./src/data/data.js");
/* harmony import */ var _content_contentElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../content/contentElement */ "./src/components/content/contentElement.js");
/* harmony import */ var _helpers_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/load */ "./src/helpers/load.js");





function createTaskDeleteDialog(task) {
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');

    const dialogHeaderContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const dialogHeader = document.createElement('h2');

    const deleteQuestion = document.createElement('p');

    const deleteFormButtons = document.createElement('div');
    const yesButton = document.createElement('button');
    const noButton = document.createElement('button');

    //Assignemnt of id selectors to dialog elements
    dialog.id = 'task-delete-dialog';
    dialogHeaderContainer.id = 'trd-dialog-header-container';
    logoContainer.id = 'trd-logo-container';

    //Assignmet of class selectors to dialog elements
    deleteQuestion.classList.add('trd-delete-field');
    deleteFormButtons.classList.add('trd-delete-form-buttons');

    //Form element properties
    yesButton.type = 'button';
    noButton.type = 'button';

    //Assigning text values to dialog elements
    dialogHeader.textContent = 'Delete';
    deleteQuestion.textContent = 'Are you sure you want to delete this item?';
    yesButton.textContent = 'Yes';
    noButton.textContent = 'No';

    //Attaching an event listener to the close dialog button
    yesButton.addEventListener('click', () => {
        delete _data_data__WEBPACK_IMPORTED_MODULE_1__.individualTasks[task.id];

        const contentElement = (0,_content_contentElement__WEBPACK_IMPORTED_MODULE_2__.getContentElement)();

        if(contentElement.children[1].id == 'task-main-content') {
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_3__.loadIndividualTasks)();
        }
        if(contentElement.children[1].id == 'today-tasks-main-content') {
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_3__.loadTodayTasks)();
        }
        if(contentElement.children[1].id == 'this-week-tasks-main-content') {
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_3__.loadThisWeekTasks)();
        }

        document.body.removeChild(dialog);
    });

    noButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
    });

    //Creating the structure of the dialog
    dialog.appendChild(form);
    form.appendChild(dialogHeaderContainer);

    dialogHeaderContainer.appendChild(logoContainer);
    dialogHeaderContainer.appendChild(dialogHeader);

    form.appendChild(deleteQuestion);
    form.appendChild(deleteFormButtons);

    deleteFormButtons.appendChild(yesButton);
    deleteFormButtons.appendChild(noButton);

    return dialog;
}

/***/ }),

/***/ "./src/components/dialogs/task/details/taskDetailsDialog.js":
/*!******************************************************************!*\
  !*** ./src/components/dialogs/task/details/taskDetailsDialog.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskDetailsDialog: () => (/* binding */ createTaskDetailsDialog),
/* harmony export */   getTaskDetailsDialog: () => (/* binding */ getTaskDetailsDialog)
/* harmony export */ });
/* harmony import */ var _taskDetailsDialog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDetailsDialog.css */ "./src/components/dialogs/task/details/taskDetailsDialog.css");


function createTaskDetailsDialog(task) {
    const dialog = document.createElement('dialog');
    const closeButtonContainer = document.createElement('div');
    const closeDialogButton = document.createElement('button');

    const dialogHeaderContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const dialogHeader = document.createElement('h2');

    const detailsContainer = document.createElement('div');
    const titleField = document.createElement('div');
    const descriptionField = document.createElement('div');
    const dueDateField = document.createElement('div');
    const priorityField = document.createElement('div');
    const statusField = document.createElement('div');

    const titleLabelContainer = document.createElement('div');
    const titleLabel = document.createElement('b');
    const titleValueContainer = document.createElement('div');
    const titleValue = document.createElement('span');

    const descriptionLabelContainer = document.createElement('div');
    const descriptionLabel = document.createElement('b');
    const descriptionValueContainer = document.createElement('div');
    const descriptionValue = document.createElement('span');

    const dueDateLabelContainer = document.createElement('div');
    const dueDateLabel = document.createElement('b');
    const dueDateValueContainer = document.createElement('div');
    const dueDateValue = document.createElement('span');

    const priorityLabelContainer = document.createElement('div');
    const priorityLabel = document.createElement('b');
    const priorityValueContainer = document.createElement('div');
    const priorityValue = document.createElement('span');
    const priorityBox = document.createElement('div');

    const statusLabelContainer = document.createElement('div');
    const statusLabel = document.createElement('b');
    const statusValueContainer = document.createElement('div');
    const statusValue = document.createElement('span');

    //Assignemnt of id selectors to dialog elements
    dialog.id = 'task-details-dialog';
    closeButtonContainer.id = 'tdd-close-button-container';
    closeDialogButton.id = 'tdd-close-button';
    dialogHeaderContainer.id = 'tdd-dialog-header-container';
    logoContainer.id = 'tdd-logo-container';
    detailsContainer.id = 'tdd-details-container';
    titleField.id = 'tdd-title-field';
    descriptionField.id = 'tdd-description-field';
    dueDateField.id = 'tdd-due-date-field';
    priorityField.id = 'tdd-priority-field';
    priorityValueContainer.id = 'tdd-priority-value-container';
    statusField.id = 'tdd-status-field';
    statusValueContainer.id = 'tdd-status-value-container';

    //Assignmet of class selectors to dialog elements
    titleField.classList.add('tdd-details-flex-field');
    descriptionField.classList.add('tdd-details-field');
    dueDateField.classList.add('tdd-details-flex-field');
    priorityField.classList.add('tdd-details-flex-field');
    statusField.classList.add('tdd-details-flex-field');
    titleLabelContainer.classList.add('tdd-label-container');
    titleValueContainer.classList.add('tdd-value-container');
    descriptionLabelContainer.classList.add('tdd-label-container');
    descriptionValueContainer.classList.add('tdd-value-container');
    dueDateLabelContainer.classList.add('tdd-label-container');
    dueDateValueContainer.classList.add('tdd-value-container');
    priorityLabelContainer.classList.add('tdd-label-container');
    priorityValueContainer.classList.add('tdd-value-container');
    statusLabelContainer.classList.add('tdd-label-container');
    statusValueContainer.classList.add('tdd-value-container');

    //Form element properties
    closeDialogButton.type = 'button';

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    dialogHeader.textContent = 'Task Details';
    titleLabel.textContent = 'Title:';
    descriptionLabel.textContent = 'Description:';
    dueDateLabel.textContent = 'Due Date:';
    priorityLabel.textContent = 'Priority:';
    statusLabel.textContent = 'Status:';

    //Initialization of values that depend on the task object
    titleValue.textContent = task.title;
    descriptionValue.textContent = task.description;
    dueDateValue.textContent = task.dueDate;
    priorityValue.textContent = task.priority;

    if(task.status) {
        statusValue.textContent = 'Finished';
    }
    if(!task.status) {
        statusValue.textContent = 'Unfinished';
    }

    if(task.priority == "High") {
        priorityBox.classList.add('tdd-high-priority-box');
    }
    if(task.priority == "Medium") {
        priorityBox.classList.add('tdd-medium-priority-box');
    }
    if(task.priority == "Low") {
        priorityBox.classList.add('tdd-low-priority-box');
    }

    //Attaching an event listener to the close dialog button
    closeDialogButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
    });

    //Creating the structure of the dialog
    dialog.appendChild(closeButtonContainer);
    dialog.appendChild(dialogHeaderContainer);
    dialog.appendChild(detailsContainer);

    closeButtonContainer.appendChild(closeDialogButton);
    dialogHeaderContainer.appendChild(logoContainer);
    dialogHeaderContainer.appendChild(dialogHeader);

    detailsContainer.appendChild(titleField);
    detailsContainer.appendChild(descriptionField);
    detailsContainer.appendChild(dueDateField);
    detailsContainer.appendChild(priorityField);
    detailsContainer.appendChild(statusField);

    titleField.appendChild(titleLabelContainer);
    titleField.appendChild(titleValueContainer);
    titleLabelContainer.appendChild(titleLabel);
    titleValueContainer.appendChild(titleValue);

    descriptionField.appendChild(descriptionLabelContainer);
    descriptionField.appendChild(descriptionValueContainer);
    descriptionLabelContainer.appendChild(descriptionLabel);
    descriptionValueContainer.appendChild(descriptionValue);

    dueDateField.appendChild(dueDateLabelContainer);
    dueDateField.appendChild(dueDateValueContainer);
    dueDateLabelContainer.appendChild(dueDateLabel);
    dueDateValueContainer.appendChild(dueDateValue);

    priorityField.appendChild(priorityLabelContainer);
    priorityField.appendChild(priorityValueContainer);
    priorityLabelContainer.appendChild(priorityLabel);
    priorityValueContainer.appendChild(priorityValue);
    priorityValueContainer.appendChild(priorityBox);

    statusField.appendChild(statusLabelContainer);
    statusField.appendChild(statusValueContainer);
    statusLabelContainer.appendChild(statusLabel);
    statusValueContainer.appendChild(statusValue);

    return dialog;
}

function getTaskDetailsDialog() {
    return document.querySelector('#details-dialog');
}

/***/ }),

/***/ "./src/components/dialogs/task/edit/editTaskDialog.js":
/*!************************************************************!*\
  !*** ./src/components/dialogs/task/edit/editTaskDialog.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEditTaskDialog: () => (/* binding */ createEditTaskDialog)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../data/data */ "./src/data/data.js");
/* harmony import */ var _helpers_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helpers/date */ "./src/helpers/date.js");
/* harmony import */ var _helpers_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helpers/load */ "./src/helpers/load.js");
/* harmony import */ var _content_contentElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../content/contentElement */ "./src/components/content/contentElement.js");
/* harmony import */ var _editTaskDialog_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editTaskDialog.css */ "./src/components/dialogs/task/edit/editTaskDialog.css");






function createEditTaskDialog(task) {
    //Creating all dialog elements
    const dialog = document.createElement('dialog');
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

    const highPriorityOption = document.createElement('option');
    const mediumPriorityOption = document.createElement('option');
    const lowPriorityOption = document.createElement('option');

    const formButtons = document.createElement('div');
    const editTaskButton = document.createElement('button');
    const resetFormButton = document.createElement('button');

    //Assigning text values to dialog elements
    closeDialogButton.textContent = 'X';
    closeDialogButton.type = 'button';
    dialogHeader.textContent = 'Edit a Task';

    titleLabel.textContent = 'Title';
    descriptionLabel.textContent = 'Description';
    dueDateLabel.textContent = 'Due Date';
    priorityLabel.textContent = 'Priority';

    editTaskButton.textContent = 'Edit';
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

    highPriorityOption.textContent = 'High';
    mediumPriorityOption.textContent = 'Medium';
    lowPriorityOption.textContent = 'Low';

    highPriorityOption.value = 'High';
    mediumPriorityOption.value = 'Medium';
    lowPriorityOption.value = 'Low';

    editTaskButton.type = 'button';
    resetFormButton.type = 'reset';
    closeDialogButton.type = 'button';

    //Assignment of id selectors to dialog elements 
    dialog.id = 'edit-task-dialog';
    closeDialogButtonContainer.id = 'etd-close-button-container';
    closeDialogButton.id = 'etd-close-button';
    dialogHeaderContainer.id = 'etd-dialog-header-container';
    logoContainer.id = 'etd-logo-container';
    titleInput.id = 'etd-title-input';
    descriptionArea.id = 'etd-task-descritption';
    dueDateInput.id = 'etd-task-due-date';
    priorityLabelContainer.id = 'etd-priority-label-container';
    priorityBoxContainer.id = 'etd-priority-box-container';
    prioritySelect.id = 'etd-task-priority';
    editTaskButton.id = 'etd-add-task-button';

    //Assignment of class selectors to dialog elements
    titleField.classList.add('etd-edit-field');
    descriptionField.classList.add('etd-edit-field');
    dueDateField.classList.add('etd-edit-field');
    priorityField.classList.add('etd-edit-field');
    titleLabel.classList.add('etd-label-margin');
    descriptionLabel.classList.add('etd-label-margin');
    dueDateLabel.classList.add('etd-label-margin');
    highPriorityBox.classList.add('etd-high-priority-box');
    mediumPriorityBox.classList.add('etd-medium-priority-box');
    lowPriorityBox.classList.add('etd-low-priority-box');
    formButtons.classList.add('etd-form-buttons');

    //Creating the structure of the dialog
    dialog.appendChild(form);

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

    prioritySelect.appendChild(highPriorityOption);
    prioritySelect.appendChild(mediumPriorityOption);
    prioritySelect.appendChild(lowPriorityOption);

    formButtons.appendChild(editTaskButton);
    formButtons.appendChild(resetFormButton);

    //Changing the due date into a sql date format so that the 
    //value can be saved into the edit task dialog
    const sqlFormatDueDate = (0,_helpers_date__WEBPACK_IMPORTED_MODULE_1__.formatSQLDueDate)(task.dueDate);

    //Saving values of the selected task inside the edit form
    titleInput.value = task.title;
    descriptionArea.textContent = task.description;
    dueDateInput.value = sqlFormatDueDate;
    prioritySelect.value = task.priority;

    //Adding event listeners to buttons
    editTaskButton.addEventListener('click', () => {
        _data_data__WEBPACK_IMPORTED_MODULE_0__.individualTasks[task.id].title = titleInput.value;
        _data_data__WEBPACK_IMPORTED_MODULE_0__.individualTasks[task.id].description = descriptionArea.value;
        _data_data__WEBPACK_IMPORTED_MODULE_0__.individualTasks[task.id].dueDate = (0,_helpers_date__WEBPACK_IMPORTED_MODULE_1__.formatDueDate)(dueDateInput.value);
        _data_data__WEBPACK_IMPORTED_MODULE_0__.individualTasks[task.id].priority = prioritySelect.value;

        const contentElement = (0,_content_contentElement__WEBPACK_IMPORTED_MODULE_3__.getContentElement)();
        
        if(contentElement.children[1].id == 'task-main-content') {
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_2__.loadIndividualTasks)();
        }
        if(contentElement.children[1].id == 'today-tasks-main-content') {
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_2__.loadTodayTasks)();
        }
        if(contentElement.children[1].id == 'this-week-tasks-main-content') {
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_2__.loadThisWeekTasks)();
        }
    
        document.body.removeChild(dialog);
    });

    closeDialogButton.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
    });

    return dialog;
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
/* harmony export */   createListMainContent: () => (/* binding */ createListMainContent),
/* harmony export */   createListTasksMainContent: () => (/* binding */ createListTasksMainContent),
/* harmony export */   createTaskMainContent: () => (/* binding */ createTaskMainContent),
/* harmony export */   createThisWeekTasksMainContent: () => (/* binding */ createThisWeekTasksMainContent),
/* harmony export */   createTodayTasksMainContent: () => (/* binding */ createTodayTasksMainContent),
/* harmony export */   getMainContentListContainer: () => (/* binding */ getMainContentListContainer),
/* harmony export */   getMainContentListTasksContainer: () => (/* binding */ getMainContentListTasksContainer),
/* harmony export */   getMainContentTaskContainer: () => (/* binding */ getMainContentTaskContainer),
/* harmony export */   getMainContentThisWeekIndividualTasksContainer: () => (/* binding */ getMainContentThisWeekIndividualTasksContainer),
/* harmony export */   getMainContentThisWeekLIstTasksContainer: () => (/* binding */ getMainContentThisWeekLIstTasksContainer),
/* harmony export */   getMainContentTodayIndividualTasksContainer: () => (/* binding */ getMainContentTodayIndividualTasksContainer),
/* harmony export */   getMainContentTodayListTasksContainer: () => (/* binding */ getMainContentTodayListTasksContainer)
/* harmony export */ });
/* harmony import */ var _dialogs_list_add_addListDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dialogs/list/add/addListDialog */ "./src/components/dialogs/list/add/addListDialog.js");
/* harmony import */ var _dialogs_listTask_add_addListTaskDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialogs/listTask/add/addListTaskDialog */ "./src/components/dialogs/listTask/add/addListTaskDialog.js");
/* harmony import */ var _dialogs_task_add_addTaskDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialogs/task/add/addTaskDialog */ "./src/components/dialogs/task/add/addTaskDialog.js");




//A content container for displaying tasks
function createTaskMainContent() {
    const taskMainContent = document.createElement('div');
    const addTaskButton = document.createElement('button');
    const tasksContainer = document.createElement('div');

    taskMainContent.id = 'task-main-content';
    tasksContainer.id = 'task-main-tasks-container';

    addTaskButton.textContent = '+ Add individual task';

    addTaskButton.addEventListener('click', () => {
        document.body.appendChild((0,_dialogs_task_add_addTaskDialog__WEBPACK_IMPORTED_MODULE_2__.createAddTaskDialog)());
        (0,_dialogs_task_add_addTaskDialog__WEBPACK_IMPORTED_MODULE_2__.getAddTaskDialog)().showModal();
    });

    taskMainContent.appendChild(addTaskButton);
    taskMainContent.appendChild(tasksContainer);

    return taskMainContent;
}

function getMainContentTaskContainer() {
    return document.querySelector('#task-main-tasks-container');
}

//A content container for displaying lists
function createListMainContent() {
    const listMainContent = document.createElement('div');
    const addListButton = document.createElement('button');
    const listsContainer = document.createElement('div');

    listMainContent.id = 'list-main-content';
    listsContainer.id = 'list-main-lists-container';

    addListButton.textContent = '+ Add list';

    addListButton.addEventListener('click', () => {
        document.body.appendChild((0,_dialogs_list_add_addListDialog__WEBPACK_IMPORTED_MODULE_0__.createAddListDialog)());
        (0,_dialogs_list_add_addListDialog__WEBPACK_IMPORTED_MODULE_0__.getAddListDialog)().showModal();
    });

    listMainContent.appendChild(addListButton);
    listMainContent.appendChild(listsContainer);

    return listMainContent;
}

function getMainContentListContainer() {
    return document.querySelector('#list-main-lists-container');
}

//A content container for displaying tasks
function createListTasksMainContent() {
    const listTasksMainContent = document.createElement('div');
    const addListTaskButton = document.createElement('button');
    const listTasksContainer = document.createElement('div');

    listTasksMainContent.id = 'list-tasks-main-content';
    listTasksContainer.id = 'list-tasks-main-task-container';
    addListTaskButton.textContent = '+ Add task to list';

    addListTaskButton.addEventListener('click', () => {
        document.body.appendChild((0,_dialogs_listTask_add_addListTaskDialog__WEBPACK_IMPORTED_MODULE_1__.createAddListTaskDialog)());
        (0,_dialogs_listTask_add_addListTaskDialog__WEBPACK_IMPORTED_MODULE_1__.getAddListTaskDialog)().showModal();
    });

    listTasksMainContent.appendChild(addListTaskButton);
    listTasksMainContent.appendChild(listTasksContainer);

    return listTasksMainContent;
}

function getMainContentListTasksContainer() {
    return document.querySelector('#list-tasks-main-task-container');
}

function createTodayTasksMainContent() {
    const todayTaskMainContent = document.createElement('div');
    const todayTaskParagraph = document.createElement('p');
    const todayIndividualTasksContainer = document.createElement('div');
    const todayListTasksContainer = document.createElement('div');

    const individualTaskParagraphContainer = document.createElement('div');
    const individualTaskParagraph = document.createElement('p');

    const listTasksParagraphContainer = document.createElement('div');
    const listTasksParagraph = document.createElement('p');

    todayTaskMainContent.id = 'today-tasks-main-content';
    todayIndividualTasksContainer.id = 'today-individual-tasks-main-container';
    todayListTasksContainer.id = 'today-list-tasks-main-container';

    todayTaskParagraph.textContent = 'Tasks for today';
    individualTaskParagraph.textContent = 'INDIVIDUAL TASKS';
    listTasksParagraph.textContent = 'LIST TASKS';

    individualTaskParagraphContainer.appendChild(individualTaskParagraph);
    listTasksParagraphContainer.appendChild(listTasksParagraph);

    todayTaskMainContent.appendChild(todayTaskParagraph);
    todayTaskMainContent.appendChild(individualTaskParagraphContainer);
    todayTaskMainContent.appendChild(todayIndividualTasksContainer);
    todayTaskMainContent.appendChild(listTasksParagraphContainer);
    todayTaskMainContent.appendChild(todayListTasksContainer);

    return todayTaskMainContent;
}

function getMainContentTodayIndividualTasksContainer() {
    return document.querySelector('#today-individual-tasks-main-container');
}

function getMainContentTodayListTasksContainer() {
    return document.querySelector('#today-list-tasks-main-container');
}

function createThisWeekTasksMainContent() {
    const thisWeekTaskMainContent = document.createElement('div');
    const thisWeekTaskParagraph = document.createElement('p');
    const thisWeekIndividualTasksContainer = document.createElement('div');
    const thisWeekListTasksContainer = document.createElement('div');

    const individualTaskParagraphContainer = document.createElement('div');
    const individualTaskParagraph = document.createElement('p');

    const listTaskParagraphContainer = document.createElement('div');
    const listTaskParagraph = document.createElement('p');

    thisWeekTaskMainContent.id = 'this-week-tasks-main-content';
    thisWeekIndividualTasksContainer.id = 'this-week-tasks-main-container';
    thisWeekListTasksContainer.id = 'this-week-list-tasks-main-container';

    thisWeekTaskParagraph.textContent = 'Tasks in a week';
    individualTaskParagraph.textContent = 'INDIVIDUAL TASKS';
    listTaskParagraph.textContent = 'LIST TASKS';

    individualTaskParagraphContainer.appendChild(individualTaskParagraph);
    listTaskParagraphContainer.appendChild(listTaskParagraph);

    thisWeekTaskMainContent.appendChild(thisWeekTaskParagraph);
    thisWeekTaskMainContent.appendChild(individualTaskParagraphContainer)
    thisWeekTaskMainContent.appendChild(thisWeekIndividualTasksContainer);
    thisWeekTaskMainContent.appendChild(listTaskParagraphContainer);
    thisWeekTaskMainContent.appendChild(thisWeekListTasksContainer)

    return thisWeekTaskMainContent;
}

function getMainContentThisWeekIndividualTasksContainer() {
    return document.querySelector('#this-week-tasks-main-container');
}

function getMainContentThisWeekLIstTasksContainer() {
    return document.querySelector('#this-week-list-tasks-main-container');
}

/***/ }),

/***/ "./src/components/navigation/navigation.js":
/*!*************************************************!*\
  !*** ./src/components/navigation/navigation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNavigation: () => (/* binding */ createNavigation),
/* harmony export */   getNavListContainer: () => (/* binding */ getNavListContainer)
/* harmony export */ });
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/main */ "./src/components/main/main.js");
/* harmony import */ var _content_contentElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/contentElement */ "./src/components/content/contentElement.js");
/* harmony import */ var _helpers_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/load */ "./src/helpers/load.js");





function createNavigation() {
    //Creating all navigation elements
    const navigation = document.createElement('div');
    const navigationTag = document.createElement('nav');

    const taskNavigation = document.createElement('div');
    const taskField = document.createElement('div');
    const taskButton = document.createElement('button');
    const todayButton = document.createElement('button');
    const thisWeekButton = document.createElement('button')

    const listNavigation = document.createElement('div');
    const listField = document.createElement('div');
    const listButton = document.createElement('button');
    const listContainer = document.createElement('div');

    //Assigning id selectors to nav elements
    navigation.id = 'navigation-container';
    taskNavigation.id = 'task-navigation';
    listContainer.id = 'list-container';

    //Assigning class selectors to nav elements
    taskField.classList.add('nav-add-field');
    taskButton.classList.add('start-button');
    listField.classList.add('nav-add-field');
    listButton.classList.add('start-button');
   
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

    listNavigation.appendChild(listField);
    listNavigation.appendChild(listContainer);

    listField.appendChild(listButton);

    //Adding Event listeners to buttons 
    taskButton.addEventListener('click', () => {
        const content = (0,_content_contentElement__WEBPACK_IMPORTED_MODULE_2__.getContentElement)();
        
        if(content.children[1].id != 'task-main-content') {
            content.removeChild(content.children[1]);
            content.appendChild((0,_main_main__WEBPACK_IMPORTED_MODULE_1__.createTaskMainContent)());

            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_3__.loadIndividualTasks)();
        }    
    });

    todayButton.addEventListener('click', () => {
        const content = (0,_content_contentElement__WEBPACK_IMPORTED_MODULE_2__.getContentElement)();

        if(content.children[1].id != 'today-tasks-main-content') {
            content.removeChild(content.children[1]);
            content.appendChild((0,_main_main__WEBPACK_IMPORTED_MODULE_1__.createTodayTasksMainContent)());

            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_3__.loadTodayTasks)();
        }
    });

    thisWeekButton.addEventListener('click', () => {
        const content = (0,_content_contentElement__WEBPACK_IMPORTED_MODULE_2__.getContentElement)();

        if(content.children[1].id != 'this-week-tasks-main-content') {
            content.removeChild(content.children[1]);
            content.appendChild((0,_main_main__WEBPACK_IMPORTED_MODULE_1__.createThisWeekTasksMainContent)());

            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_3__.loadThisWeekTasks)();
        }
    });

    listButton.addEventListener('click', () => {
        const content = (0,_content_contentElement__WEBPACK_IMPORTED_MODULE_2__.getContentElement)();

        if(content.children[1].id != 'list-main-content') {
            content.removeChild(content.children[1]);
            content.appendChild((0,_main_main__WEBPACK_IMPORTED_MODULE_1__.createListMainContent)());
  
            (0,_helpers_load__WEBPACK_IMPORTED_MODULE_3__.loadLists)();
        }  
    });

    return navigation;
}

function getNavListContainer() {
    return document.querySelector('#list-container');
}


/***/ }),

/***/ "./src/components/panels/listTask/listTaskPanel.js":
/*!*********************************************************!*\
  !*** ./src/components/panels/listTask/listTaskPanel.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createListTaskPanel: () => (/* binding */ createListTaskPanel)
/* harmony export */ });
/* harmony import */ var _listTaskPanel_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listTaskPanel.css */ "./src/components/panels/listTask/listTaskPanel.css");
/* harmony import */ var _dialogs_listTask_details_listTaskDetailsDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialogs/listTask/details/listTaskDetailsDialog */ "./src/components/dialogs/listTask/details/listTaskDetailsDialog.js");
/* harmony import */ var _dialogs_listTask_edit_editListTaskDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/listTask/edit/editListTaskDialog */ "./src/components/dialogs/listTask/edit/editListTaskDialog.js");
/* harmony import */ var _dialogs_listTask_delete_listTaskDeleteDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs/listTask/delete/listTaskDeleteDialog */ "./src/components/dialogs/listTask/delete/listTaskDeleteDialog.js");






function createListTaskPanel(listTask) {
    const panel = document.createElement('div');

    const priorityStripe = document.createElement('div');
    const taskTitleContainer = document.createElement('div');
    const taskDueDateContainer = document.createElement('div');
    const taskCheckboxContainer = document.createElement('div');
    const utilityContainer = document.createElement('div');

    const taskTitle = document.createElement('h3');
    const taskDueDate = document.createElement('span');
    const checkboxContainer = document.createElement('div');
    const checkbox = document.createElement('input');

    const detailsButton = document.createElement('button');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    //Assigning properties of elements
    checkbox.type = 'checkbox';

    //Assigning id selectors to panel elements
    panel.id = 'ltp-panel-container';
    priorityStripe.id = 'ltp-priority-stripe';
    taskTitleContainer.id = 'ltp-task-title-container';
    taskDueDateContainer.id = 'ltp-task-due-date-container';
    taskCheckboxContainer.id = 'ltp-task-checkbox-container';
    utilityContainer.id = 'ltp-utility-container';

    //Assigning class selectors to panel elements
    editButton.classList.add('ltp-mid');
    detailsButton.classList.add('ltp-top');
    deleteButton.classList.add('ltp-bottom');

    //Appending task attributes to the panel;
    taskTitle.textContent = listTask.title;
    taskDueDate.textContent = listTask.dueDate;

    if(listTask.priority == 'High') {
        priorityStripe.style.backgroundColor = 'var(--high-priority-color)';
    }
    if(listTask.priority == 'Medium') {
        priorityStripe.style.backgroundColor = 'var(--medium-priority-color)';
    }
    if(listTask.priority == 'Low') {
        priorityStripe.style.backgroundColor = 'var(--low-priority-color)';
    }

    //Saving the state of the checkbox
    if(listTask.status == true) {
        checkbox.checked = true;
    }
    if(listTask.status == false) {
        checkbox.checked = false;
    }

    checkboxContainer.addEventListener('click', () => {
        if(checkbox.checked) {
            listTask.status = true;
        }
        if(!checkbox.checked) {
            listTask.status = false;
        }
    })

    //Connecting the panel to the task
    panel.dataset.id = listTask.id;

    //Attaching event listeners to the utility buttons
    detailsButton.addEventListener('click', () => {
        const listTaskDetailsDialog = (0,_dialogs_listTask_details_listTaskDetailsDialog__WEBPACK_IMPORTED_MODULE_1__.createListTaskDetailsDialog)(listTask);
        document.body.appendChild(listTaskDetailsDialog);
        
        listTaskDetailsDialog.showModal();
    });

    editButton.addEventListener('click', () => {
        const editListTaskDialog = (0,_dialogs_listTask_edit_editListTaskDialog__WEBPACK_IMPORTED_MODULE_2__.createEditListTaskDialog)(listTask);
        document.body.appendChild(editListTaskDialog);

        editListTaskDialog.showModal();
    });

    deleteButton.addEventListener('click', () => {
        const deleteListTaskDialog = (0,_dialogs_listTask_delete_listTaskDeleteDialog__WEBPACK_IMPORTED_MODULE_3__.createListTaskDeleteDialog)(listTask);
        document.body.appendChild(deleteListTaskDialog);

        deleteListTaskDialog.showModal();
    });

    //Creating the structure of the panel
    panel.appendChild(priorityStripe);
    panel.appendChild(taskTitleContainer);
    panel.appendChild(taskDueDateContainer);
    panel.appendChild(taskCheckboxContainer);
    panel.appendChild(utilityContainer);

    taskTitleContainer.appendChild(taskTitle);
    taskDueDateContainer.appendChild(taskDueDate);
    taskCheckboxContainer.appendChild(checkboxContainer);
    checkboxContainer.appendChild(checkbox);

    utilityContainer.appendChild(detailsButton);
    utilityContainer.appendChild(editButton);
    utilityContainer.appendChild(deleteButton);

    return panel;
}


/***/ }),

/***/ "./src/components/panels/list/listPanel.js":
/*!*************************************************!*\
  !*** ./src/components/panels/list/listPanel.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createListPanel: () => (/* binding */ createListPanel)
/* harmony export */ });
/* harmony import */ var _listPanel_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listPanel.css */ "./src/components/panels/list/listPanel.css");
/* harmony import */ var _dialogs_list_delete_listDeleteDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialogs/list/delete/listDeleteDialog */ "./src/components/dialogs/list/delete/listDeleteDialog.js");
/* harmony import */ var _dialogs_list_details_listDetailsDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/list/details/listDetailsDialog */ "./src/components/dialogs/list/details/listDetailsDialog.js");
/* harmony import */ var _dialogs_list_edit_editListDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs/list/edit/editListDialog */ "./src/components/dialogs/list/edit/editListDialog.js");
/* harmony import */ var _content_contentElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../content/contentElement */ "./src/components/content/contentElement.js");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../main/main */ "./src/components/main/main.js");
/* harmony import */ var _listTask_listTaskPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../listTask/listTaskPanel */ "./src/components/panels/listTask/listTaskPanel.js");








function createListPanel(list) {
    const panel = document.createElement('div');

    const listTitleContainer = document.createElement('div');
    const utilityContainer = document.createElement('div');

    const listTitle = document.createElement('h3');

    const detailsButton = document.createElement('button');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    //Assigning id selectors to panel elements
    panel.id = 'lp-panel-container';
    listTitleContainer.id = 'lp-list-title-container';
    utilityContainer.id = 'lp-utility-container';

    //Assigning class selectors to panel elements
    editButton.classList.add('lp-mid');
    detailsButton.classList.add('lp-top');
    deleteButton.classList.add('lp-bottom');

    //Appending list attributes to the panel;
    listTitle.textContent = list.title;

    //Connecting the panel to the list
    panel.dataset.id = list.id;

    listTitleContainer.addEventListener('click', () => {
        const content = (0,_content_contentElement__WEBPACK_IMPORTED_MODULE_4__.getContentElement)();
        content.removeChild(content.children[1]);

        const listTasksMainContent = (0,_main_main__WEBPACK_IMPORTED_MODULE_5__.createListTasksMainContent)();
        listTasksMainContent.dataset.id = list.id;

        list.tasks.forEach(listTask => {
            listTasksMainContent.children[1].appendChild((0,_listTask_listTaskPanel__WEBPACK_IMPORTED_MODULE_6__.createListTaskPanel)(listTask));
        });

        content.appendChild(listTasksMainContent);
    });

    //Attaching event listeners to the utility buttons
    detailsButton.addEventListener('click', () => {
        const listDetailsDialog = (0,_dialogs_list_details_listDetailsDialog__WEBPACK_IMPORTED_MODULE_2__.createListDetailsDialog)(list);
        document.body.appendChild(listDetailsDialog);
        
        listDetailsDialog.showModal();
    });

    editButton.addEventListener('click', () => {
        const listEditDialog = (0,_dialogs_list_edit_editListDialog__WEBPACK_IMPORTED_MODULE_3__.createEditListDialog)(list);
        document.body.appendChild(listEditDialog);

        listEditDialog.showModal();
    });

    deleteButton.addEventListener('click', () => {
        const listDeleteDialog = (0,_dialogs_list_delete_listDeleteDialog__WEBPACK_IMPORTED_MODULE_1__.createListDeleteDialog)(list);
        document.body.appendChild(listDeleteDialog);

        listDeleteDialog.showModal();
    });

    //Creating the structure of the panel
    panel.appendChild(listTitleContainer);
    panel.appendChild(utilityContainer);

    listTitleContainer.appendChild(listTitle);

    utilityContainer.appendChild(detailsButton);
    utilityContainer.appendChild(editButton);
    utilityContainer.appendChild(deleteButton);

    return panel;
}



/***/ }),

/***/ "./src/components/panels/task/taskPanel.js":
/*!*************************************************!*\
  !*** ./src/components/panels/task/taskPanel.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskPanel: () => (/* binding */ createTaskPanel)
/* harmony export */ });
/* harmony import */ var _taskPanel_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskPanel.css */ "./src/components/panels/task/taskPanel.css");
/* harmony import */ var _dialogs_task_delete_taskDeleteDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialogs/task/delete/taskDeleteDialog */ "./src/components/dialogs/task/delete/taskDeleteDialog.js");
/* harmony import */ var _dialogs_task_details_taskDetailsDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/task/details/taskDetailsDialog */ "./src/components/dialogs/task/details/taskDetailsDialog.js");
/* harmony import */ var _dialogs_task_edit_editTaskDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs/task/edit/editTaskDialog */ "./src/components/dialogs/task/edit/editTaskDialog.js");






function createTaskPanel(task) {
    const panel = document.createElement('div');

    const priorityStripe = document.createElement('div');
    const taskTitleContainer = document.createElement('div');
    const taskDueDateContainer = document.createElement('div');
    const taskCheckboxContainer = document.createElement('div');
    const utilityContainer = document.createElement('div');

    const taskTitle = document.createElement('h3');
    const taskDueDate = document.createElement('span');
    const checkboxContainer =document.createElement('div');
    const checkbox = document.createElement('input');

    const detailsButton = document.createElement('button');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    //Assigning properties of elements
    checkbox.type = 'checkbox';

    //Assigning id selectors to panel elements
    panel.id = 'tp-panel-container';
    priorityStripe.id = 'tp-priority-stripe';
    taskTitleContainer.id = 'tp-task-title-container';
    taskDueDateContainer.id = 'tp-task-due-date-container';
    taskCheckboxContainer.id = 'tp-task-checkbox-container';
    utilityContainer.id = 'tp-utility-container';

    //Assigning class selectors to panel elements
    editButton.classList.add('tp-mid');
    detailsButton.classList.add('tp-top');
    deleteButton.classList.add('tp-bottom');

    //Appending task attributes to the panel;
    taskTitle.textContent = task.title;
    taskDueDate.textContent = task.dueDate;

    if(task.priority == 'High') {
        priorityStripe.style.backgroundColor = 'var(--high-priority-color)';
    }
    if(task.priority == 'Medium') {
        priorityStripe.style.backgroundColor = 'var(--medium-priority-color)';
    }
    if(task.priority == 'Low') {
        priorityStripe.style.backgroundColor = 'var(--low-priority-color)';
    }

    //Saving the state of the checkbox
    if(task.status == true) {
        checkbox.checked = true;
    }
    if(task.status == false) {
        checkbox.checked = false;
    }

    checkboxContainer.addEventListener('click', () => {
        if(checkbox.checked) {
            task.status = true;
        }
        if(!checkbox.checked) {
            task.status = false;
        }
    })

    //Connecting the panel to the task
    panel.dataset.id = task.id;

    //Attaching event listeners to the utility buttons
    detailsButton.addEventListener('click', () => {
        const taskDetailsDialog = (0,_dialogs_task_details_taskDetailsDialog__WEBPACK_IMPORTED_MODULE_2__.createTaskDetailsDialog)(task);
        document.body.appendChild(taskDetailsDialog);
        
        taskDetailsDialog.showModal();
    });

    editButton.addEventListener('click', () => {
        const editTaskDialog = (0,_dialogs_task_edit_editTaskDialog__WEBPACK_IMPORTED_MODULE_3__.createEditTaskDialog)(task);
        document.body.appendChild(editTaskDialog);

        editTaskDialog.showModal();
    });

    deleteButton.addEventListener('click', () => {
        const deleteTaskDialog = (0,_dialogs_task_delete_taskDeleteDialog__WEBPACK_IMPORTED_MODULE_1__.createTaskDeleteDialog)(task);
        document.body.appendChild(deleteTaskDialog);

        deleteTaskDialog.showModal();
    });

    //Creating the structure of the panel
    panel.appendChild(priorityStripe);
    panel.appendChild(taskTitleContainer);
    panel.appendChild(taskDueDateContainer);
    panel.appendChild(taskCheckboxContainer);
    panel.appendChild(utilityContainer);

    taskTitleContainer.appendChild(taskTitle);
    taskDueDateContainer.appendChild(taskDueDate);
    taskCheckboxContainer.appendChild(checkboxContainer);
    checkboxContainer.appendChild(checkbox);

    utilityContainer.appendChild(detailsButton);
    utilityContainer.appendChild(editButton);
    utilityContainer.appendChild(deleteButton);

    return panel;
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

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentIndividualTaskIndex: () => (/* binding */ currentIndividualTaskIndex),
/* harmony export */   currentListIndex: () => (/* binding */ currentListIndex),
/* harmony export */   incrementCurrentListIndex: () => (/* binding */ incrementCurrentListIndex),
/* harmony export */   incrementCurrentTaskIndex: () => (/* binding */ incrementCurrentTaskIndex),
/* harmony export */   individualTasks: () => (/* binding */ individualTasks),
/* harmony export */   lists: () => (/* binding */ lists)
/* harmony export */ });
const individualTasks = [];
const lists = [];

let currentIndividualTaskIndex = 0;
let currentListIndex = 0;

function incrementCurrentTaskIndex() {
    currentIndividualTaskIndex++;
}

function incrementCurrentListIndex() {
    currentListIndex++;
}





/***/ }),

/***/ "./src/factories/list.js":
/*!*******************************!*\
  !*** ./src/factories/list.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createList: () => (/* binding */ createList)
/* harmony export */ });
function createList(id, title, tasks, currentListTaskCounter) {
    currentListTaskCounter = 0;
    return { id, title, tasks, currentListTaskCounter };
}

/***/ }),

/***/ "./src/factories/listTask.js":
/*!***********************************!*\
  !*** ./src/factories/listTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createListTask: () => (/* binding */ createListTask)
/* harmony export */ });
function createListTask(id, title, description, dueDate, priority, status, listId) {
    return { id, title, description, dueDate, priority, status, listId };
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
function createTask(id, title, description, dueDate, status, priority) {
    return { id, title, description, dueDate, status, priority };
}

/***/ }),

/***/ "./src/helpers/date.js":
/*!*****************************!*\
  !*** ./src/helpers/date.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkDueDateInWeek: () => (/* binding */ checkDueDateInWeek),
/* harmony export */   checkDueDateIsToday: () => (/* binding */ checkDueDateIsToday),
/* harmony export */   formatDueDate: () => (/* binding */ formatDueDate),
/* harmony export */   formatSQLDueDate: () => (/* binding */ formatSQLDueDate),
/* harmony export */   getDateInWeek: () => (/* binding */ getDateInWeek),
/* harmony export */   getTodayDate: () => (/* binding */ getTodayDate)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/add.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/compareAsc.mjs");


function formatDueDate(dueDate) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(dueDate, 'MM/dd/yyyy');
}

function formatSQLDueDate(dueDate) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(dueDate, 'yyyy-MM-dd');
}

function checkDueDateIsToday(dueDate) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isToday)(dueDate);
}

function getTodayDate() {
    return formatDueDate((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfToday)());
}

function getDateInWeek() {
    const todayDate = getTodayDate();
    const dateInWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.add)(todayDate, { weeks: 1 });

    const formattedDateInWeek = formatDueDate(dateInWeek);

    return formattedDateInWeek;
}


function checkDueDateInWeek(dueDate) {
    const dateInWeek = getDateInWeek();
    const todayDate = getTodayDate();

    const resultCompareDateInWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.compareAsc)(dueDate, dateInWeek);
    const resultCompareTodayDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.compareAsc)(dueDate, todayDate);

    if(resultCompareDateInWeek === -1 && resultCompareTodayDate !== -1) {
        return true;
    } else {
        return false;
    }
}











/***/ }),

/***/ "./src/helpers/filter.js":
/*!*******************************!*\
  !*** ./src/helpers/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getThisWeekIndividualTasks: () => (/* binding */ getThisWeekIndividualTasks),
/* harmony export */   getThisWeekListTasksTasks: () => (/* binding */ getThisWeekListTasksTasks),
/* harmony export */   getTodayIndividualTasks: () => (/* binding */ getTodayIndividualTasks),
/* harmony export */   getTodayListTasks: () => (/* binding */ getTodayListTasks)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data */ "./src/data/data.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date */ "./src/helpers/date.js");



function getTodayIndividualTasks() {
    return _data_data__WEBPACK_IMPORTED_MODULE_0__.individualTasks.filter((task) => (0,_date__WEBPACK_IMPORTED_MODULE_1__.checkDueDateIsToday)(task.dueDate));
}

function getTodayListTasks() {
    const listTasks = [];     

    _data_data__WEBPACK_IMPORTED_MODULE_0__.lists.forEach(list => {
        list.tasks.forEach(listTask => {
            listTasks.push(listTask);
        });
    });

    return listTasks.filter((listTask) => (0,_date__WEBPACK_IMPORTED_MODULE_1__.checkDueDateIsToday)(listTask.dueDate));
}

function getThisWeekIndividualTasks() {
    const filteredIndividualTasks = _data_data__WEBPACK_IMPORTED_MODULE_0__.individualTasks.filter((task) => (0,_date__WEBPACK_IMPORTED_MODULE_1__.checkDueDateInWeek)(task.dueDate));
    
    return filteredIndividualTasks.sort((firstTask, secondTask) => {
        let firstTasKDueDate = new Date(firstTask.dueDate);
        let secondTaskDueDate = new Date(secondTask.dueDate);

        return firstTasKDueDate - secondTaskDueDate;
    });
}

function getThisWeekListTasksTasks() {
    const listTasks = [];   
         
    _data_data__WEBPACK_IMPORTED_MODULE_0__.lists.forEach(list => {
        list.tasks.forEach(listTask => {
            listTasks.push(listTask);
        });
    });

    const filteredListTasks = listTasks.filter((listTask) => (0,_date__WEBPACK_IMPORTED_MODULE_1__.checkDueDateInWeek)(listTask.dueDate));

    return filteredListTasks.sort((firstListTask, secondListTask) => {
        let firstListTasKDueDate = new Date(firstListTask.dueDate);
        let secondListTaskDueDate = new Date(secondListTask.dueDate);

        return firstListTasKDueDate - secondListTaskDueDate;
    });
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





function initializeIndexPage() {
    (0,_components_content_contentElement__WEBPACK_IMPORTED_MODULE_1__.createContentElement)();
    const content = (0,_components_content_contentElement__WEBPACK_IMPORTED_MODULE_1__.getContentElement)();

    content.appendChild((0,_components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__.createSidebar)());
    content.appendChild((0,_components_main_main__WEBPACK_IMPORTED_MODULE_2__.createTaskMainContent)());
}

/***/ }),

/***/ "./src/helpers/load.js":
/*!*****************************!*\
  !*** ./src/helpers/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadIndividualTasks: () => (/* binding */ loadIndividualTasks),
/* harmony export */   loadListTasks: () => (/* binding */ loadListTasks),
/* harmony export */   loadLists: () => (/* binding */ loadLists),
/* harmony export */   loadThisWeekTasks: () => (/* binding */ loadThisWeekTasks),
/* harmony export */   loadTodayTasks: () => (/* binding */ loadTodayTasks)
/* harmony export */ });
/* harmony import */ var _components_main_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/main/main */ "./src/components/main/main.js");
/* harmony import */ var _components_panels_list_listPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/panels/list/listPanel */ "./src/components/panels/list/listPanel.js");
/* harmony import */ var _components_panels_listTask_listTaskPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/panels/listTask/listTaskPanel */ "./src/components/panels/listTask/listTaskPanel.js");
/* harmony import */ var _components_panels_task_taskPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/panels/task/taskPanel */ "./src/components/panels/task/taskPanel.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/data */ "./src/data/data.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter */ "./src/helpers/filter.js");







function loadIndividualTasks() {
    const mainContentTaskContainer = (0,_components_main_main__WEBPACK_IMPORTED_MODULE_0__.getMainContentTaskContainer)();
    mainContentTaskContainer.textContent = '';

    //Reload all individual tasks
    _data_data__WEBPACK_IMPORTED_MODULE_4__.individualTasks.forEach(task => {
        mainContentTaskContainer.appendChild((0,_components_panels_task_taskPanel__WEBPACK_IMPORTED_MODULE_3__.createTaskPanel)(task));
    });
}

function loadLists() {
    const mainContentListContainer = (0,_components_main_main__WEBPACK_IMPORTED_MODULE_0__.getMainContentListContainer)();
    mainContentListContainer.textContent = '';

    _data_data__WEBPACK_IMPORTED_MODULE_4__.lists.forEach(list => {
        mainContentListContainer.appendChild((0,_components_panels_list_listPanel__WEBPACK_IMPORTED_MODULE_1__.createListPanel)(list));
    });
}

function loadListTasks(list) {
    const mainContentListTaskContainer = (0,_components_main_main__WEBPACK_IMPORTED_MODULE_0__.getMainContentListTasksContainer)();
    mainContentListTaskContainer.textContent = '';

    list.tasks.forEach(listTask => {
        mainContentListTaskContainer.appendChild((0,_components_panels_listTask_listTaskPanel__WEBPACK_IMPORTED_MODULE_2__.createListTaskPanel)(listTask));
    });
}

function loadTodayTasks() {
    const mainContentTodayIndividualTaskContainer = (0,_components_main_main__WEBPACK_IMPORTED_MODULE_0__.getMainContentTodayIndividualTasksContainer)();
    const mainContentTodayListTasksContainer = (0,_components_main_main__WEBPACK_IMPORTED_MODULE_0__.getMainContentTodayListTasksContainer)();

    mainContentTodayIndividualTaskContainer.textContent = '';
    mainContentTodayListTasksContainer.textContent = '';

    const individualTasksToday = (0,_filter__WEBPACK_IMPORTED_MODULE_5__.getTodayIndividualTasks)();
    const listTasksToday = (0,_filter__WEBPACK_IMPORTED_MODULE_5__.getTodayListTasks)();

    //Reload all today's tasks
    individualTasksToday.forEach(task => {
        mainContentTodayIndividualTaskContainer.appendChild((0,_components_panels_task_taskPanel__WEBPACK_IMPORTED_MODULE_3__.createTaskPanel)(task));
    });

    listTasksToday.forEach(listTask => {
        mainContentTodayListTasksContainer.appendChild((0,_components_panels_listTask_listTaskPanel__WEBPACK_IMPORTED_MODULE_2__.createListTaskPanel)(listTask));
    });
}

function loadThisWeekTasks() {
    const mainContentThisWeekIndividualTaskContainer = (0,_components_main_main__WEBPACK_IMPORTED_MODULE_0__.getMainContentThisWeekIndividualTasksContainer)();
    const mainContentThisWeekListTasksContainer = (0,_components_main_main__WEBPACK_IMPORTED_MODULE_0__.getMainContentThisWeekLIstTasksContainer)();

    mainContentThisWeekIndividualTaskContainer.textContent = '';
    mainContentThisWeekListTasksContainer.textContent = '';

    const individualTasksThisWeek = (0,_filter__WEBPACK_IMPORTED_MODULE_5__.getThisWeekIndividualTasks)();
    const listTasksThisWeek = (0,_filter__WEBPACK_IMPORTED_MODULE_5__.getThisWeekListTasksTasks)();

    //Reload all today's tasks
    individualTasksThisWeek.forEach(task => {
        mainContentThisWeekIndividualTaskContainer.appendChild((0,_components_panels_task_taskPanel__WEBPACK_IMPORTED_MODULE_3__.createTaskPanel)(task));
    });

    listTasksThisWeek.forEach(listTask => {
        mainContentThisWeekListTasksContainer.appendChild((0,_components_panels_listTask_listTaskPanel__WEBPACK_IMPORTED_MODULE_2__.createListTaskPanel)(listTask));
    });
}

/***/ }),

/***/ "./src/assets/icons/icons8-checkmark.png":
/*!***********************************************!*\
  !*** ./src/assets/icons/icons8-checkmark.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/126a61d2adc34db75537.png";

/***/ }),

/***/ "./src/assets/icons/icons8-delete.png":
/*!********************************************!*\
  !*** ./src/assets/icons/icons8-delete.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/33afe7fd6561d7810766.png";

/***/ }),

/***/ "./src/assets/icons/icons8-details.png":
/*!*********************************************!*\
  !*** ./src/assets/icons/icons8-details.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/88d63b3266206390ba02.png";

/***/ }),

/***/ "./src/assets/icons/icons8-edit.png":
/*!******************************************!*\
  !*** ./src/assets/icons/icons8-edit.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/0774912a2bac5d83dc8b.png";

/***/ }),

/***/ "./src/fonts/Dosis/static/Dosis-Medium.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/Dosis/static/Dosis-Medium.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/40bfe3de1354a2b1be8b.ttf";

/***/ }),

/***/ "./src/fonts/Dosis/static/Dosis-Regular.ttf":
/*!**************************************************!*\
  !*** ./src/fonts/Dosis/static/Dosis-Regular.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f68bcdbc44f0cb702a4a.ttf";

/***/ }),

/***/ "./src/fonts/Dosis/static/Dosis-SemiBold.ttf":
/*!***************************************************!*\
  !*** ./src/fonts/Dosis/static/Dosis-SemiBold.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7a463c514085e7be1560.ttf";

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/add.mjs":
/*!***************************************!*\
  !*** ./node_modules/date-fns/add.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMonths.mjs */ "./node_modules/date-fns/addMonths.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,\\-7
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(date, duration) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;

  // Add years and months
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const dateWithMonths =
    months || years ? (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__.addMonths)(_date, months + years * 12) : _date;

  // Add weeks and days
  const dateWithDays =
    days || weeks ? (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes and seconds
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1000;
  const finalDate = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(date, dateWithDays.getTime() + msToAdd);

  return finalDate;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);


/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/date-fns/addMonths.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/addMonths.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMonths: () => (/* binding */ addMonths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */
function addMonths(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  const dayOfMonth = _date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  const endOfDesiredMonth = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth,
    );
    return _date;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMonths);


/***/ }),

/***/ "./node_modules/date-fns/compareAsc.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/compareAsc.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareAsc: () => (/* binding */ compareAsc),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const diff = _dateLeft.getTime() - _dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareAsc);


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfToday.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/startOfToday.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfToday: () => (/* binding */ startOfToday)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * @returns The start of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */
function startOfToday() {
  return (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfToday);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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