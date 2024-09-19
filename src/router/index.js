const routes = [
  {
    path: "/",
    // component : import("..pages/index.vue")
    component: import("@/views/TestOne.vue"),
  },
  {
    path: "/testtwo",
    // component : import("..pages/index.vue")
    component: import("@/views/TestTwo.vue"),
  },
];

/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


export default router;
