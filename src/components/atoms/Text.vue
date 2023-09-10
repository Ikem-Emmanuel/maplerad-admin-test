<template>
  <div :class="['mb-4', textStyle, cStyle]">
    <slot></slot>
  </div>
</template>

<script>
export default {
	name:'AppText',
  props: {
    type: {
      type: String,
      required: true,
      validator: value => ['header', 'subheader', 'text'].includes(value),
    },
    cStyle: String,
    textStyle: {
      type: String,
      default: 'text-base font-normal dark:text-secondary text-dark',
    },
  },
};
</script>

<style scoped>
/* Add custom styles here */
</style>
