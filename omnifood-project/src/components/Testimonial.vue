<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Testimonial",
  components: {},
  props: {
    text: {
      type: String,
    },
    customerName: {
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
  <figure>
    <img :src="imagePath" :alt="imageAlt" class="w-12 rounded-full mb-3" />
    <blockquote class="mb-4">{{ text }}</blockquote>
    <p class="text-greyLight2">&mdash; {{ customerName }}</p>
  </figure>
</template>
