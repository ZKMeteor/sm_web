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
import { currency } from "./methods/filters";
import "animate.css";
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import * as AllRules from "@vee-validate/rules"; // 导入所有规则
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
import $httpMessage from "@/methods/pushMessage";

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale("zh_TW");
const app = createApp(App);
app.config.globalProperties.$filters = {
  currency,
};
app.config.globalProperties.$httpMessage = $httpMessage;
app.component("ForM", Form);
app.component("FielD", Field);
app.component("ErrorMessage", ErrorMessage);
app.use(store);
app.use(router);
app.use(VueAxios, axios);
app.component("LoadingIcon", LoadingIcon);
app.mount("#app");
