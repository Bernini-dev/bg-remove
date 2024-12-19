import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faXmark,
  faHouse,
  faCloudDownloadAlt,
  faCloudUploadAlt,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import App from "./App.vue";

const app = createApp(App);

library.add(
  faXmark,
  faHouse,
  faCloudDownloadAlt,
  faCloudUploadAlt,
  faSun,
  faMoon
);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
