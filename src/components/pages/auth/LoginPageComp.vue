<template>
  <div class="flex flex-col items-center gap-6 xl:-mt-48">
    <mpImage
      :path="Images.logoDark_icon"
      :imgStyle="'w-[100px] xl:w-[120px] items-center'"
      altText="My Image"
    />
    <Card cardStyle="lg:w-[504px] md:w-2/3 sm:w-full">
      <h1
        class="font-extrabold text-secondary text-2xl xl:text-3xl text-center mb-8"
      >
        Sign in
      </h1>
      <Form :buttonText="'Sign in'">
        <InputField
          id="email"
          label="Email"
          type="email"
          placeholder="eg. john@gmail.com"
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="(8+ characters)"
        />
      </Form>
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
import Form from "@/components/organisms/Form.vue";
import Images from "@/utils/images";

export default {
  name: "LoginPageComp",
  components: { Button, Card, Form, InputField, mpImage },
  data() {
    return {
      Images,
    };
  },
  methods: {
    handleButtonClick() {
      this.$router.push("/auth/otp");
    },
  },
};
</script>
