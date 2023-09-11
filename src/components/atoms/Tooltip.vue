<template>
  <div class="custom-tooltip">
    <p class="tooltip-label">{{ label }}</p>
    <p class="tooltip-value">{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "CustomTooltip",
  props: {
    label: String,
    value: String,
  },
};
</script>

<style scoped>
.custom-tooltip {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #333333;
}

.tooltip-label {
  font-weight: bold;
}

.tooltip-value {
  margin-top: 5px;
}
</style>
