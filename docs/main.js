(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/taylormcpherson/Desktop/etc/web/taylormcpherson.github.io/src/main.ts */"zUnb");


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function NavBarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " WORK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " RESUME ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ABOUT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " WORK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " RESUME ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ABOUT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavBarComponent {
    constructor() {
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].isMobile;
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 2, vars: 2, consts: [["class", "nav-bar-container", 4, "ngIf"], ["class", "nav-bar-container-mobile", 4, "ngIf"], [1, "nav-bar-container"], ["routerLink", "/work", "routerLinkActive", "activePage", 1, "nav-item", "work"], ["routerLink", "/resume", "routerLinkActive", "activePage", 1, "nav-item", "resume"], ["routerLink", "/about", "routerLinkActive", "activePage", 1, "nav-item", "about"], [1, "nav-bar-container-mobile"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavBarComponent_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_div_1_Template, 7, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".nav-bar-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    margin: 4em;\n}\n\n*[_ngcontent-%COMP%] {\n    font-size: .92em;\n    font-weight: 600;\n    margin-bottom: 1.4em;\n    margin-top: -.4em;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: #929292;\n    margin-right: 2.4em;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {\n    color: #7F93FF;\n    opacity: 1;\n}\n\n.nav-item[_ngcontent-%COMP%]:not(:focus-visible) {\n    outline: none;\n}\n\n.activePage[_ngcontent-%COMP%] {\n    color: #4f4f4f;\n}\n\n.activePage[_ngcontent-%COMP%]:hover {\n    color: #4f4f4f !important;\n    opacity: 1 !important;\n}\n\n.activePage[_ngcontent-%COMP%]:hover::before {\n    content: none;\n}\n\n\n\n.nav-bar-container-mobile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    padding-top: 1.4em;\n    padding-bottom: 1em;\n    background-color: #5B7FFE;\n    opacity: .55;\n}\n\n.nav-bar-container-mobile[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    font-size: 1em;\n    margin-bottom: 0;\n    margin-right: 1em;\n    margin-left: 1em;\n    color: #FFFFFF;\n    font-weight: 400;\n}\n\n.nav-bar-container-mobile[_ngcontent-%COMP%]   .activePage[_ngcontent-%COMP%] {\n    font-weight: 700;\n    text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUdBLGNBQWM7O0FBRWQ7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luOiA0ZW07XG59XG5cbioge1xuICAgIGZvbnQtc2l6ZTogLjkyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjRlbTtcbiAgICBtYXJnaW4tdG9wOiAtLjRlbTtcbn1cblxuLm5hdi1pdGVtIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM5MjkyOTI7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjRlbTtcbn1cblxuLm5hdi1pdGVtOmhvdmVyIHtcbiAgICBjb2xvcjogIzdGOTNGRjtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ubmF2LWl0ZW06bm90KDpmb2N1cy12aXNpYmxlKSB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmFjdGl2ZVBhZ2Uge1xuICAgIGNvbG9yOiAjNGY0ZjRmO1xufVxuXG4uYWN0aXZlUGFnZTpob3ZlciB7XG4gICAgY29sb3I6ICM0ZjRmNGYgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmVQYWdlOmhvdmVyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IG5vbmU7XG59XG5cblxuLyotLW1vYmlsZS0tICovXG5cbi5uYXYtYmFyLWNvbnRhaW5lci1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXRvcDogMS40ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3RkZFO1xuICAgIG9wYWNpdHk6IC41NTtcbn1cblxuLm5hdi1iYXItY29udGFpbmVyLW1vYmlsZSAubmF2LWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubmF2LWJhci1jb250YWluZXItbW9iaWxlIC5hY3RpdmVQYWdlIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _about_intro_about_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-intro/about-intro.component */ "wk57");
/* harmony import */ var _about_blurbs_about_blurbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-blurbs/about-blurbs.component */ "PYks");





function AboutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about-intro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-about-blurbs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about-intro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-about-blurbs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutComponent {
    constructor() {
        if (window.innerWidth < 500) {
            this.isMobile = true;
        }
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 2, consts: [["class", "about-container", 4, "ngIf"], ["class", "about-container-mobile", 4, "ngIf"], [1, "about-container"], [1, "about-container-mobile"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AboutComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutComponent_div_1_Template, 3, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _about_intro_about_intro_component__WEBPACK_IMPORTED_MODULE_2__["AboutIntroComponent"], _about_blurbs_about_blurbs_component__WEBPACK_IMPORTED_MODULE_3__["AboutBlurbsComponent"]], styles: [".about-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 12em 2em 12em;\n\n}\n\n.about-container-mobile[_ngcontent-%COMP%] {\n  margin: 2em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7O0FBRXpCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDEyZW0gMmVtIDEyZW07XG5cbn1cblxuLmFib3V0LWNvbnRhaW5lci1tb2JpbGUge1xuICBtYXJnaW46IDJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8S1P":
/*!*****************************************!*\
  !*** ./src/app/main-pages-directory.ts ***!
  \*****************************************/
/*! exports provided: CARDS, BLURB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARDS", function() { return CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLURB", function() { return BLURB; });
const CARDS = [
    { id: 1,
        title: 'GROUP SCHEDULING',
        description: 'UI / UX Designer',
        imgUrl: 'url(./assets/img/card-1.png)',
        routerLink: '/group-scheduling',
    },
    { id: 2,
        title: 'APPRENTICESHIP LEARNING',
        description: 'UX Researcher, Writer',
        imgUrl: 'url(./assets/img/card-2.png)',
        routerLink: '/apprenticeship-learning',
    },
    { id: 3,
        title: 'ROBOT NANNYS',
        description: 'Researcher, Visual Designer',
        imgUrl: 'url(./assets/img/card-3.png)',
        routerLink: '/critical-design'
    },
    { id: 4,
        title: 'PLAYGROUND',
        description: 'Side Projects',
        imgUrl: 'url(./assets/img/card-4.png)',
        routerLink: '/side-projects',
    },
];
const BLURB = [
    { id: 1,
        title: 'Tech for Social Good',
        description: 'I get really excited thinking about radical ways technologies can transform our' +
            ' world for the better. Nothing is too crazy. One of the most influential ' +
            'forces of socially-grounded tech in my life is the Tech4Good Lab, where I’m a Fellow' +
            ' and work as a UX Researcher and Designer.',
        imgUrl: '💻',
        imgAlt: 'computer',
    },
    { id: 2,
        title: 'Wicked Problems in Design',
        description: 'How do we design a world that allows every child access to ' +
            'high-quality education? What do communities look like that center systems of care' +
            ' rather than policing? These are some of many wicked problems I could think about for days on end.' +
            ' I don’t have the answers yet, but chatting about it together is a great start. ',
        imgUrl: '⁉️️',
        imgAlt: '?!',
    },
    { id: 3,
        title: 'Slow Fashion & Sustainability ',
        description: 'When I was little I wanted to be a fashion designer.' +
            '  My passions have aligned elsewhere since then, but Im now fascinated by the' +
            ' fashion industrys impact on our climate and social systems. To push against some ' +
            'of its negative impacts I recently started an online-thrift shop as a passion' +
            ' project.',
        imgUrl: '♻️',
        imgAlt: 'recycle',
    },
    {
        id: 4,
        title: 'Photography and Empowerment',
        description: '',
        imgUrl: '📷',
        imgAlt: 'camera',
    },
    { id: 5,
        title: 'Hawai‘i',
        description: 'Hawai‘i is home for me, and I love talking about this special place. ' +
            'Bonus points if you mention Sovereignty and the Hawaiian Kingdom.',
        imgUrl: '🏝️',
        imgAlt: 'beach',
    },
    { id: 6,
        title: 'Dogs, Coffee & Croissants',
        description: 'Preferably in that order. ' +
            'When I’m not learning or working, I’m going on long, romantic walks on the beach' +
            ' with my dog Dolly, ideally sipping Cat & Cloud Coffee with a croissant in hand.',
        imgUrl: '🐶',
        imgAlt: 'dog',
    },
];


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Hi24":
/*!*********************************************************!*\
  !*** ./src/app/work/work-cards/work-cards.component.ts ***!
  \*********************************************************/
/*! exports provided: WorkCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkCardsComponent", function() { return WorkCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_pages_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main-pages-directory */ "8S1P");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function (a0) { return { backgroundImage: a0 }; };
function WorkCardsComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", card_r3.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, card_r3.imgUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r3.description);
} }
function WorkCardsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SELECTED WORKS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkCardsComponent_div_0_div_4_Template, 6, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cards);
} }
function WorkCardsComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", card_r5.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, card_r5.imgUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r5.description);
} }
function WorkCardsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SELECTED WORKS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkCardsComponent_div_1_div_4_Template, 6, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cards);
} }
class WorkCardsComponent {
    constructor() {
        this.cards = _main_pages_directory__WEBPACK_IMPORTED_MODULE_1__["CARDS"];
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].isMobile;
    }
    ngOnInit() {
    }
}
WorkCardsComponent.ɵfac = function WorkCardsComponent_Factory(t) { return new (t || WorkCardsComponent)(); };
WorkCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkCardsComponent, selectors: [["app-work-cards"]], decls: 2, vars: 2, consts: [["class", "full-container", 4, "ngIf"], ["class", "full-container-mobile", 4, "ngIf"], [1, "full-container"], [1, "selection-title"], [1, "cards-container"], [4, "ngFor", "ngForOf"], [1, "work-cards-container", 3, "ngStyle", "routerLink"], [1, "card-title", "card"], [1, "card-description", "card"], [1, "full-container-mobile"]], template: function WorkCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkCardsComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkCardsComponent_div_1_Template, 5, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n*[_ngcontent-%COMP%]:focus {outline:0 !important;}\n\n.full-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.selection-title[_ngcontent-%COMP%] {\n  font-size: .8em;\n  font-weight: 600;\n  color: #929292;\n  margin-top: 6em;\n}\n\n.cards-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: -2em;\n}\n\n.work-cards-container[_ngcontent-%COMP%] {\n  width: 30vw;\n  height: 20vw;\n  background-position: center;\n  background-size: 30vw;\n  opacity: .8;\n  box-shadow: 0 6px 48px #CDCDCD;\n  margin: 3em 0 1em 0;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  color: #FFFFFF;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n  margin: 0 1em.6em 1em;\n  visibility: hidden;\n  font-weight: 600;\n  text-align: center;\n  display: flex;\n  align-self: center;\n}\n\n.card-description[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  font-weight: 500;\n  visibility: hidden;\n  display: flex;\n  align-self: center;\n  text-align: center;\n}\n\n.work-cards-container[_ngcontent-%COMP%]:hover {\n  background:\n    center\n    rgba(110, 110, 110, .9);\n  background-size: 30vw;\n  background-blend-mode: multiply;\n  cursor: pointer;\n}\n\n.work-cards-container[_ngcontent-%COMP%]:hover   .card[_ngcontent-%COMP%]{\n  visibility: visible;\n}\n\n\n\n.full-container-mobile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.full-container-mobile[_ngcontent-%COMP%]   .selection-title[_ngcontent-%COMP%] {\n  font-size: .7em;\n  font-weight: 600;\n  color: #929292;\n  margin-top: 2em;\n}\n\n.full-container-mobile[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: -2em;\n}\n\n.full-container-mobile[_ngcontent-%COMP%]   .work-cards-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 12em;\n  background-position: center;\n  background-size: 100%;\n  opacity: .8;\n  box-shadow: 0 6px 48px #CDCDCD;\n  margin: 3.4em 0 0 0;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLWNhcmRzL3dvcmstY2FyZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxTQUFTLG9CQUFvQixDQUFDOztBQUU5QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFOzsyQkFFeUI7RUFDekIscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvd29yay93b3JrLWNhcmRzL3dvcmstY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbio6Zm9jdXMge291dGxpbmU6MCAhaW1wb3J0YW50O31cblxuLmZ1bGwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNlbGVjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM5MjkyOTI7XG4gIG1hcmdpbi10b3A6IDZlbTtcbn1cblxuLmNhcmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAtMmVtO1xufVxuXG4ud29yay1jYXJkcy1jb250YWluZXIge1xuICB3aWR0aDogMzB2dztcbiAgaGVpZ2h0OiAyMHZ3O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMzB2dztcbiAgb3BhY2l0eTogLjg7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDQ4cHggI0NEQ0RDRDtcbiAgbWFyZ2luOiAzZW0gMCAxZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjZlbTtcbiAgbWFyZ2luOiAwIDFlbS42ZW0gMWVtO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uY2FyZC1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53b3JrLWNhcmRzLWNvbnRhaW5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6XG4gICAgY2VudGVyXG4gICAgcmdiYSgxMTAsIDExMCwgMTEwLCAuOSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMzB2dztcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud29yay1jYXJkcy1jb250YWluZXI6aG92ZXIgLmNhcmR7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8qLS0tLS1tb2JpbGUtLS0tLSovXG5cbi5mdWxsLWNvbnRhaW5lci1tb2JpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZnVsbC1jb250YWluZXItbW9iaWxlIC5zZWxlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IC43ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOTI5MjkyO1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG5cbi5mdWxsLWNvbnRhaW5lci1tb2JpbGUgLmNhcmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAtMmVtO1xufVxuXG4uZnVsbC1jb250YWluZXItbW9iaWxlIC53b3JrLWNhcmRzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyZW07XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBvcGFjaXR5OiAuODtcbiAgYm94LXNoYWRvdzogMCA2cHggNDhweCAjQ0RDRENEO1xuICBtYXJnaW46IDMuNGVtIDAgMCAwO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work-cards',
                templateUrl: './work-cards.component.html',
                styleUrls: ['./work-cards.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Hsom":
/*!*****************************************************************************************!*\
  !*** ./src/app/case-study/apprenticeship-learning/apprenticeship-learning.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ApprenticeshipLearningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprenticeshipLearningComponent", function() { return ApprenticeshipLearningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _case_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../case-directory */ "KBXg");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _case_footer_case_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../case-footer/case-footer.component */ "nI2n");






function ApprenticeshipLearningComponent_div_0_section_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r4.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ApprenticeshipLearningComponent_div_0_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApprenticeshipLearningComponent_div_0_section_2_div_1_Template, 7, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r4.id == 3);
} }
function ApprenticeshipLearningComponent_div_0_section_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Our research is broadly an attempt to think about how we can break this cycle. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.sectionDescrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r7.sectionImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ApprenticeshipLearningComponent_div_0_section_3_div_2_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r7.sectionImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ApprenticeshipLearningComponent_div_0_section_3_div_2_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r7.sectionImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ApprenticeshipLearningComponent_div_0_section_3_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApprenticeshipLearningComponent_div_0_section_3_div_2_div_3_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApprenticeshipLearningComponent_div_0_section_3_div_2_div_3_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r7.sectionTitle == "USABILITY TESTING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r7.sectionTitle != "USABILITY TESTING");
} }
function ApprenticeshipLearningComponent_div_0_section_3_div_2_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r19.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r19.sectionDescrip);
} }
function ApprenticeshipLearningComponent_div_0_section_3_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApprenticeshipLearningComponent_div_0_section_3_div_2_div_6_div_1_Template, 5, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.inters);
} }
function ApprenticeshipLearningComponent_div_0_section_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApprenticeshipLearningComponent_div_0_section_3_div_2_div_3_Template, 3, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ApprenticeshipLearningComponent_div_0_section_3_div_2_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r7.sectionImg != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.sectionDescrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r7.sectionTitle == "USER INTERVIEWS");
} }
function ApprenticeshipLearningComponent_div_0_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApprenticeshipLearningComponent_div_0_section_3_div_1_Template, 9, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApprenticeshipLearningComponent_div_0_section_3_div_2_Template, 7, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r7.sectionTitle == "PROBLEM SPACE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r7.sectionTitle != "PROBLEM SPACE");
} }
function ApprenticeshipLearningComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApprenticeshipLearningComponent_div_0_section_2_Template, 2, 1, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApprenticeshipLearningComponent_div_0_section_3_Template, 3, 2, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-case-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.intro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.causeway);
} }
function ApprenticeshipLearningComponent_div_1_section_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r23.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r23.description);
} }
function ApprenticeshipLearningComponent_div_1_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApprenticeshipLearningComponent_div_1_section_3_div_1_Template, 7, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r23.id == 3);
} }
function ApprenticeshipLearningComponent_div_1_section_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Our research is broadly an attempt to think about how we can break this cycle. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r26.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r26.sectionDescrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r26.sectionImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ApprenticeshipLearningComponent_div_1_section_4_div_2_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApprenticeshipLearningComponent_div_1_section_4_div_2_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r26.sectionImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ApprenticeshipLearningComponent_div_1_section_4_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApprenticeshipLearningComponent_div_1_section_4_div_2_div_3_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApprenticeshipLearningComponent_div_1_section_4_div_2_div_3_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r26.sectionTitle == "OVERVIEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r26.sectionTitle != "OVERVIEW");
} }
function ApprenticeshipLearningComponent_div_1_section_4_div_2_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r37.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r37.sectionDescrip);
} }
function ApprenticeshipLearningComponent_div_1_section_4_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApprenticeshipLearningComponent_div_1_section_4_div_2_div_6_div_1_Template, 5, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.inters);
} }
function ApprenticeshipLearningComponent_div_1_section_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApprenticeshipLearningComponent_div_1_section_4_div_2_div_3_Template, 3, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ApprenticeshipLearningComponent_div_1_section_4_div_2_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r26.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r26.sectionImg != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r26.sectionDescrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r26.sectionTitle == "USER INTERVIEWS");
} }
function ApprenticeshipLearningComponent_div_1_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApprenticeshipLearningComponent_div_1_section_4_div_1_Template, 9, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApprenticeshipLearningComponent_div_1_section_4_div_2_Template, 7, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r26.sectionTitle == "PROBLEM SPACE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r26.sectionTitle != "PROBLEM SPACE");
} }
function ApprenticeshipLearningComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApprenticeshipLearningComponent_div_1_section_3_Template, 2, 1, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApprenticeshipLearningComponent_div_1_section_4_Template, 3, 2, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-case-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.intro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.causeway);
} }
class ApprenticeshipLearningComponent {
    constructor() {
        this.intro = _case_directory__WEBPACK_IMPORTED_MODULE_1__["INTROS"];
        this.causeway = _case_directory__WEBPACK_IMPORTED_MODULE_1__["CAUSEWAY"];
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].isMobile;
        this.inters = _case_directory__WEBPACK_IMPORTED_MODULE_1__["INTERVIEWS"];
    }
    ngOnInit() {
    }
}
ApprenticeshipLearningComponent.ɵfac = function ApprenticeshipLearningComponent_Factory(t) { return new (t || ApprenticeshipLearningComponent)(); };
ApprenticeshipLearningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApprenticeshipLearningComponent, selectors: [["app-apprenticeship-learning"]], decls: 2, vars: 2, consts: [["class", "outer-container", 4, "ngIf"], ["class", "mobile", 4, "ngIf"], [1, "outer-container"], [1, "main-container"], ["class", "intro", 4, "ngFor", "ngForOf"], ["class", "overview", 4, "ngFor", "ngForOf"], [1, "intro"], [4, "ngIf"], [1, "page-title"], [1, "description"], [1, "intro-img"], [1, "intro", 3, "src"], [1, "overview"], ["class", "word-section problem", 4, "ngIf"], ["class", "word-section", 4, "ngIf"], [1, "word-section", "problem"], [1, "title"], [1, "section-descrip"], [1, "section-img"], ["width", "50%", 3, "src"], [1, "word-section"], ["class", "section-img", 4, "ngIf"], ["width", "50%", 1, "usability", 3, "src"], ["width", "100%", 3, "src"], ["class", "reflection-section", 4, "ngFor", "ngForOf"], [1, "reflection-section"], [1, "r-title"], [1, "r-descrip"], [1, "mobile"], [1, "mobile-outer-container"], ["src", "./assets/img/causeway-intro-mobile.png", "width", "100%", 1, "intro"], ["src", "./assets/img/causeway-overview-mobile.png", "width", "70%"]], template: function ApprenticeshipLearningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ApprenticeshipLearningComponent_div_0_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApprenticeshipLearningComponent_div_1_Template, 6, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _case_footer_case_footer_component__WEBPACK_IMPORTED_MODULE_4__["CaseFooterComponent"]], styles: [".outer-container[_ngcontent-%COMP%] {\n  margin: -2em 8em 4em 8em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main-container[_ngcontent-%COMP%] {\n  margin: 0 8em 0em 8em;\n  font-size: 1.1em;\n  color: #4f4f4f;\n  font-weight: 300;\n  line-height: 1.8em;\n\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n  line-height: 2em;\n  font-weight: 600;\n  text-align: center;\n  color: #7F93FF;\n}\n.description[_ngcontent-%COMP%] {\n  text-align: left;\n  font-style: italic;\n  font-size: 1.2em;\n  margin: 0 1em 2em 1em;\n\n}\n.intro-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n  \n  margin-bottom: 4em;\n}\nimg.intro[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.word-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 1em 0 6em 0;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: 600;\n  margin-bottom: 1.4em;\n  \n}\n.section-img[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n.section-img[_ngcontent-%COMP%]   .usability[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.problem[_ngcontent-%COMP%]   .section-descrip[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n.problem[_ngcontent-%COMP%]   .section-img[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.reflections[_ngcontent-%COMP%]   .section-descrip[_ngcontent-%COMP%] {\n  margin-bottom: -4em;\n}\n.r-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 2em;\n  margin-bottom: .5em;\n}\n\n.mobile[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mobile-outer-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 2em;\n}\n.mobile[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  font-size: 1em;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n.mobile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  text-align: left;\n  display: flex;\n  line-height: 1.5em;\n}\n.mobile[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: -1em;\n  margin-bottom: -1em;\n  height: 180px;\n}\n.mobile[_ngcontent-%COMP%]   .overview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: -.5em;\n}\n.mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: center;\n  justify-content: center;\n  margin-bottom: 0;\n}\n.mobile[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin: 0 0 1em 0;\n}\n.mobile[_ngcontent-%COMP%]   .word-section[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]  {\n  margin-bottom: 3em;\n}\n.mobile[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n  font-size: 1em;\n}\n.mobile[_ngcontent-%COMP%]   .process-title[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  margin-top: 0;\n}\n.mobile[_ngcontent-%COMP%]   .research[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .protos[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .final-design\n.section-descrip[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .research[_ngcontent-%COMP%]   .pimg[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .pdescrip[_ngcontent-%COMP%]  {\n  margin-bottom: 0;\n}\n.mobile[_ngcontent-%COMP%]   .proto-title[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n.mobile[_ngcontent-%COMP%]   .final-design[_ngcontent-%COMP%]   .word-section[_ngcontent-%COMP%] {\n   margin-bottom: 1em;\n }\n.mobile[_ngcontent-%COMP%]   .reflections[_ngcontent-%COMP%]   .section-descrip[_ngcontent-%COMP%] {\n  margin-bottom: -2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzZS1zdHVkeS9hcHByZW50aWNlc2hpcC1sZWFybmluZy9hcHByZW50aWNlc2hpcC1sZWFybmluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkI7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCOztBQUVwQjtBQUNBLHNCQUFzQjtBQUN0QjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7O0FBRXZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBSUEsbUJBQW1CO0FBQ25CO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVDO0dBQ0Usa0JBQWtCO0NBQ3BCO0FBRUQ7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jYXNlLXN0dWR5L2FwcHJlbnRpY2VzaGlwLWxlYXJuaW5nL2FwcHJlbnRpY2VzaGlwLWxlYXJuaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS13ZWItLS0tLS0tLS0qL1xuLyotLS0tcGFnZSB3aWRlLS0tKi9cbi5vdXRlci1jb250YWluZXIge1xuICBtYXJnaW46IC0yZW0gOGVtIDRlbSA4ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIDhlbSAwZW0gOGVtO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuXG59XG4vKi0tLS0tLWludHJvLS0tLS0tLS0qL1xuaDIge1xuICBmb250LXNpemU6IDEuNmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjN0Y5M0ZGO1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW46IDAgMWVtIDJlbSAxZW07XG5cbn1cbi5pbnRyby1pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAvKm1hcmdpbjowIC04ZW0gNGVtIC04ZW07Ki9cbiAgbWFyZ2luLWJvdHRvbTogNGVtO1xufVxuaW1nLmludHJvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4vKi0tLS0tb3ZlcnZpZXctLS0tKi9cbi53b3JkLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDFlbSAwIDZlbSAwO1xufVxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMS40ZW07XG4gIC8qY29sb3I6ICM4MjgyODI7Ki9cbn1cblxuLnNlY3Rpb24taW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG4uc2VjdGlvbi1pbWcgLnVzYWJpbGl0eSB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4ucHJvYmxlbSAuc2VjdGlvbi1kZXNjcmlwIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4ucHJvYmxlbSAuc2VjdGlvbi1pbWcge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi8qLS0taW50ZXJ2aWV3IHN1YnNlY3Rpb25zLS0qL1xuLnJlZmxlY3Rpb25zIC5zZWN0aW9uLWRlc2NyaXAge1xuICBtYXJnaW4tYm90dG9tOiAtNGVtO1xufVxuLnItdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IC41ZW07XG59XG5cblxuXG4vKi0tLS0tbW9iaWxlLS0tLS0qL1xuLm1vYmlsZSBib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb2JpbGUtb3V0ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMmVtO1xufVxuXG4ubW9iaWxlIC5tYWluLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDA7XG59XG5cbi5tb2JpbGUgaDIge1xuICBmb250LXNpemU6IDEuNGVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG4ubW9iaWxlIC5pbnRybyBpbWcge1xuICBtYXJnaW4tbGVmdDogLTFlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTFlbTtcbiAgaGVpZ2h0OiAxODBweDtcbn1cblxuLm1vYmlsZSAub3ZlcnZpZXcgaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogLS41ZW07XG59XG5cbi5tb2JpbGUgaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm1vYmlsZSAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luOiAwIDAgMWVtIDA7XG59XG5cbi5tb2JpbGUgLndvcmQtc2VjdGlvbiwgLm1vYmlsZSAucHJvY2VzcywgLm1vYmlsZSB2aWRlbyAge1xuICBtYXJnaW4tYm90dG9tOiAzZW07XG59XG5cbi5tb2JpbGUgLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLm1vYmlsZSAucHJvY2Vzcy10aXRsZSB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubW9iaWxlIC5yZXNlYXJjaCBpbWcsIC5tb2JpbGUgLnByb3RvcywgLm1vYmlsZSAuZmluYWwtZGVzaWduXG4uc2VjdGlvbi1kZXNjcmlwLCAubW9iaWxlIC5yZXNlYXJjaCAucGltZywgLm1vYmlsZSAucGRlc2NyaXAgIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm1vYmlsZSAucHJvdG8tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG5cbiAubW9iaWxlIC5maW5hbC1kZXNpZ24gLndvcmQtc2VjdGlvbiB7XG4gICBtYXJnaW4tYm90dG9tOiAxZW07XG4gfVxuXG4ubW9iaWxlIC5yZWZsZWN0aW9ucyAuc2VjdGlvbi1kZXNjcmlwIHtcbiAgbWFyZ2luLWJvdHRvbTogLTJlbTtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApprenticeshipLearningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-apprenticeship-learning',
                templateUrl: './apprenticeship-learning.component.html',
                styleUrls: ['./apprenticeship-learning.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JAMj":
/*!*********************************************************!*\
  !*** ./src/app/work/work-intro/work-intro.component.ts ***!
  \*********************************************************/
/*! exports provided: WorkIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkIntroComponent", function() { return WorkIntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function WorkIntroComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Taylor McPherson");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " is a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Front End Engineer and User Advocate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " who believes in leveraging technology to create a more just world. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorkIntroComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Taylor McPherson");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " is a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Front End Engineer and User Advocate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " who believes in leveraging technology to create a more just world. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WorkIntroComponent {
    constructor() {
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].isMobile;
    }
    ngOnInit() {
    }
}
WorkIntroComponent.ɵfac = function WorkIntroComponent_Factory(t) { return new (t || WorkIntroComponent)(); };
WorkIntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkIntroComponent, selectors: [["app-work-intro"]], decls: 2, vars: 2, consts: [["class", "work-intro-container", 4, "ngIf"], [1, "work-intro-container"], [1, "intro-container"], ["src", "./assets/img/hi.jpg", "width", "140vw"], [1, "myName", "highlight"], [1, "myTitle", "highlight"], [1, "mobile"]], template: function WorkIntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkIntroComponent_div_0_Template, 10, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkIntroComponent_div_1_Template, 9, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n    font-weight: 300;\n    color: #828282;\n    cursor: default;\n}\n\n.work-intro-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n\n.intro-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n    width: 76%;\n    margin-left: 1em;\n}\n\n.highlight[_ngcontent-%COMP%] {\n    color: #7F93FF;\n    font-weight: 600;\n}\n\nimg[_ngcontent-%COMP%] {\n    border-radius: 20px;\n    box-shadow: 0 2px 20px #CDCDCD;\n    transition: all .35s ease-in-out;\n}\n\nimg[_ngcontent-%COMP%]:hover {\n    transform: scale(1.15);\n}\n\n\n\nh2.mobile[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n    width: 100%;\n    margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLWludHJvL3dvcmstaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUdBLHVDQUF1Qzs7QUFFdkM7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC93b3JrL3dvcmstaW50cm8vd29yay1pbnRyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi53b3JrLWludHJvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5pbnRyby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIHdpZHRoOiA3NiU7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLmhpZ2hsaWdodCB7XG4gICAgY29sb3I6ICM3RjkzRkY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggI0NEQ0RDRDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjM1cyBlYXNlLWluLW91dDtcbn1cblxuaW1nOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xufVxuXG5cbi8qLS0tLS0tLS0tbW9iaWxlIHN0eWxlcy0tLS0tLS0tLS0tLS0tKi9cblxuaDIubW9iaWxlIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkIntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work-intro',
                templateUrl: './work-intro.component.html',
                styleUrls: ['./work-intro.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KBXg":
/*!***********************************!*\
  !*** ./src/app/case-directory.ts ***!
  \***********************************/
/*! exports provided: INTROS, CRIT, CRITPROCESS, CRITFINAL, CRITREFLECT, CRITREFLECTSECTIONS, TIMELY, TIMELYPROCESS, TIMELYFINAL, TIMELYREFLECT, TIMELYREFLECTSECTIONS, CAUSEWAY, INTERVIEWS, PLAYGROUND */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTROS", function() { return INTROS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRIT", function() { return CRIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRITPROCESS", function() { return CRITPROCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRITFINAL", function() { return CRITFINAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRITREFLECT", function() { return CRITREFLECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRITREFLECTSECTIONS", function() { return CRITREFLECTSECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMELY", function() { return TIMELY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMELYPROCESS", function() { return TIMELYPROCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMELYFINAL", function() { return TIMELYFINAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMELYREFLECT", function() { return TIMELYREFLECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMELYREFLECTSECTIONS", function() { return TIMELYREFLECTSECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAUSEWAY", function() { return CAUSEWAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERVIEWS", function() { return INTERVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYGROUND", function() { return PLAYGROUND; });
/*-----ALL CASE STUDIES, INTROS-------*/
const INTROS = [
    {
        id: 1,
        title: 'Robot Nannys for Sheltering in Place',
        description: 'How might we design tools to help working parents manage their work' +
            ' vs. home lives while they shelter in place during the COVID-19 Pandemic?',
        imgUrl: './assets/img/frank-intro.png',
    },
    {
        id: 2,
        title: 'Group Scheduling App',
        description: 'How can groups of people digitally schedule meeting times in a way that ' +
            'is easy, honest and time-efficient?',
        imgUrl: './assets/img/timely-hifi.png',
    },
    {
        id: 3,
        title: 'Digital Apprenticeship Learning Research',
        description: 'How might we rethink and design socio-technical systems that expand access to apprenticeship ' +
            'learning in computer science?',
        imgUrl: './assets/img/causeway-intro.png',
    },
    {
        id: 4,
        title: 'Playground',
        description: 'A collection of personal projects that span from visual design to web development.',
        imgUrl: '',
    }
];
/*----CRITICAL DESIGN DATA-----*/
/*----main sections---*/
const CRIT = [
    {
        sectionTitle: 'OVERVIEW',
        sectionImg: './assets/img/crit-overview.png',
        sectionDescrip: 'This design exercise was the final project in a Computational Media course I took at UC ' +
            'Santa Cruz. We worked on it in the Spring of 2020, just as shutdowns were beginning to take place across ' +
            'the country. As a group we felt overwhelmed by the state of the world, and wanted to approach this project ' +
            'in a playful, provocative, and imaginative way to combat some of it’s inherent heaviness. For this reason,' +
            ' we decided to approach our problem space through Critical Design, a sub-space in Design Thinking that' +
            ' doesn’t necessarily yield concrete solutions, but rather provocative designs that spark broad, critical ' +
            'discussions around complex social issues.',
    },
    {
        sectionTitle: 'PROBLEM SPACE',
        sectionImg: '',
        sectionDescrip: 'Many towns around the country have closed schools, parks, offices and so much more due to the' +
            ' COVID-19 Global Pandemic. For many working parents, this means they are not only managing a shift to' +
            ' remote work, but also having to provide childcare and homeschooling all at the same time.',
    },
    {
        sectionTitle: 'DESIGN PROCESS',
        sectionImg: './assets/img/crit-process.png',
        sectionDescrip: 'We followed Stanford’s School of Design’s 5-Step approach (shown above) in our design process.',
    }
];
/*----design process---*/
const CRITPROCESS = [
    {
        title: 'Empathize ',
        subtitle: ' | User Research',
        description: 'Each team member interviewed a working parent to help us further understand their needs.' +
            ' We asked questions about their day-to-day lives, how their work and home lives have changed through' +
            ' COVID, and most importantly, how they are feeling about all of it. We found that all of our users ' +
            'expressed a shared concern with how to manage their time while working remotely and also caring for ' +
            'their children.  Some of the key factors that were holding extra stress for our users were their parental' +
            ' duties, relationships with their partners, and a lack of time for themselves. ',
        img: '',
    },
    {
        title: 'Define ',
        subtitle: ' | Narrowing Scope',
        description: 'Based on our user-interviews, it was clear that our users needed a toolset to help them' +
            ' better manage the many tasks that come with being both a worker and a parent. To further narrow our' +
            ' problem-space, we decided to focus specifically on child-care and the challenges that come with it ' +
            'for working parents.',
        img: '',
    },
    {
        title: 'Ideate ',
        subtitle: ' | All Ideas Are Worthy',
        description: 'As a group, we approached our ideation phase with a “yes and” mindset. We knew that ' +
            'we would find our best idea when we accepted all as worthy, no matter how whacky. We practiced quick' +
            ' brainstorming so as not to get stuck or settled too early. Ultimately, we decided to explore the idea' +
            ' of a Robot Nanny that could minimize some of the childcare workload and stress for working parents.',
        img: '',
    },
    {
        title: 'Prototype ',
        subtitle: ' | Sketches, Wireframes & Lo-fidelity Designs',
        description: 'We first sketched our Robot Nanny on paper, and then created digital versions of them on Figma. ' +
            'We also started creating Lo-Fi mockups of a corresponding tablet app for the Robot.',
        img: './assets/img/crit-proto.png',
    },
    {
        title: 'Test ',
        subtitle: ' | What Works, What Doesn’t?',
        description: 'During this stage, we ran informal interviews with target users to get feedback on our designs.' +
            ' Because this was a critical design exercise, we were most concerned with big-picture questions. We wanted to' +
            ' know if this design would have a direct impact on our users’ lives, if it could alleviate stress, and also' +
            ' if there were any unintended impacts of it. One user expressed concern that their child might not immediately' +
            ' like or trust a Robot to take care of them. All users expressed unanimous excitement for the general idea of' +
            ' a Robot Nanny. ',
        img: '',
    },
];
/*----final design, reflections---*/
const CRITFINAL = [
    {
        sectionTitle: 'FINAL DESIGN',
        sectionImg: './assets/img/crit-final.png',
        sectionDescrip: 'With all of our research, prototyping, and feedback in mind, we created Frank, ' +
            'The Robot Nanny. We used Figma to finalize our illustrations, animations and ultimately create our video.'
    }
];
const CRITREFLECT = [
    {
        sectionTitle: 'REFLECTIONS',
        sectionImg: '',
        sectionDescrip: 'While I’m proud of our final design, I’m left with some questions and concerns' +
            ' that must be addressed. Particularly, I want to focus on some implications of our design regarding accessibility' +
            ' and privacy, as noted below.'
    }
];
/*----reflections subsections--*/
const CRITREFLECTSECTIONS = [
    {
        sectionTitle: 'Cost and Accesibility. Who is Frank For?',
        sectionImg: '',
        sectionDescrip: 'Realistically, how might it be possible for Frank to be affordable and still include' +
            ' all its high-tech features? This should not be a luxury only available to the rich. I acknowledge' +
            ' that in its current state, the families that need our design the most may not be the ones who can afford it.' +
            ' This is a major concern.'
    },
    {
        sectionTitle: 'Privacy Concerns',
        sectionImg: '',
        sectionDescrip: 'I also question privacy issues Frank may raise. Could a personal robot intensify the dangers ' +
            'of the surveillance-state that are already hyper-present in our society?'
    },
    {
        sectionTitle: 'Final Thoughts',
        sectionImg: '',
        sectionDescrip: 'With all of this in mind, this was a very valuable exercise in critical design that stretched ' +
            'me to think about how to imagine futures rather than just solve for them. I hope this critical and playful ' +
            'design can serve as an initial exploration in the intersections of sheltering-in-place, work, and child-care.'
    },
];
/*-----TIMELY DATA-----*/
const TIMELY = [
    {
        sectionTitle: 'OVERVIEW',
        sectionImg: './assets/img/timely-overview.png',
        sectionDescrip: 'This design project served as part of my yearlong fellowship in the Tech4Good Lab at UC ' +
            'Santa Cruz. Our primary goal was to create a scheduling app that could better serve our lab and greater ' +
            'University community.',
    },
    {
        sectionTitle: 'PROBLEM SPACE',
        sectionImg: '',
        sectionDescrip: 'The Tech4Good lab is a research lab at UC Santa Cruz led by Professor David Lee. It has ' +
            'over 50 members, and it is growing fast. Research teams typically consist of 1 graduate student and 3-7 ' +
            'undergraduates. Some students may be involved in multiple teams. Each quarter, all teams must find meeting' +
            ' times in the midst of heavy course loads and various other commitments the members might have. All teams ' +
            'must not only find common times to meet together, but also with the Professor who leads the lab. ',
    },
    {
        sectionTitle: 'CURRENT APPROACH',
        sectionImg: './assets/img/timely-current.png',
        sectionDescrip: 'The lab currently uses Omnipointment, a website that helps groups schedule times to meet. ' +
            'Omnipointment sets the initial time grid as completely busy, and users must indicate when they are free. ' +
            'Currently in the Lab, students input their availability into the time grid, but only the Professor finds the meeting times.' +
            ' This leaves a lot of time-consuming work for the Professor to do on their own.',
    },
    {
        sectionTitle: 'DESIGN PROCESS',
        sectionImg: './assets/img/timely-process.png',
        sectionDescrip: 'Because our team had an entire Summer to focus on this project, we were able to deep-dive ' +
            'into the design process. We did not take a linear approach, and instead embraced iterative loops of user' +
            ' and market research, prototyping, and feedback. For the sake of space, I will be covering the primary takeaways' +
            ' from each part of the process below.'
    },
];
/*----design process---*/
const TIMELYPROCESS = [
    {
        title: 'Research',
        subtitle: ' | Empathize with Users, Understand Scope',
        description: 'To begin our user research, we needed to understand the needs and experiences of the two primary ' +
            'stakeholders in this project: the lead professor and the lab members (students). We conducted user interviews and surveys' +
            ' to get a deeper understanding of their experiences with the current process, their needs, and any exiting ' +
            'pain points they might have.',
        img: './assets/img/timely-research.png',
    },
    {
        title: 'Prototype',
        subtitle: ' | Wireframes and Lo-fidelity Designs',
        description: 'Above is one of our team’s more detailed, initial set of wireframes. We mapped out two user flows: ' +
            'the Creator flow (target user = professor) and the Participant flow (target users = lab members). ' +
            'Based on our user insight, we wanted each user flow to be quick and easy. We added a feature in the Participant ' +
            'flow for users to input their courses which would then' +
            ' automatically appear in their schedule. We predicted that this might add accountability for users and yield' +
            ' more honest responses as a result. We also decided to initially set the schedule as completely free, and' +
            ' have users fill in their busy times. This is the opposite model of Omnipointment. We made this decision' +
            ' in hopes that it would yield more general availability for the group. ' +
            'After putting our wireframes together, we further fleshed out our designs and created Lo-Fidelity mockups using Figma, shown below.',
        img: './assets/img/timely-proto.png',
    },
    {
        title: 'Feedback',
        subtitle: ' | Insight from our Stakeholders',
        description: 'Because of the intimate nature of our Lab’s summer cohort, we were able to meet with the lead' +
            ' Professor, our primary stakeholder, on a bi-weekly basis to get continuous feedback on our designs. Some' +
            ' initial feedback informed us that our designs needed a third user flow for returning users. It was also noted that' +
            ' we did not focus enough attention on the needs of the ' +
            'Professor in the Creator flow. With this in mind, we continued to iterate through user' +
            ' research and prototyping to ensure our designs resonated and empathized with all of our primary stakeholders and users.' +
            ' For the sake of space, I am unable to include every iteration we went through in our 12 weeks. However, please do not hesitate' +
            ' to reach out and ask about them if you are curious.',
        img: '',
    },
];
const TIMELYFINAL = [
    {
        sectionTitle: 'FINAL DESIGNS',
        sectionDescrip: 'After 12 weeks of designing, we shipped 3 final user flows. Some major solutions we designed for our problem space included ' +
            'having users input their class schedules to ensure more honest time-reporting, and setting all schedules by default to free instead of busy. ' +
            'We wanted the designs to be clean and quick to use, as that was a primary user need we discovered. ' +
            'You can interact with each of our final web prototypes below.',
        sectionImg: '',
    },
    {
        sectionTitle: '',
        sectionDescrip: 'Due to a last minute redesign, we were unable to finish prototyping the mobile version of our Review Flow, but you can watch a video of the other two flows below.',
        sectionImg: './assets/vid/timely-full.mov',
    }
];
const TIMELYREFLECT = [
    {
        sectionTitle: 'LEARNINGS & REFLECTIONS',
        sectionDescrip: 'This was my first time being on a user-experience design team, and I’m so proud of ' +
            'the work I was able to produce through this project. I learned so much' +
            ' during these 12 weeks that briefly summarizing everything feels really difficult. That said, here are a' +
            ' few of my major takeaways. ',
        sectionImg: '',
    }
];
/*----reflections subsections--*/
const TIMELYREFLECTSECTIONS = [
    {
        sectionTitle: 'Good research yields good designs.',
        sectionImg: '',
        sectionDescrip: 'There are so many different directions you can take as a designer, and so many different ways to solve ' +
            'the same problem. This can feel overwhelming. I have found that the more research I do on any design problem, big or small,' +
            ' the more confident I will feel in my design decision. Market research, user research, business insights, you name it. It is all ' +
            'useful. Now, if I ever feel unclear on how to move forward in my design process, you can bet the first thing I will do is' +
            ' get deep into the research.'
    },
    {
        sectionTitle: 'If something feels off, iterate.',
        sectionImg: '',
        sectionDescrip: 'This was something my team-lead mentioned to me, and it really stuck. There were many moments' +
            ' in my design process where I felt as if I had come to the final stage of a design, but one element still ' +
            'felt off. Instead of moving forward with that uneasy feeling, or just feeling stuck by it, I learned the best' +
            ' thing to do was take a step back and iterate again. '
    },
    {
        sectionTitle: 'Create styling guides, and stick to them.',
        sectionImg: '',
        sectionDescrip: 'A lesson I learned the hard way. In our final weeks of the project as everything was wrapping up,' +
            ' I was doing consistency checks on things like font styling. To my surprise, I found that my designs were full' +
            ' of a ridiculous amount of different font sizes. It took a lot of time to go through everything and stick to' +
            ' only 3 sizes, but it really paid off in the end. In the future, I will set my font-styles early on in the ' +
            'design process and be sure to stick with it throughout every iteration.  '
    },
    {
        sectionTitle: 'I love this stuff.',
        sectionImg: '',
        sectionDescrip: 'A cheesy but very true final reflection. I could not be more grateful to have been able to ' +
            'design on this team throughout my summer internship. Besides all the great skills I got from this, I also ' +
            'learned that I just love doing this type of work. I found myself going out of my way to read articles about' +
            'best-practices and putting in tons of extra hours for this project. It was the type of work I always looked ' +
            'forward to, and wanted more of. I can’t wait to continue learning about user experience design and building' +
            ' a career out of it.'
    },
];
/*----CAUSEWAY DATA-----*/
/*----main sections---*/
const CAUSEWAY = [
    {
        sectionTitle: 'OVERVIEW',
        sectionImg: './assets/img/causeway-overview.png',
        sectionDescrip: 'This project has been my primary focus throughout my time in the Tech4Good Lab at UC' +
            ' Santa Cruz. For the past nine months, my team and I have been conducting qualitative user experience research' +
            ' on Causeway, our Lab’s most developed platform. Causeway aims to teach web development online' +
            ' through micro-role hierarchies and user participation in real-world projects. Our research methods include' +
            ' various user-experience tests, usability tests with Causeway, user surveys, and interviews. Often, we perform' +
            ' qualitative analysis on our findings when appropriate. Our goal is to better understand the user' +
            ' experience on Causeway, and how the platform might be a way to rethink digital apprenticeship ' +
            'learning. On top of user experience research, I am doing extensive literature reviews for this project within' +
            ' apprenticeship learning and computer science education in preparation to put everything together' +
            ' in a research paper my team aims to publish in 2021. ',
    },
    {
        sectionTitle: 'PROBLEM SPACE',
        sectionImg: './assets/img/causeway-problem.jpeg',
        sectionDescrip: 'Hands-on, real-world, or apprenticeship type learning is extremely valuable in a ' +
            'computer science education, yet it is difficult to obtain. Many of these types of learnings are found ' +
            'in internships or research which often require students to have experience in order to gain access to' +
            ' that experience. It is a vicious cycle that leaves apprenticeship style learning inaccessible to' +
            ' novices or less experienced folks.',
    },
    {
        sectionTitle: 'A PROJECT IN PROGRESS',
        sectionImg: '',
        sectionDescrip: 'This is an ongoing project, and we are still conducting research ' +
            'which means we do not yet have solid conclusions. For this reason, I’ve decided to stray from a typical' +
            ' case study layout and instead outline some major takeaways and learnings I’ve gained from the project' +
            ' thus far below. '
    },
    {
        sectionTitle: 'SURVEY DESIGN',
        sectionImg: '',
        sectionDescrip: 'While helping implement various usability tests and research studies my team and I have run ' +
            'for this project, I have been frequently tasked with designing surveys we use for qualitative and quantitative data collection. ' +
            'Primarily I use Google Suite for survey creation and implementation. Through this experience, I have learned the value in how to ask ' +
            'questions, how to understand social and cultural components of certain questions and how they must be accounted for in proper wording, and how ' +
            'to best design the actual layout of the survey so it is most usable and enjoyable for our users, as well as produce the best possible data for ourselves.'
    },
    {
        sectionTitle: 'USABILITY TESTING',
        sectionImg: './assets/img/causeway-recruit.png',
        sectionDescrip: 'One silver lining of COVID-19 is that I learned how to run usability tests' +
            ' not only in person but also  remotely. Our teams usability tests typically' +
            ' run for a total of 1.5 hours. The first 30 minutes are be a brief interview to get' +
            ' background context on our user, and the final hour consists of the user working ' +
            'through Causeway as we observe and collect qualitative data on their experience. ' +
            'Whether they were conducted' +
            ' remotely or not, usability tests are always interesting to me because each user has a' +
            ' unique experience with Causeway. For this reason I left each session with new insight about the ' +
            'platform as well as about users in general. The above graphic was something I designed for general participant recruitment in our usability tests.',
    },
    {
        sectionTitle: 'USER INTERVIEWS',
        sectionImg: '',
        sectionDescrip: 'User interviews are by far my favorite part of the research process. ' +
            'I love connecting with people, and interviews are a really cool way to do that while also' +
            ' gaining valuable insight on our product. The most valuable learnings I’ve gained from' +
            ' conducting user interviews are twofold. ',
    },
    {
        sectionTitle: 'REFLECTIONS',
        sectionImg: '',
        sectionDescrip: 'I have loved being able to deep dive into the research process through ' +
            'this project. Beyond the skills I discussed' +
            ' above, I have noticed that this has taught me to bring a research mindset to my design work as' +
            ' well. Now, I notice myself researching all of my design decisions, because I understand' +
            ' that my best work will come from informed decisions. This experience has been so valuable' +
            ' and makes me very excited to continue research work in my future career whether that is' +
            ' directly through user research or indirectly in my design work. '
    }
];
const INTERVIEWS = [
    {
        sectionTitle: '1.  Have a script, but don’t feel stuck to it.',
        sectionImg: '',
        sectionDescrip: 'Preparation is key, which is what I mean by having a script ready. ' +
            'It is important to do research beforehand on what type of questions you will want to ask ' +
            'and how you will word them. However, once the interview is actually being run, it is more ' +
            'important to authentically connect with your interviewees than cover every single question' +
            ' you prepared and risk sounding like a robot. More importantly, there is often valuable' +
            ' information that will unexpectedly come out throughout the interview, and you should be' +
            ' flexible enough to adjust your questions accordingly.'
    },
    {
        sectionTitle: '2.  Ask open ended questions, and try to get stories instead of answers.',
        sectionImg: '',
        sectionDescrip: 'This is really important, and sometimes harder than it seems to achieve.' +
            ' Getting yes or no answers from a user provides little to no insight about their experience,' +
            ' and often cuts questions short. However, when a user answers in this way, it is not their' +
            ' fault! An interviewer should always ask open ended questions, those that can’t simply be' +
            ' answered with a yes or no. Good open ended questions might begin like, “tell me about a' +
            ' time where you…”, or “could you elaborate on…”, for example. As interviewers and researchers,' +
            ' the gems of user insight are found when our questions search for stories instead of answers. '
    },
];
/*----PLAYGROUND / SIDE PROJ DATA-----*/
/*----main sections---*/
const PLAYGROUND = [
    {
        sectionTitle: 'The Great Blog',
        sectionDescrip: 'The goal of this project was to create a modern blog layout for a fictitious Client. The layout, hierarchy, and user experience of this blog were created without the help of any templates or styleguides other than those I created myself. Timeframe: 1 week.',
        sectionImg: '',
    },
    {
        sectionTitle: 'Quarantine Affirmations',
        sectionDescrip: 'It has been a rough few months in the world. These graphics are my way ' +
            'of carving out a little bit of positive, affirmative space for ourselves and our bodies' +
            ' in the midst of it all.',
        sectionImg: './assets/img/play-affirmations.png',
    },
    {
        sectionTitle: 'Web Portfolio for a Journalist',
        sectionDescrip: 'During the Summer of 2020, I designed and developed an online portfolio' +
            'website for a good friend, who recently graduated college and is entering a career in' +
            'journalism. You can view the shipped website here.',
        sectionImg: './assets/img/eliza.png',
    },
    {
        sectionTitle: 'Looking into Prisons in Hawai‘i',
        sectionDescrip: 'For a few years I have been interested in (and outraged by) the prison systems' +
            ' in the United States. After the murder of George Floyd and the uprisings against police' +
            ' brutality across the country, I wanted to take a closer look into these systems and their' +
            ' social impact on a local level in Hawai‘i. The graphics below are a brief summary of some ' +
            'of my findings. They are not meant to be all-inclusive, but rather a conversation starter. ' +
            'I played with typography and colors to make them visually appealing while keeping ' +
            'the audience’s focus on the information at hand. Created for and deployed on Instagram.',
        sectionImg: './assets/img/play-prisons.png',
    },
    {
        sectionTitle: 'Building this Website',
        sectionDescrip: 'Shameless plug, but this entire website has been a labor of love and long ' +
            'nights of coding. Designed and developed by yours truly using AngularJS. 🙂',
        sectionImg: '',
    },
];


/***/ }),

/***/ "NDr0":
/*!*************************************************************************!*\
  !*** ./src/app/case-study/critical-design/critical-design.component.ts ***!
  \*************************************************************************/
/*! exports provided: CriticalDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticalDesignComponent", function() { return CriticalDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _case_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../case-directory */ "KBXg");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _case_footer_case_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../case-footer/case-footer.component */ "nI2n");






function CriticalDesignComponent_div_0_section_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r8.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r8.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CriticalDesignComponent_div_0_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CriticalDesignComponent_div_0_section_2_div_1_Template, 7, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r8.id == 1);
} }
function CriticalDesignComponent_div_0_section_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crit_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", crit_r11.sectionImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CriticalDesignComponent_div_0_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CriticalDesignComponent_div_0_section_3_div_4_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crit_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crit_r11.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", crit_r11.sectionImg != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crit_r11.sectionDescrip);
} }
function CriticalDesignComponent_div_0_section_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r14.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CriticalDesignComponent_div_0_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CriticalDesignComponent_div_0_section_4_div_6_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r14.title, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r14.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r14.img != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r14.description);
} }
function CriticalDesignComponent_div_0_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "iframe", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r17.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r17.sectionDescrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", f_r17.sectionImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CriticalDesignComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r18.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r18.sectionDescrip);
} }
function CriticalDesignComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r19.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r19.sectionDescrip);
} }
function CriticalDesignComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CriticalDesignComponent_div_0_section_2_Template, 2, 1, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CriticalDesignComponent_div_0_section_3_Template, 7, 3, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CriticalDesignComponent_div_0_section_4_Template, 9, 4, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CriticalDesignComponent_div_0_section_5_Template, 10, 3, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CriticalDesignComponent_div_0_div_7_Template, 6, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CriticalDesignComponent_div_0_div_8_Template, 5, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-case-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.intros);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.crits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.process);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.final);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.reflect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.rSection);
} }
function CriticalDesignComponent_div_1_section_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r26.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r26.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r26.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CriticalDesignComponent_div_1_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CriticalDesignComponent_div_1_section_3_div_1_Template, 7, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r26.id == 1);
} }
function CriticalDesignComponent_div_1_section_4_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CriticalDesignComponent_div_1_section_4_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CriticalDesignComponent_div_1_section_4_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crit_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", crit_r29.sectionImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CriticalDesignComponent_div_1_section_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CriticalDesignComponent_div_1_section_4_div_4_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CriticalDesignComponent_div_1_section_4_div_4_div_2_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CriticalDesignComponent_div_1_section_4_div_4_div_3_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crit_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", crit_r29.sectionTitle == "OVERVIEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", crit_r29.sectionTitle == "DESIGN PROCESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", crit_r29.sectionTitle != "OVERVIEW" && crit_r29.sectionTitle != "DESIGN PROCESS");
} }
function CriticalDesignComponent_div_1_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CriticalDesignComponent_div_1_section_4_div_4_Template, 4, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crit_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crit_r29.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", crit_r29.sectionImg != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crit_r29.sectionDescrip);
} }
function CriticalDesignComponent_div_1_section_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r36.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CriticalDesignComponent_div_1_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CriticalDesignComponent_div_1_section_5_div_6_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r36.title, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r36.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r36.img != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r36.description);
} }
function CriticalDesignComponent_div_1_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "iframe", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r39.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r39.sectionDescrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", f_r39.sectionImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CriticalDesignComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r40.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r40.sectionDescrip);
} }
function CriticalDesignComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r41.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r41.sectionDescrip);
} }
function CriticalDesignComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CriticalDesignComponent_div_1_section_3_Template, 2, 1, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CriticalDesignComponent_div_1_section_4_Template, 7, 3, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CriticalDesignComponent_div_1_section_5_Template, 9, 4, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CriticalDesignComponent_div_1_section_6_Template, 10, 3, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CriticalDesignComponent_div_1_div_8_Template, 6, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CriticalDesignComponent_div_1_div_9_Template, 5, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-case-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.intros);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.crits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.process);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.final);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.reflect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.rSection);
} }
class CriticalDesignComponent {
    constructor() {
        this.intros = _case_directory__WEBPACK_IMPORTED_MODULE_1__["INTROS"];
        this.crits = _case_directory__WEBPACK_IMPORTED_MODULE_1__["CRIT"];
        this.process = _case_directory__WEBPACK_IMPORTED_MODULE_1__["CRITPROCESS"];
        this.final = _case_directory__WEBPACK_IMPORTED_MODULE_1__["CRITFINAL"];
        this.reflect = _case_directory__WEBPACK_IMPORTED_MODULE_1__["CRITREFLECT"];
        this.rSection = _case_directory__WEBPACK_IMPORTED_MODULE_1__["CRITREFLECTSECTIONS"];
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].isMobile;
    }
    ngOnInit() {
    }
}
CriticalDesignComponent.ɵfac = function CriticalDesignComponent_Factory(t) { return new (t || CriticalDesignComponent)(); };
CriticalDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CriticalDesignComponent, selectors: [["app-critical-design"]], decls: 2, vars: 2, consts: [["class", "outer-container", 4, "ngIf"], ["class", "mobile", 4, "ngIf"], [1, "outer-container"], [1, "main-container"], ["class", "intro", 4, "ngFor", "ngForOf"], ["class", "overview", 4, "ngFor", "ngForOf"], ["class", "process", 4, "ngFor", "ngForOf"], ["class", "final-design", 4, "ngFor", "ngForOf"], [1, "reflections"], [4, "ngFor", "ngForOf"], ["class", "reflection-section", 4, "ngFor", "ngForOf"], [1, "intro"], [4, "ngIf"], [1, "page-title"], [1, "description"], [1, "intro-img"], [1, "intro", 3, "src"], [1, "overview"], [1, "word-section"], [1, "title"], ["class", "section-img", 4, "ngIf"], [1, "section-descrip"], [1, "section-img"], ["width", "100%", 3, "src"], [1, "process"], [1, "process-title"], [1, "ptitle"], [1, "psubtitle"], ["class", "pimg", 4, "ngIf"], [1, "pdescrip"], [1, "pimg"], [1, "final-design"], [1, "video"], ["src", "https://www.youtube.com/embed/ttNsRgl_ffA", "width", "100%", "height", "400", "allowfullscreen", ""], [1, "reflection-section"], [1, "r-title"], [1, "r-descrip"], [1, "mobile"], [1, "mobile-outer-container"], ["width", "100%", "height", "100%", 1, "intro", 3, "src"], ["class", "section-img mOverview", 4, "ngIf"], [1, "section-img", "mOverview"], ["src", "./assets/img/crit-overview-mobile.png", "width", "70%"], ["src", "./assets/img/crit-process-mobile.png", "width", "100%"], ["src", "https://www.youtube.com/embed/ttNsRgl_ffA", "width", "100%", "height", "165", "allowfullscreen", ""]], template: function CriticalDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CriticalDesignComponent_div_0_Template, 10, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CriticalDesignComponent_div_1_Template, 11, 6, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _case_footer_case_footer_component__WEBPACK_IMPORTED_MODULE_4__["CaseFooterComponent"]], styles: [".outer-container[_ngcontent-%COMP%] {\n  margin: -2em 8em 4em 8em;\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main-container[_ngcontent-%COMP%] {\n  margin: 0 8em 4em 8em;\n  font-size: 1.1em;\n  color: #4f4f4f;\n  font-weight: 300;\n  line-height: 1.8em;\n\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n  line-height: 2em;\n  font-weight: 600;\n  text-align: center;\n  color: #7F93FF;\n}\n.description[_ngcontent-%COMP%] {\n  text-align: left;\n  font-style: italic;\n  font-size: 1.2em;\n  margin: 0 1em 2em 1em;\n\n}\n.intro-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n  margin-bottom: 4em;\n}\nimg.intro[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.word-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 1em 0 6em 0;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: 600;\n  margin-bottom: 1.4em;\n  \n}\n.section-img[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n\n.process[_ngcontent-%COMP%] {\n  margin-bottom: 4em;\n}\n.process-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  font-size: 1.05em;\n  margin-bottom: .8em;\n  margin-top: -2em;\n}\n.ptitle[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #7F93FF;\n}\n.psubtitle[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.pimg[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n.pdescrip[_ngcontent-%COMP%] {\n  margin-bottom: 6em;\n}\n\n.final-design[_ngcontent-%COMP%]   .section-descrip[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n.video[_ngcontent-%COMP%] {\n  border: none;\n  display: flex;\n  align-self: center;\n  justify-content: center;\n  margin-top: -8em;\n  margin-bottom: 6em;\n}\n\n.reflections[_ngcontent-%COMP%]   .section-descrip[_ngcontent-%COMP%] {\n  margin-bottom: -4em;\n}\n.r-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 2em;\n  margin-bottom: .5em;\n}\n\n.mobile[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mobile-outer-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 2em;\n}\n.mobile[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  font-size: 1em;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin: 0;\n}\n.mobile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  text-align: left;\n  display: flex;\n  line-height: 1.5em;\n}\n.mobile[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: -1em;\n  margin-bottom: -1em;\n}\n.mobile[_ngcontent-%COMP%]   .overview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: -.5em;\n}\n.mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: center;\n  justify-content: center;\n  margin-bottom: 0;\n}\n.mobile[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin: 0 0 1em 0;\n}\n.mobile[_ngcontent-%COMP%]   .word-section[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]  {\n  margin-bottom: 3em;\n}\n.mobile[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n  font-size: 1em;\n}\n.mobile[_ngcontent-%COMP%]   .process-title[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  margin-top: 0;\n}\n.mobile[_ngcontent-%COMP%]   .research[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .protos[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .final-design\n.section-descrip[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .research[_ngcontent-%COMP%]   .pimg[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .pdescrip[_ngcontent-%COMP%]  {\n  margin-bottom: 0;\n}\n.mobile[_ngcontent-%COMP%]   .proto-title[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n.mobile[_ngcontent-%COMP%]   .final-design[_ngcontent-%COMP%]   .word-section[_ngcontent-%COMP%] {\n   margin-bottom: 1em;\n }\n.mobile[_ngcontent-%COMP%]   .final-design[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n   margin-bottom: 6em;\n }\n.mobile[_ngcontent-%COMP%]   .reflections[_ngcontent-%COMP%]   .section-descrip[_ngcontent-%COMP%] {\n  margin-bottom: -2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzZS1zdHVkeS9jcml0aWNhbC1kZXNpZ24vY3JpdGljYWwtZGVzaWduLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtBQUNmO0VBQ0Usd0JBQXdCO0VBQ3hCO2tDQUNnQztFQUNoQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7O0FBRXBCO0FBQ0Esc0JBQXNCO0FBQ3RCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjs7QUFFdkI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQSxtQkFBbUI7QUFFbkI7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBR0EsbUJBQW1CO0FBRW5CO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQztHQUNFLGtCQUFrQjtDQUNwQjtBQUVBO0dBQ0Usa0JBQWtCO0NBQ3BCO0FBRUQ7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jYXNlLXN0dWR5L2NyaXRpY2FsLWRlc2lnbi9jcml0aWNhbC1kZXNpZ24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLXdlYi0tLS0tKi9cbi5vdXRlci1jb250YWluZXIge1xuICBtYXJnaW46IC0yZW0gOGVtIDRlbSA4ZW07XG4gIC8qYm9yZGVyLXJhZGl1czogNDBweDtcbiAgYm94LXNoYWRvdzogMCA4cHggODBweCAjRTJFMkUyOyovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIDhlbSA0ZW0gOGVtO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuXG59XG4vKi0tLS0tLWludHJvLS0tLS0tLS0qL1xuaDIge1xuICBmb250LXNpemU6IDEuNmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjN0Y5M0ZGO1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW46IDAgMWVtIDJlbSAxZW07XG5cbn1cbi5pbnRyby1pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0ZW07XG59XG5pbWcuaW50cm8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyotLS0tLW92ZXJ2aWV3LS0tLSovXG4ud29yZC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxZW0gMCA2ZW0gMDtcbn1cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDEuNGVtO1xuICAvKmNvbG9yOiAjODI4MjgyOyovXG59XG4uc2VjdGlvbi1pbWcge1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbi8qLS0tcHJvY2Vzcy0tLS0qL1xuLnByb2Nlc3Mge1xuICBtYXJnaW4tYm90dG9tOiA0ZW07XG59XG4ucHJvY2Vzcy10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMS4wNWVtO1xuICBtYXJnaW4tYm90dG9tOiAuOGVtO1xuICBtYXJnaW4tdG9wOiAtMmVtO1xufVxuXG4ucHRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM3RjkzRkY7XG59XG4ucHN1YnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5waW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuLnBkZXNjcmlwIHtcbiAgbWFyZ2luLWJvdHRvbTogNmVtO1xufVxuXG4vKi0tLS1maW5hbCBkZXNpZ24tLS0tKi9cbi5maW5hbC1kZXNpZ24gLnNlY3Rpb24tZGVzY3JpcCB7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbi52aWRlbyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLThlbTtcbiAgbWFyZ2luLWJvdHRvbTogNmVtO1xufVxuXG4vKi0tLXJlZmxlY3Rpb25zLS0qL1xuXG4ucmVmbGVjdGlvbnMgLnNlY3Rpb24tZGVzY3JpcCB7XG4gIG1hcmdpbi1ib3R0b206IC00ZW07XG59XG4uci10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbn1cblxuXG4vKi0tLS0tbW9iaWxlLS0tLS0qL1xuXG4ubW9iaWxlIGJvZHkge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vYmlsZS1vdXRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyZW07XG59XG5cbi5tb2JpbGUgLm1haW4tY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG5cbi5tb2JpbGUgaDIge1xuICBmb250LXNpemU6IDEuNGVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG4ubW9iaWxlIC5pbnRybyBpbWcge1xuICBtYXJnaW4tbGVmdDogLTFlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTFlbTtcbn1cblxuLm1vYmlsZSAub3ZlcnZpZXcgaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogLS41ZW07XG59XG5cbi5tb2JpbGUgaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm1vYmlsZSAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luOiAwIDAgMWVtIDA7XG59XG5cbi5tb2JpbGUgLndvcmQtc2VjdGlvbiwgLm1vYmlsZSAucHJvY2VzcywgLm1vYmlsZSB2aWRlbyAge1xuICBtYXJnaW4tYm90dG9tOiAzZW07XG59XG5cbi5tb2JpbGUgLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLm1vYmlsZSAucHJvY2Vzcy10aXRsZSB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubW9iaWxlIC5yZXNlYXJjaCBpbWcsIC5tb2JpbGUgLnByb3RvcywgLm1vYmlsZSAuZmluYWwtZGVzaWduXG4uc2VjdGlvbi1kZXNjcmlwLCAubW9iaWxlIC5yZXNlYXJjaCAucGltZywgLm1vYmlsZSAucGRlc2NyaXAgIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm1vYmlsZSAucHJvdG8tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG5cbiAubW9iaWxlIC5maW5hbC1kZXNpZ24gLndvcmQtc2VjdGlvbiB7XG4gICBtYXJnaW4tYm90dG9tOiAxZW07XG4gfVxuXG4gLm1vYmlsZSAuZmluYWwtZGVzaWduIGltZyB7XG4gICBtYXJnaW4tYm90dG9tOiA2ZW07XG4gfVxuXG4ubW9iaWxlIC5yZWZsZWN0aW9ucyAuc2VjdGlvbi1kZXNjcmlwIHtcbiAgbWFyZ2luLWJvdHRvbTogLTJlbTtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CriticalDesignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-critical-design',
                templateUrl: './critical-design.component.html',
                styleUrls: ['./critical-design.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "O7Zi":
/*!***************************************************************************!*\
  !*** ./src/app/case-study/group-scheduling/group-scheduling.component.ts ***!
  \***************************************************************************/
/*! exports provided: GroupSchedulingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSchedulingComponent", function() { return GroupSchedulingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _case_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../case-directory */ "KBXg");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _case_footer_case_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../case-footer/case-footer.component */ "nI2n");






function GroupSchedulingComponent_div_0_section_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r7.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GroupSchedulingComponent_div_0_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GroupSchedulingComponent_div_0_section_2_div_1_Template, 7, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r7.id == 2);
} }
function GroupSchedulingComponent_div_0_section_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", t_r10.sectionImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GroupSchedulingComponent_div_0_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GroupSchedulingComponent_div_0_section_3_div_4_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r10.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", t_r10.sectionImg != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r10.sectionDescrip);
} }
function GroupSchedulingComponent_div_0_section_4_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r13.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GroupSchedulingComponent_div_0_section_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GroupSchedulingComponent_div_0_section_4_div_1_div_6_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r13.title, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r13.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r13.img != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r13.description);
} }
function GroupSchedulingComponent_div_0_section_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r13.title, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r13.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r13.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r13.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GroupSchedulingComponent_div_0_section_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r13.title, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r13.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r13.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r13.description);
} }
function GroupSchedulingComponent_div_0_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GroupSchedulingComponent_div_0_section_4_div_1_Template, 9, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GroupSchedulingComponent_div_0_section_4_div_2_Template, 10, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GroupSchedulingComponent_div_0_section_4_div_3_Template, 12, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r13.title != "Research" && p_r13.title != "Prototype");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r13.title == "Research");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r13.title == "Prototype");
} }
function GroupSchedulingComponent_div_0_section_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r22.sectionTitle);
} }
function GroupSchedulingComponent_div_0_section_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", f_r22.sectionImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GroupSchedulingComponent_div_0_section_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1. Creator Flow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2. Participant Flow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "iframe", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "3. Review Flow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "iframe", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GroupSchedulingComponent_div_0_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GroupSchedulingComponent_div_0_section_5_div_2_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GroupSchedulingComponent_div_0_section_5_div_5_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GroupSchedulingComponent_div_0_section_5_div_6_Template, 13, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r22.sectionTitle != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r22.sectionDescrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r22.sectionImg != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r22.sectionTitle == "FINAL DESIGNS");
} }
function GroupSchedulingComponent_div_0_section_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r31.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r31.sectionDescrip);
} }
function GroupSchedulingComponent_div_0_section_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r32.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r32.sectionDescrip);
} }
function GroupSchedulingComponent_div_0_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GroupSchedulingComponent_div_0_section_6_div_1_Template, 6, 2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GroupSchedulingComponent_div_0_section_6_div_2_Template, 5, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.reflect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.rSection);
} }
function GroupSchedulingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GroupSchedulingComponent_div_0_section_2_Template, 2, 1, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GroupSchedulingComponent_div_0_section_3_Template, 7, 3, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GroupSchedulingComponent_div_0_section_4_Template, 4, 3, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GroupSchedulingComponent_div_0_section_5_Template, 7, 4, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GroupSchedulingComponent_div_0_section_6_Template, 3, 2, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-case-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.intro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.timely);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.process);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.final);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.reflect);
} }
function GroupSchedulingComponent_div_1_section_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r38.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r38.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r38.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GroupSchedulingComponent_div_1_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GroupSchedulingComponent_div_1_section_3_div_1_Template, 7, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r38.id == 2);
} }
function GroupSchedulingComponent_div_1_section_4_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GroupSchedulingComponent_div_1_section_4_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GroupSchedulingComponent_div_1_section_4_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", t_r41.sectionImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GroupSchedulingComponent_div_1_section_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GroupSchedulingComponent_div_1_section_4_div_4_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GroupSchedulingComponent_div_1_section_4_div_4_div_2_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GroupSchedulingComponent_div_1_section_4_div_4_div_3_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", t_r41.sectionTitle == "OVERVIEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", t_r41.sectionTitle == "DESIGN PROCESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", t_r41.sectionTitle != "OVERVIEW" && t_r41.sectionTitle != "DESIGN PROCESS");
} }
function GroupSchedulingComponent_div_1_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GroupSchedulingComponent_div_1_section_4_div_4_Template, 4, 3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r41.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", t_r41.sectionImg != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r41.sectionDescrip);
} }
function GroupSchedulingComponent_div_1_section_5_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r48.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GroupSchedulingComponent_div_1_section_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GroupSchedulingComponent_div_1_section_5_div_1_div_6_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r48.title, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r48.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r48.img != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r48.description);
} }
function GroupSchedulingComponent_div_1_section_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r48.title, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r48.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r48.description);
} }
function GroupSchedulingComponent_div_1_section_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r48.title, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r48.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r48.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r48.description);
} }
function GroupSchedulingComponent_div_1_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GroupSchedulingComponent_div_1_section_5_div_1_Template, 9, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GroupSchedulingComponent_div_1_section_5_div_2_Template, 10, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GroupSchedulingComponent_div_1_section_5_div_3_Template, 12, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r48.title != "Research" && p_r48.title != "Prototype");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r48.title == "Research");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r48.title == "Prototype");
} }
function GroupSchedulingComponent_div_1_section_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r57.sectionTitle);
} }
function GroupSchedulingComponent_div_1_section_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", f_r57.sectionImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GroupSchedulingComponent_div_1_section_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1. Creator Flow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2. Participant Flow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "iframe", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "3. Review Flow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "iframe", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GroupSchedulingComponent_div_1_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GroupSchedulingComponent_div_1_section_6_div_2_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GroupSchedulingComponent_div_1_section_6_div_5_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GroupSchedulingComponent_div_1_section_6_div_6_Template, 13, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r57.sectionTitle != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r57.sectionDescrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r57.sectionImg != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r57.sectionTitle == "FINAL DESIGNS");
} }
function GroupSchedulingComponent_div_1_section_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r65.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r65.sectionDescrip);
} }
function GroupSchedulingComponent_div_1_section_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GroupSchedulingComponent_div_1_section_7_div_7_Template, 5, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r63 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r63.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r63.sectionDescrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.rSection);
} }
function GroupSchedulingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GroupSchedulingComponent_div_1_section_3_Template, 2, 1, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GroupSchedulingComponent_div_1_section_4_Template, 7, 3, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GroupSchedulingComponent_div_1_section_5_Template, 4, 3, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GroupSchedulingComponent_div_1_section_6_Template, 7, 4, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GroupSchedulingComponent_div_1_section_7_Template, 8, 3, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-case-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.intro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.timely);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.process);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.final);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.reflect);
} }
class GroupSchedulingComponent {
    constructor() {
        this.intro = _case_directory__WEBPACK_IMPORTED_MODULE_1__["INTROS"];
        this.timely = _case_directory__WEBPACK_IMPORTED_MODULE_1__["TIMELY"];
        this.process = _case_directory__WEBPACK_IMPORTED_MODULE_1__["TIMELYPROCESS"];
        this.final = _case_directory__WEBPACK_IMPORTED_MODULE_1__["TIMELYFINAL"];
        this.reflect = _case_directory__WEBPACK_IMPORTED_MODULE_1__["TIMELYREFLECT"];
        this.rSection = _case_directory__WEBPACK_IMPORTED_MODULE_1__["TIMELYREFLECTSECTIONS"];
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].isMobile;
    }
    ngOnInit() {
    }
}
GroupSchedulingComponent.ɵfac = function GroupSchedulingComponent_Factory(t) { return new (t || GroupSchedulingComponent)(); };
GroupSchedulingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupSchedulingComponent, selectors: [["app-group-scheduling"]], decls: 2, vars: 2, consts: [["class", "outer-container", 4, "ngIf"], ["class", "mobile", 4, "ngIf"], [1, "outer-container"], [1, "main-container"], ["class", "intro", 4, "ngFor", "ngForOf"], ["class", "overview", 4, "ngFor", "ngForOf"], ["class", "process", 4, "ngFor", "ngForOf"], ["class", "final-design", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "intro"], [4, "ngIf"], [1, "page-title"], [1, "description"], [1, "intro-img"], ["width", "110%", 3, "src"], [1, "overview"], [1, "word-section"], [1, "title"], ["class", "section-img", 4, "ngIf"], [1, "section-descrip"], [1, "section-img"], ["width", "100%", 3, "src"], [1, "process"], ["class", "research", 4, "ngIf"], ["class", "proto", 4, "ngIf"], [1, "process-title"], [1, "ptitle"], [1, "psubtitle"], ["class", "pimg", 4, "ngIf"], [1, "pdescrip"], [1, "pimg"], [1, "research"], [1, "proto"], ["src", "./assets/img/timely-lofi.png", "width", "100%"], [1, "final-design"], ["class", "title", 4, "ngIf"], ["width", "100%", "controls", ""], ["type", "video/mp4", 3, "src"], [1, "protos"], [1, "proto-title"], ["width", "800", "height", "450", "src", "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXXf4xanfLMJQdAVqOphZ9b%2FInteractive-Prototype-Timely%3Fnode-id%3D13%253A4%26viewport%3D401%252C410%252C0.052765510976314545%26scaling%3Dscale-down-width&chrome=DOCUMENTATION", "allowfullscreen", "", 2, "border", "1px solid rgba(0, 0, 0, 0.1)"], ["width", "800", "height", "450", "src", "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXXf4xanfLMJQdAVqOphZ9b%2FInteractive-Prototype-Timely%3Fnode-id%3D13%253A575%26viewport%3D512%252C315%252C0.02377820573747158%26scaling%3Dscale-down-width&chrome=DOCUMENTATION", "allowfullscreen", "", 2, "border", "1px solid rgba(0, 0, 0, 0.1)"], [1, "protos", "review"], ["width", "800", "height", "450", "src", "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXXf4xanfLMJQdAVqOphZ9b%2FInteractive-Prototype-Timely%3Fnode-id%3D13%253A3835%26viewport%3D393%252C313%252C0.039631232619285583%26scaling%3Dscale-down-width&chrome=DOCUMENTATION", "allowfullscreen", "", 2, "border", "1px solid rgba(0, 0, 0, 0.1)"], ["class", "reflections", 4, "ngFor", "ngForOf"], ["class", "reflection-section", 4, "ngFor", "ngForOf"], [1, "reflections"], [1, "reflection-section"], [1, "r-title"], [1, "r-descrip"], [1, "mobile"], [1, "mobile-outer-container"], ["class", "section-img mOverview", 4, "ngIf"], [1, "section-img", "mOverview"], ["src", "./assets/img/timely-overview-mobile.png", "width", "70%"], ["src", "./assets/img/timely-process-mobile.png", "width", "100%"], ["src", "./assets/img/timely-research-mobile.png", "width", "104%"], ["width", "100%", "height", "150", "src", "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXXf4xanfLMJQdAVqOphZ9b%2FInteractive-Prototype-Timely%3Fnode-id%3D13%253A4%26viewport%3D401%252C410%252C0.052765510976314545%26scaling%3Dscale-down-width&chrome=DOCUMENTATION", "allowfullscreen", "", 2, "border", "1px solid rgba(0, 0, 0, 0.1)"], ["width", "100%", "height", "150", "src", "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXXf4xanfLMJQdAVqOphZ9b%2FInteractive-Prototype-Timely%3Fnode-id%3D13%253A575%26viewport%3D512%252C315%252C0.02377820573747158%26scaling%3Dscale-down-width&chrome=DOCUMENTATION", "allowfullscreen", "", 2, "border", "1px solid rgba(0, 0, 0, 0.1)"], ["width", "100%", "height", "150", "src", "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXXf4xanfLMJQdAVqOphZ9b%2FInteractive-Prototype-Timely%3Fnode-id%3D13%253A3835%26viewport%3D393%252C313%252C0.039631232619285583%26scaling%3Dscale-down-width&chrome=DOCUMENTATION", "allowfullscreen", "", 2, "border", "1px solid rgba(0, 0, 0, 0.1)"]], template: function GroupSchedulingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GroupSchedulingComponent_div_0_Template, 8, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GroupSchedulingComponent_div_1_Template, 9, 5, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _case_footer_case_footer_component__WEBPACK_IMPORTED_MODULE_4__["CaseFooterComponent"]], styles: [".outer-container[_ngcontent-%COMP%] {\n  margin: -2em 8em 4em 8em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main-container[_ngcontent-%COMP%] {\n  margin: 0 8em 4em 8em;\n  font-size: 1.1em;\n  color: #4f4f4f;\n  font-weight: 300;\n  line-height: 1.8em;\n\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n  line-height: 2em;\n  font-weight: 600;\n  text-align: center;\n  color: #7F93FF;\n}\n.description[_ngcontent-%COMP%] {\n  text-align: left;\n  font-style: italic;\n  font-size: 1.2em;\n  margin: 0 1em 2em 1em;\n\n}\n.intro-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n  \n  margin-bottom: 4em;\n}\nimg.intro[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.word-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 1em 0 6em 0;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: 600;\n  margin-bottom: 1.4em;\n  \n}\n.section-img[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n\n.process[_ngcontent-%COMP%] {\n  margin-bottom: 4em;\n}\n.process-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  font-size: 1.05em;\n  margin-bottom: .8em;\n  margin-top: -2em;\n}\n.ptitle[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #7F93FF;\n}\n.psubtitle[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.pimg[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n\n}\n.pdescrip[_ngcontent-%COMP%] {\n  margin-bottom: 6em;\n}\n.research[_ngcontent-%COMP%]   .pdescrip[_ngcontent-%COMP%], .proto[_ngcontent-%COMP%]   .pdescrip[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n.research[_ngcontent-%COMP%]   .pimg[_ngcontent-%COMP%] {\n  margin-bottom: 6em;\n  margin-left: -1em;\n}\n\n.final-design[_ngcontent-%COMP%]   .section-descrip[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n.protos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 6em;\n}\n.review[_ngcontent-%COMP%] {\n  margin-bottom: -4em;\n}\n.proto-title[_ngcontent-%COMP%] {\n  font-size: 1.05em;\n  margin-bottom: 1em;\n  font-weight: 600;\n}\n\n.reflections[_ngcontent-%COMP%]   .section-descrip[_ngcontent-%COMP%] {\n  margin-bottom: -4em;\n}\n.r-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 2em;\n  margin-bottom: .5em;\n}\n\n.mobile[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mobile-outer-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 2em;\n}\n.mobile[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  font-size: 1em;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin: 0;\n}\n.mobile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  text-align: left;\n  display: flex;\n  line-height: 1.5em;\n}\n.mobile[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: -1em;\n  margin-bottom: -1em;\n}\n.mobile[_ngcontent-%COMP%]   .overview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: -.5em;\n}\n.mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: center;\n  justify-content: center;\n  margin-bottom: 0;\n}\n.mobile[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin: 0 0 1em 0;\n}\n.mobile[_ngcontent-%COMP%]   .word-section[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]  {\n  margin-bottom: 3em;\n}\n.mobile[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n  font-size: 1em;\n}\n.mobile[_ngcontent-%COMP%]   .process-title[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  margin-top: 0;\n}\n.mobile[_ngcontent-%COMP%]   .research[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .protos[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .final-design\n.section-descrip[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .research[_ngcontent-%COMP%]   .pimg[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .pdescrip[_ngcontent-%COMP%]  {\n  margin-bottom: 0;\n}\n.mobile[_ngcontent-%COMP%]   .proto-title[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n.mobile[_ngcontent-%COMP%]   .final-design[_ngcontent-%COMP%]   .word-section[_ngcontent-%COMP%] {\n   margin-bottom: 1em;\n }\n.mobile[_ngcontent-%COMP%]   .reflections[_ngcontent-%COMP%]   .section-descrip[_ngcontent-%COMP%] {\n  margin-bottom: -2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzZS1zdHVkeS9ncm91cC1zY2hlZHVsaW5nL2dyb3VwLXNjaGVkdWxpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2Y7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCOztBQUVwQjtBQUNBLHNCQUFzQjtBQUN0QjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7O0FBRXZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjs7QUFFcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUEsK0JBQStCO0FBQy9CO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVDO0dBQ0Usa0JBQWtCO0NBQ3BCO0FBRUQ7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jYXNlLXN0dWR5L2dyb3VwLXNjaGVkdWxpbmcvZ3JvdXAtc2NoZWR1bGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0td2ViLS0tLS0qL1xuLm91dGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogLTJlbSA4ZW0gNGVtIDhlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1jb250YWluZXIge1xuICBtYXJnaW46IDAgOGVtIDRlbSA4ZW07XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG5cbn1cbi8qLS0tLS0taW50cm8tLS0tLS0tLSovXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3RjkzRkY7XG59XG4uZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbjogMCAxZW0gMmVtIDFlbTtcblxufVxuLmludHJvLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIC8qbWFyZ2luOjAgLThlbSA0ZW0gLThlbTsqL1xuICBtYXJnaW4tYm90dG9tOiA0ZW07XG59XG5pbWcuaW50cm8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyotLS0tLW92ZXJ2aWV3LS0tLSovXG4ud29yZC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxZW0gMCA2ZW0gMDtcbn1cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDEuNGVtO1xuICAvKmNvbG9yOiAjODI4MjgyOyovXG59XG4uc2VjdGlvbi1pbWcge1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbi8qLS0tcHJvY2Vzcy0tLS0qL1xuLnByb2Nlc3Mge1xuICBtYXJnaW4tYm90dG9tOiA0ZW07XG59XG5cbi5wcm9jZXNzLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zaXplOiAxLjA1ZW07XG4gIG1hcmdpbi1ib3R0b206IC44ZW07XG4gIG1hcmdpbi10b3A6IC0yZW07XG59XG5cbi5wdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzdGOTNGRjtcbn1cbi5wc3VidGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG5cbn1cbi5wZGVzY3JpcCB7XG4gIG1hcmdpbi1ib3R0b206IDZlbTtcbn1cblxuLnJlc2VhcmNoIC5wZGVzY3JpcCwgLnByb3RvIC5wZGVzY3JpcCB7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuLnJlc2VhcmNoIC5waW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogNmVtO1xuICBtYXJnaW4tbGVmdDogLTFlbTtcbn1cblxuLyotLWZpbmFsIGRlc2lnbiwgcHJvdG90eXBlcy0tKi9cbi5maW5hbC1kZXNpZ24gLnNlY3Rpb24tZGVzY3JpcCB7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbi5wcm90b3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiA2ZW07XG59XG5cbi5yZXZpZXcge1xuICBtYXJnaW4tYm90dG9tOiAtNGVtO1xufVxuXG4ucHJvdG8tdGl0bGUge1xuICBmb250LXNpemU6IDEuMDVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vKi0tLXJlZmxlY3Rpb25zLS0tLSovXG4ucmVmbGVjdGlvbnMgLnNlY3Rpb24tZGVzY3JpcCB7XG4gIG1hcmdpbi1ib3R0b206IC00ZW07XG59XG4uci10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbn1cblxuLyotLS0tLW1vYmlsZS0tLS0tKi9cbi5tb2JpbGUgYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9iaWxlLW91dGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDJlbTtcbn1cblxuLm1vYmlsZSAubWFpbi1jb250YWluZXIge1xuICBmb250LXNpemU6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1vYmlsZSBoMiB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cbi5tb2JpbGUgLmludHJvIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xuICBtYXJnaW4tYm90dG9tOiAtMWVtO1xufVxuXG4ubW9iaWxlIC5vdmVydmlldyBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAtLjVlbTtcbn1cblxuLm1vYmlsZSBpbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubW9iaWxlIC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW46IDAgMCAxZW0gMDtcbn1cblxuLm1vYmlsZSAud29yZC1zZWN0aW9uLCAubW9iaWxlIC5wcm9jZXNzLCAubW9iaWxlIHZpZGVvICB7XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbn1cblxuLm1vYmlsZSAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4ubW9iaWxlIC5wcm9jZXNzLXRpdGxlIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5tb2JpbGUgLnJlc2VhcmNoIGltZywgLm1vYmlsZSAucHJvdG9zLCAubW9iaWxlIC5maW5hbC1kZXNpZ25cbi5zZWN0aW9uLWRlc2NyaXAsIC5tb2JpbGUgLnJlc2VhcmNoIC5waW1nLCAubW9iaWxlIC5wZGVzY3JpcCAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubW9iaWxlIC5wcm90by10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuIC5tb2JpbGUgLmZpbmFsLWRlc2lnbiAud29yZC1zZWN0aW9uIHtcbiAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiB9XG5cbi5tb2JpbGUgLnJlZmxlY3Rpb25zIC5zZWN0aW9uLWRlc2NyaXAge1xuICBtYXJnaW4tYm90dG9tOiAtMmVtO1xufVxuXG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSchedulingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-group-scheduling',
                templateUrl: './group-scheduling.component.html',
                styleUrls: ['./group-scheduling.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OCZt":
/*!**************************************************!*\
  !*** ./src/app/work/work-component.component.ts ***!
  \**************************************************/
/*! exports provided: WorkComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponentComponent", function() { return WorkComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _work_intro_work_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-intro/work-intro.component */ "JAMj");
/* harmony import */ var _work_cards_work_cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work-cards/work-cards.component */ "Hi24");






function WorkComponentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-work-intro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-work-cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorkComponentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-work-intro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-work-cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WorkComponentComponent {
    constructor() {
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].isMobile;
    }
    ngOnInit() {
    }
}
WorkComponentComponent.ɵfac = function WorkComponentComponent_Factory(t) { return new (t || WorkComponentComponent)(); };
WorkComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponentComponent, selectors: [["app-work-component"]], decls: 2, vars: 2, consts: [["class", "work-container", 4, "ngIf"], ["class", "work-container-mobile", 4, "ngIf"], [1, "work-container"], [1, "work-container-mobile"]], template: function WorkComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkComponentComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkComponentComponent_div_1_Template, 3, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _work_intro_work_intro_component__WEBPACK_IMPORTED_MODULE_3__["WorkIntroComponent"], _work_cards_work_cards_component__WEBPACK_IMPORTED_MODULE_4__["WorkCardsComponent"]], styles: [".work-container[_ngcontent-%COMP%] {\n  \n  display: flex;\n  flex-direction: column;\n  margin-left: 12em;\n  margin-right: 12em;\n  justify-content: center;\n}\n\n.work-container-mobile[_ngcontent-%COMP%] {\n  margin: 2em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7cUJBQ21CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC93b3JrL3dvcmstY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29yay1jb250YWluZXIge1xuICAvKm1hcmdpbi1sZWZ0OiAxMnZ3O1xuICBtYXJnaW4tcmlnaHQ6IDh2dzsqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMTJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndvcmstY29udGFpbmVyLW1vYmlsZSB7XG4gIG1hcmdpbjogMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work-component',
                templateUrl: './work-component.component.html',
                styleUrls: ['./work-component.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PYks":
/*!**************************************************************!*\
  !*** ./src/app/about/about-blurbs/about-blurbs.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutBlurbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutBlurbsComponent", function() { return AboutBlurbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_pages_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main-pages-directory */ "8S1P");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AboutBlurbsComponent_div_0_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " I get really excited thinking about radical ways technologies can transform our world for the better. Nothing is too crazy. One of the most influential and inspiring forces of socially-grounded tech in my life was the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Tech4Good Lab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ", where I was a Fellow and worked as a UX Researcher and Designer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutBlurbsComponent_div_0_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " I love to thinking about how images can allow us to exist in our bodies with joy, power, vulnerability, and love. If you're curious, you can check out my photography portfolio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutBlurbsComponent_div_0_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blurb_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blurb_r3.description);
} }
function AboutBlurbsComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AboutBlurbsComponent_div_0_div_4_div_7_Template, 6, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutBlurbsComponent_div_0_div_4_div_8_Template, 6, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AboutBlurbsComponent_div_0_div_4_div_9_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blurb_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blurb_r3.imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blurb_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", blurb_r3.id == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", blurb_r3.id == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", blurb_r3.id != 1);
} }
function AboutBlurbsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CHAT WITH ME ABOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AboutBlurbsComponent_div_0_div_4_Template, 10, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.blurbs);
} }
function AboutBlurbsComponent_div_1_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " I get really excited thinking about radical ways technologies can transform our world for the better. Nothing is too crazy. One of the most influential and inspiring forces of socially-grounded tech in my life was the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Tech4Good Lab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ", where I was a Fellow and worked as a UX Researcher and Designer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutBlurbsComponent_div_1_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " I love to thinking about how images can allow us to exist in our bodies with joy, power, vulnerability, and love. If you're curious, you can check out my photography portfolio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutBlurbsComponent_div_1_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blurb_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blurb_r9.description);
} }
function AboutBlurbsComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AboutBlurbsComponent_div_1_div_4_div_7_Template, 6, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutBlurbsComponent_div_1_div_4_div_8_Template, 6, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AboutBlurbsComponent_div_1_div_4_div_9_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blurb_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blurb_r9.imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blurb_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", blurb_r9.id == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", blurb_r9.id == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", blurb_r9.id != 1);
} }
function AboutBlurbsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CHAT WITH ME ABOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AboutBlurbsComponent_div_1_div_4_Template, 10, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.blurbs);
} }
class AboutBlurbsComponent {
    constructor() {
        this.blurbs = _main_pages_directory__WEBPACK_IMPORTED_MODULE_1__["BLURB"];
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].isMobile;
    }
    ngOnInit() {
    }
}
AboutBlurbsComponent.ɵfac = function AboutBlurbsComponent_Factory(t) { return new (t || AboutBlurbsComponent)(); };
AboutBlurbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutBlurbsComponent, selectors: [["app-about-blurbs"]], decls: 2, vars: 2, consts: [["class", "full-container", 4, "ngIf"], ["class", "full-container-mobile", 4, "ngIf"], [1, "full-container"], [1, "blurbs-container"], [1, "chat-title"], ["class", "single-blurb", 4, "ngFor", "ngForOf"], [1, "single-blurb"], [1, "title-container"], [1, "title-img"], [1, "words-container"], [1, "blurb-title"], ["class", "blurb-description", 4, "ngIf"], [1, "blurb-description"], ["href", "https://tech4good.soe.ucsc.edu/", "target", "_blank"], ["href", "https://taylormcpherson.myportfolio.com/", "target", "_blank"], [1, "full-container-mobile"]], template: function AboutBlurbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AboutBlurbsComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutBlurbsComponent_div_1_Template, 5, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".full-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin-left: 2em;\n}\n\n.blurbs-container[_ngcontent-%COMP%] {\n    margin-top: 2em;\n    color: #828282;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    padding-left: 8%;\n    padding-right: 10%;\n}\n\n.chat-title[_ngcontent-%COMP%] {\n    font-size: .8em;\n    display: flex;\n    color: #929292;\n    font-weight: 600;\n    margin-bottom: -1em;\n}\n\n.single-blurb[_ngcontent-%COMP%] {\n    margin-top: 2em;\n}\n\n.title-img[_ngcontent-%COMP%] {\n    font-size: 2em;\n    display: flex;\n    align-self: flex-start;\n    margin-top: -.1em;\n}\n\n.title-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    justify-content: center;\n}\n\n.words-container[_ngcontent-%COMP%] {\n    margin-left: 2em;\n}\n\n.blurb-title[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n    font-weight: 600;\n}\n\n.blurb-description[_ngcontent-%COMP%] {\n    font-size: 1.1em;\n    font-weight: 300;\n    margin-top: .4em;\n}\n\n\n\n.full-container-mobile[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin: 0 1em 0 0;\n    padding: 0;\n}\n\n.full-container-mobile[_ngcontent-%COMP%]   .blurbs-container[_ngcontent-%COMP%] {\n    color: #828282;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    padding: 0;\n}\n\n.full-container-mobile[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%] {\n    font-size: .7em;\n    font-weight: 600;\n    color: #929292;\n    margin: 0 0 -2em 0;\n}\n\n.full-container-mobile[_ngcontent-%COMP%]   .single-blurb[_ngcontent-%COMP%] {\n    margin-top: 2em;\n}\n\n.full-container-mobile[_ngcontent-%COMP%]   .title-img[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n}\n\n.full-container-mobile[_ngcontent-%COMP%]   .words-container[_ngcontent-%COMP%] {\n    margin-left: 1em;\n}\n\n.full-container-mobile[_ngcontent-%COMP%]   .blurb-title[_ngcontent-%COMP%] {\n    font-size: 1.1em;\n    font-weight: 600;\n}\n\n.full-container-mobile[_ngcontent-%COMP%]   .blurb-description[_ngcontent-%COMP%] {\n    font-size: 1em;\n    font-weight: 300;\n    margin-top: .4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQtYmx1cmJzL2Fib3V0LWJsdXJicy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFHQSxxQkFBcUI7O0FBRXJCO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC1ibHVyYnMvYWJvdXQtYmx1cmJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbn1cblxuLmJsdXJicy1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgcGFkZGluZy1sZWZ0OiA4JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG5cbi5jaGF0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogIzkyOTI5MjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IC0xZW07XG59XG5cbi5zaW5nbGUtYmx1cmIge1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuLnRpdGxlLWltZyB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi10b3A6IC0uMWVtO1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud29yZHMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xufVxuXG4uYmx1cmItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJsdXJiLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luLXRvcDogLjRlbTtcbn1cblxuXG4vKi0tLS0tLW1vYmlsZS0tLS0tLSovXG5cbi5mdWxsLWNvbnRhaW5lci1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIDFlbSAwIDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmZ1bGwtY29udGFpbmVyLW1vYmlsZSAuYmx1cmJzLWNvbnRhaW5lciB7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5mdWxsLWNvbnRhaW5lci1tb2JpbGUgLmNoYXQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjOTI5MjkyO1xuICAgIG1hcmdpbjogMCAwIC0yZW0gMDtcbn1cblxuLmZ1bGwtY29udGFpbmVyLW1vYmlsZSAuc2luZ2xlLWJsdXJiIHtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG59XG5cbi5mdWxsLWNvbnRhaW5lci1tb2JpbGUgLnRpdGxlLWltZyB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuLmZ1bGwtY29udGFpbmVyLW1vYmlsZSAud29yZHMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4uZnVsbC1jb250YWluZXItbW9iaWxlIC5ibHVyYi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZnVsbC1jb250YWluZXItbW9iaWxlIC5ibHVyYi1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW4tdG9wOiAuNGVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutBlurbsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-blurbs',
                templateUrl: './about-blurbs.component.html',
                styleUrls: ['./about-blurbs.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Q0x9":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ResumeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResumeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ResumeComponent {
    constructor() {
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].isMobile;
    }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 2, vars: 2, consts: [["class", "resume-container", 4, "ngIf"], ["class", "resume-container-mobile", 4, "ngIf"], [1, "resume-container"], ["src", "./assets/img/resume.png", "width", "60%"], [1, "download-container"], [1, "download-box"], ["href", "./assets/docs/resume.pdf", "target", "_blank", 1, "download-button"], [1, "resume-container-mobile"], ["src", "./assets/img/resume.png", "width", "100%"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResumeComponent_div_0_Template, 6, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResumeComponent_div_1_Template, 6, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".resume-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\nimg[_ngcontent-%COMP%] {\n    display: flex;\n    align-self: center;\n    margin-top: -2em;\n}\n\n.download-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-self: center;\n    width: 54%;\n}\n\n.download-box[_ngcontent-%COMP%] {\n    height: 2em;\n    width: 6em;\n    border: 1px solid #7F93FF;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-self: center;\n    border-radius: 1em;\n}\n\n.download-button[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: #7F93FF;\n    display: flex;\n}\n\n.download-box[_ngcontent-%COMP%]:hover, .download-box[_ngcontent-%COMP%]:hover   .download-button[_ngcontent-%COMP%] {\n    background: #7F93FF;\n    color: white;\n    cursor: pointer;\n    opacity: 1;\n}\n\n.download-button[_ngcontent-%COMP%]:hover::before {\n    content: none;\n}\n\n\n\n.resume-container-mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 0;\n}\n\n.resume-container-mobile[_ngcontent-%COMP%]   .download-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 1em 0 0 0;\n    display: flex;\n    justify-content: center;\n}\n\n.resume-container-mobile[_ngcontent-%COMP%]   .download-box[_ngcontent-%COMP%] {\n    font-size: .9em;\n    height: 2em;\n    width: 6em;\n    border: 1px solid #7F93FF;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-self: center;\n    border-radius: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUdBLGlCQUFpQjs7QUFFakI7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdW1lLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC0yZW07XG59XG5cbi5kb3dubG9hZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiA1NCU7XG59XG5cbi5kb3dubG9hZC1ib3gge1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiA2ZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdGOTNGRjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cblxuLmRvd25sb2FkLWJ1dHRvbiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjN0Y5M0ZGO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kb3dubG9hZC1ib3g6aG92ZXIsXG4uZG93bmxvYWQtYm94OmhvdmVyIC5kb3dubG9hZC1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICM3RjkzRkY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uZG93bmxvYWQtYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IG5vbmU7XG59XG5cblxuLyotLS0tbW9iaWxlLS0tICovXG5cbi5yZXN1bWUtY29udGFpbmVyLW1vYmlsZSBpbWcge1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5yZXN1bWUtY29udGFpbmVyLW1vYmlsZSAuZG93bmxvYWQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmVzdW1lLWNvbnRhaW5lci1tb2JpbGUgLmRvd25sb2FkLWJveCB7XG4gICAgZm9udC1zaXplOiAuOWVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiA2ZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdGOTNGRjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QjaE":
/*!****************************************************!*\
  !*** ./src/app/scroll-top/scroll-top.component.ts ***!
  \****************************************************/
/*! exports provided: ScrollTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function() { return ScrollTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "show-scrollTop": a0 }; };
class ScrollTopComponent {
    constructor(document) {
        this.document = document;
    }
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        }
        else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }
    ngOnInit() {
        console.log(this.windowScrolled);
    }
}
ScrollTopComponent.ɵfac = function ScrollTopComponent_Factory(t) { return new (t || ScrollTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
ScrollTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollTopComponent, selectors: [["app-scroll-top"]], hostBindings: function ScrollTopComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollTopComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 3, consts: [[1, "scroll-container", 3, "ngClass"], ["data-toggle", "button", "aria-pressed", "true", 1, "scroll-button", "btn", "active", 3, "click"], [1, "fas", "fa-arrow-up"]], template: function ScrollTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollTopComponent_Template_button_click_1_listener() { return ctx.scrollTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.windowScrolled));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".scroll-container[_ngcontent-%COMP%] {\n    position: fixed;\n    margin-left: 90%;\n    margin-top: 18.5%;\n    opacity: 0;\n    transition: all .2s ease-in-out;\n}\n\n.scroll-button[_ngcontent-%COMP%] {\n    width: 2.5em;\n    height: 2.6em;\n    border: 1px solid #F4F4F4;\n    border-radius: 2em;\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    transition: all .2s ease-in-out;\n    color: #828282;\n    z-index: 0;\n    background-color: #F4F4F4;\n}\n\n.show-scrollTop[_ngcontent-%COMP%] {\n    opacity: 1;\n    transition: all .2s ease-in-out;\n}\n\n.scroll-button[_ngcontent-%COMP%]:hover, .scroll-button[_ngcontent-%COMP%]:focus {\n    cursor: pointer;\n    background-color: #7F93FF;\n    color: #F4F4F4;\n}\n\n.scroll-button[_ngcontent-%COMP%]:not(:focus-visible) {\n    outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nyb2xsLXRvcC9zY3JvbGwtdG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsK0JBQStCO0FBQ25DOztBQUVBOztJQUVJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zY3JvbGwtdG9wL3Njcm9sbC10b3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luLWxlZnQ6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAxOC41JTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zY3JvbGwtYnV0dG9uIHtcbiAgICB3aWR0aDogMi41ZW07XG4gICAgaGVpZ2h0OiAyLjZlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjRGNEY0O1xuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gICAgei1pbmRleDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xufVxuXG4uc2hvdy1zY3JvbGxUb3Age1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnNjcm9sbC1idXR0b246aG92ZXIsXG4uc2Nyb2xsLWJ1dHRvbjpmb2N1cyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3RjkzRkY7XG4gICAgY29sb3I6ICNGNEY0RjQ7XG59XG5cbi5zY3JvbGwtYnV0dG9uOm5vdCg6Zm9jdXMtdmlzaWJsZSkge1xuICAgIG91dGxpbmU6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scroll-top',
                templateUrl: './scroll-top.component.html',
                styleUrls: ['./scroll-top.component.css']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', []]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, GlobalConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConstants", function() { return GlobalConstants; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-scroll-top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'Taylor McPherson';
        this.isMobile = (GlobalConstants.screenWidth < 500);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [["class", "web-app-component", 4, "ngIf"], ["class", "mobile-app-component", 4, "ngIf"], [1, "web-app-component"], [1, "mobile-app-component"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 4, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, styles: ["body.web-app-component[_ngcontent-%COMP%] {\n  margin: 4em;\n}\n\nbody.mobile-app-component[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkud2ViLWFwcC1jb21wb25lbnQge1xuICBtYXJnaW46IDRlbTtcbn1cblxuYm9keS5tb2JpbGUtYXBwLWNvbXBvbmVudCB7XG4gIG1hcmdpbjogMDtcbn1cbiJdfQ== */"], data: { animation: [
        //animation triggers go here
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                animations: [
                //animation triggers go here
                ]
            }]
    }], null, null); })();
class GlobalConstants {
}
GlobalConstants.screenWidth = window.innerWidth;
GlobalConstants.isMobile = (GlobalConstants.screenWidth < 500);


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _work_work_intro_work_intro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work/work-intro/work-intro.component */ "JAMj");
/* harmony import */ var _work_work_cards_work_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work/work-cards/work-cards.component */ "Hi24");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _about_about_intro_about_intro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about-intro/about-intro.component */ "wk57");
/* harmony import */ var _about_about_blurbs_about_blurbs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about-blurbs/about-blurbs.component */ "PYks");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _work_work_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./work/work-component.component */ "OCZt");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resume/resume.component */ "Q0x9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-embed-video */ "OjaE");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _case_study_critical_design_critical_design_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./case-study/critical-design/critical-design.component */ "NDr0");
/* harmony import */ var _case_study_group_scheduling_group_scheduling_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./case-study/group-scheduling/group-scheduling.component */ "O7Zi");
/* harmony import */ var _case_study_apprenticeship_learning_apprenticeship_learning_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./case-study/apprenticeship-learning/apprenticeship-learning.component */ "Hsom");
/* harmony import */ var _case_study_playground_playground_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./case-study/playground/playground.component */ "aTwx");
/* harmony import */ var _case_footer_case_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./case-footer/case-footer.component */ "nI2n");
/* harmony import */ var _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scroll-top/scroll-top.component */ "QjaE");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "tyNb");




























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            ngx_embed_video__WEBPACK_IMPORTED_MODULE_15__["EmbedVideo"].forRoot(),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _work_work_intro_work_intro_component__WEBPACK_IMPORTED_MODULE_4__["WorkIntroComponent"],
        _work_work_cards_work_cards_component__WEBPACK_IMPORTED_MODULE_5__["WorkCardsComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
        _about_about_intro_about_intro_component__WEBPACK_IMPORTED_MODULE_7__["AboutIntroComponent"],
        _about_about_blurbs_about_blurbs_component__WEBPACK_IMPORTED_MODULE_8__["AboutBlurbsComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _work_work_component_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponentComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
        _resume_resume_component__WEBPACK_IMPORTED_MODULE_13__["ResumeComponent"],
        _case_study_critical_design_critical_design_component__WEBPACK_IMPORTED_MODULE_16__["CriticalDesignComponent"],
        _case_study_group_scheduling_group_scheduling_component__WEBPACK_IMPORTED_MODULE_17__["GroupSchedulingComponent"],
        _case_study_apprenticeship_learning_apprenticeship_learning_component__WEBPACK_IMPORTED_MODULE_18__["ApprenticeshipLearningComponent"],
        _case_study_playground_playground_component__WEBPACK_IMPORTED_MODULE_19__["PlaygroundComponent"],
        _case_footer_case_footer_component__WEBPACK_IMPORTED_MODULE_20__["CaseFooterComponent"],
        _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_21__["ScrollTopComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], ngx_embed_video__WEBPACK_IMPORTED_MODULE_15__["EmbedVideo"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _work_work_intro_work_intro_component__WEBPACK_IMPORTED_MODULE_4__["WorkIntroComponent"],
                    _work_work_cards_work_cards_component__WEBPACK_IMPORTED_MODULE_5__["WorkCardsComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                    _about_about_intro_about_intro_component__WEBPACK_IMPORTED_MODULE_7__["AboutIntroComponent"],
                    _about_about_blurbs_about_blurbs_component__WEBPACK_IMPORTED_MODULE_8__["AboutBlurbsComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _work_work_component_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponentComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_13__["ResumeComponent"],
                    _case_study_critical_design_critical_design_component__WEBPACK_IMPORTED_MODULE_16__["CriticalDesignComponent"],
                    _case_study_group_scheduling_group_scheduling_component__WEBPACK_IMPORTED_MODULE_17__["GroupSchedulingComponent"],
                    _case_study_apprenticeship_learning_apprenticeship_learning_component__WEBPACK_IMPORTED_MODULE_18__["ApprenticeshipLearningComponent"],
                    _case_study_playground_playground_component__WEBPACK_IMPORTED_MODULE_19__["PlaygroundComponent"],
                    _case_footer_case_footer_component__WEBPACK_IMPORTED_MODULE_20__["CaseFooterComponent"],
                    _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_21__["ScrollTopComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                    ngx_embed_video__WEBPACK_IMPORTED_MODULE_15__["EmbedVideo"].forRoot(),
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_23__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_l"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FaIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FaDuotoneIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FaLayersComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FaLayersTextComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FaLayersCounterComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FaStackComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FaStackItemSizeDirective"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
    _work_work_intro_work_intro_component__WEBPACK_IMPORTED_MODULE_4__["WorkIntroComponent"],
    _work_work_cards_work_cards_component__WEBPACK_IMPORTED_MODULE_5__["WorkCardsComponent"],
    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
    _about_about_intro_about_intro_component__WEBPACK_IMPORTED_MODULE_7__["AboutIntroComponent"],
    _about_about_blurbs_about_blurbs_component__WEBPACK_IMPORTED_MODULE_8__["AboutBlurbsComponent"],
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
    _work_work_component_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponentComponent"],
    _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
    _resume_resume_component__WEBPACK_IMPORTED_MODULE_13__["ResumeComponent"],
    _case_study_critical_design_critical_design_component__WEBPACK_IMPORTED_MODULE_16__["CriticalDesignComponent"],
    _case_study_group_scheduling_group_scheduling_component__WEBPACK_IMPORTED_MODULE_17__["GroupSchedulingComponent"],
    _case_study_apprenticeship_learning_apprenticeship_learning_component__WEBPACK_IMPORTED_MODULE_18__["ApprenticeshipLearningComponent"],
    _case_study_playground_playground_component__WEBPACK_IMPORTED_MODULE_19__["PlaygroundComponent"],
    _case_footer_case_footer_component__WEBPACK_IMPORTED_MODULE_20__["CaseFooterComponent"],
    _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_21__["ScrollTopComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_23__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["KeyValuePipe"]]);


/***/ }),

/***/ "aTwx":
/*!***************************************************************!*\
  !*** ./src/app/case-study/playground/playground.component.ts ***!
  \***************************************************************/
/*! exports provided: PlaygroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function() { return PlaygroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _case_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../case-directory */ "KBXg");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _case_footer_case_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../case-footer/case-footer.component */ "nI2n");






function PlaygroundComponent_div_0_section_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.description);
} }
function PlaygroundComponent_div_0_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlaygroundComponent_div_0_section_2_div_1_Template, 5, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r4.id == 4);
} }
function PlaygroundComponent_div_0_section_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r7.sectionDescrip, " ");
} }
function PlaygroundComponent_div_0_section_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " During the Summer of 2020, I designed and developed an online portfolio website for a good friend, who recently graduated college and is entering a career in journalism. You can view the shipped website ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlaygroundComponent_div_0_section_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " An excersize in front end development and user experience design. View the final project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ", as well as furhter documentation and discussion on the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "README");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](". ", p_r7.sectionDescrip, " ");
} }
function PlaygroundComponent_div_0_section_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r7.sectionImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PlaygroundComponent_div_0_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlaygroundComponent_div_0_section_3_div_4_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlaygroundComponent_div_0_section_3_div_5_Template, 4, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlaygroundComponent_div_0_section_3_div_6_Template, 8, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlaygroundComponent_div_0_section_3_div_7_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r7.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.sectionTitle == "Web Portfolio for a Journalist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.sectionTitle == "Web Portfolio for a Journalist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.sectionTitle == "The Great Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.sectionImg != "");
} }
function PlaygroundComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlaygroundComponent_div_0_section_2_Template, 2, 1, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlaygroundComponent_div_0_section_3_Template, 8, 5, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-case-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.intro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.play);
} }
function PlaygroundComponent_div_1_section_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r17.description);
} }
function PlaygroundComponent_div_1_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlaygroundComponent_div_1_section_3_div_1_Template, 5, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r17.id == 4);
} }
function PlaygroundComponent_div_1_section_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r20.sectionDescrip, " ");
} }
function PlaygroundComponent_div_1_section_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " During the Summer of 2020, I designed and developed an online portfolio website for a good friend, who recently graduated college and is entering a career in journalism. You can view the shipped website ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlaygroundComponent_div_1_section_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " An excersize in front end development and user experience design. View the final project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ", as well as furhter documentation and discussion on the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "README");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](". ", p_r20.sectionDescrip, " ");
} }
function PlaygroundComponent_div_1_section_4_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlaygroundComponent_div_1_section_4_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlaygroundComponent_div_1_section_4_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r20.sectionImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PlaygroundComponent_div_1_section_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlaygroundComponent_div_1_section_4_div_7_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlaygroundComponent_div_1_section_4_div_7_div_2_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlaygroundComponent_div_1_section_4_div_7_div_3_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r20.sectionTitle == "Quarantine Affirmations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r20.sectionTitle == "Looking into Prisons in Hawai\u2018i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r20.sectionTitle == "Web Portfolio for a Journalist");
} }
function PlaygroundComponent_div_1_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlaygroundComponent_div_1_section_4_div_4_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlaygroundComponent_div_1_section_4_div_5_Template, 4, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlaygroundComponent_div_1_section_4_div_6_Template, 8, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlaygroundComponent_div_1_section_4_div_7_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r20.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r20.sectionTitle != "Web Portfolio for a Journalist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r20.sectionTitle == "Web Portfolio for a Journalist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r20.sectionTitle == "The Great Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r20.sectionImg != "");
} }
function PlaygroundComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlaygroundComponent_div_1_section_3_Template, 2, 1, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlaygroundComponent_div_1_section_4_Template, 8, 5, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-case-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.intro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.play);
} }
class PlaygroundComponent {
    constructor() {
        this.intro = _case_directory__WEBPACK_IMPORTED_MODULE_1__["INTROS"];
        this.play = _case_directory__WEBPACK_IMPORTED_MODULE_1__["PLAYGROUND"];
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].isMobile;
    }
    ngOnInit() {
    }
}
PlaygroundComponent.ɵfac = function PlaygroundComponent_Factory(t) { return new (t || PlaygroundComponent)(); };
PlaygroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaygroundComponent, selectors: [["app-playground"]], decls: 2, vars: 2, consts: [["class", "outer-container", 4, "ngIf"], ["class", "mobile", 4, "ngIf"], [1, "outer-container"], [1, "main-container"], ["class", "intro", 4, "ngFor", "ngForOf"], ["class", "overview", 4, "ngFor", "ngForOf"], [1, "intro"], [4, "ngIf"], [1, "page-title"], [1, "description"], [1, "overview"], [1, "word-section"], [1, "title"], ["class", "section-descrip", 4, "ngIf"], ["class", "section-img", 4, "ngIf"], [1, "section-descrip"], ["href", "https://elizasiegel.github.io/", "target", "_blank"], ["href", "https://taylormcpherson.github.io/the-great-blog/", "target", "_blank"], ["href", "https://github.com/taylormcpherson/the-great-blog#readme", "target", "_blank"], [1, "section-img"], ["width", "100%", 3, "src"], [1, "mobile"], [1, "mobile-outer-container"], ["src", "./assets/img/play-affirmations-mobile.png", "width", "100%"], ["src", "./assets/img/play-prisons-mobile.png", "width", "100%"]], template: function PlaygroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlaygroundComponent_div_0_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlaygroundComponent_div_1_Template, 6, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _case_footer_case_footer_component__WEBPACK_IMPORTED_MODULE_4__["CaseFooterComponent"]], styles: [".outer-container[_ngcontent-%COMP%] {\n  margin: -2em 8em 4em 8em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main-container[_ngcontent-%COMP%] {\n  margin: 0 8em 0 8em;\n  font-size: 1.1em;\n  color: #4f4f4f;\n  font-weight: 300;\n  line-height: 1.8em;\n\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n  line-height: 2em;\n  font-weight: 600;\n  text-align: center;\n  color: #7F93FF;\n}\n.description[_ngcontent-%COMP%] {\n  text-align: left;\n  font-style: italic;\n  font-size: 1.2em;\n  margin: 0 0em 4em 1em;\n\n}\n.intro-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n}\nimg.intro[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.word-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 1em 0 6em 0;\n  justify-content: center;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: 600;\n  margin-bottom: 1em;\n}\n.section-img[_ngcontent-%COMP%], .section-descrip[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n.section-descrip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 500;\n  color: #5B7FFE;\n}\n.section-descrip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: .6;\n  cursor: pointer;\n}\n\n.mobile-outer-container[_ngcontent-%COMP%] {\n  margin: 2em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.mobile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  text-align: left;\n  display: flex;\n  line-height: 1.5em;\n}\n.mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n.mobile[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin: 0;\n}\n.mobile[_ngcontent-%COMP%]   .word-section[_ngcontent-%COMP%] {\n  margin-bottom: 3em;\n}\n.mobile[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n  font-size: 1em;\n}\n.mobile[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin: 0 0 3em 0;\n}\n.mobile[_ngcontent-%COMP%]   .process-title[_ngcontent-%COMP%] {\n  font-size: 1em;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzZS1zdHVkeS9wbGF5Z3JvdW5kL3BsYXlncm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2I7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCOztBQUVwQjtBQUNBLHNCQUFzQjtBQUN0QjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7O0FBRXZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBR0EsbUJBQW1CO0FBQ25CO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0FBQ1g7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY2FzZS1zdHVkeS9wbGF5Z3JvdW5kL3BsYXlncm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLXdlYi0tLSovXG4ub3V0ZXItY29udGFpbmVyIHtcbiAgbWFyZ2luOiAtMmVtIDhlbSA0ZW0gOGVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCA4ZW0gMCA4ZW07XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG5cbn1cbi8qLS0tLS0taW50cm8tLS0tLS0tLSovXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3RjkzRkY7XG59XG4uZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbjogMCAwZW0gNGVtIDFlbTtcblxufVxuLmludHJvLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5pbWcuaW50cm8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyotLS0tLW92ZXJ2aWV3LS0tLSovXG4ud29yZC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxZW0gMCA2ZW0gMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udGl0bGUge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5zZWN0aW9uLWltZywgLnNlY3Rpb24tZGVzY3JpcCB7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuLnNlY3Rpb24tZGVzY3JpcCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzVCN0ZGRTtcbn1cblxuLnNlY3Rpb24tZGVzY3JpcCBhOmhvdmVyIHtcbiAgb3BhY2l0eTogLjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4vKi0tLS0tbW9iaWxlLS0tLS0qL1xuLm1vYmlsZS1vdXRlci1jb250YWluZXIge1xuICBtYXJnaW46IDJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2JpbGUgaDIge1xuICBmb250LXNpemU6IDEuNGVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG5cbi5tb2JpbGUgaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4ubW9iaWxlIC5tYWluLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW46IDA7XG59XG5cbi5tb2JpbGUgLndvcmQtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbn1cblxuLm1vYmlsZSAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4ubW9iaWxlIC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW46IDAgMCAzZW0gMDtcbn1cblxuLm1vYmlsZSAucHJvY2Vzcy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaygroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playground',
                templateUrl: './playground.component.html',
                styleUrls: ['./playground.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _fortawesome_free_regular_svg_icons___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons/ */ "twK/");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







function FooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 2020 Taylor McPherson. Made with \u2764\uFE0Fin Santa Cruz.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faMail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faDrib);
} }
function FooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A9 2020 Taylor McPherson. Made with \u2764\uFE0F in Santa Cruz.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faMail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faDrib);
} }
class FooterComponent {
    constructor() {
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].isMobile;
        this.faMail = _fortawesome_free_regular_svg_icons___WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
        this.faLink = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLinkedinIn"];
        this.faDrib = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faDribbble"];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 2, consts: [["class", "footer-container", 4, "ngIf"], ["class", "footer-container-mobile", 4, "ngIf"], [1, "footer-container"], [1, "words"], [1, "icons"], ["href", "mailto:tmmcpher@ucsc.edu", "target", "_blank"], [3, "icon"], ["href", "https://www.linkedin.com/in/taylor-mcpherson/", "target", "_blank"], ["href", "https://dribbble.com/taylormcpherson", "target", "_blank"], [1, "footer-container-mobile"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_div_0_Template, 10, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_1_Template, 10, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  color: #929292;\n}\n.footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;;\n  margin: 8em 6em 2em 6em;\n  font-size: .92em;\n}\n.icons[_ngcontent-%COMP%] {\n  \n}\nfa-icon[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin: .6em;\n}\nfa-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #7F93FF;\n}\n*[_ngcontent-%COMP%]:hover {\n  cursor: default;\n}\n.footer-container-mobile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 4em 1em 2em 1em;\n  font-size: .8em;\n}\n.footer-container-mobile[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgY29sb3I6ICM5MjkyOTI7XG59XG4uZm9vdGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjs7XG4gIG1hcmdpbjogOGVtIDZlbSAyZW0gNmVtO1xuICBmb250LXNpemU6IC45MmVtO1xufVxuXG4uaWNvbnMge1xuICAvKm1hcmdpbi1sZWZ0OiAxNmVtOyovXG59XG5cbmZhLWljb24ge1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luOiAuNmVtO1xufVxuXG5mYS1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzdGOTNGRjtcbn1cblxuKjpob3ZlciB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmZvb3Rlci1jb250YWluZXItbW9iaWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogNGVtIDFlbSAyZW0gMWVtO1xuICBmb250LXNpemU6IC44ZW07XG59XG5cbi5mb290ZXItY29udGFpbmVyLW1vYmlsZSAuaWNvbnMge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nI2n":
/*!******************************************************!*\
  !*** ./src/app/case-footer/case-footer.component.ts ***!
  \******************************************************/
/*! exports provided: CaseFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseFooterComponent", function() { return CaseFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function CaseFooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "GROUP SCHEDULING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "APPRENTICESHIP LEARNING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ROBOT NANNYS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PLAYGROUND");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CaseFooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "GROUP SCHEDULING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "APPRENTICESHIP LEARNING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ROBOT NANNYS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "PLAYGROUND");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CaseFooterComponent {
    constructor() {
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].isMobile;
    }
    ngOnInit() {
    }
}
CaseFooterComponent.ɵfac = function CaseFooterComponent_Factory(t) { return new (t || CaseFooterComponent)(); };
CaseFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaseFooterComponent, selectors: [["app-case-footer"]], decls: 2, vars: 2, consts: [["class", "case-footer-container", 4, "ngIf"], ["class", "mobile", 4, "ngIf"], [1, "case-footer-container"], ["routerLink", "/group-scheduling", "routerLinkActive", "activePage", 1, "item"], ["routerLink", "/apprenticeship-learning", "routerLinkActive", "activePage", 1, "item"], ["routerLink", "/critical-design", "routerLinkActive", "activePage", 1, "item"], ["routerLink", "/side-projects", "routerLinkActive", "activePage", 1, "item"], [1, "mobile"], [1, "mobile-case-footer-container"]], template: function CaseFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CaseFooterComponent_div_0_Template, 9, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaseFooterComponent_div_1_Template, 10, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".case-footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: -3em;\n  margin-top: 3em;\n}\n*[_ngcontent-%COMP%] {\n  font-size: .92em;\n  font-weight: 600;\n}\n.item[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #929292;\n  margin-right: 2em;\n  margin-left: 2em;\n}\n.item[_ngcontent-%COMP%]:hover {\n  color: #A3B1FB;\n  cursor: pointer;\n}\n.activePage[_ngcontent-%COMP%] {\n  color: #4f4f4f;\n}\n\n.mobile[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.mobile-case-footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 4em -2em 0 -2em;\n  padding-top: 1em;\n  padding-bottom: .5em;\n  background-color: #5B7FFE;\n  opacity: .55;\n}\n.mobile[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  color: #FFFFFF;\n  margin-bottom: .5em;\n  font-weight: 400;\n}\n.mobile[_ngcontent-%COMP%]   .activePage[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzZS1mb290ZXIvY2FzZS1mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFHQSxpQkFBaUI7QUFDakI7RUFDRSxjQUFjO0FBQ2hCO0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2Nhc2UtZm9vdGVyL2Nhc2UtZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tV0VCLS0tLS0qL1xuLmNhc2UtZm9vdGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAtM2VtO1xuICBtYXJnaW4tdG9wOiAzZW07XG59XG5cbioge1xuICBmb250LXNpemU6IC45MmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaXRlbSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM5MjkyOTI7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xuICBtYXJnaW4tbGVmdDogMmVtO1xufVxuXG4uaXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjQTNCMUZCO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY3RpdmVQYWdlIHtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG5cblxuLyotLS0tTU9CSUxFLS0tLSovXG4ubW9iaWxlICoge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuXG4ubW9iaWxlLWNhc2UtZm9vdGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDRlbSAtMmVtIDAgLTJlbTtcbiAgcGFkZGluZy10b3A6IDFlbTtcbiAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QjdGRkU7XG4gIG9wYWNpdHk6IC41NTtcbn1cblxuLm1vYmlsZSAuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubW9iaWxlIC5hY3RpdmVQYWdlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaseFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-case-footer',
                templateUrl: './case-footer.component.html',
                styleUrls: ['./case-footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _work_work_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work/work-component.component */ "OCZt");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume/resume.component */ "Q0x9");
/* harmony import */ var _case_study_critical_design_critical_design_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./case-study/critical-design/critical-design.component */ "NDr0");
/* harmony import */ var _case_study_group_scheduling_group_scheduling_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./case-study/group-scheduling/group-scheduling.component */ "O7Zi");
/* harmony import */ var _case_study_apprenticeship_learning_apprenticeship_learning_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./case-study/apprenticeship-learning/apprenticeship-learning.component */ "Hsom");
/* harmony import */ var _case_study_playground_playground_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./case-study/playground/playground.component */ "aTwx");











const routes = [
    { path: 'work', component: _work_work_component_component__WEBPACK_IMPORTED_MODULE_3__["WorkComponentComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"] },
    { path: 'critical-design', component: _case_study_critical_design_critical_design_component__WEBPACK_IMPORTED_MODULE_5__["CriticalDesignComponent"] },
    { path: 'group-scheduling', component: _case_study_group_scheduling_group_scheduling_component__WEBPACK_IMPORTED_MODULE_6__["GroupSchedulingComponent"] },
    { path: 'apprenticeship-learning', component: _case_study_apprenticeship_learning_apprenticeship_learning_component__WEBPACK_IMPORTED_MODULE_7__["ApprenticeshipLearningComponent"] },
    { path: 'side-projects', component: _case_study_playground_playground_component__WEBPACK_IMPORTED_MODULE_8__["PlaygroundComponent"] },
    { path: '', redirectTo: '/work', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wk57":
/*!************************************************************!*\
  !*** ./src/app/about/about-intro/about-intro.component.ts ***!
  \************************************************************/
/*! exports provided: AboutIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutIntroComponent", function() { return AboutIntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AboutIntroComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Currently working as a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Front End Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lifeblue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ". \uD83C\uDF89 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutIntroComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Currently working as a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Front End Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lifeblue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ". \uD83C\uDF89 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutIntroComponent {
    constructor() {
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].isMobile;
    }
    ngOnInit() {
    }
}
AboutIntroComponent.ɵfac = function AboutIntroComponent_Factory(t) { return new (t || AboutIntroComponent)(); };
AboutIntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutIntroComponent, selectors: [["app-about-intro"]], decls: 2, vars: 2, consts: [["class", "about-intro-container", 4, "ngIf"], ["class", "about-intro-container-mobile", 4, "ngIf"], [1, "about-intro-container"], [1, "school", "highlight"], ["href", "https://lifeblue.com/", "target", "_blank", 1, "major", "highlight"], [1, "about-intro-container-mobile"]], template: function AboutIntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AboutIntroComponent_div_0_Template, 9, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutIntroComponent_div_1_Template, 9, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n    font-weight: 300;\n    color: #828282;\n    cursor: default;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n}\n\n.highlight[_ngcontent-%COMP%] {\n    color: #7F93FF;\n    font-weight: 600;\n}\n\n.about-intro-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    margin-left: 6.5em;\n}\n\n\n\n.about-intro-container-mobile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n    width: 100%;\n    margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQtaW50cm8vYWJvdXQtaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUdBLGlCQUFpQjs7QUFFakI7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC1pbnRyby9hYm91dC1pbnRyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDEuNmVtO1xufVxuXG4uaGlnaGxpZ2h0IHtcbiAgICBjb2xvcjogIzdGOTNGRjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYWJvdXQtaW50cm8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi1sZWZ0OiA2LjVlbTtcbn1cblxuXG4vKi0tLS1tb2JpbGUtLS0tKi9cblxuLmFib3V0LWludHJvLWNvbnRhaW5lci1tb2JpbGUgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutIntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-intro',
                templateUrl: './about-intro.component.html',
                styleUrls: ['./about-intro.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map