import { createStore } from "vuex";
import { notificationsApi } from "../mock/mockApi";

const store = createStore({
  state: {
    user: {
      userId: "eric",
      userName: "Eric",
      token: "token",
      image: require("../assets/logo.png")
    },
    notifications: []
  },
  getters: {
    notifications(state) {
      return state.notifications;
    },
    user(state) {
      return state.user;
    }
  },
  mutations: {
    SAVE_NOTIFICATIONS(state, notifications) {
      state.notifications = notifications;
    }
  },
  actions: {
    async fetchNotifications({ state, commit }) {
      const notifications = await notificationsApi(state.userToken);
      commit("SAVE_NOTIFICATIONS", notifications);
    }
  }
});

export default store;
