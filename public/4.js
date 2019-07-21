(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{17:function(e,s,a){var t=a(49);"string"==typeof t&&(t=[[e.i,t,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(5)(t,r);t.locals&&(e.exports=t.locals)},48:function(e,s,a){"use strict";var t=a(17);a.n(t).a},49:function(e,s,a){(e.exports=a(4)(!1)).push([e.i,".centerx li {\n  display: inline-flex;\n  margin: 10px;\n}\n",""])},79:function(e,s,a){"use strict";a.r(s);var t=a(2);a(7).a.localize("en",{custom:{role_name:{required:"Please enter the role name"}}});var r={mounted:function(){this.getPermissions()},data:function(){return{permissions:[],role_name:"",rolePermissions:[]}},methods:{getPermissions:function(){var e=this;axios.get("/api/roles/create",store.state.config).then(function(s){e.permissions=s.data.data.permission}).catch(function(s){403==s.response.status?(e.vs_alert("Oops!",s.response.data.message,"danger"),t.a.push({name:"pageError403"})):401==s.response.status&&t.a.push({name:"pageLogin"})})},submitForm:function(){var e=this,s=this;this.$validator.validateAll().then(function(a){if(a){var r=new FormData;r.append("name",e.role_name);for(var n=0;n<s.rolePermissions.length;n++)r.append("permission[]",s.rolePermissions[n]);axios.post("/api/roles",r,store.state.config).then(function(e){200==e.data.status?(s.vs_alert("Success","Role Successfully Added","success"),t.a.push({name:"role"})):s.vs_alert("Oops!",e.data,"danger")}).catch(function(e){if(422==e.response.status){var a=e.response.data.errors;s.vs_alert("Oops!",a[Object.keys(a)[0]][0],"danger")}else 403==e.response.status?(s.vs_alert("Oops!",e.response.data.message,"danger"),t.a.push({name:"pageError403"})):401==e.response.status&&t.a.push({name:"pageLogin"})})}else e.vs_alert("Oops!","Please, solve all issues before submitting.","danger")})},vs_alert:function(e,s,a){this.$vs.notify({title:e,text:s,color:a})}}},n=(a(48),a(1)),o=Object(n.a)(r,function(){var e=this,s=e.$createElement,a=e._self._c||s;return e.can("role-create")?a("div",[a("vx-card",{attrs:{title:"Create New Role"}},[a("form",[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mb-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-shield","icon-no-border":"","label-placeholder":"Role Name",name:"role_name"},model:{value:e.role_name,callback:function(s){e.role_name=s},expression:"role_name"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("role_name"),expression:"errors.has('role_name')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("role_name")))])],1)]),e._v(" "),a("div",{staticClass:"vx-row mt-5"},[a("div",{staticClass:"vx-col w-full"},[a("b",[e._v("Role Permissions:")]),e._v(" "),a("ul",{staticClass:"centerx"},e._l(e.permissions,function(s,t){return a("li",{key:t},[a("vs-checkbox",{attrs:{"vs-value":s.name},model:{value:e.rolePermissions,callback:function(s){e.rolePermissions=s},expression:"rolePermissions"}},[e._v(e._s(s.name))])],1)}),0)])]),e._v(" "),a("div",{staticClass:"vx-row mt-10"},[a("div",{staticClass:"vx-col w-full"},[a("vs-button",{staticClass:"mr-3 mb-2",on:{click:function(s){return s.preventDefault(),e.submitForm(s)}}},[e._v("Submit")]),e._v(" "),a("vs-button",{staticClass:"mb-2",attrs:{color:"warning",type:"border"},on:{click:function(s){s.preventDefault(),e.role_name=""}}},[e._v("Reset")])],1)])])])],1):e._e()},[],!1,null,null,null);s.default=o.exports}}]);