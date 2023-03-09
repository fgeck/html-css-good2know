<script lang="ts">
import { defineComponent } from "vue";
import HeroActionButton from "./HeroActionButton.vue";
import HeroCustomerImage from "./HeroCustomerImage.vue";

export default defineComponent({
  name: "HeroSection",
  components: { HeroActionButton, HeroCustomerImage },
});
</script>

<template>
  <section class="bg-brandVeryLight standard-section">
    <!-- grid container for both elements -->
    <div class="grid grid-cols-2 items-center gap-8 container">
      <!-- hero text box -->
      <div>
        <h1 class="text-6xl font-bold text-greyLight tracking-tight mb-6">
          A healthy meal delivered to your door, every single day
        </h1>
        <!-- hero description -->
        <p class="text-xl font-normal leading-6 mb-8">
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </p>
        <HeroActionButton
          class="transition-color duration-300 bg-brand text-white hover:bg-brandDark mr-4"
          name="Start eating well"
        >
        </HeroActionButton>
        <!-- add border inside a button via shadow -->
        <HeroActionButton
          class="transition-color duration-300 bg-white text-grey hover:bg-brandVeryLight hover:shadow-[inset_0_0_0_3px_#fff]"
          name="Learn more &darr;"
        ></HeroActionButton>

        <div class="mt-20 flex gap-4 items-center">
          <div class="flex">
            <HeroCustomerImage
              image="img/customers/customer-1.jpg"
              class="-mr-4"
            />
            <HeroCustomerImage
              image="img/customers/customer-2.jpg"
              class="-mr-4"
            />
            <HeroCustomerImage
              image="img/customers/customer-3.jpg"
              class="-mr-4"
            />
            <HeroCustomerImage
              image="img/customers/customer-4.jpg"
              class="-mr-4"
            />
            <HeroCustomerImage
              image="img/customers/customer-5.jpg"
              class="-mr-4"
            />
            <HeroCustomerImage image="img/customers/customer-6.jpg" />
          </div>
          <p class="text-lg font-semibold">
            <span class="text-brandDark">250,000+</span> meals delivered last
            year!
          </p>
        </div>
      </div>
      <!-- hero image box -->
      <div>
        <img
          src="img/hero.png"
          alt="Woman enjoying food, meals in storage container, and food bowls on a table"
          class="w-full"
        />
      </div>
    </div>
  </section>
</template>
