<template>
  <div class="flex flex-col items-center gap-6">
    <mpImage
      :path="Images.logoDark_icon"
      :imgStyle="'w-[100px] xl:w-[120px] items-center'"
      altText="My Image"
    />
    <Card cardStyle="lg:w-[504px] md:w-2/3 sm:w-full">
      <h1
        class="font-extrabold text-secondary text-2xl xl:text-3xl text-center"
      >
        Enter your OTP
      </h1>
      <p
        class="font-normal w-full lg:w-[90%] xl:w-[90%] text-Lighter text-sm lg:text-base text-center mx-auto mt-2 mb-8"
      >
        To confirm your identity, enter the 6-digit sent to your email.
      </p>
      <div class="my-6">
        <Otp :length="6" type="number" @onFilled="handleOtpFilled" />
      </div>
      <Button
        type="submit"
        :label="'Submit'"
        styles="text-secondary bg-primary hover:bg-primary/70 rounded-xl font-medium text-sm h-10 xl:text-base"
        :isFullWidth="true"
      />
      <p
        class="font-normal text-Lighter text-sm lg:text-base text-center w-full mt-4 mb-8"
      >
        Didn’t receive any code?
        <span class="text-mpBlue mrl-2 cursor-pointer" @click="resendCode"
          >Resend</span
        >
      </p>
      <router-link to="/">
        <Button
          :leftIcon="Images.goBack_icon"
          :label="'Go back to login'"
          styles="text-secondary bg-mpGrey300 hover:bg-mpGrey200 text-sm xl:text-[18px] xl:h-12 rounded-xl font-medium"
          :clickHandler="handleButtonClick"
          :isFullWidth="true"
        />
      </router-link>
    </Card>
    <mpImage
      :path="Images.logoDark_icon"
      :imgStyle="'hidden xl:block lg:block w-[100px] xl:w-[366px] lg:w-[366px] items-start justify-self-start lg:ml-[-170px] lg:-mb-10  md:-mb-5 md:mt-10 xl:ml-[-160px] xl:-mb-10 mt-20'"
      altText="My Image"
    />
  </div>
</template>

<script>
import Button from "@/components/atoms/Button.vue";
import Otp from "@/components/atoms/Otp.vue";
import mpImage from "@/components/atoms/mpImage.vue";
import Card from "@/components/organisms/Card.vue";
import Images from "@/utils/images";

export default {
  name: "OtpPageComp",
  components: { Button, Card, mpImage, Otp },
  data() {
    return {
      Images,
    };
  },
  methods: {
    handleOtpFilled(otpValue) {
      // This method is called when the user has entered the OTP
      console.log("OTP Entered:", otpValue);

      // You can perform further actions, such as sending the OTP for verification
    },
    handleButtonClick(otpValue) {
      // This method is called when the user has entered the OTP
      console.log("OTP Entered:", otpValue);

      // You can perform further actions, such as sending the OTP for verification
    },
    resendCode() {
      console.log("OTP Sent:");
    },
  },
};
</script>
