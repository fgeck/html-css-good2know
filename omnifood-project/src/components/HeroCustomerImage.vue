<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeroCustomerImage",
  props: {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
  },
});
</script>

<template>
  <div>
    <img :src="image" alt="" class="h-12 w-12 rounded-full border-2" />
  </div>
</template>
