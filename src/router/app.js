import Vue from 'vue'
import Router from 'vue-router'
/* import loginTemp from '@/components/login'
import existTemp  from '@/components/exist' */
import app from '../App'




Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const route = new Router({
  routes: [
    {
      path:'/login/',
      name: 'loginTem',
      component: resolve => require(['../components/login'], resolve),
    },{
      path: '/exist',
      name: 'existTem',
      component: () => import("../components/exist")
    },/* {
      path: '/',
      redirect: "/login"
    },{
      path: '',
      redirect: "/login"
    },{
      path: '/#',
      redirect: "/login"
    } */
  ],
  linkActiveClass: "active",
 /* mode: "history", */
})

export default route
