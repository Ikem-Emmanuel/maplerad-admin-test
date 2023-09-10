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
      type="number"
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
    type: String,
  },
  data() {
    return {
      otpValues: Array(this.length).fill(""),
      focusedIndex: -1,
    };
  },
  methods: {
    // handleChangeText(event, index) {
    //   if (this.type === "number") {
    //     const input = event.target;
    //     const currentValue = input.value;
    //     const maxLength = 1;
    //     let newInputVal;
    //     if (currentValue.toString().length > maxLength) {
    //       newInputVal = currentValue.slice(0, maxLength);
    //     }
    //     if (newInputVal) {
    //       console.log(newInputVal);
    //       if (newInputVal.toString() > 1) return;
    //       this.$set(this.otpValues, index, newInputVal);
    //       if (newInputVal.toString().length === 1 && index < this.length - 1) {
    //         this.$refs[`otp-input-${index + 1}`][0].focus();
    //       }
    //     }
    //   }
    // },
    handleChangeText(event, index) {
      // Get the input text from the event
      const text = event.target.value;

      // Check if the input text has a length greater than 1
      if (text.length > 1) {
        // If we are on the last index of the OTP input
        if (index === this.length - 1) {
          // Handle the last index case

          // Set the current index value to the first character of the input text
          this.$set(this.otpValues, index, text.slice(0, 1));

          // Allow entering more than one character at the last index
          for (let i = 1; i < text.length; i++) {
            // Make sure we don't go beyond the last index
            if (index + i < this.length) {
              // Set subsequent characters of the input text to the next OTP input fields
              this.$set(this.otpValues, index + i, text.charAt(i));
            }
          }
        } else {
          // If we are not on the last index, prevent entering more than one character
          return;
        }
      } else {
        // Handle single character input

        // Set the current index value to the single character input
        this.$set(this.otpValues, index, text);

        // If a single character was entered and we are not on the last index,
        // focus on the next OTP input field
        if (text.length === 1 && index < this.length - 1) {
          this.$refs[`otp-input-${index + 1}`][0].focus();
        }
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
