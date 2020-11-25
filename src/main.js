import Vue from "vue";
import app from "./app.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCkBmq94RUL-VNdku46pXE3nt-_Z01Damo',
    libraries: 'places',
    },
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount("#app");
