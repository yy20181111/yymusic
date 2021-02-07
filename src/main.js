import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from './ui-library'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/font/iconfont.css'

Vue.config.productionTip = false
Vue.use(element)
new Vue({
  router,store,
  render: h => h(App),
}).$mount('#app')
