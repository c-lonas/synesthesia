"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Colorful.js":
/*!********************************!*\
  !*** ./components/Colorful.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_colorful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-colorful */ \"./node_modules/react-colorful/dist/index.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SynthPad = function SynthPad() {\n    console.log(\"called synth function\");\n};\nvar Palette0 = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        r: 255,\n        g: 255,\n        b: 255,\n        a: 1\n    }), color = ref[0], setColor = ref[1];\n    var colorString = \"rgba(\".concat(color.r, \", \").concat(color.g, \", \").concat(color.b, \", \").concat(color.a, \")\");\n    // useContainerBackground(colorString);    \n    SynthPad();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"palette-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_colorful__WEBPACK_IMPORTED_MODULE_2__.RgbaColorPicker, {\n                    color: color,\n                    onChange: setColor\n                }, void 0, false, {\n                    fileName: \"E:\\\\File Storage\\\\code\\\\Synesthesia\\\\synesthesia\\\\components\\\\Colorful.js\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"🎨 \",\n                        colorString,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\File Storage\\\\code\\\\Synesthesia\\\\synesthesia\\\\components\\\\Colorful.js\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\File Storage\\\\code\\\\Synesthesia\\\\synesthesia\\\\components\\\\Colorful.js\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false));\n};\n_s(Palette0, \"Ke+rosWNHep16BVKTyMFN1NEqRE=\");\n_c = Palette0;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Palette0);\nvar _c;\n$RefreshReg$(_c, \"Palette0\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbG9yZnVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0Q7QUFDaEI7OztBQUVoQyxHQUFLLENBQUNFLFFBQVEsR0FBSSxRQUFRLENBQXBCQSxRQUFRLEdBQWUsQ0FBQztJQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBdUI7QUFFckMsQ0FBQztBQUdELEdBQUssQ0FBQ0MsUUFBUSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUNwQixHQUFLLENBQXFCSixHQUFxQyxHQUFyQ0EsK0NBQVEsQ0FBQyxDQUFDO1FBQUNLLENBQUMsRUFBQyxHQUFHO1FBQUVDLENBQUMsRUFBQyxHQUFHO1FBQUVDLENBQUMsRUFBQyxHQUFHO1FBQUVDLENBQUMsRUFBQyxDQUFDO0lBQUEsQ0FBQyxHQUF2REMsS0FBSyxHQUFjVCxHQUFxQyxLQUFqRFUsUUFBUSxHQUFJVixHQUFxQztJQUMvRCxHQUFLLENBQUNXLFdBQVcsR0FBSSxDQUFLLE9BQWNGLE1BQU8sQ0FBbkJBLEtBQUssQ0FBQ0osQ0FBQyxFQUFDLENBQUUsS0FBY0ksTUFBTyxDQUFuQkEsS0FBSyxDQUFDSCxDQUFDLEVBQUMsQ0FBRSxLQUFjRyxNQUFPLENBQW5CQSxLQUFLLENBQUNGLENBQUMsRUFBQyxDQUFFLEtBQVUsTUFBQyxDQUFURSxLQUFLLENBQUNELENBQUMsRUFBQyxDQUFDO0lBRXpFLEVBQTJDO0lBRTNDUCxRQUFRO0lBRVIsTUFBTTs4RkFFRFcsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBbUI7OzRGQUMvQmQsMkRBQWU7b0JBQUNVLEtBQUssRUFBRUEsS0FBSztvQkFBRUssUUFBUSxFQUFFSixRQUFROzs7Ozs7NEZBQ2hESyxDQUFDOzt3QkFBQyxDQUFFO3dCQUFDSixXQUFXO3dCQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBTTNCLENBQUM7R0FsQkdQLFFBQVE7S0FBUkEsUUFBUTtBQXFCZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29sb3JmdWwuanM/ODI5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZ2JhQ29sb3JQaWNrZXIgfSBmcm9tIFwicmVhY3QtY29sb3JmdWxcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN5bnRoUGFkID0gKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnNvbGUubG9nKFwiY2FsbGVkIHN5bnRoIGZ1bmN0aW9uXCIpO1xyXG5cclxufSk7XHJcblxyXG5cclxuY29uc3QgUGFsZXR0ZTAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKHsgcjoyNTUsIGc6MjU1LCBiOjI1NSwgYToxfSk7XHJcbiAgICBjb25zdCBjb2xvclN0cmluZyA9IGByZ2JhKCR7Y29sb3Iucn0sICR7Y29sb3IuZ30sICR7Y29sb3IuYn0sICR7Y29sb3IuYX0pYDtcclxuICAgIFxyXG4gICAgLy8gdXNlQ29udGFpbmVyQmFja2dyb3VuZChjb2xvclN0cmluZyk7ICAgIFxyXG5cclxuICAgIFN5bnRoUGFkKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbGV0dGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8UmdiYUNvbG9yUGlja2VyIGNvbG9yPXtjb2xvcn0gb25DaGFuZ2U9e3NldENvbG9yfS8+XHJcbiAgICAgICAgICA8cD7wn46oIHtjb2xvclN0cmluZ30gPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICA8Lz5cclxuICAgICAgXHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWxldHRlMDsiXSwibmFtZXMiOlsiUmdiYUNvbG9yUGlja2VyIiwidXNlU3RhdGUiLCJTeW50aFBhZCIsImNvbnNvbGUiLCJsb2ciLCJQYWxldHRlMCIsInIiLCJnIiwiYiIsImEiLCJjb2xvciIsInNldENvbG9yIiwiY29sb3JTdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Colorful.js\n");

/***/ })

});