import { createRouter, createWebHistory } from "vue-router";
import HeroView from "../views/HeroView.vue";
import AcordionView from "../views/Accordion.vue";
import CarouselView from "../views/Carousel.vue";
import TableView from "../views/Table.vue";
import PaginationView from "../views/PaginationView.vue";
import SimpleLayoutView from "../views/EmailAppLayoutView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/hero",
      name: "Hero",
      component: HeroView,
    },
    {
      path: "/simpleLayout",
      name: "SimpleLayout",
      component: SimpleLayoutView,
    },
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
    {
      path: "/pagination",
      name: "pagination",
      component: PaginationView,
    },
  ],
});

export default router;
