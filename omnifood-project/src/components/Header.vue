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
    <img src="img/omnifood-logo.png" alt="omnifood logo" class="h-5" />
    <nav class="">
      <ul class="flex gap-8 list-none text-greyLight text-lg font-normal">
        <NavItem to="/test" name="Test" />
        <NavItem to="/Home" name="Home" />
        <NavItem to="/Home" name="Home" />
        <NavItem
          to="/Home"
          name="Home"
          class="bg-brand text-white inline-block rounded-md hover:text-white"
        />
      </ul>
    </nav>
  </header>
</template>
