import { createRouter, createWebHistory } from "vue-router";
import AcordionView from "../views/Accordion.vue";
import CarouselView from "../views/Carousel.vue";

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
    }
  ],
});

export default router;
