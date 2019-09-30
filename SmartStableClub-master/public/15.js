(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/Create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Client/Create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
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
//For Date Picker

 // For custom error message


var dict = {
  custom: {
    first_name: {
      required: 'Please enter your first name',
      alpha: "Your first name may only contain alphabetic characters"
    },
    middle_name: {
      required: 'Please enter your middle name',
      alpha: "Your middle name may only contain alphabetic characters"
    },
    last_name: {
      required: 'Please enter your last name',
      alpha: "Your last name may only contain alphabetic characters"
    }
  }
}; // register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_2__["Validator"].localize('en', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Create',
  data: function data() {
    return {
      clientFormData: {
        first_name: "",
        last_name: "",
        middle_name: "",
        email: "",
        mobile: "",
        birth_year: null,
        national_id: []
      }
    };
  },
  methods: {
    uploadID: function uploadID(e) {
      var selectedFiles = e.target.files;

      if (!selectedFiles.length) {
        return false;
      }

      for (var i = 0; i < selectedFiles.length; i++) {
        this.clientFormData.national_id.push(selectedFiles[i]);
      }
    },
    submitForm: function submitForm() {
      var _this = this;

      var fire = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          // if form have no errors
          for (var key in fire.clientFormData) {
            if (key == 'national_id') {
              for (var i = 0; i < _this.formData[key].length; i++) {
                form_data.append(key + '[]', _this.formData[key][i]);
              }
            } else {
              form_data.append(key, _this.formData[key]);
            }
          }

          axios.post('/api/users', formData, store.state.config).then(function (response) {
            if (response.data.status == 200) {
              fire.vs_alert('Success', 'Client Successfully Added', 'success');
              fire.$router.push({
                name: "user"
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
              fire.$router.push({
                name: "pageError403"
              });
            } else if (error.response.status == 401) {
              // Un-Authenticated
              fire.$router.push({
                name: "pageLogin"
              });
            }
          });
        } else {
          _this.vs_alert('Oops!', 'Please, solve all issues before submitting.', 'danger');
        }
      });
    },
    //Calculates the age
    GetAge: function GetAge(date) {
      var today = new Date(),
          birthDate = new Date(date),
          age = today.getFullYear() - birthDate.getFullYear(),
          m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
        age--;
      }

      return age > 0 ? age : 0;
    },
    //Vuesax alert
    vs_alert: function vs_alert(title, text, color) {
      this.$vs.notify({
        title: title,
        text: text,
        color: color
      });
    }
  },
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/Create.vue?vue&type=template&id=1de5cd26&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Client/Create.vue?vue&type=template&id=1de5cd26& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _vm.can("add-users")
    ? _c(
        "div",
        [
          _c("vx-card", { attrs: { title: "Create New Client" } }, [
            _c("form", [
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col sm:w-1/3 w-full mb-2" },
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
                        "label-placeholder": "First Name",
                        name: "first_name"
                      },
                      model: {
                        value: _vm.clientFormData.first_name,
                        callback: function($$v) {
                          _vm.$set(_vm.clientFormData, "first_name", $$v)
                        },
                        expression: "clientFormData.first_name"
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
                            value: _vm.errors.has("first_name"),
                            expression: "errors.has('first_name')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("first_name")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col sm:w-1/3 w-full mb-2" },
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
                        "label-placeholder": "Middle Name",
                        name: "middle_name"
                      },
                      model: {
                        value: _vm.clientFormData.middle_name,
                        callback: function($$v) {
                          _vm.$set(_vm.clientFormData, "middle_name", $$v)
                        },
                        expression: "clientFormData.middle_name"
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
                            value: _vm.errors.has("middle_name"),
                            expression: "errors.has('middle_name')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("middle_name")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col sm:w-1/3 w-full mb-2" },
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
                        "label-placeholder": "Last Name",
                        name: "last_name"
                      },
                      model: {
                        value: _vm.clientFormData.last_name,
                        callback: function($$v) {
                          _vm.$set(_vm.clientFormData, "last_name", $$v)
                        },
                        expression: "clientFormData.last_name"
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
                            value: _vm.errors.has("last_name"),
                            expression: "errors.has('last_name')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("last_name")))]
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
                          value: "required|email",
                          expression: "'required|email'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: {
                        type: "email",
                        "icon-pack": "feather",
                        icon: "icon-mail",
                        "icon-no-border": "",
                        "label-placeholder": "Email",
                        name: "email"
                      },
                      model: {
                        value: _vm.clientFormData.email,
                        callback: function($$v) {
                          _vm.$set(_vm.clientFormData, "email", $$v)
                        },
                        expression: "clientFormData.email"
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
                            value: _vm.errors.has("email"),
                            expression: "errors.has('email')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("email")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
                  [
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "decimal:11",
                          expression: "'decimal:11'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: {
                        "icon-pack": "feather",
                        icon: "icon-phone",
                        "icon-no-border": "",
                        "label-placeholder": "Mobile",
                        name: "mobile"
                      },
                      model: {
                        value: _vm.clientFormData.mobile,
                        callback: function($$v) {
                          _vm.$set(_vm.clientFormData, "mobile", $$v)
                        },
                        expression: "clientFormData.mobile"
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
                            value: _vm.errors.has("mobile"),
                            expression: "errors.has('mobile')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("mobile")))]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/2 w-full mt-2" },
                  [
                    _c("label", [_vm._v("Birth Date")]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("flat-pickr", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|date_format:yyyy-MM-dd",
                          expression: "'required|date_format:yyyy-MM-dd'"
                        }
                      ],
                      attrs: {
                        name: "date_of_birth",
                        placeholder: "Select Birth Date"
                      },
                      model: {
                        value: _vm.clientFormData.birth_year,
                        callback: function($$v) {
                          _vm.$set(_vm.clientFormData, "birth_year", $$v)
                        },
                        expression: "clientFormData.birth_year"
                      }
                    }),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _vm.clientFormData.birth_year != null
                      ? _c("span", [
                          _c("b", [_vm._v("Age: ")]),
                          _vm._v(
                            _vm._s(_vm.GetAge(_vm.clientFormData.birth_year)) +
                              " Year(s)"
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("date_of_birth"),
                            expression: "errors.has('date_of_birth')"
                          }
                        ],
                        staticClass: "text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("date_of_birth")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-2" }, [
                  _c("label", [_vm._v("Upload National ID Photo")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "file" },
                    on: { change: _vm.uploadID }
                  })
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
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-button",
                      {
                        staticClass: "mb-2",
                        attrs: { color: "warning", type: "border" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.clientFormData.fname = _vm.clientFormData.lname = _vm.clientFormData.email = _vm.clientFormData.mobile =
                              ""
                          }
                        }
                      },
                      [_vm._v("Reset")]
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Client/Create.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/Client/Create.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_1de5cd26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=1de5cd26& */ "./resources/js/src/views/Client/Create.vue?vue&type=template&id=1de5cd26&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Client/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_1de5cd26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_1de5cd26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Client/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Client/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/Client/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Client/Create.vue?vue&type=template&id=1de5cd26&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/Client/Create.vue?vue&type=template&id=1de5cd26& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_1de5cd26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=1de5cd26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Client/Create.vue?vue&type=template&id=1de5cd26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_1de5cd26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_1de5cd26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);