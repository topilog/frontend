// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/site.css'
import App from './App'
import Axios from 'axios'
Vue.use(ElementUI);
Vue.prototype.$axios = Axios
Vue.prototype.$url = "http://localhost:8080"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
