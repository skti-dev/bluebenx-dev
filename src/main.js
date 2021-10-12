import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/style.css'
import './plugins/fontawesome'
import './plugins/vMask'
import './plugins/axios'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
