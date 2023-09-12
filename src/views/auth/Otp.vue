<template>
  <Otp />
</template>

<script>
import Otp from "@/components/pages/auth/OtpComp.vue";

export default {
  name: "OtpPage",
  props: {
    msg: String,
  },
  components: { Otp },
};
</script>
