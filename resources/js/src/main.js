/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'
Vue.use(Vuesax);

//VeeValidate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

//Axios
window.axios = require('axios');

// Theme Configurations
import '../themeConfig.js'

// Globally Registered Components
import './globalComponents.js'

// Vue Router
import router from './router'

// Vuex Store
import store from './store/store'
window.store = store;

// Vuesax Admin Filters
import './filters/filters'


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer);

// PrismJS
import 'prismjs'
// import 'prismjs/themes/prism-tomorrow.css'


// Import and use the auth mixin in all components.
import AuthMixin from './mixins/auth.js';
Vue.mixin(AuthMixin);


// Clipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);

Vue.config.productionTip = true;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

Vue.config.devtools = true;