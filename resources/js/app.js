import axios from "axios";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

try {
    window.Popper = require("popper.js").default;
    window.$ = window.jQuery = require("jquery");

    require("bootstrap");
} catch (e) {}

import Vue from "vue";
import VueRouter from "vue-router";
window.$ = window.jQuery = require("jquery");

Vue.use(VueRouter);

import store from "./store";
import routes from "./router";

import "aos/dist/aos.css";
import "aos/dist/aos.js";
import AOS from "aos";

Vue.component("navigation", require("./components/Navigation.vue").default);

const app = new Vue({
    el: "#app",
    store,
    created() {
        AOS.init({ disable: "phone" });
    },
    router: new VueRouter(routes)
});
