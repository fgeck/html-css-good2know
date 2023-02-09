<script lang="ts">
import { Carousel, CarouselItem } from "@/models/Carousel";
import { defineComponent } from "vue";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";

export default defineComponent({
  name: "Carousel",
  components: { ChevronLeft, ChevronRight },
  data() {
    return {
      carousel: new Carousel([
        new CarouselItem(
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea atque debitis, esse, illum facere commodi assumenda expedita, ex nesciunt aliquid eveniet fuga mollitia! Vero consectetur aut, repellendus blanditiis mollitia minus.",
          "Maria Mariavica",
          "Head of HR",
          "../images/maria.jpg"
        ),
        new CarouselItem(
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea atque debitis, esse, illum facere commodi assumenda expedita, ex nesciunt aliquid eveniet fuga mollitia! Vero consectetur aut, repellendus blanditiis mollitia minus.",
          "Daniela Darren",
          "Scout at HR",
          "../images/hero.jpg"
        ),
      ]),
      activeItemIndex: 0,
    };
  },
  methods: {
    buttonSelectorClicked(index: number) {
      this.activeItemIndex = index;
    },
    chevronLeftClicked() {
      if (this.activeItemIndex === 0) {
        this.activeItemIndex = this.carousel.items.length - 1;
        return;
      }
      this.activeItemIndex--;
    },
    chevronRightClicked() {
      if (this.activeItemIndex === this.carousel.items.length - 1) {
        this.activeItemIndex = 0;
        return;
      }
      this.activeItemIndex++;
    },
  },
});
</script>

<template>
  <!-- 
        Carousel Component
     -->
  <div
    class="w-[800px] bg-sky-600 mx-auto my-[100px] rounded-lg p-8 pl-20 flex align-center gap-20 relative"
  >
    <img
      class="h-[200px] w-[200px] rounded-lg scale-150 shadow-lg shadow-slate-400"
      :src="carousel.items[activeItemIndex].imagePath"
      :alt="carousel.items[activeItemIndex].name"
    />
    <blockquote>
      <p class="text-lg font-normal leading-6 mb-4 text-sky-100">
        {{ carousel.items[activeItemIndex].testimonial }}
      </p>
      <p class="text-sm mb-1 text-sky-100">
        {{ carousel.items[activeItemIndex].name }}
      </p>
      <p class="text-xs mb-2 text-sky-100">
        {{ carousel.items[activeItemIndex].jobDescription }}
      </p>
    </blockquote>
    <!-- 
      positioning is in realtion to parent
      transform is in relation to itself
     -->
    <button
      class="bg-white border-none h-[40px] w-[40px] rounded-full absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 shadow-lg"
      @click="chevronRightClicked"
    >
      <ChevronRight
        class="text-sky-600 text-3xl flex content-center justify-center"
        size="40"
      />
    </button>
    <button
      class="bg-white border-none h-[40px] w-[40px] rounded-full absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-lg"
      @click="chevronLeftClicked"
    >
      <ChevronLeft
        class="text-sky-600 text-3xl flex content-center justify-center"
        size="40"
      />
    </button>
    <!-- Iterate over amount of slides! -->
    <div
      class="absolute flex gap-1 left-1/2 bottom-0 -translate-x-1/2 translate-y-[150%]"
    >
      <button
        v-for="(item, index) in carousel.items"
        :class="{
          'bg-sky-600': index === activeItemIndex,
          'bg-white': index !== activeItemIndex,
        }"
        class="h-[12px] w-[12px] border-2 border-sky-600 rounded-full"
        @click="buttonSelectorClicked(index)"
      >
        &nbsp;
      </button>
    </div>
  </div>
</template>
