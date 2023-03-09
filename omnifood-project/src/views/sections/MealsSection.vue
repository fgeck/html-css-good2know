<script lang="ts">
import { defineComponent } from "vue";
import MealCard from "../../components/MealCard.vue";

export default defineComponent({
  name: "MealsSection",
  components: { MealCard },
});
</script>

<template>
  <section class="standard-section">
    <div class="container">
      <span
        class="block text-2xl font-normal text-brandDark uppercase mb-4 tracking-wider"
        >Meals</span
      >
      <h2 class="text-4xl font-bold text-greyLight tracking-tight mb-24">
        Omnifood AI chooses from 5,000+ recipes
      </h2>
    </div>
    <div class="container grid grid-cols-3">
      <MealCard
        imagePath="img/meals/meal-1.jpg"
        imageAlt="Japanese Gyozas"
        mealName="Japanese Gyozas"
        category="vegetarian"
        :attributes="[
          '650 Calories',
          'Nutriscore &reg; 75',
          '4.9 rating (537)',
        ]"
      />
    </div>
  </section>
</template>
