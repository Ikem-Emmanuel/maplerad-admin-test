<template>
  <div class="lg:container md:container">
    <div class="flex flex-col gap-10">
      <div class="flex flex-col items-start gap-4 xl:w-2/5 lg:w-[80%]">
        <h1 class="text-secondary font-[600] text-4xl leading-[50px]">
          Convert your money between currencies fast!
        </h1>
        <p class="text-[#374151] font-normal text-base leading-2 mb-1 w-[90%]">
          Make international transfers to local bank accounts and mobile money
          wallets.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-5 place-items-center">
        <div class="hidden lg:block xl:block">
          <mpImage
            :path="Images.fx_illustration"
            :imgStyle="'xl:w-full lg:w-full  items-center xl:mr-20'"
            altText="arrow_down"
          />
        </div>
        <div class="col-span-2 lg:col-span-1 md:col-span-2 xl:col-span-1">
          <Card cardStyle="xl:w-full lg:w-full md:w-full sm:w-full shadow-md">
            <div class="flex flex-col justify-between items-start">
              <div
                class="xl:w-full h-[108px] px-5 flex flex-row items-center justify-between border-[1px] rounded-[16px] border-mpGrey200 bg-mpGrey100"
              >
                <div class="py-5 px-2 lg:w-[60%] w-1/2">
                  <label
                    class="block text-secondary text-sm font-[500] mb-1"
                    for="you pay"
                    >You Pay</label
                  >
                  <div class="relative">
                    <input
                      type="number"
                      v-model="youPay"
                      autocomplete="off"
                      placeholder="0"
                      class="appearance-none border-0 bg-mpGrey100 rounded-[10px] w-full py-4 px-0 h-10 text-mpGrey500 leading-tight focus:outline-none focus:shadow-outline placeholder:text-4xl text-4xl placeholder:font-light placeholder-mpGrey500"
                    />
                  </div>
                </div>
                <div>
                  <div
                    class="flex flex-row items-center gap-1 bg-mpGrey300 py-1 px-2 rounded-full"
                  >
                    <mpImage
                      :path="Images.USA_Flag_Icon"
                      :imgStyle="'w-4 items-center'"
                      altText="arrow_down"
                    />
                    <h1 class="text-secondary font-medium text-base mx-2">
                      USD
                    </h1>
                    <mpImage
                      :path="Images.arrowDwn_icon"
                      :imgStyle="'w-4 items-center'"
                      altText="arrow_down"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div class="flex flex-col md:grid grid-cols-2 text-gray-50">
                  <div class="flex md:contents">
                    <div
                      class="col-start-2 col-end-4 mr-10 md:mx-auto relative"
                    >
                      <div class="h-full w-6 flex items-center justify-center">
                        <div
                          class="h-full w-1 bg-[#EFF1F3] pointer-events-none"
                        ></div>
                      </div>
                      <div
                        class="w-6 h-6 p-1 absolute top-1/2 -mt-0 rounded-full bg-[#EFF1F3] text-center"
                      >
                        <mpImage
                          :path="Images.x_icon"
                          :imgStyle="'w-6  items-center'"
                          altText="arrow_down"
                        />
                      </div>
                    </div>
                    <div
                      class="col-start-4 col-end-12 p-4 rounded-xl mt-6 mr-auto w-full"
                    >
                      <h3 class="text-lg mb-1 text-[#9CA3AF]">
                        <span class="font-semibold">NGN 720 =</span> USD 1.00
                      </h3>
                    </div>
                  </div>
                  <div class="flex md:contents">
                    <div
                      class="col-start-2 col-end-4 mr-10 md:mx-auto relative"
                    >
                      <div class="h-full w-6 flex items-center justify-center">
                        <div
                          class="h-full w-1 bg-[#EFF1F3] pointer-events-none"
                        ></div>
                      </div>
                      <div
                        class="w-6 h-6 p-1 absolute top-1/2 -mt-3 rounded-full bg-[#EFF1F3] text-center"
                      >
                        <mpImage
                          :path="Images.minus_icon"
                          :imgStyle="'w-6  items-center'"
                          altText="arrow_down"
                        />
                      </div>
                    </div>
                    <div
                      class="col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto w-full"
                    >
                      <h3 class="text-lg mb-1 text-[#9CA3AF]">
                        <span class="font-semibold">Fee </span> 24
                      </h3>
                    </div>
                  </div>
                  <div class="flex md:contents">
                    <div
                      class="col-start-2 col-end-4 mr-10 md:mx-auto relative"
                    >
                      <div class="h-full w-6 flex items-center justify-center">
                        <div
                          class="h-full w-1 bg-[#EFF1F3] pointer-events-none"
                        ></div>
                      </div>
                      <div
                        class="w-6 h-6 p-1 absolute top-1/2 -mt-8 rounded-full bg-[#EFF1F3] text-center"
                      >
                        <mpImage
                          :path="Images.history_icon"
                          :imgStyle="'w-6  items-center'"
                          altText="arrow_down"
                        />
                      </div>
                    </div>
                    <div
                      class="col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto w-full"
                    >
                      <h3 class="text-lg mb-10 text-[#9CA3AF]">2 Min</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="w-full xl:w-full lg:w-full h-[108px] px-5 flex flex-row items-center justify-between border-[1px] rounded-[16px] border-mpGrey200 bg-mpGrey100"
              >
                <div class="py-5 px-2">
                  <div class="flex flex-row items-center gap-2 mb-1">
                    <h1 class="text-secondary font-[500] text-sm">You get</h1>
                  </div>
                  <h1 class="text-[#BFBFBF] font-[500] text-[32px]">
                    {{ youGet }}
                  </h1>
                </div>
                <div>
                  <div
                    class="flex flex-row items-center gap-1 bg-mpGrey300 py-1 px-2 rounded-full"
                  >
                    <mpImage
                      :path="Images.NGN_Flag_Icon"
                      :imgStyle="'w-4 items-center'"
                      altText="arrow_down"
                    />
                    <h1 class="text-secondary font-medium text-base mx-2">
                      NGN
                    </h1>
                    <mpImage
                      :path="Images.arrowDwn_icon"
                      :imgStyle="'w-4 items-center'"
                      altText="arrow_down"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Button
              :label="'Convert'"
              styles="text-secondary bg-primary hover:bg-mpGrey200 text-sm xl:text-base rounded-xl font-medium mt-8 cursor-pointer"
              :isFullWidth="true"
              :clickHandler="convertCurrency"
            />
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button.vue";
import mpImage from "@/components/atoms/mpImage.vue";
import Card from "@/components/organisms/Card.vue";
import { formatCurrencyDecimal } from "@/utils/helper.js";

import Images from "@/utils/images";

export default {
  name: "DashboardPageComp",
  components: { Button, Card, mpImage },
  data() {
    return {
      Images,
      NGNValue: 0,
      USDValue: 0,
      Fee: 24,
      time: 2,
      youPay: 0,
      youGet: 0,
      currencyType: "USD",
      exchangeRate: {
        USD: 720,
        EUR: 800,
      },
      selectedCurrency: null,
      currencies: [
        {
          code: "USD",
          name: "United States Dollar",
          logo: Images.USA_Flag_Icon,
        },
        { code: "NGN", name: "Nigeria", logo: Images.NGN_Flag_Icon },
      ],
    };
  },
  created() {
    this.selectedCurrency = this.currencies[0];
  },
  methods: {
    handleButtonClick() {
      this.$router.push("/auth/otp");
    },
    convertCurrency() {
      if (this.currencyType === "USD") {
        this.youGet = formatCurrencyDecimal(
          this.youPay * this.exchangeRate.USD + this.Fee
        );
      } else if (this.currencyType === "EUR") {
        this.youGet = formatCurrencyDecimal(
          this.youPay * this.exchangeRate.EUR + this.Fee
        );
      } else {
        this.youGet = this.youPay;
      }
    },
  },
};
</script>
