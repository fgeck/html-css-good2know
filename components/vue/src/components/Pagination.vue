<script lang="ts">
import { defineComponent } from "vue";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";

export default defineComponent({
  name: "Pagination",
  components: { ChevronLeft, ChevronRight },
  emits: ["click"],
  data() {
    return {
      currentPage: 1,
    };
  },
  props: {
    allPages: {
      type: Number,
      default: 10,
    },
    pageSize: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    chevronLeftClicked() {
      if (this.currentPage === 1) {
        return;
      }
      this.currentPage--;
      this.$emit("click", this.currentPage);
    },
    chevronRightClicked() {
      if (this.currentPage === this.allPages) {
        return;
      }
      this.currentPage++;
      this.$emit("click", this.currentPage);
    },
    dotsClicked() {
      this.currentPage++;
      this.$emit("click", this.currentPage);
    },
    changeCurrentPage(newPage: number) {
      this.currentPage = newPage;
      this.$emit("click", this.currentPage);
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

    <!-- First Page -->
    <!-- <button
      :key="1"
      class="h-[30px] w-[30px] my-0.5 rounded-full hover:bg-white hover:border hover: border-sky-600"
      :class="{ 'bg-sky-600 text-white hover:text-black': 1 === currentPage }"
      :disabled="1 === currentPage"
      @click="currentPage = 1"
    >
      1
    </button> -->

    <!-- Current Active -->
    <!-- <button
      v-if="currentPage !== 1 && currentPage !== allPages"
      class="h-[30px] w-[30px] my-0.5 rounded-full hover:bg-white hover:border hover: border-sky-600 bg-sky-600 text-white hover:text-black"
      :disabled="true"
    >
      {{ currentPage }}
    </button> -->

    <button
      v-if="allPages <= pageSize"
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
      v-for="h in pageSize"
      :key="h"
      class="h-[30px] w-[30px] mx-0.5 rounded-full hover:bg-white hover:border hover:border-sky-600"
      :class="{ 'bg-sky-600 text-white hover:text-black': h === currentPage }"
      :disabled="h === currentPage"
      @click="changeCurrentPage(h)"
    >
      {{ h }}
    </button>

    <!-- Dots -->
    <button
      v-if="allPages > pageSize"
      class="h-[30px] w-[30px] rounded-full hover:bg-white hover:border hover:border-sky-600"
      @click="dotsClicked"
    >
      ...
    </button>

    <!-- Last Page -->
    <button
      class="h-[30px] w-[30px] rounded-full hover:bg-white hover:border hover:border-sky-600"
      :class="{
        'bg-sky-600 text-white hover:text-black': allPages === currentPage,
      }"
      :disabled="allPages === currentPage"
      @click="changeCurrentPage(allPages)"
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
