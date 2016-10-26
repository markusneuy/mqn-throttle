'use strict';

/**
 * A proxy module that aggregates submodules
 * @module index
 * @author Markus Neuy
 * @since 15.10.2016
 * @see module:debounce
 * @see module:throttle
 */
import throttle from './lib/throttle';
import debounce from './lib/debounce';
export {throttle};
export {debounce};
export default {throttle, debounce};