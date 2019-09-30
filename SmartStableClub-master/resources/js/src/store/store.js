import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import state from "./state"

import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex);

import moduleTodo from './todo/moduleTodo.js'

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state,
    actions,
    getters,
    mutations,
    modules: {
        todo: moduleTodo,
    },
    strict: process.env.NODE_ENV !== 'production',
});

export default store;
