<template>
  <img :src="path" :class="imgStyle" :width="width" :alt="altText" />
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    imgStyle: {
      type: String,
    },
    width: {
      type: [String, Number],
      default: "auto",
    },
    altText: {
      type: String,
      default: "Image",
    },
  },
  computed: {
    styleObject() {
      return {
        ...this.style,
      };
    },
  },
};
</script>
