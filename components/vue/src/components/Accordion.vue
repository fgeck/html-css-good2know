<script lang="ts">
import { defineComponent } from "vue";
import { Accordion, AccordionItem } from "@/models/Accordion";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";

export default defineComponent({
  name: "Accordion",
  components: { ChevronDown },
  methods: {
    chevronDownClicked(item: AccordionItem) {
      item.hidden = !item.hidden;
    },
  },
  data() {
    return {
      accordion: new Accordion([
        new AccordionItem(
          "FAQ Question 1",
          "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa iusto, mollitia molestiae odit qui ut deleniti maiores molestias accusantium quod esse magni magnam in delectus.",
          [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sit.",
          ],
          true
        ),
        new AccordionItem(
          "FAQ Question 2",
          "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa iusto, mollitia molestiae odit qui ut deleniti maiores molestias accusantium quod esse magni magnam in delectus.",
          [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sit.",
          ],
          false
        ),
        new AccordionItem(
          "FAQ Question 3",
          "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa iusto, mollitia molestiae odit qui ut deleniti maiores molestias accusantium quod esse magni magnam in delectus.",
          [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sit.",
          ],
          true
        ),
      ]),
    };
  },
});
</script>
<template>
  <div class="w-[700px] mx-auto my-[100px] flex flex-col gap-y-4">
    <div
      v-for="(item, index) in accordion.items"
      :class="{ 'border-4 rounded border-t-sky-600': !item.hidden }"
      class="shadow-md p-6 grid grid-cols-[auto,1fr,auto] gap-x-4 gap-y-6 items-center"
    >
      <!-- Heading of Accordion Item -->
      <p :class="{ 'text-sky-600': !item.hidden }" class="text-2xl font-bold">
        {{ index + 1 }}
      </p>
      <p :class="{ 'text-sky-600': !item.hidden }" class="text-2xl font-bold">
        {{ item.title }}
      </p>
      <ChevronDown
        :class="{ 'text-sky-600': !item.hidden }"
        class="text-2xl"
        @click="chevronDownClicked(item)"
      />
      <!-- hidden box -->
      <div v-show="!item.hidden" class="col-start-2">
        <p class="leading-relaxed mb-4">
          {{ item.description }}
        </p>
        <ul class="list-disc text-gray-500 ml-3 flex flex-col gap-y-1">
          <li v-for="point in item.bulletPoints">
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
