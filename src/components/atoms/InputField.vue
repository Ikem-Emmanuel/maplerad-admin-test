<template>
  <div>
    <label class="block text-secondary text-sm font-[500] mb-1" :for="id">{{ label }}</label>
    <div class="relative">
      <input
        :id="id"
        :type="type"
        v-model="inputValue"
        @input="validateInput"
        :class="{
          'border-red-500': isError,
          'border-green-500': isSuccess,
          'border-mpGrey200': !isError && !isSuccess,
          'pr-10': type === 'password',
        }"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        class="appearance-none border-[1px]  bg-mpGrey100 rounded-[10px] w-full py-2 px-4 h-10 text-mpGrey500 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:font-light placeholder-mpGrey500"
      />
      <div v-if="type === 'password'" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <i
          v-if="showPassword"
          @click="togglePassword"
          class="cursor-pointer fas fa-eye-slash text-gray-400 hover:text-gray-600"
        ></i>
        <i
          v-else
          @click="togglePassword"
          class="cursor-pointer fas fa-eye text-gray-400 hover:text-gray-600"
        ></i>
      </div>
    </div>
    <p v-if="isError" class="text-red-500 text-xs italic">{{ errorText }}</p>
    <p v-if="isSuccess" class="text-green-500 text-xs italic">{{ successText }}</p>
  </div>
</template>

<script>
export default {
  name:'InputField',
  props: {
    id: String,
    label: String,
    type: String,
    placeholder: String,
    value: String,
    autocomplete: {
      type: String,
      default: "off",
    },
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
      // Add your custom validation logic here for error messages
      return 'Invalid input';
    },
    successText() {
      // Add your custom validation logic here for success messages
      return 'Valid input';
    },
  },
  methods: {
    validateInput() {
      // Add your validation logic here
      // Set this.isError and this.isSuccess accordingly
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
