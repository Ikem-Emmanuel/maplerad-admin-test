import Vue from "vue";

let requestConfig = {};

export default function ({ $axios, route, redirect, store }) {
  axios.onRequest((config) => {
    const token = localStorage.getItem("__otkenMp_");
    config.headers.Authorization = token;
    requestConfig = config;
  });

  axios.onResponse(() => {});

  axios.onError((error) => {
    if (!error.status) {
    }

    if (error.response.status === 403) {
      localStorage.clear();
      Vue.$toast.error("You dont have permission to perform this operation");
      window.location.href = "/";
      return;
    }

    if (error.response.status === 401) {
      localStorage.clear();
      Vue.$toast.error("You need to be loggedin to perform this operation");
      window.location.href = "/";
      return;
    }
  });
}
