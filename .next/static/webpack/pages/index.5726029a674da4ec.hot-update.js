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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_colorful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-colorful */ \"./node_modules/react-colorful/dist/index.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SynthPad = function(color, colorString) {\n    console.log(\"called synth function\");\n    console.log(color.r);\n    //initialize synth variables\n    // constructor\n    var SynthPad = function SynthPad() {\n        window.AudioContext = window.AudioContext || window.webkitAudioContext;\n        myAudioContext = new window.AudioContext();\n    };\n// return SynthPad;\n}();\n// window.onload = function() {\n//   let synthpad = new SynthPad();\n// }\nvar Palette0 = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        r: 255,\n        g: 255,\n        b: 255,\n        a: 1\n    }), color = ref[0], setColor = ref[1];\n    var colorString = \"rgba(\".concat(color.r, \", \").concat(color.g, \", \").concat(color.b, \", \").concat(color.a, \")\");\n    // useContainerBackground(colorString);    \n    SynthPad(color, colorString);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"palette-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_colorful__WEBPACK_IMPORTED_MODULE_2__.RgbaColorPicker, {\n                    color: color,\n                    onChange: setColor\n                }, void 0, false, {\n                    fileName: \"E:\\\\File Storage\\\\code\\\\Synesthesia\\\\synesthesia\\\\components\\\\Colorful.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"🎨 \",\n                        colorString,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\File Storage\\\\code\\\\Synesthesia\\\\synesthesia\\\\components\\\\Colorful.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\File Storage\\\\code\\\\Synesthesia\\\\synesthesia\\\\components\\\\Colorful.js\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false));\n};\n_s(Palette0, \"Ke+rosWNHep16BVKTyMFN1NEqRE=\");\n_c = Palette0;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Palette0);\nvar _c;\n$RefreshReg$(_c, \"Palette0\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbG9yZnVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0Q7QUFDaEI7OztBQUVoQyxHQUFLLENBQUNFLFFBQVEsR0FBSSxRQUFRLENBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFFLENBQUM7SUFDOUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXVCO0lBQ25DRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDSSxDQUFDO0lBRW5CLEVBQTRCO0lBRzVCLEVBQWM7SUFDZCxHQUFHLENBQUNMLFFBQVEsR0FBRyxRQUFRLENBQW5CQSxRQUFRLEdBQWMsQ0FBQztRQUV6Qk0sTUFBTSxDQUFDQyxZQUFZLEdBQUdELE1BQU0sQ0FBQ0MsWUFBWSxJQUFJRCxNQUFNLENBQUNFLGtCQUFrQjtRQUN0RUMsY0FBYyxHQUFHLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDQyxZQUFZO0lBRTFDLENBQUM7QUFFRCxFQUFtQjtBQUdyQixDQUFDO0FBRUQsRUFBK0I7QUFDL0IsRUFBbUM7QUFDbkMsRUFBSTtBQUdKLEdBQUssQ0FBQ0csUUFBUSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUNwQixHQUFLLENBQXFCWCxHQUFxQyxHQUFyQ0EsK0NBQVEsQ0FBQyxDQUFDO1FBQUNNLENBQUMsRUFBQyxHQUFHO1FBQUVNLENBQUMsRUFBQyxHQUFHO1FBQUVDLENBQUMsRUFBQyxHQUFHO1FBQUVDLENBQUMsRUFBQyxDQUFDO0lBQUEsQ0FBQyxHQUF2RFosS0FBSyxHQUFjRixHQUFxQyxLQUFqRGUsUUFBUSxHQUFJZixHQUFxQztJQUMvRCxHQUFLLENBQUNHLFdBQVcsR0FBSSxDQUFLLE9BQWNELE1BQU8sQ0FBbkJBLEtBQUssQ0FBQ0ksQ0FBQyxFQUFDLENBQUUsS0FBY0osTUFBTyxDQUFuQkEsS0FBSyxDQUFDVSxDQUFDLEVBQUMsQ0FBRSxLQUFjVixNQUFPLENBQW5CQSxLQUFLLENBQUNXLENBQUMsRUFBQyxDQUFFLEtBQVUsTUFBQyxDQUFUWCxLQUFLLENBQUNZLENBQUMsRUFBQyxDQUFDO0lBRXpFLEVBQTJDO0lBRTNDYixRQUFRLENBQUNDLEtBQUssRUFBRUMsV0FBVztJQUUzQixNQUFNOzhGQUVEYSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFtQjs7NEZBQy9CbEIsMkRBQWU7b0JBQUNHLEtBQUssRUFBRUEsS0FBSztvQkFBRWdCLFFBQVEsRUFBRUgsUUFBUTs7Ozs7OzRGQUNoREksQ0FBQzs7d0JBQUMsQ0FBRTt3QkFBQ2hCLFdBQVc7d0JBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFNM0IsQ0FBQztHQWxCR1EsUUFBUTtLQUFSQSxRQUFRO0FBcUJkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2xvcmZ1bC5qcz84MjkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJnYmFDb2xvclBpY2tlciB9IGZyb20gXCJyZWFjdC1jb2xvcmZ1bFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU3ludGhQYWQgPSAoZnVuY3Rpb24oY29sb3IsIGNvbG9yU3RyaW5nKSB7XHJcbiAgY29uc29sZS5sb2coXCJjYWxsZWQgc3ludGggZnVuY3Rpb25cIik7XHJcbiAgY29uc29sZS5sb2coY29sb3IucilcclxuXHJcbiAgLy9pbml0aWFsaXplIHN5bnRoIHZhcmlhYmxlc1xyXG5cclxuXHJcbiAgLy8gY29uc3RydWN0b3JcclxuICBsZXQgU3ludGhQYWQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xyXG4gICAgbXlBdWRpb0NvbnRleHQgPSBuZXcgd2luZG93LkF1ZGlvQ29udGV4dCgpO1xyXG5cclxuICB9O1xyXG5cclxuICAvLyByZXR1cm4gU3ludGhQYWQ7XHJcblxyXG5cclxufSkoKTtcclxuXHJcbi8vIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuLy8gICBsZXQgc3ludGhwYWQgPSBuZXcgU3ludGhQYWQoKTtcclxuLy8gfVxyXG5cclxuXHJcbmNvbnN0IFBhbGV0dGUwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSh7IHI6MjU1LCBnOjI1NSwgYjoyNTUsIGE6MX0pO1xyXG4gICAgY29uc3QgY29sb3JTdHJpbmcgPSBgcmdiYSgke2NvbG9yLnJ9LCAke2NvbG9yLmd9LCAke2NvbG9yLmJ9LCAke2NvbG9yLmF9KWA7XHJcbiAgICBcclxuICAgIC8vIHVzZUNvbnRhaW5lckJhY2tncm91bmQoY29sb3JTdHJpbmcpOyAgICBcclxuXHJcbiAgICBTeW50aFBhZChjb2xvciwgY29sb3JTdHJpbmcpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWxldHRlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPFJnYmFDb2xvclBpY2tlciBjb2xvcj17Y29sb3J9IG9uQ2hhbmdlPXtzZXRDb2xvcn0vPlxyXG4gICAgICAgICAgPHA+8J+OqCB7Y29sb3JTdHJpbmd9IDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgPC8+XHJcbiAgICAgIFxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFsZXR0ZTA7Il0sIm5hbWVzIjpbIlJnYmFDb2xvclBpY2tlciIsInVzZVN0YXRlIiwiU3ludGhQYWQiLCJjb2xvciIsImNvbG9yU3RyaW5nIiwiY29uc29sZSIsImxvZyIsInIiLCJ3aW5kb3ciLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJteUF1ZGlvQ29udGV4dCIsIlBhbGV0dGUwIiwiZyIsImIiLCJhIiwic2V0Q29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Colorful.js\n");

/***/ })

});