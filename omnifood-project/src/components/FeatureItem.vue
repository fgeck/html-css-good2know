<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FeatureItem",
  components: {},
  props: {
    text: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
});
</script>

<template>
  <div>
    <div class="bg-brandVeryLight p-4 rounded-full inline-block mb-2">
      <slot />
    </div>
    <p class="text-lg font-semibold mb-1">{{ title }}</p>
    <p>{{ text }}</p>
  </div>
</template>
