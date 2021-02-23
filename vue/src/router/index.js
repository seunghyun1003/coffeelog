import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Account/Login'
import Mypage from '@/pages/Account/Mypage'
import Create from '@/pages/Posts/Create'
import Detail from '@/pages/Posts/Detail'
import TopList from '@/pages/Posts/TopList'
import LocalTopList from '@/pages/Posts/LocalTopList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component: Mypage
    },
    {
      path: '/create/:contentId?',
      name: 'Create',
      component: Create
    },
    {
      path: '/detail/:contentId',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/topcafe',
      name: 'TopList',
      component: TopList
    },
    {
      path: '/localtopcafe',
      name: 'LocalTopList',
      component: LocalTopList
    },
  ]
})
