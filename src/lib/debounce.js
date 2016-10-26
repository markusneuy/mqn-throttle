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
 * @param {Object} [dispatcher=window] The DOM-element where the vent should happen
 */
export default function debounce (eventName, eventRename, timeout=33, dispatcher = window) {
    let waiting = null;
    
    const listener = (event) => {
        if (waiting) {
            dispatcher.clearTimeout(waiting);
        }
        waiting = setTimeout(() => {
            waiting = null;
            dispatcher.dispatchEvent(new CustomEvent(eventRename, event));
        }, timeout);
    };
    
    dispatcher.addEventListener(eventName, listener);
    
    return () => {
        dispatcher.removeEventListener(eventName, listener);
    };
}


