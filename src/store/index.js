import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import recommendStore from './module/recommend'
const store = new Vuex.Store({
  modules:{
    recommendStore
  }
})

export default store