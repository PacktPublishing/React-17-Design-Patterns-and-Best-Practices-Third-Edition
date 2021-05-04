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

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nvar App = function (_a) {\n    var gists = _a.gists;\n    return (jsx_runtime_1.jsx(\"ul\", { children: gists.map(function (gist) { return (jsx_runtime_1.jsx(\"li\", { children: gist.description }, gist.id)); }) }, void 0));\n};\nexports.default = App;\n\n\n//# sourceURL=webpack://css-modules/./src/App.tsx?");

/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nvar isomorphic_fetch_1 = __importDefault(__webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\"));\nvar App_1 = __importDefault(__webpack_require__(/*! ./App */ \"./src/App.tsx\"));\nvar template_1 = __importDefault(__webpack_require__(/*! ./template */ \"./src/template.ts\"));\nvar app = express_1.default();\napp.use(express_1.default.static(path_1.default.resolve(__dirname, './dist/public')));\n// @ts-expect-error\napp.get('/', function (req, res) {\n    isomorphic_fetch_1.default('https://api.github.com/users/gaearon/gists')\n        .then(function (response) { return response.json(); })\n        .then(function (gists) {\n        var body = server_1.default.renderToString(jsx_runtime_1.jsx(App_1.default, { gists: gists }, void 0));\n        var html = template_1.default(body, gists);\n        res.send(html);\n    });\n});\napp.listen(3000, function () { return console.log('Listening on port 3000'); });\n\n\n//# sourceURL=webpack://css-modules/./src/server.tsx?");

/***/ }),

/***/ "./src/template.ts":
/*!*************************!*\
  !*** ./src/template.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = (function (body, gists) { return \"\\n  <!DOCTYPE html>\\n  <html>\\n    <head>\\n      <meta charset=\\\"UTF-8\\\">\\n    </head>\\n    <body>\\n      <div id=\\\"app\\\">\" + body + \"</div>\\n      <script>window.gists = \" + JSON.stringify(gists) + \"</script> \\n      <script src=\\\"/bundle.js\\\"></script>\\n    </body>\\n  </html>\\n\"; });\n\n\n//# sourceURL=webpack://css-modules/./src/template.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("isomorphic-fetch");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/server.tsx");
/******/ })()
;