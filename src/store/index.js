import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 选中某商品的index值
    index:0,
    pageIndex:0,
    // 购物车商品列表
    cartlist:[],
    // 登录状态
    userLogin:false
  },
  
  mutations: {
    // 登录状态的修改
    userLoginstore(state){
      state.userLogin=true;
      // 登录成功的状态，放入缓存中
      localStorage.setItem('userLogin',JSON.stringify(state.userLogin));
    },
    // pageIndex的修改 
    myindex(state,index){
      state.pageIndex = index;
    },
    // index的修改
    myproductStore(state,index){
      state.index = index;
    },
    // 商品添加至购物车
    addCart2store(state,product){
      let x = -1;
      for(let i=0;i<state.cartlist.length;i++){
        if(product.name == state.cartlist[i].name){
          x = i;
        }
      }

      if(x > -1){
        state.cartlist[x].count++;
        // 添加本地缓存
        localStorage.setItem('cartlist',JSON.stringify(state.cartlist));
      }else{
        state.cartlist.push({
          img:product.img,
          name:product.name,
          version:product.version,
          color:product.color,
          price:product.price,
          count:product.value,
          checked:product.checked
        })
        // 添加本地缓存
        localStorage.setItem('cartlist',JSON.stringify(state.cartlist));
      }
    },
    // 删除购物车的商品
    tzDelstore(state,index){
      state.cartlist.splice(index,1);
      // 添加本地缓存
      localStorage.setItem('cartlist',JSON.stringify(state.cartlist));
    }
  },
  actions: {
  },
  modules: {
  }
})
