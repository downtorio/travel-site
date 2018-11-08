/* jshint esversion:6 */

import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor() {
		this.siteHeader = document.getElementsByClassName('site-header')[0];
		this.headerTriggerElement = document.getElementsByClassName('large-hero__title')[0];
		this.createHeaderWaypoint();
		this.pageSections = document.getElementsByClassName('page-section');
		this.headerLinks = document.querySelectorAll('.primary-nav a');
		this.addSmoothScrolling();
		this.createPageSectionWaypoints();
	}

	addSmoothScrolling() {
		for(const link of this.headerLinks) {
			link.addEventListener('click', function() {
				event.preventDefault();

				let elementToScrollTo = link.getAttribute('href');
				let scrollTo = document.querySelector(elementToScrollTo);

				scrollTo.scrollIntoView({ 
					behavior: 'smooth',
					block: 'start' 	//aligns top of viewport to top of element
				});
			});
		}
	}

	createHeaderWaypoint() {
		let that = this;
		new Waypoint({
			element: this.headerTriggerElement,
			handler: function(direction) {	//i guess direction is part of Waypoint
				if(direction == 'down') {
					that.siteHeader.classList.add('site-header--dark');
				} else {
					that.siteHeader.classList.remove('site-header--dark');
				}
			}
		});
	}

	createPageSectionWaypoints() {
		for (const section of this.pageSections) {
			let that = this;
			new Waypoint({
				element: section,
				handler: function(direction) {
					if (direction == 'down') {
						let matchingHeaderLink = section.getAttribute('data-matching-link');
						for (const link of that.headerLinks) {
							link.classList.remove('is-current-link');
						}
						document.querySelector(matchingHeaderLink).classList.add('is-current-link');
					}
				},
				offset: '40%'
			});

			new Waypoint({
				element: section,
				handler: function(direction) {
					if (direction == 'up') {
						let matchingHeaderLink = section.getAttribute('data-matching-link');
						for (const link of that.headerLinks) {
							link.classList.remove('is-current-link');
						}
						document.querySelector(matchingHeaderLink).classList.add('is-current-link');
					}
				},
				offset: '-70%'
			});
		}
	}
}

export default StickyHeader;