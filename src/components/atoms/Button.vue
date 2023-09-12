<template>
  <button
    :class="[
      styles,
      'px-4 focus:outline-none h-12 py-2.5 text-secondary bg-mpGrey400',
      {
        'w-full': isFullWidth,
        rounded: isRounded,
      },
    ]"
    :disabled="disabled"
    @click.prevent="$emit('click')"
  >
    <div class="flex flex-row gap-4 items-center justify-center">
      <mpImage
        v-if="leftIcon"
        :path="leftIcon"
        :imgStyle="'w-5 mb-0'"
        altText="My Image"
      />
      <span>{{ label }}</span>
      <mpImage
        v-if="rightIcon"
        :path="rightIcon"
        :imgStyle="'w-5 mb-0'"
        altText="My Image"
      />
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
    isRounded: {
      type: Boolean,
      default: false,
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
    leftIcon: String,
    rightIcon: String,
    loading: { type: Boolean, default: false },
    inline: String,
    disabled: { type: Boolean },
  },
};
</script>

<style scoped>
/* Add custom button styles here */
</style>
