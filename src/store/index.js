import { createStore } from 'vuex';
import { friendsApi, notificationsApi, postsApi, storiesApi } from '../mock/mockApi';

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
    postModal: false,
    posts: [],
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
    postModal(state) {
      return state.postModal;
    },
    posts(state) {
      return state.posts;
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
    SHOW_POST_MODAL(state) {
      state.postModal = true;
    },
    HIDE_POST_MODAL(state) {
      state.postModal = false;
    },
    SAVE_POSTS(state, posts) {
      state.posts = posts;
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
    async fetchPosts({ state, commit }) {
      const stories = await postsApi(state.userToken);
      commit('SAVE_POSTS', stories);
    },
  },
});

export default store;
