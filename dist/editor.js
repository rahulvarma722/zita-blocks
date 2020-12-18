/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (true) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (false) {} else {
  module.exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './cjs/react-dom.development.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
}


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js ***!
  \************************************************************************/
/*! exports provided: SortableContainer, sortableContainer, SortableElement, sortableElement, SortableHandle, sortableHandle, arrayMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableContainer", function() { return sortableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortableContainer", function() { return sortableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableElement", function() { return sortableElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortableElement", function() { return sortableElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableHandle", function() { return sortableHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortableHandle", function() { return sortableHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMove", function() { return arrayMove; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
















var Manager = function () {
  function Manager() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Manager);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(this, "refs", {});
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Manager, [{
    key: "add",
    value: function add(collection, ref) {
      if (!this.refs[collection]) {
        this.refs[collection] = [];
      }

      this.refs[collection].push(ref);
    }
  }, {
    key: "remove",
    value: function remove(collection, ref) {
      var index = this.getIndex(collection, ref);

      if (index !== -1) {
        this.refs[collection].splice(index, 1);
      }
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "getActive",
    value: function getActive() {
      var _this = this;

      return this.refs[this.active.collection].find(function (_ref) {
        var node = _ref.node;
        return node.sortableInfo.index == _this.active.index;
      });
    }
  }, {
    key: "getIndex",
    value: function getIndex(collection, ref) {
      return this.refs[collection].indexOf(ref);
    }
  }, {
    key: "getOrderedRefs",
    value: function getOrderedRefs() {
      var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.active.collection;
      return this.refs[collection].sort(sortByIndex);
    }
  }]);

  return Manager;
}();

function sortByIndex(_ref2, _ref3) {
  var index1 = _ref2.node.sortableInfo.index;
  var index2 = _ref3.node.sortableInfo.index;
  return index1 - index2;
}

function arrayMove(array, from, to) {
  if (true) {
    if (typeof console !== 'undefined') {
      console.warn("Deprecation warning: arrayMove will no longer be exported by 'react-sortable-hoc' in the next major release. Please install the `array-move` package locally instead. https://www.npmjs.com/package/array-move");
    }
  }

  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}
function omit(obj, keysToOmit) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}
var events = {
  end: ['touchend', 'touchcancel', 'mouseup'],
  move: ['touchmove', 'mousemove'],
  start: ['touchstart', 'mousedown']
};
var vendorPrefix = function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return '';
  }

  var styles = window.getComputedStyle(document.documentElement, '') || ['-moz-hidden-iframe'];
  var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];

  switch (pre) {
    case 'ms':
      return 'ms';

    default:
      return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
  }
}();
function setInlineStyles(node, styles) {
  Object.keys(styles).forEach(function (key) {
    node.style[key] = styles[key];
  });
}
function setTranslate3d(node, translate) {
  node.style["".concat(vendorPrefix, "Transform")] = translate == null ? '' : "translate3d(".concat(translate.x, "px,").concat(translate.y, "px,0)");
}
function setTransitionDuration(node, duration) {
  node.style["".concat(vendorPrefix, "TransitionDuration")] = duration == null ? '' : "".concat(duration, "ms");
}
function closest(el, fn) {
  while (el) {
    if (fn(el)) {
      return el;
    }

    el = el.parentNode;
  }

  return null;
}
function limit(min, max, value) {
  return Math.max(min, Math.min(value, max));
}

function getPixelValue(stringValue) {
  if (stringValue.substr(-2) === 'px') {
    return parseFloat(stringValue);
  }

  return 0;
}

function getElementMargin(element) {
  var style = window.getComputedStyle(element);
  return {
    bottom: getPixelValue(style.marginBottom),
    left: getPixelValue(style.marginLeft),
    right: getPixelValue(style.marginRight),
    top: getPixelValue(style.marginTop)
  };
}
function provideDisplayName(prefix, Component$$1) {
  var componentName = Component$$1.displayName || Component$$1.name;
  return componentName ? "".concat(prefix, "(").concat(componentName, ")") : prefix;
}
function getScrollAdjustedBoundingClientRect(node, scrollDelta) {
  var boundingClientRect = node.getBoundingClientRect();
  return {
    top: boundingClientRect.top + scrollDelta.top,
    left: boundingClientRect.left + scrollDelta.left
  };
}
function getPosition(event) {
  if (event.touches && event.touches.length) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY
    };
  } else if (event.changedTouches && event.changedTouches.length) {
    return {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };
  } else {
    return {
      x: event.pageX,
      y: event.pageY
    };
  }
}
function isTouchEvent(event) {
  return event.touches && event.touches.length || event.changedTouches && event.changedTouches.length;
}
function getEdgeOffset(node, parent) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    left: 0,
    top: 0
  };

  if (!node) {
    return undefined;
  }

  var nodeOffset = {
    left: offset.left + node.offsetLeft,
    top: offset.top + node.offsetTop
  };

  if (node.parentNode === parent) {
    return nodeOffset;
  }

  return getEdgeOffset(node.parentNode, parent, nodeOffset);
}
function getTargetIndex(newIndex, prevIndex, oldIndex) {
  if (newIndex < oldIndex && newIndex > prevIndex) {
    return newIndex - 1;
  } else if (newIndex > oldIndex && newIndex < prevIndex) {
    return newIndex + 1;
  } else {
    return newIndex;
  }
}
function getLockPixelOffset(_ref) {
  var lockOffset = _ref.lockOffset,
      width = _ref.width,
      height = _ref.height;
  var offsetX = lockOffset;
  var offsetY = lockOffset;
  var unit = 'px';

  if (typeof lockOffset === 'string') {
    var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);
    invariant__WEBPACK_IMPORTED_MODULE_13___default()(match !== null, 'lockOffset value should be a number or a string of a ' + 'number followed by "px" or "%". Given %s', lockOffset);
    offsetX = parseFloat(lockOffset);
    offsetY = parseFloat(lockOffset);
    unit = match[1];
  }

  invariant__WEBPACK_IMPORTED_MODULE_13___default()(isFinite(offsetX) && isFinite(offsetY), 'lockOffset value should be a finite. Given %s', lockOffset);

  if (unit === '%') {
    offsetX = offsetX * width / 100;
    offsetY = offsetY * height / 100;
  }

  return {
    x: offsetX,
    y: offsetY
  };
}
function getLockPixelOffsets(_ref2) {
  var height = _ref2.height,
      width = _ref2.width,
      lockOffset = _ref2.lockOffset;
  var offsets = Array.isArray(lockOffset) ? lockOffset : [lockOffset, lockOffset];
  invariant__WEBPACK_IMPORTED_MODULE_13___default()(offsets.length === 2, 'lockOffset prop of SortableContainer should be a single ' + 'value or an array of exactly two values. Given %s', lockOffset);

  var _offsets = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(offsets, 2),
      minLockOffset = _offsets[0],
      maxLockOffset = _offsets[1];

  return [getLockPixelOffset({
    height: height,
    lockOffset: minLockOffset,
    width: width
  }), getLockPixelOffset({
    height: height,
    lockOffset: maxLockOffset,
    width: width
  })];
}

function isScrollable(el) {
  var computedStyle = window.getComputedStyle(el);
  var overflowRegex = /(auto|scroll)/;
  var properties = ['overflow', 'overflowX', 'overflowY'];
  return properties.find(function (property) {
    return overflowRegex.test(computedStyle[property]);
  });
}

function getScrollingParent(el) {
  if (!(el instanceof HTMLElement)) {
    return null;
  } else if (isScrollable(el)) {
    return el;
  } else {
    return getScrollingParent(el.parentNode);
  }
}
function getContainerGridGap(element) {
  var style = window.getComputedStyle(element);

  if (style.display === 'grid') {
    return {
      x: getPixelValue(style.gridColumnGap),
      y: getPixelValue(style.gridRowGap)
    };
  }

  return {
    x: 0,
    y: 0
  };
}
var KEYCODE = {
  TAB: 9,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var NodeType = {
  Anchor: 'A',
  Button: 'BUTTON',
  Canvas: 'CANVAS',
  Input: 'INPUT',
  Option: 'OPTION',
  Textarea: 'TEXTAREA',
  Select: 'SELECT'
};
function cloneNode(node) {
  var selector = 'input, textarea, select, canvas, [contenteditable]';
  var fields = node.querySelectorAll(selector);
  var clonedNode = node.cloneNode(true);

  var clonedFields = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_14__["default"])(clonedNode.querySelectorAll(selector));

  clonedFields.forEach(function (field, i) {
    if (field.type !== 'file') {
      field.value = fields[i].value;
    }

    if (field.type === 'radio' && field.name) {
      field.name = "__sortableClone__".concat(field.name);
    }

    if (field.tagName === NodeType.Canvas && fields[i].width > 0 && fields[i].height > 0) {
      var destCtx = field.getContext('2d');
      destCtx.drawImage(fields[i], 0, 0);
    }
  });
  return clonedNode;
}

function sortableHandle(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableHandle, _React$Component);

    function WithSortableHandle() {
      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableHandle);

      return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableHandle).apply(this, arguments));
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableHandle, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var node = Object(react_dom__WEBPACK_IMPORTED_MODULE_12__["findDOMNode"])(this);
        node.sortableHandle = true;
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_13___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;
        return Object(react__WEBPACK_IMPORTED_MODULE_10__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, this.props));
      }
    }]);

    return WithSortableHandle;
  }(react__WEBPACK_IMPORTED_MODULE_10__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableHandle', WrappedComponent)), _temp;
}
function isSortableHandle(node) {
  return node.sortableHandle != null;
}

var AutoScroller = function () {
  function AutoScroller(container, onScrollCallback) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AutoScroller);

    this.container = container;
    this.onScrollCallback = onScrollCallback;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AutoScroller, [{
    key: "clear",
    value: function clear() {
      if (this.interval == null) {
        return;
      }

      clearInterval(this.interval);
      this.interval = null;
    }
  }, {
    key: "update",
    value: function update(_ref) {
      var _this = this;

      var translate = _ref.translate,
          minTranslate = _ref.minTranslate,
          maxTranslate = _ref.maxTranslate,
          width = _ref.width,
          height = _ref.height;
      var direction = {
        x: 0,
        y: 0
      };
      var speed = {
        x: 1,
        y: 1
      };
      var acceleration = {
        x: 10,
        y: 10
      };
      var _this$container = this.container,
          scrollTop = _this$container.scrollTop,
          scrollLeft = _this$container.scrollLeft,
          scrollHeight = _this$container.scrollHeight,
          scrollWidth = _this$container.scrollWidth,
          clientHeight = _this$container.clientHeight,
          clientWidth = _this$container.clientWidth;
      var isTop = scrollTop === 0;
      var isBottom = scrollHeight - scrollTop - clientHeight === 0;
      var isLeft = scrollLeft === 0;
      var isRight = scrollWidth - scrollLeft - clientWidth === 0;

      if (translate.y >= maxTranslate.y - height / 2 && !isBottom) {
        direction.y = 1;
        speed.y = acceleration.y * Math.abs((maxTranslate.y - height / 2 - translate.y) / height);
      } else if (translate.x >= maxTranslate.x - width / 2 && !isRight) {
        direction.x = 1;
        speed.x = acceleration.x * Math.abs((maxTranslate.x - width / 2 - translate.x) / width);
      } else if (translate.y <= minTranslate.y + height / 2 && !isTop) {
        direction.y = -1;
        speed.y = acceleration.y * Math.abs((translate.y - height / 2 - minTranslate.y) / height);
      } else if (translate.x <= minTranslate.x + width / 2 && !isLeft) {
        direction.x = -1;
        speed.x = acceleration.x * Math.abs((translate.x - width / 2 - minTranslate.x) / width);
      }

      if (this.interval) {
        this.clear();
        this.isAutoScrolling = false;
      }

      if (direction.x !== 0 || direction.y !== 0) {
        this.interval = setInterval(function () {
          _this.isAutoScrolling = true;
          var offset = {
            left: speed.x * direction.x,
            top: speed.y * direction.y
          };
          _this.container.scrollTop += offset.top;
          _this.container.scrollLeft += offset.left;

          _this.onScrollCallback(offset);
        }, 5);
      }
    }
  }]);

  return AutoScroller;
}();

function defaultGetHelperDimensions(_ref) {
  var node = _ref.node;
  return {
    height: node.offsetHeight,
    width: node.offsetWidth
  };
}

function defaultShouldCancelStart(event) {
  var interactiveElements = [NodeType.Input, NodeType.Textarea, NodeType.Select, NodeType.Option, NodeType.Button];

  if (interactiveElements.indexOf(event.target.tagName) !== -1) {
    return true;
  }

  if (closest(event.target, function (el) {
    return el.contentEditable === 'true';
  })) {
    return true;
  }

  return false;
}

var propTypes = {
  axis: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOf(['x', 'y', 'xy']),
  contentWindow: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any,
  disableAutoscroll: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  distance: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  getHelperDimensions: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  helperClass: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  helperContainer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func, typeof HTMLElement === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any : prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.instanceOf(HTMLElement)]),
  hideSortableGhost: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  keyboardSortingTransitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  lockAxis: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  lockOffset: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string]))]),
  lockToContainerEdges: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  onSortEnd: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onSortMove: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onSortOver: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onSortStart: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  pressDelay: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  pressThreshold: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  keyCodes: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    lift: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    drop: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    cancel: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    up: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    down: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number)
  }),
  shouldCancelStart: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  updateBeforeSortStart: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  useDragHandle: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  useWindowAsScrollContainer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool
};
var defaultKeyCodes = {
  lift: [KEYCODE.SPACE],
  drop: [KEYCODE.SPACE],
  cancel: [KEYCODE.ESC],
  up: [KEYCODE.UP, KEYCODE.LEFT],
  down: [KEYCODE.DOWN, KEYCODE.RIGHT]
};
var defaultProps = {
  axis: 'y',
  disableAutoscroll: false,
  distance: 0,
  getHelperDimensions: defaultGetHelperDimensions,
  hideSortableGhost: true,
  lockOffset: '50%',
  lockToContainerEdges: false,
  pressDelay: 0,
  pressThreshold: 5,
  keyCodes: defaultKeyCodes,
  shouldCancelStart: defaultShouldCancelStart,
  transitionDuration: 300,
  useWindowAsScrollContainer: false
};
var omittedProps = Object.keys(propTypes);
function validateProps(props) {
  invariant__WEBPACK_IMPORTED_MODULE_13___default()(!(props.distance && props.pressDelay), 'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.');
}

function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }

  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }

  return finalizer(false, value);
}
function sortableContainer(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableContainer, _React$Component);

    function WithSortableContainer(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableContainer);

      _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableContainer).call(this, props));

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "state", {});

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleStart", function (event) {
        var _this$props = _this.props,
            distance = _this$props.distance,
            shouldCancelStart = _this$props.shouldCancelStart;

        if (event.button === 2 || shouldCancelStart(event)) {
          return;
        }

        _this.touched = true;
        _this.position = getPosition(event);
        var node = closest(event.target, function (el) {
          return el.sortableInfo != null;
        });

        if (node && node.sortableInfo && _this.nodeIsChild(node) && !_this.state.sorting) {
          var useDragHandle = _this.props.useDragHandle;
          var _node$sortableInfo = node.sortableInfo,
              index = _node$sortableInfo.index,
              collection = _node$sortableInfo.collection,
              disabled = _node$sortableInfo.disabled;

          if (disabled) {
            return;
          }

          if (useDragHandle && !closest(event.target, isSortableHandle)) {
            return;
          }

          _this.manager.active = {
            collection: collection,
            index: index
          };

          if (!isTouchEvent(event) && event.target.tagName === NodeType.Anchor) {
            event.preventDefault();
          }

          if (!distance) {
            if (_this.props.pressDelay === 0) {
              _this.handlePress(event);
            } else {
              _this.pressTimer = setTimeout(function () {
                return _this.handlePress(event);
              }, _this.props.pressDelay);
            }
          }
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "nodeIsChild", function (node) {
        return node.sortableInfo.manager === _this.manager;
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleMove", function (event) {
        var _this$props2 = _this.props,
            distance = _this$props2.distance,
            pressThreshold = _this$props2.pressThreshold;

        if (!_this.state.sorting && _this.touched && !_this._awaitingUpdateBeforeSortStart) {
          var position = getPosition(event);
          var delta = {
            x: _this.position.x - position.x,
            y: _this.position.y - position.y
          };
          var combinedDelta = Math.abs(delta.x) + Math.abs(delta.y);
          _this.delta = delta;

          if (!distance && (!pressThreshold || combinedDelta >= pressThreshold)) {
            clearTimeout(_this.cancelTimer);
            _this.cancelTimer = setTimeout(_this.cancel, 0);
          } else if (distance && combinedDelta >= distance && _this.manager.isActive()) {
            _this.handlePress(event);
          }
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleEnd", function () {
        _this.touched = false;

        _this.cancel();
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "cancel", function () {
        var distance = _this.props.distance;
        var sorting = _this.state.sorting;

        if (!sorting) {
          if (!distance) {
            clearTimeout(_this.pressTimer);
          }

          _this.manager.active = null;
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handlePress", function (event) {
        try {
          var active = _this.manager.getActive();

          var _temp6 = function () {
            if (active) {
              var _temp7 = function _temp7() {
                var index = _node.sortableInfo.index;
                var margin = getElementMargin(_node);
                var gridGap = getContainerGridGap(_this.container);

                var containerBoundingRect = _this.scrollContainer.getBoundingClientRect();

                var dimensions = _getHelperDimensions({
                  index: index,
                  node: _node,
                  collection: _collection
                });

                _this.node = _node;
                _this.margin = margin;
                _this.gridGap = gridGap;
                _this.width = dimensions.width;
                _this.height = dimensions.height;
                _this.marginOffset = {
                  x: _this.margin.left + _this.margin.right + _this.gridGap.x,
                  y: Math.max(_this.margin.top, _this.margin.bottom, _this.gridGap.y)
                };
                _this.boundingClientRect = _node.getBoundingClientRect();
                _this.containerBoundingRect = containerBoundingRect;
                _this.index = index;
                _this.newIndex = index;
                _this.axis = {
                  x: _axis.indexOf('x') >= 0,
                  y: _axis.indexOf('y') >= 0
                };
                _this.offsetEdge = getEdgeOffset(_node, _this.container);

                if (_isKeySorting) {
                  _this.initialOffset = getPosition(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, event, {
                    pageX: _this.boundingClientRect.left,
                    pageY: _this.boundingClientRect.top
                  }));
                } else {
                  _this.initialOffset = getPosition(event);
                }

                _this.initialScroll = {
                  left: _this.scrollContainer.scrollLeft,
                  top: _this.scrollContainer.scrollTop
                };
                _this.initialWindowScroll = {
                  left: window.pageXOffset,
                  top: window.pageYOffset
                };
                _this.helper = _this.helperContainer.appendChild(cloneNode(_node));
                setInlineStyles(_this.helper, {
                  boxSizing: 'border-box',
                  height: "".concat(_this.height, "px"),
                  left: "".concat(_this.boundingClientRect.left - margin.left, "px"),
                  pointerEvents: 'none',
                  position: 'fixed',
                  top: "".concat(_this.boundingClientRect.top - margin.top, "px"),
                  width: "".concat(_this.width, "px")
                });

                if (_isKeySorting) {
                  _this.helper.focus();
                }

                if (_hideSortableGhost) {
                  _this.sortableGhost = _node;
                  setInlineStyles(_node, {
                    opacity: 0,
                    visibility: 'hidden'
                  });
                }

                _this.minTranslate = {};
                _this.maxTranslate = {};

                if (_isKeySorting) {
                  var _ref = _useWindowAsScrollContainer ? {
                    top: 0,
                    left: 0,
                    width: _this.contentWindow.innerWidth,
                    height: _this.contentWindow.innerHeight
                  } : _this.containerBoundingRect,
                      containerTop = _ref.top,
                      containerLeft = _ref.left,
                      containerWidth = _ref.width,
                      containerHeight = _ref.height;

                  var containerBottom = containerTop + containerHeight;
                  var containerRight = containerLeft + containerWidth;

                  if (_this.axis.x) {
                    _this.minTranslate.x = containerLeft - _this.boundingClientRect.left;
                    _this.maxTranslate.x = containerRight - (_this.boundingClientRect.left + _this.width);
                  }

                  if (_this.axis.y) {
                    _this.minTranslate.y = containerTop - _this.boundingClientRect.top;
                    _this.maxTranslate.y = containerBottom - (_this.boundingClientRect.top + _this.height);
                  }
                } else {
                  if (_this.axis.x) {
                    _this.minTranslate.x = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.left) - _this.boundingClientRect.left - _this.width / 2;
                    _this.maxTranslate.x = (_useWindowAsScrollContainer ? _this.contentWindow.innerWidth : containerBoundingRect.left + containerBoundingRect.width) - _this.boundingClientRect.left - _this.width / 2;
                  }

                  if (_this.axis.y) {
                    _this.minTranslate.y = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.top) - _this.boundingClientRect.top - _this.height / 2;
                    _this.maxTranslate.y = (_useWindowAsScrollContainer ? _this.contentWindow.innerHeight : containerBoundingRect.top + containerBoundingRect.height) - _this.boundingClientRect.top - _this.height / 2;
                  }
                }

                if (_helperClass) {
                  _helperClass.split(' ').forEach(function (className) {
                    return _this.helper.classList.add(className);
                  });
                }

                _this.listenerNode = event.touches ? _node : _this.contentWindow;

                if (_isKeySorting) {
                  _this.listenerNode.addEventListener('wheel', _this.handleKeyEnd, true);

                  _this.listenerNode.addEventListener('mousedown', _this.handleKeyEnd, true);

                  _this.listenerNode.addEventListener('keydown', _this.handleKeyDown);
                } else {
                  events.move.forEach(function (eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortMove, false);
                  });
                  events.end.forEach(function (eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortEnd, false);
                  });
                }

                _this.setState({
                  sorting: true,
                  sortingIndex: index
                });

                if (_onSortStart) {
                  _onSortStart({
                    node: _node,
                    index: index,
                    collection: _collection,
                    isKeySorting: _isKeySorting,
                    nodes: _this.manager.getOrderedRefs(),
                    helper: _this.helper
                  }, event);
                }

                if (_isKeySorting) {
                  _this.keyMove(0);
                }
              };

              var _this$props3 = _this.props,
                  _axis = _this$props3.axis,
                  _getHelperDimensions = _this$props3.getHelperDimensions,
                  _helperClass = _this$props3.helperClass,
                  _hideSortableGhost = _this$props3.hideSortableGhost,
                  updateBeforeSortStart = _this$props3.updateBeforeSortStart,
                  _onSortStart = _this$props3.onSortStart,
                  _useWindowAsScrollContainer = _this$props3.useWindowAsScrollContainer;
              var _node = active.node,
                  _collection = active.collection;
              var _isKeySorting = _this.manager.isKeySorting;

              var _temp8 = function () {
                if (typeof updateBeforeSortStart === 'function') {
                  _this._awaitingUpdateBeforeSortStart = true;

                  var _temp9 = _finallyRethrows(function () {
                    var index = _node.sortableInfo.index;
                    return Promise.resolve(updateBeforeSortStart({
                      collection: _collection,
                      index: index,
                      node: _node,
                      isKeySorting: _isKeySorting
                    }, event)).then(function () {});
                  }, function (_wasThrown, _result) {
                    _this._awaitingUpdateBeforeSortStart = false;
                    if (_wasThrown) throw _result;
                    return _result;
                  });

                  if (_temp9 && _temp9.then) return _temp9.then(function () {});
                }
              }();

              return _temp8 && _temp8.then ? _temp8.then(_temp7) : _temp7(_temp8);
            }
          }();

          return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function () {}) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSortMove", function (event) {
        var onSortMove = _this.props.onSortMove;

        if (typeof event.preventDefault === 'function') {
          event.preventDefault();
        }

        _this.updateHelperPosition(event);

        _this.animateNodes();

        _this.autoscroll();

        if (onSortMove) {
          onSortMove(event);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSortEnd", function (event) {
        var _this$props4 = _this.props,
            hideSortableGhost = _this$props4.hideSortableGhost,
            onSortEnd = _this$props4.onSortEnd;
        var _this$manager = _this.manager,
            collection = _this$manager.active.collection,
            isKeySorting = _this$manager.isKeySorting;

        var nodes = _this.manager.getOrderedRefs();

        if (_this.listenerNode) {
          if (isKeySorting) {
            _this.listenerNode.removeEventListener('wheel', _this.handleKeyEnd, true);

            _this.listenerNode.removeEventListener('mousedown', _this.handleKeyEnd, true);

            _this.listenerNode.removeEventListener('keydown', _this.handleKeyDown);
          } else {
            events.move.forEach(function (eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortMove);
            });
            events.end.forEach(function (eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortEnd);
            });
          }
        }

        _this.helper.parentNode.removeChild(_this.helper);

        if (hideSortableGhost && _this.sortableGhost) {
          setInlineStyles(_this.sortableGhost, {
            opacity: '',
            visibility: ''
          });
        }

        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node2 = nodes[i];
          var el = _node2.node;
          _node2.edgeOffset = null;
          _node2.boundingClientRect = null;
          setTranslate3d(el, null);
          setTransitionDuration(el, null);
          _node2.translate = null;
        }

        _this.autoScroller.clear();

        _this.manager.active = null;
        _this.manager.isKeySorting = false;

        _this.setState({
          sorting: false,
          sortingIndex: null
        });

        if (typeof onSortEnd === 'function') {
          onSortEnd({
            collection: collection,
            newIndex: _this.newIndex,
            oldIndex: _this.index,
            isKeySorting: isKeySorting,
            nodes: nodes
          }, event);
        }

        _this.touched = false;
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "autoscroll", function () {
        var disableAutoscroll = _this.props.disableAutoscroll;
        var isKeySorting = _this.manager.isKeySorting;

        if (disableAutoscroll) {
          _this.autoScroller.clear();

          return;
        }

        if (isKeySorting) {
          var translate = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this.translate);

          var scrollX = 0;
          var scrollY = 0;

          if (_this.axis.x) {
            translate.x = Math.min(_this.maxTranslate.x, Math.max(_this.minTranslate.x, _this.translate.x));
            scrollX = _this.translate.x - translate.x;
          }

          if (_this.axis.y) {
            translate.y = Math.min(_this.maxTranslate.y, Math.max(_this.minTranslate.y, _this.translate.y));
            scrollY = _this.translate.y - translate.y;
          }

          _this.translate = translate;
          setTranslate3d(_this.helper, _this.translate);
          _this.scrollContainer.scrollLeft += scrollX;
          _this.scrollContainer.scrollTop += scrollY;
          return;
        }

        _this.autoScroller.update({
          height: _this.height,
          maxTranslate: _this.maxTranslate,
          minTranslate: _this.minTranslate,
          translate: _this.translate,
          width: _this.width
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "onAutoScroll", function (offset) {
        _this.translate.x += offset.left;
        _this.translate.y += offset.top;

        _this.animateNodes();
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleKeyDown", function (event) {
        var keyCode = event.keyCode;
        var _this$props5 = _this.props,
            shouldCancelStart = _this$props5.shouldCancelStart,
            _this$props5$keyCodes = _this$props5.keyCodes,
            customKeyCodes = _this$props5$keyCodes === void 0 ? {} : _this$props5$keyCodes;

        var keyCodes = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, defaultKeyCodes, customKeyCodes);

        if (_this.manager.active && !_this.manager.isKeySorting || !_this.manager.active && (!keyCodes.lift.includes(keyCode) || shouldCancelStart(event) || !_this.isValidSortingTarget(event))) {
          return;
        }

        event.stopPropagation();
        event.preventDefault();

        if (keyCodes.lift.includes(keyCode) && !_this.manager.active) {
          _this.keyLift(event);
        } else if (keyCodes.drop.includes(keyCode) && _this.manager.active) {
          _this.keyDrop(event);
        } else if (keyCodes.cancel.includes(keyCode)) {
          _this.newIndex = _this.manager.active.index;

          _this.keyDrop(event);
        } else if (keyCodes.up.includes(keyCode)) {
          _this.keyMove(-1);
        } else if (keyCodes.down.includes(keyCode)) {
          _this.keyMove(1);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyLift", function (event) {
        var target = event.target;
        var node = closest(target, function (el) {
          return el.sortableInfo != null;
        });
        var _node$sortableInfo2 = node.sortableInfo,
            index = _node$sortableInfo2.index,
            collection = _node$sortableInfo2.collection;
        _this.initialFocusedNode = target;
        _this.manager.isKeySorting = true;
        _this.manager.active = {
          index: index,
          collection: collection
        };

        _this.handlePress(event);
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyMove", function (shift) {
        var nodes = _this.manager.getOrderedRefs();

        var lastIndex = nodes[nodes.length - 1].node.sortableInfo.index;
        var newIndex = _this.newIndex + shift;
        var prevIndex = _this.newIndex;

        if (newIndex < 0 || newIndex > lastIndex) {
          return;
        }

        _this.prevIndex = prevIndex;
        _this.newIndex = newIndex;
        var targetIndex = getTargetIndex(_this.newIndex, _this.prevIndex, _this.index);
        var target = nodes.find(function (_ref2) {
          var node = _ref2.node;
          return node.sortableInfo.index === targetIndex;
        });
        var targetNode = target.node;
        var scrollDelta = _this.containerScrollDelta;
        var targetBoundingClientRect = target.boundingClientRect || getScrollAdjustedBoundingClientRect(targetNode, scrollDelta);
        var targetTranslate = target.translate || {
          x: 0,
          y: 0
        };
        var targetPosition = {
          top: targetBoundingClientRect.top + targetTranslate.y - scrollDelta.top,
          left: targetBoundingClientRect.left + targetTranslate.x - scrollDelta.left
        };
        var shouldAdjustForSize = prevIndex < newIndex;
        var sizeAdjustment = {
          x: shouldAdjustForSize && _this.axis.x ? targetNode.offsetWidth - _this.width : 0,
          y: shouldAdjustForSize && _this.axis.y ? targetNode.offsetHeight - _this.height : 0
        };

        _this.handleSortMove({
          pageX: targetPosition.left + sizeAdjustment.x,
          pageY: targetPosition.top + sizeAdjustment.y,
          ignoreTransition: shift === 0
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyDrop", function (event) {
        _this.handleSortEnd(event);

        if (_this.initialFocusedNode) {
          _this.initialFocusedNode.focus();
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleKeyEnd", function (event) {
        if (_this.manager.active) {
          _this.keyDrop(event);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "isValidSortingTarget", function (event) {
        var useDragHandle = _this.props.useDragHandle;
        var target = event.target;
        var node = closest(target, function (el) {
          return el.sortableInfo != null;
        });
        return node && node.sortableInfo && !node.sortableInfo.disabled && (useDragHandle ? isSortableHandle(target) : target.sortableInfo);
      });

      validateProps(props);
      _this.manager = new Manager();
      _this.events = {
        end: _this.handleEnd,
        move: _this.handleMove,
        start: _this.handleStart
      };
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableContainer, [{
      key: "getChildContext",
      value: function getChildContext() {
        return {
          manager: this.manager
        };
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
        var container = this.getContainer();
        Promise.resolve(container).then(function (containerNode) {
          _this2.container = containerNode;
          _this2.document = _this2.container.ownerDocument || document;
          var contentWindow = _this2.props.contentWindow || _this2.document.defaultView || window;
          _this2.contentWindow = typeof contentWindow === 'function' ? contentWindow() : contentWindow;
          _this2.scrollContainer = useWindowAsScrollContainer ? _this2.document.scrollingElement || _this2.document.documentElement : getScrollingParent(_this2.container) || _this2.container;
          _this2.autoScroller = new AutoScroller(_this2.scrollContainer, _this2.onAutoScroll);
          Object.keys(_this2.events).forEach(function (key) {
            return events[key].forEach(function (eventName) {
              return _this2.container.addEventListener(eventName, _this2.events[key], false);
            });
          });

          _this2.container.addEventListener('keydown', _this2.handleKeyDown);
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this3 = this;

        if (this.helper && this.helper.parentNode) {
          this.helper.parentNode.removeChild(this.helper);
        }

        if (!this.container) {
          return;
        }

        Object.keys(this.events).forEach(function (key) {
          return events[key].forEach(function (eventName) {
            return _this3.container.removeEventListener(eventName, _this3.events[key]);
          });
        });
        this.container.removeEventListener('keydown', this.handleKeyDown);
      }
    }, {
      key: "updateHelperPosition",
      value: function updateHelperPosition(event) {
        var _this$props6 = this.props,
            lockAxis = _this$props6.lockAxis,
            lockOffset = _this$props6.lockOffset,
            lockToContainerEdges = _this$props6.lockToContainerEdges,
            transitionDuration = _this$props6.transitionDuration,
            _this$props6$keyboard = _this$props6.keyboardSortingTransitionDuration,
            keyboardSortingTransitionDuration = _this$props6$keyboard === void 0 ? transitionDuration : _this$props6$keyboard;
        var isKeySorting = this.manager.isKeySorting;
        var ignoreTransition = event.ignoreTransition;
        var offset = getPosition(event);
        var translate = {
          x: offset.x - this.initialOffset.x,
          y: offset.y - this.initialOffset.y
        };
        translate.y -= window.pageYOffset - this.initialWindowScroll.top;
        translate.x -= window.pageXOffset - this.initialWindowScroll.left;
        this.translate = translate;

        if (lockToContainerEdges) {
          var _getLockPixelOffsets = getLockPixelOffsets({
            height: this.height,
            lockOffset: lockOffset,
            width: this.width
          }),
              _getLockPixelOffsets2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getLockPixelOffsets, 2),
              minLockOffset = _getLockPixelOffsets2[0],
              maxLockOffset = _getLockPixelOffsets2[1];

          var minOffset = {
            x: this.width / 2 - minLockOffset.x,
            y: this.height / 2 - minLockOffset.y
          };
          var maxOffset = {
            x: this.width / 2 - maxLockOffset.x,
            y: this.height / 2 - maxLockOffset.y
          };
          translate.x = limit(this.minTranslate.x + minOffset.x, this.maxTranslate.x - maxOffset.x, translate.x);
          translate.y = limit(this.minTranslate.y + minOffset.y, this.maxTranslate.y - maxOffset.y, translate.y);
        }

        if (lockAxis === 'x') {
          translate.y = 0;
        } else if (lockAxis === 'y') {
          translate.x = 0;
        }

        if (isKeySorting && keyboardSortingTransitionDuration && !ignoreTransition) {
          setTransitionDuration(this.helper, keyboardSortingTransitionDuration);
        }

        setTranslate3d(this.helper, translate);
      }
    }, {
      key: "animateNodes",
      value: function animateNodes() {
        var _this$props7 = this.props,
            transitionDuration = _this$props7.transitionDuration,
            hideSortableGhost = _this$props7.hideSortableGhost,
            onSortOver = _this$props7.onSortOver;
        var containerScrollDelta = this.containerScrollDelta,
            windowScrollDelta = this.windowScrollDelta;
        var nodes = this.manager.getOrderedRefs();
        var sortingOffset = {
          left: this.offsetEdge.left + this.translate.x + containerScrollDelta.left,
          top: this.offsetEdge.top + this.translate.y + containerScrollDelta.top
        };
        var isKeySorting = this.manager.isKeySorting;
        var prevIndex = this.newIndex;
        this.newIndex = null;

        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node3 = nodes[i].node;
          var index = _node3.sortableInfo.index;
          var width = _node3.offsetWidth;
          var height = _node3.offsetHeight;
          var offset = {
            height: this.height > height ? height / 2 : this.height / 2,
            width: this.width > width ? width / 2 : this.width / 2
          };
          var mustShiftBackward = isKeySorting && index > this.index && index <= prevIndex;
          var mustShiftForward = isKeySorting && index < this.index && index >= prevIndex;
          var translate = {
            x: 0,
            y: 0
          };
          var edgeOffset = nodes[i].edgeOffset;

          if (!edgeOffset) {
            edgeOffset = getEdgeOffset(_node3, this.container);
            nodes[i].edgeOffset = edgeOffset;

            if (isKeySorting) {
              nodes[i].boundingClientRect = getScrollAdjustedBoundingClientRect(_node3, containerScrollDelta);
            }
          }

          var nextNode = i < nodes.length - 1 && nodes[i + 1];
          var prevNode = i > 0 && nodes[i - 1];

          if (nextNode && !nextNode.edgeOffset) {
            nextNode.edgeOffset = getEdgeOffset(nextNode.node, this.container);

            if (isKeySorting) {
              nextNode.boundingClientRect = getScrollAdjustedBoundingClientRect(nextNode.node, containerScrollDelta);
            }
          }

          if (index === this.index) {
            if (hideSortableGhost) {
              this.sortableGhost = _node3;
              setInlineStyles(_node3, {
                opacity: 0,
                visibility: 'hidden'
              });
            }

            continue;
          }

          if (transitionDuration) {
            setTransitionDuration(_node3, transitionDuration);
          }

          if (this.axis.x) {
            if (this.axis.y) {
              if (mustShiftForward || index < this.index && (sortingOffset.left + windowScrollDelta.left - offset.width <= edgeOffset.left && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height || sortingOffset.top + windowScrollDelta.top + offset.height <= edgeOffset.top)) {
                translate.x = this.width + this.marginOffset.x;

                if (edgeOffset.left + translate.x > this.containerBoundingRect.width - offset.width) {
                  if (nextNode) {
                    translate.x = nextNode.edgeOffset.left - edgeOffset.left;
                    translate.y = nextNode.edgeOffset.top - edgeOffset.top;
                  }
                }

                if (this.newIndex === null) {
                  this.newIndex = index;
                }
              } else if (mustShiftBackward || index > this.index && (sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top || sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top + height)) {
                translate.x = -(this.width + this.marginOffset.x);

                if (edgeOffset.left + translate.x < this.containerBoundingRect.left + offset.width) {
                  if (prevNode) {
                    translate.x = prevNode.edgeOffset.left - edgeOffset.left;
                    translate.y = prevNode.edgeOffset.top - edgeOffset.top;
                  }
                }

                this.newIndex = index;
              }
            } else {
              if (mustShiftBackward || index > this.index && sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left) {
                translate.x = -(this.width + this.marginOffset.x);
                this.newIndex = index;
              } else if (mustShiftForward || index < this.index && sortingOffset.left + windowScrollDelta.left <= edgeOffset.left + offset.width) {
                translate.x = this.width + this.marginOffset.x;

                if (this.newIndex == null) {
                  this.newIndex = index;
                }
              }
            }
          } else if (this.axis.y) {
            if (mustShiftBackward || index > this.index && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top) {
              translate.y = -(this.height + this.marginOffset.y);
              this.newIndex = index;
            } else if (mustShiftForward || index < this.index && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height) {
              translate.y = this.height + this.marginOffset.y;

              if (this.newIndex == null) {
                this.newIndex = index;
              }
            }
          }

          setTranslate3d(_node3, translate);
          nodes[i].translate = translate;
        }

        if (this.newIndex == null) {
          this.newIndex = this.index;
        }

        if (isKeySorting) {
          this.newIndex = prevIndex;
        }

        var oldIndex = isKeySorting ? this.prevIndex : prevIndex;

        if (onSortOver && this.newIndex !== oldIndex) {
          onSortOver({
            collection: this.manager.active.collection,
            index: this.index,
            newIndex: this.newIndex,
            oldIndex: oldIndex,
            isKeySorting: isKeySorting,
            nodes: nodes,
            helper: this.helper
          });
        }
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_13___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        var getContainer = this.props.getContainer;

        if (typeof getContainer !== 'function') {
          return Object(react_dom__WEBPACK_IMPORTED_MODULE_12__["findDOMNode"])(this);
        }

        return getContainer(config.withRef ? this.getWrappedInstance() : undefined);
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;
        return Object(react__WEBPACK_IMPORTED_MODULE_10__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, omit(this.props, omittedProps)));
      }
    }, {
      key: "helperContainer",
      get: function get() {
        var helperContainer = this.props.helperContainer;

        if (typeof helperContainer === 'function') {
          return helperContainer();
        }

        return this.props.helperContainer || this.document.body;
      }
    }, {
      key: "containerScrollDelta",
      get: function get() {
        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;

        if (useWindowAsScrollContainer) {
          return {
            left: 0,
            top: 0
          };
        }

        return {
          left: this.scrollContainer.scrollLeft - this.initialScroll.left,
          top: this.scrollContainer.scrollTop - this.initialScroll.top
        };
      }
    }, {
      key: "windowScrollDelta",
      get: function get() {
        return {
          left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
          top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
        };
      }
    }]);

    return WithSortableContainer;
  }(react__WEBPACK_IMPORTED_MODULE_10__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableList', WrappedComponent)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "defaultProps", defaultProps), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "propTypes", propTypes), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "childContextTypes", {
    manager: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
  }), _temp;
}

var propTypes$1 = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,
  collection: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string]),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool
};
var omittedProps$1 = Object.keys(propTypes$1);
function sortableElement(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableElement, _React$Component);

    function WithSortableElement() {
      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableElement);

      return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableElement).apply(this, arguments));
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableElement, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.register();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.node) {
          if (prevProps.index !== this.props.index) {
            this.node.sortableInfo.index = this.props.index;
          }

          if (prevProps.disabled !== this.props.disabled) {
            this.node.sortableInfo.disabled = this.props.disabled;
          }
        }

        if (prevProps.collection !== this.props.collection) {
          this.unregister(prevProps.collection);
          this.register();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unregister();
      }
    }, {
      key: "register",
      value: function register() {
        var _this$props = this.props,
            collection = _this$props.collection,
            disabled = _this$props.disabled,
            index = _this$props.index;
        var node = Object(react_dom__WEBPACK_IMPORTED_MODULE_12__["findDOMNode"])(this);
        node.sortableInfo = {
          collection: collection,
          disabled: disabled,
          index: index,
          manager: this.context.manager
        };
        this.node = node;
        this.ref = {
          node: node
        };
        this.context.manager.add(collection, this.ref);
      }
    }, {
      key: "unregister",
      value: function unregister() {
        var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.collection;
        this.context.manager.remove(collection, this.ref);
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_13___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;
        return Object(react__WEBPACK_IMPORTED_MODULE_10__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, omit(this.props, omittedProps$1)));
      }
    }]);

    return WithSortableElement;
  }(react__WEBPACK_IMPORTED_MODULE_10__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableElement', WrappedComponent)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "contextTypes", {
    manager: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "propTypes", propTypes$1), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "defaultProps", {
    collection: 0
  }), _temp;
}




/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.13.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./src/blocks/block-assets/font-family.js":
/*!************************************************!*\
  !*** ./src/blocks/block-assets/font-family.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var fontFmily = ["ABeeZee", "Abel", "Aclonica", "Acme", "Aguafina Script", "Akronim", "Aladin", "Alegreya SC", "Alex Brush", "Allura", "Almendra", "Almendra Display", "Amatic SC", "Amita", "Arizonia", "Arimo", "Arvo", "Asap Condensed", "Bad Script", "Balsamiq Sans", "Barrio", "Berkshire Swash", "Bubblegum Sans", "Bungee Hairline", "Butcherman", "Catamaran", "Dancing Script", "Do Hyeon", "Dokdo", "Dosis", "Dr Sugiyama", "Eater", "Ewert", "Fascinate Inline", "Faster One", "Finger Paint", "Gorditas", "Great Vibes", "Habibi", "Hanuman", "Hanalei", "IM Fell Great Primer SC", "Iceberg", "Iceland", "Indie Flower", "Inter", "Irish Grover", "Italianno", "Itim", "Jacques Francois", "Jacques Francois Shadow", "Jim Nightshade", "Joti One", "Julius Sans One", "Just Me Again Down Here", "Kaushan Script", "Keania One", "Kirang Haerang", "Kite One", "Kristi", "Kumar One Outline", "Lakki Reddy", "Leckerli One", "Lily Script One", "Liu Jian Mao Cao", "Londrina Shadow", "Love Ya Like A Sister", "Major Mono Display", "Mandali", "Marck Script", "Merienda", "Merienda One", "Merriweather Sans", "Michroma", "Miltonian Tattoo", "Mountains of Christmas", "Mukta Vaani", "Niramit", "Nosifer", "Nova Script", "Norican", "Offside", "Orbitron", "PT Sans Caption", "Pacifico", "Palanquin Dark", "Piedra", "Playfair Display", "Poiret One", "Princess Sofia", "Zilla Slab", "Zhi Mang Xing", "Zeyada", "ZCOOL XiaoWei", "ZCOOL KuaiLe", "Yeon Sung", "Yellowtail", "Yatra One", "Yanone Kaffeesatz", "Yesteryear", "Wire One", "Wendy One", "Wellfleet", "Warnes", "Walter Turncoat", "Wallpoet", "Waiting for the Sunrise", "Volkhov", "Viga", "Vibur", "Vibes", "Vast Shadow", "Vampiro One", "VT323", "Unlock", "Unkempt", "UnifrakturMaguntia", "Unica One", "Underdog", "Uncial Antiqua", "Ultra", "Ubuntu", "Ubuntu Mono", "Turret Road", "Turret Road", "Tulpen One", "Trochut", "Trocchi", "Trade Winds", "Tomorrow", "Titan One", "Timmana", "Tillana", "The Girl Next Door", "Text Me One", "Tenali Ramakrishna", "Tauri", "Tangerine", "Syncopate", "Swanky and Moo Moo", "Suravaram", "Supermercado One", "Sunshiney", "Sulphur Point", "Sue Ellen Francisco", "Stylish", "Stint Ultra Expanded", "Stardos Stencil", "Stalinist One", "Stalemate", "Srisakdi", "Sriracha", "Spirax", "Spicy Rice", "Special Elite", "Space Mono", "Source Code Pro", "Sonsie One", "Sofia", "Sofadi One", "Snowburst One", "Snippet", "Sniglet", "Smokum", "Slackey", "Skranji", "Six Caps", "Sirin Stencil", "Simonetta", "Sigmar One", "Shrikhand", "Short Stack", "Shojumaru", "Shadows Into Light Two", "Shadows Into Light", "Seymour One", "Sevillana", "Sedgwick Ave Display", "Sedgwick Ave", "Seaweed Script", "Satisfy", "Sarina", "Sancreek", "Saira Stencil One", "Sail", "Sacramento", "Rye", "Ruthie", "Ruslan Display", "Rum Raisin", "Ruge Boogie", "Rubik Mono One", "Rouge Script", "Rosarivo", "Romanesco", "Rock Salt", "Rochester", "Roboto", "Risque", "Ribeye Marrow", "Ribeye", "Revalia", "Reenie Beanie", "Redressed", "Red Rose", "Ravi Prakash", "Ranga", "Rancho", "Ranchers", "Raleway Dots", "Rakkas", "Rajdhani", "Racing Sans One", "Quintessential", "Qwigley", "Quicksand"];
/* harmony default export */ __webpack_exports__["default"] = (fontFmily);

/***/ }),

/***/ "./src/blocks/block-assets/icons.js":
/*!******************************************!*\
  !*** ./src/blocks/block-assets/icons.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var icons_ = ["fas fa-ad", "fas fa-address-book", "fas fa-address-card", "fas fa-adjust", "fas fa-air-freshener", "fas fa-align-center", "fas fa-align-justify", "fas fa-align-left", "fas fa-align-right", "fas fa-allergies", "fas fa-ambulance", "fas fa-american-sign-language-interpreting", "fas fa-anchor", "fas fa-angle-double-down", "fas fa-angle-double-left", "fas fa-angle-double-right", "fas fa-angle-double-up", "fas fa-angle-down", "fas fa-angle-left", "fas fa-angle-right", "fas fa-angle-up", "fas fa-angry", "fas fa-ankh", "fas fa-apple-alt", "fas fa-archive", "fas fa-archway", "fas fa-arrow-alt-circle-down", "fas fa-arrow-alt-circle-left", "fas fa-arrow-alt-circle-right", "fas fa-arrow-alt-circle-up", "fas fa-arrow-circle-down", "fas fa-arrow-circle-left", "fas fa-arrow-circle-right", "fas fa-arrow-circle-up", "fas fa-arrow-down", "fas fa-arrow-left", "fas fa-arrow-right", "fas fa-arrow-up", "fas fa-arrows-alt", "fas fa-arrows-alt-h", "fas fa-arrows-alt-v", "fas fa-assistive-listening-systems", "fas fa-asterisk", "fas fa-at", "fas fa-atlas", "fas fa-atom", "fas fa-audio-description", "fas fa-award", "fas fa-baby", "fas fa-baby-carriage", "fas fa-backspace", "fas fa-backward", "fas fa-balance-scale", "fas fa-ban", "fas fa-band-aid", "fas fa-barcode", "fas fa-bars", "fas fa-baseball-ball", "fas fa-basketball-ball", "fas fa-bath", "fas fa-battery-empty", "fas fa-battery-full", "fas fa-battery-half", "fas fa-battery-quarter", "fas fa-battery-three-quarters", "fas fa-bed", "fas fa-beer", "fas fa-bell", "fas fa-bell-slash", "fas fa-bezier-curve", "fas fa-bible", "fas fa-bicycle", "fas fa-binoculars", "fas fa-biohazard", "fas fa-birthday-cake", "fas fa-blender", "fas fa-blender-phone", "fas fa-blind", "fas fa-blog", "fas fa-bold", "fas fa-bolt", "fas fa-bomb", "fas fa-bone", "fas fa-bong", "fas fa-book", "fas fa-book-dead", "fas fa-book-open", "fas fa-book-reader", "fas fa-bookmark", "fas fa-bowling-ball", "fas fa-box", "fas fa-box-open", "fas fa-boxes", "fas fa-braille", "fas fa-brain", "fas fa-briefcase", "fas fa-briefcase-medical", "fas fa-broadcast-tower", "fas fa-broom", "fas fa-brush", "fas fa-bug", "fas fa-building", "fas fa-bullhorn", "fas fa-bullseye", "fas fa-burn", "fas fa-bus", "fas fa-bus-alt", "fas fa-business-time", "fas fa-calculator", "fas fa-calendar", "fas fa-calendar-alt", "fas fa-calendar-check", "fas fa-calendar-day", "fas fa-calendar-minus", "fas fa-calendar-plus", "fas fa-calendar-times", "fas fa-calendar-week", "fas fa-camera", "fas fa-camera-retro", "fas fa-campground", "fas fa-candy-cane", "fas fa-cannabis", "fas fa-capsules", "fas fa-car", "fas fa-car-alt", "fas fa-car-battery", "fas fa-car-crash", "fas fa-car-side", "fas fa-caret-down", "fas fa-caret-left", "fas fa-caret-right", "fas fa-caret-square-down", "fas fa-caret-square-left", "fas fa-caret-square-right", "fas fa-caret-square-up", "fas fa-caret-up", "fas fa-carrot", "fas fa-cart-arrow-down", "fas fa-cart-plus", "fas fa-cash-register", "fas fa-cat", "fas fa-certificate", "fas fa-chair", "fas fa-chalkboard", "fas fa-chalkboard-teacher", "fas fa-charging-station", "fas fa-chart-area", "fas fa-chart-bar", "fas fa-chart-line", "fas fa-chart-pie", "fas fa-check", "fas fa-check-circle", "fas fa-check-double", "fas fa-check-square", "fas fa-chess", "fas fa-chess-bishop", "fas fa-chess-board", "fas fa-chess-king", "fas fa-chess-knight", "fas fa-chess-pawn", "fas fa-chess-queen", "fas fa-chess-rook", "fas fa-chevron-circle-down", "fas fa-chevron-circle-left", "fas fa-chevron-circle-right", "fas fa-chevron-circle-up", "fas fa-chevron-down", "fas fa-chevron-left", "fas fa-chevron-right", "fas fa-chevron-up", "fas fa-child", "fas fa-church", "fas fa-circle", "fas fa-circle-notch", "fas fa-city", "fas fa-clipboard", "fas fa-clipboard-check", "fas fa-clipboard-list", "fas fa-clock", "fas fa-clone", "fas fa-closed-captioning", "fas fa-cloud", "fas fa-cloud-download-alt", "fas fa-cloud-meatball", "fas fa-cloud-moon", "fas fa-cloud-moon-rain", "fas fa-cloud-rain", "fas fa-cloud-showers-heavy", "fas fa-cloud-sun", "fas fa-cloud-sun-rain", "fas fa-cloud-upload-alt", "fas fa-cocktail", "fas fa-code", "fas fa-code-branch", "fas fa-coffee", "fas fa-cog", "fas fa-cogs", "fas fa-coins", "fas fa-columns", "fas fa-comment", "fas fa-comment-alt", "fas fa-comment-dollar", "fas fa-comment-dots", "fas fa-comment-slash", "fas fa-comments", "fas fa-comments-dollar", "fas fa-compact-disc", "fas fa-compass", "fas fa-compress", "fas fa-compress-arrows-alt", "fas fa-concierge-bell", "fas fa-cookie", "fas fa-cookie-bite", "fas fa-copy", "fas fa-copyright", "fas fa-couch", "fas fa-credit-card", "fas fa-crop", "fas fa-crop-alt", "fas fa-cross", "fas fa-crosshairs", "fas fa-crow", "fas fa-crown", "fas fa-cube", "fas fa-cubes", "fas fa-cut", "fas fa-database", "fas fa-deaf", "fas fa-democrat", "fas fa-desktop", "fas fa-dharmachakra", "fas fa-diagnoses", "fas fa-dice", "fas fa-dice-d20", "fas fa-dice-d6", "fas fa-dice-five", "fas fa-dice-four", "fas fa-dice-one", "fas fa-dice-six", "fas fa-dice-three", "fas fa-dice-two", "fas fa-digital-tachograph", "fas fa-directions", "fas fa-divide", "fas fa-dizzy", "fas fa-dna", "fas fa-dog", "fas fa-dollar-sign", "fas fa-dolly", "fas fa-dolly-flatbed", "fas fa-donate", "fas fa-door-closed", "fas fa-door-open", "fas fa-dot-circle", "fas fa-dove", "fas fa-download", "fas fa-drafting-compass", "fas fa-dragon", "fas fa-draw-polygon", "fas fa-drum", "fas fa-drum-steelpan", "fas fa-drumstick-bite", "fas fa-dumbbell", "fas fa-dumpster", "fas fa-dumpster-fire", "fas fa-dungeon", "fas fa-edit", "fas fa-eject", "fas fa-ellipsis-h", "fas fa-ellipsis-v", "fas fa-envelope", "fas fa-envelope-open", "fas fa-envelope-open-text", "fas fa-envelope-square", "fas fa-equals", "fas fa-eraser", "fas fa-ethernet", "fas fa-euro-sign", "fas fa-exchange-alt", "fas fa-exclamation", "fas fa-exclamation-circle", "fas fa-exclamation-triangle", "fas fa-expand", "fas fa-expand-arrows-alt", "fas fa-external-link-alt", "fas fa-external-link-square-alt", "fas fa-eye", "fas fa-eye-dropper", "fas fa-eye-slash", "fas fa-fast-backward", "fas fa-fast-forward", "fas fa-fax", "fas fa-feather", "fas fa-feather-alt", "fas fa-female", "fas fa-fighter-jet", "fas fa-file", "fas fa-file-alt", "fas fa-file-archive", "fas fa-file-audio", "fas fa-file-code", "fas fa-file-contract", "fas fa-file-csv", "fas fa-file-download", "fas fa-file-excel", "fas fa-file-export", "fas fa-file-image", "fas fa-file-import", "fas fa-file-invoice", "fas fa-file-invoice-dollar", "fas fa-file-medical", "fas fa-file-medical-alt", "fas fa-file-pdf", "fas fa-file-powerpoint", "fas fa-file-prescription", "fas fa-file-signature", "fas fa-file-upload", "fas fa-file-video", "fas fa-file-word", "fas fa-fill", "fas fa-fill-drip", "fas fa-film", "fas fa-filter", "fas fa-fingerprint", "fas fa-fire", "fas fa-fire-alt", "fas fa-fire-extinguisher", "fas fa-first-aid", "fas fa-fish", "fas fa-fist-raised", "fas fa-flag", "fas fa-flag-checkered", "fas fa-flag-usa", "fas fa-flask", "fas fa-flushed", "fas fa-folder", "fas fa-folder-minus", "fas fa-folder-open", "fas fa-folder-plus", "fas fa-font", "fas fa-football-ball", "fas fa-forward", "fas fa-frog", "fas fa-frown", "fas fa-frown-open", "fas fa-funnel-dollar", "fas fa-futbol", "fas fa-gamepad", "fas fa-gas-pump", "fas fa-gavel", "fas fa-gem", "fas fa-genderless", "fas fa-ghost", "fas fa-gift", "fas fa-gifts", "fas fa-glass-cheers", "fas fa-glass-martini", "fas fa-glass-martini-alt", "fas fa-glass-whiskey", "fas fa-glasses", "fas fa-globe", "fas fa-globe-africa", "fas fa-globe-americas", "fas fa-globe-asia", "fas fa-globe-europe", "fas fa-golf-ball", "fas fa-gopuram", "fas fa-graduation-cap", "fas fa-greater-than", "fas fa-greater-than-equal", "fas fa-grimace", "fas fa-grin", "fas fa-grin-alt", "fas fa-grin-beam", "fas fa-grin-beam-sweat", "fas fa-grin-hearts", "fas fa-grin-squint", "fas fa-grin-squint-tears", "fas fa-grin-stars", "fas fa-grin-tears", "fas fa-grin-tongue", "fas fa-grin-tongue-squint", "fas fa-grin-tongue-wink", "fas fa-grin-wink", "fas fa-grip-horizontal", "fas fa-grip-lines", "fas fa-grip-lines-vertical", "fas fa-grip-vertical", "fas fa-guitar", "fas fa-h-square", "fas fa-hammer", "fas fa-hamsa", "fas fa-hand-holding", "fas fa-hand-holding-heart", "fas fa-hand-holding-usd", "fas fa-hand-lizard", "fas fa-hand-paper", "fas fa-hand-peace", "fas fa-hand-point-down", "fas fa-hand-point-left", "fas fa-hand-point-right", "fas fa-hand-point-up", "fas fa-hand-pointer", "fas fa-hand-rock", "fas fa-hand-scissors", "fas fa-hand-spock", "fas fa-hands", "fas fa-hands-helping", "fas fa-handshake", "fas fa-hanukiah", "fas fa-hashtag", "fas fa-hat-wizard", "fas fa-haykal", "fas fa-hdd", "fas fa-heading", "fas fa-headphones", "fas fa-headphones-alt", "fas fa-headset", "fas fa-heart", "fas fa-heart-broken", "fas fa-heartbeat", "fas fa-helicopter", "fas fa-highlighter", "fas fa-hiking", "fas fa-hippo", "fas fa-history", "fas fa-hockey-puck", "fas fa-holly-berry", "fas fa-home", "fas fa-horse", "fas fa-horse-head", "fas fa-hospital", "fas fa-hospital-alt", "fas fa-hospital-symbol", "fas fa-hot-tub", "fas fa-hotel", "fas fa-hourglass", "fas fa-hourglass-end", "fas fa-hourglass-half", "fas fa-hourglass-start", "fas fa-house-damage", "fas fa-hryvnia", "fas fa-i-cursor", "fas fa-icicles", "fas fa-id-badge", "fas fa-id-card", "fas fa-id-card-alt", "fas fa-igloo", "fas fa-image", "fas fa-images", "fas fa-inbox", "fas fa-indent", "fas fa-industry", "fas fa-infinity", "fas fa-info", "fas fa-info-circle", "fas fa-italic", "fas fa-jedi", "fas fa-joint", "fas fa-journal-whills", "fas fa-kaaba", "fas fa-key", "fas fa-keyboard", "fas fa-khanda", "fas fa-kiss", "fas fa-kiss-beam", "fas fa-kiss-wink-heart", "fas fa-kiwi-bird", "fas fa-landmark", "fas fa-language", "fas fa-laptop", "fas fa-laptop-code", "fas fa-laugh", "fas fa-laugh-beam", "fas fa-laugh-squint", "fas fa-laugh-wink", "fas fa-layer-group", "fas fa-leaf", "fas fa-lemon", "fas fa-less-than", "fas fa-less-than-equal", "fas fa-level-down-alt", "fas fa-level-up-alt", "fas fa-life-ring", "fas fa-lightbulb", "fas fa-link", "fas fa-lira-sign", "fas fa-list", "fas fa-list-alt", "fas fa-list-ol", "fas fa-list-ul", "fas fa-location-arrow", "fas fa-lock", "fas fa-lock-open", "fas fa-long-arrow-alt-down", "fas fa-long-arrow-alt-left", "fas fa-long-arrow-alt-right", "fas fa-long-arrow-alt-up", "fas fa-low-vision", "fas fa-luggage-cart", "fas fa-magic", "fas fa-magnet", "fas fa-mail-bulk", "fas fa-male", "fas fa-map", "fas fa-map-marked", "fas fa-map-marked-alt", "fas fa-map-marker", "fas fa-map-marker-alt", "fas fa-map-pin", "fas fa-map-signs", "fas fa-marker", "fas fa-mars", "fas fa-mars-double", "fas fa-mars-stroke", "fas fa-mars-stroke-h", "fas fa-mars-stroke-v", "fas fa-mask", "fas fa-medal", "fas fa-medkit", "fas fa-meh", "fas fa-meh-blank", "fas fa-meh-rolling-eyes", "fas fa-memory", "fas fa-menorah", "fas fa-mercury", "fas fa-meteor", "fas fa-microchip", "fas fa-microphone", "fas fa-microphone-alt", "fas fa-microphone-alt-slash", "fas fa-microphone-slash", "fas fa-microscope", "fas fa-minus", "fas fa-minus-circle", "fas fa-minus-square", "fas fa-mitten", "fas fa-mobile", "fas fa-mobile-alt", "fas fa-money-bill", "fas fa-money-bill-alt", "fas fa-money-bill-wave", "fas fa-money-bill-wave-alt", "fas fa-money-check", "fas fa-money-check-alt", "fas fa-monument", "fas fa-moon", "fas fa-mortar-pestle", "fas fa-mosque", "fas fa-motorcycle", "fas fa-mountain", "fas fa-mouse-pointer", "fas fa-mug-hot", "fas fa-music", "fas fa-network-wired", "fas fa-neuter", "fas fa-newspaper", "fas fa-not-equal", "fas fa-notes-medical", "fas fa-object-group", "fas fa-object-ungroup", "fas fa-oil-can", "fas fa-om", "fas fa-otter", "fas fa-outdent", "fas fa-paint-brush", "fas fa-paint-roller", "fas fa-palette", "fas fa-pallet", "fas fa-paper-plane", "fas fa-paperclip", "fas fa-parachute-box", "fas fa-paragraph", "fas fa-parking", "fas fa-passport", "fas fa-pastafarianism", "fas fa-paste", "fas fa-pause", "fas fa-pause-circle", "fas fa-paw", "fas fa-peace", "fas fa-pen", "fas fa-pen-alt", "fas fa-pen-fancy", "fas fa-pen-nib", "fas fa-pen-square", "fas fa-pencil-alt", "fas fa-pencil-ruler", "fas fa-people-carry", "fas fa-percent", "fas fa-percentage", "fas fa-person-booth", "fas fa-phone", "fas fa-phone-slash", "fas fa-phone-square", "fas fa-phone-volume", "fas fa-piggy-bank", "fas fa-pills", "fas fa-place-of-worship", "fas fa-plane", "fas fa-plane-arrival", "fas fa-plane-departure", "fas fa-play", "fas fa-play-circle", "fas fa-plug", "fas fa-plus", "fas fa-plus-circle", "fas fa-plus-square", "fas fa-podcast", "fas fa-poll", "fas fa-poll-h", "fas fa-poo", "fas fa-poo-storm", "fas fa-poop", "fas fa-portrait", "fas fa-pound-sign", "fas fa-power-off", "fas fa-pray", "fas fa-praying-hands", "fas fa-prescription", "fas fa-prescription-bottle", "fas fa-prescription-bottle-alt", "fas fa-print", "fas fa-procedures", "fas fa-project-diagram", "fas fa-puzzle-piece", "fas fa-qrcode", "fas fa-question", "fas fa-question-circle", "fas fa-quidditch", "fas fa-quote-left", "fas fa-quote-right", "fas fa-quran", "fas fa-radiation", "fas fa-radiation-alt", "fas fa-rainbow", "fas fa-random", "fas fa-receipt", "fas fa-recycle", "fas fa-redo", "fas fa-redo-alt", "fas fa-registered", "fas fa-reply", "fas fa-reply-all", "fas fa-republican", "fas fa-restroom", "fas fa-retweet", "fas fa-ribbon", "fas fa-ring", "fas fa-road", "fas fa-robot", "fas fa-rocket", "fas fa-route", "fas fa-rss", "fas fa-rss-square", "fas fa-ruble-sign", "fas fa-ruler", "fas fa-ruler-combined", "fas fa-ruler-horizontal", "fas fa-ruler-vertical", "fas fa-running", "fas fa-rupee-sign", "fas fa-sad-cry", "fas fa-sad-tear", "fas fa-satellite", "fas fa-satellite-dish", "fas fa-save", "fas fa-school", "fas fa-screwdriver", "fas fa-scroll", "fas fa-sd-card", "fas fa-search", "fas fa-search-dollar", "fas fa-search-location", "fas fa-search-minus", "fas fa-search-plus", "fas fa-seedling", "fas fa-server", "fas fa-shapes", "fas fa-share", "fas fa-share-alt", "fas fa-share-alt-square", "fas fa-share-square", "fas fa-shekel-sign", "fas fa-shield-alt", "fas fa-ship", "fas fa-shipping-fast", "fas fa-shoe-prints", "fas fa-shopping-bag", "fas fa-shopping-basket", "fas fa-shopping-cart", "fas fa-shower", "fas fa-shuttle-van", "fas fa-sign", "fas fa-sign-in-alt", "fas fa-sign-language", "fas fa-sign-out-alt", "fas fa-signal", "fas fa-signature", "fas fa-sim-card", "fas fa-sitemap", "fas fa-skating", "fas fa-skiing", "fas fa-skiing-nordic", "fas fa-skull", "fas fa-skull-crossbones", "fas fa-slash", "fas fa-sleigh", "fas fa-sliders-h", "fas fa-smile", "fas fa-smile-beam", "fas fa-smile-wink", "fas fa-smog", "fas fa-smoking", "fas fa-smoking-ban", "fas fa-sms", "fas fa-snowboarding", "fas fa-snowflake", "fas fa-snowman", "fas fa-snowplow", "fas fa-socks", "fas fa-solar-panel", "fas fa-sort", "fas fa-sort-alpha-down", "fas fa-sort-alpha-up", "fas fa-sort-amount-down", "fas fa-sort-amount-up", "fas fa-sort-down", "fas fa-sort-numeric-down", "fas fa-sort-numeric-up", "fas fa-sort-up", "fas fa-spa", "fas fa-space-shuttle", "fas fa-spider", "fas fa-spinner", "fas fa-splotch", "fas fa-spray-can", "fas fa-square", "fas fa-square-full", "fas fa-square-root-alt", "fas fa-stamp", "fas fa-star", "fas fa-star-and-crescent", "fas fa-star-half", "fas fa-star-half-alt", "fas fa-star-of-david", "fas fa-star-of-life", "fas fa-step-backward", "fas fa-step-forward", "fas fa-stethoscope", "fas fa-sticky-note", "fas fa-stop", "fas fa-stop-circle", "fas fa-stopwatch", "fas fa-store", "fas fa-store-alt", "fas fa-stream", "fas fa-street-view", "fas fa-strikethrough", "fas fa-stroopwafel", "fas fa-subscript", "fas fa-subway", "fas fa-suitcase", "fas fa-suitcase-rolling", "fas fa-sun", "fas fa-superscript", "fas fa-surprise", "fas fa-swatchbook", "fas fa-swimmer", "fas fa-swimming-pool", "fas fa-synagogue", "fas fa-sync", "fas fa-sync-alt", "fas fa-syringe", "fas fa-table", "fas fa-table-tennis", "fas fa-tablet", "fas fa-tablet-alt", "fas fa-tablets", "fas fa-tachometer-alt", "fas fa-tag", "fas fa-tags", "fas fa-tape", "fas fa-tasks", "fas fa-taxi", "fas fa-teeth", "fas fa-teeth-open", "fas fa-temperature-high", "fas fa-temperature-low", "fas fa-tenge", "fas fa-terminal", "fas fa-text-height", "fas fa-text-width", "fas fa-th", "fas fa-th-large", "fas fa-th-list", "fas fa-theater-masks", "fas fa-thermometer", "fas fa-thermometer-empty", "fas fa-thermometer-full", "fas fa-thermometer-half", "fas fa-thermometer-quarter", "fas fa-thermometer-three-quarters", "fas fa-thumbs-down", "fas fa-thumbs-up", "fas fa-thumbtack", "fas fa-ticket-alt", "fas fa-times", "fas fa-times-circle", "fas fa-tint", "fas fa-tint-slash", "fas fa-tired", "fas fa-toggle-off", "fas fa-toggle-on", "fas fa-toilet", "fas fa-toilet-paper", "fas fa-toolbox", "fas fa-tools", "fas fa-tooth", "fas fa-torah", "fas fa-torii-gate", "fas fa-tractor", "fas fa-trademark", "fas fa-traffic-light", "fas fa-train", "fas fa-tram", "fas fa-transgender", "fas fa-transgender-alt", "fas fa-trash", "fas fa-trash-alt", "fas fa-tree", "fas fa-trophy", "fas fa-truck", "fas fa-truck-loading", "fas fa-truck-monster", "fas fa-truck-moving", "fas fa-truck-pickup", "fas fa-tshirt", "fas fa-tty", "fas fa-tv", "fas fa-umbrella", "fas fa-umbrella-beach", "fas fa-underline", "fas fa-undo", "fas fa-undo-alt", "fas fa-universal-access", "fas fa-university", "fas fa-unlink", "fas fa-unlock", "fas fa-unlock-alt", "fas fa-upload", "fas fa-user", "fas fa-user-alt", "fas fa-user-alt-slash", "fas fa-user-astronaut", "fas fa-user-check", "fas fa-user-circle", "fas fa-user-clock", "fas fa-user-cog", "fas fa-user-edit", "fas fa-user-friends", "fas fa-user-graduate", "fas fa-user-injured", "fas fa-user-lock", "fas fa-user-md", "fas fa-user-minus", "fas fa-user-ninja", "fas fa-user-plus", "fas fa-user-secret", "fas fa-user-shield", "fas fa-user-slash", "fas fa-user-tag", "fas fa-user-tie", "fas fa-user-times", "fas fa-users", "fas fa-users-cog", "fas fa-utensil-spoon", "fas fa-utensils", "fas fa-vector-square", "fas fa-venus", "fas fa-venus-double", "fas fa-venus-mars", "fas fa-vial", "fas fa-vials", "fas fa-video", "fas fa-video-slash", "fas fa-vihara", "fas fa-volleyball-ball", "fas fa-volume-down", "fas fa-volume-mute", "fas fa-volume-off", "fas fa-volume-up", "fas fa-vote-yea", "fas fa-vr-cardboard", "fas fa-walking", "fas fa-wallet", "fas fa-warehouse", "fas fa-water", "fas fa-weight", "fas fa-weight-hanging", "fas fa-wheelchair", "fas fa-wifi", "fas fa-wind", "fas fa-window-close", "fas fa-window-maximize", "fas fa-window-minimize", "fas fa-window-restore", "fas fa-wine-bottle", "fas fa-wine-glass", "fas fa-wine-glass-alt", "fas fa-won-sign", "fas fa-wrench", "fas fa-x-ray", "fas fa-yen-sign", "fas fa-yin-yang", "far fa-address-book", "far fa-address-card", "far fa-angry", "far fa-arrow-alt-circle-down", "far fa-arrow-alt-circle-left", "far fa-arrow-alt-circle-right", "far fa-arrow-alt-circle-up", "far fa-bell", "far fa-bell-slash", "far fa-bookmark", "far fa-building", "far fa-calendar", "far fa-calendar-alt", "far fa-calendar-check", "far fa-calendar-minus", "far fa-calendar-plus", "far fa-calendar-times", "far fa-caret-square-down", "far fa-caret-square-left", "far fa-caret-square-right", "far fa-caret-square-up", "far fa-chart-bar", "far fa-check-circle", "far fa-check-square", "far fa-circle", "far fa-clipboard", "far fa-clock", "far fa-clone", "far fa-closed-captioning", "far fa-comment", "far fa-comment-alt", "far fa-comment-dots", "far fa-comments", "far fa-compass", "far fa-copy", "far fa-copyright", "far fa-credit-card", "far fa-dizzy", "far fa-dot-circle", "far fa-edit", "far fa-envelope", "far fa-envelope-open", "far fa-eye", "far fa-eye-slash", "far fa-file", "far fa-file-alt", "far fa-file-archive", "far fa-file-audio", "far fa-file-code", "far fa-file-excel", "far fa-file-image", "far fa-file-pdf", "far fa-file-powerpoint", "far fa-file-video", "far fa-file-word", "far fa-flag", "far fa-flushed", "far fa-folder", "far fa-folder-open", "far fa-frown", "far fa-frown-open", "far fa-futbol", "far fa-gem", "far fa-grimace", "far fa-grin", "far fa-grin-alt", "far fa-grin-beam", "far fa-grin-beam-sweat", "far fa-grin-hearts", "far fa-grin-squint", "far fa-grin-squint-tears", "far fa-grin-stars", "far fa-grin-tears", "far fa-grin-tongue", "far fa-grin-tongue-squint", "far fa-grin-tongue-wink", "far fa-grin-wink", "far fa-hand-lizard", "far fa-hand-paper", "far fa-hand-peace", "far fa-hand-point-down", "far fa-hand-point-left", "far fa-hand-point-right", "far fa-hand-point-up", "far fa-hand-pointer", "far fa-hand-rock", "far fa-hand-scissors", "far fa-hand-spock", "far fa-handshake", "far fa-hdd", "far fa-heart", "far fa-hospital", "far fa-hourglass", "far fa-id-badge", "far fa-id-card", "far fa-image", "far fa-images", "far fa-keyboard", "far fa-kiss", "far fa-kiss-beam", "far fa-kiss-wink-heart", "far fa-laugh", "far fa-laugh-beam", "far fa-laugh-squint", "far fa-laugh-wink", "far fa-lemon", "far fa-life-ring", "far fa-lightbulb", "far fa-list-alt", "far fa-map", "far fa-meh", "far fa-meh-blank", "far fa-meh-rolling-eyes", "far fa-minus-square", "far fa-money-bill-alt", "far fa-moon", "far fa-newspaper", "far fa-object-group", "far fa-object-ungroup", "far fa-paper-plane", "far fa-pause-circle", "far fa-play-circle", "far fa-plus-square", "far fa-question-circle", "far fa-registered", "far fa-sad-cry", "far fa-sad-tear", "far fa-save", "far fa-share-square", "far fa-smile", "far fa-smile-beam", "far fa-smile-wink", "far fa-snowflake", "far fa-square", "far fa-star", "far fa-star-half", "far fa-sticky-note", "far fa-stop-circle", "far fa-sun", "far fa-surprise", "far fa-thumbs-down", "far fa-thumbs-up", "far fa-times-circle", "far fa-tired", "far fa-trash-alt", "far fa-user", "far fa-user-circle", "far fa-window-close", "far fa-window-maximize", "far fa-window-minimize", "far fa-window-restore", "fab fa-500px", "fab fa-accessible-icon", "fab fa-accusoft", "fab fa-acquisitions-incorporated", "fab fa-adn", "fab fa-adobe", "fab fa-adversal", "fab fa-affiliatetheme", "fab fa-algolia", "fab fa-alipay", "fab fa-amazon", "fab fa-amazon-pay", "fab fa-amilia", "fab fa-android", "fab fa-angellist", "fab fa-angrycreative", "fab fa-angular", "fab fa-app-store", "fab fa-app-store-ios", "fab fa-apper", "fab fa-apple", "fab fa-apple-pay", "fab fa-artstation", "fab fa-asymmetrik", "fab fa-atlassian", "fab fa-audible", "fab fa-autoprefixer", "fab fa-avianex", "fab fa-aviato", "fab fa-aws", "fab fa-bandcamp", "fab fa-behance", "fab fa-behance-square", "fab fa-bimobject", "fab fa-bitbucket", "fab fa-bitcoin", "fab fa-bity", "fab fa-black-tie", "fab fa-blackberry", "fab fa-blogger", "fab fa-blogger-b", "fab fa-bluetooth", "fab fa-bluetooth-b", "fab fa-btc", "fab fa-buromobelexperte", "fab fa-buysellads", "fab fa-canadian-maple-leaf", "fab fa-cc-amazon-pay", "fab fa-cc-amex", "fab fa-cc-apple-pay", "fab fa-cc-diners-club", "fab fa-cc-discover", "fab fa-cc-jcb", "fab fa-cc-mastercard", "fab fa-cc-paypal", "fab fa-cc-stripe", "fab fa-cc-visa", "fab fa-centercode", "fab fa-centos", "fab fa-chrome", "fab fa-cloudscale", "fab fa-cloudsmith", "fab fa-cloudversify", "fab fa-codepen", "fab fa-codiepie", "fab fa-confluence", "fab fa-connectdevelop", "fab fa-contao", "fab fa-cpanel", "fab fa-creative-commons", "fab fa-creative-commons-by", "fab fa-creative-commons-nc", "fab fa-creative-commons-nc-eu", "fab fa-creative-commons-nc-jp", "fab fa-creative-commons-nd", "fab fa-creative-commons-pd", "fab fa-creative-commons-pd-alt", "fab fa-creative-commons-remix", "fab fa-creative-commons-sa", "fab fa-creative-commons-sampling", "fab fa-creative-commons-sampling-plus", "fab fa-creative-commons-share", "fab fa-creative-commons-zero", "fab fa-critical-role", "fab fa-css3", "fab fa-css3-alt", "fab fa-cuttlefish", "fab fa-d-and-d", "fab fa-d-and-d-beyond", "fab fa-dashcube", "fab fa-delicious", "fab fa-deploydog", "fab fa-deskpro", "fab fa-dev", "fab fa-deviantart", "fab fa-dhl", "fab fa-diaspora", "fab fa-digg", "fab fa-digital-ocean", "fab fa-discord", "fab fa-discourse", "fab fa-dochub", "fab fa-docker", "fab fa-draft2digital", "fab fa-dribbble", "fab fa-dribbble-square", "fab fa-dropbox", "fab fa-drupal", "fab fa-dyalog", "fab fa-earlybirds", "fab fa-ebay", "fab fa-edge", "fab fa-elementor", "fab fa-ello", "fab fa-ember", "fab fa-empire", "fab fa-envira", "fab fa-erlang", "fab fa-ethereum", "fab fa-etsy", "fab fa-expeditedssl", "fab fa-facebook", "fab fa-facebook-f", "fab fa-facebook-messenger", "fab fa-facebook-square", "fab fa-fantasy-flight-games", "fab fa-fedex", "fab fa-fedora", "fab fa-figma", "fab fa-firefox", "fab fa-first-order", "fab fa-first-order-alt", "fab fa-firstdraft", "fab fa-flickr", "fab fa-flipboard", "fab fa-fly", "fab fa-font-awesome", "fab fa-font-awesome-alt", "fab fa-font-awesome-flag", "fab fa-fonticons", "fab fa-fonticons-fi", "fab fa-fort-awesome", "fab fa-fort-awesome-alt", "fab fa-forumbee", "fab fa-foursquare", "fab fa-free-code-camp", "fab fa-freebsd", "fab fa-fulcrum", "fab fa-galactic-republic", "fab fa-galactic-senate", "fab fa-get-pocket", "fab fa-gg", "fab fa-gg-circle", "fab fa-git", "fab fa-git-square", "fab fa-github", "fab fa-github-alt", "fab fa-github-square", "fab fa-gitkraken", "fab fa-gitlab", "fab fa-gitter", "fab fa-glide", "fab fa-glide-g", "fab fa-gofore", "fab fa-goodreads", "fab fa-goodreads-g", "fab fa-google", "fab fa-google-drive", "fab fa-google-play", "fab fa-google-plus", "fab fa-google-plus-g", "fab fa-google-plus-square", "fab fa-google-wallet", "fab fa-gratipay", "fab fa-grav", "fab fa-gripfire", "fab fa-grunt", "fab fa-gulp", "fab fa-hacker-news", "fab fa-hacker-news-square", "fab fa-hackerrank", "fab fa-hips", "fab fa-hire-a-helper", "fab fa-hooli", "fab fa-hornbill", "fab fa-hotjar", "fab fa-houzz", "fab fa-html5", "fab fa-hubspot", "fab fa-imdb", "fab fa-instagram", "fab fa-intercom", "fab fa-internet-explorer", "fab fa-invision", "fab fa-ioxhost", "fab fa-itunes", "fab fa-itunes-note", "fab fa-java", "fab fa-jedi-order", "fab fa-jenkins", "fab fa-jira", "fab fa-joget", "fab fa-joomla", "fab fa-js", "fab fa-js-square", "fab fa-jsfiddle", "fab fa-kaggle", "fab fa-keybase", "fab fa-keycdn", "fab fa-kickstarter", "fab fa-kickstarter-k", "fab fa-korvue", "fab fa-laravel", "fab fa-lastfm", "fab fa-lastfm-square", "fab fa-leanpub", "fab fa-less", "fab fa-line", "fab fa-linkedin", "fab fa-linkedin-in", "fab fa-linode", "fab fa-linux", "fab fa-lyft", "fab fa-magento", "fab fa-mailchimp", "fab fa-mandalorian", "fab fa-markdown", "fab fa-mastodon", "fab fa-maxcdn", "fab fa-medapps", "fab fa-medium", "fab fa-medium-m", "fab fa-medrt", "fab fa-meetup", "fab fa-megaport", "fab fa-mendeley", "fab fa-microsoft", "fab fa-mix", "fab fa-mixcloud", "fab fa-mizuni", "fab fa-modx", "fab fa-monero", "fab fa-napster", "fab fa-neos", "fab fa-nimblr", "fab fa-nintendo-switch", "fab fa-node", "fab fa-node-js", "fab fa-npm", "fab fa-ns8", "fab fa-nutritionix", "fab fa-odnoklassniki", "fab fa-odnoklassniki-square", "fab fa-old-republic", "fab fa-opencart", "fab fa-openid", "fab fa-opera", "fab fa-optin-monster", "fab fa-osi", "fab fa-page4", "fab fa-pagelines", "fab fa-palfed", "fab fa-patreon", "fab fa-paypal", "fab fa-penny-arcade", "fab fa-periscope", "fab fa-phabricator", "fab fa-phoenix-framework", "fab fa-phoenix-squadron", "fab fa-php", "fab fa-pied-piper", "fab fa-pied-piper-alt", "fab fa-pied-piper-hat", "fab fa-pied-piper-pp", "fab fa-pinterest", "fab fa-pinterest-p", "fab fa-pinterest-square", "fab fa-playstation", "fab fa-product-hunt", "fab fa-pushed", "fab fa-python", "fab fa-qq", "fab fa-quinscape", "fab fa-quora", "fab fa-r-project", "fab fa-raspberry-pi", "fab fa-ravelry", "fab fa-react", "fab fa-reacteurope", "fab fa-readme", "fab fa-rebel", "fab fa-red-river", "fab fa-reddit", "fab fa-reddit-alien", "fab fa-reddit-square", "fab fa-redhat", "fab fa-renren", "fab fa-replyd", "fab fa-researchgate", "fab fa-resolving", "fab fa-rev", "fab fa-rocketchat", "fab fa-rockrms", "fab fa-safari", "fab fa-sass", "fab fa-schlix", "fab fa-scribd", "fab fa-searchengin", "fab fa-sellcast", "fab fa-sellsy", "fab fa-servicestack", "fab fa-shirtsinbulk", "fab fa-shopware", "fab fa-simplybuilt", "fab fa-sistrix", "fab fa-sith", "fab fa-sketch", "fab fa-skyatlas", "fab fa-skype", "fab fa-slack", "fab fa-slack-hash", "fab fa-slideshare", "fab fa-snapchat", "fab fa-snapchat-ghost", "fab fa-snapchat-square", "fab fa-soundcloud", "fab fa-sourcetree", "fab fa-speakap", "fab fa-spotify", "fab fa-squarespace", "fab fa-stack-exchange", "fab fa-stack-overflow", "fab fa-staylinked", "fab fa-steam", "fab fa-steam-square", "fab fa-steam-symbol", "fab fa-sticker-mule", "fab fa-strava", "fab fa-stripe", "fab fa-stripe-s", "fab fa-studiovinari", "fab fa-stumbleupon", "fab fa-stumbleupon-circle", "fab fa-superpowers", "fab fa-supple", "fab fa-suse", "fab fa-teamspeak", "fab fa-telegram", "fab fa-telegram-plane", "fab fa-tencent-weibo", "fab fa-the-red-yeti", "fab fa-themeco", "fab fa-themeisle", "fab fa-think-peaks", "fab fa-trade-federation", "fab fa-trello", "fab fa-tripadvisor", "fab fa-tumblr", "fab fa-tumblr-square", "fab fa-twitch", "fab fa-twitter", "fab fa-twitter-square", "fab fa-typo3", "fab fa-uber", "fab fa-ubuntu", "fab fa-uikit", "fab fa-uniregistry", "fab fa-untappd", "fab fa-ups", "fab fa-usb", "fab fa-usps", "fab fa-ussunnah", "fab fa-vaadin", "fab fa-viacoin", "fab fa-viadeo", "fab fa-viadeo-square", "fab fa-viber", "fab fa-vimeo", "fab fa-vimeo-square", "fab fa-vimeo-v", "fab fa-vine", "fab fa-vk", "fab fa-vnv", "fab fa-vuejs", "fab fa-weebly", "fab fa-weibo", "fab fa-weixin", "fab fa-whatsapp", "fab fa-whatsapp-square", "fab fa-whmcs", "fab fa-wikipedia-w", "fab fa-windows", "fab fa-wix", "fab fa-wizards-of-the-coast", "fab fa-wolf-pack-battalion", "fab fa-wordpress", "fab fa-wordpress-simple", "fab fa-wpbeginner", "fab fa-wpexplorer", "fab fa-wpforms", "fab fa-wpressr", "fab fa-xbox", "fab fa-xing", "fab fa-xing-square", "fab fa-y-combinator", "fab fa-yahoo", "fab fa-yandex", "fab fa-yandex-international", "fab fa-yarn", "fab fa-yelp", "fab fa-yoast", "fab fa-youtube", "fab fa-youtube-square", "fab fa-zhihu"];
/* harmony default export */ __webpack_exports__["default"] = (icons_);

/***/ }),

/***/ "./src/blocks/icon-block/editor.scss":
/*!*******************************************!*\
  !*** ./src/blocks/icon-block/editor.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/icon-block/index.js":
/*!****************************************!*\
  !*** ./src/blocks/icon-block/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/icon-block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-assets/icons */ "./src/blocks/block-assets/icons.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _block_assets_font_family__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../block-assets/font-family */ "./src/blocks/block-assets/font-family.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("zita-blocks/icon-block", {
  title: "Icon",
  icon: "star-empty",
  description: "Use a slide title for your main title for the slide.",
  category: "zita-category",
  keywords: ["icon", "iconbox"],
  attributes: {
    iconClass: {
      type: "string",
      default: "fab fa-wordpress-simple"
    },
    iconColor: {
      type: "string",
      default: "#0693e3"
    },
    iconBgColor: {
      type: "string",
      default: "#EEF6F9"
    },
    titleColor: {
      type: "string",
      default: "#0693e3"
    },
    iconFontsize: {
      type: "number",
      default: 55
    },
    titleFontsize: {
      type: "number",
      default: 24
    },
    titleTxt: {
      type: "string",
      default: "Icon Title"
    },
    titleArrenge: {
      type: "string",
      default: "column"
    },
    itemAlign: {
      type: "text",
      default: "center"
    },
    titleMarginTop: {
      type: "number",
      defalut: 18
    },
    titleMarginRight: {
      type: "number"
    },
    titleMarginBottom: {
      type: "number"
    },
    titleMarginLeft: {
      type: "number",
      default: 11
    },
    titleOnOff: {
      type: "boolean",
      default: true
    },
    iconPaddingTop: {
      type: "number",
      default: 16
    },
    iconPaddingRight: {
      type: "number",
      default: 20
    },
    titleTag: {
      type: "string",
      default: "p"
    },
    titleFF: {
      type: "string",
      default: "Ubuntu Mono"
    },
    iconBorder: {
      type: "boolean",
      default: false
    },
    iconBorderWidth: {
      type: "number",
      default: 2
    },
    iconBorderRadius: {
      type: "number",
      default: 50
    },
    iconBorderColor: {
      type: "string",
      default: "#ffa600"
    },
    iconSpace: {
      type: "number",
      default: 79
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var iconClass = attributes.iconClass,
        iconColor = attributes.iconColor,
        iconBgColor = attributes.iconBgColor,
        titleColor = attributes.titleColor,
        iconFontsize = attributes.iconFontsize,
        titleFF = attributes.titleFF,
        titleFontsize = attributes.titleFontsize,
        titleMarginTop = attributes.titleMarginTop,
        titleMarginRight = attributes.titleMarginRight,
        titleMarginBottom = attributes.titleMarginBottom,
        titleMarginLeft = attributes.titleMarginLeft,
        titleTxt = attributes.titleTxt,
        titleArrenge = attributes.titleArrenge,
        itemAlign = attributes.itemAlign,
        titleOnOff = attributes.titleOnOff,
        iconPaddingTop = attributes.iconPaddingTop,
        iconPaddingRight = attributes.iconPaddingRight,
        titleTag = attributes.titleTag,
        iconBorder = attributes.iconBorder,
        iconBorderWidth = attributes.iconBorderWidth,
        iconBorderRadius = attributes.iconBorderRadius,
        iconBorderColor = attributes.iconBorderColor,
        iconSpace = attributes.iconSpace;
    var borderStyle = iconBorder ? {
      borderWidth: iconBorderWidth + "px",
      borderStyle: "solid",
      borderColor: iconBorderColor,
      borderRadius: iconBorderRadius + "%",
      width: iconSpace + "px",
      height: iconSpace + "px"
    } : null;

    var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
        _useState2 = _slicedToArray(_useState, 2),
        activeIconContainer = _useState2[0],
        activeIconContainerSet = _useState2[1];

    var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(_block_assets_icons__WEBPACK_IMPORTED_MODULE_1__["default"]),
        _useState4 = _slicedToArray(_useState3, 2),
        iconList = _useState4[0],
        setIconList = _useState4[1];

    var iconReff = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
      var handler = function handler(event) {
        if (!iconReff.current.contains(event.target)) {
          activeIconContainerSet(false);
        }
      };

      if (activeIconContainer) document.addEventListener("mousedown", handler);
      return function () {
        document.removeEventListener("mousedown", handler);
      };
    });

    var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
        _useState6 = _slicedToArray(_useState5, 2),
        activeFamilyContainer2 = _useState6[0],
        activeFamilyDrop2 = _useState6[1];

    var familyRef2 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
      var handler = function handler(event) {
        if (!familyRef2.current.contains(event.target)) {
          activeFamilyDrop2(false);
        }
      };

      if (activeFamilyContainer2) document.addEventListener("mouseup", handler);
      return function () {
        document.removeEventListener("mouseup", handler);
      };
    });
    return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
      title: "Icon Setting",
      initialOpen: false
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Choose Icon")), wp.element.createElement("div", {
      ref: iconReff,
      className: "wpgt-radio-wrap ".concat(activeIconContainer ? "active" : "")
    }, wp.element.createElement("div", {
      className: "selected-icon",
      onClick: function onClick(e) {
        // let set__container = !activeIconContainer;
        activeIconContainerSet(true);
      }
    }, wp.element.createElement("i", {
      className: iconClass
    }), wp.element.createElement("div", {
      className: "search-container"
    }, wp.element.createElement("i", {
      className: "fas fa-search"
    }), wp.element.createElement("input", {
      type: "text",
      onChange: function onChange(e) {
        var value_ = e.target.value;

        if (value_ != "") {
          var newAr = _block_assets_icons__WEBPACK_IMPORTED_MODULE_1__["default"].filter(function (checkStr) {
            return checkStr.search(value_) != -1;
          });

          if (newAr.length) {
            setIconList(newAr);
          }
        } else {
          setIconList(_block_assets_icons__WEBPACK_IMPORTED_MODULE_1__["default"]);
        }
      }
    }))), wp.element.createElement("div", {
      className: "wpgt-radio-container",
      onChange: function onChange(e) {
        setAttributes({
          iconClass: e.target.value
        });
      }
    }, iconList.map(function (iconValue) {
      return wp.element.createElement("div", {
        className: "wpgt-radio-wrapper"
      }, wp.element.createElement("input", {
        id: "wpgt-Radio-" + iconValue,
        type: "radio",
        name: "wpgt-choose-icon",
        className: "radio-input",
        value: iconValue
      }), wp.element.createElement("label", {
        htmlFor: "wpgt-Radio-" + iconValue
      }, wp.element.createElement("i", {
        className: iconValue
      })));
    }))), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Icon Position")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
      value: titleArrenge // e.g: value = [ 'a', 'c' ]
      ,
      onChange: function onChange(e) {
        setAttributes({
          titleArrenge: e,
          titleMarginTop: 0,
          titleMarginRight: 0,
          titleMarginBottom: 0,
          titleMarginLeft: 0
        });
      },
      options: [{
        value: null,
        label: "Select a User",
        disabled: true
      }, {
        value: "unset",
        label: "Left"
      }, {
        value: "row-reverse",
        label: "Right"
      }, {
        value: "column",
        label: "Top"
      }, {
        value: "column-reverse",
        label: "Bottom"
      }]
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Space Between Icon and Title")), titleArrenge == "column" && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      label: "Top",
      value: titleMarginTop,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          titleMarginTop: e
        });
      }
    }), titleArrenge == "row-reverse" && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      label: "Right",
      value: titleMarginRight,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          titleMarginRight: e
        });
      }
    }), titleArrenge == "column-reverse" && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      label: "Bottom",
      value: titleMarginBottom,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          titleMarginBottom: e
        });
      }
    }), titleArrenge == "unset" && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      label: "Left",
      value: titleMarginLeft,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          titleMarginLeft: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Size")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      value: iconFontsize,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          iconFontsize: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Border")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ToggleControl"], {
      label: iconBorder ? "Disable" : "Enable",
      checked: iconBorder,
      onChange: function onChange(e) {
        return setAttributes({
          iconBorder: e
        });
      }
    }), iconBorder && wp.element.createElement("div", {
      className: "icon-border-setting"
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      label: "Border Width",
      value: iconBorderWidth,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          iconBorderWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      label: "Border Radius",
      value: iconBorderRadius,
      min: 0,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          iconBorderRadius: e
        });
      }
    }), wp.element.createElement("p", null, "Border Color"), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"], {
      onChange: function onChange(color) {
        return setAttributes({
          iconBorderColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      label: "Icon Space",
      value: iconSpace,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          iconSpace: e
        });
      }
    }))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
      title: "Title Setting",
      initialOpen: false
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ToggleControl"], {
      label: titleOnOff ? "Hide" : "Show",
      checked: titleOnOff,
      onChange: function onChange(e) {
        return setAttributes({
          titleOnOff: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Choose Tag")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
      value: titleTag // e.g: value = [ 'a', 'c' ]
      ,
      onChange: function onChange(e) {
        return setAttributes({
          titleTag: e
        });
      },
      options: [{
        value: null,
        label: "Choose Tag",
        disabled: true
      }, {
        value: "h1",
        label: "h1"
      }, {
        value: "h2",
        label: "h2"
      }, {
        value: "h3",
        label: "h3"
      }, {
        value: "p",
        label: "p"
      }]
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Size")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      value: titleFontsize,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          titleFontsize: e
        });
      }
    }), wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Family")), wp.element.createElement("div", {
      ref: familyRef2,
      className: "font-family-drop-down ".concat(activeFamilyContainer2 ? "active" : "")
    }, wp.element.createElement("div", {
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer2;
        activeFamilyDrop2(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: titleFF
      }
    }, titleFF ? titleFF : "Choose Family")), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            titleFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    }))))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
      title: "Color Setting",
      initialOpen: false
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Background Color")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ColorPicker"], {
      onChangeComplete: function onChangeComplete(colorBg) {
        var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");
        setAttributes({
          iconBgColor: color
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Icon Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"], {
      onChange: function onChange(color) {
        return setAttributes({
          iconColor: color
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Title Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"], {
      onChange: function onChange(e) {
        return setAttributes({
          titleColor: e
        });
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
      title: "Container Setting",
      initialOpen: false
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Padding")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      label: "Top & Bottom",
      value: iconPaddingTop,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          iconPaddingTop: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      label: "Left & Right",
      value: iconPaddingRight,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          iconPaddingRight: e
        });
      }
    }))), wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockControls"], null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["AlignmentToolbar"], {
      value: itemAlign,
      onChange: function onChange(e) {
        var side = e == "left" ? "left" : e == "right" ? "flex-end" : "center";
        setAttributes({
          itemAlign: side
        });
      }
    })), wp.element.createElement("div", {
      className: "themehunk-icon-block",
      style: {
        "justify-content": itemAlign
      }
    }, wp.element.createElement("div", {
      style: {
        "flex-direction": titleArrenge,
        backgroundColor: iconBgColor,
        paddingTop: iconPaddingTop + "px",
        paddingRight: iconPaddingRight + "px",
        paddingBottom: iconPaddingTop + "px",
        paddingLeft: iconPaddingRight + "px"
      }
    }, wp.element.createElement("div", {
      className: "icon-container",
      style: borderStyle
    }, wp.element.createElement("i", {
      style: {
        color: iconColor,
        fontSize: iconFontsize + "px"
      },
      className: iconClass
    })), titleOnOff && wp.element.createElement("div", {
      className: "text-container"
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      key: "editable",
      tagName: titleTag,
      placeholder: "Icon Title",
      value: titleTxt,
      onChange: function onChange(e) {
        return setAttributes({
          titleTxt: e
        });
      },
      style: {
        color: titleColor,
        fontSize: titleFontsize + "px",
        marginTop: titleMarginTop + "px",
        marginRight: titleMarginRight + "px",
        marginBottom: titleMarginBottom + "px",
        marginLeft: titleMarginLeft + "px",
        fontFamily: titleFF
      }
    })))))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var iconClass = attributes.iconClass,
        iconColor = attributes.iconColor,
        iconBgColor = attributes.iconBgColor,
        titleColor = attributes.titleColor,
        iconFontsize = attributes.iconFontsize,
        titleFontsize = attributes.titleFontsize,
        titleMarginTop = attributes.titleMarginTop,
        titleMarginRight = attributes.titleMarginRight,
        titleMarginBottom = attributes.titleMarginBottom,
        titleMarginLeft = attributes.titleMarginLeft,
        titleTxt = attributes.titleTxt,
        titleArrenge = attributes.titleArrenge,
        titleFF = attributes.titleFF,
        itemAlign = attributes.itemAlign,
        titleOnOff = attributes.titleOnOff,
        titleTag = attributes.titleTag,
        iconBorder = attributes.iconBorder,
        iconBorderWidth = attributes.iconBorderWidth,
        iconBorderRadius = attributes.iconBorderRadius,
        iconBorderColor = attributes.iconBorderColor,
        iconSpace = attributes.iconSpace,
        iconPaddingTop = attributes.iconPaddingTop,
        iconPaddingRight = attributes.iconPaddingRight;
    var borderStyle = iconBorder ? {
      borderWidth: iconBorderWidth + "px",
      borderStyle: "solid",
      borderColor: iconBorderColor,
      borderRadius: iconBorderRadius + "%",
      width: iconSpace + "px",
      height: iconSpace + "px"
    } : null; // console.log(borderStyle);

    return wp.element.createElement("div", {
      className: "themehunk-icon-block",
      style: {
        "justify-content": itemAlign
      }
    }, wp.element.createElement("div", {
      style: {
        "flex-direction": titleArrenge,
        backgroundColor: iconBgColor,
        paddingTop: iconPaddingTop + "px",
        paddingRight: iconPaddingRight + "px",
        paddingBottom: iconPaddingTop + "px",
        paddingLeft: iconPaddingRight + "px"
      }
    }, wp.element.createElement("div", {
      className: "icon-container",
      style: borderStyle
    }, wp.element.createElement("i", {
      style: {
        color: iconColor,
        fontSize: iconFontsize + "px"
      },
      className: iconClass
    })), titleOnOff && wp.element.createElement("div", {
      className: "text-container"
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: titleTag,
      value: titleTxt,
      style: {
        color: titleColor,
        fontSize: titleFontsize + "px",
        marginTop: titleMarginTop + "px",
        marginRight: titleMarginRight + "px",
        marginBottom: titleMarginBottom + "px",
        marginLeft: titleMarginLeft + "px",
        fontFamily: titleFF
      }
    }))));
  }
});

/***/ }),

/***/ "./src/blocks/pricing-table/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/pricing-table/editor.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/pricing-table/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/pricing-table/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parent */ "./src/blocks/pricing-table/parent.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/pricing-table/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_assets_font_family__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-assets/font-family */ "./src/blocks/block-assets/font-family.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var attrS = {
  headingTxt: {
    type: "string",
    default: "Basic"
  },
  headingFontSize: {
    type: "number",
    default: 29
  },
  headingColor: {
    type: "string",
    default: "#ffffff"
  },
  headingFF: {
    type: "string"
  },
  headingDescription: {
    type: "string"
  },
  headerBackground: {
    type: "string",
    default: "#5f5f5f"
  },
  descriptionColor: {
    type: "string",
    default: "grey"
  },
  descriptionFontSize: {
    type: "number"
  },
  descriptionFF: {
    type: "string"
  },
  middleTxt: {
    type: "string",
    default: "<p>Email Marketing</p><p>Email Builder</p><p>Client Testing</p><p>2 User Free</p><p>Multiple Email Support</p>"
  },
  pointsColor: {
    type: "string",
    default: "white"
  },
  middleBgColor: {
    type: "string",
    default: "#2B2B2B"
  },
  pointsFontSize: {
    type: "number",
    default: 16
  },
  pointsSpaceBw: {
    type: "number",
    default: 24
  },
  pointAlign: {
    type: "string",
    default: "center"
  },
  pointsFF: {
    type: "string"
  },
  currencyC: {
    type: "string",
    default: "$"
  },
  // currencyColor: { type: "string" },
  currencyFs: {
    type: "number",
    default: 16
  },
  priceMonth: {
    type: "string",
    default: "99"
  },
  currencyFormate: {
    type: "boolean",
    default: true
  },
  currencyFontWeight: {
    type: "string"
  },
  priceMonthPrice: {
    type: "string",
    default: "/ month"
  },
  priceMonthPriceFs: {
    type: "string"
  },
  priceMonthPriceColor: {
    type: "string",
    default: "#c2c4c4"
  },
  pricePosition: {
    type: "string",
    default: "top"
  },
  priceFontSize: {
    type: "number",
    default: 50
  },
  priceColor: {
    type: "string",
    default: "#ffffff"
  },
  priceBgColor: {
    type: "string"
  },
  priceFF: {
    type: "string"
  },
  priceInline: {
    type: "boolean",
    default: true
  },
  pricePadding: {
    type: "number",
    default: 0
  },
  priceBorder: {
    type: "boolean",
    default: false
  },
  priceBorderWidth: {
    type: "number",
    default: 2
  },
  priceBorderRadius: {
    type: "number",
    default: 50
  },
  priceBorderColor: {
    type: "string",
    default: "#ffa600"
  },
  priceSpace: {
    type: "number",
    default: 100
  },
  linkTxt: {
    type: "string",
    default: "ORDER NOW"
  },
  linkLink: {
    type: "string",
    default: "#"
  },
  linkTarget: {
    type: "boolean",
    default: false
  },
  linkColor: {
    type: "string"
  },
  linkBgColor: {
    type: "string",
    default: "#f1b426"
  },
  linkFontSize: {
    type: "number"
  },
  linkBorder: {
    type: "boolean",
    default: false
  },
  linkBorderWidth: {
    type: "number",
    default: 1
  },
  linkBorderRadius: {
    type: "number",
    default: 2
  },
  linkBorderColor: {
    type: "string"
  },
  linkSpaceV: {
    type: "number",
    default: 14
  },
  linkSpaceH: {
    type: "number",
    default: 45
  },
  bottomTxt: {
    type: "string",
    default: "Terms & Conditions"
  },
  bottomTxtColor: {
    type: "string",
    default: "white"
  },
  bottomTxtFontSize: {
    type: "number"
  },
  bottomTxtFF: {
    type: "string"
  },
  footerBgColor: {
    type: "string",
    default: "#2B2B2B"
  },
  // containerBgColor: {
  //   type: "string",
  // },
  containerBorder: {
    type: "boolean",
    default: false
  },
  containerBorderWidth: {
    type: "number"
  },
  containerBorderRadius: {
    type: "number"
  },
  containerBorderColor: {
    type: "string"
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])("zita-blocks/pricing-table-table", {
  title: "Price Table Colomn",
  icon: "table-col-before",
  category: "zita-category",
  parent: ["zita-blocks/pricing-table-section"],
  keywords: ["price", "pricebox"],
  attributes: attrS,
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var headerBackground = attributes.headerBackground,
        headingTxt = attributes.headingTxt,
        headingFontSize = attributes.headingFontSize,
        headingColor = attributes.headingColor,
        headingFF = attributes.headingFF,
        headingDescription = attributes.headingDescription,
        descriptionColor = attributes.descriptionColor,
        descriptionFontSize = attributes.descriptionFontSize,
        descriptionFF = attributes.descriptionFF,
        middleTxt = attributes.middleTxt,
        middleBgColor = attributes.middleBgColor,
        pointsColor = attributes.pointsColor,
        pointsFontSize = attributes.pointsFontSize,
        pointsSpaceBw = attributes.pointsSpaceBw,
        pointsFF = attributes.pointsFF,
        pointAlign = attributes.pointAlign,
        priceMonth = attributes.priceMonth,
        priceMonthPrice = attributes.priceMonthPrice,
        priceMonthPriceFs = attributes.priceMonthPriceFs,
        priceMonthPriceColor = attributes.priceMonthPriceColor,
        pricePosition = attributes.pricePosition,
        priceFontSize = attributes.priceFontSize,
        priceColor = attributes.priceColor,
        priceBgColor = attributes.priceBgColor,
        priceFF = attributes.priceFF,
        priceInline = attributes.priceInline,
        currencyFontWeight = attributes.currencyFontWeight,
        priceBorder = attributes.priceBorder,
        priceBorderWidth = attributes.priceBorderWidth,
        priceBorderRadius = attributes.priceBorderRadius,
        priceBorderColor = attributes.priceBorderColor,
        priceSpace = attributes.priceSpace,
        priceSpaceV = attributes.priceSpaceV,
        priceSpaceH = attributes.priceSpaceH,
        currencyC = attributes.currencyC,
        currencyFs = attributes.currencyFs,
        currencyFormate = attributes.currencyFormate,
        linkTxt = attributes.linkTxt,
        linkLink = attributes.linkLink,
        linkTarget = attributes.linkTarget,
        linkColor = attributes.linkColor,
        linkBgColor = attributes.linkBgColor,
        linkFontSize = attributes.linkFontSize,
        linkBorder = attributes.linkBorder,
        linkBorderWidth = attributes.linkBorderWidth,
        linkBorderRadius = attributes.linkBorderRadius,
        linkBorderColor = attributes.linkBorderColor,
        linkSpaceH = attributes.linkSpaceH,
        linkSpaceV = attributes.linkSpaceV,
        bottomTxt = attributes.bottomTxt,
        bottomTxtColor = attributes.bottomTxtColor,
        bottomTxtFontSize = attributes.bottomTxtFontSize,
        bottomTxtFF = attributes.bottomTxtFF,
        footerBgColor = attributes.footerBgColor,
        containerBorder = attributes.containerBorder,
        containerBorderWidth = attributes.containerBorderWidth,
        containerBorderRadius = attributes.containerBorderRadius,
        containerBorderColor = attributes.containerBorderColor;
    var containerBorderStyle = containerBorder ? {
      borderWidth: containerBorderWidth + "px",
      borderStyle: "solid",
      borderColor: containerBorderColor,
      borderRadius: containerBorderRadius + "px"
    } : {}; // containerBorderStyle = containerBgColor
    //   ? {
    //       ...containerBorderStyle,
    //       ...{
    //         backgroundColor: containerBgColor,
    //       },
    //     }
    //   : containerBorderStyle;
    // price style

    var priceStyle = {
      backgroundColor: priceBgColor,
      fontFamily: priceFF,
      fontWeight: currencyFontWeight
    };
    if (priceBorder) priceStyle = _objectSpread(_objectSpread({}, priceStyle), {
      borderWidth: priceBorderWidth + "px",
      borderRadius: priceBorderRadius + (!priceInline ? "%" : "px"),
      borderColor: priceBorderColor,
      borderStyle: "solid"
    });

    if (!priceInline) {
      priceStyle = _objectSpread(_objectSpread({}, priceStyle), {
        height: priceSpace + "px",
        width: priceSpace + "px"
      });
    } else {
      priceStyle = _objectSpread(_objectSpread({}, priceStyle), {
        paddingTop: priceSpaceV + "px",
        paddingBottom: priceSpaceV + "px",
        paddingLeft: priceSpaceH + "px",
        paddingRight: priceSpaceH + "px"
      });
    }

    var link_style = {
      color: linkColor,
      backgroundColor: linkBgColor,
      fontSize: linkFontSize + "px",
      paddingLeft: linkSpaceH + "px",
      paddingRight: linkSpaceH + "px",
      paddingTop: linkSpaceV + "px",
      paddingBottom: linkSpaceV + "px"
    };
    link_style = linkBorder ? _objectSpread(_objectSpread({}, {
      borderWidth: linkBorderWidth + "px",
      borderRadius: linkBorderRadius + "px",
      borderStyle: "solid",
      borderColor: linkBorderColor
    }), link_style) : link_style; // one

    var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
        _useState2 = _slicedToArray(_useState, 2),
        activeFamilyContainer = _useState2[0],
        activeFamilyDrop = _useState2[1];

    var familyRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
      var handler = function handler(event) {
        if (!familyRef.current.contains(event.target)) {
          activeFamilyDrop(false);
        }
      };

      if (activeFamilyContainer) document.addEventListener("mouseup", handler);
      return function () {
        document.removeEventListener("mouseup", handler);
      };
    }); // two

    var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
        _useState4 = _slicedToArray(_useState3, 2),
        activeFamilyContainer2 = _useState4[0],
        activeFamilyDrop2 = _useState4[1];

    var familyRef2 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
      var handler = function handler(event) {
        if (!familyRef2.current.contains(event.target)) {
          activeFamilyDrop2(false);
        }
      };

      if (activeFamilyContainer2) document.addEventListener("mouseup", handler);
      return function () {
        document.removeEventListener("mouseup", handler);
      };
    });
    return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: "Header Section",
      initialOpen: false
    }, wp.element.createElement("p", {
      className: "block-inside"
    }, "Header Setting"), wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Family")), wp.element.createElement("div", {
      ref: familyRef,
      className: "font-family-drop-down ".concat(activeFamilyContainer ? "active" : "")
    }, wp.element.createElement("div", {
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer;
        activeFamilyDrop(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: headingFF
      }
    }, headingFF ? headingFF : "Choose Family")), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            headingFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    })))), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: headingColor,
      onChange: function onChange(color) {
        return setAttributes({
          headingColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Font Size",
      value: headingFontSize,
      min: 0,
      max: 60,
      onChange: function onChange(e) {
        return setAttributes({
          headingFontSize: e
        });
      }
    }), wp.element.createElement("p", {
      className: "block-inside"
    }, "Short Description"), wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Family")), wp.element.createElement("div", {
      ref: familyRef2,
      className: "font-family-drop-down ".concat(activeFamilyContainer2 ? "active" : "")
    }, wp.element.createElement("div", {
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer2;
        activeFamilyDrop2(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: descriptionFF
      }
    }, descriptionFF ? descriptionFF : "Choose Family")), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            descriptionFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    })))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Font Size",
      value: descriptionFontSize,
      min: 0,
      max: 60,
      onChange: function onChange(e) {
        return setAttributes({
          descriptionFontSize: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: descriptionColor,
      onChange: function onChange(color) {
        return setAttributes({
          descriptionColor: color
        });
      }
    }), wp.element.createElement("p", {
      className: "block-inside"
    }, "Background Color"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ColorPicker"], {
      color: headerBackground,
      onChangeComplete: function onChangeComplete(colorBg) {
        var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");
        setAttributes({
          headerBackground: color
        });
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: "Price Setting",
      initialOpen: false
    }, wp.element.createElement("p", {
      className: "block-inside"
    }, "Position"), wp.element.createElement("div", {
      className: "column-layout-num-column text_"
    }, wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      name: "price-position",
      id: "price-position-top",
      checked: pricePosition == "top" ? true : false,
      onChange: function onChange() {
        return setAttributes({
          pricePosition: "top"
        });
      }
    }), wp.element.createElement("label", {
      for: "price-position-top"
    }, "Top")), wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      name: "price-position",
      id: "price-position-bottom",
      checked: pricePosition == "bottom" ? true : false,
      onChange: function onChange() {
        return setAttributes({
          pricePosition: "bottom"
        });
      }
    }), wp.element.createElement("label", {
      for: "price-position-bottom"
    }, "Bottom"))), wp.element.createElement("p", {
      className: "block-inside"
    }, "Price"), wp.element.createElement("div", {
      className: "flex-section"
    }, wp.element.createElement("p", null, "Price"), wp.element.createElement("input", {
      type: "number",
      value: priceMonth,
      onChange: function onChange(e) {
        setAttributes({
          priceMonth: e.target.value
        });
      }
    })), wp.element.createElement("p", null, "Color"), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: priceColor,
      onChange: function onChange(color) {
        return setAttributes({
          priceColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Font Size",
      value: priceFontSize,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          priceFontSize: e
        });
      }
    }), wp.element.createElement("p", {
      className: "block-inside"
    }, "Currency"), wp.element.createElement("div", {
      className: "flex-section"
    }, wp.element.createElement("p", null, "Currency"), wp.element.createElement("select", {
      value: currencyC,
      onChange: function onChange(e) {
        setAttributes({
          currencyC: e.target.value
        });
      }
    }, [["$", "Dollar"], ["€", "Euro"], ["฿", "Baht"], ["₣", "Franc"], ["ƒ", "Guilder"], ["kr", "Krona"], ["₤", "Lira"], ["₹", "Rupee (Indian)"], ["₧", "Peseta"], ["₱", "Peso"], ["£", "Pound Sterling"], ["R$", "Real"], ["₽", "Ruble"], ["₨", "Rupee"], ["₪", "Shekel"], ["¥", "Yen/Yuan"], ["₩", "Won"], ["", "Custom"]].map(function (v) {
      return wp.element.createElement("option", {
        value: v[0]
      }, v[0] + " " + v[1]);
    }))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Font Size",
      value: currencyFs,
      min: 0,
      max: 60,
      onChange: function onChange(e) {
        return setAttributes({
          currencyFs: e
        });
      }
    }), wp.element.createElement("div", {
      className: "flex-section"
    }, wp.element.createElement("p", null, "Formate"), wp.element.createElement("select", {
      value: currencyFormate,
      onChange: function onChange(e) {
        var raised = e.target.value == 1 ? true : false;
        setAttributes({
          currencyFormate: raised
        });
        if (raised) setAttributes({
          currencyFs: 8
        });
      }
    }, wp.element.createElement("option", {
      value: "0"
    }, "Normal"), wp.element.createElement("option", {
      value: "1"
    }, "Rasied"))), wp.element.createElement("p", {
      className: "block-inside"
    }, "Text"), wp.element.createElement("div", {
      className: "flex-section"
    }, wp.element.createElement("p", null, "Enter Text"), wp.element.createElement("input", {
      type: "text",
      value: priceMonthPrice,
      onChange: function onChange(e) {
        setAttributes({
          priceMonthPrice: e.target.value
        });
      }
    })), wp.element.createElement("p", null, "Color"), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: priceMonthPriceColor,
      onChange: function onChange(color) {
        return setAttributes({
          priceMonthPriceColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Font Size",
      value: priceMonthPriceFs,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          priceMonthPriceFs: e
        });
      }
    }), wp.element.createElement("p", {
      className: "block-inside"
    }, "Advance Setting"), wp.element.createElement("p", null, "Layout"), wp.element.createElement("div", {
      className: "column-layout-num-column text_"
    }, wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      id: "price-layout-rounded",
      name: "price-layout",
      checked: !priceInline ? true : false,
      onChange: function onChange() {
        return setAttributes({
          priceInline: false
        });
      }
    }), wp.element.createElement("label", {
      for: "price-layout-rounded"
    }, "Rounded")), wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      id: "price-layout-box",
      name: "price-layout",
      checked: priceInline ? true : false,
      onChange: function onChange() {
        return setAttributes({
          priceInline: true
        });
      }
    }), wp.element.createElement("label", {
      for: "price-layout-box"
    }, "Box"))), !priceInline && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Price Space",
      value: priceSpace,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          priceSpace: e
        });
      }
    }), priceInline && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Top/Bottom",
      value: priceSpaceV,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          priceSpaceV: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Left/Right",
      value: priceSpaceH,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          priceSpaceH: e
        });
      }
    })), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Border")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
      label: priceBorder ? "Disable" : "Enable",
      checked: priceBorder,
      onChange: function onChange(e) {
        return setAttributes({
          priceBorder: e
        });
      }
    }), priceBorder && wp.element.createElement("div", {
      className: "icon-border-setting"
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Border Width",
      value: priceBorderWidth,
      min: 0,
      max: 20,
      onChange: function onChange(e) {
        return setAttributes({
          priceBorderWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Border Radius",
      value: priceBorderRadius,
      min: 0,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          priceBorderRadius: e
        });
      }
    }), wp.element.createElement("p", null, "Border Color"), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: priceBorderColor,
      onChange: function onChange(color) {
        return setAttributes({
          priceBorderColor: color
        });
      }
    })), wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Family")), wp.element.createElement("div", {
      ref: familyRef,
      className: "font-family-drop-down ".concat(activeFamilyContainer ? "active" : "")
    }, wp.element.createElement("div", {
      ref: familyRef,
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer;
        activeFamilyDrop(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: priceFF
      }
    }, priceFF ? priceFF : "Choose Family")), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            priceFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    })))), wp.element.createElement("div", {
      className: "flex-section"
    }, wp.element.createElement("p", null, "Font Weight"), wp.element.createElement("select", {
      value: currencyFontWeight,
      onChange: function onChange(e) {
        setAttributes({
          currencyFontWeight: e.target.value
        });
      }
    }, wp.element.createElement("option", {
      value: "400"
    }, "400"), wp.element.createElement("option", {
      value: "500"
    }, "500"), wp.element.createElement("option", {
      value: "700"
    }, "700"), wp.element.createElement("option", {
      value: "900"
    }, "900"), wp.element.createElement("option", {
      value: "bold"
    }, "Bold"), wp.element.createElement("option", {
      value: "bolder"
    }, "Bolder"))), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Background Color")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ColorPicker"], {
      color: priceBgColor,
      onChangeComplete: function onChangeComplete(colorBg) {
        var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");
        setAttributes({
          priceBgColor: color
        });
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: "Middle Section",
      initialOpen: false
    }, wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Family")), wp.element.createElement("div", {
      ref: familyRef,
      className: "font-family-drop-down ".concat(activeFamilyContainer ? "active" : "")
    }, wp.element.createElement("div", {
      ref: familyRef,
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer;
        activeFamilyDrop(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: pointsFF
      }
    }, pointsFF ? pointsFF : "Choose Family")), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            pointsFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    })))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Font Size",
      value: pointsFontSize,
      min: 0,
      max: 60,
      onChange: function onChange(e) {
        return setAttributes({
          pointsFontSize: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Space Between Text",
      value: pointsSpaceBw,
      min: 0,
      max: 60,
      onChange: function onChange(e) {
        return setAttributes({
          pointsSpaceBw: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Text Align")), wp.element.createElement("div", {
      className: "column-layout-num-column text_"
    }, wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      name: "points-align",
      id: "points-align-top",
      checked: pointAlign == "left" ? true : false,
      onChange: function onChange() {
        return setAttributes({
          pointAlign: "left"
        });
      }
    }), wp.element.createElement("label", {
      for: "points-align-top"
    }, "Left")), wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      name: "points-align",
      id: "points-align-bottom",
      checked: pointAlign == "center" ? true : false,
      onChange: function onChange() {
        return setAttributes({
          pointAlign: "center"
        });
      }
    }), wp.element.createElement("label", {
      for: "points-align-bottom"
    }, "Center"))), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: pointsColor,
      onChange: function onChange(color) {
        return setAttributes({
          pointsColor: color
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Background Color")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ColorPicker"], {
      color: middleBgColor,
      onChangeComplete: function onChangeComplete(colorBg) {
        var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");
        setAttributes({
          middleBgColor: color
        });
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: "Button Section",
      initialOpen: false
    }, wp.element.createElement("p", {
      className: "block-inside"
    }, "Button"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Font Size",
      value: linkFontSize,
      min: 0,
      max: 70,
      onChange: function onChange(e) {
        return setAttributes({
          linkFontSize: e
        });
      }
    }), wp.element.createElement("p", null, "Color"), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: linkColor,
      onChange: function onChange(color) {
        return setAttributes({
          linkColor: color
        });
      }
    }), wp.element.createElement("p", null, "Background Color"), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: linkBgColor,
      onChange: function onChange(color) {
        return setAttributes({
          linkBgColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Height",
      value: linkSpaceV,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          linkSpaceV: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Width",
      value: linkSpaceH,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          linkSpaceH: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Border")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
      label: linkBorder ? "Disable" : "Enable",
      checked: linkBorder,
      onChange: function onChange(e) {
        return setAttributes({
          linkBorder: e
        });
      }
    }), linkBorder && wp.element.createElement("div", {
      className: "icon-border-setting"
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Border Width",
      value: linkBorderWidth,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          linkBorderWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Border Radius",
      value: linkBorderRadius,
      min: 0,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          linkBorderRadius: e
        });
      }
    }), wp.element.createElement("p", null, "Border Color"), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: linkBorderColor,
      onChange: function onChange(color) {
        return setAttributes({
          linkBorderColor: color
        });
      }
    })), wp.element.createElement("p", {
      className: "block-inside"
    }, "Small Text"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Font Size",
      value: bottomTxtFontSize,
      min: 0,
      max: 70,
      onChange: function onChange(e) {
        return setAttributes({
          bottomTxtFontSize: e
        });
      }
    }), wp.element.createElement("p", null, "Color"), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: bottomTxtColor,
      onChange: function onChange(color) {
        return setAttributes({
          bottomTxtColor: color
        });
      }
    }), wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Family")), wp.element.createElement("div", {
      ref: familyRef,
      className: "font-family-drop-down ".concat(activeFamilyContainer ? "active" : "")
    }, wp.element.createElement("div", {
      ref: familyRef,
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer;
        activeFamilyDrop(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: bottomTxtFF
      }
    }, bottomTxtFF ? bottomTxtFF : "Choose Family")), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            bottomTxtFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    })))), wp.element.createElement("p", {
      className: "block-inside"
    }, "Background Color"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ColorPicker"], {
      color: footerBgColor,
      onChangeComplete: function onChangeComplete(colorBg) {
        var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");
        setAttributes({
          footerBgColor: color
        });
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: "Container Settings",
      initialOpen: false
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Border")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
      label: containerBorder ? "Disable" : "Enable",
      checked: containerBorder,
      onChange: function onChange(e) {
        return setAttributes({
          containerBorder: e
        });
      }
    }), containerBorder && wp.element.createElement("div", {
      className: "icon-border-setting"
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Border Width",
      value: containerBorderWidth,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          containerBorderWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: "Border Radius",
      value: containerBorderRadius,
      min: 0,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          containerBorderRadius: e
        });
      }
    }), wp.element.createElement("p", null, "Border Color"), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: containerBorderColor,
      onChange: function onChange(color) {
        return setAttributes({
          containerBorderColor: color
        });
      }
    })))), wp.element.createElement("div", {
      className: "pricing-table-wrapper",
      style: containerBorderStyle
    }, wp.element.createElement("div", _defineProperty({
      style: {
        backgroundColor: headerBackground
      },
      className: "pricing-table-top"
    }, "style", {
      backgroundColor: headerBackground
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      key: "editable",
      tagName: "h3",
      placeholder: "Pricing Table",
      value: headingTxt,
      style: {
        fontSize: headingFontSize + "px",
        color: headingColor,
        fontFamily: headingFF
      },
      onChange: function onChange(e) {
        return setAttributes({
          headingTxt: e
        });
      }
    }), pricePosition == "top" && wp.element.createElement("div", {
      className: "price_ ".concat(priceInline ? "inline_" : "box_"),
      style: priceStyle
    }, wp.element.createElement("div", {
      style: {
        color: priceColor
      },
      className: currencyFormate ? "rasied" : ""
    }, wp.element.createElement("p", {
      style: {
        fontSize: currencyFs
      }
    }, currencyC), wp.element.createElement("p", {
      style: {
        fontSize: priceFontSize + "px"
      }
    }, priceMonth)), wp.element.createElement("p", {
      style: {
        fontSize: priceMonthPriceFs + "px",
        color: priceMonthPriceColor
      }
    }, priceMonthPrice)), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      key: "editable",
      tagName: "p",
      style: {
        fontSize: descriptionFontSize + "px",
        color: descriptionColor,
        fontFamily: descriptionFF
      },
      value: headingDescription,
      onChange: function onChange(e) {
        return setAttributes({
          headingDescription: e
        });
      }
    })), wp.element.createElement("div", {
      className: "pricing-table-middle",
      style: {
        backgroundColor: middleBgColor
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      key: "editable",
      tagName: "div",
      placeholder: "Pricing Description",
      multiline: "p",
      style: {
        fontSize: pointsFontSize + "px",
        color: pointsColor,
        fontFamily: pointsFF,
        marginTop: pointsSpaceBw + "px",
        marginBottom: pointsSpaceBw + "px",
        textAlign: pointAlign
      },
      value: middleTxt,
      onChange: function onChange(e) {
        setAttributes({
          middleTxt: e
        });
      }
    })), wp.element.createElement("div", {
      className: "pricing-table-bottom",
      style: {
        backgroundColor: footerBgColor
      }
    }, pricePosition == "bottom" && wp.element.createElement("div", {
      className: "price_ ".concat(priceInline ? "inline_" : "box_"),
      style: priceStyle
    }, wp.element.createElement("div", {
      style: {
        color: priceColor
      },
      className: currencyFormate ? "rasied" : ""
    }, wp.element.createElement("p", {
      style: {
        fontSize: currencyFs
      }
    }, currencyC), wp.element.createElement("p", {
      style: {
        fontSize: priceFontSize + "px"
      }
    }, priceMonth)), wp.element.createElement("p", {
      style: {
        fontSize: priceMonthPriceFs + "px",
        color: priceMonthPriceColor
      }
    }, priceMonthPrice)), wp.element.createElement("div", {
      className: "link_button"
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      key: "editable",
      tagName: "a",
      placeholder: "Click Me",
      value: linkTxt,
      onChange: function onChange(e) {
        return setAttributes({
          linkTxt: e
        });
      },
      style: link_style
    })), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      className: "bottom-text",
      key: "editable",
      tagName: "p",
      placeholder: "Price",
      value: bottomTxt,
      onChange: function onChange(e) {
        return setAttributes({
          bottomTxt: e
        });
      },
      style: {
        color: bottomTxtColor,
        fontSize: bottomTxtFontSize + "px",
        fontFamily: bottomTxtFF
      }
    })))];
  },
  save: function save(props) {
    var _props$attributes = props.attributes,
        headerBackground = _props$attributes.headerBackground,
        headingTxt = _props$attributes.headingTxt,
        headingFontSize = _props$attributes.headingFontSize,
        headingColor = _props$attributes.headingColor,
        headingFF = _props$attributes.headingFF,
        headingDescription = _props$attributes.headingDescription,
        descriptionColor = _props$attributes.descriptionColor,
        descriptionFontSize = _props$attributes.descriptionFontSize,
        descriptionFF = _props$attributes.descriptionFF,
        middleTxt = _props$attributes.middleTxt,
        middleBgColor = _props$attributes.middleBgColor,
        pointsColor = _props$attributes.pointsColor,
        pointsFontSize = _props$attributes.pointsFontSize,
        pointAlign = _props$attributes.pointAlign,
        pointsSpaceBw = _props$attributes.pointsSpaceBw,
        pointsFF = _props$attributes.pointsFF,
        priceMonth = _props$attributes.priceMonth,
        priceMonthPrice = _props$attributes.priceMonthPrice,
        priceMonthPriceFs = _props$attributes.priceMonthPriceFs,
        priceMonthPriceColor = _props$attributes.priceMonthPriceColor,
        pricePosition = _props$attributes.pricePosition,
        priceFontSize = _props$attributes.priceFontSize,
        priceColor = _props$attributes.priceColor,
        priceBgColor = _props$attributes.priceBgColor,
        priceFF = _props$attributes.priceFF,
        priceInline = _props$attributes.priceInline,
        currencyFontWeight = _props$attributes.currencyFontWeight,
        priceBorder = _props$attributes.priceBorder,
        priceBorderWidth = _props$attributes.priceBorderWidth,
        priceBorderRadius = _props$attributes.priceBorderRadius,
        priceBorderColor = _props$attributes.priceBorderColor,
        priceSpace = _props$attributes.priceSpace,
        priceSpaceV = _props$attributes.priceSpaceV,
        priceSpaceH = _props$attributes.priceSpaceH,
        currencyC = _props$attributes.currencyC,
        currencyFs = _props$attributes.currencyFs,
        currencyFormate = _props$attributes.currencyFormate,
        linkTxt = _props$attributes.linkTxt,
        linkLink = _props$attributes.linkLink,
        linkTarget = _props$attributes.linkTarget,
        linkColor = _props$attributes.linkColor,
        linkBgColor = _props$attributes.linkBgColor,
        linkFontSize = _props$attributes.linkFontSize,
        linkBorder = _props$attributes.linkBorder,
        linkBorderWidth = _props$attributes.linkBorderWidth,
        linkBorderRadius = _props$attributes.linkBorderRadius,
        linkBorderColor = _props$attributes.linkBorderColor,
        linkSpaceH = _props$attributes.linkSpaceH,
        linkSpaceV = _props$attributes.linkSpaceV,
        bottomTxt = _props$attributes.bottomTxt,
        bottomTxtColor = _props$attributes.bottomTxtColor,
        bottomTxtFontSize = _props$attributes.bottomTxtFontSize,
        bottomTxtFF = _props$attributes.bottomTxtFF,
        footerBgColor = _props$attributes.footerBgColor,
        containerBorder = _props$attributes.containerBorder,
        containerBorderWidth = _props$attributes.containerBorderWidth,
        containerBorderRadius = _props$attributes.containerBorderRadius,
        containerBorderColor = _props$attributes.containerBorderColor;
    var containerBorderStyle = containerBorder ? {
      borderWidth: containerBorderWidth + "px",
      borderStyle: "solid",
      borderColor: containerBorderColor,
      borderRadius: containerBorderRadius + "px"
    } : {}; // price style

    var priceStyle = {
      backgroundColor: priceBgColor,
      fontFamily: priceFF,
      fontWeight: currencyFontWeight
    };
    if (priceBorder) priceStyle = _objectSpread(_objectSpread({}, priceStyle), {
      borderWidth: priceBorderWidth + "px",
      borderRadius: priceBorderRadius + (!priceInline ? "%" : "px"),
      borderColor: priceBorderColor,
      borderStyle: "solid"
    });

    if (!priceInline) {
      priceStyle = _objectSpread(_objectSpread({}, priceStyle), {
        height: priceSpace + "px",
        width: priceSpace + "px"
      });
    } else {
      priceStyle = _objectSpread(_objectSpread({}, priceStyle), {
        paddingTop: priceSpaceV + "px",
        paddingBottom: priceSpaceV + "px",
        paddingLeft: priceSpaceH + "px",
        paddingRight: priceSpaceH + "px"
      });
    }

    var link_style = {
      color: linkColor,
      backgroundColor: linkBgColor,
      fontSize: linkFontSize + "px",
      paddingLeft: linkSpaceH + "px",
      paddingRight: linkSpaceH + "px",
      paddingTop: linkSpaceV + "px",
      paddingBottom: linkSpaceV + "px"
    };
    link_style = linkBorder ? _objectSpread(_objectSpread({}, {
      borderWidth: linkBorderWidth + "px",
      borderRadius: linkBorderRadius + "px",
      borderStyle: "solid",
      borderColor: linkBorderColor
    }), link_style) : link_style;
    return wp.element.createElement("div", {
      className: "pricing-table-wrapper",
      style: containerBorderStyle
    }, wp.element.createElement("div", _defineProperty({
      style: {
        backgroundColor: headerBackground
      },
      className: "pricing-table-top"
    }, "style", {
      backgroundColor: headerBackground
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      tagName: "h3",
      value: headingTxt,
      style: {
        fontSize: headingFontSize + "px",
        color: headingColor,
        fontFamily: headingFF
      }
    }), pricePosition == "top" && wp.element.createElement("div", {
      className: "price_ ".concat(priceInline ? "inline_" : "box_"),
      style: priceStyle
    }, wp.element.createElement("div", {
      style: {
        color: priceColor
      },
      className: currencyFormate ? "rasied" : ""
    }, wp.element.createElement("p", {
      style: {
        fontSize: currencyFs
      }
    }, currencyC), wp.element.createElement("p", {
      style: {
        fontSize: priceFontSize + "px"
      }
    }, priceMonth)), wp.element.createElement("p", {
      style: {
        fontSize: priceMonthPriceFs + "px",
        color: priceMonthPriceColor
      }
    }, priceMonthPrice)), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      tagName: "p",
      style: {
        fontSize: descriptionFontSize + "px",
        color: descriptionColor,
        fontFamily: descriptionFF
      },
      value: headingDescription
    })), wp.element.createElement("div", {
      className: "pricing-table-middle",
      style: {
        backgroundColor: middleBgColor
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      tagName: "div",
      multiline: "p",
      style: {
        fontSize: pointsFontSize + "px",
        color: pointsColor,
        fontFamily: pointsFF,
        marginTop: pointsSpaceBw + "px",
        marginBottom: pointsSpaceBw + "px",
        textAlign: pointAlign
      },
      value: middleTxt
    })), wp.element.createElement("div", {
      className: "pricing-table-bottom",
      style: {
        backgroundColor: footerBgColor
      }
    }, pricePosition == "bottom" && wp.element.createElement("div", {
      className: "price_ ".concat(priceInline ? "inline_" : "box_"),
      style: priceStyle
    }, wp.element.createElement("div", {
      style: {
        color: priceColor
      },
      className: currencyFormate ? "rasied" : ""
    }, wp.element.createElement("p", {
      style: {
        fontSize: currencyFs
      }
    }, currencyC), wp.element.createElement("p", {
      style: {
        fontSize: priceFontSize + "px"
      }
    }, priceMonth)), wp.element.createElement("p", {
      style: {
        fontSize: priceMonthPriceFs + "px",
        color: priceMonthPriceColor
      }
    }, priceMonthPrice)), wp.element.createElement("div", {
      className: "link_button"
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      tagName: "a",
      value: linkTxt,
      style: link_style
    })), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: "bottom-text",
      tagName: "p",
      value: bottomTxt,
      style: {
        color: bottomTxtColor,
        fontSize: bottomTxtFontSize + "px",
        fontFamily: bottomTxtFF
      }
    })));
  }
});

/***/ }),

/***/ "./src/blocks/pricing-table/parent.js":
/*!********************************************!*\
  !*** ./src/blocks/pricing-table/parent.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("zita-blocks/pricing-table-section", {
  title: "Pricing Table",
  icon: "table-col-before",
  // description: "Pricing Table",
  category: "zita-category",
  supports: {
    align: ["center", "left", "right", "wide", "full"]
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {// return { "data-align": "wide" };
  },
  attributes: {
    align: {
      type: "string",
      default: "wide"
    },
    columns: {
      type: "number",
      default: 2
    },
    fullWidth: {
      type: "string",
      default: ""
    }
  },
  edit: function edit(props) {
    // console.log(props);
    var className = props.className,
        attributes = props.attributes,
        setAttributes = props.setAttributes;
    var columns = attributes.columns,
        fullWidth = attributes.fullWidth;
    var MY_TEMPLATE = [["zita-blocks/pricing-table-table"], ["zita-blocks/pricing-table-table", {
      headingTxt: "Advance",
      priceMonth: "159",
      middleTxt: "<p>Email Marketing</p><p>Email Builder</p><p>Client Testing</p><p>10 User Free</p><p>Multiple Email Support</p>"
    }]];
    return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Number Of Column",
      value: columns,
      onChange: function onChange(v) {
        setAttributes({
          columns: v
        });
      },
      min: 1,
      max: 4
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Column Layout")), wp.element.createElement("div", {
      className: "column-layout-num-column"
    }, wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      value: "box",
      name: "column-layout",
      id: "column-layout-box",
      onChange: function onChange() {
        return setAttributes({
          fullWidth: ""
        });
      }
    }), wp.element.createElement("label", {
      for: "column-layout-box"
    }, wp.element.createElement("img", {
      src: plugin_url.url + "assets/img/box-layout.png"
    }))), wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      value: "full",
      name: "column-layout",
      id: "column-layout-full",
      onChange: function onChange() {
        return setAttributes({
          fullWidth: "full-width"
        });
      }
    }), wp.element.createElement("label", {
      for: "column-layout-full"
    }, wp.element.createElement("img", {
      src: plugin_url.url + "assets/img/100percent.png"
    })))))), wp.element.createElement("div", {
      className: "".concat(className, " ").concat(fullWidth, " column-count-").concat(columns, " ")
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
      template: MY_TEMPLATE,
      allowedBlocks: ["zita-blocks/pricing-table-table"]
    }))];
  },
  save: function save(props) {
    // const { attributes } = props;
    var _props$attributes = props.attributes,
        columns = _props$attributes.columns,
        fullWidth = _props$attributes.fullWidth; // console.log(columns);

    return wp.element.createElement("div", {
      className: "".concat(fullWidth, " column-count-").concat(columns, " ")
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
  }
});

/***/ }),

/***/ "./src/blocks/progress-bar-pie/editor.scss":
/*!*************************************************!*\
  !*** ./src/blocks/progress-bar-pie/editor.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/progress-bar-pie/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/progress-bar-pie/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/progress-bar-pie/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
 // import fontFamily from "../block-assets/font-family";
// import icons_ from "../block-assets/icons";




var attrs_ = {
  circleRadius: {
    type: "number",
    default: 80
  },
  strokeWidth: {
    type: "number",
    default: 15
  },
  strokeColor: {
    type: "string",
    default: "blue"
  },
  strokeBgColor: {
    type: "string",
    default: "grey"
  },
  fillBgColor: {
    type: "string",
    default: "pink"
  },
  animationDelay: {
    type: "number",
    default: 10
  },
  lineCap: {
    type: "boolean",
    default: false
  },
  alignment: {
    type: "string",
    default: "center"
  },
  text: {
    type: "number",
    default: 50
  },
  textFs: {
    type: "number",
    default: 18
  },
  textColor: {
    type: "string",
    default: "black"
  },
  percentTitleE: {
    type: "boolean",
    default: true
  },
  percentTitle: {
    type: "string",
    default: "Add Title"
  },
  percentTitleFs: {
    type: "number"
  },
  percentTitleColor: {
    type: "string"
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("zita-blocks/progress-bar-pie", {
  title: "Circular Progress Bar",
  icon: wp.element.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "enable-background": "new 0 0 24 24",
    viewBox: "0 0 24 24",
    fill: "black",
    width: "18px",
    height: "18px"
  }, wp.element.createElement("g", null, wp.element.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), wp.element.createElement("path", {
    d: "M15.5,13.5c0,2-2.5,3.5-2.5,5h-2c0-1.5-2.5-3-2.5-5c0-1.93,1.57-3.5,3.5-3.5h0C13.93,10,15.5,11.57,15.5,13.5z M13,19.5h-2 V21h2V19.5z M19,13c0,1.68-0.59,3.21-1.58,4.42l1.42,1.42C20.18,17.27,21,15.23,21,13c0-2.74-1.23-5.19-3.16-6.84l-1.42,1.42 C17.99,8.86,19,10.82,19,13z M16,5l-4-4v3c0,0,0,0,0,0c-4.97,0-9,4.03-9,9c0,2.23,0.82,4.27,2.16,5.84l1.42-1.42 C5.59,16.21,5,14.68,5,13c0-3.86,3.14-7,7-7c0,0,0,0,0,0v3L16,5z"
  }))),
  // description: "progress bar.",
  category: "zita-category",
  keywords: ["circular progress", "circular progress bar"],
  attributes: attrs_,
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var circleRadius = attributes.circleRadius,
        strokeWidth = attributes.strokeWidth,
        strokeColor = attributes.strokeColor,
        strokeBgColor = attributes.strokeBgColor,
        fillBgColor = attributes.fillBgColor,
        lineCap = attributes.lineCap,
        animationDelay = attributes.animationDelay,
        alignment = attributes.alignment,
        text = attributes.text,
        textFs = attributes.textFs,
        textColor = attributes.textColor,
        percentTitleE = attributes.percentTitleE,
        percentTitle = attributes.percentTitle,
        percentTitleColor = attributes.percentTitleColor,
        percentTitleFs = attributes.percentTitleFs;
    var HW = circleRadius * 2 + strokeWidth;
    var cxCy = HW / 2;
    return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: "Circle Setting",
      initialOpen: false
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "Percent",
      value: text,
      min: 1,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          text: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "Width",
      value: circleRadius,
      min: 1,
      max: 150,
      onChange: function onChange(e) {
        return setAttributes({
          circleRadius: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "Stroke Width",
      value: strokeWidth,
      min: 1,
      max: 150,
      onChange: function onChange(e) {
        return setAttributes({
          strokeWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "Animation Delay",
      value: animationDelay,
      min: 1,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          animationDelay: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Stroke Edges Type")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
      label: lineCap ? "Flat" : "Circular",
      checked: lineCap,
      onChange: function onChange(e) {
        return setAttributes({
          lineCap: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Stroke Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: strokeColor,
      onChange: function onChange(color) {
        return setAttributes({
          strokeColor: color
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Stroke Background Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: strokeBgColor,
      onChange: function onChange(color) {
        return setAttributes({
          strokeBgColor: color
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Fill Background Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: fillBgColor,
      onChange: function onChange(color) {
        return setAttributes({
          fillBgColor: color
        });
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: "Text Setting",
      initialOpen: false
    }, wp.element.createElement("p", {
      className: "block-inside"
    }, "Title Setting"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
      label: percentTitleE ? "Hide" : "Show",
      checked: percentTitleE,
      onChange: function onChange(e) {
        return setAttributes({
          percentTitleE: e
        });
      }
    }), percentTitleE && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "Font Size",
      value: percentTitleFs,
      min: 1,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          percentTitleFs: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: percentTitleColor,
      onChange: function onChange(color) {
        return setAttributes({
          percentTitleColor: color
        });
      }
    })), wp.element.createElement("p", {
      className: "block-inside"
    }, "Percent Setting"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "Font Size",
      value: textFs,
      min: 1,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          textFs: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: textColor,
      onChange: function onChange(color) {
        return setAttributes({
          textColor: color
        });
      }
    }))), wp.element.createElement("div", {
      className: "thk-progress-bar-wrapper-pie"
    }, wp.element.createElement("div", {
      className: "zita-block-pie-circle"
    }, wp.element.createElement("div", {
      className: "pie-circle_"
    }, wp.element.createElement("div", {
      className: "text-sction"
    }, percentTitleE && wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      className: "title_",
      key: "editable",
      tagName: "span",
      placeholder: "Add Title",
      value: percentTitle,
      onChange: function onChange(e) {
        return setAttributes({
          percentTitle: e
        });
      },
      style: {
        color: percentTitleColor,
        fontSize: percentTitleFs + "px"
      }
    }), wp.element.createElement("span", {
      className: "percent_",
      style: {
        fontSize: textFs + "px",
        color: textColor
      }
    }, text, "%")), wp.element.createElement("svg", {
      height: HW,
      width: HW
    }, wp.element.createElement("circle", {
      cx: cxCy,
      cy: cxCy,
      r: circleRadius,
      fill: fillBgColor
    }), wp.element.createElement("circle", {
      cx: cxCy,
      cy: cxCy,
      r: circleRadius,
      fill: "none",
      "stroke-width": strokeWidth,
      stroke: strokeBgColor
    }), wp.element.createElement("circle", {
      r: circleRadius,
      cx: cxCy,
      cy: cxCy,
      "stroke-width": strokeWidth,
      fill: "none",
      stroke: strokeColor,
      "stroke-linecap": lineCap ? "round" : "flat",
      "stroke-dasharray": "".concat(text * (Math.PI * (circleRadius * 2) / 100), " ").concat(Math.PI * (circleRadius * 2))
    })))))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var circleRadius = attributes.circleRadius,
        strokeWidth = attributes.strokeWidth,
        strokeColor = attributes.strokeColor,
        strokeBgColor = attributes.strokeBgColor,
        fillBgColor = attributes.fillBgColor,
        animationDelay = attributes.animationDelay,
        lineCap = attributes.lineCap,
        alignment = attributes.alignment,
        text = attributes.text,
        textFs = attributes.textFs,
        textColor = attributes.textColor,
        percentTitleE = attributes.percentTitleE,
        percentTitle = attributes.percentTitle,
        percentTitleColor = attributes.percentTitleColor,
        percentTitleFs = attributes.percentTitleFs;
    var circleData = {
      radius: circleRadius,
      strokeWidth: strokeWidth,
      strokeColor: strokeColor,
      strokeBgColor: strokeBgColor,
      lineCap: lineCap,
      animationDelay: animationDelay,
      text: text
    };
    circleData = JSON.stringify(circleData);
    var HW = circleRadius * 2 + strokeWidth;
    var cxCy = HW / 2;
    return wp.element.createElement("div", {
      className: "thk-progress-bar-wrapper-pie"
    }, wp.element.createElement("div", {
      className: "zita-block-pie-circle front_"
    }, wp.element.createElement("div", {
      className: "pie-circle_"
    }, wp.element.createElement("div", {
      className: "text-sction"
    }, percentTitleE && wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
      className: "title_",
      tagName: "span",
      value: percentTitle,
      style: {
        color: percentTitleColor,
        fontSize: percentTitleFs + "px"
      }
    }), wp.element.createElement("span", {
      className: "percent_",
      style: {
        fontSize: textFs + "px",
        color: textColor
      }
    })), wp.element.createElement("svg", {
      height: HW,
      width: HW,
      data: circleData
    }, wp.element.createElement("circle", {
      cx: cxCy,
      cy: cxCy,
      r: circleRadius,
      fill: fillBgColor
    }), wp.element.createElement("circle", {
      cx: cxCy,
      cy: cxCy,
      r: circleRadius,
      fill: "none",
      "stroke-width": strokeWidth,
      stroke: strokeBgColor
    }), wp.element.createElement("circle", {
      className: "percent-apply",
      r: circleRadius,
      cx: cxCy,
      cy: cxCy,
      fill: "none",
      "stroke-linecap": lineCap ? "round" : "flat"
    })))));
  }
});

/***/ }),

/***/ "./src/blocks/progress-bar/editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/progress-bar/editor.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/progress-bar/index.js":
/*!******************************************!*\
  !*** ./src/blocks/progress-bar/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/progress-bar/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




var attrs_ = {
  percentTitle: {
    type: "string",
    default: "Percent title"
  },
  titleFs: {
    type: "number"
  },
  titleFf: {
    type: "string"
  },
  titleIn: {
    type: "boolean",
    default: false
  },
  titleColor: {
    type: "string"
  },
  progressHeight: {
    type: "number",
    default: 12
  },
  percent: {
    type: "number",
    default: 40
  },
  animationDelay: {
    type: "number",
    default: 10
  },
  percentColor: {
    type: "string",
    default: "yellow"
  },
  percentBgColor: {
    type: "string"
  },
  borderRadius: {
    type: "number"
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("zita-blocks/progress-block", {
  title: "Linear Progress Bar",
  icon: "update",
  // description: "progress bar.",
  category: "zita-category",
  keywords: ["progress", "progress bar"],
  attributes: attrs_,
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var percent = attributes.percent,
        progressHeight = attributes.progressHeight,
        percentTitle = attributes.percentTitle,
        titleIn = attributes.titleIn,
        titleFs = attributes.titleFs,
        titleFf = attributes.titleFf,
        animationDelay = attributes.animationDelay,
        titleColor = attributes.titleColor,
        percentColor = attributes.percentColor,
        percentBgColor = attributes.percentBgColor,
        borderRadius = attributes.borderRadius;
    return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: "Title Setting",
      initialOpen: false
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
      label: titleIn ? "Outside" : "Inside",
      checked: titleIn,
      onChange: function onChange(e) {
        return setAttributes({
          titleIn: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "Font Size",
      value: titleFs,
      min: 1,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          titleFs: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: titleColor,
      onChange: function onChange(color) {
        return setAttributes({
          titleColor: color
        });
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: "Progress Bar Setting",
      initialOpen: false
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "Height",
      value: progressHeight,
      min: 1,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          progressHeight: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "Percent",
      value: percent,
      min: 1,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          percent: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "Border Radius",
      value: borderRadius,
      min: 1,
      max: 60,
      onChange: function onChange(e) {
        return setAttributes({
          borderRadius: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "Animation Delay",
      value: animationDelay,
      min: 1,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          animationDelay: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: percentColor,
      onChange: function onChange(color) {
        return setAttributes({
          percentColor: color
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Background Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: percentBgColor,
      onChange: function onChange(color) {
        return setAttributes({
          percentBgColor: color
        });
      }
    }))), wp.element.createElement("div", {
      className: "thk-progress-bar-wrapper"
    }, wp.element.createElement("div", {
      className: "zita-linear-progress-bar"
    }, wp.element.createElement("div", {
      className: "txt-section",
      style: {
        fontSize: titleFs,
        color: titleColor
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      value: percentTitle,
      tagName: "p",
      onChange: function onChange(e) {
        return setAttributes({
          percentTitle: e
        });
      }
    }), !titleIn && wp.element.createElement("span", {
      className: "percent_"
    }, percent, "%")), wp.element.createElement("div", {
      style: {
        backgroundColor: percentBgColor,
        height: progressHeight + "px",
        borderRadius: borderRadius + "px"
      },
      className: "line_"
    }, wp.element.createElement("div", {
      style: {
        width: percent + "%",
        backgroundColor: percentColor
      },
      className: "line-inner_"
    }, titleIn && wp.element.createElement("span", {
      className: "percent_"
    }, percent, "%")))))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var progressHeight = attributes.progressHeight,
        percent = attributes.percent,
        percentTitle = attributes.percentTitle,
        titleIn = attributes.titleIn,
        titleFs = attributes.titleFs,
        titleFf = attributes.titleFf,
        titleColor = attributes.titleColor,
        percentColor = attributes.percentColor,
        percentBgColor = attributes.percentBgColor,
        borderRadius = attributes.borderRadius,
        animationDelay = attributes.animationDelay;
    return wp.element.createElement("div", {
      className: "thk-progress-bar-wrapper"
    }, wp.element.createElement("div", {
      className: "zita-linear-progress-bar front_",
      percent: percent,
      delay: animationDelay
    }, wp.element.createElement("div", {
      className: "txt-section",
      style: {
        fontSize: titleFs,
        color: titleColor
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
      value: percentTitle,
      tagName: "p"
    }), !titleIn && wp.element.createElement("span", {
      className: "percent_"
    })), wp.element.createElement("div", {
      style: {
        backgroundColor: percentBgColor,
        height: progressHeight + "px",
        borderRadius: borderRadius + "px"
      },
      className: "line_"
    }, wp.element.createElement("div", {
      style: {
        backgroundColor: percentColor
      },
      className: "line-inner_"
    }, titleIn && wp.element.createElement("span", {
      className: "percent_"
    })))));
  }
});

/***/ }),

/***/ "./src/blocks/service-section/editor.scss":
/*!************************************************!*\
  !*** ./src/blocks/service-section/editor.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/service-section/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/service-section/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parent */ "./src/blocks/service-section/parent.js");
/* harmony import */ var _block_assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-assets/icons */ "./src/blocks/block-assets/icons.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/service-section/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_assets_font_family__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block-assets/font-family */ "./src/blocks/block-assets/font-family.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var attrSave = {
  image: {
    type: "string",
    default: "icon"
  },
  imageWidth: {
    type: "number",
    default: 30
  },
  imageUrl: {
    type: "string",
    default: plugin_url.url + "assets/img/image2.jpg"
  },
  imageBorderRadius: {
    type: "number",
    default: 0
  },
  imagePadding: {
    type: "number",
    default: 0
  },
  title: {
    type: "string",
    default: "Add Title"
  },
  titleFontSize: {
    type: "number",
    default: "21"
  },
  titleColor: {
    type: "string",
    default: "#ffa600"
  },
  titleFF: {
    type: "string"
  },
  description: {
    type: "string",
    default: "Add Service Description"
  },
  descriptionFontSize: {
    type: "number",
    default: "21"
  },
  descriptionColor: {
    type: "string"
  },
  descriptionFF: {
    type: "string",
    default: "Arimo"
  },
  containerBgColor: {
    type: "string",
    default: "#EEF6F9"
  },
  containerBorder: {
    type: "boolean",
    default: false
  },
  containerBorderWidth: {
    type: "number",
    default: 2
  },
  containerBorderRadius: {
    type: "number",
    default: 3
  },
  containerBorderColor: {
    type: "string",
    default: "black"
  },
  containerSpace: {
    type: "number",
    default: 0
  },
  //   icon
  iconClass: {
    type: "string",
    default: "fas fa-coffee"
  },
  iconFontsize: {
    type: "number",
    default: "40"
  },
  iconColor: {
    type: "string",
    default: "#ffa600"
  },
  iconBgColor: {
    type: "string"
  },
  iconBorder: {
    type: "boolean",
    default: true
  },
  iconBorderWidth: {
    type: "number",
    default: 2
  },
  iconBorderRadius: {
    type: "number",
    default: 50
  },
  iconBorderColor: {
    type: "string",
    default: "#ffa600"
  },
  iconSpace: {
    type: "number",
    default: 79
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockType"])("zita-blocks/icon-image-content", {
  title: "icon Image content",
  icon: "editor-insertmore",
  category: "zita-category",
  parent: ["zita-blocks/block-column-parent"],
  getEditWrapperProps: function getEditWrapperProps(attributes) {},
  keywords: ["service", "service-section"],
  attributes: attrSave,
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var image = attributes.image,
        imageWidth = attributes.imageWidth,
        imageUrl = attributes.imageUrl,
        imagePadding = attributes.imagePadding,
        imageBorderRadius = attributes.imageBorderRadius,
        title = attributes.title,
        titleFontSize = attributes.titleFontSize,
        titleColor = attributes.titleColor,
        titleFF = attributes.titleFF,
        description = attributes.description,
        descriptionFF = attributes.descriptionFF,
        descriptionFontSize = attributes.descriptionFontSize,
        descriptionColor = attributes.descriptionColor,
        containerBgColor = attributes.containerBgColor,
        containerBorder = attributes.containerBorder,
        containerBorderWidth = attributes.containerBorderWidth,
        containerBorderRadius = attributes.containerBorderRadius,
        containerBorderColor = attributes.containerBorderColor,
        containerSpace = attributes.containerSpace,
        iconFontsize = attributes.iconFontsize,
        iconClass = attributes.iconClass,
        iconColor = attributes.iconColor,
        iconBgColor = attributes.iconBgColor,
        iconBorder = attributes.iconBorder,
        iconBorderWidth = attributes.iconBorderWidth,
        iconBorderRadius = attributes.iconBorderRadius,
        iconBorderColor = attributes.iconBorderColor,
        iconSpace = attributes.iconSpace; //icon border

    var borderStyle = iconBorder ? {
      borderWidth: iconBorderWidth + "px",
      borderStyle: "solid",
      borderColor: iconBorderColor,
      borderRadius: iconBorderRadius + "%",
      width: iconSpace + "px",
      height: iconSpace + "px"
    } : {};
    borderStyle = _objectSpread(_objectSpread({}, borderStyle), {
      backgroundColor: iconBgColor
    }); //icon border

    var imageStyle = {
      width: imageWidth + "%",
      borderRadius: imageBorderRadius + "px",
      padding: imagePadding + "px"
    };
    var containerBorderStyle = containerBorder ? {
      borderWidth: containerBorderWidth + "px",
      borderStyle: "solid",
      borderColor: containerBorderColor,
      borderRadius: containerBorderRadius + "px"
    } : {};
    containerBorderStyle = containerBgColor ? _objectSpread(_objectSpread({}, containerBorderStyle), {
      backgroundColor: containerBgColor,
      paddingTop: containerSpace + "px",
      paddingBottom: containerSpace + "px"
    }) : containerBorderStyle;

    var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
        _useState2 = _slicedToArray(_useState, 2),
        activeIconContainer = _useState2[0],
        activeIconContainerSet = _useState2[1];

    var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useState"])(_block_assets_icons__WEBPACK_IMPORTED_MODULE_1__["default"]),
        _useState4 = _slicedToArray(_useState3, 2),
        iconList = _useState4[0],
        setIconList = _useState4[1];

    var iconReff = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
      var handler = function handler(event) {
        if (!iconReff.current.contains(event.target)) {
          activeIconContainerSet(false);
        }
      };

      if (activeIconContainer) document.addEventListener("mousedown", handler);
      return function () {
        document.removeEventListener("mousedown", handler);
      };
    });

    var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
        _useState6 = _slicedToArray(_useState5, 2),
        activeFamilyContainer = _useState6[0],
        activeFamilyDrop = _useState6[1];

    var familyRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
      var handler = function handler(event) {
        if (!familyRef.current.contains(event.target)) {
          activeFamilyDrop(false);
        }
      };

      if (activeFamilyContainer) document.addEventListener("mouseup", handler);
      return function () {
        document.removeEventListener("mouseup", handler);
      };
    });
    return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: "Image and Icon Setting",
      initialOpen: false
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Choose Image Or Icon ")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: image == "image" ? "Icon" : "Image",
      checked: image == "image" ? true : false,
      onChange: function onChange(e) {
        setAttributes({
          image: e ? "image" : "icon"
        });
      }
    }), image == "image" && wp.element.createElement("div", {
      className: "service-image-setting"
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["MediaUpload"], {
      label: "Choose Image",
      onSelect: function onSelect(e) {
        setAttributes({
          imageUrl: e.sizes.full.url
        });
      },
      value: imageUrl,
      render: function render(_ref) {
        var open = _ref.open;
        return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
          onClick: open,
          icon: "upload",
          className: "service-image-uploader editor-media-placeholder__button is-button is-default is-large"
        }, "Open Media Library");
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: "Width",
      value: imageWidth,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          imageWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: "Padding",
      value: imagePadding,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          imagePadding: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: "Border Radius",
      value: imageBorderRadius,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          imageBorderRadius: e
        });
      }
    })), image == "icon" && wp.element.createElement("div", {
      className: "service-icon-setting"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Choose Icon")), wp.element.createElement("div", {
      ref: iconReff,
      className: "wpgt-radio-wrap ".concat(activeIconContainer ? "active" : "")
    }, wp.element.createElement("div", {
      className: "selected-icon",
      onClick: function onClick(e) {
        // let set__container = !activeIconContainer;
        activeIconContainerSet(true);
      }
    }, wp.element.createElement("i", {
      className: iconClass
    }), wp.element.createElement("div", {
      className: "search-container"
    }, wp.element.createElement("i", {
      className: "fas fa-search"
    }), wp.element.createElement("input", {
      type: "text",
      onChange: function onChange(e) {
        var value_ = e.target.value;

        if (value_ != "") {
          var newAr = _block_assets_icons__WEBPACK_IMPORTED_MODULE_1__["default"].filter(function (checkStr) {
            return checkStr.search(value_) != -1;
          });

          if (newAr.length) {
            setIconList(newAr);
          }
        } else {
          setIconList(_block_assets_icons__WEBPACK_IMPORTED_MODULE_1__["default"]);
        }
      }
    }))), wp.element.createElement("div", {
      className: "wpgt-radio-container",
      onChange: function onChange(e) {
        setAttributes({
          iconClass: e.target.value
        });
      }
    }, iconList.map(function (iconValue) {
      return wp.element.createElement("div", {
        className: "wpgt-radio-wrapper"
      }, wp.element.createElement("input", {
        id: "wpgt-Radio-" + iconValue,
        type: "radio",
        name: "wpgt-choose-icon",
        className: "radio-input",
        value: iconValue
      }), wp.element.createElement("label", {
        htmlFor: "wpgt-Radio-" + iconValue
      }, wp.element.createElement("i", {
        className: iconValue
      })));
    }))), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Size")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      value: iconFontsize,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          iconFontsize: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
      onChange: function onChange(color) {
        return setAttributes({
          iconColor: color
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Background Color")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ColorPicker"], {
      onChangeComplete: function onChangeComplete(colorBg) {
        var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");
        setAttributes({
          iconBgColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: iconBorder ? "Disable" : "Enable",
      checked: iconBorder,
      onChange: function onChange(e) {
        return setAttributes({
          iconBorder: e
        });
      }
    }), iconBorder && wp.element.createElement("div", {
      className: "icon-border-setting"
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: "Border Width",
      value: iconBorderWidth,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          iconBorderWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: "Border Radius",
      value: iconBorderRadius,
      min: 0,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          iconBorderRadius: e
        });
      }
    }), wp.element.createElement("p", null, "Border Color"), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
      onChange: function onChange(color) {
        return setAttributes({
          iconBorderColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: "Icon Space",
      value: iconSpace,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          iconSpace: e
        });
      }
    })))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: "Title Settings",
      initialOpen: false
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: "Font Size",
      value: titleFontSize,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          titleFontSize: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color ")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
      value: titleColor,
      onChange: function onChange(e) {
        return setAttributes({
          titleColor: e
        });
      }
    }), wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Family")), wp.element.createElement("div", {
      ref: familyRef,
      className: "font-family-drop-down ".concat(activeFamilyContainer ? "active" : "")
    }, wp.element.createElement("div", {
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer;
        activeFamilyDrop(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: titleFF
      }
    }, titleFF ? titleFF : "Choose Family")), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            titleFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    }))))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: "Description Settings",
      initialOpen: false
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: "Font Size",
      value: descriptionFontSize,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          descriptionFontSize: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color ")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
      value: descriptionColor,
      onChange: function onChange(e) {
        return setAttributes({
          descriptionColor: e
        });
      }
    }), wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Family")), wp.element.createElement("div", {
      ref: familyRef,
      className: "font-family-drop-down ".concat(activeFamilyContainer ? "active" : "")
    }, wp.element.createElement("div", {
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer;
        activeFamilyDrop(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: descriptionFF
      }
    }, descriptionFF ? descriptionFF : "Choose Family")), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            descriptionFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    }))))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: "Container Settings",
      initialOpen: false
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ColorPicker"], {
      onChangeComplete: function onChangeComplete(colorBg) {
        var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");
        setAttributes({
          containerBgColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: "Container Space",
      value: containerSpace,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          containerSpace: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Border")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: containerBorder ? "Disable" : "Enable",
      checked: containerBorder,
      onChange: function onChange(e) {
        return setAttributes({
          containerBorder: e
        });
      }
    }), containerBorder && wp.element.createElement("div", {
      className: "icon-border-setting"
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: "Border Width",
      value: containerBorderWidth,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          containerBorderWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: "Border Radius",
      value: containerBorderRadius,
      min: 0,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          containerBorderRadius: e
        });
      }
    }), wp.element.createElement("p", null, "Border Color"), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
      onChange: function onChange(color) {
        return setAttributes({
          containerBorderColor: color
        });
      }
    })))), wp.element.createElement("div", {
      className: "service-section-wrapper",
      style: containerBorderStyle
    }, wp.element.createElement("div", {
      className: "service-image-icon ".concat(image == "icon" ? "icon_" : "")
    }, image == "image" && wp.element.createElement("div", {
      className: "service-image-section"
    }, wp.element.createElement("img", {
      style: imageStyle,
      src: imageUrl
    })), image == "icon" && wp.element.createElement("div", {
      className: "icon-container",
      style: borderStyle
    }, wp.element.createElement("i", {
      style: {
        color: iconColor,
        fontSize: iconFontsize + "px"
      },
      className: iconClass
    }))), wp.element.createElement("div", {
      className: "service-title-description"
    }, wp.element.createElement("div", null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"], {
      key: "editable",
      tagName: "h1",
      placeholder: "Service Title",
      value: title,
      onChange: function onChange(e) {
        return setAttributes({
          title: e
        });
      },
      style: {
        color: titleColor,
        fontSize: titleFontSize + "px",
        fontFamily: titleFF
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"], {
      key: "editable",
      tagName: "p",
      placeholder: "Service Description",
      value: description,
      onChange: function onChange(e) {
        return setAttributes({
          description: e
        });
      },
      style: {
        color: descriptionColor,
        fontSize: descriptionFontSize + "px",
        fontFamily: descriptionFF
      }
    }))))];
  },
  save: function save(props) {
    var attributes = props.attributes;
    var image = attributes.image,
        imageWidth = attributes.imageWidth,
        imageUrl = attributes.imageUrl,
        imagePadding = attributes.imagePadding,
        imageBorderRadius = attributes.imageBorderRadius,
        title = attributes.title,
        titleFontSize = attributes.titleFontSize,
        titleColor = attributes.titleColor,
        description = attributes.description,
        descriptionFontSize = attributes.descriptionFontSize,
        descriptionColor = attributes.descriptionColor,
        containerBgColor = attributes.containerBgColor,
        containerBorder = attributes.containerBorder,
        containerBorderWidth = attributes.containerBorderWidth,
        containerBorderRadius = attributes.containerBorderRadius,
        containerBorderColor = attributes.containerBorderColor,
        containerSpace = attributes.containerSpace,
        iconFontsize = attributes.iconFontsize,
        iconClass = attributes.iconClass,
        iconColor = attributes.iconColor,
        iconBgColor = attributes.iconBgColor,
        iconBorder = attributes.iconBorder,
        iconBorderWidth = attributes.iconBorderWidth,
        iconBorderRadius = attributes.iconBorderRadius,
        iconBorderColor = attributes.iconBorderColor,
        iconSpace = attributes.iconSpace; //icon border

    var borderStyle = iconBorder ? {
      borderWidth: iconBorderWidth + "px",
      borderStyle: "solid",
      borderColor: iconBorderColor,
      borderRadius: iconBorderRadius + "%",
      width: iconSpace + "px",
      height: iconSpace + "px"
    } : {};
    borderStyle = _objectSpread(_objectSpread({}, borderStyle), {
      backgroundColor: iconBgColor
    }); //icon border

    var imageStyle = {
      width: imageWidth + "%",
      borderRadius: imageBorderRadius + "px",
      padding: imagePadding + "px"
    };
    var containerBorderStyle = containerBorder ? {
      borderWidth: containerBorderWidth + "px",
      borderStyle: "solid",
      borderColor: containerBorderColor,
      borderRadius: containerBorderRadius + "px"
    } : {};
    containerBorderStyle = containerBgColor ? _objectSpread(_objectSpread({}, containerBorderStyle), {
      backgroundColor: containerBgColor,
      paddingTop: containerSpace + "px",
      paddingBottom: containerSpace + "px"
    }) : containerBorderStyle;
    return wp.element.createElement("div", {
      className: "service-section-wrapper",
      style: containerBorderStyle
    }, wp.element.createElement("div", {
      className: "service-image-icon ".concat(image == "icon" ? "icon_" : "")
    }, image == "image" && wp.element.createElement("div", {
      className: "service-image-section"
    }, wp.element.createElement("img", {
      style: imageStyle,
      src: imageUrl
    })), image == "icon" && wp.element.createElement("div", {
      className: "icon-container",
      style: borderStyle
    }, wp.element.createElement("i", {
      style: {
        color: iconColor,
        fontSize: iconFontsize + "px"
      },
      className: iconClass
    }))), wp.element.createElement("div", {
      className: "service-title-description"
    }, wp.element.createElement("div", null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].Content, {
      tagName: "h1",
      value: title,
      style: {
        color: titleColor,
        fontSize: titleFontSize + "px"
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].Content, {
      tagName: "p",
      value: description,
      style: {
        color: descriptionColor,
        fontSize: descriptionFontSize + "px"
      }
    }))));
  }
});

/***/ }),

/***/ "./src/blocks/service-section/parent.js":
/*!**********************************************!*\
  !*** ./src/blocks/service-section/parent.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



var _wp$data = wp.data,
    useDispatch = _wp$data.useDispatch,
    useSelect = _wp$data.useSelect;
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("zita-blocks/block-column-parent", {
  title: "Service Section",
  icon: "grid-view",
  // description: "Parent Of all Column Member",
  category: "zita-category",
  supports: {
    align: ["center", "left", "right", "wide", "full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "wide"
    },
    columns: {
      type: "number",
      default: 2
    },
    fullWidth: {
      type: "string",
      default: ""
    }
  },
  edit: function edit(props) {
    var className = props.className,
        attributes = props.attributes,
        setAttributes = props.setAttributes;
    var columns = attributes.columns,
        fullWidth = attributes.fullWidth;
    var MY_TEMPLATE = [["zita-blocks/icon-image-content"], ["zita-blocks/icon-image-content"]];
    return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Number Of Column",
      value: columns,
      onChange: function onChange(v) {
        return setAttributes({
          columns: v
        });
      },
      min: 1,
      max: 4
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Column Layout")), wp.element.createElement("div", {
      className: "column-layout-num-column"
    }, wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      value: "",
      name: "column-layout",
      id: "column-layout-box",
      onChange: function onChange() {
        return setAttributes({
          fullWidth: ""
        });
      }
    }), wp.element.createElement("label", {
      for: "column-layout-box"
    }, wp.element.createElement("img", {
      src: plugin_url.url + "assets/img/box-layout.png"
    }))), wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      value: "full-width",
      name: "column-layout",
      id: "column-layout-full",
      onChange: function onChange() {
        return setAttributes({
          fullWidth: "full-width"
        });
      }
    }), wp.element.createElement("label", {
      for: "column-layout-full"
    }, wp.element.createElement("img", {
      src: plugin_url.url + "assets/img/100percent.png"
    })))))), wp.element.createElement("div", {
      className: "".concat(className, " ").concat(fullWidth, " column-count-").concat(columns, " ")
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
      template: MY_TEMPLATE,
      allowedBlocks: ["zita-blocks/icon-image-content"]
    }))];
  },
  save: function save(props) {
    var attributes = props.attributes;
    var columns = attributes.columns,
        fullWidth = attributes.fullWidth;
    return wp.element.createElement("div", {
      className: "".concat(fullWidth, " column-count-").concat(columns, " ")
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
  }
});

/***/ }),

/***/ "./src/blocks/zita-block-slider/edit.js":
/*!**********************************************!*\
  !*** ./src/blocks/zita-block-slider/edit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var bgImageWrapper = plugin_url.url + "assets/img/image2.jpg";

var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "addSlide", function () {
      var defaultArray = {
        container: {
          bgImage: bgImageWrapper,
          overlayColor: "",
          bgSize: "cover"
        },
        wrapper: {
          bgcolor: "",
          border: "",
          alignment: "left",
          spacing: "2"
        },
        title: {
          text: "This Is Title text",
          fontSize: 17,
          color: "red"
        },
        text: {
          text: "Add Description",
          fontSize: 17,
          color: "red"
        },
        buttoneOne: {
          enable: true,
          text: "Button One",
          link: "#",
          target: false,
          fontSize: "",
          color: "",
          backgroundColor: "",
          height: "",
          width: "",
          border: false,
          borderColor: "",
          borderWidth: "",
          borderRadius: ""
        },
        buttoneTwo: {
          enable: true,
          text: "Button Two",
          link: "#",
          target: false,
          fontSize: "",
          color: "",
          backgroundColor: "",
          height: "",
          width: "",
          border: false,
          borderColor: "",
          borderWidth: "",
          borderRadius: ""
        }
      };
      var slides_ = _this.props.attributes.slides;

      _this.props.setAttributes({
        slides: [].concat(_toConsumableArray(slides_), [defaultArray])
      });

      _this.setState({
        selectedSlide: slides_.length
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateSlides", function (value, for_, type) {
      var slides_ = _this.props.attributes.slides;

      var newSlide = _toConsumableArray(slides_);

      newSlide[_this.state.selectedSlide][for_][type] = value;

      _this.props.setAttributes({
        slides: newSlide
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateGlobalSlide", function (value, for_, type) {
      var sliderSetting = _this.props.attributes.sliderSetting;

      var newSetting = _toConsumableArray(sliderSetting);

      if (type) {
        newSetting[0][for_][type] = value;
      } else {
        newSetting[0][for_] = value;
      }

      _this.props.setAttributes({
        sliderSetting: newSetting
      });
    });

    _this.state = {
      selectedSlide: 0,
      twoBtn: "buttoneOne",
      trigger: "linear"
    };
    return _this;
  }

  _createClass(Edit, [{
    key: "removeSlide",
    value: function removeSlide() {
      var slides_ = this.props.attributes.slides;
      var removeItem = this.state.selectedSlide;
      var afterRemove = [].concat(_toConsumableArray(slides_.slice(0, removeItem)), _toConsumableArray(slides_.slice(removeItem + 1)));
      this.props.setAttributes({
        slides: afterRemove
      });
      this.setState({
        selectedSlide: removeItem - 1 >= 0 ? removeItem - 1 : removeItem
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$attribute = this.props.attributes,
          slides = _this$props$attribute.slides,
          sliderSetting = _this$props$attribute.sliderSetting;
      var thisState = this.state;
      var stateIndex = thisState.selectedSlide;
      var currentSlide = slides[stateIndex]; // console.log(slides);
      // console.log(currentSlide);

      var activeTwoBtnState = thisState.twoBtn;
      var triggerActive = thisState.trigger;
      var buttonOneStyle = {
        fontSize: currentSlide.buttoneOne.fontSize,
        color: currentSlide.buttoneOne.color,
        backgroundColor: currentSlide.buttoneOne.backgroundColor,
        paddingTop: currentSlide.buttoneOne.height,
        paddingBottom: currentSlide.buttoneOne.height,
        paddingLeft: currentSlide.buttoneOne.width,
        paddingRight: currentSlide.buttoneOne.width
      };
      buttonOneStyle = currentSlide.buttoneOne.border ? _objectSpread(_objectSpread({}, {
        borderColor: currentSlide.buttoneOne.borderColor,
        borderWidth: currentSlide.buttoneOne.borderWidth,
        borderRadius: currentSlide.buttoneOne.borderRadius,
        borderStyle: "solid"
      }), buttonOneStyle) : buttonOneStyle;
      var buttonTwoStyle = {
        fontSize: currentSlide.buttoneTwo.fontSize,
        color: currentSlide.buttoneTwo.color,
        backgroundColor: currentSlide.buttoneTwo.backgroundColor,
        paddingTop: currentSlide.buttoneTwo.height,
        paddingBottom: currentSlide.buttoneTwo.height,
        paddingLeft: currentSlide.buttoneTwo.width,
        paddingRight: currentSlide.buttoneTwo.width
      };
      buttonTwoStyle = currentSlide.buttoneTwo.border ? _objectSpread(_objectSpread({}, {
        borderColor: currentSlide.buttoneTwo.borderColor,
        borderWidth: currentSlide.buttoneTwo.borderWidth,
        borderRadius: currentSlide.buttoneTwo.borderRadius,
        borderStyle: "solid"
      }), buttonTwoStyle) : buttonTwoStyle;
      sliderSetting = sliderSetting[0];
      var leftRightStyle = {
        color: sliderSetting.leftRightTrigger.color,
        backgroundColor: sliderSetting.leftRightTrigger.backgroundColor,
        fontSize: sliderSetting.leftRightTrigger.fontSize
      };
      var SlideulStyle = null;

      if (sliderSetting.dimension.height) {
        SlideulStyle = {
          minHeight: sliderSetting.dimension.custom_height
        };
      }

      return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
        title: "Slider Setting",
        initialOpen: false
      }, wp.element.createElement("p", {
        className: "block-inside"
      }, "Slider Dimension"), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Width")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: sliderSetting.dimension.width ? "Full Width" : "Custom Width",
        checked: sliderSetting.dimension.width,
        onChange: function onChange(e) {
          _this2.updateGlobalSlide(e, "dimension", "width");
        }
      }), sliderSetting.dimension.width && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: "Width",
        value: sliderSetting.dimension.custom_width,
        min: 200,
        max: 1400,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "dimension", "custom_width");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Height")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: sliderSetting.dimension.width ? "Auto" : "Custom Height",
        checked: sliderSetting.dimension.height,
        onChange: function onChange(e) {
          _this2.updateGlobalSlide(e, "dimension", "height");
        }
      }), sliderSetting.dimension.height && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: "Height",
        value: sliderSetting.dimension.custom_height,
        min: 360,
        max: 1000,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "dimension", "custom_height");
        }
      }), wp.element.createElement("p", {
        className: "block-inside"
      }, "Slider Effect"), wp.element.createElement("div", {
        class: "zita-switcher-button-section"
      }, wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.updateGlobalSlide("slideEffect", "sliderEffect");
        },
        className: sliderSetting.sliderEffect == "slideEffect" ? "selected" : ""
      }, "Slide"), wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.updateGlobalSlide("fadeEffect", "sliderEffect");
        },
        className: sliderSetting.sliderEffect == "fadeEffect" ? "selected" : ""
      }, "Fade")), wp.element.createElement("p", {
        className: "block-inside"
      }, "Trigger"), wp.element.createElement("div", {
        class: "zita-switcher-button-section"
      }, wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            trigger: "linear"
          });
        },
        className: triggerActive == "linear" ? "selected" : ""
      }, "Linear"), wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            trigger: "left"
          });
        },
        className: triggerActive == "left" ? "selected" : ""
      }, "Left Right"), wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            trigger: "auto"
          });
        },
        className: triggerActive == "auto" ? "selected" : ""
      }, "Auto")), triggerActive == "linear" && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: sliderSetting.linearTrigger.enable ? "Disable" : "Enable",
        checked: sliderSetting.linearTrigger.enable,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "linearTrigger", "enable");
        }
      }), sliderSetting.linearTrigger.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: "Size",
        value: sliderSetting.linearTrigger.fontSize,
        min: 0,
        max: 70,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "linearTrigger", "fontSize");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: sliderSetting.linearTrigger.color,
        onChangeComplete: function onChangeComplete(colorBg) {
          var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");

          _this2.updateGlobalSlide(color, "linearTrigger", "color");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Active Color")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: sliderSetting.linearTrigger.activeColor,
        onChangeComplete: function onChangeComplete(colorBg) {
          var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");

          _this2.updateGlobalSlide(color, "linearTrigger", "activeColor");
        }
      }))), triggerActive == "left" && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: sliderSetting.leftRightTrigger.enable ? "Disable" : "Enable",
        checked: sliderSetting.leftRightTrigger.enable,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "leftRightTrigger", "enable");
        }
      }), sliderSetting.leftRightTrigger.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: "Font Size",
        value: sliderSetting.leftRightTrigger.fontSize,
        min: 0,
        max: 70,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "leftRightTrigger", "fontSize");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["ColorPalette"], {
        value: sliderSetting.leftRightTrigger.color,
        onChange: function onChange(color) {
          return _this2.updateGlobalSlide(color, "leftRightTrigger", "color");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Background Color")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: sliderSetting.leftRightTrigger.backgroundColor,
        onChangeComplete: function onChangeComplete(colorBg) {
          var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");

          _this2.updateGlobalSlide(color, "leftRightTrigger", "backgroundColor");
        }
      }))), triggerActive == "auto" && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: sliderSetting.autoTrigger.enable ? "Disable" : "Enable",
        checked: sliderSetting.autoTrigger.enable,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "autoTrigger", "enable");
        }
      }), sliderSetting.autoTrigger.enable && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: "Slide Delay",
        value: sliderSetting.autoTrigger.delay,
        min: 0,
        max: 12,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "autoTrigger", "delay");
        }
      }))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
        title: "Slide Setting",
        initialOpen: false
      }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Background image")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["MediaUpload"], {
        allowedType: "image",
        onSelect: function onSelect(newImage) {
          return _this2.updateSlides(newImage.sizes.full.url, "container", "bgImage");
        },
        value: currentSlide.container.bgImage,
        render: function render(_ref) {
          var open = _ref.open;
          return wp.element.createElement("div", {
            onClick: open,
            className: "zita-block-image-uploader"
          }, wp.element.createElement("div", null, wp.element.createElement("i", {
            className: "fas fa-plus"
          })), wp.element.createElement("img", {
            src: currentSlide.container.bgImage
          }));
        }
      }), wp.element.createElement("div", {
        className: "flex-section"
      }, wp.element.createElement("p", null, "Background Size"), wp.element.createElement("select", {
        value: currentSlide.container.bgSize,
        onChange: function onChange(e) {
          _this2.updateSlides(e.target.value, "container", "bgSize");
        }
      }, wp.element.createElement("option", {
        value: "auto"
      }, "Auto"), wp.element.createElement("option", {
        value: "cover"
      }, "Cover"), wp.element.createElement("option", {
        value: "contain"
      }, "Contain"))), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Overlay Color")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: currentSlide.container.overlayColor,
        onChangeComplete: function onChangeComplete(colorBg) {
          var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");

          _this2.updateSlides(color, "container", "overlayColor");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Content Alignment")), wp.element.createElement("div", {
        className: "zita-alignment"
      }, wp.element.createElement("div", null, wp.element.createElement("span", {
        onClick: function onClick() {
          _this2.updateSlides("left", "wrapper", "alignment");
        },
        className: "dashicons dashicons-editor-alignleft ".concat(currentSlide.wrapper.alignment == "left" ? "active" : "")
      })), wp.element.createElement("div", null, wp.element.createElement("span", {
        onClick: function onClick() {
          _this2.updateSlides("center", "wrapper", "alignment");
        },
        className: "dashicons dashicons-editor-aligncenter ".concat(currentSlide.wrapper.alignment == "center" ? "active" : "")
      })), wp.element.createElement("div", null, wp.element.createElement("span", {
        onClick: function onClick() {
          _this2.updateSlides("right", "wrapper", "alignment");
        },
        className: "dashicons dashicons-editor-alignright ".concat(currentSlide.wrapper.alignment == "right" ? "active" : "")
      })))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
        title: "Text Setting",
        initialOpen: false
      }, wp.element.createElement("p", {
        className: "block-inside"
      }, "Header Setting"), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Size")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        value: currentSlide.title.fontSize,
        min: 0,
        max: 100,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, "title", "fontSize");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["ColorPalette"], {
        value: currentSlide.title.color,
        onChange: function onChange(color) {
          return _this2.updateSlides(color, "title", "color");
        }
      }), wp.element.createElement("p", {
        className: "block-inside"
      }, "Description Setting"), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Size")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        value: currentSlide.text.fontSize,
        min: 0,
        max: 100,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, "text", "fontSize");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["ColorPalette"], {
        value: currentSlide.text.color,
        onChange: function onChange(color) {
          return _this2.updateSlides(color, "text", "color");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Text Vertical Space")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        value: currentSlide.wrapper.spacing,
        min: 0,
        max: 30,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, "wrapper", "spacing");
        }
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
        title: "Button Setting",
        initialOpen: false
      }, wp.element.createElement("div", {
        className: "zita-switcher-button-section"
      }, wp.element.createElement("span", {
        className: activeTwoBtnState == "buttoneOne" ? "selected" : "",
        onClick: function onClick() {
          _this2.setState({
            twoBtn: "buttoneOne"
          });
        }
      }, "Button 1"), wp.element.createElement("span", {
        className: activeTwoBtnState == "buttoneTwo" ? "selected" : "",
        onClick: function onClick() {
          _this2.setState({
            twoBtn: "buttoneTwo"
          });
        }
      }, "Button 2")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: currentSlide[activeTwoBtnState].enable ? "Disable" : "Enable",
        checked: currentSlide[activeTwoBtnState].enable,
        onChange: function onChange(e) {
          _this2.updateSlides(e, activeTwoBtnState, "enable");
        }
      }), currentSlide[activeTwoBtnState].enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: "Font Size",
        value: currentSlide[activeTwoBtnState].fontSize,
        min: 0,
        max: 70,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, activeTwoBtnState, "fontSize");
        }
      }), wp.element.createElement("p", null, "Color"), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["ColorPalette"], {
        value: currentSlide[activeTwoBtnState].color,
        onChange: function onChange(color) {
          return _this2.updateSlides(color, activeTwoBtnState, "color");
        }
      }), wp.element.createElement("p", null, "Background Color"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: currentSlide[activeTwoBtnState].backgroundColor,
        onChangeComplete: function onChangeComplete(colorBg) {
          var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");

          _this2.updateSlides(color, activeTwoBtnState, "backgroundColor");
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: "Height",
        value: currentSlide[activeTwoBtnState].height,
        min: 0,
        max: 30,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, activeTwoBtnState, "height");
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: "Width",
        value: currentSlide[activeTwoBtnState].width,
        min: 0,
        max: 30,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, activeTwoBtnState, "width");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Border")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: currentSlide[activeTwoBtnState].border ? "Disable" : "Enable",
        checked: currentSlide[activeTwoBtnState].border,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, activeTwoBtnState, "border");
        }
      }), currentSlide[activeTwoBtnState].border && wp.element.createElement("div", {
        className: "icon-border-setting"
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: "Border Width",
        value: currentSlide[activeTwoBtnState].borderWidth,
        min: 0,
        max: 100,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, activeTwoBtnState, "borderWidth");
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: "Border Radius",
        value: currentSlide[activeTwoBtnState].borderRadius,
        min: 0,
        max: 50,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, activeTwoBtnState, "borderRadius");
        }
      }), wp.element.createElement("p", null, "Border Color"), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["ColorPalette"], {
        value: currentSlide[activeTwoBtnState].borderColor,
        onChange: function onChange(color) {
          return _this2.updateSlides(color, activeTwoBtnState, "borderColor");
        }
      }))))), wp.element.createElement("div", {
        className: "zita-block-slide-wrapper"
      }, wp.element.createElement("div", {
        className: "zita-slider-bullet"
      }, wp.element.createElement("ul", {
        className: "zita-slider-ul-bullet"
      }, slides.map(function (val, index_) {
        return wp.element.createElement("li", {
          key: index_,
          className: stateIndex == index_ ? "selected_" : null
        }, wp.element.createElement("span", {
          onClick: function onClick(e) {
            _this2.setState({
              selectedSlide: index_
            });
          }
        }));
      }), slides.length < 8 && wp.element.createElement("li", {
        className: "add-item"
      }, wp.element.createElement("span", {
        onClick: function onClick() {
          _this2.addSlide();
        }
      }, wp.element.createElement("i", {
        className: "fas fa-plus"
      }))))), wp.element.createElement("div", {
        className: "zita-slider-container"
      }, sliderSetting.linearTrigger.enable && wp.element.createElement("ul", {
        className: "zita-slider-bullet-trigger"
      }, slides.map(function (val, index_) {
        var trigStyle = {
          height: sliderSetting.linearTrigger.fontSize + "px",
          width: sliderSetting.linearTrigger.fontSize + "px"
        };
        trigStyle = index_ != stateIndex ? _objectSpread(_objectSpread({}, trigStyle), {
          backgroundColor: sliderSetting.linearTrigger.color
        }) : _objectSpread(_objectSpread({}, trigStyle), {
          backgroundColor: sliderSetting.linearTrigger.activeColor
        });
        return wp.element.createElement("li", {
          className: "".concat(index_ == stateIndex ? "selected_" : "")
        }, wp.element.createElement("span", {
          style: trigStyle
        }));
      })), sliderSetting.leftRightTrigger.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("div", {
        className: "zita-slider-bullet-next-prev next"
      }, wp.element.createElement("span", {
        style: leftRightStyle
      }, wp.element.createElement("i", {
        class: "fas fa-arrow-right"
      }))), wp.element.createElement("div", {
        className: "zita-slider-bullet-next-prev prev"
      }, wp.element.createElement("span", {
        style: leftRightStyle
      }, wp.element.createElement("i", {
        class: "fas fa-arrow-left"
      })))), slides.length > 1 && wp.element.createElement("span", {
        className: "zita-remove-slide",
        onClick: function onClick(e) {
          _this2.removeSlide();
        }
      }, wp.element.createElement("i", {
        className: "fas fa-trash-alt"
      })), wp.element.createElement("ul", {
        className: "zita-slider-ul-slides",
        style: SlideulStyle
      }, slides.map(function (val, index_) {
        return wp.element.createElement("li", {
          onClick: function onClick(e) {
            _this2.setState({
              selectedSlide: index_
            });
          },
          key: index_,
          className: stateIndex == index_ ? "selected_" : null
        }, wp.element.createElement("div", {
          className: "zita-slider-wrapper"
        }, wp.element.createElement("div", {
          className: "zita-slider-container"
        }, wp.element.createElement("div", {
          className: "zita-slider-content-wrapper"
        }, wp.element.createElement("div", {
          className: "zita-slider-image-container",
          style: {
            backgroundSize: val.container.bgSize,
            backgroundImage: "url(" + val.container.bgImage + ")"
          }
        }), wp.element.createElement("div", {
          className: "zita-slider-text ".concat(val.wrapper.alignment),
          style: {
            backgroundColor: val.container.overlayColor
          }
        }, wp.element.createElement("div", {
          style: {
            marginTop: val.wrapper.spacing + "px",
            marginBottom: val.wrapper.spacing + "px"
          }
        }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"], {
          key: "editable",
          tagName: "h1",
          placeholder: "Service Title",
          value: val.title.text,
          onChange: function onChange(e) {
            return _this2.updateSlides(e, "title", "text");
          },
          style: {
            fontSize: val.title.fontSize + "px",
            color: val.title.color
          }
        }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"], {
          key: "editable",
          tagName: "h2",
          placeholder: "Service Title",
          value: val.text.text,
          onChange: function onChange(e) {
            return _this2.updateSlides(e, "text", "text");
          },
          style: {
            fontSize: val.text.fontSize + "px",
            color: val.text.color
          }
        }), wp.element.createElement("div", {
          className: "button-container"
        }, val.buttoneOne.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"], {
          key: "editable",
          tagName: "a",
          placeholder: "Button One",
          value: val.buttoneOne.text,
          onChange: function onChange(e) {
            return _this2.updateSlides(e, "buttoneOne", "text");
          },
          style: buttonOneStyle
        })), val.buttoneTwo.enable && wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"], {
          key: "editable",
          tagName: "a",
          placeholder: "Button Two",
          value: val.buttoneTwo.text,
          onChange: function onChange(e) {
            return _this2.updateSlides(e, "buttoneTwo", "text");
          },
          style: buttonTwoStyle
        }))))))));
      }))))];
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/blocks/zita-block-slider/editor.scss":
/*!**************************************************!*\
  !*** ./src/blocks/zita-block-slider/editor.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/zita-block-slider/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/zita-block-slider/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/zita-block-slider/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/zita-block-slider/edit.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var bgImageWrapper = plugin_url.url + "assets/img/image2.jpg";

var attrSave = {
  sliderSetting: {
    type: "array",
    default: [{
      dimension: {
        width: false,
        custom_width: 580,
        height: false,
        custom_height: 360
      },
      sliderEffect: "fadeEffect",
      linearTrigger: {
        enable: true,
        fontSize: 20,
        color: "rgba(231,192,192,1)",
        activeColor: "rgba(68,222,68,1)"
      },
      leftRightTrigger: {
        enable: true,
        fontSize: 20,
        color: "rgba(231,192,192,1)",
        backgroundColor: "rgb(128, 128, 128)"
      },
      autoTrigger: {
        enable: true,
        delay: 4
      }
    }]
  },
  slides: {
    type: "array",
    default: [{
      container: {
        bgImage: bgImageWrapper,
        overlayColor: "",
        bgSize: "cover"
      },
      wrapper: {
        bgcolor: "",
        border: "",
        alignment: "left",
        spacing: 2
      },
      title: {
        text: "This Is Title text",
        fontSize: 17,
        color: "red"
      },
      text: {
        text: "Add Description",
        fontSize: 17,
        color: "red"
      },
      buttoneOne: {
        enable: true,
        text: "Button One",
        link: "#",
        target: false,
        fontSize: "",
        color: "",
        backgroundColor: "",
        height: "",
        width: "",
        border: false,
        borderColor: "",
        borderWidth: "",
        borderRadius: ""
      },
      buttoneTwo: {
        enable: true,
        text: "Button Two",
        link: "#",
        target: false,
        fontSize: "",
        color: "",
        backgroundColor: "",
        height: "",
        width: "",
        border: false,
        borderColor: "",
        borderWidth: "",
        borderRadius: ""
      }
    }, {
      container: {
        bgImage: bgImageWrapper,
        overlayColor: "",
        bgSize: "cover"
      },
      wrapper: {
        bgcolor: "",
        border: "",
        alignment: "left",
        spacing: 2
      },
      title: {
        text: "This Is Title text",
        fontSize: 17,
        color: "red"
      },
      text: {
        text: "Add Description",
        fontSize: 17,
        color: "red"
      },
      buttoneOne: {
        enable: true,
        text: "Button One",
        link: "#",
        target: false,
        fontSize: "",
        color: "",
        backgroundColor: "",
        height: "",
        width: "",
        border: false,
        borderColor: "",
        borderWidth: "",
        borderRadius: ""
      },
      buttoneTwo: {
        enable: true,
        text: "Button Two",
        link: "#",
        target: false,
        fontSize: "",
        color: "",
        backgroundColor: "",
        height: "",
        width: "",
        border: false,
        borderColor: "",
        borderWidth: "",
        borderRadius: ""
      }
    }, {
      container: {
        bgImage: bgImageWrapper,
        overlayColor: "",
        bgSize: "cover"
      },
      wrapper: {
        bgcolor: "",
        border: "",
        alignment: "left",
        spacing: 2
      },
      title: {
        text: "This Is Title text",
        fontSize: 17,
        color: "red"
      },
      text: {
        text: "Add Description",
        fontSize: 17,
        color: "red"
      },
      buttoneOne: {
        enable: true,
        text: "Button One",
        link: "#",
        target: false,
        fontSize: "",
        color: "",
        backgroundColor: "",
        height: "",
        width: "",
        border: false,
        borderColor: "",
        borderWidth: "",
        borderRadius: ""
      },
      buttoneTwo: {
        enable: true,
        text: "Button Two",
        link: "#",
        target: false,
        fontSize: "",
        color: "",
        backgroundColor: "",
        height: "",
        width: "",
        border: false,
        borderColor: "",
        borderWidth: "",
        borderRadius: ""
      }
    }]
  }
};

var elementLiSlide = function elementLiSlide(val, index_) {
  var clone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var buttonOneStyle = {};
  if (val.buttoneOne.fontSize) buttonOneStyle.fontSize = val.buttoneOne.fontSize;
  if (val.buttoneOne.color) buttonOneStyle.color = val.buttoneOne.color;
  if (val.buttoneOne.backgroundColor) buttonOneStyle.backgroundColor = val.buttoneOne.backgroundColor;

  if (val.buttoneOne.height) {
    buttonOneStyle.paddingBottom = val.buttoneOne.height;
    buttonOneStyle.paddingTop = val.buttoneOne.height;
  }

  if (val.buttoneOne.width) {
    buttonOneStyle.paddingLeft = val.buttoneOne.width;
    buttonOneStyle.paddingRight = val.buttoneOne.width;
  }

  buttonOneStyle = val.buttoneOne.border ? _objectSpread(_objectSpread({}, {
    borderColor: val.buttoneOne.borderColor,
    borderWidth: val.buttoneOne.borderWidth,
    borderRadius: val.buttoneOne.borderRadius,
    borderStyle: "solid"
  }), buttonOneStyle) : buttonOneStyle;
  var buttonTwoStyle = {};
  if (val.buttoneTwo.fontSize) buttonTwoStyle.fontSize = val.buttoneTwo.fontSize;
  if (val.buttoneTwo.color) buttonTwoStyle.color = val.buttoneTwo.color;
  if (val.buttoneTwo.backgroundColor) buttonTwoStyle.backgroundColor = val.buttoneTwo.backgroundColor;

  if (val.buttoneTwo.height) {
    buttonTwoStyle.paddingBottom = val.buttoneTwo.height;
    buttonTwoStyle.paddingTop = val.buttoneTwo.height;
  }

  if (val.buttoneTwo.width) {
    buttonTwoStyle.paddingLeft = val.buttoneTwo.width;
    buttonTwoStyle.paddingRight = val.buttoneTwo.width;
  }

  buttonTwoStyle = val.buttoneTwo.border ? _objectSpread(_objectSpread({}, {
    borderColor: val.buttoneTwo.borderColor,
    borderWidth: val.buttoneTwo.borderWidth,
    borderRadius: val.buttoneTwo.borderRadius,
    borderStyle: "solid"
  }), buttonTwoStyle) : buttonTwoStyle;
  return wp.element.createElement("li", {
    key: index_,
    className: "slides ".concat(index_ == 0 ? "selected_" : "", " ").concat(clone ? clone : "")
  }, wp.element.createElement("div", {
    className: "zita-slider-wrapper"
  }, wp.element.createElement("div", {
    className: "zita-slider-container"
  }, wp.element.createElement("div", {
    className: "zita-slider-content-wrapper"
  }, wp.element.createElement("div", {
    className: "zita-slider-image-container",
    style: {
      backgroundSize: "cover",
      backgroundImage: "url(" + val.container.bgImage + ")"
    }
  }), wp.element.createElement("div", {
    className: "zita-slider-text ".concat(val.wrapper.alignment),
    style: {
      backgroundColor: val.container.overlayColor
    }
  }, wp.element.createElement("div", {
    style: val.wrapper.spacing && {
      marginTop: val.wrapper.spacing + "px",
      marginBottom: val.wrapper.spacing + "px"
    }
  }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "h1",
    value: val.title.text,
    style: {
      fontSize: val.title.fontSize + "px",
      color: val.title.color
    }
  }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "h2",
    value: val.text.text,
    style: {
      fontSize: val.text.fontSize + "px",
      color: val.text.color
    }
  }), wp.element.createElement("div", {
    className: "button-container"
  }, val.buttoneOne.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "a",
    placeholder: "Button One",
    value: val.buttoneOne.text,
    style: buttonOneStyle
  })), val.buttoneTwo.enable && wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "a",
    placeholder: "Button One",
    value: val.buttoneTwo.text,
    style: buttonTwoStyle
  }))))))));
};

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("zita-blocks/slide", {
  title: "Slider",
  icon: "editor-code",
  category: "zita-category",
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var sliderSetting = attributes.sliderSetting;
    var sliderWidth = sliderSetting[0].dimension;
    var attr_ = {
      "data-align": "full"
    };

    if (sliderWidth.width && sliderWidth.custom_width) {
      attr_ = _objectSpread(_objectSpread({}, attr_), {
        style: {
          maxWidth: sliderWidth.custom_width + "px"
        }
      });
    }

    return attr_;
  },
  keywords: ["slider", "slider section"],
  attributes: attrSave,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save(props) {
    var _props$attributes = props.attributes,
        slides = _props$attributes.slides,
        sliderSetting = _props$attributes.sliderSetting;
    sliderSetting = sliderSetting[0];
    var leftRightStyle = {
      color: sliderSetting.leftRightTrigger.color,
      backgroundColor: sliderSetting.leftRightTrigger.backgroundColor,
      fontSize: sliderSetting.leftRightTrigger.fontSize
    };
    var trigStyle = "height: ".concat(sliderSetting.linearTrigger.fontSize, "px;width:").concat(sliderSetting.linearTrigger.fontSize, "px;background-color: ").concat(sliderSetting.linearTrigger.color, ";");
    var trigStyleObj = {
      height: sliderSetting.linearTrigger.fontSize + "px",
      width: sliderSetting.linearTrigger.fontSize + "px",
      backgroundColor: sliderSetting.linearTrigger.color
    };
    var sliderSettingJson = {};
    if (sliderSetting.dimension.width) sliderSettingJson = _objectSpread(_objectSpread({}, sliderSettingJson), {
      width: sliderSetting.dimension.custom_width
    });
    if (sliderSetting.dimension.height) sliderSettingJson = _objectSpread(_objectSpread({}, sliderSettingJson), {
      height: sliderSetting.dimension.custom_height
    });
    sliderSettingJson = JSON.stringify(sliderSettingJson);
    return wp.element.createElement("div", {
      className: "zita-block-slide-wrapper"
    }, wp.element.createElement("div", {
      className: "zita-slider-container",
      sliderDelay: sliderSetting.autoTrigger.delay > 0 && sliderSetting.autoTrigger.enable ? sliderSetting.autoTrigger.delay : 0
    }, sliderSetting.linearTrigger.enable && wp.element.createElement("ul", {
      className: "zita-slider-bullet-trigger",
      "active-color": sliderSetting.linearTrigger.activeColor,
      childStyle: trigStyle
    }, slides.map(function (val, index_) {
      return wp.element.createElement("li", {
        className: "".concat(index_ == 0 ? "selected_" : "")
      }, wp.element.createElement("span", {
        style: trigStyleObj
      }));
    })), sliderSetting.leftRightTrigger.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("div", {
      className: "zita-slider-bullet-next-prev next"
    }, wp.element.createElement("span", {
      style: leftRightStyle
    }, wp.element.createElement("i", {
      class: "fas fa-arrow-right"
    }))), wp.element.createElement("div", {
      className: "zita-slider-bullet-next-prev prev"
    }, wp.element.createElement("span", {
      style: leftRightStyle
    }, wp.element.createElement("i", {
      class: "fas fa-arrow-left"
    })))), wp.element.createElement("ul", {
      className: "zita-slider-ul-slides ".concat(sliderSetting.sliderEffect),
      sliderSetting: sliderSettingJson
    }, slides.map(function (val, index_) {
      return elementLiSlide(val, index_);
    }))));
  }
});

/***/ }),

/***/ "./src/blocks/zita-post-slider/edit.js":
/*!*********************************************!*\
  !*** ./src/blocks/zita-post-slider/edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var bgImageWrapper = plugin_url.url + "assets/img/image2.jpg";

var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "dateFormate", function (date) {
      var date_ = date.split("T")[0];
      var dateObj = new Date(date_);
      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var dateArr = monthNames[dateObj.getMonth()] + " " + dateObj.getDate() + ", " + dateObj.getFullYear();
      return wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"].Content, {
        tag: "span",
        value: dateArr
      });
    });

    _defineProperty(_assertThisInitialized(_this), "excerptWords", function (words, words_) {
      words_ = Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__["decodeEntities"])(words_);
      words_ = words_.replace(/<\/?[^>]+(>|$)/g, "");
      words_ = words_.split(" ");
      words_ = words_.slice(0, words);
      return words_.join(" ");
    });

    _defineProperty(_assertThisInitialized(_this), "showCateFn", function (categories) {
      var returR = [];

      if ("category" in _this.props && _this.props.category && categories.length) {
        categories.forEach(function (cate) {
          _this.props.category.forEach(function (searchCate) {
            if (cate == searchCate.id) {
              returR.push(searchCate.name);
              return;
            }
          });
        });
      }

      if (returR.length) {
        return returR.map(function (returnH) {
          return wp.element.createElement("span", null, returnH);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "showTagsFn", function (tags_) {
      var returR = [];

      if ("tags" in _this.props && _this.props.tags && tags_.length) {
        tags_.forEach(function (tag) {
          _this.props.tags.forEach(function (searchtag) {
            if (tag == searchtag.id) {
              returR.push(searchtag.name);
              return;
            }
          });
        });
      }

      if (returR.length) {
        return returR.map(function (returnH) {
          return wp.element.createElement("span", null, returnH);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "authorFn", function (author) {
      // console.log("wordkinggg");
      var retur = {};

      if ("authors" in _this.props) {
        _this.props.authors.map(function (authorDetail) {
          if (authorDetail.id == author) {
            retur = authorDetail;
            return;
          }
        });
      }

      return retur;
    });

    _defineProperty(_assertThisInitialized(_this), "updateObj", function (parent_key, child_key, initialValue, value_) {
      var newNewValue = _toConsumableArray(initialValue);

      newNewValue[0][child_key] = value_;
      var setAttr_ = {};
      setAttr_[parent_key] = newNewValue;

      _this.props.setAttributes(setAttr_);
    });

    _defineProperty(_assertThisInitialized(_this), "updateGlobalSlide", function (value, for_, type) {
      var sliderSetting = _this.props.attributes.sliderSetting;

      var newSetting = _toConsumableArray(sliderSetting);

      if (type) {
        newSetting[0][for_][type] = value;
      } else {
        newSetting[0][for_] = value;
      }

      _this.props.setAttributes({
        sliderSetting: newSetting
      });
    });

    _this.state = {
      slideIndex: 0,
      trigger: "linear"
    };
    return _this;
  }

  _createClass(Edit, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          posts = _this$props.posts,
          category = _this$props.category;
      var slideIndex = this.state.slideIndex; // console.log("zita slider this.props", this.props);

      var heading = attributes.heading,
          author = attributes.author,
          numberOfPosts = attributes.numberOfPosts,
          date = attributes.date,
          showTag = attributes.showTag,
          showCate = attributes.showCate,
          excerpt = attributes.excerpt,
          postCategories = attributes.postCategories,
          meta_style = attributes.meta_style,
          title = attributes.title,
          sliderSetting = attributes.sliderSetting;
      var heading_ = heading[0];
      var excerpt_ = excerpt[0];
      var date_ = date[0];
      var author_ = author[0];
      var meta_style_ = meta_style[0];
      var title_ = title[0];
      var showTag_ = showTag[0];
      var showCate_ = showCate[0];
      var cateGory = [{
        value: "all",
        label: "All"
      }];

      if (category && category.length) {
        category.map(function (catt) {
          cateGory.push({
            value: catt.id,
            label: catt.name
          });
        });
      }

      sliderSetting = sliderSetting[0];
      var SlideulStyle = null;

      if (sliderSetting.dimension.height) {
        SlideulStyle = {
          minHeight: sliderSetting.dimension.custom_height
        };
      }

      var leftRightStyle = {
        color: sliderSetting.leftRightTrigger.color,
        backgroundColor: sliderSetting.leftRightTrigger.backgroundColor,
        fontSize: sliderSetting.leftRightTrigger.fontSize
      };
      var triggerActive = this.state.trigger;
      var trigStyle = {
        height: sliderSetting.linearTrigger.fontSize + "px",
        width: sliderSetting.linearTrigger.fontSize + "px"
      };
      return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
        title: "Slider Setting",
        initialOpen: false
      }, wp.element.createElement("p", {
        className: "block-inside"
      }, "Slider Dimension"), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Width")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: sliderSetting.dimension.width ? "Full Width" : "Custom Width",
        checked: sliderSetting.dimension.width,
        onChange: function onChange(e) {
          _this2.updateGlobalSlide(e, "dimension", "width");
        }
      }), sliderSetting.dimension.width && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: "Width",
        value: sliderSetting.dimension.custom_width,
        min: 200,
        max: 1400,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "dimension", "custom_width");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Height")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: sliderSetting.dimension.width ? "Auto" : "Custom Height",
        checked: sliderSetting.dimension.height,
        onChange: function onChange(e) {
          _this2.updateGlobalSlide(e, "dimension", "height");
        }
      }), sliderSetting.dimension.height && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: "Height",
        value: sliderSetting.dimension.custom_height,
        min: 360,
        max: 1000,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "dimension", "custom_height");
        }
      }), wp.element.createElement("p", {
        className: "block-inside"
      }, "Slider Effect"), wp.element.createElement("div", {
        class: "zita-switcher-button-section"
      }, wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.updateGlobalSlide("slideEffect", "sliderEffect");
        },
        className: sliderSetting.sliderEffect == "slideEffect" ? "selected" : ""
      }, "Slide"), wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.updateGlobalSlide("fadeEffect", "sliderEffect");
        },
        className: sliderSetting.sliderEffect == "fadeEffect" ? "selected" : ""
      }, "Fade")), wp.element.createElement("p", {
        className: "block-inside"
      }, "Trigger"), wp.element.createElement("div", {
        class: "zita-switcher-button-section"
      }, wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            trigger: "linear"
          });
        },
        className: triggerActive == "linear" ? "selected" : ""
      }, "Linear"), wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            trigger: "left"
          });
        },
        className: triggerActive == "left" ? "selected" : ""
      }, "Left Right"), wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            trigger: "auto"
          });
        },
        className: triggerActive == "auto" ? "selected" : ""
      }, "Auto")), triggerActive == "linear" && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: sliderSetting.linearTrigger.enable ? "Disable" : "Enable",
        checked: sliderSetting.linearTrigger.enable,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "linearTrigger", "enable");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Position")), wp.element.createElement("div", {
        class: "zita-switcher-button-section"
      }, wp.element.createElement("span", {
        onClick: function onClick() {
          _this2.updateGlobalSlide("in", "linearTrigger", "place");
        },
        className: sliderSetting.linearTrigger.place == "in" ? "selected" : ""
      }, "In"), wp.element.createElement("span", {
        onClick: function onClick() {
          _this2.updateGlobalSlide("out", "linearTrigger", "place");
        },
        className: sliderSetting.linearTrigger.place == "out" ? "selected" : ""
      }, "Out")), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Trigger Type")), sliderSetting.linearTrigger.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("div", {
        class: "zita-switcher-button-section"
      }, wp.element.createElement("span", {
        onClick: function onClick() {
          _this2.updateGlobalSlide("bullet", "linearTrigger", "trigger");
        },
        className: sliderSetting.linearTrigger.trigger == "bullet" ? "selected" : ""
      }, "Bullets"), wp.element.createElement("span", {
        onClick: function onClick() {
          _this2.updateGlobalSlide("thumbnail", "linearTrigger", "trigger");
        },
        className: sliderSetting.linearTrigger.trigger == "thumbnail" ? "selected" : ""
      }, "Thumbnail")), sliderSetting.linearTrigger.trigger == "bullet" ? wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: "Size",
        value: sliderSetting.linearTrigger.fontSize,
        min: 0,
        max: 70,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "linearTrigger", "fontSize");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: sliderSetting.linearTrigger.color,
        onChangeComplete: function onChangeComplete(colorBg) {
          var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");

          _this2.updateGlobalSlide(color, "linearTrigger", "color");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Active Color")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: sliderSetting.linearTrigger.activeColor,
        onChangeComplete: function onChangeComplete(colorBg) {
          var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");

          _this2.updateGlobalSlide(color, "linearTrigger", "activeColor");
        }
      })) : wp.element.createElement("h1", null, "thumbnail design"))), triggerActive == "left" && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: sliderSetting.leftRightTrigger.enable ? "Disable" : "Enable",
        checked: sliderSetting.leftRightTrigger.enable,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "leftRightTrigger", "enable");
        }
      }), sliderSetting.leftRightTrigger.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: "Font Size",
        value: sliderSetting.leftRightTrigger.fontSize,
        min: 0,
        max: 70,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "leftRightTrigger", "fontSize");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["ColorPalette"], {
        value: sliderSetting.leftRightTrigger.color,
        onChange: function onChange(color) {
          return _this2.updateGlobalSlide(color, "leftRightTrigger", "color");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Background Color")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: sliderSetting.leftRightTrigger.backgroundColor,
        onChangeComplete: function onChangeComplete(colorBg) {
          var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");

          _this2.updateGlobalSlide(color, "leftRightTrigger", "backgroundColor");
        }
      }))), triggerActive == "auto" && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: sliderSetting.autoTrigger.enable ? "Disable" : "Enable",
        checked: sliderSetting.autoTrigger.enable,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "autoTrigger", "enable");
        }
      }), sliderSetting.autoTrigger.enable && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: "Slide Delay",
        value: sliderSetting.autoTrigger.delay,
        min: 0,
        max: 12,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "autoTrigger", "delay");
        }
      }))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
        title: "Post Setting",
        initialOpen: false
      }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "No of Post Display")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        value: numberOfPosts,
        min: 1,
        max: 20,
        onChange: function onChange(e) {
          setAttributes({
            numberOfPosts: e
          });
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Choose Category")), wp.element.createElement("div", {
        className: "zita-multiple-select"
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
        multiple: true,
        value: postCategories.length ? postCategories : ["all"],
        onChange: function onChange(choosen) {
          var chooseAll = choosen.filter(function (choose) {
            if (choose == "all") return true;
          });
          if (chooseAll.length) choosen = [];
          setAttributes({
            postCategories: choosen
          });
        },
        options: cateGory
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: "Author",
        checked: author_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("author", "enable", author, e);
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: "Date",
        checked: date_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("date", "enable", date, e);
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: "Categories",
        checked: showCate_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("showCate", "enable", showCate, e);
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: "Last Modified Date",
        checked: date_.last_modified,
        onChange: function onChange(e) {
          return _this2.updateObj("date", "last_modified", date, e);
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: "Tag",
        checked: showTag_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("showTag", "enable", showTag, e);
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["ColorPalette"], {
        value: "color" in meta_style_ ? meta_style_.color : "",
        onChange: function onChange(color) {
          return _this2.updateObj("meta_style", "color", meta_style, color);
        }
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
        title: "Excerpt",
        initialOpen: false
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: excerpt_.enable ? "Hide" : "Show",
        checked: excerpt_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("excerpt", "enable", excerpt, e);
        }
      }), excerpt_.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Number of words")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        value: excerpt_.words,
        min: 1,
        max: 200,
        onChange: function onChange(e) {
          return _this2.updateObj("excerpt", "words", excerpt, e);
        }
      })), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["ColorPalette"], {
        value: excerpt_.color,
        onChange: function onChange(color) {
          return _this2.updateObj("excerpt", "color", excerpt, color);
        }
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
        title: "Heading",
        initialOpen: false
      }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Heading Tag")), wp.element.createElement("select", {
        value: heading_.tag,
        className: "zita-block-select",
        onChange: function onChange(e) {
          var value_ = e.target.value;
          var font_ = value_ == "h1" ? 30 : value_ == "h2" ? 25 : value_ == "h3" ? 20 : 17;

          var newHeading = _toConsumableArray(heading);

          newHeading[0]["tag"] = value_;
          newHeading[0]["fontSize"] = font_;
          setAttributes({
            heading: newHeading
          });
        }
      }, wp.element.createElement("option", {
        value: "h1"
      }, "H1"), wp.element.createElement("option", {
        value: "h2"
      }, "H2"), wp.element.createElement("option", {
        value: "h3"
      }, "H3"), wp.element.createElement("option", {
        value: "p"
      }, "P")), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Size")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        value: heading_.fontSize,
        min: 1,
        max: 50,
        onChange: function onChange(e) {
          return _this2.updateObj("heading", "fontSize", heading, e);
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["ColorPalette"], {
        value: heading_.color,
        onChange: function onChange(color) {
          return _this2.updateObj("heading", "color", heading, color);
        }
      }))), wp.element.createElement("div", {
        className: "zita-block-slide-wrapper"
      }, wp.element.createElement("div", {
        className: "zita-slider-bullet"
      }, wp.element.createElement("ul", {
        className: "zita-slider-ul-bullet"
      }, posts && posts.length > 0 && "getMedia_" in posts[0] && posts.map(function (val, index_) {
        return "getMedia_" in val && val.getMedia_ && "guid" in val.getMedia_ && wp.element.createElement("li", {
          key: index_,
          className: slideIndex == index_ ? "selected_" : null
        }, wp.element.createElement("span", {
          onClick: function onClick(e) {
            _this2.setState({
              slideIndex: index_
            });
          }
        }));
      }))), wp.element.createElement("div", {
        className: "zita-slider-container"
      }, sliderSetting.leftRightTrigger.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("div", {
        className: "zita-slider-bullet-next-prev next"
      }, wp.element.createElement("span", {
        style: leftRightStyle
      }, wp.element.createElement("i", {
        class: "fas fa-arrow-right"
      }))), wp.element.createElement("div", {
        className: "zita-slider-bullet-next-prev prev"
      }, wp.element.createElement("span", {
        style: leftRightStyle
      }, wp.element.createElement("i", {
        class: "fas fa-arrow-left"
      })))), wp.element.createElement("ul", {
        className: "zita-slider-ul-slides",
        style: SlideulStyle
      }, posts && posts.length > 0 && "getMedia_" in posts[0] ? posts.map(function (post, slideIndexCu) {
        var postAuthor = author_.enable && "name" in _this2.authorFn(post.author) ? _this2.authorFn(post.author).name : false;
        return "getMedia_" in post && post.getMedia_ && "guid" in post.getMedia_ && wp.element.createElement("li", {
          key: post.id,
          className: slideIndex == slideIndexCu && "selected_"
        }, wp.element.createElement("div", {
          class: "zita-slider-wrapper"
        }, wp.element.createElement("div", {
          class: "zita-slider-container"
        }, wp.element.createElement("div", {
          class: "zita-slider-content-wrapper"
        }, wp.element.createElement("div", {
          class: "zita-slider-image-container",
          style: {
            backgroundImage: "url(" + post.getMedia_.guid.rendered + ")"
          }
        }), wp.element.createElement("div", {
          class: "zita-slider-text"
        }, wp.element.createElement("div", {
          className: "slider-post-content"
        }, wp.element.createElement("div", {
          className: "post-wrapper"
        }, wp.element.createElement("div", {
          className: "post-content"
        }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"].Content, {
          className: "post-heading",
          tagName: heading_.tag,
          value: post.title.rendered,
          style: {
            fontSize: heading_.fontSize,
            color: heading_.color
          }
        }), showCate_.enable && wp.element.createElement("p", {
          className: "post-category"
        }, _this2.showCateFn(post.categories)), wp.element.createElement("div", {
          className: "post-meta-all"
        }, postAuthor && wp.element.createElement("p", {
          style: {
            color: meta_style_.color
          },
          className: "post-author"
        }, postAuthor), date_.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("span", {
          className: "slash"
        }, "/"), wp.element.createElement("p", {
          style: {
            color: meta_style_.color
          },
          className: "post-date"
        }, _this2.dateFormate(post.date))), date_.last_modified && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("span", {
          className: "slash"
        }, "/"), wp.element.createElement("p", {
          style: {
            color: meta_style_.color
          },
          className: "post-date-last-modified"
        }, wp.element.createElement("span", null, "Modified: "), _this2.dateFormate(post.modified)))), excerpt_.enable && wp.element.createElement("p", {
          style: {
            color: excerpt_.color
          },
          className: "post-excerpt"
        }, _this2.excerptWords(excerpt_.words, post.excerpt.rendered)), showTag_.enable && wp.element.createElement("p", {
          style: {
            color: meta_style_.color
          },
          className: "post-tags"
        }, _this2.showTagsFn(post.tags))))))))));
      }) : !posts ? wp.element.createElement("h1", null, "No Post Found ") : wp.element.createElement("h1", null, "Loading ")), sliderSetting.linearTrigger.enable && posts && posts.length > 0 && "getMedia_" in posts[0] && wp.element.createElement("ul", {
        className: "zita-slider-bullet-trigger thumbnail-image trigger_".concat(sliderSetting.linearTrigger.place)
      }, posts.map(function (post, index_) {
        trigStyle = index_ != slideIndex ? _objectSpread(_objectSpread({}, trigStyle), {
          backgroundColor: sliderSetting.linearTrigger.color
        }) : _objectSpread(_objectSpread({}, trigStyle), {
          backgroundColor: sliderSetting.linearTrigger.activeColor
        });
        return "getMedia_" in post && post.getMedia_ && "guid" in post.getMedia_ && (sliderSetting.linearTrigger.trigger == "thumbnail" ? wp.element.createElement("li", null, wp.element.createElement("div", null, wp.element.createElement("img", {
          src: post.getMedia_.guid.rendered
        }))) : wp.element.createElement("li", {
          className: "".concat(index_ == slideIndex ? "selected_" : "")
        }, wp.element.createElement("span", {
          style: trigStyle
        })));
      }))))];
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select, props) {
  var attributes = props.attributes;
  var numberOfPosts = attributes.numberOfPosts,
      postCategories = attributes.postCategories;
  var query = {
    per_page: numberOfPosts
  };

  if (postCategories && postCategories.length) {
    query["categories"] = postCategories.join(",");
  }

  var _select = select("core"),
      getMedia = _select.getMedia,
      getEntityRecords = _select.getEntityRecords,
      getAuthors = _select.getAuthors;

  var getAllPost = getEntityRecords("postType", "post", query);
  var cate_ = getEntityRecords("taxonomy", "category", {
    per_page: -1
  });
  var tags_ = getEntityRecords("taxonomy", "post_tag", {
    per_page: -1
  });
  var arrayCatePost = {
    posts: true,
    category: cate_,
    tags: tags_
  };

  if (getAllPost && getAllPost.length) {
    var returnArray = [];
    getAllPost.map(function (v, index_) {
      if (v.featured_media) {
        getAllPost[index_]["getMedia_"] = getMedia(v.featured_media);
      } else {
        getAllPost[index_]["getMedia_"] = false;
      }

      returnArray.push(getAllPost[index_]);
    });
    arrayCatePost["posts"] = returnArray;
  } else if (getAllPost instanceof Array && getAllPost.length == 0) {
    arrayCatePost["posts"] = false;
  } // autohrs


  var authors = getAuthors();

  if (authors && authors.length) {
    var authors_ = [];
    authors.map(function (v) {
      authors_.push({
        id: v.id,
        name: v.name
      });
    });
    arrayCatePost["authors"] = authors_;
  }

  return arrayCatePost;
})(Edit));

/***/ }),

/***/ "./src/blocks/zita-post-slider/editor.scss":
/*!*************************************************!*\
  !*** ./src/blocks/zita-post-slider/editor.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/zita-post-slider/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/zita-post-slider/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/zita-post-slider/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/zita-post-slider/edit.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var attrSave = {};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("zita-blocks/zita-post-slider", {
  title: "Post Slider",
  icon: "format-aside",
  category: "zita-category",
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var sliderSetting = attributes.sliderSetting;
    var sliderWidth = sliderSetting[0].dimension;
    var attr_ = {
      "data-align": "full"
    };

    if (sliderWidth.width && sliderWidth.custom_width) {
      attr_ = _objectSpread(_objectSpread({}, attr_), {
        style: {
          maxWidth: sliderWidth.custom_width + "px"
        }
      });
    }

    return attr_;
  },
  keywords: ["post", "post slider"],
  // attributes: attrSave,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/zita-post-tc/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/zita-post-tc/edit.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "updateObj", function (parent_key, child_key, initialValue, value_) {
      var newNewValue = _toConsumableArray(initialValue);

      newNewValue[0][child_key] = value_;
      var setAttr_ = {};
      setAttr_[parent_key] = newNewValue;

      _this.props.setAttributes(setAttr_);
    });

    _defineProperty(_assertThisInitialized(_this), "dateFormate", function (date) {
      var date_ = date.split("T")[0];
      var dateObj = new Date(date_);
      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var dateArr = monthNames[dateObj.getMonth()] + " " + dateObj.getDate() + ", " + dateObj.getFullYear();
      return wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
        tag: "span",
        value: dateArr
      });
    });

    _defineProperty(_assertThisInitialized(_this), "excerptWords", function (words, words_) {
      words_ = Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__["decodeEntities"])(words_);
      words_ = words_.replace(/<\/?[^>]+(>|$)/g, "");
      words_ = words_.split(" ");
      words_ = words_.slice(0, words);
      words_ = words_.join(" "); // words_ = decodeEntities(words_);

      return words_;
    });

    _defineProperty(_assertThisInitialized(_this), "showCateFn", function (categories) {
      var returR = [];

      if ("category" in _this.props && _this.props.category && categories.length) {
        categories.forEach(function (cate) {
          _this.props.category.forEach(function (searchCate) {
            if (cate == searchCate.id) {
              returR.push(searchCate.name);
              return;
            }
          });
        });
      }

      if (returR.length) {
        return returR.map(function (returnH) {
          return wp.element.createElement("span", null, returnH);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "showTagsFn", function (tags_) {
      var returR = [];

      if ("tags" in _this.props && _this.props.tags && tags_.length) {
        tags_.forEach(function (tag) {
          _this.props.tags.forEach(function (searchtag) {
            if (tag == searchtag.id) {
              returR.push(searchtag.name);
              return;
            }
          });
        });
      }

      if (returR.length) {
        return returR.map(function (returnH) {
          return wp.element.createElement("span", null, returnH);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "authorFn", function (author) {
      var retur = {};

      if ("authors" in _this.props) {
        _this.props.authors.map(function (authorDetail) {
          if (authorDetail.id == author) {
            retur = authorDetail;
            return;
          }
        });
      }

      return retur;
    });

    _defineProperty(_assertThisInitialized(_this), "returnHtml", function (post, heading_, author_, date_, meta_style_, thumbnail_, showCate_, excerpt_, showTag_) {
      var postAuthor = author_ && author_.enable && "name" in _this.authorFn(post.author) ? _this.authorFn(post.author).name : false;
      return wp.element.createElement("article", {
        className: "block-post-article",
        key: post.id
      }, wp.element.createElement("div", {
        className: "post-wrapper"
      }, "getMedia_" in post && post.getMedia_ && "guid" in post.getMedia_ && thumbnail_.enable && wp.element.createElement("div", {
        className: "featured-image"
      }, wp.element.createElement("img", {
        style: {
          borderRadius: thumbnail_.borderRadius + "px"
        },
        src: post.getMedia_.guid.rendered
      })), wp.element.createElement("div", {
        className: "post-content"
      }, showCate_ && showCate_.enable && wp.element.createElement("p", {
        className: "post-category"
      }, _this.showCateFn(post.categories)), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
        className: "post-heading",
        tagName: heading_.tag,
        value: post.title.rendered,
        style: {
          fontSize: heading_.fontSize,
          color: heading_.color
        }
      }), wp.element.createElement("div", {
        className: "post-meta-all"
      }, postAuthor && wp.element.createElement("p", {
        style: {
          color: meta_style_.color
        },
        className: "post-author"
      }, postAuthor), date_.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("span", {
        className: "slash"
      }, "/"), wp.element.createElement("p", {
        style: {
          color: meta_style_.color
        },
        className: "post-date"
      }, _this.dateFormate(post.date))), date_.last_modified && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("span", {
        className: "slash"
      }, "/"), wp.element.createElement("p", {
        style: {
          color: meta_style_.color
        },
        className: "post-date-last-modified"
      }, wp.element.createElement("span", null, "Modified: "), _this.dateFormate(post.modified)))), excerpt_ && excerpt_.enable && wp.element.createElement("p", {
        style: {
          color: excerpt_.color
        },
        className: "post-excerpt"
      }, _this.excerptWords(excerpt_.words, post.excerpt.rendered), wp.element.createElement("span", {
        className: "read-more"
      }, "...Read More")), showTag_ && showTag_.enable && wp.element.createElement("p", {
        style: {
          color: meta_style_.color
        },
        className: "post-tags"
      }, _this.showTagsFn(post.tags)))));
    });

    _this.state = {
      metaChoose: "primary",
      excerpt: "primary",
      heading: "primary"
    };
    return _this;
  }

  _createClass(Edit, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          posts = _this$props.posts,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          category = _this$props.category,
          totalPost = _this$props.totalPost;
      console.log("this.props", this.props); // return <h1>This is Two Column Block</h1>;

      var heading = attributes.heading,
          author = attributes.author,
          numberOfPosts = attributes.numberOfPosts,
          thumbnail = attributes.thumbnail,
          date = attributes.date,
          showTag = attributes.showTag,
          showCate = attributes.showCate,
          excerpt = attributes.excerpt,
          heading2 = attributes.heading2,
          excerpt2 = attributes.excerpt2,
          author2 = attributes.author2,
          date2 = attributes.date2,
          showCate2 = attributes.showCate2,
          postCategories = attributes.postCategories,
          meta_style = attributes.meta_style,
          title = attributes.title;
      var heading_ = heading[0];
      var thumbnail_ = thumbnail[0];
      var excerpt_ = excerpt[0];
      var date_ = date[0];
      var author_ = author[0];
      var meta_style_ = meta_style[0];
      var title_ = title[0];
      var showTag_ = showTag[0];
      var showCate_ = showCate[0]; // secondary

      var heading2_ = heading2[0];
      var excerpt2_ = excerpt2[0];
      var showCate2_ = showCate2[0];
      var date2_ = date2[0];
      var author2_ = author2[0]; // category init

      var cateGory = [{
        value: "all",
        label: "All"
      }];

      if (category && category.length) {
        category.map(function (catt) {
          cateGory.push({
            value: catt.id,
            label: catt.name
          });
        });
      }

      return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: "Post Layout",
        initialOpen: false
      }, wp.element.createElement("p", {
        className: "block-inside"
      }, "Block Title"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: title_.enable ? "Hide" : "Show",
        checked: title_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("title", "enable", title, e);
        }
      }), title_.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: "Font Size",
        value: title_.fontSize,
        min: 5,
        max: 50,
        onChange: function onChange(e) {
          _this2.updateObj("title", "fontSize", title, e);
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
        value: title_.color,
        onChange: function onChange(color) {
          return _this2.updateObj("title", "color", title, color);
        }
      })), wp.element.createElement("p", null, wp.element.createElement("strong", null, "No of Post Display")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        value: numberOfPosts,
        min: 1,
        max: 20,
        onChange: function onChange(e) {
          setAttributes({
            numberOfPosts: e
          });
        }
      }), wp.element.createElement("p", {
        className: "block-inside"
      }, "Featured Image"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: thumbnail_.enable ? "Hide" : "Show",
        checked: thumbnail_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("thumbnail", "enable", thumbnail, e);
        }
      }), thumbnail_.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Border Radius")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        value: thumbnail_.borderRadius,
        min: 0,
        max: 80,
        onChange: function onChange(e) {
          return _this2.updateObj("thumbnail", "borderRadius", thumbnail, e);
        }
      }))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: "Post Meta",
        initialOpen: false
      }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Choose Category")), wp.element.createElement("div", {
        className: "zita-multiple-select"
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
        multiple: true,
        value: postCategories.length ? postCategories : ["all"],
        onChange: function onChange(choosen) {
          var chooseAll = choosen.filter(function (choose) {
            if (choose == "all") return true;
          });
          if (chooseAll.length) choosen = [];
          setAttributes({
            postCategories: choosen
          });
        },
        options: cateGory
      })), wp.element.createElement("div", {
        class: "zita-switcher-button-section"
      }, wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            metaChoose: "primary"
          });
        },
        className: this.state.metaChoose == "primary" ? "selected" : ""
      }, "Primary"), wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            metaChoose: "secondary"
          });
        },
        className: this.state.metaChoose == "secondary" ? "selected" : ""
      }, "Secondary")), this.state.metaChoose == "primary" ? wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Author",
        checked: author_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("author", "enable", author, e);
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Date",
        checked: date_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("date", "enable", date, e);
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Categories",
        checked: showCate_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("showCate", "enable", showCate, e);
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Last Modified Date",
        checked: date_.last_modified,
        onChange: function onChange(e) {
          return _this2.updateObj("date", "last_modified", date, e);
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Tag",
        checked: showTag_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("showTag", "enable", showTag, e);
        }
      })) : wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Author",
        checked: author2_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("author2", "enable", author2, e);
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Date",
        checked: date2_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("date2", "enable", date2, e);
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Categories",
        checked: showCate2_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("showCate2", "enable", showCate2, e);
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Last Modified Date",
        checked: date2_.last_modified,
        onChange: function onChange(e) {
          return _this2.updateObj("date2", "last_modified", date2, e);
        }
      })), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
        value: "color" in meta_style_ ? meta_style_.color : "",
        onChange: function onChange(color) {
          return _this2.updateObj("meta_style", "color", meta_style, color);
        }
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: "Excerpt",
        initialOpen: false
      }, wp.element.createElement("div", {
        class: "zita-switcher-button-section"
      }, wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            excerpt: "primary"
          });
        },
        className: this.state.excerpt == "primary" ? "selected" : ""
      }, "Primary"), wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            excerpt: "secondary"
          });
        },
        className: this.state.excerpt == "secondary" ? "selected" : ""
      }, "Secondary")), this.state.excerpt == "primary" ? wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: excerpt_.enable ? "Hide" : "Show",
        checked: excerpt_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("excerpt", "enable", excerpt, e);
        }
      }), excerpt_.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Number of words")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        value: excerpt_.words,
        min: 1,
        max: 200,
        onChange: function onChange(e) {
          return _this2.updateObj("excerpt", "words", excerpt, e);
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
        value: excerpt_.color,
        onChange: function onChange(color) {
          return _this2.updateObj("excerpt", "color", excerpt, color);
        }
      }))) : wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: excerpt2_.enable ? "Hide" : "Show",
        checked: excerpt2_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("excerpt2", "enable", excerpt2, e);
        }
      }), excerpt2_.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Number of words")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        value: excerpt2_.words,
        min: 1,
        max: 200,
        onChange: function onChange(e) {
          return _this2.updateObj("excerpt2", "words", excerpt2, e);
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
        value: excerpt2_.color,
        onChange: function onChange(color) {
          return _this2.updateObj("excerpt2", "color", excerpt2, color);
        }
      })))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: "Heading",
        initialOpen: false
      }, wp.element.createElement("div", {
        class: "zita-switcher-button-section"
      }, wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            heading: "primary"
          });
        },
        className: this.state.heading == "primary" ? "selected" : ""
      }, "Primary"), wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            heading: "secondary"
          });
        },
        className: this.state.heading == "secondary" ? "selected" : ""
      }, "Secondary")), this.state.heading == "primary" ? wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Heading Tag")), wp.element.createElement("select", {
        value: heading_.tag,
        className: "zita-block-select",
        onChange: function onChange(e) {
          var value_ = e.target.value;
          var font_ = value_ == "h1" ? 30 : value_ == "h2" ? 25 : value_ == "h3" ? 20 : 17;

          var newHeading = _toConsumableArray(heading);

          newHeading[0]["tag"] = value_;
          newHeading[0]["fontSize"] = font_;
          setAttributes({
            heading: newHeading
          });
        }
      }, wp.element.createElement("option", {
        value: "h1"
      }, "H1"), wp.element.createElement("option", {
        value: "h2"
      }, "H2"), wp.element.createElement("option", {
        value: "h3"
      }, "H3"), wp.element.createElement("option", {
        value: "p"
      }, "P")), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Size")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        value: heading_.fontSize,
        min: 1,
        max: 50,
        onChange: function onChange(e) {
          return _this2.updateObj("heading", "fontSize", heading, e);
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
        value: heading_.color,
        onChange: function onChange(color) {
          return _this2.updateObj("heading", "color", heading, color);
        }
      })) : wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Heading Tag")), wp.element.createElement("select", {
        value: heading2_.tag,
        className: "zita-block-select",
        onChange: function onChange(e) {
          var value_ = e.target.value;
          var font_ = value_ == "h1" ? 30 : value_ == "h2" ? 25 : value_ == "h3" ? 20 : 17;

          var newHeading = _toConsumableArray(heading2);

          newHeading[0]["tag"] = value_;
          newHeading[0]["fontSize"] = font_;
          setAttributes({
            heading2: newHeading
          });
        }
      }, wp.element.createElement("option", {
        value: "h1"
      }, "H1"), wp.element.createElement("option", {
        value: "h2"
      }, "H2"), wp.element.createElement("option", {
        value: "h3"
      }, "H3"), wp.element.createElement("option", {
        value: "p"
      }, "P")), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Size")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        value: heading2_.fontSize,
        min: 1,
        max: 50,
        onChange: function onChange(e) {
          return _this2.updateObj("heading2", "fontSize", heading2, e);
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
        value: heading2_.color,
        onChange: function onChange(color) {
          return _this2.updateObj("heading2", "color", heading2, color);
        }
      })))), posts && posts.length > 0 && "getMedia_" in posts[0] ? wp.element.createElement("div", {
        className: "zita-two-post-wrapper"
      }, wp.element.createElement("div", {
        className: "zita-post-two-column"
      }, wp.element.createElement("div", {
        className: "column-one"
      }, this.returnHtml(posts[0], heading_, author_, date_, meta_style_, thumbnail_, showCate_, excerpt_, showTag_)), wp.element.createElement("div", {
        className: "column-two"
      }, posts.length > 1 && posts.map(function (post, index__) {
        return index__ != 0 && _this2.returnHtml(post, heading2_, author2_, date2_, meta_style_, thumbnail_, showCate2_, excerpt2_, false);
      }))), posts && posts.length > 0 && "getMedia_" in posts[0] && totalPost > posts.length && wp.element.createElement("div", {
        className: "zita-two-post-wrapper-next-prev"
      }, wp.element.createElement("div", null, wp.element.createElement("i", {
        class: "fas fa-chevron-left"
      })), wp.element.createElement("div", null, wp.element.createElement("i", {
        class: "fas fa-chevron-right"
      })))) : wp.element.createElement("div", null, !posts ? "No Post Found" : "Loding..."));
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]); // export default Edit;


/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select, props) {
  var attributes = props.attributes;
  var numberOfPosts = attributes.numberOfPosts,
      postCategories = attributes.postCategories;
  var query = {
    per_page: numberOfPosts
  };
  var query2 = {
    per_page: -1
  };

  if (postCategories && postCategories.length) {
    var cateCh = postCategories.join(",");
    query["categories"] = cateCh;
    query2["categories"] = cateCh;
  }

  var _select = select("core"),
      getMedia = _select.getMedia,
      getEntityRecords = _select.getEntityRecords,
      getAuthors = _select.getAuthors;

  var getTotalPost = getEntityRecords("postType", "post", query2);
  var getAllPost = getEntityRecords("postType", "post", query);
  var cate_ = getEntityRecords("taxonomy", "category", {
    per_page: -1
  });
  var tags_ = getEntityRecords("taxonomy", "post_tag", {
    per_page: -1
  });
  var arrayCatePost = {
    posts: true,
    category: cate_,
    tags: tags_
  };

  if (getAllPost && getAllPost.length) {
    var returnArray = [];
    getAllPost.map(function (v, index_) {
      if (v.featured_media) {
        getAllPost[index_]["getMedia_"] = getMedia(v.featured_media);
      } else {
        getAllPost[index_]["getMedia_"] = false;
      }

      returnArray.push(getAllPost[index_]);
    });
    arrayCatePost["posts"] = returnArray;
    arrayCatePost["totalPost"] = getTotalPost.length;
  } else if (getAllPost instanceof Array && getAllPost.length == 0) {
    arrayCatePost["posts"] = false;
  } // autohrs


  var authors = getAuthors();

  if (authors && authors.length) {
    var authors_ = [];
    authors.map(function (v) {
      authors_.push({
        id: v.id,
        name: v.name
      });
    });
    arrayCatePost["authors"] = authors_;
  }

  return arrayCatePost;
})(Edit));

/***/ }),

/***/ "./src/blocks/zita-post-tc/editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/zita-post-tc/editor.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/zita-post-tc/index.js":
/*!******************************************!*\
  !*** ./src/blocks/zita-post-tc/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/zita-post-tc/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/zita-post-tc/edit.js");



var attrSave = {};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("zita-blocks/zita-post-tc", {
  title: "Post Two Section",
  icon: "format-aside",
  category: "zita-category",
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var attr_ = {
      "data-align": "full"
    };
    return attr_;
  },
  keywords: ["post two section"],
  // attributes: attrSave,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/zita-post/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/zita-post/edit.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import arrayMove from "array-move";



var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "updateObj", function (parent_key, child_key, initialValue, value_) {
      var newNewValue = _toConsumableArray(initialValue);

      newNewValue[0][child_key] = value_;
      var setAttr_ = {};
      setAttr_[parent_key] = newNewValue;

      _this.props.setAttributes(setAttr_);
    });

    _defineProperty(_assertThisInitialized(_this), "dateFormate", function (date) {
      var date_ = date.split("T")[0];
      var dateObj = new Date(date_);
      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var dateArr = monthNames[dateObj.getMonth()] + " " + dateObj.getDate() + ", " + dateObj.getFullYear();
      return wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
        tag: "span",
        value: dateArr
      });
    });

    _defineProperty(_assertThisInitialized(_this), "excerptWords", function (words, words_) {
      words_ = Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__["decodeEntities"])(words_);
      words_ = words_.replace(/<\/?[^>]+(>|$)/g, "");
      words_ = words_.split(" ");
      words_ = words_.slice(0, words);
      return words_.join(" ");
    });

    _defineProperty(_assertThisInitialized(_this), "showCateFn", function (categories) {
      var returR = [];

      if ("category" in _this.props && _this.props.category && categories.length) {
        categories.forEach(function (cate) {
          _this.props.category.forEach(function (searchCate) {
            if (cate == searchCate.id) {
              returR.push(searchCate.name);
              return;
            }
          });
        });
      }

      if (returR.length) {
        return returR.map(function (returnH) {
          return wp.element.createElement("span", null, returnH);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "showTagsFn", function (tags_) {
      var returR = [];

      if ("tags" in _this.props && _this.props.tags && tags_.length) {
        tags_.forEach(function (tag) {
          _this.props.tags.forEach(function (searchtag) {
            if (tag == searchtag.id) {
              returR.push(searchtag.name);
              return;
            }
          });
        });
      }

      if (returR.length) {
        return returR.map(function (returnH) {
          return wp.element.createElement("span", null, returnH);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "authorFn", function (author) {
      var retur = {};

      if ("authors" in _this.props) {
        _this.props.authors.map(function (authorDetail) {
          if (authorDetail.id == author) {
            retur = authorDetail;
            return;
          }
        });
      }

      return retur;
    });

    _this.state = {
      shortList: [{
        name: "Item 1"
      }, {
        name: "Item 2"
      }, {
        name: "Item 3"
      }, {
        name: "Item 4"
      }, {
        name: "Item 5"
      }]
    };
    return _this;
  }

  _createClass(Edit, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          posts = _this$props.posts,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          category = _this$props.category; // console.log("this.props", this.props);

      var heading = attributes.heading,
          author = attributes.author,
          numberOfPosts = attributes.numberOfPosts,
          thumbnail = attributes.thumbnail,
          numberOfColumn = attributes.numberOfColumn,
          date = attributes.date,
          showTag = attributes.showTag,
          showCate = attributes.showCate,
          excerpt = attributes.excerpt,
          postCategories = attributes.postCategories,
          meta_style = attributes.meta_style,
          title = attributes.title;
      var heading_ = heading[0];
      var thumbnail_ = thumbnail[0];
      var excerpt_ = excerpt[0];
      var date_ = date[0];
      var author_ = author[0];
      var meta_style_ = meta_style[0];
      var title_ = title[0];
      var showTag_ = showTag[0];
      var showCate_ = showCate[0]; // category init

      var cateGory = [{
        value: "all",
        label: "All"
      }];

      if (category && category.length) {
        category.map(function (catt) {
          cateGory.push({
            value: catt.id,
            label: catt.name
          });
        });
      } // let shortList = this.state.shortList;
      // let ShotableList = SortableContainer(() => {
      //   return (
      //     <ul>
      //       {shortList.map((item, index) => {
      //         let ShortItem = SortableElement(() => {
      //           return (
      //             <li key={index}>
      //               <h1>hello {item.name}</h1>
      //             </li>
      //           );
      //         });
      //         return <ShortItem key={index} index={index} />;
      //       })}
      //     </ul>
      //   );
      // });


      return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: "Post Layout",
        initialOpen: false
      }, wp.element.createElement("p", {
        className: "block-inside"
      }, "Block Title"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: title_.enable ? "Hide" : "Show",
        checked: title_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("title", "enable", title, e);
        }
      }), title_.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: "Font Size",
        value: title_.fontSize,
        min: 5,
        max: 50,
        onChange: function onChange(e) {
          _this2.updateObj("title", "fontSize", title, e);
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
        value: title_.color,
        onChange: function onChange(color) {
          return _this2.updateObj("title", "color", title, color);
        }
      })), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Layout")), wp.element.createElement("select", {
        value: numberOfColumn < 2 ? "list" : "grid",
        className: "zita-block-select",
        onChange: function onChange(e) {
          var value_ = e.target.value == "grid" ? 2 : 1;
          setAttributes({
            numberOfColumn: value_
          });
        }
      }, wp.element.createElement("option", {
        value: "list"
      }, "List"), wp.element.createElement("option", {
        value: "grid"
      }, "Grid")), numberOfColumn >= 2 && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Column")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        value: numberOfColumn,
        min: 2,
        max: 4,
        onChange: function onChange(e) {
          setAttributes({
            numberOfColumn: e
          });
        }
      })), wp.element.createElement("p", null, wp.element.createElement("strong", null, "No of Post Display")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        value: numberOfPosts,
        min: 1,
        max: 20,
        onChange: function onChange(e) {
          setAttributes({
            numberOfPosts: e
          });
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Left Border",
        checked: meta_style_.left_border,
        onChange: function onChange(e) {
          return _this2.updateObj("meta_style", "left_border", meta_style, e);
        }
      }), wp.element.createElement("p", {
        className: "block-inside"
      }, "Featured Image"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: thumbnail_.enable ? "Hide" : "Show",
        checked: thumbnail_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("thumbnail", "enable", thumbnail, e);
        }
      }), thumbnail_.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Border Radius")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        value: thumbnail_.borderRadius,
        min: 0,
        max: 80,
        onChange: function onChange(e) {
          return _this2.updateObj("thumbnail", "borderRadius", thumbnail, e);
        }
      }))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: "Post Meta",
        initialOpen: false
      }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Choose Category")), wp.element.createElement("div", {
        className: "zita-multiple-select"
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
        multiple: true,
        value: postCategories.length ? postCategories : ["all"],
        onChange: function onChange(choosen) {
          var chooseAll = choosen.filter(function (choose) {
            if (choose == "all") return true;
          });
          if (chooseAll.length) choosen = [];
          setAttributes({
            postCategories: choosen
          });
        },
        options: cateGory
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Author",
        checked: author_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("author", "enable", author, e);
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Date",
        checked: date_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("date", "enable", date, e);
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Categories",
        checked: showCate_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("showCate", "enable", showCate, e);
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Last Modified Date",
        checked: date_.last_modified,
        onChange: function onChange(e) {
          return _this2.updateObj("date", "last_modified", date, e);
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: "Tag",
        checked: showTag_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("showTag", "enable", showTag, e);
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
        value: "color" in meta_style_ ? meta_style_.color : "",
        onChange: function onChange(color) {
          return _this2.updateObj("meta_style", "color", meta_style, color);
        }
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: "Excerpt",
        initialOpen: false
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: excerpt_.enable ? "Hide" : "Show",
        checked: excerpt_.enable,
        onChange: function onChange(e) {
          return _this2.updateObj("excerpt", "enable", excerpt, e);
        }
      }), excerpt_.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Number of words")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        value: excerpt_.words,
        min: 1,
        max: 200,
        onChange: function onChange(e) {
          return _this2.updateObj("excerpt", "words", excerpt, e);
        }
      })), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
        value: excerpt_.color,
        onChange: function onChange(color) {
          return _this2.updateObj("excerpt", "color", excerpt, color);
        }
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
        title: "Heading",
        initialOpen: false
      }, wp.element.createElement("p", null, wp.element.createElement("strong", null, "Heading Tag")), wp.element.createElement("select", {
        value: heading_.tag,
        className: "zita-block-select",
        onChange: function onChange(e) {
          var value_ = e.target.value;
          var font_ = value_ == "h1" ? 30 : value_ == "h2" ? 25 : value_ == "h3" ? 20 : 17;

          var newHeading = _toConsumableArray(heading);

          newHeading[0]["tag"] = value_;
          newHeading[0]["fontSize"] = font_;
          setAttributes({
            heading: newHeading
          });
        }
      }, wp.element.createElement("option", {
        value: "h1"
      }, "H1"), wp.element.createElement("option", {
        value: "h2"
      }, "H2"), wp.element.createElement("option", {
        value: "h3"
      }, "H3"), wp.element.createElement("option", {
        value: "p"
      }, "P")), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Font Size")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        value: heading_.fontSize,
        min: 1,
        max: 50,
        onChange: function onChange(e) {
          return _this2.updateObj("heading", "fontSize", heading, e);
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, "Color")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
        value: heading_.color,
        onChange: function onChange(color) {
          return _this2.updateObj("heading", "color", heading, color);
        }
      }))), posts && posts.length > 0 && "getMedia_" in posts[0] ? wp.element.createElement("div", {
        className: "zita-block-post"
      }, title_.enable && wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
        className: "zita-block-post-title",
        key: "editable",
        tagName: "h1",
        placeholder: "My block title",
        value: title_.value,
        style: {
          fontSize: title_.fontSize + "px",
          color: title_.color
        },
        onChange: function onChange(e) {
          return _this2.updateObj("title", "value", title, e);
        }
      }), wp.element.createElement("div", {
        className: "column-count column-count-".concat(numberOfColumn, " ").concat(meta_style_.left_border && "left-border")
      }, posts.map(function (post) {
        var postAuthor = author_.enable && "name" in _this2.authorFn(post.author) ? _this2.authorFn(post.author).name : false;
        return wp.element.createElement("article", {
          className: "block-post-article",
          key: post.id
        }, wp.element.createElement("div", {
          className: "post-wrapper"
        }, "getMedia_" in post && post.getMedia_ && "guid" in post.getMedia_ && thumbnail_.enable && wp.element.createElement("div", {
          className: "featured-image"
        }, wp.element.createElement("img", {
          style: {
            borderRadius: thumbnail_.borderRadius + "px"
          },
          src: post.getMedia_.guid.rendered
        })), wp.element.createElement("div", {
          className: "post-content"
        }, showCate_.enable && wp.element.createElement("p", {
          className: "post-category"
        }, _this2.showCateFn(post.categories)), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
          className: "post-heading",
          tagName: heading_.tag,
          value: post.title.rendered,
          style: {
            fontSize: heading_.fontSize,
            color: heading_.color
          }
        }), wp.element.createElement("div", {
          className: "post-meta-all"
        }, postAuthor && wp.element.createElement("p", {
          style: {
            color: meta_style_.color
          },
          className: "post-author"
        }, postAuthor), date_.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("span", {
          className: "slash"
        }, "/"), wp.element.createElement("p", {
          style: {
            color: meta_style_.color
          },
          className: "post-date"
        }, _this2.dateFormate(post.date))), date_.last_modified && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("span", {
          className: "slash"
        }, "/"), wp.element.createElement("p", {
          style: {
            color: meta_style_.color
          },
          className: "post-date-last-modified"
        }, wp.element.createElement("span", null, "Modified: "), _this2.dateFormate(post.modified)))), excerpt_.enable && wp.element.createElement("p", {
          style: {
            color: excerpt_.color
          },
          className: "post-excerpt"
        }, _this2.excerptWords(excerpt_.words, post.excerpt.rendered)), showTag_.enable && wp.element.createElement("p", {
          style: {
            color: meta_style_.color
          },
          className: "post-tags"
        }, _this2.showTagsFn(post.tags)))));
      }))) : wp.element.createElement("div", null, !posts ? "No Post Found" : "Loding..."));
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]); // export default Edit;


/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select, props) {
  var attributes = props.attributes;
  var numberOfPosts = attributes.numberOfPosts,
      postCategories = attributes.postCategories;
  var query = {
    per_page: numberOfPosts
  };

  if (postCategories && postCategories.length) {
    query["categories"] = postCategories.join(",");
  }

  var _select = select("core"),
      getMedia = _select.getMedia,
      getEntityRecords = _select.getEntityRecords,
      getAuthors = _select.getAuthors;

  var getAllPost = getEntityRecords("postType", "post", query);
  var cate_ = getEntityRecords("taxonomy", "category", {
    per_page: -1
  });
  var tags_ = getEntityRecords("taxonomy", "post_tag", {
    per_page: -1
  });
  var arrayCatePost = {
    posts: true,
    category: cate_,
    tags: tags_
  };

  if (getAllPost && getAllPost.length) {
    var returnArray = [];
    getAllPost.map(function (v, index_) {
      if (v.featured_media) {
        getAllPost[index_]["getMedia_"] = getMedia(v.featured_media);
      } else {
        getAllPost[index_]["getMedia_"] = false;
      }

      returnArray.push(getAllPost[index_]);
    });
    arrayCatePost["posts"] = returnArray;
  } else if (getAllPost instanceof Array && getAllPost.length == 0) {
    arrayCatePost["posts"] = false;
  } // autohrs


  var authors = getAuthors();

  if (authors && authors.length) {
    var authors_ = [];
    authors.map(function (v) {
      authors_.push({
        id: v.id,
        name: v.name
      });
    });
    arrayCatePost["authors"] = authors_;
  }

  return arrayCatePost;
})(Edit));

/***/ }),

/***/ "./src/blocks/zita-post/editor.scss":
/*!******************************************!*\
  !*** ./src/blocks/zita-post/editor.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/zita-post/index.js":
/*!***************************************!*\
  !*** ./src/blocks/zita-post/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/zita-post/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/zita-post/edit.js");



var attrSave = {};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("zita-blocks/zita-post", {
  title: "Post",
  icon: "format-aside",
  category: "zita-category",
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var attr_ = {
      "data-align": "full"
    };
    return attr_;
  },
  keywords: ["post"],
  // attributes: attrSave,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_icon_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/icon-block */ "./src/blocks/icon-block/index.js");
/* harmony import */ var _blocks_service_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/service-section */ "./src/blocks/service-section/index.js");
/* harmony import */ var _blocks_pricing_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/pricing-table */ "./src/blocks/pricing-table/index.js");
/* harmony import */ var _blocks_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/progress-bar */ "./src/blocks/progress-bar/index.js");
/* harmony import */ var _blocks_progress_bar_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/progress-bar-pie */ "./src/blocks/progress-bar-pie/index.js");
/* harmony import */ var _blocks_zita_block_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/zita-block-slider */ "./src/blocks/zita-block-slider/index.js");
/* harmony import */ var _blocks_zita_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/zita-post */ "./src/blocks/zita-post/index.js");
/* harmony import */ var _blocks_zita_post_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/zita-post-slider */ "./src/blocks/zita-post-slider/index.js");
/* harmony import */ var _blocks_zita_post_tc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/zita-post-tc */ "./src/blocks/zita-post-tc/index.js");
 // import './blocks/test-block';










/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["element"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["htmlEntities"];

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map