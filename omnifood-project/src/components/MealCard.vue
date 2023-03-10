<script lang="ts">
import { defineComponent } from "vue";
import FireIcon from "vue-material-design-icons/Fire.vue";
import SilverwareForkKnifeIcon from "vue-material-design-icons/SilverwareForkKnife.vue";
import StarIcon from "vue-material-design-icons/Star.vue";

export default defineComponent({
  name: "MealCard",
  components: { FireIcon, SilverwareForkKnifeIcon, StarIcon },
  props: {
    imagePath: {
      type: String,
    },
    imageAlt: {
      type: String,
    },
    mealName: {
      type: String,
    },
    calories: {
      type: String,
    },
    score: {
      type: String,
    },
    rating: {
      type: String,
    },
    reviews: {
      type: String,
    },
    categories: {
      type: Array,
      default: [],
    },
  },
});
</script>

<template>
  <div
    class="shadow-md rounded-lg overflow-hidden hover:-translate-y-4 hover:shadow-xl transition-all duration-300"
  >
    <img :src="imagePath" :alt="imageAlt" class="w-[100%]" />
    <div class="p-4">
      <div class="flex gap-1">
        <div class="my-2 inline-block">
          <span
            v-if="categories.includes('vegetarian')"
            class="text-sm bg-green text-grey rounded-lg px-2 py-1 uppercase"
            >Vegetarian</span
          >
        </div>
        <div class="my-2 inline-block">
          <span
            v-if="categories.includes('paleo')"
            class="text-sm bg-yellow text-grey rounded-lg px-2 py-1 uppercase"
            >Paleo</span
          >
        </div>
        <div class="my-2 inline-block">
          <span
            v-if="categories.includes('vegan')"
            class="text-sm bg-lime text-grey rounded-lg px-2 py-1 uppercase"
            >Vegan</span
          >
        </div>
        <div class="my-2 inline-block">
          <span v-if="categories.includes('pescatarian')">Pescatarian</span>
        </div>
        <div class="my-2 inline-block">
          <span v-if="categories.includes('gluten-free')">Gluten-free</span>
        </div>
        <div class="my-2 inline-block">
          <span v-if="categories.includes('lactose-free')">Lactose-free</span>
        </div>
        <div class="my-2 inline-block">
          <span v-if="categories.includes('keto')">Keto</span>
        </div>
        <div class="my-2 inline-block">
          <span v-if="categories.includes('low-fodmap')">Low FODMAP</span>
        </div>
        <div class="my-2 inline-block">
          <span v-if="categories.includes('kid-friendly')">Kid-friendly</span>
        </div>
      </div>
      <p class="text-lg text-greyLight font-bold mb-8">{{ mealName }}</p>
      <ul class="flex flex-col gap-5 list-none">
        <li class="flex items-center gap-4">
          <FireIcon :size="32" fillColor="#e67e22" />
          <span class="inline-block"
            ><strong>{{ calories }}</strong> Calories</span
          >
        </li>
        <li class="flex items-center gap-4">
          <SilverwareForkKnifeIcon :size="32" fillColor="#e67e22" />
          <span>{{ score }} Nutriscore</span>
        </li>
        <li class="flex items-center gap-4">
          <StarIcon :size="32" fillColor="#e67e22" />
          <span>{{ rating }} ({{ reviews }})</span>
        </li>
      </ul>
    </div>
  </div>
</template>
