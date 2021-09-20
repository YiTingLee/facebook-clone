import { createStore } from "vuex";
import { notificationsApi } from "../mock/mockApi";

const store = createStore({
  state: {
    notifications: []
  },
  getters: {
    notifications(state) {
      return state.notifications;
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
