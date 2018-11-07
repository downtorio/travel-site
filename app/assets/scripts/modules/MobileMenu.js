/* jshint esversion:6 */

//import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.siteHeader = document.getElementsByClassName('site-header')[0];
		this.menuIcon = document.getElementsByClassName('site-header__menu-icon')[0];
		this.menuContent = document.getElementsByClassName('site-header__menu-content')[0];
		this.events();	//calls events() once our Object is created
	}

	events() {
		this.menuIcon.addEventListener("click", this.toggleTheMenu.bind(this));
		//when toggleTheMenu() is activated, the context of 'this' changes from our object (MobileMenu) to the element that triggered the event (menuIcon)
		//bind() forces 'this' to be equivalent to whatever value is inside its ()
	}

	toggleTheMenu() {
		this.menuContent.classList.toggle('site-header__menu-content--is-visible');
		this.siteHeader.classList.toggle('site-header--is-expanded');
		this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
	}
}

export default MobileMenu;