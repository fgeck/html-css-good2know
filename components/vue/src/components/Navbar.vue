<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>

<template>
  <nav class="flex gap-x-4 ml-4 mr-4 pt-4">
    <RouterLink to="/hero">Hero</RouterLink>
    <RouterLink to="/accordion">Accordion</RouterLink>
    <RouterLink to="/carousel">Carousel</RouterLink>
    <RouterLink to="/table">Table</RouterLink>
    <RouterLink to="/pagination">Pagination</RouterLink>
    <RouterLink to="/simpleLayout">SimpleLayout</RouterLink>
  </nav>
</template>
