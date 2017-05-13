// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//1. 引入mint-ui的css文件
import "mint-ui/lib/style.css"

//2. 引入mint-ui的组件
import Mint from "mint-ui"

//3. 使用Vue.use使用mint-ui
Vue.use(Mint)

//4. 引入mint-ui的header
import {Header, Swipe, SwipeItem } from "mint-ui"

//5. 注册这个mint-ui中的Header组件
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//引入 vue-resource组件
import VueResource from "vue-resource"
Vue.use(VueResource)

//1. 引入mui的css文件和字体css文件
import "./assets/css/mui.min.css"
import "./assets/css/icons-extra.css"


import "./assets/css/site.css"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
