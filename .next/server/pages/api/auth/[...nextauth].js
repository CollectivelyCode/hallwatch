/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  // Configure one or more authentication providers\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Google({\n    clientId: process.env.AUTH_GOOGLE_CLIENT_ID,\n    clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET\n  }) // ...add more providers here\n  ],\n  pages: {\n    signIn: './../auth/login'\n  },\n  database: process.env.DB_URL + process.env.DB_NAME\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGV1aG0vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzI4YzIiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJBVVRIX0dPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJBVVRIX0dPT0dMRV9DTElFTlRfU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iLCJkYXRhYmFzZSIsIkRCX1VSTCIsIkRCX05BTUUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUVBLCtEQUFlQSxnREFBUSxDQUFDO0FBQ3RCO0FBQ0VDLFdBQVMsRUFBRSxDQUNQQyxpRUFBQSxDQUFpQjtBQUNiQyxZQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxxQkFEVDtBQUViQyxnQkFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGYixHQUFqQixDQURPLENBUVg7QUFSVyxHQUZTO0FBYXBCQyxPQUFLLEVBQUU7QUFDSEMsVUFBTSxFQUFFO0FBREwsR0FiYTtBQWdCcEJDLFVBQVEsRUFBRVAsT0FBTyxDQUFDQyxHQUFSLENBQVlPLE1BQVosR0FBcUJSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUTtBQWhCdkIsQ0FBRCxDQUF2QiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUHJvdmlkZXJzLkdvb2dsZSh7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSF9HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIX0dPT0dMRV9DTElFTlRfU0VDUkVUXG4gXG4gICAgICAgIH0pLFxuXG5cbiAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxuICAgIF0sXG5cbiAgICBwYWdlczoge1xuICAgICAgICBzaWduSW46ICcuLy4uL2F1dGgvbG9naW4nLFxuICAgIH0sXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX1VSTCArIHByb2Nlc3MuZW52LkRCX05BTUVcbn0pXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();