import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router.js';
import register from './helpers/registerSvg.js';

Vue.use(VueRouter);

new Vue({
  router,
  register,
  render: h => h(App)
}).$mount('#app');
