import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/ProductView.vue"),
    children: [
      {
        path: "product/cart",
        component: () => import("../views/cartView.vue"),
      },
    ],
  },
  {
    path: "/product/:id",
    component: () => import("../views/productIdView.vue"),
    props: (route) => {
      return {
        id: route.params.id,
      };
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.fullPath.match("about")) {
      return {
        top: 0,
      };
    } else {
      return {
        top: 0,
      };
    }
  },
});

export default router;
