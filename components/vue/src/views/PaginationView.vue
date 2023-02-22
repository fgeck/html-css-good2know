<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Pagination.vue";
export default defineComponent({
  name: "PaginationView",
  components: { Pagination },
  methods: {
    pageChanged(newPage: number) {
      // here we can receive new paginated results from backend
      // pass it to a pinia store and auomatically reload the
      // Pagination component
      console.log(`PageChanged to: ${newPage}`);
    },
  },
});
</script>

<template>
  <header>
    <nav class="flex gap-x-4 ml-4 mr-4">
      <RouterLink to="/hero">Hero</RouterLink>
      <RouterLink to="/accordion">Accordion</RouterLink>
      <RouterLink to="/carousel">Carousel</RouterLink>
      <RouterLink to="/table">Table</RouterLink>
      <RouterLink to="/pagination">Pagination</RouterLink>
    </nav>
  </header>
  <Pagination :allPages="10" :pageSize="5" @click="pageChanged($event)" />
</template>
