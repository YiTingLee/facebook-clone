import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBars, faBell, faComment, faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";

library.add(faFacebook);
library.add(faSearch);
library.add(faBars);
library.add(faComment)
library.add(faBell)
library.add(faSortDown)

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
