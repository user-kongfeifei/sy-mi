import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 选中某商品的index值
    index:0,
    cartlist:[]
  },
  mutations: {
    // index的修改
    myproductStore(state,index){
      state.index = index;
    },
    addCart2store(state,product){
      state.cartlist.push({
        img:product.img,
        name:product.name,
        version:product.version,
        color:product.color,
        count:product.value,
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
