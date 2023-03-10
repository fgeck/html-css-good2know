<script lang="ts">
import { defineComponent } from "vue";
import Testimonial from "../../components/Testimonial.vue";
import TestimonialGalleryImage from "../../components/TestimonialGalleryImage.vue";

export default defineComponent({
  name: "TestimonialsSection",
  components: { Testimonial, TestimonialGalleryImage },
  data() {
    return {
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  },
  methods: {
    buildImagePath(imageNumber: number): string {
      return `img/gallery/gallery-${imageNumber}.jpg`;
    },
  },
});
</script>

<template>
  <section class="bg-brandLight standard-section py-0 grid grid-cols-2 gap-12">
    <div class="py-24">
      <div class="">
        <span
          class="block text-2xl font-normal text-brandDark uppercase mb-4 tracking-wider"
          >Testimonials</span
        >
        <h2 class="text-4xl font-bold text-greyLight tracking-tight mb-24">
          Once you try t, you can't go back
        </h2>
      </div>

      <div class="grid grid-cols-2 gap-12 items-center mt-32">
        <Testimonial
          text="Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical."
          customerName="Dave Bryson"
          imagePath="img/customers/dave.jpg"
          imageAlt="Person Dave"
        />
        <Testimonial
          text="The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!"
          customerName="Ben Hadley"
          imagePath="img/customers/ben.jpg"
          imageAlt="Person Ben"
        />
        <Testimonial
          text="Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!"
          customerName="Steve Miller"
          imagePath="img/customers/steve.jpg"
          imageAlt="Person Steves"
        />
        <Testimonial
          text="I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic."
          customerName="Hannah Smith"
          imagePath="img/customers/hannah.jpg"
          imageAlt="Person Hannah"
        />
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4 py-4">
      <TestimonialGalleryImage
        v-for="imageNumber in images"
        :imagePath="buildImagePath(imageNumber)"
        imageAlt="Photo of beautifully arranged food"
      />
    </div>
  </section>
</template>
