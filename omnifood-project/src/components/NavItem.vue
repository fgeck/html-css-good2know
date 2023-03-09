<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavItem",
  components: {},
  props: {
    name: {
      type: String,
    },
  },
});
</script>

<template>
  <RouterLink
    to=""
    class="hover:text-brandDark transition-color duration-300 px-4 py-2"
    active-class="text-brandDark"
    >{{ name }}</RouterLink
  >
</template>
