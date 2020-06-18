import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Grid, GridItem,Tabbar, TabbarItem,Swipe, SwipeItem,NavBar,Icon,Cell, CellGroup,Col, Row ,Search  } from 'vant'
Vue.use(Button).use(Grid).use(GridItem).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(NavBar).use(Icon).use(Cell).use(CellGroup).use(Col).use(Row).use(Search);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
