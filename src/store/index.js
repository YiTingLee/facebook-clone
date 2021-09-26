import { createStore } from 'vuex';
import { friendsApi, notificationsApi, storiesApi } from '../mock/mockApi';

const store = createStore({
  state: {
    user: {
      userId: 'eric',
      userName: 'Eric',
      token: 'token',
      image: require('../assets/person.png'),
    },
    notifications: [],
    friends: [],
    stories: [],
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
    stories(state) {
      return state.stories;
    },
  },
  mutations: {
    SAVE_NOTIFICATIONS(state, notifications) {
      state.notifications = notifications;
    },
    SAVE_FRIENDS(state, friends) {
      state.friends = friends;
    },
    SAVE_STORIES(state, stories) {
      state.stories = stories;
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
    async fetchStories({ state, commit }) {
      const stories = await storiesApi(state.userToken);
      stories.unshift({ id: -1, image: require('../assets/person.png'), hasAddFunction: true });
      commit('SAVE_STORIES', stories);
    },
  },
});

export default store;
