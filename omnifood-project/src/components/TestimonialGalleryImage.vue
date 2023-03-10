<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TestimonialGalleryImage",
  components: {},
  props: {
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
  <figure class="block w-[100%] overflow-hidden">
    <img
      :src="imagePath"
      :alt="imageAlt"
      class="hover:scale-110 transition-all duration-400"
    />
  </figure>
</template>
