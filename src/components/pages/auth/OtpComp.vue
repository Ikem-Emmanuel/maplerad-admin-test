<template>
  <div class="flex flex-col items-center gap-6">
    <mpImage
      :path="Images.logoDark_icon"
      :imgStyle="'w-[100px] xl:w-[120px] items-center'"
      altText="My Image"
    />
    <Card
      cardStyle="lg:w-[504px] bg-white rounded-[16px] shadow md:w-2/3 sm:w-full"
    >
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
        <Otp :length="6" type="number" @otpChange="handleOtpFilled" />
      </div>
      <Button
        label="Sign in"
        :styles="buttonStyles"
        :isFullWidth="true"
        @click="handleSubmit"
        :loading="isLoading"
        :disabled="isLoading || !otp"
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
          :isFullWidth="true"
          @click="navigateToHome"
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
import { getErrorMessage, setStorage } from "@/utils/helper";
import Images from "@/utils/images";

export default {
  name: "OtpPageComp",
  components: { Button, Card, mpImage, Otp },
  data() {
    return {
      Images,
      otp: "",
      userEmail: "",
      isLoading: false,
    };
  },

  computed: {
    buttonStyles() {
      if (!this.otp) {
        return "rounded-xl font-semibold text-sm xl:text-base bg-mpGrey300 text-secondary cursor-not-allowed";
      } else {
        return "hover:bg-primary/70 rounded-xl font-medium text-sm xl:text-base bg-primary";
      }
    },
  },

  created() {
    this.userEmail = this.$store.state.userEmail;
    console.log(this.$store.state.userEmail);
  },
  methods: {
    handleOtpFilled(otpValue) {
      this.otp = otpValue;
      console.log(this.userEmail);
    },
    handleSubmit() {
      if (this.top) {
        return;
      } else {
        this.isLoading = true;
        let data = {
          email: this.userEmail,
          otp: this.otp,
        };
        this.$store
          .dispatch("verifyOtp", data)
          .then((res) => {
            const userData = {
              logged: true,
            };
            if (res.status === 200) {
              this.$toast.success("Welcome, you have successfully logged in!");
              setStorage("obj", JSON.stringify(userData));
              this.$store.dispatch("updateLoggedInState", true);
              this.$router.push("/dashboard");
            }
            this.isLoading = false;
          })
          .catch((err) => {
            this.$toast.error(getErrorMessage(err));
            this.isLoading = false;
          });
      }
    },
    resendCode() {
      console.log("OTP Sent:");
    },
    navigateToHome() {
      this.$router.push("/");
    },
  },
};
</script>
