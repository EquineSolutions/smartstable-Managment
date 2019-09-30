(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/View.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Horse/View.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "View",
  mounted: function mounted() {
    this.getData();
  },
  data: function data() {
    return {
      horse: {},
      isLoaded: false,
      dummy: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  },
  methods: {
    getData: function getData() {
      var fire = this;
      axios.get("/api/horses/".concat(this.$route.params.id), store.state.config).then(function (response) {
        fire.horse = response.data.data;
        fire.isLoaded = true;
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
    redirect: function redirect(url) {
      window.open(url, "_blank");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/View.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Horse/View.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".con-vs-tabs .con-slot-tabs {\n  overflow: auto;\n}\ndiv.tree {\n  min-width: 1000px;\n  overflow: scroll;\n  margin-bottom: 30px;\n}\n.tree ul {\n  padding-top: 20px;\n  position: relative;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n}\n.tree li {\n  float: left;\n  text-align: center;\n  list-style-type: none;\n  position: relative;\n  padding: 20px 5px 0 5px;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n}\n\n/*We will use ::before and ::after to draw the connectors*/\n.tree li::before, .tree li::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 50%;\n  border-top: 1px solid #ccc;\n  width: 50%;\n  height: 20px;\n}\n.tree li::after {\n  right: auto;\n  left: 50%;\n  border-left: 1px solid #ccc;\n}\n\n/*We need to remove left-right connectors from elements without\nany siblings*/\n.tree li:only-child::after, .tree li:only-child::before {\n  display: none;\n}\n\n/*Remove space from the top of single children*/\n.tree li:only-child {\n  padding-top: 0;\n}\n\n/*Remove left connector from first child and\nright connector from last child*/\n.tree li:first-child::before, .tree li:last-child::after {\n  border: 0 none;\n}\n\n/*Adding back the vertical connector to the last nodes*/\n.tree li:last-child::before {\n  border-right: 1px solid #ccc;\n  border-radius: 0 5px 0 0;\n  -webkit-border-radius: 0 5px 0 0;\n  -moz-border-radius: 0 5px 0 0;\n}\n.tree li:first-child::after {\n  border-radius: 5px 0 0 0;\n  -webkit-border-radius: 5px 0 0 0;\n  -moz-border-radius: 5px 0 0 0;\n}\n\n/*Time to add downward connectors from parents*/\n.tree ul ul::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  border-left: 1px solid #ccc;\n  width: 0;\n  height: 20px;\n}\n.tree a.parent:hover {\n  cursor: pointer;\n}\n.tree a.male {\n  background-color: lightskyblue;\n}\n.tree a.female {\n  background-color: pink;\n}\n.tree li a {\n  border: 1px solid #ccc;\n  padding: 5px 10px;\n  text-decoration: none;\n  color: #666;\n  font-family: arial, verdana, tahoma;\n  font-size: 11px;\n  display: inline-block;\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n}\n\n/*Time for some hover effects*/\n\n/*We will apply the hover effect the the lineage of the element also*/\n.tree li a:hover, .tree li a:hover + ul li a {\n  background: #c8e4f8 !important;\n  color: #000 !important;\n  border: 1px solid #94a0b4;\n}\n\n/*Connector styles on hover*/\n.tree li a:hover + ul li::after,\n.tree li a:hover + ul li::before,\n.tree li a:hover + ul::before,\n.tree li a:hover + ul ul::before {\n  border-color: #94a0b4 !important;\n}\n.image-container {\n  position: relative;\n  width: 50%;\n}\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: 0.5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.middle {\n  transition: 0.5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n.image-container:hover .image {\n  opacity: 0.3;\n}\n.image-container:hover .middle {\n  opacity: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/View.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Horse/View.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/View.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/View.vue?vue&type=template&id=3ded78e1&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Horse/View.vue?vue&type=template&id=3ded78e1& ***!
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
  return _vm.can("view-horses")
    ? _c(
        "vx-card",
        { attrs: { title: "Horse Information" } },
        [
          _c(
            "vs-tabs",
            { attrs: { alignment: "fixed" } },
            [
              _c("vs-tab", { attrs: { label: "Horse Details" } }, [
                _vm.isLoaded
                  ? _c(
                      "div",
                      { staticClass: "mt-5" },
                      [
                        _c("b", [_vm._v("ID: ")]),
                        _vm._v(
                          "  " + _vm._s(_vm.horse.id) + "\n                "
                        ),
                        _c("vs-divider"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Name: ")]),
                        _vm._v(
                          " " + _vm._s(_vm.horse.name) + "\n                "
                        ),
                        _c("vs-divider"),
                        _vm._v(" "),
                        _c("b", [_vm._v("FEI_ID: ")]),
                        _vm._v(
                          " " + _vm._s(_vm.horse.fei_id) + "\n                "
                        ),
                        _c("vs-divider"),
                        _vm._v(" "),
                        _c("b", [_vm._v("FEI Expiry Date: ")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.horse.fei_expiry_date) +
                            "\n                "
                        ),
                        _c("vs-divider"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Gender: ")]),
                        _vm._v(
                          _vm._s(_vm.horse.sex.name) + "\n                "
                        ),
                        _c("vs-divider"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Birth Date: ")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.horse.birth_year) +
                            "\n                "
                        ),
                        _c("vs-divider"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Country Of Birth: ")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.horse.country_of_birth) +
                            "\n                "
                        ),
                        _c("vs-divider"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Height: ")]),
                        _vm._v(
                          " " + _vm._s(_vm.horse.height) + "\n                "
                        ),
                        _c("vs-divider"),
                        _vm._v(" "),
                        _c("b", [_vm._v("National ID: ")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.horse.national_id) +
                            "\n                "
                        ),
                        _c("vs-divider"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Renewal: ")]),
                        _vm._v(
                          " " + _vm._s(_vm.horse.renewal) + "\n                "
                        ),
                        _c("vs-divider"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Color: ")]),
                        _vm._v(
                          " " + _vm._s(_vm.horse.color) + "\n                "
                        ),
                        _c("vs-divider"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Stud Book: ")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.horse.stud_book) +
                            "\n                "
                        ),
                        _c("vs-divider"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Microchip Number: ")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.horse.microchip_number) +
                            "\n                "
                        ),
                        _c("vs-divider"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Pony: ")]),
                        _vm._v(
                          " " + _vm._s(_vm.horse.pony) + "\n                "
                        ),
                        _c("vs-divider"),
                        _vm._v(" "),
                        _vm.horse.identification_draw_a != ""
                          ? _c(
                              "vs-button",
                              {
                                attrs: { size: "small", color: "primary" },
                                on: {
                                  click: function($event) {
                                    return _vm.redirect(
                                      _vm.horse.identification_draw_a
                                    )
                                  }
                                }
                              },
                              [_vm._v("Identification Draw 1")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.horse.identification_draw_b != ""
                          ? _c(
                              "vs-button",
                              {
                                attrs: { size: "small", color: "primary" },
                                on: {
                                  click: function($event) {
                                    return _vm.redirect(
                                      _vm.horse.identification_draw_b
                                    )
                                  }
                                }
                              },
                              [_vm._v("Identification Draw 2")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.horse.breeding_details_a != ""
                          ? _c(
                              "vs-button",
                              {
                                attrs: { size: "small", color: "primary" },
                                on: {
                                  click: function($event) {
                                    return _vm.redirect(
                                      _vm.horse.breeding_details_a
                                    )
                                  }
                                }
                              },
                              [_vm._v("Breeding Details 1")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.horse.breeding_details_b != ""
                          ? _c(
                              "vs-button",
                              {
                                attrs: { size: "small", color: "primary" },
                                on: {
                                  click: function($event) {
                                    return _vm.redirect(
                                      _vm.horse.breeding_details_b
                                    )
                                  }
                                }
                              },
                              [_vm._v("Breeding Details 2")]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("vs-tab", { attrs: { label: "Breeding Details" } }, [
                _c(
                  "div",
                  { staticClass: "tree mt-5" },
                  [
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
                          [
                            _c("ul", { staticClass: "tree-ul" }, [
                              _c(
                                "li",
                                [
                                  _c("a", { staticClass: "parent" }, [
                                    _vm._v(_vm._s(_vm.horse.name))
                                  ]),
                                  _vm._v(" "),
                                  _vm.horse != null
                                    ? _c("horse-tree", {
                                        attrs: { horse: _vm.horse }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("vs-tab", { attrs: { label: "Files" } }, [
                _c(
                  "div",
                  [
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      { attrs: { "vs-w": "12" } },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-lg": "12",
                              "vs-sm": "12",
                              "vs-xs": "12"
                            }
                          },
                          [
                            _c("h2", [_vm._v("Photos")]),
                            _vm._v(" "),
                            _c("vs-divider")
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._l(12, function(i) {
                          return _c(
                            "vs-col",
                            {
                              key: i,
                              staticClass: "image-container",
                              staticStyle: { "margin-bottom": "10px" },
                              attrs: {
                                "vs-type": "flex",
                                "vs-justify": "center",
                                "vs-align": "center",
                                "vs-lg": "2",
                                "vs-sm": "3",
                                "vs-xs": "4"
                              }
                            },
                            [
                              _c("img", {
                                staticClass: "image",
                                staticStyle: {
                                  width: "100%",
                                  height: "100%",
                                  "border-radius": "5px"
                                },
                                attrs: {
                                  src:
                                    "/uploads/images/horse/identification/1aa112aeabccbcb711776c387ad40628.jpg"
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "middle flex" }, [
                                _c(
                                  "div",
                                  { staticClass: "w-1/2" },
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        radius: "",
                                        color: "primary",
                                        type: "border",
                                        "icon-pack": "feather",
                                        icon: "icon-eye"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "w-1/2",
                                    staticStyle: { "margin-left": "5px" }
                                  },
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        radius: "",
                                        color: "danger",
                                        type: "border",
                                        "icon-pack": "feather",
                                        icon: "icon-trash"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      { attrs: { "vs-w": "12" } },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-lg": "12",
                              "vs-sm": "12",
                              "vs-xs": "12"
                            }
                          },
                          [
                            _c("h2", [_vm._v("Identification Draw")]),
                            _vm._v(" "),
                            _c("vs-divider")
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._l(2, function(i) {
                          return _c(
                            "vs-col",
                            {
                              key: i,
                              staticClass: "image-container",
                              staticStyle: { "margin-bottom": "10px" },
                              attrs: {
                                "vs-type": "flex",
                                "vs-justify": "center",
                                "vs-align": "center",
                                "vs-lg": "2",
                                "vs-sm": "3",
                                "vs-xs": "4"
                              }
                            },
                            [
                              _c("img", {
                                staticClass: "image",
                                staticStyle: {
                                  width: "100%",
                                  height: "100%",
                                  "border-radius": "5px"
                                },
                                attrs: {
                                  src:
                                    "/uploads/images/horse/identification/1aa112aeabccbcb711776c387ad40628.jpg"
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "middle flex" }, [
                                _c(
                                  "div",
                                  { staticClass: "w-1/2" },
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        radius: "",
                                        color: "primary",
                                        type: "border",
                                        "icon-pack": "feather",
                                        icon: "icon-eye"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "w-1/2",
                                    staticStyle: { "margin-left": "5px" }
                                  },
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        radius: "",
                                        color: "danger",
                                        type: "border",
                                        "icon-pack": "feather",
                                        icon: "icon-trash"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      { attrs: { "vs-w": "12" } },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-lg": "12",
                              "vs-sm": "12",
                              "vs-xs": "12"
                            }
                          },
                          [
                            _c("h2", [_vm._v("Breeding Details")]),
                            _vm._v(" "),
                            _c("vs-divider")
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._l(2, function(i) {
                          return _c(
                            "vs-col",
                            {
                              key: i,
                              staticClass: "image-container",
                              staticStyle: { "margin-bottom": "10px" },
                              attrs: {
                                "vs-type": "flex",
                                "vs-justify": "center",
                                "vs-align": "center",
                                "vs-lg": "2",
                                "vs-sm": "3",
                                "vs-xs": "4"
                              }
                            },
                            [
                              _c("img", {
                                staticClass: "image",
                                staticStyle: {
                                  width: "100%",
                                  height: "100%",
                                  "border-radius": "5px"
                                },
                                attrs: {
                                  src:
                                    "/uploads/images/horse/identification/1aa112aeabccbcb711776c387ad40628.jpg"
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "middle flex" }, [
                                _c(
                                  "div",
                                  { staticClass: "w-1/2" },
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        radius: "",
                                        color: "primary",
                                        type: "border",
                                        "icon-pack": "feather",
                                        icon: "icon-eye"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "w-1/2",
                                    staticStyle: { "margin-left": "5px" }
                                  },
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        radius: "",
                                        color: "danger",
                                        type: "border",
                                        "icon-pack": "feather",
                                        icon: "icon-trash"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ],
                  1
                )
              ])
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

/***/ "./resources/js/src/views/Horse/View.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/Horse/View.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_3ded78e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=3ded78e1& */ "./resources/js/src/views/Horse/View.vue?vue&type=template&id=3ded78e1&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Horse/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _View_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Horse/View.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_3ded78e1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_3ded78e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Horse/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Horse/View.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Horse/View.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Horse/View.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/Horse/View.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/View.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Horse/View.vue?vue&type=template&id=3ded78e1&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/Horse/View.vue?vue&type=template&id=3ded78e1& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_3ded78e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=3ded78e1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Horse/View.vue?vue&type=template&id=3ded78e1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_3ded78e1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_3ded78e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);