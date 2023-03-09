<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FeaturedInImage",
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
  <img :src="imagePath" :alt="imageAlt" class="h-8 brightness-0 opacity-50" />
</template>
