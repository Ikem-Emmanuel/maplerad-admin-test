<template>
  <div>
    <apexchart
      :width="width"
      height="150"
      :type="type"
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
    width: String,
    type: String,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: "line",
          type: "line",
          height: 500,
          width: 1000,
          foreColor: "#BFBFBF",
          toolbar: {
            autoSelected: "pan",
            show: false,
          },
        },
        colors: ["#476EF9"],
        stroke: {
          width: 2,
          curve: "smooth",
        },
        grid: {
          borderColor: "#F3F4F6",
          strokeDashArray: 5,
          clipMarkers: false,
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          gradient: {
            enabled: true,
            opacityFrom: 0.55,
            opacityTo: 0,
          },
        },
        markers: {
          show: false,
        },
        xaxis: {
          categories: ["July 6", "", "", "", "", "", "Today"],
          // type: "datetime",
        },
        yaxis: {
          show: false,
          min: 0,
          max: 40,
          tickAmount: 4,
          labels: {
            style: {
              fontSize: "14px",
              color: "#BFBFBF",
            },
          },
        },
        tooltip: {
          theme: "dark",
          marker: {
            show: false, // Show the marker
            width: 12,
            height: 120,
            offsetY: -5, // Adjust the vertical position of the marker
            fillColor: "#ffffff",
            strokeColor: "#D1D5DB",
            strokeWidth: 2,
            shape: "circle", // You can use other shapes like "square" or "circle"
          },
          x: {
            formatter: function () {
              return "";
            },
            show: false,
          },
          y: {
            formatter: function (val) {
              return "$" + val;
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
