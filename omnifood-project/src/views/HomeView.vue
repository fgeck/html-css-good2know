<script lang="ts">
import { defineComponent } from "vue";
import HeroActionButton from "../components/HeroActionButton.vue";
import HeroCustomerImage from "../components/HeroCustomerImage.vue";
import Header from "../components/Header.vue";
import HeroSection from "../components/HeroSection.vue";
import HowItWorksSection from "../components/HowItWorksSection.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeroActionButton,
    HeroCustomerImage,
    Header,
    HeroSection,
    HowItWorksSection,
  },
});
</script>

<template>
  <Header />
  <main>
    <HeroSection />
    <!-- How it works -->
    <HowItWorksSection />
  </main>
</template>
