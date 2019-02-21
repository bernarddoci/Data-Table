import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import './assets/css/animation.css';
import './assets/css/fontello-codes.css';
import './assets/css/fontello-embedded.css';
import './assets/css/fontello-ie7-codes.css';
import './assets/css/fontello-ie7.css';
import './assets/css/fontello.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
