import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "vue-material-design-icons/styles.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
