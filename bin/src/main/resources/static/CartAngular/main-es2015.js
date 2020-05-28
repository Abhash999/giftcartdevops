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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <script src=\"/src/assets/js/jquery.scrollUp.min.js\"></script>\n\t<script src=\"assets/js/price-range.js\"></script>\n    <script src=\"assets/js/jquery.prettyPhoto.js\"></script>\n    <script src=\"assets/js/main.js\"></script> -->\n<app-header></app-header>\n<router-outlet></router-outlet>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart-page/cart-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart-page/cart-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta name=\"description\" content=\"\">\n        <meta name=\"author\" content=\"\">\n        <title>Login | E-Shopper</title>\n        <!-- <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\"> -->\n        <link href=\"assets/css/prettyPhoto.css\" rel=\"stylesheet\">\n        <link href=\"assets/css/price-range.css\" rel=\"stylesheet\">\n        <link href=\"assets/css/animate.css\" rel=\"stylesheet\">\n        <link href=\"assets/css/main.css\" rel=\"stylesheet\" >\n        <link href=\"assets/css/responsive.css\" rel=\"stylesheet\">\n        <!--[if lt IE 9]>\n        <script src=\"js/html5shiv.js\"></script>\n        <script src=\"js/respond.min.js\"></script>\n        <![endif]-->       \n        <link rel=\"shortcut icon\" href=\"assets/images/ico/favicon.ico\">\n        <link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"assets/images/ico/apple-touch-icon-144-precomposed.png\">\n        <link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"assets/images/ico/apple-touch-icon-114-precomposed.png\">\n        <link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"assets/images/ico/apple-touch-icon-72-precomposed.png\">\n        <link rel=\"apple-touch-icon-precomposed\" href=\"assets/images/ico/apple-touch-icon-57-precomposed.png\">\n    </head><!--/head-->\n    <body>\n        <section id=\"cart_items\">\n            <div class=\"container\">\n                <div class=\"breadcrumbs\">\n                    <ol class=\"breadcrumb\">\n                      <li><a href=\"#\">Home</a></li>\n                      <li class=\"active\">Shopping Cart</li>\n                    </ol>\n                </div>\n                <div class=\"table-responsive cart_info\">\n                    <table class=\"table table-condensed\">\n                        <thead>\n                            <tr class=\"cart_menu\">\n                                <td class=\"image\">Item</td>\n                                <td class=\"description\"></td>\n                                <td class=\"price\">Price</td>\n                                <td class=\"quantity\">Quantity</td>\n                                <td class=\"total\">Total</td>\n                                <td></td>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let product of cart_items\">\n                                <td class=\"cart_product\">\n                                    <a href=\"\"><img src=\"images/cart/one.png\" alt=\"\"></a>\n                                </td>\n                                <td class=\"cart_description\">\n                                    <h4><a href=\"\">{{product.description}}</a></h4>\n                                    <p>Web ID: 1089772</p>\n                                </td>\n                                <td class=\"cart_price\">\n                                    <p>RS{{product.price}}</p>\n                                </td>\n                                <td class=\"cart_quantity\">\n                                    <div class=\"cart_quantity_button\">\n                \n                                        <input class=\"cart_quantity_input\" type=\"text\" disabled name=\"quantity\" value=\"1\" >\n                                        \n                                    </div>\n                                </td>\n                                <td class=\"cart_total\">\n                                    <p class=\"cart_total_price\">{{product.price}}</p>\n                                </td>\n                                <td class=\"cart_delete\">\n                                    <a class=\"cart_quantity_delete\" href=\"\"><i class=\"fa fa-times\"></i></a>\n                                </td>\n                            </tr>\n    \n                            <!-- <tr>\n                                <td class=\"cart_product\">\n                                    <a href=\"\"><img src=\"images/cart/two.png\" alt=\"\"></a>\n                                </td>\n                                <td class=\"cart_description\">\n                                    <h4><a href=\"\">Colorblock Scuba</a></h4>\n                                    <p>Web ID: 1089772</p>\n                                </td>\n                                <td class=\"cart_price\">\n                                    <p>$59</p>\n                                </td>\n                                <td class=\"cart_quantity\">\n                                    <div class=\"cart_quantity_button\">\n                                        <a class=\"cart_quantity_up\" href=\"\"> + </a>\n                                        <input class=\"cart_quantity_input\" type=\"text\" name=\"quantity\" value=\"1\" autocomplete=\"off\" size=\"2\">\n                                        <a class=\"cart_quantity_down\" href=\"\"> - </a>\n                                    </div>\n                                </td>\n                                <td class=\"cart_total\">\n                                    <p class=\"cart_total_price\">$59</p>\n                                </td>\n                                <td class=\"cart_delete\">\n                                    <a class=\"cart_quantity_delete\" href=\"\"><i class=\"fa fa-times\"></i></a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"cart_product\">\n                                    <a href=\"\"><img src=\"images/cart/three.png\" alt=\"\"></a>\n                                </td>\n                                <td class=\"cart_description\">\n                                    <h4><a href=\"\">Colorblock Scuba</a></h4>\n                                    <p>Web ID: 1089772</p>\n                                </td>\n                                <td class=\"cart_price\">\n                                    <p>$59</p>\n                                </td>\n                                <td class=\"cart_quantity\">\n                                    <div class=\"cart_quantity_button\">\n                                        <a class=\"cart_quantity_up\" href=\"\"> + </a>\n                                        <input class=\"cart_quantity_input\" type=\"text\" name=\"quantity\" value=\"1\" autocomplete=\"off\" size=\"2\">\n                                        <a class=\"cart_quantity_down\" href=\"\"> - </a>\n                                    </div>\n                                </td>\n                                <td class=\"cart_total\">\n                                    <p class=\"cart_total_price\">$59</p>\n                                </td>\n                                <td class=\"cart_delete\">\n                                    <a class=\"cart_quantity_delete\" href=\"\"><i class=\"fa fa-times\"></i></a>\n                                </td>\n                            </tr> -->\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </section> <!--/#cart_items-->\n    \n        <section id=\"do_action\">\n            <div class=\"container\">\n                <div class=\"heading\">\n                    <h3>What would you like to do next?</h3>\n                    <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"chose_area\">\n                            <ul class=\"user_option\">\n                                <li>\n                                    <input type=\"checkbox\">\n                                    <label>Use Coupon Code</label>\n                                </li>\n                                <li>\n                                    <input type=\"checkbox\">\n                                    <label>Use Gift Voucher</label>\n                                </li>\n                                <li>\n                                    <input type=\"checkbox\">\n                                    <label>Estimate Shipping & Taxes</label>\n                                </li>\n                            </ul>\n                            <ul class=\"user_info\">\n                                <li class=\"single_field\">\n                                    <label>Country:</label>\n                                    <select>\n                                        <option>United States</option>\n                                        <option>Bangladesh</option>\n                                        <option>UK</option>\n                                        <option>India</option>\n                                        <option>Pakistan</option>\n                                        <option>Ucrane</option>\n                                        <option>Canada</option>\n                                        <option>Dubai</option>\n                                    </select>\n                                    \n                                </li>\n                                <li class=\"single_field\">\n                                    <label>Region / State:</label>\n                                    <select>\n                                        <option>Select</option>\n                                        <option>Dhaka</option>\n                                        <option>London</option>\n                                        <option>Dillih</option>\n                                        <option>Lahore</option>\n                                        <option>Alaska</option>\n                                        <option>Canada</option>\n                                        <option>Dubai</option>\n                                    </select>\n                                \n                                </li>\n                                <li class=\"single_field zip-field\">\n                                    <label>Zip Code:</label>\n                                    <input type=\"text\">\n                                </li>\n                            </ul>\n                            <a class=\"btn btn-default update\" href=\"\">Get Quotes</a>\n                            <a class=\"btn btn-default check_out\" href=\"\">Continue</a>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"total_area\">\n                            <ul>\n                                <li>Cart Sub Total <span>$59</span></li>\n                                <li>Eco Tax <span>$2</span></li>\n                                <li>Shipping Cost <span>Free</span></li>\n                                <li>Total <span>$61</span></li>\n                            </ul>\n                                <a class=\"btn btn-default update\" href=\"\">Update</a>\n                                <a class=\"btn btn-default check_out\" href=\"\">Check Out</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section><!--/#do_action-->\n\n        <script src=\"/src/assets/js/jquery.js\"></script>\n<script src=\"/src/assets/js/bootstrap.min.js\"></script>\n<script src=\"/src/assets/js/jquery.scrollUp.min.js\"></script>\n<script src=\"/src/assets/js/price-range.js\"></script>\n<script src=\"/src/assets/js/jquery.prettyPhoto.js\"></script>\n<script src=\"assets/js/main.js\"></script>\n\n<app-footer></app-footer>\n    </body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category-products/category-products.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category-products/category-products.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n    <title>Login | E-Shopper</title>\n    <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/prettyPhoto.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/price-range.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/animate.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/main.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/responsive.css\" rel=\"stylesheet\">\n    <!--[if lt IE 9]>\n    <script src=\"js/html5shiv.js\"></script>\n    <script src=\"js/respond.min.js\"></script>\n    <![endif]-->\n    <link rel=\"shortcut icon\" href=\"assets/images/ico/favicon.ico\">\n    <link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"assets/images/ico/apple-touch-icon-144-precomposed.png\">\n    <link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"assets/images/ico/apple-touch-icon-114-precomposed.png\">\n    <link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"assets/images/ico/apple-touch-icon-72-precomposed.png\">\n    <link rel=\"apple-touch-icon-precomposed\" href=\"assets/images/ico/apple-touch-icon-57-precomposed.png\">\n</head>\n<!--/head-->\n\n<body>\n\n    <section>\n        <div class=\"container\">\n            <div class=\"row\">\n\n\n                <div class=\"col-sm-9 padding-right\">\n                    <div class=\"product-details\">\n                        <!--product-details-->\n                        <div class=\"col-sm-5\">\n                            <div class=\"view-product\">\n                                <img src=\"assets/images/product-details/1.jpg\" alt=\"\" />\n                                <h3>ZOOM</h3>\n                            </div>\n                            <div id=\"similar-product\" class=\"carousel slide\" data-ride=\"carousel\">\n\n                                <!-- Wrapper for slides -->\n                                <div class=\"carousel-inner\">\n                                    <div class=\"item active\">\n                                        <a href=\"\"><img src=\"assets/images/product-details/similar1.jpg\" alt=\"\"></a>\n                                        <a href=\"\"><img src=\"assets/images/product-details/similar2.jpg\" alt=\"\"></a>\n                                        <a href=\"\"><img src=\"assets/images/product-details/similar3.jpg\" alt=\"\"></a>\n                                    </div>\n                                    <div class=\"item\">\n                                        <a href=\"\"><img src=\"assets/images/product-details/similar1.jpg\" alt=\"\"></a>\n                                        <a href=\"\"><img src=\"assets/images/product-details/similar2.jpg\" alt=\"\"></a>\n                                        <a href=\"\"><img src=\"assets/images/product-details/similar3.jpg\" alt=\"\"></a>\n                                    </div>\n                                    <div class=\"item\">\n                                        <a href=\"\"><img src=\"images/product-details/similar1.jpg\" alt=\"\"></a>\n                                        <a href=\"\"><img src=\"images/product-details/similar2.jpg\" alt=\"\"></a>\n                                        <a href=\"\"><img src=\"images/product-details/similar3.jpg\" alt=\"\"></a>\n                                    </div>\n\n                                </div>\n\n                                <!-- Controls -->\n                                <a class=\"left item-control\" href=\"#similar-product\" data-slide=\"prev\">\n                                    <i class=\"fa fa-angle-left\"></i>\n                                </a>\n                                <a class=\"right item-control\" href=\"#similar-product\" data-slide=\"next\">\n                                    <i class=\"fa fa-angle-right\"></i>\n                                </a>\n                            </div>\n\n                        </div>\n                        <div class=\"col-sm-7\">\n                            <div *ngFor=\"let product of cat_items | async\" class=\"product-information\">\n                                <!--/product-information-->\n                                <img src=\"assets/images/product-details/new.jpg\" class=\"newarrival\" alt=\"\" />\n                                <h2>{{product.description}}</h2>\n                                <p>Product Name: {{product.name}}</p>\n                                <p>Product Description: {{product.description}}</p>\n                                <img src=\"assets/images/product-details/rating.png\" alt=\"\" />\n                                <span>\n                                <span>US {{product.price}}</span>\n                                <label>Quantity: {{product.numItems}}</label>\n                                <input type=\"text\" value=\"3\" [(ngModel)]=\"num_items\" />\n                                <button type=\"button\" class=\"btn btn-fefault cart\" (click)=\"onAddCart(product)\">\n                                    <i class=\"fa fa-shopping-cart\"></i>\n                                    Add to cart\n                                </button>\n                                </span>\n                                <p><b>Availability:</b> In Stock</p>\n                                <p><b>Condition:</b> New</p>\n                                <p><b>Brand:</b> E-SHOPPER</p>\n                                <a href=\"\"><img src=\"../assets/images/product-details/share.png\" class=\"share img-responsive\" alt=\"\" /></a>\n                            </div>\n                            <!--/product-information-->\n                        </div>\n                    </div>\n                    <!--/product-details-->\n\n                    <div class=\"category-tab shop-details-tab\">\n                        <!--category-tab-->\n                        <div class=\"col-sm-12\">\n                            <ul class=\"nav nav-tabs\">\n                                <li><a href=\"#details\" data-toggle=\"tab\">Details</a></li>\n                                <li><a href=\"#companyprofile\" data-toggle=\"tab\">Company Profile</a></li>\n                                <li><a href=\"#tag\" data-toggle=\"tab\">Tag</a></li>\n                                <li class=\"active\"><a href=\"#reviews\" data-toggle=\"tab\">Reviews (5)</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"tab-content\">\n                            <div class=\"tab-pane fade\" id=\"details\">\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery1.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"images/home/gallery2.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"images/home/gallery3.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"images/home/gallery4.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"tab-pane fade\" id=\"companyprofile\">\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"images/home/gallery1.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery3.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery2.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery4.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"tab-pane fade\" id=\"tag\">\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery1.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery2.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery3.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery4.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"tab-pane fade active in\" id=\"reviews\">\n                                <div class=\"col-sm-12\">\n                                    <ul>\n                                        <li><a href=\"\"><i class=\"fa fa-user\"></i>EUGEN</a></li>\n                                        <li><a href=\"\"><i class=\"fa fa-clock-o\"></i>12:41 PM</a></li>\n                                        <li><a href=\"\"><i class=\"fa fa-calendar-o\"></i>31 DEC 2014</a></li>\n                                    </ul>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                                        consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n                                    <p><b>Write Your Review</b></p>\n\n                                    <form action=\"#\">\n                                        <span>\n                                        <input type=\"text\" placeholder=\"Your Name\"/>\n                                        <input type=\"email\" placeholder=\"Email Address\"/>\n                                    </span>\n                                        <textarea name=\"\"></textarea>\n                                        <b>Rating: </b> <img src=\"assets/images/product-details/rating.png\" alt=\"\" />\n                                        <button type=\"button\" class=\"btn btn-default pull-right\">\n                                        Submit\n                                    </button>\n                                    </form>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                    <!--/category-tab-->\n\n                </div>\n            </div>\n        </div>\n    </section>\n    <script src=\"/src/assets/js/jquery.js\"></script>\n    <script src=\"/src/assets/js/bootstrap.min.js\"></script>\n    <script src=\"/src/assets/js/jquery.scrollUp.min.js\"></script>\n    <script src=\"/src/assets/js/price-range.js\"></script>\n    <script src=\"/src/assets/js/jquery.prettyPhoto.js\"></script>\n    <script src=\"assets/js/main.js\"></script>\n\n    <app-footer></app-footer>\n\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n\n<body>\n\n    <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/prettyPhoto.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/price-range.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/animate.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/main.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/responsive.css\" rel=\"stylesheet\">\n    <footer id=\"footer\">\n        <!--Footer-->\n        <!-- <div class=\"footer-top\"> -->\n        <!-- <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-2\">\n                    <div class=\"companyinfo\">\n                        <h2><span>e</span>-shopper</h2>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>\n                    </div>\n                </div>\n                <div class=\"col-sm-7\">\n                    <div class=\"col-sm-3\">\n                        <div class=\"video-gallery text-center\">\n                            <a href=\"#\">\n                                <div class=\"iframe-img\">\n                                    <img src=\"assets/images/home/iframe1.png\" alt=\"\" />\n                                </div>\n                                <div class=\"overlay-icon\">\n                                    <i class=\"fa fa-play-circle-o\"></i>\n                                </div>\n                            </a>\n                            <p>Circle of Hands</p>\n                            <h2>24 DEC 2014</h2>\n                        </div>\n                    </div>\n                    \n                    <div class=\"col-sm-3\">\n                        <div class=\"video-gallery text-center\">\n                            <a href=\"#\">\n                                <div class=\"iframe-img\">\n                                    <img src=\"assets/images/home/iframe2.png\" alt=\"\" />\n                                </div>\n                                <div class=\"overlay-icon\">\n                                    <i class=\"fa fa-play-circle-o\"></i>\n                                </div>\n                            </a>\n                            <p>Circle of Hands</p>\n                            <h2>24 DEC 2014</h2>\n                        </div>\n                    </div>\n                    \n                    <div class=\"col-sm-3\">\n                        <div class=\"video-gallery text-center\">\n                            <a href=\"#\">\n                                <div class=\"iframe-img\">\n                                    <img src=\"assets/images/home/iframe3.png\" alt=\"\" />\n                                </div>\n                                <div class=\"overlay-icon\">\n                                    <i class=\"fa fa-play-circle-o\"></i>\n                                </div>\n                            </a>\n                            <p>Circle of Hands</p>\n                            <h2>24 DEC 2014</h2>\n                        </div>\n                    </div>\n                    \n                    <div class=\"col-sm-3\">\n                        <div class=\"video-gallery text-center\">\n                            <a href=\"#\">\n                                <div class=\"iframe-img\">\n                                    <img src=\"assets/images/home/iframe4.png\" alt=\"\" />\n                                </div>\n                                <div class=\"overlay-icon\">\n                                    <i class=\"fa fa-play-circle-o\"></i>\n                                </div>\n                            </a>\n                            <p>Circle of Hands</p>\n                            <h2>24 DEC 2014</h2>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-3\">\n                    <div class=\"address\">\n                        <img src=\"assets/images/home/map.png\" alt=\"\" />\n                        <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n        <!-- </div> -->\n\n        <div class=\"footer-widget\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-2\">\n                        <div class=\"single-widget\">\n                            <h2>Service</h2>\n                            <ul class=\"nav nav-pills nav-stacked\">\n                                <li><a href=\"\">Online Help</a></li>\n                                <li><a href=\"\">Contact Us</a></li>\n                                <li><a href=\"\">Order Status</a></li>\n                                <li><a href=\"\">Change Location</a></li>\n                                <li><a href=\"\">FAQ’s</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <div class=\"single-widget\">\n                            <h2>Quick Shop</h2>\n                            <ul class=\"nav nav-pills nav-stacked\">\n                                <li><a href=\"\">T-Shirt</a></li>\n                                <li><a href=\"\">Mens</a></li>\n                                <li><a href=\"\">Womens</a></li>\n                                <li><a href=\"\">Gift Cards</a></li>\n                                <li><a href=\"\">Shoes</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <div class=\"single-widget\">\n                            <h2>Policies</h2>\n                            <ul class=\"nav nav-pills nav-stacked\">\n                                <li><a href=\"\">Terms of Use</a></li>\n                                <li><a href=\"\">Privecy Policy</a></li>\n                                <li><a href=\"\">Refund Policy</a></li>\n                                <li><a href=\"\">Billing System</a></li>\n                                <li><a href=\"\">Ticket System</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <div class=\"single-widget\">\n                            <h2>About Shopper</h2>\n                            <ul class=\"nav nav-pills nav-stacked\">\n                                <li><a href=\"\">Company Information</a></li>\n                                <li><a href=\"\">Careers</a></li>\n                                <li><a href=\"\">Store Location</a></li>\n                                <li><a href=\"\">Affillate Program</a></li>\n                                <li><a href=\"\">Copyright</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3 col-sm-offset-1\">\n                        <div class=\"single-widget\">\n                            <h2>About Shopper</h2>\n                            <form action=\"#\" class=\"searchform\">\n                                <input type=\"text\" placeholder=\"Your email address\" />\n                                <button type=\"submit\" class=\"btn btn-default\"><i\n                                        class=\"fa fa-arrow-circle-o-right\"></i></button>\n                                <p>Get the most recent updates from <br />our site and be updated your self...</p>\n                            </form>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n        <div class=\"footer-bottom\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <p class=\"pull-left\">Copyright © 2020 gift-kart Inc. All rights reserved.</p>\n                    <!-- <p class=\"pull-right\">Designed by <span><a target=\"_blank\"\n                                href=\"http://www.themeum.com\">Themeum</a></span></p> -->\n                </div>\n            </div>\n        </div>\n\n    </footer>\n    <!--/Footer-->\n    <script src=\"/src/assets/js/jquery.js\"></script>\n    <script src=\"/src/assets/js/bootstrap.min.js\"></script>\n    <script src=\"/src/assets/js/jquery.scrollUp.min.js\"></script>\n    <script src=\"/src/assets/js/price-range.js\"></script>\n    <script src=\"/src/assets/js/jquery.prettyPhoto.js\"></script>\n    <script src=\"assets/js/main.js\"></script>\n</body>>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n    <title>Home | E-Shopper</title>\n    <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/prettyPhoto.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/price-range.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/animate.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/main.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/responsive.css\" rel=\"stylesheet\">\n\n\n    <script src=\"/src/assets/js/jquery.js\"></script>\n    <script src=\"/src/assets/js/bootstrap.min.js\"></script>\n    <script src=\"/src/assets/js/jquery.scrollUp.min.js\"></script>\n    <script src=\"/src/assets/js/price-range.js\"></script>\n    <script src=\"/src/assets/js/jquery.prettyPhoto.js\"></script>\n    <script src=\"assets/js/main.js\"></script>\n    <!--[if lt IE 9]>\n    <script src=\"js/html5shiv.js\"></script>\n    <script src=\"js/respond.min.js\"></script>\n    <![endif]-->\n    <link rel=\"shortcut icon\" href=\"assets/images/ico/favicon.ico\">\n    <link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"assets/images/ico/apple-touch-icon-144-precomposed.png\">\n    <link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"assets/images/ico/apple-touch-icon-114-precomposed.png\">\n    <link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"assets/images/ico/apple-touch-icon-72-precomposed.png\">\n    <link rel=\"apple-touch-icon-precomposed\" href=\"assets/images/ico/apple-touch-icon-57-precomposed.png\">\n</head>\n<!--/head-->\n\n<body>\n    <header id=\"header\">\n        <!--header-->\n        <div class=\"header_top\">\n            <!--header_top-->\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"contactinfo\">\n                            <ul class=\"nav nav-pills\">\n                                <li><a href=\"#\"><i class=\"fa fa-phone\"></i> +91 95 01 88 821</a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-envelope\"></i> help@giftcart.com</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"social-icons pull-right\">\n                            <ul>\n                                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-dribbble\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- </div> -->\n            <!--/header_top-->\n\n            <!-- <div class=\"header-middle\"> -->\n            <!--header-middle-->\n            <div class=\"container\">\n                <div class=\"row\">\n                    <!-- <div class=\"col-sm-4\"> -->\n                    <div class=\"logo pull-left\">\n                        <a href=\"index.html\"><img src=\"assets/images/home/logo.png\" alt=\"\" /></a>\n                    </div>\n\n                    <div class=\"search_box\">\n                        <form action=\"/action_page.php\">\n                            <input type=\"text\" placeholder=\"Search Products & Brands\" />\n                            <button type=\"submit\"><i class=\"fa fa-search\"></i> Search </button>\n                        </form>\n                    </div>\n\n                    <!-- </div> -->\n                    <!-- <div class=\"col-sm-8\"> -->\n                    <div class=\"shop-menu\">\n                        <ul>\n                            <!-- <li><a href=\"checkout.html\"><i class=\"fa fa-crosshairs\"></i> Checkout</a></li> -->\n                            <li><a routerLink=\"/cart\"><i class=\"fa fa-shopping-cart\"></i> Cart</a></li>\n                            <div class=\"btn-group \">\n                                <div class=\"btn-group sign_in\">\n                                    <button type=\"button\" class=\"btn btn-default dropdown-toggle sign_in\" data-toggle=\"dropdown\">\n                                        <i class=\"fas fa-user-cog\"></i>\n                                        Sign In\n\t\t\t\t\t\t\t\t\t\t<!-- <span class=\"caret\"></span> -->\n\t\t\t\t\t\t\t\t\t</button>\n                                    <ul class=\"dropdown-menu\">\n                                        <li *ngIf=\"!user\"><a routerLink=\"/login\"><i class=\"fa fa-lock\"></i>Login</a>\n                                        </li>\n                                        <li *ngIf=\"user\"><button class=\"fa fa-lock\" (click)=\"onLogout()\">{{user}}\n\t\t\t\t\t\t\t\t\t\t\t\tLogout</button></li>\n                                        <li><a href=\"#\"><i class=\"fa fa-user\"></i>Account</a></li>\n                                        <li><a href=\"#\"><i class=\"fa fa-star\"></i>Wishlist</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <!-- </div> -->\n        </div>\n        <!-- </div> -->\n        <!--/header-middle-->\n\n        <div class=\"header-bottom\">\n            <!--header-bottom-->\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-9\">\n                        <div class=\"navbar-header\">\n                            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n\t\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t</button>\n                        </div>\n                        <!-- <div class=\"mainmenu pull-left\">\n                            <ul class=\"nav navbar-nav collapse navbar-collapse\">\n                                <li><a href=\"index.html\" class=\"active\">Home</a></li>\n                                <li class=\"dropdown\"><a href=\"#\">Shop<i class=\"fa fa-angle-down\"></i></a>\n                                    <ul role=\"menu\" class=\"sub-menu\">\n                                        <li><a href=\"shop.html\">Products</a></li>\n                                        <li><a href=\"product-details.html\">Product Details</a></li>\n                                        <li><a href=\"checkout.html\">Checkout</a></li>\n                                        <li><a href=\"cart.html\">Cart</a></li>\n                                        <li><a href=\"login.html\">Login</a></li>\n                                    </ul>\n                                </li>\n                                <li class=\"dropdown\"><a href=\"#\">Blog<i class=\"fa fa-angle-down\"></i></a>\n                                    <ul role=\"menu\" class=\"sub-menu\">\n                                        <li><a href=\"blog.html\">Blog List</a></li>\n                                        <li><a href=\"blog-single.html\">Blog Single</a></li>\n                                    </ul>\n                                </li>\n                                <li><a href=\"404.html\">404</a></li>\n                                <li><a href=\"contact-us.html\">Contact</a></li>\n                            </ul>\n                        </div> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--/header-bottom-->\n    </header>\n    <!--/header-->\n\n    <body>\n        <section>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-3\">\n                        <div class=\"left-sidebar\">\n                            <h2>Category</h2>\n                            <div class=\"panel-group category-products\" id=\"accordian\">\n                                <!--category-productsr-->\n                                <div *ngFor=\"let k of item_categories | async\" class=\"panel panel-default\">\n                                    <div class=\"panel-heading\">\n                                        <h4 class=\"panel-title\">\n                                            <a data-toggle=\"collapse\" data-parent=\"#accordian\" routerLink=\"category/{{k.id}}\">\n                                                <span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> {{k.name}}\n                                                <small>{{k.description}}</small>\n                                            </a>\n                                        </h4>\n                                    </div>\n                                    <!-- <div id=\"sportswear\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Nike </a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Under Armour </a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Adidas </a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Puma</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">ASICS </a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div> -->\n                                </div>\n                                <!-- <div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#mens\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\tMens\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"mens\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Fendi</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Guess</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Valentino</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Dior</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Versace</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Armani</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Prada</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Dolce and Gabbana</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Chanel</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Gucci</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#womens\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\tWomens\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"womens\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Fendi</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Guess</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Valentino</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Dior</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Versace</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\"><a href=\"#\">Kids</a></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\"><a href=\"#\">Fashion</a></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\"><a href=\"#\">Households</a></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\"><a href=\"#\">Interiors</a></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\"><a href=\"#\">Clothing</a></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\"><a href=\"#\">Bags</a></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\"><a href=\"#\">Shoes</a></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div> -->\n                            </div>\n                            <!--/category-products-->\n\n                            <!-- <div class=\"brands_products\"> -->\n                            <!--brands_products-->\n                            <!-- <h2>Brands</h2>\n                                <div class=\"brands-name\">\n                                    <ul class=\"nav nav-pills nav-stacked\">\n                                        <li>\n                                            <a href=\"#\"> <span class=\"pull-right\">(50)</span>Acne</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#\"> <span class=\"pull-right\">(56)</span>Grüne Erde</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#\"> <span class=\"pull-right\">(27)</span>Albiro</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#\"> <span class=\"pull-right\">(32)</span>Ronhill</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#\"> <span class=\"pull-right\">(5)</span>Oddmolly</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#\"> <span class=\"pull-right\">(9)</span>Boudestijn</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#\"> <span class=\"pull-right\">(4)</span>Rösch creative culture</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div> -->\n                            <!--/brands_products-->\n\n                            <!-- <div class=\"price-range\"> -->\n                            <!--price-range-->\n                            <!-- <h2>Price Range</h2>\n                                <div class=\"well text-center\">\n                                    <input type=\"text\" class=\"span2\" value=\"\" data-slider-min=\"0\" data-slider-max=\"600\" data-slider-step=\"5\" data-slider-value=\"[250,450]\" id=\"sl2\"><br />\n                                    <b class=\"pull-left\">$ 0</b> <b class=\"pull-right\">$ 600</b>\n                                </div>\n                            </div> -->\n                            <!--/price-range-->\n\n                            <!-- <div class=\"shipping text-center\">\n                                shipping\n                                <img src=\"assets/images/home/shipping.jpg\" alt=\"\" />\n                            </div> -->\n                            <!--/shipping-->\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </body>\n    <script src=\"assets/js/jquery.js\"></script>\n    <script src=\"assets/js/bootstrap.min.js\"></script>\n    <script src=\"assets/js/jquery.scrollUp.min.js\"></script>\n    <script src=\"assets/js/price-range.js\"></script>\n    <script src=\"assets/js/jquery.prettyPhoto.js\"></script>\n    <script src=\"assets/js/main.js\"></script>\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n    <title>Home | E-Shopper</title>\n    <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/price-range.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/animate.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/main.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/responsive.css\" rel=\"stylesheet\">\n\n\n    <script src=\"assets/js/jquery.js\"></script>\n    <script src=\"assets/js/bootstrap.min.js\"></script>\n    <script src=\"assets/js/jquery.scrollUp.min.js\"></script>\n    <script src=\"assets/js/price-range.js\"></script>\n    <script src=\"assets/js/jquery.prettyPhoto.js\"></script>\n    <script src=\"assets/js/main.js\"></script>\n    <!--[if lt IE 9]>\n    <script src=\"js/html5shiv.js\"></script>\n    <script src=\"js/respond.min.js\"></script>\n    <![endif]-->\n    <link rel=\"shortcut icon\" href=\"assets/images/ico/favicon.ico\">\n    <link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"assets/images/ico/apple-touch-icon-144-precomposed.png\">\n    <link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"assets/images/ico/apple-touch-icon-114-precomposed.png\">\n    <link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"assets/images/ico/apple-touch-icon-72-precomposed.png\">\n    <link rel=\"apple-touch-icon-precomposed\" href=\"assets/images/ico/apple-touch-icon-57-precomposed.png\">\n</head>\n<!--/head-->\n\n<body>\n\n    <section>\n        <div class=\"container\">\n            <div class=\"row\">\n\n\n                <div class=\"col-sm-9 padding-right\">\n                    <div class=\"features_items\">\n                        <!--features_items-->\n                        <h2 class=\"title text-center\">Features Items</h2>\n                        <div *ngFor=\"let i of items | async\" class=\"col-sm-4\">\n                            <div class=\"product-image-wrapper\">\n                                <div class=\"single-products\">\n                                    <div class=\"productinfo text-center\">\n                                        <img src=\"assets/images/home/product1.jpg\" alt=\"\" />\n                                        <h2>{{i.price}}</h2>\n                                        <p>{{i.name}}</p>\n                                        <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                    </div>\n                                    <div class=\"product-overlay\">\n                                        <div class=\"overlay-content\">\n                                            <h2>Price: {{i.price}}</h2>\n                                            <p>Description: {{i.description}}</p>\n                                            <p>Category Name: {{i.category.name}}</p>\n\n                                            <button class=\"btn btn-primary\" (click)=\"onView(i)\">View Details</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"choose\">\n                                    <ul class=\"nav nav-pills nav-justified\">\n                                        <li><a href=\"#\">Add to wishlist</a></li>\n                                        <li><a href=\"#\">Add to compare</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"product-image-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/home/product2.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t\t<h2>$56</h2>\n\t\t\t\t\t\t\t\t\t\t<p>Easy Polo Black Edition</p>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"product-overlay\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t<h2>$56</h2>\n\t\t\t\t\t\t\t\t\t\t\ti\t\t\t\t\t<p>Easy Polo Black Edition</p>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"choose\">\n\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-justified\">\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-plus-square\"></i>Add to wishlist</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-plus-square\"></i>Add to compare</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"product-image-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/home/product3.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t\t<h2>$56</h2>\n\t\t\t\t\t\t\t\t\t\t<p>Easy Polo Black Edition</p>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"product-overlay\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t<h2>$56</h2>\n\t\t\t\t\t\t\t\t\t\t\t<p>Easy Polo Black Edition</p>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"choose\">\n\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-justified\">\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-plus-square\"></i>Add to wishlist</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-plus-square\"></i>Add to compare</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"product-image-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/home/product4.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t\t<h2>$56</h2>\n\t\t\t\t\t\t\t\t\t\t<p>Easy Polo Black Edition</p>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"product-overlay\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t<h2>$56</h2>\n\t\t\t\t\t\t\t\t\t\t\t<p>Easy Polo Black Edition</p>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/home/new.png\" class=\"new\" alt=\"\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"choose\">\n\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-justified\">\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-plus-square\"></i>Add to wishlist</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-plus-square\"></i>Add to compare</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"product-image-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/home/product5.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t\t<h2>$56</h2>\n\t\t\t\t\t\t\t\t\t\t<p>Easy Polo Black Edition</p>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"product-overlay\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t<h2>$56</h2>\n\t\t\t\t\t\t\t\t\t\t\t<p>Easy Polo Black Edition</p>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/home/sale.png\" class=\"new\" alt=\"\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"choose\">\n\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-justified\">\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-plus-square\"></i>Add to wishlist</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-plus-square\"></i>Add to compare</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"product-image-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/home/product6.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t\t<h2>$56</h2>\n\t\t\t\t\t\t\t\t\t\t<p>Easy Polo Black Edition</p>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"product-overlay\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t<h2>$56</h2>\n\t\t\t\t\t\t\t\t\t\t\t<p>Easy Polo Black Edition</p>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"choose\">\n\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-justified\">\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-plus-square\"></i>Add to wishlist</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-plus-square\"></i>Add to compare</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div> -->\n                    </div>>\n                </div>\n                <!--features_items-->\n\n                <!-- <div class=\"category-tab\">\n                    category-tab\n                    <div class=\"col-sm-12\">\n                        <ul class=\"nav nav-tabs\">\n                            <li class=\"active\"><a href=\"#tshirt\" data-toggle=\"tab\">T-Shirt</a></li>\n                            <li><a href=\"#blazers\" data-toggle=\"tab\">Blazers</a></li>\n                            <li><a href=\"#sunglass\" data-toggle=\"tab\">Sunglass</a></li>\n                            <li><a href=\"#kids\" data-toggle=\"tab\">Kids</a></li>\n                            <li><a href=\"#poloshirt\" data-toggle=\"tab\">Polo shirt</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane fade active in\" id=\"tshirt\">\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery1.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery2.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery3.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery4.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane fade\" id=\"blazers\">\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery4.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery3.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery2.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery1.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane fade\" id=\"sunglass\">\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery3.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery4.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery1.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery2.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane fade\" id=\"kids\">\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery1.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery2.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery3.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery4.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane fade\" id=\"poloshirt\">\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery2.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery4.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery3.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"product-image-wrapper\">\n                                    <div class=\"single-products\">\n                                        <div class=\"productinfo text-center\">\n                                            <img src=\"assets/images/home/gallery1.jpg\" alt=\"\" />\n                                            <h2>$56</h2>\n                                            <p>Easy Polo Black Edition</p>\n                                            <a href=\"#\" class=\"btn btn-default add-to-cart\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n                <!--/category-tab-->\n\n                <div class=\"recommended_items\">\n                    <!--recommended_items-->\n                    <h2 class=\"title text-center\">recommended items</h2>\n\n                    <div id=\"recommended-item-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n                        <div class=\"carousel-inner\">\n                            <div class=\"item active\">\n                                <div class=\"col-sm-4\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/recommend1.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/recommend2.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/recommend3.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"item\">\n                                <div class=\"col-sm-4\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/recommend1.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/recommend2.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/recommend3.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <a href=\"#\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</a>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <a class=\"left recommended-item-control\" href=\"#recommended-item-carousel\" data-slide=\"prev\">\n                            <i class=\"fa fa-angle-left\"></i>\n                        </a>\n                        <a class=\"right recommended-item-control\" href=\"#recommended-item-carousel\" data-slide=\"next\">\n                            <i class=\"fa fa-angle-right\"></i>\n                        </a>\n                    </div>\n                    <!--/recommended_items-->\n                </div>\n            </div>\n        </div>\n\n    </section>\n    <app-footer></app-footer>\n\n\n\n    <script src=\"assets/js/jquery.js\"></script>\n    <script src=\"assets/js/price-range.js\"></script>\n    <script src=\"assets/js/jquery.scrollUp.min.js\"></script>\n    <script src=\"assets/js/bootstrap.min.js\"></script>\n    <script src=\"assets/js/jquery.prettyPhoto.js\"></script>\n    <script src=\"assets/js/main.js\"></script>\n\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t<meta name=\"description\" content=\"\">\n\t<meta name=\"author\" content=\"\">\n\t<title>Login | E-Shopper</title>\n\t<!-- <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\"> -->\n\t<link href=\"assets/css/prettyPhoto.css\" rel=\"stylesheet\">\n\t<link href=\"assets/css/price-range.css\" rel=\"stylesheet\">\n\t<link href=\"assets/css/animate.css\" rel=\"stylesheet\">\n\t<link href=\"assets/css/main.css\" rel=\"stylesheet\">\n\t<link href=\"assets/css/responsive.css\" rel=\"stylesheet\">\n\t<!--[if lt IE 9]>\n    <script src=\"js/html5shiv.js\"></script>\n    <script src=\"js/respond.min.js\"></script>\n    <![endif]-->\n\t<link rel=\"shortcut icon\" href=\"images/ico/favicon.ico\">\n\t<link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"images/ico/apple-touch-icon-144-precomposed.png\">\n\t<link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"images/ico/apple-touch-icon-114-precomposed.png\">\n\t<link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"images/ico/apple-touch-icon-72-precomposed.png\">\n\t<link rel=\"apple-touch-icon-precomposed\" href=\"images/ico/apple-touch-icon-57-precomposed.png\">\n</head>\n<!--/head-->\n\n<body>\n\t<!-- <header id=\"header\">\n\t\t<div class=\"header_top\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"contactinfo\">\n\t\t\t\t\t\t\t<ul class=\"nav nav-pills\">\n\t\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-phone\"></i> +2 95 01 88 821</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-envelope\"></i> info@domain.com</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"social-icons pull-right\">\n\t\t\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-linkedin\"></i></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-dribbble\"></i></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-google-plus\"></i></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"header-middle\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"logo pull-left\">\n\t\t\t\t\t\t\t<a href=\"index.html\"><img src=\"images/home/logo.png\" alt=\"\" /></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"btn-group pull-right\">\n\t\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle usa\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t\t\tUSA\n\t\t\t\t\t\t\t\t\t<span class=\"caret\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"\">Canada</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"\">UK</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle usa\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t\t\tDOLLAR\n\t\t\t\t\t\t\t\t\t<span class=\"caret\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"\">Canadian Dollar</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"\">Pound</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t<div class=\"shop-menu pull-right\">\n\t\t\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-user\"></i> Account</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-star\"></i> Wishlist</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"checkout.html\"><i class=\"fa fa-crosshairs\"></i> Checkout</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"cart.html\"><i class=\"fa fa-shopping-cart\"></i> Cart</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"login.html\" class=\"active\"><i class=\"fa fa-lock\"></i> Login</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\n\t\t<div class=\"header-bottom\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n\t\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mainmenu pull-left\">\n\t\t\t\t\t\t\t<ul class=\"nav navbar-nav collapse navbar-collapse\">\n\t\t\t\t\t\t\t\t<li><a href=\"index.html\">Home</a></li>\n\t\t\t\t\t\t\t\t<li class=\"dropdown\"><a href=\"#\">Shop<i class=\"fa fa-angle-down\"></i></a>\n                                    <ul role=\"menu\" class=\"sub-menu\">\n                                        <li><a href=\"shop.html\">Products</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"product-details.html\">Product Details</a></li> \n\t\t\t\t\t\t\t\t\t\t<li><a href=\"checkout.html\">Checkout</a></li> \n\t\t\t\t\t\t\t\t\t\t<li><a href=\"cart.html\">Cart</a></li> \n\t\t\t\t\t\t\t\t\t\t<li><a href=\"login.html\" class=\"active\">Login</a></li> \n                                    </ul>\n                                </li> \n\t\t\t\t\t\t\t\t<li class=\"dropdown\"><a href=\"#\">Blog<i class=\"fa fa-angle-down\"></i></a>\n                                    <ul role=\"menu\" class=\"sub-menu\">\n                                        <li><a href=\"blog.html\">Blog List</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"blog-single.html\">Blog Single</a></li>\n                                    </ul>\n                                </li> \n\t\t\t\t\t\t\t\t<li><a href=\"404.html\">404</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"contact-us.html\">Contact</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"search_box pull-right\">\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</header> -->\n\n\t<section id=\"form\">\n\t\t<!--form-->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-4 col-sm-offset-1\">\n\t\t\t\t\t<div class=\"login-form\">\n\t\t\t\t\t\t<!--login form-->\n\t\t\t\t\t\t<h2>Login to your account</h2>\n\t\t\t\t\t\t<form action=\"#\" #signUp=\"ngForm\">\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"user.email\" required />\n\t\t\t\t\t\t\t<input type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"user.password\"\n\t\t\t\t\t\t\t\trequired />\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"checkbox\">\n\t\t\t\t\t\t\t\tKeep me signed in\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"signUp.form.invalid\" (click)=\"onLogin()\"\n\t\t\t\t\t\t\t\tclass=\"btn btn-primary\">Login</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--/login form-->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t<h2 class=\"or\">OR</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"signup-form\">\n\t\t\t\t\t\t<!--sign up form-->\n\t\t\t\t\t\t<h2>New User Signup!</h2>\n\t\t\t\t\t\t<form action=\"#\" #Loginform=\"ngForm\">\n\t\t\t\t\t\t\t<!-- {{Loginform.value | json}} -->\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"login.fullname\" #name=\"ngModel\" placeholder=\"Name\"\n\t\t\t\t\t\t\t\t\tname=\"name\" [class.is-invalid]=\"name.invalid&&name.touched\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\trequired />\n\t\t\t\t\t\t\t\t<small class=\"text-danger\" [class.d-none]=\"name.valid || name.untouched\">Name is\n\t\t\t\t\t\t\t\t\tRequired</small>\n\t\t\t\t\t\t\t\t<!-- {{name.touched}} -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"email\" [(ngModel)]=\"login.email\" #email=\"ngModel\" name=\"email\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Email Address\" class=\"form-control\" required />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"password\" [(ngModel)]=\"login.password\" #pass=\"ngModel\" name=\"password\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Password\" class=\"form-control\" required />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"number\" [(ngModel)]=\"login.mobile\" #tel=\"ngModel\" pattern=\"^\\d{10}$\"\n\t\t\t\t\t\t\t\t\t[class.is-invalid]=\"tel.invalid&&tel.touched\" name=\"tel\" placeholder=\"Mobile No\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" required />\n\t\t\t\t\t\t\t\t<small class=\"text-danger\" [class.d-none]=\"tel.valid||tel.untouched \">Mobile number\n\t\t\t\t\t\t\t\t\tshould be of 10 digits</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"Loginform.form.invalid\" class=\"btn btn-primary\"\n\t\t\t\t\t\t\t\t(click)=\"onSignUp()\">Signup</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--/sign up form-->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--/form-->\n\n\n\t<!-- <footer id=\"footer\">\n\t\t<div class=\"footer-top\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t<div class=\"companyinfo\">\n\t\t\t\t\t\t\t<h2><span>e</span>-shopper</h2>\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"video-gallery text-center\">\n\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t<div class=\"iframe-img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/home/iframe1.png\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"overlay-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play-circle-o\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<p>Circle of Hands</p>\n\t\t\t\t\t\t\t\t<h2>24 DEC 2014</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"video-gallery text-center\">\n\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t<div class=\"iframe-img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/home/iframe2.png\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"overlay-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play-circle-o\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<p>Circle of Hands</p>\n\t\t\t\t\t\t\t\t<h2>24 DEC 2014</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"video-gallery text-center\">\n\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t<div class=\"iframe-img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/home/iframe3.png\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"overlay-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play-circle-o\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<p>Circle of Hands</p>\n\t\t\t\t\t\t\t\t<h2>24 DEC 2014</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"video-gallery text-center\">\n\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t<div class=\"iframe-img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/home/iframe4.png\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"overlay-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play-circle-o\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<p>Circle of Hands</p>\n\t\t\t\t\t\t\t\t<h2>24 DEC 2014</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"address\">\n\t\t\t\t\t\t\t<img src=\"images/home/map.png\" alt=\"\" />\n\t\t\t\t\t\t\t<p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"footer-widget\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t<div class=\"single-widget\">\n\t\t\t\t\t\t\t<h2>Service</h2>\n\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t\t\t\t\t\t\t<li><a href=\"\">Online Help</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">Contact Us</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">Order Status</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">Change Location</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">FAQ’s</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t<div class=\"single-widget\">\n\t\t\t\t\t\t\t<h2>Quock Shop</h2>\n\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t\t\t\t\t\t\t<li><a href=\"\">T-Shirt</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">Mens</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">Womens</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">Gift Cards</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">Shoes</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t<div class=\"single-widget\">\n\t\t\t\t\t\t\t<h2>Policies</h2>\n\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t\t\t\t\t\t\t<li><a href=\"\">Terms of Use</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">Privecy Policy</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">Refund Policy</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">Billing System</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">Ticket System</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t<div class=\"single-widget\">\n\t\t\t\t\t\t\t<h2>About Shopper</h2>\n\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t\t\t\t\t\t\t<li><a href=\"\">Company Information</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">Careers</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">Store Location</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">Affillate Program</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"\">Copyright</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3 col-sm-offset-1\">\n\t\t\t\t\t\t<div class=\"single-widget\">\n\t\t\t\t\t\t\t<h2>About Shopper</h2>\n\t\t\t\t\t\t\t<form action=\"#\" class=\"searchform\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Your email address\" />\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-arrow-circle-o-right\"></i></button>\n\t\t\t\t\t\t\t\t<p>Get the most recent updates from <br />our site and be updated your self...</p>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"footer-bottom\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<p class=\"pull-left\">Copyright © 2013 E-SHOPPER Inc. All rights reserved.</p>\n\t\t\t\t\t<p class=\"pull-right\">Designed by <span><a target=\"_blank\" href=\"http://www.themeum.com\">Themeum</a></span></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</footer> -->\n\n\n\t<app-footer></app-footer>\n\t<script src=\"/src/assets/js/jquery.js\"></script>\n\t<script src=\"/src/assets/js/bootstrap.min.js\"></script>\n\t<script src=\"/src/assets/js/jquery.scrollUp.min.js\"></script>\n\t<script src=\"/src/assets/js/price-range.js\"></script>\n\t<script src=\"/src/assets/js/jquery.prettyPhoto.js\"></script>\n\t<script src=\"assets/js/main.js\"></script>\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-page/product-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-page/product-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n    <title>Login | E-Shopper</title>\n    <!-- <link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\"> -->\n    <link href=\"assets/css/prettyPhoto.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/price-range.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/animate.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/main.css\" rel=\"stylesheet\">\n    <link href=\"assets/css/responsive.css\" rel=\"stylesheet\">\n    <!--[if lt IE 9]>\n    <script src=\"js/html5shiv.js\"></script>\n    <script src=\"js/respond.min.js\"></script>\n    <![endif]-->\n    <link rel=\"shortcut icon\" href=\"assets/images/ico/favicon.ico\">\n    <link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"assets/images/ico/apple-touch-icon-144-precomposed.png\">\n    <link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"assets/images/ico/apple-touch-icon-114-precomposed.png\">\n    <link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"assets/images/ico/apple-touch-icon-72-precomposed.png\">\n    <link rel=\"apple-touch-icon-precomposed\" href=\"assets/images/ico/apple-touch-icon-57-precomposed.png\">\n</head>\n<!--/head-->\n\n<body>\n\n    <section>\n        <div class=\"container\">\n            <div class=\"row\">\n                <!-- <div class=\"col-sm-3\">\n                    <div class=\"left-sidebar\">\n                        <h2>Category</h2>\n                        <div class=\"panel-group category-products\" id=\"accordian\"> -->\n                <!--category-productsr-->\n                <!-- <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">\n                                    <h4 class=\"panel-title\">\n                                        <a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#sportswear\">\n                                            <span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> Sportswear\n                                        </a>\n                                    </h4>\n                                </div>\n                                <div id=\"sportswear\" class=\"panel-collapse collapse\">\n                                    <div class=\"panel-body\">\n                                        <ul>\n                                            <li><a href=\"\">Nike </a></li>\n                                            <li><a href=\"\">Under Armour </a></li>\n                                            <li><a href=\"\">Adidas </a></li>\n                                            <li><a href=\"\">Puma</a></li>\n                                            <li><a href=\"\">ASICS </a></li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">\n                                    <h4 class=\"panel-title\">\n                                        <a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#mens\">\n                                            <span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> Mens\n                                        </a>\n                                    </h4>\n                                </div>\n                                <div id=\"mens\" class=\"panel-collapse collapse\">\n                                    <div class=\"panel-body\">\n                                        <ul>\n                                            <li><a href=\"\">Fendi</a></li>\n                                            <li><a href=\"\">Guess</a></li>\n                                            <li><a href=\"\">Valentino</a></li>\n                                            <li><a href=\"\">Dior</a></li>\n                                            <li><a href=\"\">Versace</a></li>\n                                            <li><a href=\"\">Armani</a></li>\n                                            <li><a href=\"\">Prada</a></li>\n                                            <li><a href=\"\">Dolce and Gabbana</a></li>\n                                            <li><a href=\"\">Chanel</a></li>\n                                            <li><a href=\"\">Gucci</a></li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">\n                                    <h4 class=\"panel-title\">\n                                        <a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#womens\">\n                                            <span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> Womens\n                                        </a>\n                                    </h4>\n                                </div>\n                                <div id=\"womens\" class=\"panel-collapse collapse\">\n                                    <div class=\"panel-body\">\n                                        <ul>\n                                            <li><a href=\"\">Fendi</a></li>\n                                            <li><a href=\"\">Guess</a></li>\n                                            <li><a href=\"\">Valentino</a></li>\n                                            <li><a href=\"\">Dior</a></li>\n                                            <li><a href=\"\">Versace</a></li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">\n                                    <h4 class=\"panel-title\"><a href=\"#\">Kids</a></h4>\n                                </div>\n                            </div>\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">\n                                    <h4 class=\"panel-title\"><a href=\"#\">Fashion</a></h4>\n                                </div>\n                            </div>\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">\n                                    <h4 class=\"panel-title\"><a href=\"#\">Households</a></h4>\n                                </div>\n                            </div>\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">\n                                    <h4 class=\"panel-title\"><a href=\"#\">Interiors</a></h4>\n                                </div>\n                            </div>\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">\n                                    <h4 class=\"panel-title\"><a href=\"#\">Clothing</a></h4>\n                                </div>\n                            </div>\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">\n                                    <h4 class=\"panel-title\"><a href=\"#\">Bags</a></h4>\n                                </div>\n                            </div>\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">\n                                    <h4 class=\"panel-title\"><a href=\"#\">Shoes</a></h4>\n                                </div>\n                            </div>\n                        </div> -->\n                <!--/category-products-->\n\n                <!-- <div class=\"brands_products\"> -->\n                <!--brands_products-->\n                <!-- <h2>Brands</h2>\n                            <div class=\"brands-name\">\n                                <ul class=\"nav nav-pills nav-stacked\">\n                                    <li>\n                                        <a href=\"\"> <span class=\"pull-right\">(50)</span>Acne</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"\"> <span class=\"pull-right\">(56)</span>Grüne Erde</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"\"> <span class=\"pull-right\">(27)</span>Albiro</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"\"> <span class=\"pull-right\">(32)</span>Ronhill</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"\"> <span class=\"pull-right\">(5)</span>Oddmolly</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"\"> <span class=\"pull-right\">(9)</span>Boudestijn</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"\"> <span class=\"pull-right\">(4)</span>Rösch creative culture</a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div> -->\n                <!--/brands_products-->\n\n                <!-- <div class=\"price-range\"> -->\n                <!--price-range-->\n                <!-- <h2>Price Range</h2>\n                            <div class=\"well\">\n                                <input type=\"text\" class=\"span2\" value=\"\" data-slider-min=\"0\" data-slider-max=\"600\" data-slider-step=\"5\" data-slider-value=\"[250,450]\" id=\"sl2\"><br />\n                                <b>$ 0</b> <b class=\"pull-right\">$ 600</b>\n                            </div>\n                        </div> -->\n                <!--/price-range-->\n\n                <!-- <div class=\"shipping text-center\"> -->\n                <!--shipping-->\n                <!-- <img src=\"images/home/shipping.jpg\" alt=\"\" />\n                        </div> -->\n                <!--/shipping-->\n\n                <!-- </div>\n                </div> -->\n\n                <div class=\"col-sm-9 padding-right\">\n                    <div class=\"product-details\">\n                        <!--product-details-->\n                        <div class=\"col-sm-5\">\n                            <div class=\"view-product\">\n                                <img src=\"assets/images/product-details/1.jpg\" alt=\"\" />\n                                <h3>ZOOM</h3>\n                            </div>\n                            <!-- <div id=\"similar-product\" class=\"carousel slide\" data-ride=\"carousel\"> -->\n\n                            <!-- Wrapper for slides -->\n                            <!-- <div class=\"carousel-inner\">\n                                    <div class=\"item active\">\n                                        <a href=\"\"><img src=\"assets/images/product-details/similar1.jpg\" alt=\"\"></a>\n                                        <a href=\"\"><img src=\"assets/images/product-details/similar2.jpg\" alt=\"\"></a>\n                                        <a href=\"\"><img src=\"assets/images/product-details/similar3.jpg\" alt=\"\"></a>\n                                    </div>\n                                    <div class=\"item\">\n                                        <a href=\"\"><img src=\"assets/images/product-details/similar1.jpg\" alt=\"\"></a>\n                                        <a href=\"\"><img src=\"assets/images/product-details/similar2.jpg\" alt=\"\"></a>\n                                        <a href=\"\"><img src=\"assets/images/product-details/similar3.jpg\" alt=\"\"></a>\n                                    </div>\n                                    <div class=\"item\">\n                                        <a href=\"\"><img src=\"assets/images/product-details/similar1.jpg\" alt=\"\"></a>\n                                        <a href=\"\"><img src=\"assets/images/product-details/similar2.jpg\" alt=\"\"></a>\n                                        <a href=\"\"><img src=\"assets/images/product-details/similar3.jpg\" alt=\"\"></a>\n                                    </div>\n\n                                </div>\n -->\n                            <!-- Controls -->\n                            <!-- <a class=\"left item-control\" href=\"#similar-product\" data-slide=\"prev\">\n                                    <i class=\"fa fa-angle-left\"></i>\n                                </a>\n                                <a class=\"right item-control\" href=\"#similar-product\" data-slide=\"next\">\n                                    <i class=\"fa fa-angle-right\"></i>\n                                </a>\n                            </div>\n -->\n                        </div>\n                        <div class=\"col-sm-7\">\n                            <div class=\"product-information\">\n                                <!--/product-information-->\n                                <img src=\"assets/images/product-details/new.jpg\" class=\"newarrival\" alt=\"\" />\n                                <h2>{{product.description}}</h2>\n                                <p>Product Name: {{product.name}}</p>\n                                <p>Product Description: {{product.description}}</p>\n                                <img src=\"assets/images/product-details/rating.png\" alt=\"\" />\n                                <span>\n                                <span>US {{product.price}}</span>\n                                <label>Quantity: {{product.numItems}}</label>\n                                <input type=\"text\" value=\"3\" />\n                                <button type=\"button\" class=\"btn btn-fefault cart\">\n                                    <i class=\"fa fa-shopping-cart\"></i>\n                                    Add to cart\n                                </button>\n                                </span>\n                                <p><b>Availability:</b> In Stock</p>\n                                <p><b>Condition:</b> New</p>\n                                <!-- <p><b>Brand:</b> E-SHOPPER</p> -->\n                                <a href=\"\"><img src=\"assets/images/product-details/share.png\" class=\"share img-responsive\" alt=\"\" /></a>\n                            </div>\n                            <!--/product-information-->\n                        </div>\n                    </div>\n                    <!--/product-details-->\n\n                    <div class=\"category-tab shop-details-tab\">\n                        <!--category-tab-->\n                        <div class=\"col-sm-12\">\n                            <ul class=\"nav nav-tabs\">\n                                <!-- <li><a href=\"#details\" data-toggle=\"tab\">Details</a></li>\n                                <li><a href=\"#companyprofile\" data-toggle=\"tab\">Company Profile</a></li>\n                                <li><a href=\"#tag\" data-toggle=\"tab\">Tag</a></li> -->\n                                <li class=\"active\"><a href=\"#reviews\" data-toggle=\"tab\">Reviews (5)</a></li>\n                            </ul>\n                        </div>\n                        <!-- <div class=\"tab-content\">\n                            <div class=\"tab-pane fade\" id=\"details\">\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery1.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"images/home/gallery2.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"images/home/gallery3.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"images/home/gallery4.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"tab-pane fade\" id=\"companyprofile\">\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"images/home/gallery1.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery3.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery2.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery4.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"tab-pane fade\" id=\"tag\">\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery1.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery2.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery3.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"product-image-wrapper\">\n                                        <div class=\"single-products\">\n                                            <div class=\"productinfo text-center\">\n                                                <img src=\"assets/images/home/gallery4.jpg\" alt=\"\" />\n                                                <h2>$56</h2>\n                                                <p>Easy Polo Black Edition</p>\n                                                <button type=\"button\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Add to cart</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div> -->\n\n                        <div class=\"tab-pane\" id=\"reviews\">\n                            <div class=\"col-sm-12\">\n                                <ul>\n                                    <li><a href=\"\"><i class=\"fa fa-user\"></i>EUGEN</a></li>\n                                    <li><a href=\"\"><i class=\"fa fa-clock-o\"></i>12:41 PM</a></li>\n                                    <li><a href=\"\"><i class=\"fa fa-calendar-o\"></i>31 DEC 2014</a></li>\n                                </ul>\n                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the\n                                    truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that\n                                    are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n                                    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure\n                                    that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>\n                                <p><b>Write Your Review</b></p>\n\n                                <form action=\"#\">\n                                    <span>\n                                        <input type=\"text\" placeholder=\"Your Name\"/>\n                                        <input type=\"email\" placeholder=\"Email Address\"/>\n                                    </span>\n                                    <textarea name=\"\"></textarea>\n                                    <!--  <b>Rating: </b> <img src=\"assets/images/product-details/rating.png\" alt=\"\" /> -->\n                                    <button type=\"button\" class=\"btn btn-default pull-right\">\n                                        Submit\n                                    </button>\n                                </form>\n                            </div>\n                            <!-- </div> -->\n\n                        </div>\n                    </div>\n                    <!--/category-tab-->\n\n                </div>\n            </div>\n        </div>\n    </section>\n    <script src=\"/src/assets/js/jquery.js\"></script>\n    <script src=\"/src/assets/js/bootstrap.min.js\"></script>\n    <script src=\"/src/assets/js/jquery.scrollUp.min.js\"></script>\n    <script src=\"/src/assets/js/price-range.js\"></script>\n    <script src=\"/src/assets/js/jquery.prettyPhoto.js\"></script>\n    <script src=\"assets/js/main.js\"></script>\n\n    <app-footer></app-footer>\n\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/add-cart.service.ts":
/*!*************************************!*\
  !*** ./src/app/add-cart.service.ts ***!
  \*************************************/
/*! exports provided: AddCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCartService", function() { return AddCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddCartService = class AddCartService {
    constructor() {
        this.product = new Array();
    }
    setProduct(data) {
        this.product.push(data);
    }
    getProducts() {
        let temp = this.product;
        return temp;
    }
};
AddCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AddCartService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-page/product-page.component */ "./src/app/product-page/product-page.component.ts");
/* harmony import */ var _category_products_category_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-products/category-products.component */ "./src/app/category-products/category-products.component.ts");
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart-page/cart-page.component */ "./src/app/cart-page/cart-page.component.ts");








const routes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: "login", component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"] },
    { path: "product", component: _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_5__["ProductPageComponent"] },
    { path: "category/:id", component: _category_products_category_products_component__WEBPACK_IMPORTED_MODULE_6__["CategoryProductsComponent"] },
    { path: "cart", component: _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_7__["CartPageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'CartAngular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login */ "./src/app/login.ts");
/* harmony import */ var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product-page/product-page.component */ "./src/app/product-page/product-page.component.ts");
/* harmony import */ var _user_login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-login */ "./src/app/user-login.ts");
/* harmony import */ var _category_products_category_products_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./category-products/category-products.component */ "./src/app/category-products/category-products.component.ts");
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cart-page/cart-page.component */ "./src/app/cart-page/cart-page.component.ts");








// import { Customer } from './customer';















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"],
            _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__["LoginPageComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
            _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_18__["ProductPageComponent"],
            _category_products_category_products_component__WEBPACK_IMPORTED_MODULE_20__["CategoryProductsComponent"],
            _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_21__["CartPageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [_login__WEBPACK_IMPORTED_MODULE_17__["Login"], _user_login__WEBPACK_IMPORTED_MODULE_19__["UserLogin"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cart-page/cart-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/cart-page/cart-page.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQtcGFnZS9jYXJ0LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/cart-page/cart-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cart-page/cart-page.component.ts ***!
  \**************************************************/
/*! exports provided: CartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageComponent", function() { return CartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-cart.service */ "./src/app/add-cart.service.ts");




let CartPageComponent = class CartPageComponent {
    constructor(router, cartS) {
        this.router = router;
        this.cartS = cartS;
    }
    ngOnInit() {
        if (sessionStorage.getItem('user') == null) {
            alert('Please log in first!!!');
            this.router.navigate(['']);
        }
        this.cart_items = this.cartS.getProducts();
    }
};
CartPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _add_cart_service__WEBPACK_IMPORTED_MODULE_3__["AddCartService"] }
];
CartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart-page/cart-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart-page.component.css */ "./src/app/cart-page/cart-page.component.css")).default]
    })
], CartPageComponent);



/***/ }),

/***/ "./src/app/category-products/category-products.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/category-products/category-products.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LXByb2R1Y3RzL2NhdGVnb3J5LXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/category-products/category-products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/category-products/category-products.component.ts ***!
  \******************************************************************/
/*! exports provided: CategoryProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryProductsComponent", function() { return CategoryProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-service.service */ "./src/app/home-service.service.ts");
/* harmony import */ var _add_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-cart.service */ "./src/app/add-cart.service.ts");





let CategoryProductsComponent = class CategoryProductsComponent {
    constructor(active, service, cartS) {
        this.active = active;
        this.service = service;
        this.cartS = cartS;
    }
    ngOnInit() {
        this.id = parseInt(this.active.snapshot.paramMap.get('id'));
        this.active.paramMap.subscribe((params) => {
            let id = parseInt(params.get('id'));
            // alert(`Category Id is ${id}`);
            this.cat_items = this.service.getCategoryProducts(id);
        });
    }
    onAddCart(data) {
        this.service.addToCart(data, this.num_items).subscribe();
        this.cartS.setProduct(data);
    }
};
CategoryProductsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _home_service_service__WEBPACK_IMPORTED_MODULE_3__["HomeServiceService"] },
    { type: _add_cart_service__WEBPACK_IMPORTED_MODULE_4__["AddCartService"] }
];
CategoryProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category-products/category-products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-products.component.css */ "./src/app/category-products/category-products.component.css")).default]
    })
], CategoryProductsComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-service.service */ "./src/app/home-service.service.ts");
/* harmony import */ var _add_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-cart.service */ "./src/app/add-cart.service.ts");





let HeaderComponent = class HeaderComponent {
    constructor(router, service, cartS) {
        this.router = router;
        this.service = service;
        this.cartS = cartS;
    }
    ngOnInit() {
        this.user = sessionStorage.getItem('user');
        this.item_categories = this.service.getAllCategories();
    }
    onLogout() {
        console.log("Kuch bhi");
        sessionStorage.clear();
        this.user = null;
        this.cartS.product = null;
        location.reload();
        //this.router.navigate(['']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _home_service_service__WEBPACK_IMPORTED_MODULE_3__["HomeServiceService"] },
    { type: _add_cart_service__WEBPACK_IMPORTED_MODULE_4__["AddCartService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);

let ELE = [
    { "id": 1, "name": "Shreyansh", "description": "Saste Nashe" },
    { "id": 2, "name": "Abhash", "description": "Mehenge Nashe Nashe" }
];


/***/ }),

/***/ "./src/app/home-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/home-service.service.ts ***!
  \*****************************************/
/*! exports provided: HomeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeServiceService", function() { return HomeServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let HomeServiceService = class HomeServiceService {
    constructor(http) {
        this.http = http;
    }
    getFeatureProducts() {
        let url = "http://localhost:4000/products";
        return this.http.get(url);
    }
    onSignUp(data) {
        let url = "http://localhost:4000/customer";
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                console.error(err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Please enter correct credentials Recived error ' + err);
            }
        }));
    }
    onLogin(data) {
        console.log(JSON.stringify(data));
        let url = `http://localhost:4000/home/${data.email}/${data.password}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                console.error(err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Please enter correct credentials Recived error ' + err);
            }
        }));
    }
    getAllCategories() {
        let url = "http://localhost:4000/categories";
        return this.http.get(url);
    }
    getCategoryProducts(data) {
        let url = `http://localhost:4000/categories/${data}/products`;
        return this.http.get(url);
    }
    addToCart(data, items) {
        let url = `http://localhost:4000/customer/${sessionStorage.getItem('id')}/products/${data.product_id}/cart`;
        let JsonData = { "date": "2012-03-19T07:22Z", "amount": items };
        return this.http.post(url, JsonData);
    }
};
HomeServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomeServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HomeServiceService);



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home-service.service */ "./src/app/home-service.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HomepageComponent = class HomepageComponent {
    constructor(service, prodS, router) {
        this.service = service;
        this.prodS = prodS;
        this.router = router;
    }
    ngOnInit() {
        this.items = this.service.getFeatureProducts();
    }
    onView(data) {
        this.prodS.setProd(data);
        this.router.navigate(['/product']);
    }
    onCategory(data) {
        this.router.navigate(['/category', data.id]);
    }
};
HomepageComponent.ctorParameters = () => [
    { type: _home_service_service__WEBPACK_IMPORTED_MODULE_2__["HomeServiceService"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")).default]
    })
], HomepageComponent);

// let ELE:Products[]=[
//     {"name":"Abhash Gaandu","desc":"Nalaayak","id":1,"price":2},
//     {"name":"Abhash Mc","desc":"Nalaayak","id":1,"price":3},
//     {"name":"Abhash Bc","desc":"Nalaayak","id":1,"price":4},
//     {"name":"Abhishek Gaandu","desc":"Nalaayak","id":1,"price":6},
//     {"name":"Abhishek Mc","desc":"Nalaayak","id":1,"price":8},
//     {"name":"Shreyansh Chutiya","desc":"Nalaayak","id":1,"price":10}
// ]


/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login */ "./src/app/login.ts");
/* harmony import */ var _home_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-service.service */ "./src/app/home-service.service.ts");
/* harmony import */ var _user_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-login */ "./src/app/user-login.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let LoginPageComponent = class LoginPageComponent {
    //loginForm:FormGroup;
    constructor(login, service, user, router) {
        this.login = login;
        this.service = service;
        this.user = user;
        this.router = router;
    }
    //login= new Login();
    onSignUp() {
        this.service.onSignUp(this.login).subscribe(response => console.log(response), err => alert(err));
    }
    onLogin() {
        this.service.onLogin(this.user).subscribe(response => {
            if (response != null) {
                sessionStorage.setItem('user', this.user.email);
                sessionStorage.setItem('id', response.id.toString());
                alert('Logged IN');
                this.router.navigate(['']);
            }
            else {
                alert(`Enter credentials correctly`);
            }
        }, err => alert(err));
    }
    onSave() {
    }
    ngOnInit() {
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _login__WEBPACK_IMPORTED_MODULE_2__["Login"] },
    { type: _home_service_service__WEBPACK_IMPORTED_MODULE_3__["HomeServiceService"] },
    { type: _user_login__WEBPACK_IMPORTED_MODULE_4__["UserLogin"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")).default]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/login.ts":
/*!**************************!*\
  !*** ./src/app/login.ts ***!
  \**************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Login {
}


/***/ }),

/***/ "./src/app/product-page/product-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-page/product-page.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtcGFnZS9wcm9kdWN0LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/product-page/product-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-page/product-page.component.ts ***!
  \********************************************************/
/*! exports provided: ProductPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageComponent", function() { return ProductPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");



let ProductPageComponent = class ProductPageComponent {
    constructor(prodS) {
        this.prodS = prodS;
        this.product = this.prodS.getProd();
    }
    ngOnInit() {
    }
};
ProductPageComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
ProductPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-page/product-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-page.component.css */ "./src/app/product-page/product-page.component.css")).default]
    })
], ProductPageComponent);



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductService = class ProductService {
    constructor() { }
    getProd() {
        let temp = this.prod;
        this.prod = undefined;
        return temp;
    }
    setProd(data) {
        this.prod = data;
    }
};
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/user-login.ts":
/*!*******************************!*\
  !*** ./src/app/user-login.ts ***!
  \*******************************/
/*! exports provided: UserLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserLogin {
    constructor() {
        this.fullname = "";
        this.mobile = 0;
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/abhi/git/SPE/FrontENd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map