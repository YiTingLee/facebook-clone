import { createStore } from 'vuex';
import { friendsApi, notificationsApi } from '../mock/mockApi';

const store = createStore({
  state: {
    user: {
      userId: 'eric',
      userName: 'Eric',
      token: 'token',
      image: require('../assets/logo.png'),
    },
    notifications: [],
    friends: [],
  },
  getters: {
    notifications(state) {
      return state.notifications;
    },
    user(state) {
      return state.user;
    },
    friends(state) {
      return state.friends;
    },
  },
  mutations: {
    SAVE_NOTIFICATIONS(state, notifications) {
      state.notifications = notifications;
    },
    SAVE_FRIENDS(state, friends) {
      state.friends = friends;
    },
  },
  actions: {
    async fetchNotifications({ state, commit }) {
      const notifications = await notificationsApi(state.userToken);
      commit('SAVE_NOTIFICATIONS', notifications);
    },
    async fetchFriends({ state, commit }) {
      const friends = await friendsApi(state.userToken);
      commit('SAVE_FRIENDS', friends);
    },
  },
});

export default store;
