// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios";
import iView from 'iview';
import Vuex from 'vuex';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.use(Vuex);
Vue.prototype.$axios = Axios
Vue.config.productionTip = false
const store = new Vuex.Store({
    state: {
        active: 'home',
    },
    getters: {
        getName(state) {
            return state.active;
        },
    },
    mutations: {
        changeMenu(state, actName) {
            state.active = actName;
        },

    },
    actions: {

    },
})
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>',
})