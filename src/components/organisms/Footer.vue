<template>
  <div
    id="footer"
    class="self-bottom w-fit mx-auto flex flex-row items-center xl:gap-2 font-normal bg-mpGrey400 rounded-[50px] h-10 mb-7"
  >
    <p class="px-3 py-2 text-secondary lg:text-sm text-xs">Privacy & Terms</p>
    <p class="px-3 py-2 text-secondary lg:text-sm text-xs">Contact us</p>
    <div class="flex flex-row items-center px-3 py-2 gap-2 text-xs">
      <p class="text-secondary lg:text-sm text-xs">Change region</p>
      <mpImage
        :path="Images.arrowDwn_icon"
        :imgStyle="'w-[12px] lg:w-[14px] items-center'"
        altText="arrow_down"
      />
    </div>
  </div>
</template>

<script>
import mpImage from "@/components/atoms/mpImage.vue";
import Images from "@/utils/images";

export default {
  name: "FooterComponent",
  components: { mpImage },
  data() {
    return {
      Images,
      backgroundImage: Images.authBackground_icon,
    };
  },
};
</script>
