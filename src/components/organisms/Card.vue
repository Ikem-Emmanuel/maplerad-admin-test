<template>
  <div class="px-6 py-8 rounded-2xl" :class="cardStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    cardStyle: String,
  },
};
</script>
