<script lang="ts">
import { defineComponent } from "vue";
import HeroActionButton from "../components/HeroActionButton.vue";
import HeroCustomerImage from "../components/HeroCustomerImage.vue";
import Header from "../components/Header.vue";
import HeroSection from "./sections/HeroSection.vue";
import HowItWorksSection from "./sections/HowItWorksSection.vue";
import FeaturedInSection from "./sections/FeaturedInSection.vue";
import MealsSection from "./sections/MealsSection.vue";
import TestimonialsSection from "./sections/TestimonialsSection.vue";
import PricingSection from "./sections/PricingSection.vue";
import FeaturesSection from "./sections/FeaturesSection.vue";
import CallToActionSection from "./sections/CallToActionSection.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeroActionButton,
    HeroCustomerImage,
    Header,
    HeroSection,
    HowItWorksSection,
    FeaturedInSection,
    MealsSection,
    TestimonialsSection,
    PricingSection,
    FeaturesSection,
    CallToActionSection,
  },
});
</script>

<template>
  <Header />
  <main>
    <HeroSection />
    <FeaturedInSection />
    <HowItWorksSection />
    <MealsSection />
    <TestimonialsSection />
    <PricingSection />
    <FeaturesSection />
    <CallToActionSection />
  </main>
</template>
