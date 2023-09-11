<template>
  <div class="container">
    <div class="flex flex-col gap-10">
      <Card cardStyle="w-full rounded-[20px] py-6 bg-mpGrey100">
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
            :isFullWidth="false"
            :rightIcon="Images.arrowRight_icon"
          />
        </div>
      </Card>
      <div class="flex flex-col items-stretch gap-4 w-full">
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
            <AreaChart
              :chart-data="overViewChartData"
              :width="'900'"
              :type="'area'"
            />
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
      <div class="flex flex-col items-start gap-4">
        <div
          class="flex flex-row items-start justify-between w-full border-b-[1px] border-[#E5E7EB]"
        >
          <div>
            <h1 class="text-secondary font-[600] text-2xl">Reports</h1>
            <p class="text-[#6B7280] lg:text-sm text-xs mb-5">
              View all transaction made to your account
            </p>
          </div>
          <Button
            :label="'Export'"
            styles="text-secondary bg-[#E5E7EB] rounded-xl h-10 items-center font-semibold px-2 py-2 text-xs xl:text-sm"
            :isFullWidth="false"
            :rightIcon="Images.arrowRight_icon"
          />
        </div>
        <div class="grid grid-cols-4 gap-5 place-content-center">
          <div>
            <div class="py-5 px-2">
              <div class="flex flex-row items-center gap-2 mb-1">
                <h1 class="text-[#6B7280] font-normal text-sm">Revenue</h1>
                <div
                  class="flex flex-row items-center gap-1 bg-[#EDF7F1] py-1 px-2 rounded-xl"
                >
                  <mpImage
                    :path="Images.trendUp_icon"
                    :imgStyle="'w-4 items-center'"
                    altText="arrow_down"
                  />
                  <h1 class="text-mpGreen font-medium text-xs">2%</h1>
                </div>
              </div>
              <h1 class="text-secondary font-[500] text-xl">$350.00</h1>
            </div>
            <line-chart :chart-data="chartData" :type="'line'" />
          </div>
          <div>
            <div class="py-5 px-2">
              <div class="flex flex-row items-center gap-2 mb-1">
                <h1 class="text-[#6B7280] font-normal text-sm">
                  New customers
                </h1>
                <div
                  class="flex flex-row items-center gap-1 bg-[#EDF7F1] py-1 px-2 rounded-xl"
                >
                  <mpImage
                    :path="Images.trendUp_icon"
                    :imgStyle="'w-4 items-center'"
                    altText="arrow_down"
                  />
                  <h1 class="text-mpGreen font-medium text-xs">2%</h1>
                </div>
              </div>
              <h1 class="text-secondary font-[500] text-xl">$350.00</h1>
            </div>
            <line-chart :chart-data="chartData" :type="'line'" />
          </div>
          <div>
            <div class="py-5 px-2">
              <div class="flex flex-row items-center gap-2 mb-1">
                <h1 class="text-[#6B7280] font-normal text-sm">
                  Successful payments
                </h1>
                <div
                  class="flex flex-row items-center gap-1 bg-[#EDF7F1] py-1 px-2 rounded-xl"
                >
                  <mpImage
                    :path="Images.trendUp_icon"
                    :imgStyle="'w-4 items-center'"
                    altText="arrow_down"
                  />
                  <h1 class="text-mpGreen font-medium text-xs">2%</h1>
                </div>
              </div>
              <h1 class="text-secondary font-[500] text-xl">$350.00</h1>
            </div>
            <line-chart :chart-data="chartData" :type="'line'" />
          </div>
          <div>
            <div class="py-5 px-2">
              <div class="flex flex-row items-center gap-2 mb-1">
                <h1 class="text-[#6B7280] font-normal text-sm">
                  Failed payments
                </h1>
                <div
                  class="flex flex-row items-center gap-1 bg-[#EDF7F1] py-1 px-2 rounded-xl"
                >
                  <mpImage
                    :path="Images.trendUp_icon"
                    :imgStyle="'w-4 items-center'"
                    altText="arrow_down"
                  />
                  <h1 class="text-mpGreen font-medium text-xs">2%</h1>
                </div>
              </div>
              <h1 class="text-secondary font-[500] text-xl">$350.00</h1>
            </div>
            <line-chart :chart-data="chartData" :type="'line'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button.vue";
import Stepper from "@/components/atoms/Stepper.vue";
import mpImage from "@/components/atoms/mpImage.vue";
import AreaChart from "@/components/organisms/AreaChart.vue";
import Card from "@/components/organisms/Card.vue";
import LineChart from "@/components/organisms/LineChart.vue";
import Images from "@/utils/images";

export default {
  name: "DashboardPageComp",
  components: { Button, Card, mpImage, Stepper, LineChart, AreaChart },
  data() {
    return {
      Images,
      overViewChartData: [
        {
          name: "",
          data: [20, 20, 20, 20, 20, 20, 20],
        },
      ],
      chartData: [
        {
          name: "",
          data: [20, 20, 15, 18, 16, 25, 28],
        },
      ],
    };
  },
  methods: {
    handleButtonClick() {
      this.$router.push("/auth/otp");
    },
  },
};
</script>
