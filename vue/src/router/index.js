import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Account/Login'
import Register from '@/pages/Account/Register'
import Mypage from '@/pages/Account/Mypage'
import MypageUpdate from '@/pages/Account/MypageUpdate'
import Create from '@/pages/Posts/Write'
import Detail from '@/pages/Posts/Detail'
import TopList from '@/pages/List/TopList'
import LocalTopList from '@/pages/List/LocalList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component: Mypage
    },
    {
      path: '/mypage/update',
      name: 'MypageUpdate',
      component: MypageUpdate
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
