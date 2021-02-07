import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './actions'

export default {
  namespaced:true,
  state,getters,
  mutations,
  actions
}