<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">

      <Sidebar />

      <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">
        <Navbar />
        <div class="p-6 bg-gray-100 mb-20">
          <router-view />
        </div>

        <!-- <Footer /> -->

      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/organisms/Navbar.vue';
import Sidebar from '@/components/organisms/Sidebar.vue';
import { mapState } from 'vuex';
export default {
  name: 'DashboardLayout',
  computed: {
    ...mapState(['sideBarOpen'])
  },
  components: {
    Sidebar,
    Navbar,
  }
}
</script>

<style scoped>
/* Add your layout-specific styles here */
</style>
