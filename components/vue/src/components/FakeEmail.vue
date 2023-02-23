<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FakeEmail",
  props: {
    name: {
      type: String,
    },
  },
});
</script>

<template>
  <div class="flex items-center justify-center bg-slate-600 h-[96px] shrink-0">
    {{ name }}
  </div>
</template>
