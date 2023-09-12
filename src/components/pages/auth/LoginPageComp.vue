<template>
  <div class="flex flex-col items-center gap-6 xl:-mt-48">
    <mpImage
      :path="Images.logoDark_icon"
      :imgStyle="'w-[100px] xl:w-[120px] items-center'"
      altText="My Image"
    />
    <Card
      cardStyle="lg:w-[504px] bg-white rounded-[16px] shadow md:w-2/3 sm:w-full"
    >
      <h1
        class="font-extrabold text-secondary text-2xl xl:text-3xl text-center mb-8"
      >
        Sign in
      </h1>
      <form class="flex flex-col gap-8">
        <InputField
          label="Email"
          type="email"
          name="email"
          v-model="email"
          :error="errors.email"
          placeholder="eg. john@gmail.com"
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          v-model="password"
          :error="errors.password"
          placeholder="(8+ characters)"
        />
        <Button
          label="Sign in"
          :styles="buttonStyles"
          :isFullWidth="true"
          @click="login"
          :loading="isLoading"
          :disabled="buttonDisabled"
        />
      </form>

      <p class="font-normal text-Lighter text-sm text-center w-full mt-4 mb-8">
        Forgot your password?
      </p>
      <router-link to="/auth/otp">
        <Button
          :label="'Don’t have an account? Create one'"
          styles="text-secondary bg-mpGrey300 hover:bg-mpGrey200 text-sm xl:text-base rounded-xl font-medium"
          :isFullWidth="true"
        />
      </router-link>
    </Card>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button.vue";
import InputField from "@/components/atoms/InputField.vue";
import mpImage from "@/components/atoms/mpImage.vue";
import Card from "@/components/organisms/Card.vue";
import { getErrorMessage } from "@/utils/helper";
import Images from "@/utils/images";

export default {
  name: "LoginPageComp",
  components: { Button, Card, InputField, mpImage },
  data() {
    return {
      Images,
      email: "",
      password: "",
      isVerified: false,
      isLoading: false,
      errors: {
        email: "",
        password: "",
      },
      hasErrors: {
        email: false,
        password: false,
      },
    };
  },
  mounted() {
    if (this.$store.getters.getLoggedInStatus) {
      this.$router.push("/dashboard");
    }
  },
  computed: {
    buttonStyles() {
      if (
        this.isLoading ||
        !this.password ||
        !this.email ||
        this.password.length < 8 ||
        !this.validEmail(this.email)
      ) {
        return "rounded-xl font-semibold text-sm xl:text-base bg-mpGrey300 text-secondary cursor-not-allowed";
      } else {
        return "hover:bg-primary/70 rounded-xl font-medium text-sm xl:text-base bg-primary cursor-pointer";
      }
    },
    buttonDisabled() {
      if (
        this.isLoading ||
        !this.email ||
        !this.validEmail(this.email) ||
        this.password.length < 8
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    showSuccessNotification() {
      this.$toast.success("This is a success notification!");
    },
    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    checkErrors() {
      if (!this.email) {
        this.errors.email = "This is a required field";
        this.hasErrors.email = true;
      } else if (!this.validEmail(this.email)) {
        this.errors.email = "Enter a valid email address";
        this.hasErrors.email = true;
      } else {
        this.errors.email = "";
        this.hasErrors.email = false;
      }

      if (!this.password) {
        this.errors.password = "This is a required field";
        this.hasErrors.password = true;
      } else {
        this.errors.password = "";
        this.hasErrors.password = false;
      }
    },
    login() {
      this.checkErrors();
      if (this.hasErrors.password || this.hasErrors.email) {
        return;
      } else {
        this.isLoading = true;
        let data = {
          email: this.email,
          password: this.password,
        };
        this.$store
          .dispatch("login", data)
          .then((res) => {
            if (res.status === 200) {
              this.$router.push("/auth/otp");
              this.$store.dispatch("setUserEmail", this.email);
            }
            this.isLoading = false;
          })
          .catch((err) => {
            this.$toast.error(getErrorMessage(err));
            this.isLoading = false;
          });
      }
    },
  },
};
</script>
