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

var _throttle = require('./lib/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _debounce = require('./lib/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.throttle = _throttle2.default;
exports.debounce = _debounce2.default;
exports.default = { throttle: _throttle2.default, debounce: _debounce2.default };