<template>
  <div class="flex items-center justify-center">
    <apexchart
      height="300"
      :width="AreaChartWidth"
      :type="type"
      :options="chartOptions"
      :series="chartData"
    ></apexchart>
  </div>
</template>
<!-- :width="AreaChartWidth" -->
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
          type: "area",
          height: 500,
          width: "100%",
          foreColor: "#BFBFBF",
          toolbar: {
            autoSelected: "pan",
            show: false,
          },
        },
        colors: ["#AEF378"],
        stroke: {
          width: 2,
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
          size: 5,
          colors: ["#fff"],
          strokeColor: "#AEF378",
          strokeWidth: 2,
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
          // type: "datetime",
        },
        yaxis: {
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
        responsive: [
          {
            breakpoint: 1000,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false,
                },
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
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
      AreaChartWidth: 0,
    };
  },
  created() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  beforeMount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      const width = window.innerWidth;
      console.log(width);
      if (width > 320 && width < 480) {
        this.AreaChartWidth = "300";
      } else if (width > 481 && width < 768) {
        this.AreaChartWidth = "320";
      } else if (width > 769 && width < 1024) {
        this.AreaChartWidth = "500";
      } else if (width > 1025 && width < 1200) {
        this.AreaChartWidth = "600";
      } else if (width > 1201 && width < 1400) {
        this.AreaChartWidth = "650";
      } else if (width > 1401 && width < 1500) {
        this.AreaChartWidth = "850";
      } else if (width > 1501) {
        this.AreaChartWidth = "1000";
      } else {
        this.AreaChartWidth = "900";
      }
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
