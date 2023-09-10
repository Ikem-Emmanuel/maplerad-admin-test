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
    component: AuthLayout, // Use the AuthLayout for authentication pages
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
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: lazyLoad("dashboard"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
