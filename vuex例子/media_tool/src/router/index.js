import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import CityList from '@/components/CityList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/CityList',
      name: 'CityList',
      component: CityList
    },
  ]
})
