<script lang="ts">
import { defineComponent } from "vue";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";

export default defineComponent({
  name: "Pagination",
  components: { ChevronLeft, ChevronRight },
  data() {
    return {
      currentPage: 3,
      pageSize: 5,
      allPages: 25,
    };
  },
  methods: {
    chevronLeftClicked() {
      if (this.currentPage === 1) {
        return;
      }
      this.currentPage--;
      console.log(this.currentPage);
    },
    chevronRightClicked() {
      if (this.currentPage === this.allPages) {
        return;
      }
      this.currentPage++;
      console.log(this.currentPage);
    },
    dotsClicked() {
      this.currentPage++;
    },
  },
});
</script>

<template>
  <div class="mx-auto my-[100px] flex items-center justify-center">
    <button
      class="bg-white border border-sky-600 h-[40px] w-[40px] rounded-full hover:bg-sky-600"
      @click="chevronLeftClicked"
    >
      <ChevronLeft
        class="text-sky-600 text-3xl flex content-center justify-center hover:text-white"
      />
    </button>

    <button
      v-if="allPages <= 5"
      v-for="i in allPages - 1"
      :key="i"
      class="h-[30px] w-[30px] my-0.5 rounded-full hover:bg-white hover:border hover: border-sky-600"
      :class="{ 'bg-sky-600 text-white hover:text-black': i === currentPage }"
      :disabled="i === currentPage"
      @click="currentPage = i"
    >
      {{ i }}
    </button>

    <button
      v-else
      v-for="h in 5"
      :key="h"
      class="h-[30px] w-[30px] mx-0.5 rounded-full hover:bg-white hover:border hover:border-sky-600"
      :class="{ 'bg-sky-600 text-white hover:text-black': h === currentPage }"
      :disabled="h === currentPage"
      @click="currentPage = h"
    >
      {{ h }}
    </button>

    <button
      v-if="allPages > 5"
      class="h-[30px] w-[30px] rounded-full hover:bg-white hover:border hover:border-sky-600"
      @click="dotsClicked"
    >
      ...
    </button>
    <button
      class="h-[30px] w-[30px] rounded-full hover:bg-white hover:border hover:border-sky-600"
      :class="{
        'bg-sky-600 text-white hover:text-black': allPages === currentPage,
      }"
      :disabled="allPages === currentPage"
      @click="currentPage = allPages"
    >
      {{ allPages }}
    </button>

    <button
      class="bg-white border border-sky-600 h-[40px] w-[40px] rounded-full hover:bg-sky-600"
      @click="chevronRightClicked"
    >
      <ChevronRight
        class="text-sky-600 text-3xl flex content-center justify-center hover:text-white"
      />
    </button>
  </div>
</template>
