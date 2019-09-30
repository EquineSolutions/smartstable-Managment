(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Horse/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Edit",
  mounted: function mounted() {
    this.getData();
  },
  data: function data() {
    return {
      formData: {
        name: "",
        fei_id: 0,
        national_id: 0,
        country_of_birth: "new-york",
        sex: 0,
        color: "Bay",
        discipline: "Jumping",
        birth_year: null,
        renewal: null,
        fei_expiry_date: null,
        images: [],
        pony: 0,
        height: 0,
        microchip_number: 0,
        identification: [],
        breeding: [],
        stud_book: '',
        father: '',
        mother: ''
      },
      genders: [],
      cityOptions: [{
        text: "New York",
        value: "new-york"
      }, {
        text: "Chicago",
        value: "chicago"
      }, {
        text: "San Francisco",
        value: "san-francisco"
      }, {
        text: "Boston",
        value: "boston"
      }],
      colors: [],
      disciplines: []
    };
  },
  methods: {
    getData: function getData() {
      var fire = this;
      axios.get("/api/horses/".concat(this.$route.params.id, "/edit"), store.state.config).then(function (response) {
        fire.genders = response.data.data.gender;
        fire.colors = response.data.data.colors;
        fire.disciplines = response.data.data.discipline;
        fire.formData = response.data.data.horse;
        response.data.data.horse.father == null ? fire.formData.father = '' : fire.formData.father = response.data.data.horse.father.name;
        response.data.data.horse.mother == null ? fire.formData.mother = '' : fire.formData.mother = response.data.data.horse.mother.name;
      })["catch"](function (error) {
        if (error.response.status === 403) {
          // Un-Authorized
          fire.vs_alert('Oops!', error.response.data.message, 'danger');
          fire.$router.push({
            name: "pageError403"
          });
        } else if (error.response.status === 401) {
          // Un-Authenticated
          fire.$router.push({
            name: "pageLogin"
          });
        }
      });
    },
    validateHorseInfo: function validateHorseInfo() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.$validator.validateAll('step-1').then(function (result) {
          if (result) {
            resolve(true);
          } else {
            reject("correct all values");

            _this.$vs.notify({
              title: 'Oops!',
              text: 'Please, Solve out all the errors to continue.',
              color: 'danger'
            });
          }
        });
      });
    },
    validateIdentification: function validateIdentification() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.$validator.validateAll('step-2').then(function (result) {
          if (result) {
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateBreeding: function validateBreeding() {
      var _this3 = this;

      var fire = this;
      return new Promise(function (resolve, reject) {
        _this3.$validator.validateAll('step-3').then(function (result) {
          if (result) {
            fire.submitHorse();
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    uploadHorseImages: function uploadHorseImages(e) {
      var selectedImages = e.target.files;

      if (!selectedImages.length) {
        return false;
      }

      for (var i = 0; i < selectedImages.length; i++) {
        this.formData.images.push(selectedImages[i]);
      }
    },
    uploadDrawing: function uploadDrawing(e) {
      var selectedFiles = e.target.files;

      if (!selectedFiles.length) {
        return false;
      }

      for (var i = 0; i < selectedFiles.length; i++) {
        this.formData.identification.push(selectedFiles[i]);
      }
    },
    uploadBreeding: function uploadBreeding(e) {
      var selectedFiles = e.target.files;

      if (!selectedFiles.length) {
        return false;
      }

      for (var i = 0; i < selectedFiles.length; i++) {
        this.formData.breeding.push(selectedFiles[i]);
      }
    },
    submitHorse: function submitHorse() {
      var fire = this;
      console.log(this.formData.sex);
      this.formData.sex = this.formData.sex.value;
      axios.put("/api/horses/".concat(this.$route.params.id), this.formData, store.state.config).then(function (response) {
        if (response.data.status === 200) {
          fire.vs_alert('Success', response.data.message, 'success');
          fire.$router.push({
            name: "horse"
          });
        } else {
          fire.vs_alert('Oops!', response.data, 'danger');
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          // Validation Error
          var errors = error.response.data.errors;
          fire.vs_alert('Oops!', errors[Object.keys(errors)[0]][0], 'danger');
        } else if (error.response.status === 403) {
          // Un-Authorized
          fire.vs_alert('Oops!', error.response.data.message, 'danger');
          fire.$router.push({
            name: "pageError403"
          });
        } else if (error.response.status === 401) {
          // Un-Authenticated
          fire.$router.push({
            name: "pageLogin"
          });
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
  },
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["TabContent"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/Edit.vue?vue&type=template&id=562371c6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Horse/Edit.vue?vue&type=template&id=562371c6& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _vm.can("edit-horses")
    ? _c(
        "div",
        [
          _c(
            "vx-card",
            { attrs: { title: "Update Horse Information" } },
            [
              _c(
                "form-wizard",
                {
                  attrs: {
                    color: "rgba(var(--vs-primary), 1)",
                    errorColor: "rgba(var(--vs-danger), 1)",
                    title: "Horse Form",
                    subtitle: "Update horse information",
                    finishButtonText: "Update"
                  }
                },
                [
                  _c(
                    "tab-content",
                    {
                      staticClass: "mb-5",
                      attrs: {
                        title: "Horse Information",
                        "before-change": _vm.validateHorseInfo
                      }
                    },
                    [
                      _c("form", { attrs: { "data-vv-scope": "step-1" } }, [
                        _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
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
                                staticClass: "is-label-placeholder w-full",
                                attrs: {
                                  name: "name",
                                  "icon-pack": "feather",
                                  icon: "icon-user",
                                  "label-placeholder": "Name"
                                },
                                model: {
                                  value: _vm.formData.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "name", $$v)
                                  },
                                  expression: "formData.name"
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
                                  staticClass: "text-danger"
                                },
                                [_vm._v(_vm._s(_vm.errors.first("name")))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
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
                                    expression:
                                      "'required|date_format:yyyy-MM-dd'"
                                  }
                                ],
                                attrs: {
                                  name: "date_of_birth",
                                  placeholder: "Select Birth Date"
                                },
                                model: {
                                  value: _vm.formData.birth_year,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "birth_year", $$v)
                                  },
                                  expression: "formData.birth_year"
                                }
                              }),
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
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("date_of_birth"))
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c(
                                "vs-select",
                                {
                                  staticClass: "w-full select-large",
                                  attrs: { label: "Discipline" },
                                  model: {
                                    value: _vm.formData.discipline,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formData, "discipline", $$v)
                                    },
                                    expression: "formData.discipline"
                                  }
                                },
                                _vm._l(_vm.disciplines, function(item, index) {
                                  return _c("vs-select-item", {
                                    key: index,
                                    staticClass: "w-full",
                                    attrs: { value: item, text: item }
                                  })
                                }),
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.errors.has("discipline"),
                                      expression: "errors.has('discipline')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [_vm._v(_vm._s(_vm.errors.first("discipline")))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c(
                                "vs-select",
                                {
                                  staticClass: "w-full select-large",
                                  attrs: { label: "Sex" },
                                  model: {
                                    value: _vm.formData.sex.value,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formData.sex, "value", $$v)
                                    },
                                    expression: "formData.sex.value"
                                  }
                                },
                                _vm._l(_vm.genders, function(item, index) {
                                  return _c("vs-select-item", {
                                    key: index,
                                    staticClass: "w-full",
                                    attrs: {
                                      value: item.value,
                                      text: item.name
                                    }
                                  })
                                }),
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.errors.has("gender"),
                                      expression: "errors.has('gender')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [_vm._v(_vm._s(_vm.errors.first("gender")))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c(
                                "vs-select",
                                {
                                  staticClass: "w-full select-large",
                                  attrs: { label: "Color" },
                                  model: {
                                    value: _vm.formData.color,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formData, "color", $$v)
                                    },
                                    expression: "formData.color"
                                  }
                                },
                                _vm._l(_vm.colors, function(item, index) {
                                  return _c("vs-select-item", {
                                    key: index,
                                    staticClass: "w-full",
                                    attrs: { value: item, text: item }
                                  })
                                }),
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.errors.has("color"),
                                      expression: "errors.has('color')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [_vm._v(_vm._s(_vm.errors.first("color")))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c("label", [_vm._v("Horse Photos")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "form-control",
                                attrs: { type: "file", multiple: "" },
                                on: { change: _vm.uploadHorseImages }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
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
                                staticClass: "is-label-placeholder w-full",
                                attrs: {
                                  name: "fei_id",
                                  "icon-pack": "feather",
                                  icon: "icon-zap",
                                  "label-placeholder": "FEI ID"
                                },
                                model: {
                                  value: _vm.formData.fei_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "fei_id", $$v)
                                  },
                                  expression: "formData.fei_id"
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
                                      value: _vm.errors.has("fei_id"),
                                      expression: "errors.has('fei_id')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [_vm._v(_vm._s(_vm.errors.first("fei_id")))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c("label", [_vm._v("FEI Expiry Date")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("flat-pickr", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|date_format:yyyy-MM-dd",
                                    expression:
                                      "'required|date_format:yyyy-MM-dd'"
                                  }
                                ],
                                attrs: {
                                  name: "fei_expiry_date",
                                  placeholder: "Select Birthdate"
                                },
                                model: {
                                  value: _vm.formData.fei_expiry_date,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.formData,
                                      "fei_expiry_date",
                                      $$v
                                    )
                                  },
                                  expression: "formData.fei_expiry_date"
                                }
                              }),
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
                                      value: _vm.errors.has("fei_expiry_date"),
                                      expression:
                                        "errors.has('fei_expiry_date')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("fei_expiry_date"))
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c("label", [_vm._v("National ID")]),
                              _vm._v(" "),
                              _c("vs-input-number", {
                                staticStyle: { width: "fit-content" },
                                model: {
                                  value: _vm.formData.national_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "national_id", $$v)
                                  },
                                  expression: "formData.national_id"
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
                                      value: _vm.errors.has("national_id"),
                                      expression: "errors.has('national_id')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("national_id"))
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c("label", [_vm._v("Renewal Date")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("flat-pickr", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|date_format:yyyy-MM-dd",
                                    expression:
                                      "'required|date_format:yyyy-MM-dd'"
                                  }
                                ],
                                attrs: {
                                  name: "renewal_date",
                                  placeholder: "Select Renewal Date"
                                },
                                model: {
                                  value: _vm.formData.renewal,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "renewal", $$v)
                                  },
                                  expression: "formData.renewal"
                                }
                              }),
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
                                      value: _vm.errors.has("renewal_date"),
                                      expression: "errors.has('renewal_date')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("renewal_date"))
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c("ul", [
                                _c(
                                  "li",
                                  [
                                    _c(
                                      "vs-checkbox",
                                      {
                                        attrs: { "vs-value": "1" },
                                        model: {
                                          value: _vm.formData.pony,
                                          callback: function($$v) {
                                            _vm.$set(_vm.formData, "pony", $$v)
                                          },
                                          expression: "formData.pony"
                                        }
                                      },
                                      [_vm._v("Pony")]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ]
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tab-content",
                    {
                      staticClass: "mb-5",
                      attrs: {
                        title: "Identification",
                        "before-change": _vm.validateIdentification
                      }
                    },
                    [
                      _c("form", { attrs: { "data-vv-scope": "step-2" } }, [
                        _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/3 w-full mt-5" },
                            [
                              _c("label", [_vm._v("Height")]),
                              _vm._v(" "),
                              _c("vs-input-number", {
                                staticStyle: { width: "fit-content" },
                                model: {
                                  value: _vm.formData.height,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "height", $$v)
                                  },
                                  expression: "formData.height"
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
                                      value: _vm.errors.has("height"),
                                      expression: "errors.has('height')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [_vm._v(_vm._s(_vm.errors.first("height")))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/3 w-full mt-5" },
                            [
                              _c("label", [_vm._v("Micro Chip Number")]),
                              _vm._v(" "),
                              _c("vs-input-number", {
                                staticStyle: { width: "fit-content" },
                                model: {
                                  value: _vm.formData.microchip_number,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.formData,
                                      "microchip_number",
                                      $$v
                                    )
                                  },
                                  expression: "formData.microchip_number"
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
                                      value: _vm.errors.has(
                                        "micro_chip_number"
                                      ),
                                      expression:
                                        "errors.has('micro_chip_number')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first("micro_chip_number")
                                    )
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/3 w-full mt-5" },
                            [
                              _c("label", [_vm._v("Upload Drawing")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "form-control",
                                attrs: { type: "file" },
                                on: { change: _vm.uploadDrawing }
                              })
                            ]
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tab-content",
                    {
                      staticClass: "mb-5",
                      attrs: {
                        title: "Breeding Details",
                        "before-change": _vm.validateBreeding
                      }
                    },
                    [
                      _c("form", { attrs: { "data-vv-scope": "step-3" } }, [
                        _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
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
                                staticClass: "is-label-placeholder w-full",
                                attrs: {
                                  name: "stud_book",
                                  "icon-pack": "feather",
                                  icon: "icon-book",
                                  "label-placeholder": "Stud Book"
                                },
                                model: {
                                  value: _vm.formData.stud_book,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "stud_book", $$v)
                                  },
                                  expression: "formData.stud_book"
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
                                      value: _vm.errors.has("stud_book"),
                                      expression: "errors.has('stud_book')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [_vm._v(_vm._s(_vm.errors.first("stud_book")))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c(
                                "vs-select",
                                {
                                  staticClass: "w-full select-large",
                                  attrs: { label: "Country Of Birth" },
                                  model: {
                                    value: _vm.formData.country_of_birth,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.formData,
                                        "country_of_birth",
                                        $$v
                                      )
                                    },
                                    expression: "formData.country_of_birth"
                                  }
                                },
                                _vm._l(_vm.cityOptions, function(item, index) {
                                  return _c("vs-select-item", {
                                    key: index,
                                    staticClass: "w-full",
                                    attrs: {
                                      value: item.value,
                                      text: item.text
                                    }
                                  })
                                }),
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.errors.has("country_of_birth"),
                                      expression:
                                        "errors.has('country_of_birth')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("country_of_birth"))
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
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
                                staticClass: "is-label-placeholder w-full",
                                attrs: {
                                  name: "sire",
                                  "icon-pack": "feather",
                                  icon: "icon-edit-2",
                                  "label-placeholder": "Sire Name"
                                },
                                model: {
                                  value: _vm.formData.father,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "father", $$v)
                                  },
                                  expression: "formData.father"
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
                                      value: _vm.errors.has("sire"),
                                      expression: "errors.has('sire')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [_vm._v(_vm._s(_vm.errors.first("sire")))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
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
                                staticClass: "is-label-placeholder w-full",
                                attrs: {
                                  name: "dam",
                                  "icon-pack": "feather",
                                  icon: "icon-edit-2",
                                  "label-placeholder": "Dam Name"
                                },
                                model: {
                                  value: _vm.formData.mother,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "mother", $$v)
                                  },
                                  expression: "formData.mother"
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
                                      value: _vm.errors.has("dam"),
                                      expression: "errors.has('dam')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [_vm._v(_vm._s(_vm.errors.first("dam")))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/3 w-full mt-5" },
                            [
                              _c("label", [_vm._v("Upload Breeding Files")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "form-control",
                                attrs: { type: "file" },
                                on: { change: _vm.uploadBreeding }
                              })
                            ]
                          )
                        ])
                      ])
                    ]
                  )
                ],
                1
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

/***/ "./resources/js/src/views/Horse/Edit.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/Horse/Edit.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_562371c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=562371c6& */ "./resources/js/src/views/Horse/Edit.vue?vue&type=template&id=562371c6&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Horse/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_562371c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_562371c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Horse/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Horse/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Horse/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Horse/Edit.vue?vue&type=template&id=562371c6&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/Horse/Edit.vue?vue&type=template&id=562371c6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_562371c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=562371c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/Edit.vue?vue&type=template&id=562371c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_562371c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_562371c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);