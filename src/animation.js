import { oneEvent } from './events';
import { addState } from './states';

/**
 * Run animation on an element.
 * Removes CSS class after animation end.
 *
 * @param {HTMLElement} elem DOM element.
 * @param {string} animation CSS class name.
 * @param {Function} [done] Animation end callback.
 */
export function animate(elem, animation, done) {
	window.requestAnimationFrame(() => {
		elem.classList.add(animation);
		afterTransitionsOrAnimations(elem, () => {
			elem.classList.remove(animation);
			if (done) {
				done();
			}
		});
	});
}

/**
 * Run animation on an element.
 * Do not remove CSS class after animation end.
 *
 * @param {HTMLElement} elem DOM element.
 * @param {string} state CSS class name.
 * @param {Function} [done] Animation end callback.
 */
export function animateToState(elem, state, done) {
	window.requestAnimationFrame(() => {
		addState(elem, state);
		if (done) {
			afterTransitionsOrAnimations(elem, done);
		}
	});
}

/**
 * Fire callback after all element’s CSS transitions finished.
 * Based on https://github.com/ai/transition-events
 *
 * @param {HTMLElement} elem DOM element.
 * @param {Function} callback Callback.
 */
export function afterTransitions(elem, callback) {
	let after = getTransitionsEndTime(elem);
	setTimeout(() => requestAnimationFrame(callback), after);
}

/**
 * Fire callback after all element’s CSS transitions or animations finished.
 *
 * @param {HTMLElement} elem DOM element.
 * @param {Function} callback Callback.
 */
export function afterTransitionsOrAnimations(elem, callback) {
	if (getComputedStyle(elem).animation) {
		oneEvent(elem, 'animationend', callback);
	}
	else {
		afterTransitions(elem, callback);
	}
}

/**
 * Return array of milliseconds for CSS value of `transition-duration` or `transition-delay`.
 *
 * @param {string} string transition-duration value.
 * @returns {Array}
 */
function parseTimes(string) {
	let times = string.split(/,\s*/);
	return times.map((value) => {
		let number = parseFloat(value);
		if (value.match(/\ds/)) {
			return number * 1000;
		}
		return number;
	});
}

/**
 * Return time (in milliseconds) when the latest transition ends.
 *
 * @param {HTMLElement} elem DOM element.
 * @returns {number}
 */
function getTransitionsEndTime(elem) {
	let styles = getComputedStyle(elem);
	let props = styles['transition-property'];
	if (!props) {
		return 0;
	}

	props = props.split(/,\s*/);
	let durations = parseTimes(styles['transition-duration']);
	let delays = parseTimes(styles['transition-delay']);

	return props.reduce((after, prop, propIdx) => {
		let duration = durations[durations.length === 1 ? 0 : propIdx];
		let delay = delays[delays.length === 1 ? 0 : propIdx];
		return after + delay + duration;
	}, 0);
}

export let _test = { parseTimes, getTransitionsEndTime };
