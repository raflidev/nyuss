import Vue from "vue";
import { VLazyImagePlugin } from "v-lazy-image";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import store from "./store";
import AOS from "aos";

Vue.use(VLazyImagePlugin);
new Vue({
  router,
  store,
  created() {
    AOS.init({ disable: "phone" });
  },
  render: (h) => h(App),
}).$mount("#app");
