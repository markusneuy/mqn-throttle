define(['exports', './lib/throttle', './lib/debounce'], function (exports, _throttle, _debounce) {
  'use strict';

  /**
   * A proxy module that aggregates submodules
   * @module throttle
   * @author Markus Neuy
   * @since 15.10.2016
   */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.debounce = exports.throttle = undefined;

  var _throttle2 = _interopRequireDefault(_throttle);

  var _debounce2 = _interopRequireDefault(_debounce);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.throttle = _throttle2.default;
  exports.debounce = _debounce2.default;
  exports.default = { throttle: _throttle2.default, debounce: _debounce2.default };
});
define([], function () {});
define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = throttle;
    function throttle(eventName, eventRename) {
        var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 33;
        var dispatcher = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;

        var waiting = null;

        var listener = function listener(event) {
            event.preventDefault();
            event.stopPropagation();
            if (!waiting) {
                waiting = setTimeout(function () {
                    waiting = null;
                    dispatcher.dispatchEvent(new CustomEvent(eventRename, event));
                }, timeout);
            }
        };
        dispatcher.addEventListener(eventName, listener);

        return function () {
            dispatcher.removeEventListener(eventName, listener);
        };
    }
});
