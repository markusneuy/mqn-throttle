/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * A proxy module that aggregates submodules
	 * @module throttle
	 * @author Markus Neuy
	 * @since 15.10.2016
	 * @see debounce
	 * @see throttle
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.debounce = exports.throttle = undefined;

	var _throttle = __webpack_require__(1);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _debounce = __webpack_require__(2);

	var _debounce2 = _interopRequireDefault(_debounce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.throttle = _throttle2.default;
	exports.debounce = _debounce2.default;
	exports.default = { throttle: _throttle2.default, debounce: _debounce2.default };

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * A module to throttle events
	 * @module throttle
	 */

	/**
	 * A function to throttle subsequent events. It will fire on the first occurence of an event and then throttle further events.
	 * @param {string} eventName The name of the original event
	 * @param {string} eventRename The new name of the event
	 * @param {number} [timeout=33] A timeout to wait for no further events
	 * @param {Object} dispatcher The DOM-element where the vent should happen
	 */

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = throttle;
	function throttle(eventName, eventRename) {
	    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 33;
	    var dispatcher = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;

	    var waiting = null;
	    var next = false;

	    var listener = function listener(event) {
	        if (!waiting) {
	            dispatcher.dispatchEvent(new CustomEvent(eventRename, event));
	            waiting = setTimeout(function () {
	                if (next) {
	                    next = false;
	                    dispatcher.dispatchEvent(new CustomEvent(eventRename, event));
	                }
	            }, timeout);
	        } else {
	            next = true;
	        }
	    };
	    dispatcher.addEventListener(eventName, listener);

	    return function () {
	        dispatcher.removeEventListener(eventName, listener);
	    };
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * A module to debounce events.
	 * @module debounce
	 */

	/**
	 * A function to debounce events. If no events occur for the specified timeout the event will be dispatched.
	 * @param {string} eventName The name of the original event
	 * @param {string} eventRename The new name of the event
	 * @param {number} [timeout=33] A timeout to wait for no further events
	 * @param {Object} dispatcher The DOM-element where the vent should happen
	 */

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = debounce;
	function debounce(eventName, eventRename) {
	    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 33;
	    var dispatcher = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;

	    var waiting = null;

	    var listener = function listener(event) {
	        if (waiting) {
	            dispatcher.clearTimeout(waiting);
	        }
	        waiting = setTimeout(function () {
	            waiting = null;
	            dispatcher.dispatchEvent(new CustomEvent(eventRename, event));
	        }, timeout);
	    };

	    dispatcher.addEventListener(eventName, listener);

	    return function () {
	        dispatcher.removeEventListener(eventName, listener);
	    };
	}

/***/ }
/******/ ]);