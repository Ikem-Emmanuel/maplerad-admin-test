<template>
  <button
    :type="type"
    :class="[
      'px-4 focus:outline-none h-12 py-2.5 ',
      styles,
      {
        'w-full': isFullWidth,
        rounded: isRounded,
      },
    ]"
    @click="handleClick"
  >
    <div class="flex flex-row gap-4 items-center justify-center">
      <template v-if="leftIcon">
        <mpImage :path="leftIcon" :imgStyle="'w-5'" altText="My Image" />
      </template>
      <span>{{ label }}</span>
      <template v-if="rightIcon">
        <mpImage :path="rightIcon" :imgStyle="'w-5'" altText="My Image" />
      </template>
    </div>
  </button>
</template>

<script>
import mpImage from "./mpImage.vue";
export default {
  name: "AppButton",
  components: { mpImage },
  props: {
    label: {
      type: String,
      required: true,
    },
    styles: String,
    clickHandler: Function,
    isRounded: {
      type: Boolean,
      default: false,
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
    type: String,
    leftIcon: String,
    rightIcon: String,
  },
  methods: {
    handleClick() {
      if (this.clickHandler) {
        this.clickHandler();
      }
    },
  },
};
</script>

<style scoped>
/* Add custom button styles here */
</style>
