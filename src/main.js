import { createApp } from "vue";
import "./assets/styles/global.css";
import router from "./router";
import App from "./App.vue";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
