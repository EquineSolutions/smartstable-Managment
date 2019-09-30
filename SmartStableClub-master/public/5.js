(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/Clients.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Client/Clients.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Clients',
  mounted: function mounted() {
    this.getData();
  },
  data: function data() {
    return {
      clients: [],
      clientIDToDelete: null
    };
  },
  methods: {
    //Get A List Of All Clients.
    getData: function getData() {
      var fire = this;
      axios.get('/api/users', store.state.config).then(function (response) {
        fire.clients = response.data.data;
      })["catch"](function (error) {
        if (error.response.status == 403) {
          // Un-Authorized
          fire.vs_alert('Oops!', error.response.data.message, 'danger');
          router.push({
            name: "pageError403"
          });
        } else if (error.response.status == 401) {
          // Un-Authenticated
          router.push({
            name: "pageLogin"
          });
        }
      });
    },
    // Confirm Dialog To Delete The Client
    confirmDeleteClient: function confirmDeleteClient(client) {
      var fire = this;
      this.clientIDToDelete = client.id;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: fire.deleteClient
      });
    },
    //Delete A Single Client By ClientID.
    deleteClient: function deleteClient() {
      var fire = this;
      axios["delete"]("/api/clients/".concat(this.clientIDToDelete), store.state.config).then(function (response) {
        if (response.data.status == 200) {
          fire.vs_alert('Success', 'Client Successfully Deleted', 'success');
          fire.clients = fire.clients.filter(function (value) {
            return value.id != fire.clientIDToDelete;
          });
        } else {
          fire.vs_alert('Oops!', 'An error has been occurred.', 'danger');
        }
      })["catch"](function (error) {
        if (error.response.status == 403) {
          // Un-Authorized
          fire.vs_alert('Oops!', error.response.data.message, 'danger');
          router.push({
            name: "pageError403"
          });
        } else if (error.response.status == 401) {
          // Un-Authenticated
          router.push({
            name: "pageLogin"
          });
        }
      });
    },
    //Navigate To A New Page With Route Name And ClientID
    redirect: function redirect(name, clientID) {
      this.$router.push({
        name: name,
        params: {
          id: clientID
        }
      });
    },
    //Hide Tool Tip Before Navigation
    hideTooltip: function hideTooltip() {
      var el = document.getElementsByClassName('vs-tooltip');

      while (el.length > 0) {
        el[0].parentNode.removeChild(el[0]);
      }
    },
    //Vuesax alert
    vs_alert: function vs_alert(title, text, color) {
      this.$vs.notify({
        title: title,
        text: text,
        color: color
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/Clients.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Client/Clients.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vs-con-table .vs-table--header .vs-table--search {\n  padding: 0px;\n}\n.vs-table--content {\n  margin-top: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/Clients.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Client/Clients.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/Clients.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/Clients.vue?vue&type=template&id=94dee164&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Client/Clients.vue?vue&type=template&id=94dee164& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.can("browse-users")
    ? _c(
        "div",
        [
          _c(
            "vx-card",
            {
              attrs: {
                title: "Clients List",
                hasNavigationButton: true,
                buttonURL: "/client/create",
                buttonText: "Create Client",
                buttonIcon: "icon-plus",
                buttonPermission: "add-users"
              }
            },
            [
              _c(
                "vs-table",
                {
                  attrs: { search: "", data: _vm.clients },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var data = ref.data
                          return _vm._l(data, function(tr, indextr) {
                            return _c(
                              "vs-tr",
                              { key: indextr },
                              [
                                _c(
                                  "vs-td",
                                  { attrs: { data: data[indextr].id } },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(data[indextr].id) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: data[indextr].first_name } },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(
                                          data[indextr].first_name +
                                            " " +
                                            data[indextr].last_name
                                        ) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: data[indextr].email } },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(data[indextr].email) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: data[indextr].mobile } },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(data[indextr].mobile) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  [
                                    data[indextr].email_verified_at != null
                                      ? _c(
                                          "vs-chip",
                                          { attrs: { color: "success" } },
                                          [_vm._v("Verified")]
                                        )
                                      : _c(
                                          "vs-chip",
                                          { attrs: { color: "danger" } },
                                          [_vm._v("Not Verified")]
                                        )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  [
                                    _c("vs-row", [
                                      _c("div", { staticClass: "flex mb-4" }, [
                                        _vm.can("view-users")
                                          ? _c(
                                              "div",
                                              { staticClass: "w-1/3" },
                                              [
                                                _c("vs-button", {
                                                  attrs: {
                                                    radius: "",
                                                    color: "primary",
                                                    type: "border",
                                                    "icon-pack": "feather",
                                                    icon: "icon-eye"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.redirect(
                                                        "view-client",
                                                        data[indextr].id
                                                      )
                                                    }
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.can("edit-users")
                                          ? _c(
                                              "div",
                                              {
                                                staticClass: "w-1/3",
                                                staticStyle: {
                                                  margin: "0 10px"
                                                }
                                              },
                                              [
                                                _c("vs-button", {
                                                  attrs: {
                                                    radius: "",
                                                    color: "warning",
                                                    type: "border",
                                                    "icon-pack": "feather",
                                                    icon: "icon-edit"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.redirect(
                                                        "edit-client",
                                                        data[indextr].id
                                                      )
                                                    }
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.can("delete-users")
                                          ? _c(
                                              "div",
                                              { staticClass: "w-1/3" },
                                              [
                                                _c("vs-button", {
                                                  attrs: {
                                                    radius: "",
                                                    color: "danger",
                                                    type: "border",
                                                    "icon-pack": "feather",
                                                    icon: "icon-trash"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.confirmDeleteClient(
                                                        data[indextr]
                                                      )
                                                    }
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ])
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          })
                        }
                      }
                    ],
                    null,
                    false,
                    1927276230
                  )
                },
                [
                  _c(
                    "template",
                    { slot: "thead" },
                    [
                      _c("vs-th", { attrs: { "sort-key": "id" } }, [
                        _vm._v("ID")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "first_name" } }, [
                        _vm._v("Name")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "email" } }, [
                        _vm._v("Email")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "mobile" } }, [
                        _vm._v("Mobile")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Is Verified")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Action")])
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Client/Clients.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/Client/Clients.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Clients_vue_vue_type_template_id_94dee164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clients.vue?vue&type=template&id=94dee164& */ "./resources/js/src/views/Client/Clients.vue?vue&type=template&id=94dee164&");
/* harmony import */ var _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clients.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Client/Clients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Clients_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Clients.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Client/Clients.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Clients_vue_vue_type_template_id_94dee164___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Clients_vue_vue_type_template_id_94dee164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Client/Clients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Client/Clients.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/Client/Clients.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/Clients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Client/Clients.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/Client/Clients.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/Clients.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Client/Clients.vue?vue&type=template&id=94dee164&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/Client/Clients.vue?vue&type=template&id=94dee164& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_94dee164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=template&id=94dee164& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/Clients.vue?vue&type=template&id=94dee164&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_94dee164___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_94dee164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);