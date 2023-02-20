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
  <main>
    <Pagination :allPages="10" :pageSize="5" @click="pageChanged($event)" />
  </main>
</template>
