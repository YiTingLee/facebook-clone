import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faBell,
  faComment,
  faFlag,
  faGamepad,
  faHome,
  faPlayCircle,
  faSearch,
  faSortDown,
  faStoreAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(faFacebook);
library.add(faSearch);
library.add(faBars);
library.add(faComment);
library.add(faBell);
library.add(faSortDown);
library.add(faHome);
library.add(faFlag);
library.add(faPlayCircle);
library.add(faStoreAlt);
library.add(faGamepad);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
