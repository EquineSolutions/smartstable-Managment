/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import state from "./state"

import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex);

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state,
    actions,
    getters,
    mutations,
    strict: process.env.NODE_ENV !== 'production'
});

export default store;