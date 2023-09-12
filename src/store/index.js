import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarOpen: false,
    isLoggedIn: false,
    userEmail: "",
    accessToken:
      typeof window !== "undefined" ? localStorage.getItem("__otkenMp_") : null,
  },
  getters: {
    sideBarOpen: (state) => {
      return state.sideBarOpen;
    },
    getAccessToken(state) {
      return state.accessToken;
    },
    getLoggedInStatus: (state) => {
      return state.isLoggedIn;
    },
    getUserEmail: (state) => {
      return state.userEmail;
    },
  },
  mutations: {
    toggleSidebar(state) {
      state.sideBarOpen = !state.sideBarOpen;
    },
    updateAccessToken: (state, payload) => {
      state.accessToken = payload;
      localStorage.setItem("__otkenMp_", payload);
    },
    updateLoggedInStatus: (state, payload) => {
      state.isLoggedIn = payload;
    },
    updateUserEmail: (state, payload) => {
      state.userEmail = payload;
    },
  },
  actions: {
    toggleSidebar(context) {
      context.commit("toggleSidebar");
    },
    // eslint-disable-next-line
    login({}, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/auth/login", payload)
          .then((response) => {
            resolve(response);
          })
          .catch((response) => {
            reject(response);
          });
      });
    },
    verifyOtp({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/auth/verify-otp", payload)
          .then((response) => {
            commit("updateAccessToken", response.headers.authorization);

            resolve(response);
          })
          .catch((response) => {
            reject(response);
          });
      });
    },
    setUserEmail({ commit }, payload) {
      commit("updateUserEmail", payload);
    },
    updateLoggedInState({ commit }, payload) {
      commit("updateLoggedInStatus", payload); // Correct mutation name
    },
    logout({ commit }) {
      commit("updateLoggedInStatus", false);
    },
  },
});
