<script lang="ts">
import { defineComponent } from "vue";
import PriceCard from "../../components/PriceCard.vue";

export default defineComponent({
  name: "PricingSection",
  components: { PriceCard },
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

      <div class="grid grid-cols-2 gap-2">
        <PriceCard
          name="Starter"
          :price="399"
          text="per month. That's just $13 per meal!"
          :features="[
            '1 meal per day',
            'Order times are between 11am and 9pm',
            'Delivery is free',
          ]"
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
        />
      </div>
    </div>
  </section>
</template>
