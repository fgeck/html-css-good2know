<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import EmailAppButton from "@/components/EmailAppButton.vue";
import FakeEmail from "@/components/FakeEmail.vue";

export default defineComponent({
  name: "SimpleLayoutView",
  components: { Navbar, EmailAppButton, FakeEmail },
});
</script>

<template>
  <header>
    <Navbar />
    <div
      class="text-center grid grid-cols-[80px_400px_1fr_250px] grid-rows-[80px_1fr] h-screen"
    >
      <nav class="bg-slate-600 row-[1_/_-1] py-2">Navigation</nav>
      <menu class="flex items-center gap-1 bg-sky-200 col-[2_/_-1] py-2 px-4">
        <EmailAppButton name="New" />
        <EmailAppButton name="Reply" />
        <EmailAppButton name="Forward" />
        <EmailAppButton name="Mark unread" />
        <EmailAppButton name="Trash" class="ml-auto bg-red-400" />
      </menu>
      <section
        class="flex flex-col gap-4 bg-slate-400 py-2 px-4 overflow-scroll"
      >
        <FakeEmail name="FakeEmail 1" />
        <FakeEmail name="FakeEmail 2" />
        <FakeEmail name="FakeEmail 3" />
        <FakeEmail name="FakeEmail 4" />
        <FakeEmail name="FakeEmail 5" />
        <FakeEmail name="FakeEmail 6" />
        <FakeEmail name="FakeEmail 7" />
        <FakeEmail name="FakeEmail 8" />
        <FakeEmail name="FakeEmail 9" />
        <FakeEmail name="FakeEmail 10" />
      </section>
      <main class="bg-slate-200 py-2">Email View</main>
      <aside class="bg-slate-400 py-2">Additional Information</aside>
    </div>
  </header>
</template>
