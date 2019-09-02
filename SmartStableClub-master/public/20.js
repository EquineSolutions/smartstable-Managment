(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/Horses.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Horse/Horses.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Horses",
  mounted: function mounted() {
    this.getData();
  },
  data: function data() {
    return {
      horseIdToDelete: null,
      horses: []
    };
  },
  methods: {
    //Get A List Of All Horses.
    getData: function getData() {
      // this.horses = horsesData.data;
      var fire = this;
      axios.get('/api/horses', store.state.config).then(function (response) {
        fire.horses = response.data.data;
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
    // Confirm Dialog To Delete The Horse
    confirmDeleteHorse: function confirmDeleteHorse(horse) {
      var fire = this;
      this.horseIdToDelete = horse.id;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: fire.deleteHorse
      });
    },
    //Delete A Single Horse By HorseID.
    deleteHorse: function deleteHorse() {
      var fire = this;
      axios["delete"]("/api/horses/".concat(this.horseIdToDelete), store.state.config).then(function (response) {
        if (response.data.status === 200) {
          fire.vs_alert('Success', 'Horse Successfully Deleted', 'success');
          fire.horses = fire.horses.filter(function (value) {
            return value.id != fire.horseIdToDelete;
          });
        } else {
          fire.vs_alert('Oops!', 'An error has been occurred.', 'danger');
        }
      })["catch"](function (error) {
        if (error.response.status === 403) {
          // Un-Authorized
          fire.vs_alert('Oops!', error.response.data.message, 'danger');
          router.push({
            name: "pageError403"
          });
        } else if (error.response.status === 401) {
          // Un-Authenticated
          router.push({
            name: "pageLogin"
          });
        }
      });
    },
    //Navigate To A New Page With Route Name And horseID
    redirect: function redirect(name, horseID) {
      // this.hideTooltip();
      this.$router.push({
        name: name,
        params: {
          id: horseID
        }
      });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/Horses.vue?vue&type=template&id=666fd4f2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Horse/Horses.vue?vue&type=template&id=666fd4f2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _vm.can("browse-horses")
    ? _c(
        "div",
        [
          _c(
            "vx-card",
            {
              attrs: {
                title: "Horses List",
                hasNavigationButton: true,
                buttonURL: "/horse/create",
                buttonText: "Create Horse",
                buttonIcon: "icon-plus",
                buttonPermission: "add-horses"
              }
            },
            [
              _c(
                "vs-table",
                {
                  attrs: { search: "", data: _vm.horses },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var data = ref.data
                          return _vm._l(data, function(horse, indextr) {
                            return _c(
                              "vs-tr",
                              { key: indextr },
                              [
                                _c("vs-td", { attrs: { data: horse.id } }, [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(horse.id) +
                                      "\n                    "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", { attrs: { data: horse.name } }, [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(horse.name) +
                                      "\n                    "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", { attrs: { data: horse.fei_id } }, [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(horse.fei_id) +
                                      "\n                    "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", { attrs: { data: horse.sex } }, [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(horse.sex.name) +
                                      "\n                    "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  [
                                    _c("vs-row", [
                                      _c("div", { staticClass: "flex mb-4" }, [
                                        _c(
                                          "div",
                                          { staticClass: "w-1/3" },
                                          [
                                            _vm.can("view-horses")
                                              ? _c("vs-button", {
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
                                                        "view-horse",
                                                        horse.id
                                                      )
                                                    }
                                                  }
                                                })
                                              : _vm._e()
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass: "w-1/3",
                                            staticStyle: { margin: "0 10px" }
                                          },
                                          [
                                            _vm.can("edit-horses")
                                              ? _c("vs-button", {
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
                                                        "edit-horse",
                                                        horse.id
                                                      )
                                                    }
                                                  }
                                                })
                                              : _vm._e()
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "w-1/3" },
                                          [
                                            _vm.can("delete-horses")
                                              ? _c("vs-button", {
                                                  attrs: {
                                                    radius: "",
                                                    color: "danger",
                                                    type: "border",
                                                    "icon-pack": "feather",
                                                    icon: "icon-trash"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.confirmDeleteHorse(
                                                        horse
                                                      )
                                                    }
                                                  }
                                                })
                                              : _vm._e()
                                          ],
                                          1
                                        )
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
                    1431060182
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
                      _c("vs-th", { attrs: { "sort-key": "name" } }, [
                        _vm._v("Name")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "fei_id" } }, [
                        _vm._v("FEI_ID")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "sex" } }, [
                        _vm._v("Gender")
                      ]),
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

/***/ "./resources/js/src/views/Horse/Horses.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/Horse/Horses.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Horses_vue_vue_type_template_id_666fd4f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Horses.vue?vue&type=template&id=666fd4f2&scoped=true& */ "./resources/js/src/views/Horse/Horses.vue?vue&type=template&id=666fd4f2&scoped=true&");
/* harmony import */ var _Horses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Horses.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Horse/Horses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Horses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Horses_vue_vue_type_template_id_666fd4f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Horses_vue_vue_type_template_id_666fd4f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "666fd4f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Horse/Horses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Horse/Horses.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/Horse/Horses.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Horses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Horses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/Horses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Horses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Horse/Horses.vue?vue&type=template&id=666fd4f2&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/Horse/Horses.vue?vue&type=template&id=666fd4f2&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Horses_vue_vue_type_template_id_666fd4f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Horses.vue?vue&type=template&id=666fd4f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/Horses.vue?vue&type=template&id=666fd4f2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Horses_vue_vue_type_template_id_666fd4f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Horses_vue_vue_type_template_id_666fd4f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);