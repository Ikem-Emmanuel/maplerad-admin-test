<template>
  <div
    class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30"
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

    <div class="mb-4 px-4">
      <div
        class="w-full flex items-center gap-4 h-10 pl-4 bg-mpGrey200 transform transition-transform hover:scale-105 rounded-lg cursor-pointer"
      >
        <mpImage
          :path="Images.getStarted_icon"
          width="18px"
          altText="My Image"
        />
        <span class="text-secondary font-medium text-sm">Dashboard</span>
      </div>
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
    };
  },
};
</script>
