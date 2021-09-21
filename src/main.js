import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faBell,
  faCalendarAlt,
  faCameraRetro,
  faClinicMedical,
  faCloud,
  faComment,
  faFlag,
  faGamepad,
  faHome,
  faPlayCircle,
  faPoll,
  faSchool,
  faSearch,
  faSortDown,
  faStar,
  faStoreAlt,
  faSuitcase,
  faTags,
  faTint,
  faUserFriends,
  faUsers,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import store from "./store";

library.add(
  faFacebook,
  faSearch,
  faBars,
  faComment,
  faBell,
  faSortDown,
  faSortDown,
  faHome,
  faFlag,
  faPlayCircle,
  faStoreAlt,
  faGamepad,
  faUserFriends,
  faStar,
  faClinicMedical,
  faUsers,
  faVideo,
  faPoll,
  faTint,
  faSchool,
  faCalendarAlt,
  faSuitcase,
  faCloud,
  faCameraRetro,
  faTags
);

createApp(App)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
