import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
// Import component
import LoadingIcon from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueAxios, axios);
app.component("LoadingIcon", LoadingIcon);
app.mount("#app");
