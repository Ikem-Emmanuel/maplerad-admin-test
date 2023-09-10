<template>
  <div
    class="h-screen xl:min-h-screen flex items-center justify-center"
    :style="{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <div class="container mx-auto overflow-y-auto">
      <div class="flex flex-col h-screen justify-between">
        <main class="w-full p-4 my-auto">
          <router-view></router-view>
        </main>
        <div>
          <FooterComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterComponent from "@/components/organisms/Footer.vue";
import Images from "@/utils/images";

export default {
  name: "AuthLayout",
  components: { FooterComponent },
  data() {
    return {
      Images,
      backgroundImage: Images.authBackground_icon,
    };
  },
};
</script>

<style scoped>
/* Add your layout-specific styles here */
</style>
