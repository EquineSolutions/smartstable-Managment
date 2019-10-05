(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Role/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Role/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router.js */ "./resources/js/src/router.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
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
 // For custom error message


var dict = {
  custom: {
    role_name: {
      required: 'Please enter the role name'
    }
  }
}; // register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_1__["Validator"].localize('en', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.getPermissions();
  },
  data: function data() {
    return {
      permissions: [],
      role_name: "",
      rolePermissions: [],
      groupPermissions: []
    };
  },
  methods: {
    //Get All Permissions
    getPermissions: function getPermissions() {
      var fire = this;
      axios.get('/api/roles/create', store.state.config).then(function (response) {
        fire.permissions = response.data.data.permission;
      })["catch"](function (error) {
        if (error.response.status == 403) {
          // Un-Authorized
          fire.vs_alert('Oops!', error.response.data.message, 'danger');
          _router_js__WEBPACK_IMPORTED_MODULE_0__["default"].push({
            name: "pageError403"
          });
        } else if (error.response.status == 401) {
          // Un-Authenticated
          _router_js__WEBPACK_IMPORTED_MODULE_0__["default"].push({
            name: "pageLogin"
          });
        }
      });
    },
    //Create Role Submission
    submitForm: function submitForm() {
      var _this = this;

      var fire = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          // if form have no errors
          var formData = new FormData();
          formData.append('name', _this.role_name);

          for (var i = 0; i < fire.rolePermissions.length; i++) {
            formData.append('permission[]', fire.rolePermissions[i]);
          }

          axios.post('/api/roles', formData, store.state.config).then(function (response) {
            if (response.data.status == 200) {
              fire.vs_alert('Success', 'Role Successfully Added', 'success');
              _router_js__WEBPACK_IMPORTED_MODULE_0__["default"].push({
                name: "role"
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
              _router_js__WEBPACK_IMPORTED_MODULE_0__["default"].push({
                name: "pageError403"
              });
            } else if (error.response.status == 401) {
              // Un-Authenticated
              _router_js__WEBPACK_IMPORTED_MODULE_0__["default"].push({
                name: "pageLogin"
              });
            }
          });
        } else {
          _this.vs_alert('Oops!', 'Please, solve all issues before submitting.', 'danger');
        }
      });
    },
    //Check and Un-Check by group
    groupPressed: function groupPressed(group) {
      if (this.groupPermissions.includes(group[0].group)) {
        for (var i = 0; i < group.length; i++) {
          if (!this.rolePermissions.includes(group[i].name)) this.rolePermissions.push(group[i].name);
        }
      } else {
        for (var i = 0; i < group.length; i++) {
          if (this.rolePermissions.includes(group[i].name)) this.rolePermissions.splice(this.rolePermissions.indexOf(group[i].name), 1);
        }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Role/Create.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Role/Create.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".centerx li {\n  display: inline-flex;\n  margin: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Role/Create.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Role/Create.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Role/Create.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Role/Create.vue?vue&type=template&id=6f300b1b&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Role/Create.vue?vue&type=template&id=6f300b1b& ***!
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
  return _vm.can("add-roles")
    ? _c(
        "div",
        [
          _c("vx-card", { attrs: { title: "Create New Role" } }, [
            _c("form", [
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col w-full mb-2" },
                  [
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: {
                        "icon-pack": "feather",
                        icon: "icon-shield",
                        "icon-no-border": "",
                        "label-placeholder": "Role Name",
                        name: "role_name"
                      },
                      model: {
                        value: _vm.role_name,
                        callback: function($$v) {
                          _vm.role_name = $$v
                        },
                        expression: "role_name"
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
                            value: _vm.errors.has("role_name"),
                            expression: "errors.has('role_name')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("role_name")))]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row mt-5" }, [
                _c(
                  "div",
                  { staticClass: "vx-col w-full" },
                  [
                    _c("b", [_vm._v("Role Permissions:")]),
                    _vm._v(" "),
                    _vm._l(_vm.permissions, function(group, groupName) {
                      return _c(
                        "ul",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "vs-checkbox",
                            {
                              attrs: { "vs-value": groupName },
                              on: {
                                change: function($event) {
                                  return _vm.groupPressed(group)
                                }
                              },
                              model: {
                                value: _vm.groupPermissions,
                                callback: function($$v) {
                                  _vm.groupPermissions = $$v
                                },
                                expression: "groupPermissions"
                              }
                            },
                            [_c("b", [_vm._v(_vm._s(groupName))])]
                          ),
                          _vm._v(" "),
                          _vm._l(group, function(permission, index) {
                            return _c(
                              "li",
                              { key: index, staticClass: "ml-8" },
                              [
                                _c(
                                  "vs-checkbox",
                                  {
                                    attrs: { "vs-value": permission.name },
                                    model: {
                                      value: _vm.rolePermissions,
                                      callback: function($$v) {
                                        _vm.rolePermissions = $$v
                                      },
                                      expression: "rolePermissions"
                                    }
                                  },
                                  [_vm._v(_vm._s(permission.display_name))]
                                )
                              ],
                              1
                            )
                          })
                        ],
                        2
                      )
                    })
                  ],
                  2
                )
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
                            _vm.role_name = ""
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

/***/ "./resources/js/src/views/Role/Create.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/Role/Create.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_6f300b1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=6f300b1b& */ "./resources/js/src/views/Role/Create.vue?vue&type=template&id=6f300b1b&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Role/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Role/Create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_6f300b1b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_6f300b1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Role/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Role/Create.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/Role/Create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Role/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Role/Create.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/Role/Create.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Role/Create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Role/Create.vue?vue&type=template&id=6f300b1b&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/Role/Create.vue?vue&type=template&id=6f300b1b& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6f300b1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=6f300b1b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Role/Create.vue?vue&type=template&id=6f300b1b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6f300b1b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6f300b1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);