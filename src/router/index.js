import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import App from '../App'
import home from '../page/home'
import item from '../page/item'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HelloWorld
//     }
//   ]
// })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [{
        path: '',
        component: home
      },
      {
        path: '/item',
        component: item
      }]
    }
  ]
})
