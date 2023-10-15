/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const canvas = document.querySelector(`.canvas`);\n\nconst setSize = document.querySelector(`.sizeOfCanvas>input`);\nconst setCells = document.querySelector(`.numberOfCells>input`);\n\nlet size;\nlet cells;\n\nfunction drawCanvas() {\n  size = document.querySelector(`.sizeOfCanvas>input`).value;\n  canvas.style.width = `${size}px`;\n  canvas.style.height = `${size}px`;\n}\n\nfunction createCanvas() {\n  drawCanvas();\n  if (document.querySelector(`.numberOfCells>input`).value) {\n    drawCells();\n  }\n}\n\nfunction drawCells() {\n  while (canvas.firstChild) {\n    canvas.removeChild(canvas.firstChild);\n  }\n  let cells = document.querySelector(`.numberOfCells>input`).value;\n  for (let i = 0; i < cells; i++) {\n    let row = document.createElement(`div`);\n    canvas.appendChild(row);\n    for (let j = 0; j < cells; j++) {\n      let singleCell = document.createElement(`div`);\n      singleCell.style.width = `${size / cells}px`;\n      singleCell.style.height = `${size / cells}px`;\n\n      singleCell.addEventListener(`mouseover`, () => {\n        singleCell.classList.toggle(`showCell`);\n      });\n\n      row.appendChild(singleCell);\n    }\n  }\n}\n\nsetSize.addEventListener(`keyup`, createCanvas);\nsetCells.addEventListener(`keyup`, drawCells);\n\ncreateCanvas();\n\n\n//# sourceURL=webpack://test_folder/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;