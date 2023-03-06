<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeroActionButton",
  props: {
    name: {
      type: String,
    },
  },
});
</script>

<template>
  <button class="inline-block text-xl font-medium py-2 px-4 rounded-md">
    {{ name }}
  </button>
</template>
