<template>
  <div class="flex justify-between">
    <input
      v-for="(value, index) in otpValues"
      :key="index"
      v-model="otpValues[index]"
      @input="handleChangeText($event, index)"
      @keydown="handleKeyPress($event, index)"
      :class="[
        'w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-center border-[1px] border-mpGrey200  rounded-[10px] py-2 px-2   bg-mpGrey100',
        focusedIndex === index ? 'border-primary' : 'border-mpGrey200',
      ]"
      maxlength="1"
      type="text"
      :ref="`otp-input-${index}`"
      @focus="handleFocus(index)"
    />
  </div>
</template>

<script>
export default {
  name: "OtpInputField",
  props: {
    length: Number,
  },
  data() {
    return {
      otpValues: Array(this.length).fill(""),
      focusedIndex: -1,
    };
  },
  methods: {
    handleChangeText(event, index) {
      const text = event.target.value;
      if (text.length > 1) return;

      this.$set(this.otpValues, index, text);

      if (text.length === 1 && index < this.length - 1) {
        this.$refs[`otp-input-${index + 1}`][0].focus();
      }
    },
    handleKeyPress(event, index) {
      if (event.key === "Backspace" && index > 0 && !this.otpValues[index]) {
        this.$refs[`otp-input-${index - 1}`][0].focus();
      }
    },
    handleFocus(index) {
      this.focusedIndex = index;
    },
  },
};
</script>

<style scoped></style>
