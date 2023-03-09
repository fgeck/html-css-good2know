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
    attributes: {
      type: Array,
      default: [],
    },
    category: {
      type: String,
    },
  },
});
</script>

<template>
  <div>
    <img :src="imagePath" :alt="imageAlt" class="w-[100%]" />
    <p class="text-lg text-greyLight font-bold mb-8">{{ mealName }}</p>
    <ul class="flex flex-col gap-5 list-none">
      <!-- <li v-for="attribute in attributes" class="list-none">
        {{ attribute }}
      </li> -->
      <li class="">
        <FireIcon class="text-2xl" />
        <span>650 Calories</span>
      </li>
      <li>
        <SilverwareForkKnifeIcon class="text-2xl" />
        <span>123 Nutriscore</span>
      </li>
      <li>
        <StarIcon class="text-2l" />
        <span>4.7 (500)</span>
      </li>
    </ul>
  </div>
</template>
