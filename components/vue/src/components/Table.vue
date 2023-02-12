<script lang="ts">
import { Table } from "@/models/Table";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Table",
  data() {
    return {
      table: new Table([
        ["Name", "Sports", "Location", "Travel Radius in km"],
        ["John Doe", "Kitesurfing, Wingfoiling", "Capetown", "100"],
        ["Jane Joe", "Waveriding", "Langebaan", "150"],
      ]),
    };
  },
});
</script>

<template>
  <table class="mx-auto my-[100px] w-[800px]">
    <thead>
      <tr
        v-for="item in table.rows.slice(0, 1)"
        class="bg-sky-600 text-white text-left text-lg"
      >
        <th v-for="entry in item" class="w-1/4">{{ entry }}</th>
      </tr>
    </thead>

    <tbody
      class="[&>*:nth-child(odd)]:bg-gray-100 [&>*:nth-child(even)]:bg-gray-300"
    >
      <tr v-for="item in table.rows.slice(1)">
        <td v-for="entry in item">{{ entry }}</td>
      </tr>
    </tbody>
  </table>
</template>
