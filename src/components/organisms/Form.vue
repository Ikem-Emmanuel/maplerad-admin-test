<template>
  <form @submit.prevent="submitForm" class="flex flex-col gap-6">
    <slot></slot>
    <div v-if="isFormError" class="text-red-500 text-sm mt-2">
      {{ formErrorMessage }}
    </div>
    <div v-if="isFormSuccess" class="text-green-500 text-sm mt-2">
      {{ formSuccessMessage }}
    </div>
    <Button
      type="submit"
      :label="buttonText"
      styles="text-secondary bg-primary hover:bg-primary/70 rounded-xl font-medium text-sm xl:text-base"
      :isFullWidth="true"
    />
  </form>
</template>

<script>
import Button from "@/components/atoms/Button.vue";
export default {
  name: "FormField",
  components: { Button },
  props: {
    buttonText: String,
    formStyle: String,
  },
  data() {
    return {
      isFormError: false,
      isFormSuccess: false,
    };
  },
  computed: {
    formErrorMessage() {
      // Add your custom logic to generate a form-level error message
      return "Form submission failed";
    },
    formSuccessMessage() {
      // Add your custom logic to generate a form-level success message
      return "Form submitted successfully";
    },
  },
  methods: {
    submitForm() {
      // Add your form submission logic here
      // Check each input field's validation state and set isFormError and isFormSuccess accordingly
    },
  },
};
</script>

<style scoped>
/* Add custom styles here */
</style>
