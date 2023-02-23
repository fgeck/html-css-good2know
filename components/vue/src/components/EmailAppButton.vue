<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmailAppButton",
  props: {
    name: {
      type: String,
    },
  },
});
</script>

<template>
  <button
    class="inline-block text-base font-bold text-white border-none bg-sky-600 px-4 mx-2"
  >
    {{ name }}
  </button>
</template>
