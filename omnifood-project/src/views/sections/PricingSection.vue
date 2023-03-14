<script lang="ts">
import { defineComponent } from "vue";
import PriceCard from "../../components/PriceCard.vue";
import FeatureItem from "../../components/FeatureItem.vue";
import InfinityIcon from "vue-material-design-icons/Infinity.vue";
import PauseIcon from "vue-material-design-icons/Pause.vue";
import LeafIcon from "vue-material-design-icons/Leaf.vue";
import FlowerIcon from "vue-material-design-icons/Flower.vue";

export default defineComponent({
  name: "PricingSection",
  components: {
    PriceCard,
    FeatureItem,
    InfinityIcon,
    PauseIcon,
    LeafIcon,
    FlowerIcon,
  },
});
</script>

<template>
  <section>
    <div class="container">
      <div class="container">
        <span
          class="block text-2xl font-normal text-brandDark uppercase mb-4 tracking-wider"
          >Pricing</span
        >
        <h2 class="text-4xl font-bold text-greyLight tracking-tight mb-24">
          Eating well without breaking the bank
        </h2>
      </div>

      <div class="grid grid-cols-2 gap-16 justify-items-center">
        <PriceCard
          name="Starter"
          :price="399"
          text="per month. That's just $13 per meal!"
          :features="[
            '1 meal per day',
            'Order from 11am to 9pm',
            'Delivery is free',
          ]"
          class="justify-self-end border-2"
        />

        <PriceCard
          name="Complete"
          :price="649"
          text="per month. That's just $54 per meal!"
          :features="[
            '2 meals per day',
            'Order 24/7',
            'Delivery is free',
            'Get access to latest recipes',
          ]"
          class="bg-brandVeryLight justify-self-start border-2 border-brandVeryLight relative after:content-['Best_Value'] after:absolute after:top-[5%] after:right-[-8%] after:uppercase after:text-lg after:font-semibold after:bg-yellow after:py-1 after:px-6 after:rotate-45 overflow-hidden"
        />
      </div>
    </div>
    <div class="container mb-16">
      <aside class="text-xl text-center">
        Prices include all applicable taxes. You can cancel at any time. Both
        plans include the following:
      </aside>
    </div>
  </section>
</template>
