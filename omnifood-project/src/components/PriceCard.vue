<script lang="ts">
import { defineComponent } from "vue";
import CheckCircleOutlineIcon from "vue-material-design-icons/CheckCircleOutline.vue";
import HeroActionButton from "./HeroActionButton.vue";

export default defineComponent({
  name: "PriceCard",
  components: { CheckCircleOutlineIcon, HeroActionButton },
  props: {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    text: {
      type: String,
    },
    features: {
      type: Array,
      default: [],
    },
  },
});
</script>

<template>
  <div>
    <header class="text-center mb-12">
      <p class="text-2xl text-brandDark text-bold uppercase mb-6">{{ name }}</p>
      <p class="text-6xl text-bold mb-4">
        <span class="text-2xl mr-2">$</span>{{ price }}
      </p>
      <p class="text-greyLight2">{{ text }}</p>
    </header>
    <ul class="list-none flex flex-col gap-12 items-center">
      <div class="flex flex-col gap-2 mt-4">
        <li v-for="feature in features" class="flex gap-4 items-center my-1">
          <CheckCircleOutlineIcon :size="32" fillColor="#e67e22" />
          <span>{{ feature }}</span>
        </li>
      </div>
    </ul>
    <div class="text-center mt-8">
      <HeroActionButton
        class="transition-color duration-300 bg-brand text-white hover:bg-brandDark mr-4"
        name="Start eating well"
      />
    </div>
  </div>
</template>
