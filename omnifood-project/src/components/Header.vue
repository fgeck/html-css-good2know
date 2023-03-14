<script lang="ts">
import { defineComponent } from "vue";
import NavItem from "./NavItem.vue";

export default defineComponent({
  name: "Header",
  components: { NavItem },
});
</script>

<template>
  <header
    class="flex justify-between items-center bg-brandVeryLight h-24 px-12"
  >
    <a href="#">
      <img src="img/omnifood-logo.png" alt="omnifood logo" class="h-5" />
    </a>
    <nav class="">
      <ul class="flex gap-2 list-none text-greyLight text-lg font-normal">
        <NavItem to="/" name="Home" class="py-2 px-4" />
        <NavItem to="/how" name="How it works" class="py-2 px-4" />
        <NavItem to="/meals" name="Meals" class="py-2 px-4" />
        <NavItem to="/testimonials" name="Testimonials" class="py-2 px-4" />
        <NavItem to="/pricing" name="Pricing" class="py-2 px-4" />
        <NavItem to="/try" name="Try For Free" class="py-2 px-4" />
      </ul>
    </nav>
  </header>
</template>
