import { createRouter, createWebHashHistory } from "vue-router";

const menus = [
  {
    path: "/blogs",
    name: "Blog",
    component: () => import("@/views/blog/index.vue"),
    meta: {
      title: "技术博客",
      icon: "fa-solid fa-code",
    },
  },
  {
    path: "/projects",
    name: "Project",
    component: () => import("@/views/project/index.vue"),
    meta: {
      title: "开源项目",
      icon: "fa-brands fa-github",
    },
  },
  {
    path: "/books",
    name: "Book",
    component: () => import("@/views/book/index.vue"),
    meta: {
      title: "读书札记",
      icon: "fa-solid fa-book-open",
    },
  },
];

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
  },
  ...menus,
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/error/404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
export { menus };
