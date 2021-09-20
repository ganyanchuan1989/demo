import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/demo01",
    name: "Demo01",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Demo01.vue"),
  },
  {
    path: "/style",
    name: "Style",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Style.vue"),
  },
  {
    path: "/slot",
    name: "Slot",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/slot/SlotChild.vue"),
  },
  {
    path: "/ref",
    name: "Ref",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ref/index.vue"),
  },
  {
    path: "/props",
    name: "Props",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/props/index.vue"),
  },
  {
    path: "/route",
    name: "route",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/route/index.vue"),
    children: [
      {
        path: "rdemo1",
        name: "RDemo1",
        props: true,
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/route/RDemo1.vue"),
      },
      // id 穿参数
      {
        path: "rdemo2/:id",
        name: "RDemo2",
        props: true,
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/route/RDemo2.vue"),
      },
    ],
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vuex/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
