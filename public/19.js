(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Package/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Package/Edit.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.getData();
  },
  data: function data() {
    return {
      name: "",
      description: '',
      key: "",
      checked: "",
      selected: "",
      packageFeatures: []
    };
  },
  methods: {
    //Get Feature Data
    getData: function getData() {
      var fire = this;
      axios.get("/api/packages/".concat(this.$route.params.id, "/edit"), store.state.config).then(function (response) {
        var package_info = response.data.data["package"];
        var features = response.data.data.features;

        for (var i = 0; i < response.data.data.features.length; i++) {
          fire.packageFeatures.push(response.data.data.features[i].name);
        }

        fire.name = package_info.name;
        fire.description = package_info.description;
        fire.price = package_info.price;
        fire.checked = package_info.enable;
        fire.duration = package_info.duration;
        fire.logo = package_info.logo;
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
    //Update Feature Submission
    submitForm: function submitForm() {
      var _this = this;

      var fire = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          // if form have no errors
          var data = {
            name: _this.name,
            description: _this.description,
            key: _this.key,
            enable: _this.checked,
            priority: _this.selected,
            packageFeatures: _this.packageFeatures
          };
          axios.put("/api/features/".concat(_this.$route.params.id), data, store.state.config).then(function (response) {
            if (response.data.status == 200) {
              fire.vs_alert('Success', 'Feature Successfully Updated', 'success');
              router.push({
                name: "feature"
              });
            } else {
              fire.vs_alert('Oops!', response.data, 'danger');
            }
          })["catch"](function (error) {
            if (error.response.status == 422) {
              // Validation Error
              var errors = error.response.data.errors;
              fire.vs_alert('Oops!', errors[Object.keys(errors)[0]][0], 'danger');
            } else if (error.response.status == 403) {
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
        } else {
          _this.vs_alert('Oops!', 'Please, solve all issues before submitting.', 'danger');
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Package/Edit.vue?vue&type=template&id=dba4ba06&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Package/Edit.vue?vue&type=template&id=dba4ba06& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _vm.can("edit-packages")
    ? _c("div", [
        _c(
          "div",
          [
            _c("vx-card", { attrs: { title: "Update package" } }, [
              _c("form", [
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|alpha",
                            expression: "'required|alpha'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-user",
                          "icon-no-border": "",
                          "label-placeholder": "Name",
                          name: "name"
                        },
                        model: {
                          value: _vm.name,
                          callback: function($$v) {
                            _vm.name = $$v
                          },
                          expression: "name"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("name"),
                              expression: "errors.has('name')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("name")))]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|decimal",
                            expression: "'required|decimal'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-user",
                          "icon-no-border": "",
                          "label-placeholder": "Duration",
                          name: "duration"
                        },
                        model: {
                          value: _vm.duration,
                          callback: function($$v) {
                            _vm.duration = $$v
                          },
                          expression: "duration"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("duration"),
                              expression: "errors.has('duration')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("duration")))]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|decimal",
                            expression: "'required|decimal'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-mail",
                          "icon-no-border": "",
                          "label-placeholder": "Price",
                          name: "price"
                        },
                        model: {
                          value: _vm.email,
                          callback: function($$v) {
                            _vm.email = $$v
                          },
                          expression: "email"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("price"),
                              expression: "errors.has('price')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("price")))]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c("span", [_vm._v("Description")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
                    [
                      _c("vs-textarea", {
                        staticClass: "w-full",
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-phone",
                          "icon-no-border": "",
                          "label-placeholder": "Description",
                          name: "description"
                        },
                        model: {
                          value: _vm.description,
                          callback: function($$v) {
                            _vm.description = $$v
                          },
                          expression: "description"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("description"),
                              expression: "errors.has('description')"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("description")))]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c("div", { staticClass: "dropbox" }, [
                    _c("input", {
                      ref: "file",
                      attrs: { type: "file", id: "file", accept: "image/*" },
                      on: {
                        change: function($event) {
                          return _vm.handleFileUpload()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("img", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.showPreview,
                          expression: "showPreview"
                        }
                      ],
                      attrs: { src: _vm.imagePreview }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c("label", [_vm._v("Enable")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-2" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.checked,
                          expression: "checked"
                        }
                      ],
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.checked)
                          ? _vm._i(_vm.checked, null) > -1
                          : _vm.checked
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.checked,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.checked = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.checked = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.checked = $$c
                          }
                        }
                      }
                    }),
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.checked ? "yes" : "no") +
                        "\n\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row mt-5" }, [
                  _c("div", { staticClass: "vx-col w-full" }, [
                    _c("b", [_vm._v("Package Feature:")]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "centerx" },
                      _vm._l(_vm.features, function(feature, index) {
                        return _c(
                          "li",
                          { key: index },
                          [
                            feature.priority === "basic"
                              ? _c(
                                  "vs-checkbox",
                                  {
                                    attrs: {
                                      "vs-value": feature.id,
                                      disabled: "true",
                                      checked: "true"
                                    },
                                    model: {
                                      value: _vm.packageFeatures[index],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.packageFeatures,
                                          index,
                                          $$v
                                        )
                                      },
                                      expression: "packageFeatures[index]"
                                    }
                                  },
                                  [_vm._v(_vm._s(feature.name))]
                                )
                              : _c(
                                  "vs-checkbox",
                                  {
                                    attrs: { "vs-value": feature.id },
                                    model: {
                                      value: _vm.packageFeatures,
                                      callback: function($$v) {
                                        _vm.packageFeatures = $$v
                                      },
                                      expression: "packageFeatures"
                                    }
                                  },
                                  [_vm._v(_vm._s(feature.name))]
                                )
                          ],
                          1
                        )
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row mt-10" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full" },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "mr-3 mb-2",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.submitForm($event)
                            }
                          }
                        },
                        [_vm._v("Submit")]
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          ],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Package/Edit.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/Package/Edit.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_dba4ba06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=dba4ba06& */ "./resources/js/src/views/Package/Edit.vue?vue&type=template&id=dba4ba06&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Package/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_dba4ba06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_dba4ba06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Package/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Package/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/Package/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Package/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Package/Edit.vue?vue&type=template&id=dba4ba06&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/Package/Edit.vue?vue&type=template&id=dba4ba06& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_dba4ba06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=dba4ba06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Package/Edit.vue?vue&type=template&id=dba4ba06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_dba4ba06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_dba4ba06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);