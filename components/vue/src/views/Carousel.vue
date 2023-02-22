<script setup lang="ts">
import Carousel from "../components/Carousel.vue";
</script>

<template>
  <main>
    <header>
    <nav class="flex gap-x-4 ml-4 mr-4">
      <RouterLink to="/hero">Hero</RouterLink>
      <RouterLink to="/accordion">Accordion</RouterLink>
      <RouterLink to="/carousel">Carousel</RouterLink>
      <RouterLink to="/table">Table</RouterLink>
      <RouterLink to="/pagination">Pagination</RouterLink>
    </nav>
  </header>
    <Carousel />
  </main>
</template>
