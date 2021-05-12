import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import store from './store';

// register jw pagination component globally
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);


Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

