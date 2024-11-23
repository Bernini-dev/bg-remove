import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faXmark,
  faHouse,
  faCloudDownloadAlt,
  faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

library.add(faXmark, faHouse, faCloudDownloadAlt, faCloudUploadAlt);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia);

app.mount("#app");
