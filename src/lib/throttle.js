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
 * @param {Object} [dispatcher=window] The DOM-element where the vent should happen
 */
export default function throttle (eventName, eventRename, timeout = 33, dispatcher = window) {        
    let waiting = null;
    let next = false;
    
    const listener = (event) => {
        if (!waiting) {
            dispatcher.dispatchEvent(new CustomEvent(eventRename, event));
            waiting = setTimeout(() => {
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



