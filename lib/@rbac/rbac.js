(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@rbac/rbac", [], factory);
	else if(typeof exports === 'object')
		exports["@rbac/rbac"] = factory();
	else
		root["@rbac/rbac"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
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

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validators = exports.defaultLogger = exports.underline = exports.isFunction = exports.isPromise = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var isPromise = function isPromise(value) {
  return value && Object.prototype.toString.call(value) === '[object Promise]';
};

exports.isPromise = isPromise;

var isFunction = function isFunction(value) {
  return value && Object.prototype.toString.call(value) === '[object Function]';
};

exports.isFunction = isFunction;

var underline = function underline() {
  var line = '';

  for (var i = 0; i < process.stdout.columns - 1; i++) {
    line = "".concat(line, "-");
  }

  return line;
};

exports.underline = underline;

var defaultLogger = function defaultLogger(role, operation, result) {
  var fResult = result ? "\x1B[1;32m".concat(result, "\x1B[1;34m") : "\x1B[1;31m".concat(result, "\x1B[1;34m");
  var fRole = "\x1B[1;33m".concat(role, "\x1B[1;34m");
  var fOperation = "\x1B[1;33m".concat(operation, "\x1B[1;34m");
  var rbacname = '\x1b[1;37mRBAC\x1b[1;34m';

  try {
    console.log('\x1b[33m%s\x1b[0m ', underline()); // yellow

    console.log('\x1b[1;34m%s\x1b[0m ', " ".concat(rbacname, " ROLE: [").concat(fRole, "] OPERATION: [").concat(fOperation, "] PERMISSION: [").concat(fResult, "]"));
    console.log('\x1b[33m%s\x1b[0m ', underline());
  } catch (e) {}
};

exports.defaultLogger = defaultLogger;
var validators = {
  role: function role(_role) {
    if (typeof _role !== 'string') {
      throw new TypeError('Expected first parameter to be string : role');
    }
  },
  roles: function roles(_roles) {
    if ((0, _typeof2.default)(_roles) !== 'object') {
      throw new TypeError('Expected an object as input');
    }
  },
  operation: function operation(_operation) {
    if (typeof _operation !== 'string') {
      throw new TypeError('Expected second parameter to be string : operation');
    }
  },
  foundedRole: function foundedRole(_foundedRole) {
    if (!_foundedRole) {
      throw new Error('Undefined role');
    }
  }
};
exports.validators = validators;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rbac = _interopRequireDefault(__webpack_require__(/*! ./rbac.js */ "./src/rbac.js"));

var _default = _rbac.default;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/rbac.js":
/*!*********************!*\
  !*** ./src/rbac.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectSpread5 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _helpers = __webpack_require__(/*! ./helpers */ "./src/helpers.js");

var can = function can() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    logger: _helpers.defaultLogger,
    enableLogger: true
  };
  return function (mappedRoles) {
    return function (role, operation, params) {
      return new Promise(function (resolve, reject) {
        var foundedRole = mappedRoles[role];

        _helpers.validators.role(role);

        _helpers.validators.operation(operation);

        _helpers.validators.foundedRole(foundedRole);

        var resolvePromise = function resolvePromise(role, result) {
          if (config.enableLogger) {
            config.logger(role, operation, result);
          }

          return resolve(result);
        };

        var resolveInherits = function resolveInherits(inherits) {
          return Promise.all(inherits.map(function (parent) {
            return can({
              enableLogger: false
            })(mappedRoles)(parent, operation, params);
          })).then(function (result) {
            return resolvePromise(role, result.includes(true));
          }).catch(function () {
            return resolvePromise(role, false);
          });
        };

        var resolveResult = function resolveResult(result) {
          if (!result) {
            return foundedRole.inherits ? resolveInherits(foundedRole.inherits) : resolvePromise(role, false);
          }

          return resolvePromise(role, Boolean(result));
        };

        if ((0, _helpers.isPromise)(foundedRole.can[operation])) {
          return foundedRole.can[operation].then(function (result) {
            return resolveResult(result);
          }).catch(function () {
            return resolvePromise(role, false);
          });
        }

        if ((0, _helpers.isFunction)(foundedRole.can[operation])) {
          return foundedRole.can[operation](params, function (err, result) {
            if (err) return reject(err);
            return resolveResult(result);
          });
        }

        if (!foundedRole.can[operation]) {
          if (!foundedRole.inherits) return resolvePromise(role, false);
          return resolveInherits(foundedRole.inherits);
        }

        if (foundedRole.can[operation]) return resolvePromise(role, true);
        return resolvePromise(role, false);
      });
    };
  };
};

var roleCanMap = function roleCanMap(roleCan) {
  return roleCan.reduce(function (acc, operation) {
    return typeof operation === 'string' ? (0, _objectSpread5.default)({}, acc, (0, _defineProperty2.default)({}, operation, 1)) : (0, _objectSpread5.default)({}, acc, (0, _defineProperty2.default)({}, operation.name, operation.when));
  }, {});
};

var mapRoles = function mapRoles(roles) {
  _helpers.validators.roles(roles);

  return Object.entries(roles).reduce(function (acc, role) {
    var _role = (0, _slicedToArray2.default)(role, 2),
        roleName = _role[0],
        roleValue = _role[1];

    return (0, _objectSpread5.default)({}, acc, (0, _defineProperty2.default)({}, roleName, {
      can: roleCanMap(roleValue.can),
      inherits: roleValue.inherits
    }));
  }, {});
};

var RBAC = function RBAC(config) {
  return function (roles) {
    return {
      can: can(config)(mapRoles(roles))
    };
  };
};

var _default = RBAC;
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=rbac.js.map