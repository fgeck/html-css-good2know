<script lang="ts">
import { defineComponent } from "vue";
import MealCard from "../../components/MealCard.vue";
import CheckCircleOutlineIcon from "vue-material-design-icons/CheckCircleOutline.vue";

export default defineComponent({
  name: "MealsSection",
  components: { MealCard, CheckCircleOutlineIcon },
  data() {
    return {
      diets: [
        "Vegan",
        "Pescatarian",
        "Gluten-free",
        "Lactose-free",
        "Keto",
        "Paleo",
        "Low FODMAP",
        "Kid-friendly",
      ],
    };
  },
});
</script>

<template>
  <section class="standard-section">
    <div class="container text-center">
      <span
        class="block text-2xl font-normal text-brandDark uppercase mb-4 tracking-wider"
        >Meals</span
      >
      <h2 class="text-4xl font-bold text-greyLight tracking-tight mb-24">
        Omnifood AI chooses from 5,000+ recipes
      </h2>
    </div>
    <div class="container grid grid-cols-3 gap-x-8 mb-12">
      <MealCard
        imagePath="img/meals/meal-1.jpg"
        imageAlt="Japanese Gyozas"
        mealName="Japanese Gyozas"
        :categories="['vegetarian']"
        calories="650"
        score="75"
        rating="4.9"
        reviews="537"
      />
      <MealCard
        imagePath="img/meals/meal-2.jpg"
        imageAlt="Avocado Salad"
        mealName="Avocado Salad"
        :categories="['vegan', 'paleo']"
        calories="400"
        score="92"
        rating="4.8"
        reviews="441"
      />
      <!-- list of diets -->
      <div>
        <h3 class="text-2xl font-semibold mb-4 text-center">
          Works with any diet:
        </h3>
        <ul class="list-none flex flex-col gap-12 items-center">
          <div class="flex flex-col gap-2 mt-4">
            <li v-for="diet in diets" class="flex gap-4 items-center my-1">
              <CheckCircleOutlineIcon :size="32" fillColor="#e67e22" />
              <span>{{ diet }}</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <div class="container flex justify-center">
      <RouterLink
        to="all"
        class="inline-block text-lg text-brand border-b-2 border-current hover:text-brandDark active:text-brandDark hover:border-transparent transition-color duration-300"
        >See all recipes &rarr;</RouterLink
      >
    </div>
  </section>
</template>
