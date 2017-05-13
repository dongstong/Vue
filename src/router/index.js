import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewsList from '@/components/NewsList'
import NewsDetail from '@/components/NewsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
      	path: "/home"
      }
    },
    {
    	path: "/home",
	    name: 'home',
	    component: Home
    },
    {
    	path: "/newslist",
    	name: "newslist",
    	component: NewsList
    },
    {
    	path: "/newsdetail/:id",
    	name: "newsdetail",
    	component: NewsDetail
    }
  ],
  linkActiveClass: "mui-active"
})
