(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<my-nav></my-nav>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-nav/my-nav.component */ "./src/app/my-nav/my-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./first-page/first-page.component */ "./src/app/first-page/first-page.component.ts");
/* harmony import */ var _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./second-page/second-page.component */ "./src/app/second-page/second-page.component.ts");
/* harmony import */ var _third_page_third_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./third-page/third-page.component */ "./src/app/third-page/third-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'first-page', component: _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_8__["FirstPageComponent"] },
    { path: 'second-page', component: _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_9__["SecondPageComponent"] },
    { path: 'third-page', component: _third_page_third_page_component__WEBPACK_IMPORTED_MODULE_10__["ThirdPageComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_5__["MyNavComponent"],
                _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_8__["FirstPageComponent"],
                _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_9__["SecondPageComponent"],
                _third_page_third_page_component__WEBPACK_IMPORTED_MODULE_10__["ThirdPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/first-page/first-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/first-page/first-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n  max-width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}"

/***/ }),

/***/ "./src/app/first-page/first-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/first-page/first-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/first-page/first-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/first-page/first-page.component.ts ***!
  \****************************************************/
/*! exports provided: FirstPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageComponent", function() { return FirstPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstPageComponent = /** @class */ (function () {
    function FirstPageComponent() {
    }
    FirstPageComponent.prototype.ngOnInit = function () {
    };
    FirstPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first-page',
            template: __webpack_require__(/*! ./first-page.component.html */ "./src/app/first-page/first-page.component.html"),
            styles: [__webpack_require__(/*! ./first-page.component.css */ "./src/app/first-page/first-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FirstPageComponent);
    return FirstPageComponent;
}());



/***/ }),

/***/ "./src/app/my-nav/my-nav.component.css":
/*!*********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.html":
/*!**********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item href=\"/first-page\">First Page</a>\n      <a mat-list-item href=\"/second-page\">Second Page</a>\n      <a mat-list-item href=\"/third-page\">Third Page</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>RR Spark</span>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.ts":
/*!********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.ts ***!
  \********************************************/
/*! exports provided: MyNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavComponent", function() { return MyNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyNavComponent = /** @class */ (function () {
    function MyNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MyNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-nav',
            template: __webpack_require__(/*! ./my-nav.component.html */ "./src/app/my-nav/my-nav.component.html"),
            styles: [__webpack_require__(/*! ./my-nav.component.css */ "./src/app/my-nav/my-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], MyNavComponent);
    return MyNavComponent;
}());



/***/ }),

/***/ "./src/app/second-page/second-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/second-page/second-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}\r\naudio,canvas,video{display:inline-block}\r\naudio:not([controls]){display:none;height:0}\r\n[hidden]{display:none}\r\nhtml{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}\r\nbody{margin:0}\r\na:focus{outline:thin dotted}\r\na:active,a:hover{outline:0}\r\nh1{font-size:2em;margin:0.67em 0}\r\nabbr[title]{border-bottom:1px dotted}\r\nb,strong{font-weight:bold}\r\ndfn{font-style:italic}\r\nhr{box-sizing:content-box;height:0}\r\nmark{background:#ff0;color:#000}\r\ncode,kbd,pre,samp{font-family:monospace, serif;font-size:1em}\r\npre{white-space:pre-wrap}\r\nq{quotes:\"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\"}\r\nsmall{font-size:80%}\r\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\r\nsup{top:-0.5em}\r\nsub{bottom:-0.25em}\r\nimg{border:0}\r\nsvg:not(:root){overflow:hidden}\r\nfigure{margin:0}\r\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}\r\nlegend{border:0;padding:0}\r\nbutton,input,select,textarea{font-family:inherit;font-size:100%;margin:0}\r\nbutton,input{line-height:normal}\r\nbutton,select{text-transform:none}\r\nbutton,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}\r\nbutton[disabled],html input[disabled]{cursor:default}\r\ninput[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}\r\ninput[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}\r\ninput[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\r\nbutton::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}\r\ntextarea{overflow:auto;vertical-align:top}\r\ntable{border-collapse:collapse;border-spacing:0}\r\n/* Personal Over-ride */\r\n.pushRight {\r\n  margin-left: 15px;\r\n}\r\n.imageLeft {\r\n  float: left;\r\n  max-width: 175px;\r\n  margin-left: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n.featureImage {\r\n  margin: 10px;\r\n  width: 100%;\r\n}\r\n.mainTitle {\r\n  color: #6f8c9f;\r\n}\r\n/* =Clearfix \r\n-------------------------------------------------------------- */\r\n.row:before,.row:after,.clearfix:before,.clearfix:after{content:'';display:table}\r\n.row:after,.clearfix:after{clear:both}\r\n.row,.clearfix{zoom:1}\r\n/* \r\n-------------------------------------------------------------- */\r\n*{-ms-box-sizing:border-box;box-sizing:border-box}\r\nbody{font-size:100%;line-height:1.6875}\r\n.grid{margin:0 auto;max-width:1200px;width:100%}\r\nimg{max-width:100%;height:auto;display:block;margin-left:auto;margin-right:auto}\r\n.wfull{width:100%;max-width:100%}\r\n.w320{max-width:320px}\r\n.w640{max-width:640px}\r\n.w960{max-width:960px}\r\n.row{width:100%;margin-bottom:20px}\r\n.row .row{width:auto;margin:0 -20px}\r\n.c1{width:8.33%}\r\n.c2{width:16.66%}\r\n.c3{width:25%}\r\n.c4{width:33.33%}\r\n.c5{width:41.66%}\r\n.c6{width:50%}\r\n.c7{width:58.33%}\r\n.c8{width:66.66%}\r\n.c9{width:75%}\r\n.c10{width:83.33%}\r\n.c11{width:91.66%}\r\n.c12{width:100%}\r\n.c1,.c2,.c3,.c4,.c5,.c6,.c7,.c8,.c9,.c10,.c11,.c12{min-height:1px;float:left;padding-left:20px;padding-right:20px;position:relative;}\r\n.s1{margin-left:8.33%}\r\n.s2{margin-left:16.66%}\r\n.s3{margin-left:25%}\r\n.s4{margin-left:33.33%}\r\n.s5{margin-left:41.66%}\r\n.s6{margin-left:50%}\r\n.s7{margin-left:58.33%}\r\n.s8{margin-left:66.66%}\r\n.s9{margin-left:75%}\r\n.s10{margin-left:83.33%}\r\n.s11{margin-left:91.66%}\r\n.end{float:right!important}\r\n/* =Media query for 960 Screens - sets nested grids to 100%\r\n-------------------------------------------------------------- */\r\n@media only screen and (max-width:960px){\r\n.row .row .c1,.row .row .c2,.row .row .c3,.row .row .c4,.row .row .c5,.row .row .c6,.row .row .c7,.row .row .c8,.row .row .c9,.row .row .c10,.row .row .c11,.row .row .c12{width:100%;margin-bottom:20px}\r\n.row .row > div:last-child{margin-bottom:0 !important}\r\n}\r\n/* =Media query for iPad and tablets\r\n-------------------------------------------------------------- */\r\n@media handheld, only screen and (max-width: 768px), only screen and (max-device-width: 768px) and (orientation:portrait){\r\nbody{font-size:90%}\r\n.row{margin-bottom:0!important}\r\n.c1,.c2,.c3,.c4,.c5,.c6,.c7,.c8,.c9,.c10,.c11,.c12{width:100%;margin-right:0;margin-left:0;margin-bottom:20px}\r\n}"

/***/ }),

/***/ "./src/app/second-page/second-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/second-page/second-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"site-container\" class=\"grid\">\n\n  <header class=\"row\">\n    <h1 class=\"c12 mainTitle\">RR Spark Template</h1>\n  </header>\n  <hr class=\"mainTitle\">\n  \n  <div id=\"site-content\" role=\"main\">\n\n    <div class=\"row\">\n      <h2 class=\"pushRight mainTitle\">Main Article</h2>\n      <div class=\"c8\">\n        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper.\n      </div>\n      <div class=\"c4 end\">Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n      </div>\n    </div>\n    \n    <div class=\"row\">\n        <img  class=\"imageLeft\" src=\"http://images2.fanpop.com/image/photos/13900000/grassy-field-distant-mountains-beautiful-places-13908065-500-313.jpg\" alt=\"Grassy Field\">\n      <div class=\"c6 s3\">Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n      </div>\n    </div>\n    \n    <div class=\"row\">\n        <h2 class=\"pushRight mainTitle\">Secondary Article</h2>\n      <div class=\"c8\">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper.\n      </div>\n      <div class=\"c4 end\">\n        <div class=\"row\">\n          <div class=\"c6\">\n            Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n          </div>\n          <div class=\"c6 end\">\n            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\n          </div>\t\t\t\t\t\n        </div>\n        \n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"c4\">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper.\n      </div>\n      <div class=\"c4\">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper.\n      </div>\n      <div class=\"c4 end\">Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n      </div>\n    </div>\n\n  </div>\n  <img class=\"featureImage\" src=\"https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/e/ed/Forest-Banner-e1449148308183.jpg/revision/latest/scale-to-width-down/640?cb=20170219021146\" alt=\"forest\">\n  <footer class=\"row\">\n      <h2 class=\"pushRight mainTitle\">Final Information</h2>\n    <div class=\"c3\">Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n    </div>\n    <div class=\"c3\">Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n    </div>\n    \n    <div class=\"c3\">Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n    </div>\n    <div class=\"c3 end\">Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n    </div>\n\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/second-page/second-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/second-page/second-page.component.ts ***!
  \******************************************************/
/*! exports provided: SecondPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageComponent", function() { return SecondPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecondPageComponent = /** @class */ (function () {
    function SecondPageComponent() {
    }
    SecondPageComponent.prototype.ngOnInit = function () {
    };
    SecondPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-second-page',
            template: __webpack_require__(/*! ./second-page.component.html */ "./src/app/second-page/second-page.component.html"),
            styles: [__webpack_require__(/*! ./second-page.component.css */ "./src/app/second-page/second-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SecondPageComponent);
    return SecondPageComponent;
}());



/***/ }),

/***/ "./src/app/third-page/third-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/third-page/third-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  display: -ms-grid;\r\n  display: grid;    \r\n      -ms-grid-columns: 1fr 5px 1fr 5px 1fr 5px 1fr 5px 1fr 5px 1fr 5px 1fr 5px 1fr 5px 1fr 5px 1fr 5px 1fr 5px 1fr;    \r\n      grid-template-columns: repeat(12, 1fr);\r\n      -ms-grid-rows: 50px 5px 850px 5px 50px;\r\n      grid-template-rows: 50px 850px 50px;\r\n  grid-gap: 5px;\r\n      grid-template-areas:\r\n        \"h h h h h h h h h h h h\"\r\n        \"c c c c c c c c c c c c\"\r\n        \"f f f f f f f f f f f f\";\r\n}\r\n\r\n.header {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 23;\r\n  grid-area: h;\r\n  background: #6f8c9f;\r\n  color: white;\r\n  padding: 20px 0 20px 20px;\r\n}\r\n\r\n.content {\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 23;\r\n  grid-area: c;\r\n  background: #d3d3d3;\r\n  color: black;\r\n  padding: 20px;\r\n  height: 100%;\r\n}\r\n\r\n.footer {\r\n -ms-grid-row: 5;\r\n -ms-grid-column: 1;\r\n -ms-grid-column-span: 23;\r\n grid-area: f;\r\n background: #778899;\r\n color: white;\r\n padding: 20px;\r\n}"

/***/ }),

/***/ "./src/app/third-page/third-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/third-page/third-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"header\">NEWS</div>\n    <div class=\"content\">\n     <p>CONTENT 1</p>\n     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, velit? Ipsum neque eum eveniet enim voluptates eaque sequi saepe culpa rerum porro? Architecto illum saepe officia? Reiciendis architecto eius nemo?</p>\n     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, velit? Ipsum neque eum eveniet enim voluptates eaque sequi saepe culpa rerum porro? Architecto illum saepe officia? Reiciendis architecto eius nemo?</p>\n     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, velit? Ipsum neque eum eveniet enim voluptates eaque sequi saepe culpa rerum porro? Architecto illum saepe officia? Reiciendis architecto eius nemo?</p>\n     <p>CONTENT 2</p>\n     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, velit? Ipsum neque eum eveniet enim voluptates eaque sequi saepe culpa rerum porro? Architecto illum saepe officia? Reiciendis architecto eius nemo?</p>\n     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, velit? Ipsum neque eum eveniet enim voluptates eaque sequi saepe culpa rerum porro? Architecto illum saepe officia? Reiciendis architecto eius nemo?</p>\n     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, velit? Ipsum neque eum eveniet enim voluptates eaque sequi saepe culpa rerum porro? Architecto illum saepe officia? Reiciendis architecto eius nemo?</p>\n     <p>CONTENT 3</p>\n     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, velit? Ipsum neque eum eveniet enim voluptates eaque sequi saepe culpa rerum porro? Architecto illum saepe officia? Reiciendis architecto eius nemo?</p>\n     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, velit? Ipsum neque eum eveniet enim voluptates eaque sequi saepe culpa rerum porro? Architecto illum saepe officia? Reiciendis architecto eius nemo?</p>\n    </div>\n    <div class=\"footer\">FOOTER</div>\n  </div>"

/***/ }),

/***/ "./src/app/third-page/third-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/third-page/third-page.component.ts ***!
  \****************************************************/
/*! exports provided: ThirdPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPageComponent", function() { return ThirdPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThirdPageComponent = /** @class */ (function () {
    function ThirdPageComponent() {
    }
    ThirdPageComponent.prototype.ngOnInit = function () {
    };
    ThirdPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-third-page',
            template: __webpack_require__(/*! ./third-page.component.html */ "./src/app/third-page/third-page.component.html"),
            styles: [__webpack_require__(/*! ./third-page.component.css */ "./src/app/third-page/third-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThirdPageComponent);
    return ThirdPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AngularProjects\AppProjects\website-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map