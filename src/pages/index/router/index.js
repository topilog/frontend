import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import LoginPage from '@/components/LoginPage'
import ArticlePage from '@/components/ArticlePage'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: MainPage},
    { path: '/article/:id', component: ArticlePage},
    { path: '/user/login', component: LoginPage},
    { path: '*', component: NotFoundComponent }
  ]
})
