import { createRouter, createWebHistory } from "vue-router";
import AcordionView from "../views/Accordion.vue";
import CarouselView from "../views/Carousel.vue";
import TableView from "../views/Table.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/accordion",
      name: "Acordion",
      component: AcordionView,
    },
    {
      path: "/carousel",
      name: "carousel",
      component: CarouselView,
    },
    {
      path: "/table",
      name: "table",
      component: TableView,
    },
  ],
});

export default router;
