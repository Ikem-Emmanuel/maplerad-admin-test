<template>
  <div
    class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-White z-30"
    :class="sideBarOpen ? '' : 'hidden'"
    id="main-nav"
  >
    <div class="w-full h-20 flex px-4 items-center mb-8">
      <mpImage
        :path="Images.logoDark_icon"
        :style="{}"
        width="80px"
        altText="My Image"
      />
    </div>

    <div class="px-4">
      <router-link
        v-for="(menuItem, index) in menuItems"
        :key="index"
        :to="menuItem.path"
        class="w-full flex items-center gap-4 h-10 pl-4 my-4 transform transition-transform hover:scale-105 rounded-lg cursor-pointer"
        :class="{ 'bg-mpGrey200': $route.path === menuItem.path }"
      >
        <mpImage :path="menuItem.icon" width="18px" altText="My Image" />
        <span class="text-secondary font-medium text-sm">{{
          menuItem.label
        }}</span>
      </router-link>
    </div>

    <!-- Settings Link -->
    <div class="px-4 absolute bottom-0 xl:mb-2 left-0 right-0">
      <router-link
        to="/settings"
        class="bg-mpGrey200 w-full flex items-center gap-4 h-10 pl-4 transform transition-transform hover:scale-105 rounded-lg cursor-pointer"
      >
        <!-- <mpImage :path="Images.settings_icon" width="18px" altText="Settings" /> -->
        <span class="text-secondary font-medium text-sm">Sandbox mode</span>
      </router-link>
      <router-link
        to="/settings"
        class="w-full flex items-center gap-4 h-10 pl-4 transform transition-transform mt-4 hover:scale-105 rounded-lg cursor-pointer"
      >
        <mpImage :path="Images.plus_icon" width="18px" altText="Settings" />
        <span class="text-secondary font-medium text-sm">Invite people</span>
        <mpImage :path="Images.arrowUp_icon" width="18px" altText="Settings" />
      </router-link>
    </div>
  </div>
</template>

<script>
import mpImage from "@/components/atoms/mpImage.vue";
import Images from "@/utils/images";
import { mapState } from "vuex";

export default {
  name: "SidebarComponent",
  components: { mpImage },
  computed: {
    ...mapState(["sideBarOpen"]),
  },
  data() {
    return {
      Images,
      menuItems: [
        {
          label: "Dashboard",
          icon: Images.getStarted_icon,
          path: "/dashboard",
        },
        {
          label: "Home",
          icon: Images.home_icon,
          path: "/",
        },
        {
          label: "Cash",
          icon: Images.cash_icon,
          path: "/",
        },
        {
          label: "FX Conversion",
          icon: Images.fx_icon,
          path: "/fxConversion",
        },
        {
          label: "Cards",
          icon: Images.card_icon,
          path: "/",
        },
        {
          label: "Customers",
          icon: Images.avatar_icon,
          path: "/",
        },
      ],
    };
  },
};
</script>
