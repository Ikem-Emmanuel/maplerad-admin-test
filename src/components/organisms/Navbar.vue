<template>
  <div class="sticky top-0 z-40 border-b-[1px]">
    <div class="w-full h-20 px-6 bg-white flex items-center justify-between">
      <!-- left navbar -->
      <div class="flex">
        <!-- mobile hamburger -->
        <div class="inline-block lg:hidden items-center mr-4">
          <button
            class="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger"
            @click="toggleSidebar()"
          >
            <svg
              class="h-5 w-5"
              v-bind:style="{ fill: 'black' }"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- right navbar -->
      <div class="flex items-center gap-5 relative">
        <div
          class="hidden flex-row items-center gap-2 py-1 px-2 md:flex lg:flex xl:flex"
        >
          <mpImage
            :path="Images.developer"
            :imgStyle="'w-5 items-center'"
            altText="arrow_down"
          />
          <h1 class="text-secondary font-medium text-base">Developer</h1>
          <mpImage
            :path="Images.arrowDwn_icon"
            :imgStyle="'w-5 items-center'"
            altText="arrow_down"
          />
        </div>
        <mpImage
          :path="Images.bell_icon"
          :imgStyle="'w-5 items-center'"
          altText="arrow_down"
        />
        <div
          class="flex flex-row items-center gap-4 py-1 px-2 cursor-pointer"
          @click="dropDownOpen = !dropDownOpen"
        >
          <mpImage
            :path="Images.user_icon"
            :imgStyle="'w-10 h-10 rounded-full'"
            altText="arrow_down"
          />
          <div>
            <p class="text-secondary font-medium text-sm">Chidalu Ugwu</p>
            <p class="text-[#6B7280] font-[500] text-xs">
              Maplerad Technologies
            </p>
          </div>
          <mpImage
            :path="Images.arrowDwn_icon"
            :imgStyle="'w-5 items-center'"
            altText="arrow_down"
          />
        </div>
      </div>
    </div>

    <!-- dropdown menu -->
    <div
      class="absolute bg-gray-100 border border-t-0 shadow-xl text-gray-700 rounded-b-lg w-48 bottom-0 -mb-10 right-0 mr-6"
      :class="dropDownOpen ? '' : 'hidden'"
    >
      <p
        @click.prevent="logout"
        class="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
      >
        Logout
      </p>
    </div>
    <!-- dropdown menu end -->
  </div>
</template>

<script>
import mpImage from "@/components/atoms/mpImage.vue";
import { clearStorage } from "@/utils/helper";
import Images from "@/utils/images";
import { mapState } from "vuex";

export default {
  name: "NavbarComponent",
  components: { mpImage },
  computed: {
    ...mapState(["sideBarOpen"]),
  },
  data() {
    return {
      dropDownOpen: false,
      Images,
    };
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch("toggleSidebar");
    },
    logout() {
      clearStorage();
      window.location.href = "/";
    },
  },
};
</script>
