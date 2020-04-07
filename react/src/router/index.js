import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 创建组件
import('../views/Home/Home.vue');
import('../views/Cart/Cart.vue');
import('../views/Category/category.vue');
import('../views/Mine/Mine.vue');

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/category",
    name: "Category",
    component: Category
  },
  {
    path: "/mine",
    name: "Mine",
    component: Mine
  }
];

const router = new VueRouter({
  router
});

export default router;
