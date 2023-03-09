<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CStyleItem",
  components: {},
  props: {
    stepNumber: {
      type: String,
    },
    imageFirst: {
      type: Boolean,
      default: true,
    },
    heading: {
      type: String,
    },
    description: {
      type: String,
    },
    imagePath: {
      type: String,
    },
    imageAlt: {
      type: String,
    },
  },
});
</script>

<template>
  <div class="container grid grid-cols-2 gap-x-16 gap-y-24 items-center mb-24">
    <div
      v-if="imageFirst"
      class="flex relative items-center justify-center before:block before:absolute before:content-[''] before:w-[60%] before:pb-[60%] before:bg-brandVeryLight before:rounded-full before:-z-50 after:block after:absolute after:content-[''] after:w-[50%] after:pb-[50%] after:bg-brandLight after:rounded-full after:-z-40"
    >
      <img :src="imagePath" :alt="imageAlt" class="w-1/3" />
    </div>
    <div>
      <p class="text-greyLighter text-8xl mb-6">{{ stepNumber }}</p>
      <h3 class="text-4xl mb-3">{{ heading }}</h3>
      <p text-xl>
        {{ description }}
      </p>
    </div>
    <div
      v-if="!imageFirst"
      class="flex relative items-center justify-center before:block before:absolute before:content-[''] before:w-[60%] before:pb-[60%] before:bg-brandVeryLight before:rounded-full before:-z-50 after:block after:absolute after:content-[''] after:w-[50%] after:pb-[50%] after:bg-brandLight after:rounded-full after:-z-40"
    >
      <img :src="imagePath" :alt="imageAlt" class="w-1/3" />
    </div>
  </div>
</template>
