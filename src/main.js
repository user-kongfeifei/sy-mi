import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, Grid, GridItem,Tabbar, TabbarItem,Swipe, SwipeItem ,NavBar,Icon,Sticky,Sku,Cell,CellGroup,Col, Row ,Search,
  Tab, Tabs,Sidebar, SidebarItem,Popup,Stepper,Checkbox, CheckboxGroup } from 'vant'
Vue.use(Button).use(Grid).use(GridItem).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(NavBar).use(Icon).use(Swipe).use(SwipeItem)
.use(Sticky).use(Sku).use(Tab).use(Tabs).use(Cell).use(CellGroup).use(Col).use(Row).use(Search).use(Sidebar).use(SidebarItem).use(Popup)
.use(Stepper);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
