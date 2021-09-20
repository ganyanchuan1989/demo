import Vue from "vue";
import Vuex from "vuex";
import counter from "./counter";
import { CHANGE_APP_INFO } from "./mutationsType";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appId: "app-id-xxx",
    appDesc: "app desc",
  },
  getters: {
    appInfo: (state) => {
      return `${state.appId}_${state.appDesc}`;
    },
  },
  mutations: {
    [CHANGE_APP_INFO]: (state, appId, appDesc) => {
      state.appId = appId;
      state.appDesc = appDesc;
    },
  },
  actions: {},
  modules: {
    counter,
  },
});
