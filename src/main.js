import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import store from "./store";

axios.defaults.baseURL =
  process.env.VUE_APP_BASE_URL || "https://sandbox.api.maplerad.com/v1";
Vue.config.productionTip = false;
Vue.use(VueToast);
Vue.use(VueAxios, axios);

const userData = JSON.parse(localStorage.getItem("obj"));
const isUserLogged = userData && userData.logged === true;

// Set the user's authentication state in the store
store.dispatch("updateLoggedInState", isUserLogged);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
