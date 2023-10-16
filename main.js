/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createCanvas.js":
/*!*****************************!*\
  !*** ./src/createCanvas.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCanvas: () => (/* binding */ createCanvas),\n/* harmony export */   createCanvasResize: () => (/* binding */ createCanvasResize)\n/* harmony export */ });\n/* harmony import */ var _drawCells_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawCells.js */ \"./src/drawCells.js\");\n\n\nfunction drawCanvas(canvas) {\n  let size = document.querySelector(`.sizeOfCanvas>input`).value;\n  canvas.style.width = `${size}px`;\n  canvas.style.height = `${size}px`;\n}\n\nfunction createCanvas(canvas) {\n  drawCanvas(canvas);\n  if (document.querySelector(`.numberOfCells>input`).value) {\n    (0,_drawCells_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(canvas);\n  }\n}\n\nfunction createCanvasResize(canvas) {\n  // Added +2 to the size, since clientWidth doesn't include border\n  canvas.style.width = `${canvas.clientWidth + 2}px`;\n  canvas.style.height = `${canvas.clientHeight + 2}px`;\n  (0,_drawCells_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(canvas);\n}\n\n\n\n\n//# sourceURL=webpack://test_folder/./src/createCanvas.js?");

/***/ }),

/***/ "./src/drawCells.js":
/*!**************************!*\
  !*** ./src/drawCells.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ drawCells)\n/* harmony export */ });\nfunction drawCells(canvas) {\n  while (canvas.firstChild) {\n    canvas.removeChild(canvas.firstChild);\n  }\n  let cells = document.querySelector(`.numberOfCells>input`).value;\n  if (!cells) {\n    console.log(\"No cells\");\n    return;\n  }\n  for (let i = 0; i < cells; i++) {\n    let row = document.createElement(`div`);\n    canvas.appendChild(row);\n    for (let j = 0; j < cells; j++) {\n      let singleCell = document.createElement(`div`);\n      singleCell.style.width = `${canvas.clientWidth / cells}px`;\n      singleCell.style.height = `${canvas.clientHeight / cells}px`;\n\n      singleCell.addEventListener(`mouseover`, () => {\n        singleCell.classList.toggle(`showCell`);\n      });\n\n      row.appendChild(singleCell);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://test_folder/./src/drawCells.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drawCells_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawCells.js */ \"./src/drawCells.js\");\n/* harmony import */ var _createCanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCanvas.js */ \"./src/createCanvas.js\");\n\n\n\nconst canvas = document.querySelector(`.canvas`);\nconst setSize = document.querySelector(`.sizeOfCanvas>input`);\nconst setCells = document.querySelector(`.numberOfCells>input`);\n\n//Make sure to wrap callback function in anon arrow function, so that I can send it canvas variable\nsetSize.addEventListener(`keyup`, () => {\n  (0,_createCanvas_js__WEBPACK_IMPORTED_MODULE_1__.createCanvas)(canvas);\n});\nsetCells.addEventListener(`keyup`, () => {\n  (0,_drawCells_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(canvas);\n});\ncanvas.addEventListener(`mouseup`, () => {\n  (0,_createCanvas_js__WEBPACK_IMPORTED_MODULE_1__.createCanvasResize)(canvas);\n});\n\n(0,_createCanvas_js__WEBPACK_IMPORTED_MODULE_1__.createCanvas)(canvas);\n\n\n//# sourceURL=webpack://test_folder/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;