<template>
  <div class="w-full xl:w-2/3">
    <ol
      class="flex items-center w-full text-sm font-medium text-center text-secondary sm:text-base"
    >
      <li
        v-for="(timeline, timelineIndex) in timelines"
        :key="timelineIndex"
        class="flex md:w-fit w-full items-center"
      >
        <div
          :class="{
            'bg-primary': timelineIndex === 0,
            'bg-mpGrey400': timelineIndex !== 0,
          }"
          class="flex items-center text-sm font-medium after:content-[''] sm:after:hidden justify-center after:text-red-200 w-6 h-6 rounded-full"
        >
          {{ timeline.title }}
        </div>
        <div
          v-if="timelineIndex !== timelines.length - 1"
          class="after:content-[''] after:xl:w-[96px] after:h-1 after:border-[2px] after:border-gray-200 after:hidden sm:after:inline-block after:mx-2 mx-5 xl:mx-0 mb-2"
        ></div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "StepperComponent",
  data() {
    return {
      timelines: [
        {
          title: "1",
        },
        {
          title: "2",
        },
        {
          title: "3",
        },
        {
          title: "4",
        },
      ],
    };
  },
};
</script>
