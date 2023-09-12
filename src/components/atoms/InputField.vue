<template>
  <div>
    <label class="block text-secondary text-sm font-[500] mb-1" :for="name">{{
      label
    }}</label>
    <div class="relative">
      <input
        :type="fieldType"
        v-model="inputValue"
        @input="handleInput"
        :placeholder="placeholder"
        :value="value"
        :name="name"
        :disabled="disabled"
        @change="handleChange"
        :class="{
          'border-red-500': isError,
          'border-green-500': isSuccess,
          'border-mpGrey200': !isError && !isSuccess,
          'pr-10': type === 'password',
        }"
        autocomplete="off"
        class="appearance-none border-[1px] bg-mpGrey100 rounded-[10px] w-full py-2 px-4 h-10 text-mpGrey500 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:font-light placeholder-mpGrey500"
      />
      <div
        v-if="type === 'password'"
        @click="togglePassword"
        class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
      >
        <p class="cursor-pointer text-mpGrey500 text-sm">
          {{ showPassword ? "Hide" : "Show" }}
        </p>
      </div>
    </div>
    <p v-if="isError" class="text-[#E62E2E] text-xs pt-1">{{ errorText }}</p>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    placeholder: { type: String },
    type: { type: String },
    label: { type: String },
    value: { type: String },
    name: { type: String },
    inline: { type: String },
    error: { type: String },
    disabled: { type: Boolean },
  },
  data() {
    return {
      inputValue: this.value,
      isError: false,
      isSuccess: false,
      showPassword: false,
    };
  },
  computed: {
    errorText() {
      return "Invalid input";
    },
    successText() {
      return "Valid input";
    },
    fieldType() {
      return !this.type === "password"
        ? this.type
        : this.showPassword
        ? "text"
        : this.type;
    },
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e.target.value);
    },
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
/* Add custom styles here */
</style>
