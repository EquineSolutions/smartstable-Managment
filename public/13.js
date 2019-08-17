(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/View.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Client/View.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.getClientData();
  },
  data: function data() {
    return {
      client: null
    };
  },
  methods: {
    //Display Client Data.
    getClientData: function getClientData() {
      var fire = this;
      axios.get("/api/users/".concat(this.$route.params.id), store.state.config).then(function (response) {
        fire.client = response.data.data;
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
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/View.vue?vue&type=template&id=69f5b262&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Client/View.vue?vue&type=template&id=69f5b262& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _vm.can("view-users")
    ? _c(
        "div",
        [
          _c(
            "vx-card",
            { attrs: { title: "Client Information" } },
            [
              _vm.client != null
                ? [
                    _c("b", [_vm._v("ID: ")]),
                    _vm._v("  " + _vm._s(_vm.client.id) + "\n            "),
                    _c("vs-divider"),
                    _vm._v(" "),
                    _c("b", [_vm._v("Name: ")]),
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm.client.first_name + " " + _vm.client.last_name
                        ) +
                        "\n            "
                    ),
                    _c("vs-divider"),
                    _vm._v(" "),
                    _c("b", [_vm._v("Email: ")]),
                    _vm._v(" " + _vm._s(_vm.client.email) + "\n            "),
                    _c("vs-divider"),
                    _vm._v(" "),
                    _c("b", [_vm._v("Mobile: ")]),
                    _vm._v(" " + _vm._s(_vm.client.mobile) + "\n            "),
                    _c("vs-divider"),
                    _vm._v(" "),
                    _c("b", [_vm._v("Birth Date: ")]),
                    _vm._v(" 18-10-1997\n            "),
                    _c("vs-divider"),
                    _vm._v(" "),
                    _vm.client.email_verified_at != null
                      ? _c("vs-chip", { attrs: { color: "success" } }, [
                          _vm._v("Verified")
                        ])
                      : _c("vs-chip", { attrs: { color: "danger" } }, [
                          _vm._v("Not Verified")
                        ]),
                    _vm._v(" "),
                    _c("br")
                  ]
                : [
                    _c(
                      "vs-row",
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-type": "flex",
                              "vs-justify": "center",
                              "vs-align": "center",
                              "vs-w": "12"
                            }
                          },
                          [_c("b", [_vm._v("Client Is Not Available!")])]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-type": "flex",
                              "vs-justify": "center",
                              "vs-align": "center",
                              "vs-w": "12"
                            }
                          },
                          [
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  size: "small",
                                  type: "gradient",
                                  "icon-pack": "feather",
                                  icon: "icon-arrow-left"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.$router.go(-1)
                                  }
                                }
                              },
                              [_vm._v("Go Back")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
            ],
            2
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Client/View.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/Client/View.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_69f5b262___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=69f5b262& */ "./resources/js/src/views/Client/View.vue?vue&type=template&id=69f5b262&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Client/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_69f5b262___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_69f5b262___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Client/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Client/View.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/Client/View.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Client/View.vue?vue&type=template&id=69f5b262&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/Client/View.vue?vue&type=template&id=69f5b262& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_69f5b262___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=69f5b262& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/View.vue?vue&type=template&id=69f5b262&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_69f5b262___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_69f5b262___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);