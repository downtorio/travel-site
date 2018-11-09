/* jshint esversion:6 */

class Modal {
	constructor() {
		this.openModalButton = document.getElementsByClassName('open-modal');
		this.modal = document.getElementsByClassName('modal')[0];
		this.closeModalButton = document.getElementsByClassName('modal__close')[0];
		this.events();
	}

	events() {
		// clicking the open modal button
		for(const btn of this.openModalButton) {
			btn.addEventListener('click', this.openModal.bind(this));
		}
		//this.openModalButton.addEventListener('click', this.openModal.bind(this));
			//remember: we're using bind to prevent 'this' from poiting to the element that triggers the event, and keep it pointed to our Modal object

		// clicking the x button
		this.closeModalButton.addEventListener('click', this.closeModal.bind(this));

		// push escape key
		document.addEventListener('keyup', this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if(e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.classList.add('modal--is-visible');
		console.log('added!');
		return false;		//prevents default behavior of scrolling up
	}

	closeModal() {
		this.modal.classList.remove('modal--is-visible');
		console.log('removed!');
		return false;
	}
}

export default Modal;