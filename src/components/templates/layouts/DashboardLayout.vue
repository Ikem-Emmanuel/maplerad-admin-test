<template>
  <div class="leading-normal tracking-normal bg-white" id="main-body">
    <div class="flex flex-wrap">
      <Sidebar />

      <div
        class="w-full pl-0 lg:pl-64 min-h-screen"
        :class="sideBarOpen ? 'overlay' : ''"
        id="main-content"
      >
        <Navbar />
        <div class="p-6 mb-20 h-screen">
          <div class="pb-32">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/organisms/Navbar.vue";
import Sidebar from "@/components/organisms/Sidebar.vue";
import { mapState } from "vuex";
export default {
  name: "DashboardLayout",
  computed: {
    ...mapState(["sideBarOpen"]),
  },
  components: {
    Sidebar,
    Navbar,
  },
};
</script>

<style scoped>
/* Add your layout-specific styles here */
</style>
