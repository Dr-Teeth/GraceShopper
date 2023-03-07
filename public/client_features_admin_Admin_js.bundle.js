"use strict";
(self["webpackChunkgraceshopper"] = self["webpackChunkgraceshopper"] || []).push([["client_features_admin_Admin_js"],{

/***/ "./client/features/admin/Admin.js":
/*!****************************************!*\
  !*** ./client/features/admin/Admin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _products_AllProductsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products/AllProductsSlice */ "./client/features/products/AllProductsSlice.js");
/* harmony import */ var _adminSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminSlice */ "./client/features/admin/adminSlice.js");





var Admin = function Admin() {
  var username = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.me.username;
  });
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_products_AllProductsSlice__WEBPACK_IMPORTED_MODULE_2__.selectAllProducts),
    products = _useSelector.products,
    status = _useSelector.status,
    error = _useSelector.error;
  var users = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_adminSlice__WEBPACK_IMPORTED_MODULE_3__.allUsers);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_products_AllProductsSlice__WEBPACK_IMPORTED_MODULE_2__.fetchProductsAsync)());
    dispatch((0,_adminSlice__WEBPACK_IMPORTED_MODULE_3__.fetchAllUsers)());
  }, [dispatch]);
  if (status === 'loading') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
  }
  ;
  if (status === 'failed') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, error);
  }
  ;
  if (products.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, _products_AllProductsSlice__WEBPACK_IMPORTED_MODULE_2__.selectAllProducts ? "No products found" : "No Users Found");
  }
  ;
  var handleDeleteProduct = function handleDeleteProduct(id) {
    dispatch((0,_products_AllProductsSlice__WEBPACK_IMPORTED_MODULE_2__.deleteProductAsync)(id));
    dispatch((0,_products_AllProductsSlice__WEBPACK_IMPORTED_MODULE_2__.fetchProductsAsync)());
  };
  var handleDeleteUser = function handleDeleteUser(id) {
    dispatch((0,_adminSlice__WEBPACK_IMPORTED_MODULE_3__.deleteUserAsync)(id));
    dispatch((0,_adminSlice__WEBPACK_IMPORTED_MODULE_3__.fetchAllUsers)());
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Hello, ", username, " Welcome to the Admin Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "View all Products and Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/dashboard/addProduct"
  }, "Add a Product?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "All Users"), users.map(function (user, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: idx
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Full Name: ", user.firstN, " ", user.lastN), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Username: ", user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Address: ", user.address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Phone: ", user.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Email: ", user.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Admin Status: ", user.isAdmin ? 'Admin' : 'Not Admin'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: "/dashboard/editUser/".concat(user.id)
    }, "Edit User")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return handleDeleteUser(user.id);
      }
    }, "\u274C"));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "All Products"), products.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: product.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: product.imageUrl,
      alt: product.name
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Price: $", product.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Quantity: ", product.quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Description: ", product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: "/dashboard/editProduct/".concat(product.id)
    }, "Edit Product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return handleDeleteProduct(product.id);
      }
    }, "\u274C"));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);

/***/ })

}]);
//# sourceMappingURL=client_features_admin_Admin_js.bundle.js.map