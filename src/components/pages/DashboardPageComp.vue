<template>
  <div class="flex flex-col gap-6">
    <Card cardStyle="w-full rounded-[20px] py-6 shadow bg-mpGrey100">
      <div class="flex flex-col items-start gap-4">
        <h1 class="text-secondary font-[600] text-2xl">
          Hello! <br />Let’s get you set up
        </h1>
        <Stepper />
        <p
          class="text-[#374151] font-normal text-base leading-[-0.32px] -mt-1 mb-1"
        >
          Step 1: Tell us more about your business to get started.
        </p>
        <Button
          :label="'Continue compliance'"
          styles="text-secondary bg-primary hover:bg-primary/70 rounded-xl h-10 font-semibold px-2 text-xs xl:text-base w-1/5"
          :isFullWidth="true"
          :rightIcon="Images.arrowRight_icon"
        />
      </div>
    </Card>
    <div class="flex flex-col items-start gap-4">
      <div>
        <h1 class="text-secondary font-[600] text-2xl">Overview</h1>
        <div class="flex flex-row items-center py-2 gap-2 text-xs">
          <p class="text-[#6B7280] lg:text-sm text-xs">Last 30 days</p>
          <mpImage
            :path="Images.arrowDwn_icon"
            :imgStyle="'w-[12px] lg:w-[14px] items-center'"
            altText="arrow_down"
          />
        </div>
      </div>
      <div class="grid grid-cols-4 place-content-center">
        <div class="col-span-3">
          <line-chart :chart-data="chartData" :chart-options="chartOptions" />
        </div>
        <div class="col-span-1 flex flex-col gap-4">
          <div class="py-5 px-2">
            <h1 class="text-[#6B7280] font-medium text-sm mb-1">Revenue</h1>
            <h1 class="text-secondary font-[600] text-2xl">$0.00</h1>
          </div>
          <div class="py-5 px-2">
            <h1 class="text-[#6B7280] font-medium text-sm mb-1">
              Spend per customer
            </h1>
            <h1 class="text-secondary font-[600] text-2xl">$0.00</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button.vue";
import InputField from "@/components/atoms/InputField.vue";
import Stepper from "@/components/atoms/Stepper.vue";
import mpImage from "@/components/atoms/mpImage.vue";
import Card from "@/components/organisms/Card.vue";
import Form from "@/components/organisms/Form.vue";
import LineChart from "@/components/organisms/LineChart.vue";
import Images from "@/utils/images";

export default {
  name: "DashboardPageComp",
  components: { Button, Card, Form, InputField, mpImage, Stepper, LineChart },
  data() {
    return {
      Images,
      chartData: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70],
        },
      ],
      chartOptions: {
        chart: {
          id: "vue-apexchart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997],
        },
      },
    };
  },
  methods: {
    handleButtonClick() {
      this.$router.push("/auth/otp");
    },
  },
};
</script>
