/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MobileMenu = __webpack_require__(1);

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mobileMenu = new _MobileMenu2.default(); /* jshint esversion: 6 */

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* jshint esversion:6 */

//import $ from 'jquery';

var MobileMenu = function () {
	function MobileMenu() {
		_classCallCheck(this, MobileMenu);

		this.siteHeader = document.getElementsByClassName('site-header')[0];
		this.menuIcon = document.getElementsByClassName('site-header__menu-icon')[0];
		this.menuContent = document.getElementsByClassName('site-header__menu-content')[0];
		this.events(); //calls events() once our Object is created
	}

	_createClass(MobileMenu, [{
		key: 'events',
		value: function events() {
			this.menuIcon.addEventListener("click", this.toggleTheMenu.bind(this));
			//when toggleTheMenu() is activated, the context of 'this' changes from our object (MobileMenu) to the element that triggered the event (menuIcon)
			//bind() forces 'this' to be equivalent to whatever value is inside its ()
		}
	}, {
		key: 'toggleTheMenu',
		value: function toggleTheMenu() {
			this.menuContent.classList.toggle('site-header__menu-content--is-visible');
			this.siteHeader.classList.toggle('site-header--is-expanded');
			this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
		}
	}]);

	return MobileMenu;
}();

exports.default = MobileMenu;

/***/ })
/******/ ]);