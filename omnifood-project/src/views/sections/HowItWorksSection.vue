<script lang="ts">
import { defineComponent } from "vue";
import CStyleItem from "../../components/CStyleItem.vue";

export default defineComponent({
  name: "HowItWorksSection",
  components: { CStyleItem },
});
</script>

<template>
  <section class="standard-section">
    <div class="container">
      <span
        class="block text-2xl font-normal text-brandDark uppercase mb-4 tracking-wider"
        >How it works</span
      >
      <h2 class="text-4xl font-bold text-greyLight tracking-tight mb-24">
        Your daily dose of health in 3 simple steps
      </h2>
    </div>
    <CStyleItem
      stepNumber="01"
      :image-first="false"
      heading="Tell us what you like (and what not)"
      description="Never again waste time thinking about what to eat! Omnifood AI will
        create a 100% personalized weekly meal plan just for you. It makes
        sure you get all the nutrients and vitamins you need, no matter what
        diet you follow!"
      imagePath="img/app/app-screen-1.png"
      imageAlt="iphone app preferences selection screen"
    />
    <CStyleItem
      stepNumber="02"
      heading="Approve your weekly meal plan"
      description="Once per week, approve the meal plan generated for you by Omnifood AI.
          You can change ingredients, swap entire meals, or even add your own
          recipes."
      imagePath="img/app/app-screen-2.png"
      imageAlt="iphone app meal approval screen"
    />
    <CStyleItem
      stepNumber="03"
      :image-first="false"
      heading="Receive meals at convenient time"
      description="Best chefs in town will cook your selected meal every day, and we will
          deliver it to your door whenever works best for you. You can change
          delivery schedule and address daily!"
      imagePath="img/app/app-screen-3.png"
      imageAlt="iphone app delivery screen"
    />
  </section>
</template>
