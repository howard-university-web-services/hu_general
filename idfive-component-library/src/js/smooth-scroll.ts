
// import * as SmoothScroll from 'smooth-scroll';
import * as SmoothScroll from 'smooth-scroll';
export function JumpTo(){

var offset = function(){if (window.innerWidth < 700) {
	return 0;
}
return -90;}

// document.querySelector('.nav-brace').addEventListener('click', function() {
//     SmoothScroll(0, 400);
// });
	var scroll = new SmoothScroll('a[href*="#"]', {

		// Selectors
		ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
		header: '[data-scroll-header]',

		// Speed & Easing
		speed: 800, // Integer. How fast to complete the scroll in milliseconds
		offset: offset, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
		easing: 'easeOut', // Easing pattern to use
		customEasing: function (time) {}, // Function. Custom easing pattern

		// Callback API
		before: function () {}, // Callback to run before scroll
		after: function () {} // Callback to run after scroll
	});}
