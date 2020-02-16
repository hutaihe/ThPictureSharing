import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import('@/views/Index')
  }, 
  {
    path:"/login",
    component:() => import('@/views/Login')
  },
  {
    path:"/register",
    component:() => import('@/views/Register')
  },
  {
    path:"/search",
    component:() => import('@/views/Search')
  },
  {
    path:"/home",
    path:"/home",
    path:"/home",
    component:() => import('@/views/Home')
  }
];

const router = new VueRouter({
  routes
});

export default router;
