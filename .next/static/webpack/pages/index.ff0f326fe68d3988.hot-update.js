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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_colorful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-colorful */ \"./node_modules/react-colorful/dist/index.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Palette = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        r: 255,\n        g: 255,\n        b: 255,\n        a: 1\n    }), color = ref[0], setColor = ref[1];\n    var colorString = \"\";\n    for(var i in color){\n        colorString += color[i];\n        colorString += \" \";\n    }\n    ;\n    // let paletteStyle = {\n    //   background: rgba(colorString),\n    // };\n    // console.log(paletteStyle);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"palette-container\",\n            style: {\n                background: rgba(colorString)\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_colorful__WEBPACK_IMPORTED_MODULE_2__.RgbaColorPicker, {\n                    color: color,\n                    onChange: setColor\n                }, void 0, false, {\n                    fileName: \"E:\\\\File Storage\\\\code\\\\Synesthesia\\\\synesthesia\\\\components\\\\Colorful.js\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"🎨 \",\n                        colorString\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\File Storage\\\\code\\\\Synesthesia\\\\synesthesia\\\\components\\\\Colorful.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: paletteStyle[1]\n                }, void 0, false, {\n                    fileName: \"E:\\\\File Storage\\\\code\\\\Synesthesia\\\\synesthesia\\\\components\\\\Colorful.js\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\File Storage\\\\code\\\\Synesthesia\\\\synesthesia\\\\components\\\\Colorful.js\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false));\n};\n_s(Palette, \"Ke+rosWNHep16BVKTyMFN1NEqRE=\");\n_c = Palette;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Palette);\nvar _c;\n$RefreshReg$(_c, \"Palette\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbG9yZnVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0Q7QUFDaEI7OztBQUVoQyxHQUFLLENBQUNFLE9BQU8sR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFDckIsR0FBSyxDQUFxQkQsR0FBcUMsR0FBckNBLCtDQUFRLENBQUMsQ0FBQztRQUFDRSxDQUFDLEVBQUMsR0FBRztRQUFFQyxDQUFDLEVBQUMsR0FBRztRQUFFQyxDQUFDLEVBQUMsR0FBRztRQUFFQyxDQUFDLEVBQUMsQ0FBQztJQUFBLENBQUMsR0FBdkRDLEtBQUssR0FBY04sR0FBcUMsS0FBakRPLFFBQVEsR0FBSVAsR0FBcUM7SUFDL0QsR0FBRyxDQUFDUSxXQUFXLEdBQUcsQ0FBRTtJQUNwQixHQUFHLENBQUUsR0FBRyxDQUFDQyxDQUFDLElBQUlILEtBQUssQ0FBRSxDQUFDO1FBQ2xCRSxXQUFXLElBQUlGLEtBQUssQ0FBQ0csQ0FBQztRQUN0QkQsV0FBVyxJQUFJLENBQUc7SUFHdEIsQ0FBQzs7SUFFRCxFQUF1QjtJQUN2QixFQUFtQztJQUNuQyxFQUFLO0lBRUwsRUFBNkI7SUFFN0IsTUFBTTs4RkFFQ0UsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBbUI7WUFBQ0MsS0FBSyxFQUFFLENBQUNDO2dCQUFBQSxVQUFVLEVBQUVDLElBQUksQ0FBQ04sV0FBVztZQUFDLENBQUM7OzRGQUN0RVQsMkRBQWU7b0JBQUNPLEtBQUssRUFBRUEsS0FBSztvQkFBRVMsUUFBUSxFQUFFUixRQUFROzs7Ozs7NEZBQ2hEUyxDQUFDOzt3QkFBQyxDQUFFO3dCQUFDUixXQUFXOzs7Ozs7OzRGQUNoQlEsQ0FBQzs4QkFBRUMsWUFBWSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFNNUIsQ0FBQztHQTNCS2hCLE9BQU87S0FBUEEsT0FBTztBQTZCYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbG9yZnVsLmpzPzgyOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmdiYUNvbG9yUGlja2VyIH0gZnJvbSBcInJlYWN0LWNvbG9yZnVsXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBQYWxldHRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoeyByOjI1NSwgZzoyNTUsIGI6MjU1LCBhOjF9KTtcclxuICBsZXQgY29sb3JTdHJpbmcgPSBcIlwiO1xyXG4gIGZvciAobGV0IGkgaW4gY29sb3IpIHtcclxuICAgICAgY29sb3JTdHJpbmcgKz0gY29sb3JbaV07XHJcbiAgICAgIGNvbG9yU3RyaW5nICs9IFwiIFwiO1xyXG5cclxuXHJcbiAgfTtcclxuXHJcbiAgLy8gbGV0IHBhbGV0dGVTdHlsZSA9IHtcclxuICAvLyAgIGJhY2tncm91bmQ6IHJnYmEoY29sb3JTdHJpbmcpLFxyXG4gIC8vIH07XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHBhbGV0dGVTdHlsZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWxldHRlLWNvbnRhaW5lclwiIHN0eWxlPXt7YmFja2dyb3VuZDogcmdiYShjb2xvclN0cmluZyl9fT5cclxuICAgICAgICAgIDxSZ2JhQ29sb3JQaWNrZXIgY29sb3I9e2NvbG9yfSBvbkNoYW5nZT17c2V0Q29sb3J9Lz5cclxuICAgICAgICAgIDxwPvCfjqgge2NvbG9yU3RyaW5nfTwvcD5cclxuICAgICAgICAgIDxwPntwYWxldHRlU3R5bGVbMV19PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhbGV0dGUiXSwibmFtZXMiOlsiUmdiYUNvbG9yUGlja2VyIiwidXNlU3RhdGUiLCJQYWxldHRlIiwiciIsImciLCJiIiwiYSIsImNvbG9yIiwic2V0Q29sb3IiLCJjb2xvclN0cmluZyIsImkiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmQiLCJyZ2JhIiwib25DaGFuZ2UiLCJwIiwicGFsZXR0ZVN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Colorful.js\n");

/***/ })

});