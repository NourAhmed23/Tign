(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n\n\n<main role=\"main\" class=\"container mt-5 pt-5 text-center\">\n\n     <!-- <div class=\"starter-template\">\n      <h1>Bootstrap starter template</h1>\n      <p class=\"lead\">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>\n    </div> -->\n    <router-outlet></router-outlet>\n\n  </main>\n\n\n\n\n\n\n\n\n\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n<router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/my-orders/my-orders.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/my-orders/my-orders.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>my-orders works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" routerLink=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" routerLink=\"/shoping-cart\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"/log-in\">Log In <span class=\"sr-only\">(current)</span></a></li>\n      <li ngbDropdown class=\"nav-item dropdown show\">\n        <a class=\"nav-link dropdown-toggle \" ngbDropdownToggle id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" >Dropdown</a>\n        <div ngbDropdownMenu class=\"dropdown-menu show\" aria-labelledby=\"dropdown01\">\n          <a class=\"dropdown-item\" routerLink=\"/orders\">My Orders</a>\n          <a class=\"dropdown-item\" routerLink=\"/admin/orders\">Manage Orders</a>\n          <a class=\"dropdown-item\" routerLink=\"/admin/products\">Manage Products</a>\n        </div>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/products/products.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/products/products.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>products works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\">\n    <img class=\"mb-4\" src=\"/docs/4.3/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n    <div class=\"checkbox mb-3\">\n      <label>\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label>\n    </div>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n    <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2019</p>\n  </form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myAdmin/admin-orders./admin-orders..component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myAdmin/admin-orders./admin-orders..component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>admin-orders. works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myAdmin/admin-products/admin-products.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myAdmin/admin-products/admin-products.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>admin-products works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shoping-cart/shoping-cart.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shoping-cart/shoping-cart.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"py-5 text-center\">\n      <img class=\"d-block mx-auto mb-4\" src=\"/docs/4.3/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\n      <h2>Checkout form</h2>\n      <p class=\"lead\">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-4 order-md-2 mb-4\">\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n          <span class=\"text-muted\">Your cart</span>\n          <span class=\"badge badge-secondary badge-pill\">3</span>\n        </h4>\n        <ul class=\"list-group mb-3\">\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n            <div>\n              <h6 class=\"my-0\">Product name</h6>\n              <small class=\"text-muted\">Brief description</small>\n            </div>\n            <span class=\"text-muted\">$12</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n            <div>\n              <h6 class=\"my-0\">Second product</h6>\n              <small class=\"text-muted\">Brief description</small>\n            </div>\n            <span class=\"text-muted\">$8</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n            <div>\n              <h6 class=\"my-0\">Third item</h6>\n              <small class=\"text-muted\">Brief description</small>\n            </div>\n            <span class=\"text-muted\">$5</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between bg-light\">\n            <div class=\"text-success\">\n              <h6 class=\"my-0\">Promo code</h6>\n              <small>EXAMPLECODE</small>\n            </div>\n            <span class=\"text-success\">-$5</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between\">\n            <span>Total (USD)</span>\n            <strong>$20</strong>\n          </li>\n        </ul>\n\n        <form class=\"card p-2\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Promo code\">\n            <div class=\"input-group-append\">\n              <button type=\"submit\" class=\"btn btn-secondary\">Redeem</button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-md-8 order-md-1\">\n        <h4 class=\"mb-3\">Billing address</h4>\n        <form class=\"needs-validation\" novalidate>\n          <div class=\"row\">\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"firstName\">First name</label>\n              <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required>\n              <div class=\"invalid-feedback\">\n                Valid first name is required.\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"lastName\">Last name</label>\n              <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required>\n              <div class=\"invalid-feedback\">\n                Valid last name is required.\n              </div>\n            </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label for=\"username\">Username</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">@</span>\n              </div>\n              <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" required>\n              <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                Your username is required.\n              </div>\n            </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">\n            <div class=\"invalid-feedback\">\n              Please enter a valid email address for shipping updates.\n            </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label for=\"address\">Address</label>\n            <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required>\n            <div class=\"invalid-feedback\">\n              Please enter your shipping address.\n            </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\n            <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\">\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-5 mb-3\">\n              <label for=\"country\">Country</label>\n              <select class=\"custom-select d-block w-100\" id=\"country\" required>\n                <option value=\"\">Choose...</option>\n                <option>United States</option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Please select a valid country.\n              </div>\n            </div>\n            <div class=\"col-md-4 mb-3\">\n              <label for=\"state\">State</label>\n              <select class=\"custom-select d-block w-100\" id=\"state\" required>\n                <option value=\"\">Choose...</option>\n                <option>California</option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Please provide a valid state.\n              </div>\n            </div>\n            <div class=\"col-md-3 mb-3\">\n              <label for=\"zip\">Zip</label>\n              <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required>\n              <div class=\"invalid-feedback\">\n                Zip code required.\n              </div>\n            </div>\n          </div>\n          <hr class=\"mb-4\">\n          <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\n            <label class=\"custom-control-label\" for=\"same-address\">Shipping address is the same as my billing address</label>\n          </div>\n          <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\n            <label class=\"custom-control-label\" for=\"save-info\">Save this information for next time</label>\n          </div>\n          <hr class=\"mb-4\">\n\n          <h4 class=\"mb-3\">Payment</h4>\n\n          <div class=\"d-block my-3\">\n            <div class=\"custom-control custom-radio\">\n              <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\n              <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n              <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n              <label class=\"custom-control-label\" for=\"paypal\">PayPal</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"cc-name\">Name on card</label>\n              <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>\n              <small class=\"text-muted\">Full name as displayed on card</small>\n              <div class=\"invalid-feedback\">\n                Name on card is required\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"cc-number\">Credit card number</label>\n              <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>\n              <div class=\"invalid-feedback\">\n                Credit card number is required\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3 mb-3\">\n              <label for=\"cc-expiration\">Expiration</label>\n              <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\n              <div class=\"invalid-feedback\">\n                Expiration date required\n              </div>\n            </div>\n            <div class=\"col-md-3 mb-3\">\n              <label for=\"cc-cvv\">CVV</label>\n              <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\n              <div class=\"invalid-feedback\">\n                Security code required\n              </div>\n            </div>\n          </div>\n          <hr class=\"mb-4\">\n          <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Continue to checkout</button>\n        </form>\n      </div>\n    </div>\n\n    <footer class=\"my-5 pt-5 text-muted text-center text-small\">\n      <p class=\"mb-1\">&copy; 2017-2019 Company Name</p>\n      <ul class=\"list-inline\">\n        <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\n        <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n        <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\n      </ul>\n    </footer>\n  </div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _myAdmin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myAdmin/admin-orders./admin-orders..component */ "./src/app/myAdmin/admin-orders./admin-orders..component.ts");
/* harmony import */ var _myAdmin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myAdmin/admin-products/admin-products.component */ "./src/app/myAdmin/admin-products/admin-products.component.ts");
/* harmony import */ var _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/my-orders/my-orders.component */ "./src/app/components/my-orders/my-orders.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shoping-cart/shoping-cart.component */ "./src/app/shoping-cart/shoping-cart.component.ts");









var routes = [
    { path: 'shoping-cart', component: _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_8__["ShopingCartComponent"] },
    { path: 'products', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
    { path: 'orders', component: _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_4__["MyOrdersComponent"] },
    { path: 'admin/orders', component: _myAdmin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_2__["AdminOrdersComponent"] },
    { path: 'admin/products', component: _myAdmin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_3__["AdminProductsComponent"] },
    { path: 'log-in', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tigon';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/my-orders/my-orders.component */ "./src/app/components/my-orders/my-orders.component.ts");
/* harmony import */ var _myAdmin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./myAdmin/admin-products/admin-products.component */ "./src/app/myAdmin/admin-products/admin-products.component.ts");
/* harmony import */ var _myAdmin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./myAdmin/admin-orders./admin-orders..component */ "./src/app/myAdmin/admin-orders./admin-orders..component.ts");
/* harmony import */ var _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shoping-cart/shoping-cart.component */ "./src/app/shoping-cart/shoping-cart.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
                _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_8__["MyOrdersComponent"],
                _myAdmin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_9__["AdminProductsComponent"],
                _myAdmin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_10__["AdminOrdersComponent"],
                _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_11__["ShopingCartComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/my-orders/my-orders.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/my-orders/my-orders.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/my-orders/my-orders.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/my-orders/my-orders.component.ts ***!
  \*************************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent() {
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    MyOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! raw-loader!./my-orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/components/my-orders/my-orders.component.css")]
        })
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle{\r\n    cursor:pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tdG9nZ2xle1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/products/products.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/components/products/products.component.css")]
        })
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/myAdmin/admin-orders./admin-orders..component.css":
/*!*******************************************************************!*\
  !*** ./src/app/myAdmin/admin-orders./admin-orders..component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215QWRtaW4vYWRtaW4tb3JkZXJzLi9hZG1pbi1vcmRlcnMuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/myAdmin/admin-orders./admin-orders..component.ts":
/*!******************************************************************!*\
  !*** ./src/app/myAdmin/admin-orders./admin-orders..component.ts ***!
  \******************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminOrdersComponent = /** @class */ (function () {
    function AdminOrdersComponent() {
    }
    AdminOrdersComponent.prototype.ngOnInit = function () {
    };
    AdminOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-orders.',
            template: __webpack_require__(/*! raw-loader!./admin-orders..component.html */ "./node_modules/raw-loader/index.js!./src/app/myAdmin/admin-orders./admin-orders..component.html"),
            styles: [__webpack_require__(/*! ./admin-orders..component.css */ "./src/app/myAdmin/admin-orders./admin-orders..component.css")]
        })
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "./src/app/myAdmin/admin-products/admin-products.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/myAdmin/admin-products/admin-products.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215QWRtaW4vYWRtaW4tcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/myAdmin/admin-products/admin-products.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/myAdmin/admin-products/admin-products.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent() {
    }
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__(/*! raw-loader!./admin-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/myAdmin/admin-products/admin-products.component.html"),
            styles: [__webpack_require__(/*! ./admin-products.component.css */ "./src/app/myAdmin/admin-products/admin-products.component.css")]
        })
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/shoping-cart/shoping-cart.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shoping-cart/shoping-cart.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BpbmctY2FydC9zaG9waW5nLWNhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shoping-cart/shoping-cart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shoping-cart/shoping-cart.component.ts ***!
  \********************************************************/
/*! exports provided: ShopingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingCartComponent", function() { return ShopingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShopingCartComponent = /** @class */ (function () {
    function ShopingCartComponent() {
    }
    ShopingCartComponent.prototype.ngOnInit = function () {
    };
    ShopingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shoping-cart',
            template: __webpack_require__(/*! raw-loader!./shoping-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/shoping-cart/shoping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shoping-cart.component.css */ "./src/app/shoping-cart/shoping-cart.component.css")]
        })
    ], ShopingCartComponent);
    return ShopingCartComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MR-3OBAD ~_^\Desktop\tigon\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map