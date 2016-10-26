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