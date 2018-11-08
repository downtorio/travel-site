/* jshint esversion: 6 */

//const Person = require('./modules/Person'); 	//let's do this the ES6 way:
/*import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(`${this.name} now owes $0 in taxes.`);
	}
}

let john = new Person('John Doe', 'blue');
john.greet();

let jane = new Adult('Jane Smith', 'red');
jane.greet();
jane.payTaxes();
*/

// That shit was all hypothetical. MOVING ON!

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

let mobileMenu = new MobileMenu();
new RevealOnScroll('feature-item', '85%');
new RevealOnScroll('testimonial', '60%');
let stickyHeader = new StickyHeader();