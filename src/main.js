import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import vueiInfinite from 'vue-infinite-scroll'

import axios from 'axios'
import qs from 'qs'

//定义全局变量
Vue.prototype.$qs = qs
Vue.use(ElementUI);
Vue.use(vueiInfinite)
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
