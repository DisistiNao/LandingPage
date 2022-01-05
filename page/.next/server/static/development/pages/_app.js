module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var styles_global_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/global.styles */ \"./src/styles/global.styles.ts\");\nvar _jsxFileName = \"/home/gabriel/Programacao/landing-page/page/src/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n    theme: styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"meta\", {\n    name: \"theme-color\",\n    content: \"#06092B\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"shortcut icon\",\n    href: \"/img/icon-512.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"apple-touch-icon\",\n    href: \"/img/icon-512.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  })), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__[\"NextSeo\"], {\n    title: \"React Avan\\xE7ado - Crie aplica\\xE7\\xF5es reais com NextJS, GraphQL e mais.\",\n    description: \"Aprenda a criar um Ecommerce completo, indo do Backend ao Frontend utilizando tecnologias como ReactJS, NextJS, Strapi, GraphQL, Apollo e muito mais!\",\n    canonical: \"https://reactavancado.com.br/\",\n    openGraph: {\n      url: 'https://reactavancado.com.br/',\n      title: 'React Avançado - Crie aplicações reais com NextJS, GraphQL e mais.',\n      description: 'Aprenda a criar um Ecommerce completo, indo do Backend ao Frontend utilizando tecnologias como ReactJS, NextJS, Strapi, GraphQL, Apollo e muito mais!',\n      images: [{\n        url: 'https://reactavancado.com.br/img/cover.png'\n      }],\n      site_name: 'React Avançado',\n      locale: 'pt_BR'\n    },\n    twitter: {\n      handle: '@Willian_justen',\n      site: '@site',\n      cardType: 'summary_large_image'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }), __jsx(styles_global_styles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }), __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJzaXRlX25hbWUiLCJsb2NhbGUiLCJoYW5kbGUiLCJzaXRlIiwiY2FyZFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBd0M7QUFDbEQsU0FDRSxNQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFQyxvREFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sT0FBRyxFQUFDLGVBQVY7QUFBMEIsUUFBSSxFQUFDLG1CQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFNLE9BQUcsRUFBQyxrQkFBVjtBQUE2QixRQUFJLEVBQUMsbUJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLEVBTUUsTUFBQyxnREFBRDtBQUNFLFNBQUssRUFBQyw2RUFEUjtBQUVFLGVBQVcsRUFBQyx1SkFGZDtBQUdFLGFBQVMsRUFBQywrQkFIWjtBQUlFLGFBQVMsRUFBRTtBQUNUQyxTQUFHLEVBQUUsK0JBREk7QUFFVEMsV0FBSyxFQUNILG9FQUhPO0FBSVRDLGlCQUFXLEVBQ1QsdUpBTE87QUFNVEMsWUFBTSxFQUFFLENBQUM7QUFBRUgsV0FBRyxFQUFFO0FBQVAsT0FBRCxDQU5DO0FBT1RJLGVBQVMsRUFBRSxnQkFQRjtBQVFUQyxZQUFNLEVBQUU7QUFSQyxLQUpiO0FBY0UsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxpQkFERDtBQUVQQyxVQUFJLEVBQUUsT0FGQztBQUdQQyxjQUFRLEVBQUU7QUFISCxLQWRYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQTBCRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQkYsRUEyQkUsTUFBQyxTQUFELGVBQWVWLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTNCRixDQURGO0FBK0JELENBaENEOztBQWtDZUYsa0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgdGhlbWUgZnJvbSAnc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gJ3N0eWxlcy9nbG9iYWwuc3R5bGVzJ1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwNjA5MkJcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9pbWcvaWNvbi01MTIucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvaW1nL2ljb24tNTEyLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmV4dFNlb1xuICAgICAgICB0aXRsZT1cIlJlYWN0IEF2YW7Dp2FkbyAtIENyaWUgYXBsaWNhw6fDtWVzIHJlYWlzIGNvbSBOZXh0SlMsIEdyYXBoUUwgZSBtYWlzLlwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiQXByZW5kYSBhIGNyaWFyIHVtIEVjb21tZXJjZSBjb21wbGV0bywgaW5kbyBkbyBCYWNrZW5kIGFvIEZyb250ZW5kIHV0aWxpemFuZG8gdGVjbm9sb2dpYXMgY29tbyBSZWFjdEpTLCBOZXh0SlMsIFN0cmFwaSwgR3JhcGhRTCwgQXBvbGxvIGUgbXVpdG8gbWFpcyFcIlxuICAgICAgICBjYW5vbmljYWw9XCJodHRwczovL3JlYWN0YXZhbmNhZG8uY29tLmJyL1wiXG4gICAgICAgIG9wZW5HcmFwaD17e1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcmVhY3RhdmFuY2Fkby5jb20uYnIvJyxcbiAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICdSZWFjdCBBdmFuw6dhZG8gLSBDcmllIGFwbGljYcOnw7VlcyByZWFpcyBjb20gTmV4dEpTLCBHcmFwaFFMIGUgbWFpcy4nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ0FwcmVuZGEgYSBjcmlhciB1bSBFY29tbWVyY2UgY29tcGxldG8sIGluZG8gZG8gQmFja2VuZCBhbyBGcm9udGVuZCB1dGlsaXphbmRvIHRlY25vbG9naWFzIGNvbW8gUmVhY3RKUywgTmV4dEpTLCBTdHJhcGksIEdyYXBoUUwsIEFwb2xsbyBlIG11aXRvIG1haXMhJyxcbiAgICAgICAgICBpbWFnZXM6IFt7IHVybDogJ2h0dHBzOi8vcmVhY3RhdmFuY2Fkby5jb20uYnIvaW1nL2NvdmVyLnBuZycgfV0sXG4gICAgICAgICAgc2l0ZV9uYW1lOiAnUmVhY3QgQXZhbsOnYWRvJyxcbiAgICAgICAgICBsb2NhbGU6ICdwdF9CUidcbiAgICAgICAgfX1cbiAgICAgICAgdHdpdHRlcj17e1xuICAgICAgICAgIGhhbmRsZTogJ0BXaWxsaWFuX2p1c3RlbicsXG4gICAgICAgICAgc2l0ZTogJ0BzaXRlJyxcbiAgICAgICAgICBjYXJkVHlwZTogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.styles.ts":
/*!*************************************!*\
  !*** ./src/styles/global.styles.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  @font-face {\n    font-family: 'Poppins';\n    src: url('/fonts/poppins-v9-latin-regular.woff2');\n    font-weight: 400;\n    font-style: normal;\n    font-display: swap;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n    vertical-align: baseline;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  ${({\n  theme\n}) => styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n    html {\n      font-family: ${theme.font.family};\n      font-size: 62.5%;\n      scroll-behavior: smooth;\n    }\n\n    body {\n      background-color: ${theme.colors.mainBg};\n      color: ${theme.colors.white};\n      font-size: ${theme.font.sizes.small};\n    }\n  `}\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zdHlsZXMudHM/N2EyNCJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJjc3MiLCJmb250IiwiZmFtaWx5IiwiY29sb3JzIiwibWFpbkJnIiwid2hpdGUiLCJzaXplcyIsInNtYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJsQyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQyxxREFBSTs7cUJBRUZELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxNQUFPOzs7Ozs7MEJBTWJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxNQUFPO2VBQy9CTCxLQUFLLENBQUNJLE1BQU4sQ0FBYUUsS0FBTTttQkFDZk4sS0FBSyxDQUFDRSxJQUFOLENBQVdLLEtBQVgsQ0FBaUJDLEtBQU07O0dBRXRDO0NBL0JKO0FBa0NlViwwRUFBZiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2xvYmFsLnN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBzcmM6IHVybCgnL2ZvbnRzL3BvcHBpbnMtdjktbGF0aW4tcmVndWxhci53b2ZmMicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgfVxuXG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB9XG5cbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgaHRtbCB7XG4gICAgICBmb250LWZhbWlseTogJHt0aGVtZS5mb250LmZhbWlseX07XG4gICAgICBmb250LXNpemU6IDYyLjUlO1xuICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgfVxuXG4gICAgYm9keSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5tYWluQmd9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemVzLnNtYWxsfTtcbiAgICB9XG4gIGB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/global.styles.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  grid: {\n    container: '130rem',\n    gutter: '3.2rem'\n  },\n  border: {\n    radius: '0.4rem'\n  },\n  font: {\n    family: \"Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\",\n    bold: 600,\n    sizes: {\n      xxsmall: '1.4rem',\n      xsmall: '1.6rem',\n      small: '1.8rem',\n      medium: '2.2rem',\n      large: '2.6rem',\n      xlarge: '3.4rem',\n      xxlarge: '5.2rem'\n    }\n  },\n  colors: {\n    primary: '#F231A5',\n    primaryHover: '#E20E8D',\n    secondary: '#3CD3C1',\n    mainBg: '#030518',\n    boxBg: '#FAFAFA',\n    texts: '#030517',\n    white: '#FFFFFF',\n    black: '#000000',\n    gray: '#7B7373'\n  },\n  spacings: {\n    xxsmall: '0.8rem',\n    xsmall: '1.6rem',\n    small: '2.4rem',\n    medium: '3.2rem',\n    large: '6.0rem',\n    xlarge: '6.4rem',\n    xxlarge: '12.8rem'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzk0Y2UiXSwibmFtZXMiOlsiZ3JpZCIsImNvbnRhaW5lciIsImd1dHRlciIsImJvcmRlciIsInJhZGl1cyIsImZvbnQiLCJmYW1pbHkiLCJib2xkIiwic2l6ZXMiLCJ4eHNtYWxsIiwieHNtYWxsIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsInhsYXJnZSIsInh4bGFyZ2UiLCJjb2xvcnMiLCJwcmltYXJ5IiwicHJpbWFyeUhvdmVyIiwic2Vjb25kYXJ5IiwibWFpbkJnIiwiYm94QmciLCJ0ZXh0cyIsIndoaXRlIiwiYmxhY2siLCJncmF5Iiwic3BhY2luZ3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDYkEsTUFBSSxFQUFFO0FBQ0pDLGFBQVMsRUFBRSxRQURQO0FBRUpDLFVBQU0sRUFBRTtBQUZKLEdBRE87QUFLYkMsUUFBTSxFQUFFO0FBQ05DLFVBQU0sRUFBRTtBQURGLEdBTEs7QUFRYkMsTUFBSSxFQUFFO0FBQ0pDLFVBQU0sRUFDSixzSUFGRTtBQUdKQyxRQUFJLEVBQUUsR0FIRjtBQUlKQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLFFBREo7QUFFTEMsWUFBTSxFQUFFLFFBRkg7QUFHTEMsV0FBSyxFQUFFLFFBSEY7QUFJTEMsWUFBTSxFQUFFLFFBSkg7QUFLTEMsV0FBSyxFQUFFLFFBTEY7QUFNTEMsWUFBTSxFQUFFLFFBTkg7QUFPTEMsYUFBTyxFQUFFO0FBUEo7QUFKSCxHQVJPO0FBc0JiQyxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFFLFNBREg7QUFFTkMsZ0JBQVksRUFBRSxTQUZSO0FBR05DLGFBQVMsRUFBRSxTQUhMO0FBSU5DLFVBQU0sRUFBRSxTQUpGO0FBS05DLFNBQUssRUFBRSxTQUxEO0FBTU5DLFNBQUssRUFBRSxTQU5EO0FBT05DLFNBQUssRUFBRSxTQVBEO0FBUU5DLFNBQUssRUFBRSxTQVJEO0FBU05DLFFBQUksRUFBRTtBQVRBLEdBdEJLO0FBaUNiQyxVQUFRLEVBQUU7QUFDUmpCLFdBQU8sRUFBRSxRQUREO0FBRVJDLFVBQU0sRUFBRSxRQUZBO0FBR1JDLFNBQUssRUFBRSxRQUhDO0FBSVJDLFVBQU0sRUFBRSxRQUpBO0FBS1JDLFNBQUssRUFBRSxRQUxDO0FBTVJDLFVBQU0sRUFBRSxRQU5BO0FBT1JDLFdBQU8sRUFBRTtBQVBEO0FBakNHLENBQWYiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBncmlkOiB7XG4gICAgY29udGFpbmVyOiAnMTMwcmVtJyxcbiAgICBndXR0ZXI6ICczLjJyZW0nXG4gIH0sXG4gIGJvcmRlcjoge1xuICAgIHJhZGl1czogJzAuNHJlbSdcbiAgfSxcbiAgZm9udDoge1xuICAgIGZhbWlseTpcbiAgICAgIFwiUG9wcGlucywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmXCIsXG4gICAgYm9sZDogNjAwLFxuICAgIHNpemVzOiB7XG4gICAgICB4eHNtYWxsOiAnMS40cmVtJyxcbiAgICAgIHhzbWFsbDogJzEuNnJlbScsXG4gICAgICBzbWFsbDogJzEuOHJlbScsXG4gICAgICBtZWRpdW06ICcyLjJyZW0nLFxuICAgICAgbGFyZ2U6ICcyLjZyZW0nLFxuICAgICAgeGxhcmdlOiAnMy40cmVtJyxcbiAgICAgIHh4bGFyZ2U6ICc1LjJyZW0nXG4gICAgfVxuICB9LFxuICBjb2xvcnM6IHtcbiAgICBwcmltYXJ5OiAnI0YyMzFBNScsXG4gICAgcHJpbWFyeUhvdmVyOiAnI0UyMEU4RCcsXG4gICAgc2Vjb25kYXJ5OiAnIzNDRDNDMScsXG4gICAgbWFpbkJnOiAnIzAzMDUxOCcsXG4gICAgYm94Qmc6ICcjRkFGQUZBJyxcbiAgICB0ZXh0czogJyMwMzA1MTcnLFxuICAgIHdoaXRlOiAnI0ZGRkZGRicsXG4gICAgYmxhY2s6ICcjMDAwMDAwJyxcbiAgICBncmF5OiAnIzdCNzM3MydcbiAgfSxcbiAgc3BhY2luZ3M6IHtcbiAgICB4eHNtYWxsOiAnMC44cmVtJyxcbiAgICB4c21hbGw6ICcxLjZyZW0nLFxuICAgIHNtYWxsOiAnMi40cmVtJyxcbiAgICBtZWRpdW06ICczLjJyZW0nLFxuICAgIGxhcmdlOiAnNi4wcmVtJyxcbiAgICB4bGFyZ2U6ICc2LjRyZW0nLFxuICAgIHh4bGFyZ2U6ICcxMi44cmVtJ1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-seo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlb1wiPzJjYmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1zZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-seo\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });