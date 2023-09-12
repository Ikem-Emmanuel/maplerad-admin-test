import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";

// Layouts
import AuthLayout from "@/components/templates/layouts/AuthLayout.vue";
import DashboardLayout from "@/components/templates/layouts/DashboardLayout.vue";

Vue.use(VueRouter);

// Lazy load function
function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`);
}

const routes = [
  {
    path: "/",
    component: AuthLayout,
    children: [
      {
        path: "/",
        name: "Login",
        component: lazyLoad("auth/Login"),
      },
      {
        path: "/auth/otp",
        name: "Otp",
        component: lazyLoad("auth/Otp"),
      },
    ],
  },
  {
    path: "",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: lazyLoad("Dashboard"),
        meta: { requiresAuth: true },
      },
      {
        path: "/fxConversion",
        name: "FX Conversion",
        component: lazyLoad("FxConversion"),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if the route requires authentication
    if (!store.getters.getLoggedInStatus) {
      // If not logged in, redirect to login page
      next({ name: "Login" });
    } else {
      // If logged in, then allow navigation
      next();
    }
  } else {
    // If the route doesn't require authentication, allow navigation
    next();
  }
});

export default router;
