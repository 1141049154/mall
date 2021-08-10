import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:() => import( '../views/home/Home.vue')
  },
  {
    path:'/fenlei',
    component:() => import( '../views/fenlei/FenLei.vue')
  },
  {
    path:'/shopcar',
    component:() => import( '../views/shopcar/ShopCar.vue')
  },
  {
    path:'/profile',
    component:() => import( '../views/profile/ProFile.vue')
  },
  {
    path:'/detail/:iid',
    component:() => import( '../views/detail/Detail.vue')
  }
]

const router = createRouter({
  
  history: createWebHistory(),
    mode:'history',
  routes,
  
})


export default router
