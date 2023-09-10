<template>
  <div class="px-6 py-8 rounded-2xl shadow-md" :class="cardStyle">
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
