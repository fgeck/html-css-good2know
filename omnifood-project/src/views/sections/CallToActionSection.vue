<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CallToActionSection",
  components: {},
});
</script>

<template>
  <section class="mt-16">
    <div class="container">
      <div
        class="grid grid-cols-[2fr_1fr] bg-gradient-to-br from-brand2light to-brand shadow-md rounded-md overflow-hidden"
      >
        <!-- Form -->
        <div class="text-[#45260a] p-16 pt-8">
          <h2 class="text-4xl font-bold mb-4">Get your first meal for free!</h2>
          <p class="text-lg mb-12">
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And the first
            meal is on us!
          </p>
          <form action="" class="grid grid-cols-2 gap-x-8 gap-y-6">
            <div class="">
              <label for="full-name" class="block text-lg font-bold"
                >Full Name</label
              >
              <input
                class="w-[100%] p-2 border-none rounded-lg shadow-sm placeholder:text-[#aaa] focus:outline-brandVeryLight focus:outline-2"
                type="text"
                name=""
                id="full-name"
                placeholder="Jane Doe"
                required
                style="font-family: inherit"
              />
            </div>
            <div class="">
              <label for="email" class="block text-lg font-bold"
                >Email address</label
              >
              <input
                class="w-[100%] p-2 border-none rounded-lg shadow-sm placeholder:text-[#aaa] focus:outline-brandVeryLight"
                type="email"
                name=""
                id="email"
                placeholder="me@exaple.com"
                required
                style="font-family: inherit, color: inherit"
              />
            </div>
            <div class="">
              <label for="select-where" class="block text-lg font-bold"
                >Where did you hear from us?</label
              >
              <select
                name="select-where"
                id=""
                required
                class="block w-[100%] p-2 border-none rounded-lg shadow-sm placeholder:text-[#aaa] self-end focus:outline-brandVeryLight"
                style="font-family: inherit, color: inherit"
              >
                <option value="empty">Please choose one option:</option>
                <option value="friends">Friends and family</option>
                <option value="youtube">Youtube</option>
                <option value="postcast">Podcast</option>
                <option value="facebook">Faceboook</option>
                <option value="instagram">Instragram</option>
              </select>
            </div>
            <button
              class="w-[100%] mt-[1.5rem] border-none rounded-md bg-brown text-brandVeryLight font-bold hover:bg-white hover:text-grey focus:outline-brandVeryLight"
              style="font-family: inherit"
            >
              Sign up now
            </button>
          </form>
        </div>
        <!-- supporting Image -->
        <div
          style="
            background-image: linear-gradient(
                to right bottom,
                rgba(235, 151, 78, 0.35),
                rgba(230, 125, 34, 0.35)
              ),
              url('img/eating.jpg');
          "
          class="bg-cover bg-center"
          role="img"
          aria-label="Women enjoying food"
        ></div>
      </div>
    </div>
  </section>
</template>
