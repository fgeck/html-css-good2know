<script lang="ts">
import { defineComponent } from "vue";
import FeaturedInImage from "../../components/FeaturedInImage.vue";

export default defineComponent({
  name: "FeaturedInSection",
  components: { FeaturedInImage },
});
</script>

<template>
  <section class="standard-section pt-12 pb-8">
    <div class="container">
      <h2 class="text-greyDark text-xl text-center mb-6">As featured in</h2>
      <div class="flex justify-around">
        <FeaturedInImage imagePath="img/logos/techcrunch.png" />
        <FeaturedInImage imagePath="img/logos/business-insider.png" />
        <FeaturedInImage imagePath="img/logos/the-new-york-times.png" />
        <FeaturedInImage imagePath="img/logos/forbes.png" />
        <FeaturedInImage imagePath="img/logos/usa-today.png" />
      </div>
    </div>
  </section>
</template>
