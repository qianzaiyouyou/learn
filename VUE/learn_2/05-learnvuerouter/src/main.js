
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import router from "./router/index"

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
console.log(Vue);