<script lang="ts">
import { defineComponent } from "vue";
import FeatureItem from "../../components/FeatureItem.vue";
import InfinityIcon from "vue-material-design-icons/Infinity.vue";
import PauseIcon from "vue-material-design-icons/Pause.vue";
import LeafIcon from "vue-material-design-icons/Leaf.vue";
import FlowerIcon from "vue-material-design-icons/Flower.vue";

export default defineComponent({
  name: "FeaturesSection",
  components: {
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
    <div class="container grid grid-cols-4">
      <FeatureItem
        title="Never cook again!"
        text="Our subscriptions cover 365 days per year, even including major holidays."
      >
        <InfinityIcon fillColor="#e67e22" :size="32" />
      </FeatureItem>
      <FeatureItem
        title="Local and organic"
        text="Our cooks only use local, fresh, and organic products to prepare your meals."
      >
        <FlowerIcon fillColor="#e67e22" :size="32" />
      </FeatureItem>
      <FeatureItem
        title="No waste"
        text="All our partners only use reusable containers to package all your meals."
      >
        <LeafIcon fillColor="#e67e22" :size="32" />
      </FeatureItem>
      <FeatureItem
        title="Pause anytime"
        text="Going on vacation? Just pause your subscription, and we refund unused days."
      >
        <PauseIcon fillColor="#e67e22" :size="32" />
      </FeatureItem>
    </div>
  </section>
</template>
