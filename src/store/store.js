import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { webStore } from './web.store.js';

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        webStore,
    }
});