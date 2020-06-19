import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 选中某商品的index值
    index:0
  },
  mutations: {
    myproductStore(state,index){
      state.index = index;
    }
  },
  actions: {
  },
  modules: {
  }
})
