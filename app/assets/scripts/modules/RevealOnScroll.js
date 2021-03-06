/* jshint esversion: 6 */

import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(els, offset) {
		this.itemsToReveal = document.getElementsByClassName(els);
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		for(const item of this.itemsToReveal) {
			item.classList.add('reveal-item');
		}
	}

	createWaypoints() {
		var that = this;	//otherwise 'this' in 'offset: this.offsetPercentage' will be pointing to the Waypoint object
		for(const item of this.itemsToReveal) {
			new Waypoint({
				//the element we want to watch for as we scroll down the page:
				element: item,
				//what to do with it when it's scrolled to:
				handler: function() {
					item.classList.add('reveal-item--is-visible');
				},
				//default is 0, which references the top of the VIEWPORT, so it's not revealed until top of element reaches top of viewport; 100% makes it so we reveal once top of element reaches bottom of viewport
				offset: that.offsetPercentage
			});
		}
	}
}

export default RevealOnScroll;