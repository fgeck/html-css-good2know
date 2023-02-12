<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="flex gap-x-4 ml-4 mr-4">
      <RouterLink to="/accordion">Accordion</RouterLink>
      <RouterLink to="/carousel">Carousel</RouterLink>
      <RouterLink to="/table">Table</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
