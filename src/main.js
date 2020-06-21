import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import { Button, Grid, GridItem,Tabbar, TabbarItem,Swipe, SwipeItem,NavBar,Icon,Cell, CellGroup,Col, Row ,Search,Sku,Tab, Tabs ,Sticky ,SwipeCell, Dialog,Collapse, CollapseItem  } from 'vant'
Vue.use(Button).use(Grid).use(GridItem).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(NavBar).use(Icon).use(Cell).use(CellGroup).use(Col).use(Row).use(Search)
.use(Sku).use(Tab).use(Tabs).use(Sticky) .use(SwipeCell) .use(Dialog).use(Collapse).use(CollapseItem);






Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
