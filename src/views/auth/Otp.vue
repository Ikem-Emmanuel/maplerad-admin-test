<template>
  <Otp />
</template>

<script>
import Otp from "@/components/pages/auth/Otp.vue";

export default {
  name: "OtpPage",
  props: {
    msg: String,
  },
  components: { Otp },
};
</script>
