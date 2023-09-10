<template>
  <div>
    <apexchart
      width="500"
      type="line"
      :options="chartOptions"
      :series="chartData"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    chartData: {
      type: Array,
      required: true,
    },
    chartOptions: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
