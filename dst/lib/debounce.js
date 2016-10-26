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