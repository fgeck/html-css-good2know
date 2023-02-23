<script lang="ts">
import { defineComponent } from "vue";
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "HeroView",
  components: { Hero, Navbar },
});
</script>

<template>
  <header class="relative h-screen bg-hero bg-cover">
    <Navbar class="text-white" />
    <div
      class="mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div class="w-1/2 text-white">
        <h1 class="text-4xl font-bold my-[32px]">
          A healthy meal delivered to your door, every single day
        </h1>
        <p class="text-xl">
          The smart 365-days per year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutrinional needs.
        </p>
        <button
          class="text-2xl font-semibold bg-sky-600 text-white rounded-md inline-block py-2 px-4 mt-4"
        >
          register now
        </button>
      </div>
    </div>
  </header>
  <section>
    <div class="p-[96px] h-screen">
      <h2 class="text-3xl mb-[48px]">Some random heading</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem facilis
        eveniet eligendi illo animi aut dolores tenetur aliquid, sequi nisi
        accusamus perferendis voluptates iusto sapiente quas non ad quam nemo.
      </p>
    </div>
  </section>
</template>
