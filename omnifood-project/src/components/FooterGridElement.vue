<script lang="ts">
import { defineComponent } from "vue";
import NavItem from "./NavItem.vue";

export default defineComponent({
  name: "FooterGridElement",
  components: { NavItem },
  props: {
    text: {
      type: String,
    },
  },
});
</script>

<template>
  <div class="px-4 py-2">
    <p v-if="text" class="text-lg font-semibold mb-2">{{ text }}</p>
    <slot />
  </div>
</template>
