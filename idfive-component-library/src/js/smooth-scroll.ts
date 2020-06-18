
// import * as SmoothScroll from 'smooth-scroll';
import * as SmoothScroll from 'smooth-scroll';
export function JumpTo(){

// document.querySelector('.nav-brace').addEventListener('click', function() {
//     SmoothScroll(0, 400);
// });
	var scroll = new SmoothScroll('a[href*="#"]', {

		// Selectors
		ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
		header: '[data-scroll-header]',

		// Speed & Easing
		speed: 600, // Integer. How fast to complete the scroll in milliseconds
		offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
		customEasing: function (time) {
			return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
		}, // Function. Custom easing pattern

		// Callback API
		before: function () {}, // Callback to run before scroll
		after: function () {} // Callback to run after scroll
	});}
